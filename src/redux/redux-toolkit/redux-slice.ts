import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface ProductProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  defaultPriceId: string;
  quantity: number
}




interface initialStateProps {
    products: ProductProps[],
    produtCheckout: produtCheckout[]
}
interface produtCheckout{
    defaultPriceId: string;
    quantidade: number
}


const initialState:initialStateProps = {
    products: [],
    produtCheckout: []

}

export const shopSlice = createSlice({
    name: 'shopSlice',
    initialState: initialState,
    reducers:{
        pushProduct: (state, action: PayloadAction<ProductProps>) =>{

           const filterProduct = state.products.filter((e)=> e.id === action.payload.id)
           

            if(filterProduct.length > 0){
                const products = state.products.map((index)=>{
                    if(index.defaultPriceId === action.payload.defaultPriceId){
                        console.log('ITEM JA EXISTENTE AUMENTAR QUANTIDADE')
                        return {
                            ...index,
                            price: index.price + action.payload.price,
                            quantity: index.quantity + 1
                        }
                    }else{
                        return {
                            ...index
                        }
                    }
                 })

                 console.log('Produto', products)
                 state.products = products
            }else{
                state.products.push(action.payload)
            }

        
        },

        removeProduct:(state, action:PayloadAction<string>)=>{

            const produtcRemove = state.products.filter((e)=> e.id === action.payload)


            const newArrayProducts = state.products.map((element) => {
                if (element.id === action.payload) {
                  if (element.quantity > 0) {
                    console.log('entrando no if')
                    return {
                      ...element,
                      price: element.price - ((produtcRemove[0].price) / produtcRemove[0].quantity),
                      quantity: element.quantity - 1
                      
                    };
                  } else {
                    
                    return element; 
                  }
                }
                return element; // Mantém os objetos que não correspondem ao ID fornecido
              });

            const newArray = newArrayProducts.filter((e) => e.quantity !== 0)
            
            state.products = newArray
           
        },

        deleteChat:(state) =>{
            state.products = []
        }


    }
})


export const { pushProduct, removeProduct,deleteChat } = shopSlice.actions

export const ShopReducer = shopSlice.reducer