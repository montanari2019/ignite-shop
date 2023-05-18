import { CAMISETAS } from "@/assets/camiseta/utils";
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 3.1,
      spacing: 48,
    }
  }) 


  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={CAMISETAS[0].url} width={520} height={520} alt="" />

        <footer>
          <strong>{CAMISETAS[0].nome}</strong>
          <span>{CAMISETAS[0].preco}</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={CAMISETAS[1].url} width={520} height={520} alt="" />

        <footer>
          <strong>{CAMISETAS[1].nome}</strong>
          <span>{CAMISETAS[1].preco}</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={CAMISETAS[2].url} width={520} height={520} alt="" />

        <footer>
          <strong>{CAMISETAS[2].nome}</strong>
          <span>{CAMISETAS[2].preco}</span>
        </footer>
      </Product>
      
      <Product className="keen-slider__slide">
        <Image src={CAMISETAS[2].url} width={520} height={520} alt="" />

        <footer>
          <strong>{CAMISETAS[2].nome}</strong>
          <span>{CAMISETAS[2].preco}</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={CAMISETAS[2].url} width={520} height={520} alt="" />

        <footer>
          <strong>{CAMISETAS[2].nome}</strong>
          <span>{CAMISETAS[2].preco}</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
