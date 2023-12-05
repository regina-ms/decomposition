/**
 * Отображает главную новость справа от списка новостей
 */

import { fakerRU as faker } from '@faker-js/faker'

export default function MainNews() {
  return (
    <div className="main-news">
        <img src={faker.image.urlLoremFlickr()} alt="" className="main-news-img"/>
        <h2 className="main-news-title">{faker.lorem.words(2)}</h2>
        <div className="main-news-subtitle">{faker.lorem.sentence(3)}</div>
    </div>
  )
}
