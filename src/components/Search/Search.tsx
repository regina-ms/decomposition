/**
 * Отображает логотип, список ссылок, и строку поиска 
 */

import { links } from '../../datas&types'
import LinksList from '../LinksList/LinksList'
import Link from '../Link/Link'
import InputSearch from '../InputSearch/InputSearch'

export default function Search() {
  return (
    <section className='search'>
      <img src='https://avatars.mds.yandex.net/get-bunker/998550/492ae8000e920665da8b56e0b7bc69899c5c56b6/orig' alt='' />
      <div className='quick-search'>
        <LinksList>
          {links.map((el, index) => (<Link key={index}{...el} />))}
        </LinksList>
        <InputSearch />
      </div>
    </section>
  )
}
