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
import axios from "axios";


export default function SideBarComponent() {

  const { products } = useReduxSelector((state) => state.shopLoad)
  const [snackBarStatus, setSnackBarStatus] = useState(false)
  const [sessionRedirect, setSessionRedirect] = useState(false);

  const dispatch = useDispatch()


  const { statusSideBar, activeSideBar } = useCartContext()

  function handleremoveProduct(id:string){
    dispatch(removeProduct(id))
    setSnackBarStatus(true)

    setTimeout(() => {
      setSnackBarStatus(false)
    }, 3000);
  }

  async function handleNewChekout(){
    try{
      
      setSessionRedirect(true)
      const response = await axios.post('/api/multicheckout', {
        priceIditens: [...products]
      })

      console.log("Url de redirecionamento",response.data)
      
      const { checkoutSession } = response.data
      
      window.location.href = checkoutSession 
      
    }catch(err){
      setSessionRedirect(false)
      // alert("Falha ao redirecionar ao chekout");
    }
    
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
               
                return (
                  <SidbarItem>
                  <ImageItemSideBar>
                    <Image src={index.imageUrl} width={100} height={100} alt="" />
                  </ImageItemSideBar>
    
                  <div>
                    <p>{index.name}</p>
                    <p style={{fontSize: '0.85rem'}}>Quantidade: {index.quantity}</p>
                    <strong>{priceFromatter.format(index.price)}</strong>
                    <button onClick={() => handleremoveProduct(index.id)} >Remover</button>
                  </div>
                </SidbarItem>
                )
              })
            }

          
          </div>
        </SideBarItens>

        <div>
          {
          
          products.length === 0 ? <><h3 style={{textAlign: 'center'}}>Carrinho está vazio <br></br> Por favor escolha algum item</h3></> : <></>
          }
        </div>

        <Footer>
          <p>
            Quantidade <span>{products.length} itens</span>
          </p>

          <strong>
            Valor total <span>{priceFromatter.format(totatilzer)}</span>
          </strong>

          <button disabled={products.length === 0} onClick={handleNewChekout}>Finalizar compra</button>
        </Footer>
      </SidbarBody>
    </SideBarContainer>
  );
}
