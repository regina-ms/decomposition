/**
 * Отображает элемент списка валют 
 */
import { TCurrencyItem } from "../../datas&types"

export default function CurrencyItem({currencyCode, currencyValue} :TCurrencyItem) {
  return (
   <span>{currencyCode} {currencyValue} </span>
  )
}
