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

export default function HeaderComponent() {

  const [item, setItem] = useState(0)
  return (
    <Header className="header__logo">
      <Image src={logo} alt="logo" />
      <CardAjust>
        {
          item > 0 ? <BageInfo>1</BageInfo> : <></>
        }
        

        <LogoCarrinho onClick={(e) => setItem(item + 1)}>
          <Image src={logoCarrinho} alt="" width={24} height={24} />
        </LogoCarrinho>
      </CardAjust>
    </Header>
  );
}
