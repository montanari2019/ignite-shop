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


export default function HeaderComponent() {

  const { activeSideBar } = useCartContext()

 

  function handleClick(){

    activeSideBar()
    setItem((state) => state + 1)
  }

  const [item, setItem] = useState(0)
  return (
    <Header className="header__logo">
      <Image src={logo} alt="logo" />
      <CardAjust>
        {
          item > 0 ? <BageInfo>1</BageInfo> : <></>
        }
        

        <LogoCarrinho onClick={handleClick}>
          <Image src={logoCarrinho} alt="" width={24} height={24} />
        </LogoCarrinho>
      </CardAjust>
    </Header>
  );
}
