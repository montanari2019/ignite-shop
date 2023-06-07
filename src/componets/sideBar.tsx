import {
    ClosedIcon,
    ImageItemSideBar,
    SidbarBody,
    SidbarItem,
    SideBarContainer
} from "@/styles/pages/sideBar";
import Image from "next/image";
import closedIcon from "../assets/closed-icon.svg";

import camiseta02 from "../assets/camiseta/camiseta2.png";

export default function SideBarComponent() {
  return (
    <SideBarContainer>
      <ClosedIcon>
        <span></span>
        <Image src={closedIcon} alt="" width={24} height={24} />
      </ClosedIcon>

      <SidbarBody>
        <strong>Sacola de compras</strong>

        <SidbarItem>
          <ImageItemSideBar>
            <Image src={camiseta02} width={100} height={100} alt="" />
          </ImageItemSideBar>

          <div>
            <p>Camiseta Beyond the Limits</p>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </SidbarItem>

        <SidbarItem>
          <ImageItemSideBar>
            <Image src={camiseta02} width={100} height={100} alt="" />
          </ImageItemSideBar>

          <div>
            <p>Camiseta Beyond the Limits</p>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </SidbarItem>

        <SidbarItem>
          <ImageItemSideBar>
            <Image src={camiseta02} width={100} height={100} alt="" />
          </ImageItemSideBar>

          <div>
            <p>Camiseta Beyond the Limits</p>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </SidbarItem>
      </SidbarBody>
    </SideBarContainer>
  );
}
