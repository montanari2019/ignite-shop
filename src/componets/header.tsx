import Image from "next/image";
import logo from "../assets/logo.svg";
import logoCarrinho from "../assets/logo-carrinho.svg";
import {
  BageInfo,
  CardAjust,
  Header,
  LogoCarrinho,
} from "@/styles/pages/header";

export default function HeaderComponent() {
  return (
    <Header className="header__logo">
      <Image src={logo} alt="logo" />
      <CardAjust>
        <BageInfo>1</BageInfo>

        <LogoCarrinho>
          <Image src={logoCarrinho} alt="" width={24} height={24} />
        </LogoCarrinho>
      </CardAjust>
    </Header>
  );
}
