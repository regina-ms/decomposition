/**
 * Отображает список ссылок над строкой поиска 
 */
import { PropsWithChildren } from 'react'

export default function LinksList({children}: PropsWithChildren) {
  return (
    <ul className='links-list'>{children}</ul>
  )
}
