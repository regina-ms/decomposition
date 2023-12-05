/**
 * Отображает список валют под списком новостей
 */

import { CurrencyProps } from "../../datas&types"
import CurrencyItem from "../CurrencyItem/CurrencyItem"


export default function CurrencyList({ datas }: CurrencyProps) {
    return (
        <div className="currency-list">
            {
                datas.map((el, index) => (<CurrencyItem {...el} key={index}/>))
            }
        </div>
    )
}
