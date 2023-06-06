import { styled } from "../index";

export const HomeContainer = styled("main", {
  display: "flex",
  // gap: "3rem",
  width: "100%",
  marginLeft: "auto",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  // backgroundColor: 'red',
  minHeight: 656,
});

export const Product = styled("div", {
  overflow: 'hidden',
  textDecoration: 'node',
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,
  // padding: "0.25rem",
  cursor: "pointer",
  position: "relative",
  

  display: "flex",
  alignItems: "center",
  justifyContent: "center",



  img: {
    objectFit: "cover",
  },



  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    borderRadius: 6,
    padding: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    
    backgroundColor: "rgba(0,0,0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",    

    strong:{
        fontSize: '$lg',
        color: '$gray100',
    },

    span:{
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300',
    }




  },

  '&:hover':{
    footer:{
        transform: "translateY(0%)",
        opacity: 1,
    }
  },
});

export const FooterHome = styled('footer',{
  display:  "flex",
  flexDirection: 'row',
  justifyContent: 'space-between',

  div:{
    display: 'flex',
    flexDirection:'column',

    strong:{
      fontSize: '1.125rem',

    },
    
    span:{
      fontSize: '1.5rem',
    }
  }

})

export const LogoCarrinho = styled("button", {
  width: "3rem",
  height: "3rem",
  background: "$green300",
  
  borderRadius: 6,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  
  cursor: 'pointer',
  border: 'none',
  
  img:{
    // background: '$white',
    fill: 'CurrentColor',
    color: '$white',
    
  }

  
});
