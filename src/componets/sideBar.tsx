import {
  ClosedIcon,
  Footer,
  ImageItemSideBar,
  SidbarBody,
  SidbarItem,
  SideBarContainer,
  SideBarItens,
} from "@/styles/pages/sideBar";
import Image from "next/image";
import closedIcon from "../assets/closed-icon.svg";

import {  removeProduct } from "../redux/redux-toolkit/redux-slice"

import useCartContext from "@/context/cartContext/contextCart";
import { useReduxSelector } from "@/redux/store/hoook";
import { priceFromatter } from "@/utils/formatter";
import { useDispatch } from "react-redux";
import { useState } from "react";
import SnackBarMUI from "./snakebar";


export default function SideBarComponent() {

  const { products } = useReduxSelector((state) => state.shopLoad)
  const [snackBarStatus, setSnackBarStatus] = useState(false)

  const dispatch = useDispatch()


  const { statusSideBar, activeSideBar } = useCartContext()

  function handleremoveProduct(id:string){
    dispatch(removeProduct(id))
    setSnackBarStatus(true)

    setTimeout(() => {
      setSnackBarStatus(false)
    }, 3000);
  }



  function handleSideBar(){
    activeSideBar()
  }

  const totatilzer = products.length > 0 ? products.reduce((acumulador, element)=> acumulador + element.price, 0 ) : 0


  return (
    <SideBarContainer  css={statusSideBar ? {transform: 'translateX(30rem)'} : {}}>
       <SnackBarMUI color={"#00b37e"} message={"Item removido do carrinho"} open={snackBarStatus} onClose={() => setSnackBarStatus(false) }/>

      <ClosedIcon>
        <span></span>
        <Image src={closedIcon} alt="" width={24} height={24} onClick={handleSideBar}/>
      </ClosedIcon>

      <SidbarBody>
        <SideBarItens>
          <strong>Sacola de compras</strong>

          <div>

            {
              products.map((index)=>{
                console.log(`precoo: ${index.price}`)
                return (
                  <SidbarItem>
                  <ImageItemSideBar>
                    <Image src={index.imageUrl} width={100} height={100} alt="" />
                  </ImageItemSideBar>
    
                  <div>
                    <p>{index.name}</p>
                    <strong>{priceFromatter.format(index.price)}</strong>
                    <button onClick={() => handleremoveProduct(index.id)} >Remover</button>
                  </div>
                </SidbarItem>
                )
              })
            }

          
          </div>
        </SideBarItens>

        <Footer>
          <p>
            Quantidade <span>{products.length} itens</span>
          </p>

          <strong>
            Valor total <span>{priceFromatter.format(totatilzer)}</span>
          </strong>

          <button>Finalizar compra</button>
        </Footer>
      </SidbarBody>
    </SideBarContainer>
  );
}
