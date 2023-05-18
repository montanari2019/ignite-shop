import Image from "next/image";
import logo from "../assets/logo.svg";
import { Header } from "@/styles/pages/header";

export default function HeaderComponent() {
  return (
    <Header className="header__logo">
      <Image src={logo} alt="logo" />
    </Header>
  );
}
