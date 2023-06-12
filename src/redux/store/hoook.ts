import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { ShopReduxType } from './store'

export const useReduxSelector: TypedUseSelectorHook<ShopReduxType> = useSelector    