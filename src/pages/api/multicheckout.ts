import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

interface ProductProps {
  
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    defaultPriceId: string;
    quantity?: number
  
}


export default async function checkoutSession(  req: NextApiRequest,  res: NextApiResponse) {

    console.log("Chamanfo api")
  
    const { priceIditens } = req.body

   
    const newItens = priceIditens.map((index:ProductProps)=>{
      return {
        price: index.defaultPriceId,
          quantity: index.quantity,
      }
    })

  
    console.log("id do preço", newItens)
  
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    if (!priceIditens) {
      return res.status(400).json({ error: "Price not found" });
    }
  
    
    const sucessUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_URL}/`;
  
    const chekoutSession = await stripe.checkout.sessions.create({
      success_url: sucessUrl,
      cancel_url: cancelUrl,
      mode: "payment",
      line_items: newItens,
    });

    
  
    return res.status(201).json({
      checkoutSession: chekoutSession.url,
    });
  }