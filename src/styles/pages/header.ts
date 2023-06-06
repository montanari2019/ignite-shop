import { styled } from "@/styles";

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
});

export const LogoCarrinho = styled("button", {
  width: "3rem",
  height: "3rem",
  background: "$gray800",

  borderRadius: 6,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',
  border: 'none',

  

  
});

export const CardAjust = styled('div', {
    display:'flex',
    justifyContent: 'flex-end',
})


export const BageInfo = styled('span', {
   
    position:'relative',
    left:'calc(56px - 3px)',
    top:'-7px',
    padding:'0.5rem',
    
    width: '1.5rem',
    height: '1.5rem',

    border: 'solid 3px #121214',
    background: '$green500',
    borderRadius: '1000px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.875rem',
    fontWeight: 'bold',
})
