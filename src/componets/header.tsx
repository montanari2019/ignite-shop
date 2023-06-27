import Image from "next/image";
import logo from "../assets/logo.svg";
import logoCarrinho from "../assets/logo-carrinho.svg";
import {
  BageInfo,
  CardAjust,
  Header,
  LogoCarrinho,
} from "@/styles/pages/header";
import { useState } from "react";
import useCartContext from "@/context/cartContext/contextCart";
import { useReduxSelector } from "@/redux/store/hoook";


export default function HeaderComponent() {
  const { products } = useReduxSelector((state) => state.shopLoad)

  const { activeSideBar } = useCartContext()

  const totatilzerItens = products.length > 0 ? products.reduce((acumulador, element)=> acumulador + element.quantity, 0 ) : 0

  function handleClick(){

    activeSideBar()
    
  }

  return (
    <Header className="header__logo">
      <Image src={logo} alt="logo" />
      <CardAjust>
        {
          products.length > 0 ? <BageInfo>{totatilzerItens}</BageInfo> : <></>
        }
        

        <LogoCarrinho onClick={handleClick}>
          <Image src={logoCarrinho} alt="" width={24} height={24} />
        </LogoCarrinho>
      </CardAjust>
    </Header>
  );
}
