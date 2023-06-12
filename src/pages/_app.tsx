import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Roboto } from "next/font/google";
import HeaderComponent from "@/componets/header";
import { ContainerApp } from "@/styles/pages/app";
import CartConcextComponent from "@/context/cartContext/CartContext";
import SideBarComponent from "@/componets/sideBar";
import { Provider } from "react-redux";
import { StoreShop, persistorRedux } from "@/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={StoreShop}>
      <PersistGate loading={<><h1>Carregando Redux</h1></>} persistor={persistorRedux}>
        <CartConcextComponent>
          <ContainerApp className={roboto.className}>
            <HeaderComponent />
            <SideBarComponent />
            <Component {...pageProps} />
          </ContainerApp>
        </CartConcextComponent>
      </PersistGate>
    </Provider>
  );
}
