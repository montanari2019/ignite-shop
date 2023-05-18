import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Roboto } from "next/font/google";
import HeaderComponent from "@/componets/header";
import { ContainerApp } from "@/styles/pages/app";


const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContainerApp className={roboto.className}>
      <HeaderComponent/>
      <Component {...pageProps} />
    </ContainerApp>
  );
}
