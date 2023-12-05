/**
 * Отображает таб с информацей
 */
import { TTabItem } from '../../datas&types'

export default function Tab({ title, text }: TTabItem) {
  return (
    <li className='tab'>
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  )
}
