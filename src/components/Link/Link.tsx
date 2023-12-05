/**
 * Отображает элемент ссылки в списке ссылок 
 */
import { TLinkItem } from '../../datas&types'


export default function Link({title, url}: TLinkItem) {
  return (
    <li><a href={url}>{title}</a></li>
  )
}
