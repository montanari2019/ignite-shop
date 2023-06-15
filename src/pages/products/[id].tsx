
import { stripe } from "@/lib/stripe";
import { useReduxSelector } from "@/redux/store/hoook";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Stripe from "stripe";

import { pushProduct } from "../../redux/redux-toolkit/redux-slice"
import SnackBarMUI from "@/componets/snakebar";
import { priceFromatter } from "@/utils/formatter";

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {

  const { products } = useReduxSelector((state) => state.shopLoad)
  const { isFallback } = useRouter();
  const dispatch = useDispatch()

  const [sessionRedirect, setSessionRedirect] = useState(false);

  const [snackBarStatus, setSnackBarStatus] = useState(false)
  

  async function handleChekout(){
    try{
      console.log(product.defaultPriceId)
      setSessionRedirect(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      console.log("Url de redirecionamento",response.data)
      
      const { checkoutSession } = response.data
      
      window.location.href = checkoutSession 
      
    }catch(err){
      setSessionRedirect(false)
      alert("Falha ao redirecionar ao chekout");
    }
    console.log(product.defaultPriceId)
  }

  function addProduct(){
    dispatch(pushProduct(product))
    setSnackBarStatus(true)

    setTimeout(()=>{
      	setSnackBarStatus(false)
    }, 3000)

  }

  if (isFallback) {
    console.log("IsFALLBAK")
    return <h1>...Loading</h1>;
  }

  
  return (
    <>
     <SnackBarMUI color={"#00b37e"} message={"Item adicionado ao carrinho"} open={snackBarStatus} onClose={() => setSnackBarStatus(false) }/>
    <Head><title>{product.name} Ignite Shop</title></Head>


    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt="" width={520} height={480} />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{priceFromatter.format(product.price)}</span>

        <p>{product.description}</p>

        <button disabled={sessionRedirect} onClick={addProduct} type="button">Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_NiHNNLq8Mn9sNp" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id ? params.id : "";

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: ((price.unit_amount ? price.unit_amount : 0) / 100),
        defaultPriceId: price.id
      },
    },
    revalidate: 60 * 60 * 1, // 1 hora
  };
};
