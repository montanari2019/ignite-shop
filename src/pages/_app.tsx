import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Roboto } from "next/font/google";
import HeaderComponent from "@/componets/header";
import { ContainerApp } from "@/styles/pages/app";
import CartConcextComponent from "@/context/cartContext/CartContext";
import SideBarComponent from "@/componets/sideBar";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartConcextComponent>
      <ContainerApp className={roboto.className}>
        <HeaderComponent />
        <SideBarComponent/>
        <Component {...pageProps} />
      </ContainerApp>
    </CartConcextComponent>
  );
}
