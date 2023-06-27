import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/sucess";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccesProps{
    customerName: string,
    product:{
        name: string,
        imageUrl: string
    }
}

export default function Success({ customerName, product }: SuccesProps){
    return(
        <>
        <Head>
            <title>Compra efetuada | Ignite Shop</title>

            <meta name="robots" content="noindex"/>
        
        </Head>
        <SuccessContainer>
            <h1>Compra Efetuada !</h1>

            <ImageContainer>
                <Image src={product.imageUrl} alt="" width={120} height={110}/>

                
            </ImageContainer>

            <p>Uhull <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa </p>


            <Link href="" >
            Voltar ao catalogo
            </Link>
        </SuccessContainer>
        </>
       
        
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {


    if(!query.session_id) {
        return{
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }
    const sessionId = String(query.session_id)

    const request = await stripe.checkout.sessions.retrieve(sessionId,{
        expand: ['line_items', 'line_items.data.price.product']
        
    })


    const customerName =  request.customer_details?.name

    const product = request.line_items?.data[0].price?.product as Stripe.Product

    console.log(request.line_items?.data)



    return {
        props: {
            customerName,
            product:{
                name: product.name,
                imageUrl: product.images[0]
            }
        }
    }
}