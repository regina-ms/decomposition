/**
 * Отображает строку поиска с кнопкой и примером того, что можно ввести в строку поиска 
 */

import { useRef } from 'react'
import { fakerRU as faker } from '@faker-js/faker'

export default function InputSearch() {
    const refInput = useRef<HTMLInputElement>(null);
    const handlerClick = (e: any) => {
        e.preventDefault()
        if (refInput.current) {
            refInput.current.value = e.target.textContent
        }
    }
    return (
        <div className='input-search'>
            <div className='input'>
                <input ref={refInput} />
                <button>Найти</button>
            </div>
            <div className='random-search'>
                Найдется все. Например <span><a href={faker.internet.url()} onClick={handlerClick}>{faker.lorem.word()}</a></span>
            </div>
        </div>
    )
}
