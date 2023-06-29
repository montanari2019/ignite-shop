import { stripe } from "@/lib/stripe";
import { deleteChat } from "@/redux/redux-toolkit/redux-slice";
import { ImageContainer, ImageContainerAbsolute, SuccessContainer } from "@/styles/pages/sucess";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Stripe from "stripe";

interface SuccesProps {
  customerName: string;
  quantity: number
  product: {
    name: string;
    id:string,
    images: [string];
  }[];
}

export default function Success({ customerName, product, quantity }: SuccesProps) {

  const dispatch = useDispatch()

  if(product.length > 0){
    dispatch(deleteChat())

  }

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra Efetuada !</h1>

      
        <ImageContainerAbsolute>
       {
        product.map((index)=>{
            return (
                <ImageContainer key={index.id}>
                <Image src={index.images[0]} alt="" width={120} height={110} />
              </ImageContainer>
            )
        })
       }
        </ImageContainerAbsolute>


        <p>
        Uhuul <strong style={{textTransform: 'capitalize'}}>{customerName}</strong>, sua compra de {quantity} camisetas já está a caminho da sua casa. 
          
        </p>

        <Link href="">Voltar ao catalogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);

  const request = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });
  var customerName = request.customer_details?.name

  const firstName = request.customer_details?.name?.split(' ')[0]
  const lastName = request.customer_details?.name?.split(' ')[request.customer_details?.name?.split(' ').length - 1]
  const newProduct = request.line_items?.data as Stripe.LineItem[];

  customerName = `${firstName?.toLocaleLowerCase()} ${lastName?.toLocaleLowerCase()}` 

  const Newproduct: any[] = newProduct.map((index) => {
    return {
      product: index.price?.product,
    };
  })

  const product = Newproduct.map(item => item.product)


  const quantity =
    newProduct.length > 0
      ? newProduct.reduce(
          (acumulador, element) =>
            acumulador + (element.quantity !== null ? element.quantity : 0),
          0
        )
      : 0;


  return {
    props: {
      customerName,
      quantity,
      product,
    },
  };
};
