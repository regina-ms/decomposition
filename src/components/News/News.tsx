/**
 * Контейнер для компонентов верхней части страницы: заголовков, списка новостей, списка валют и главной новости 
 */

import { PropsWithChildren } from 'react'

export default function News({ children }: PropsWithChildren) {
    return (
        <section className='news'>{children}</section>
    )
}
