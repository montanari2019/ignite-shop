import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface ProductProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  defaultPriceId: string;
}

interface ProductIdRemoveProps {
    id: string;
}


interface initialStateProps {
    products: ProductProps[]
}


const initialState:initialStateProps = {
    products: []
}

export const shopSlice = createSlice({
    name: 'shopSlice',
    initialState: initialState,
    reducers:{
        pushProduct: (state, action: PayloadAction<ProductProps>) =>{
            state.products.push(action.payload)
        },

        removeProduct:(state, action:PayloadAction<ProductIdRemoveProps>)=>{
            const newArrayProducts = state.products.filter((elemtent)=> elemtent.id !== action.payload.id)
            state.products = newArrayProducts
        }


    }
})


export const { pushProduct, removeProduct } = shopSlice.actions

export const ShopReducer = shopSlice.reducer