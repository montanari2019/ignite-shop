import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "2rem",
    color: "$gray100",
  },

  p: {
    fontSize: "1.5rem",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: "1.6",
  },

  a: {
    display: "block",
    marginTop: "5rem",
    color: "$green500",
    fontSize: "1.5rem",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainerAbsolute = styled("div", {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ImageContainer = styled("div", {

  width: 140,
  height: 140,
  marginRight: -52,

  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",

  padding: "0.25rem",
  marginTop: "4rem",
  borderRadius: "1000px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  
boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.80)',

  img: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    objectFit: 'cover'
  },
});
