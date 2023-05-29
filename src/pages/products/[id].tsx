import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Product(){

    const { query } = useRouter();
    return(
        <ProductContainer>
            <ImageContainer>
                {/* <Image src={}/> */}
            </ImageContainer>

            <ProductDetails>
                <h1>Cmaiseta X</h1>
                <span>R$ 79,90</span>

                <p></p>
            </ProductDetails>
        </ProductContainer>
    )
}