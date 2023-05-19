import Stripe from "stripe"

const chave = process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY : ""

export const stripe = new Stripe(chave,{
    apiVersion:"2022-11-15"
})