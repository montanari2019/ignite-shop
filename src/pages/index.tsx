import { FooterHome, HomeContainer, LogoCarrinho, Product } from "@/styles/pages/home";
import Image from "next/image";
import Head from "next/head";
import { stripe } from "@/lib/stripe";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from "next";
import logoCarrinho from "../assets/logo-carrinho.svg";
import Stripe from "stripe";
import Link from "next/link";

interface HomeProps {
  products: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: string;
    priceId: string
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3.1,
      spacing: 48,
    },
  });

  return (
    <>
    <Head><title>Home | Ignite Shop</title></Head>
    <HomeContainer ref={sliderRef} className="keen-slider">
      
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id} prefetch={false}>
          <Product className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />
            <FooterHome>
              <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>

              </div>

              <div>
              <LogoCarrinho>
                <Image src={logoCarrinho} alt="" width={24} height={24} />
                </LogoCarrinho>
              </div>
            </FooterHome>
          </Product>
        </Link>
      ))}
    </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format((price.unit_amount ? price.unit_amount : 0) / 100),
      priceId: price.id,
    };
  });

  // console.log(response.data);

  return {
    props: {
      products,
    },
  };
};
