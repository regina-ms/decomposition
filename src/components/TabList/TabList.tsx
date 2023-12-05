/**
 * Контейнер для табов с информацией 
 */

import { PropsWithChildren } from 'react'

export default function TabList({children}: PropsWithChildren) {
  return (
    <section className='tab-list'>
        <ul>{children}</ul>
    </section>
  )
}
