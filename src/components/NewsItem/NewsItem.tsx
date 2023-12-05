/**
 * Отображает новость с иконкой и ссылкой в списке новостей 
 */
import { TNewsItem } from "../../datas&types"

export default function NewsItem({ icon, link, text }: TNewsItem) {
    return (
        <li className='news-item'>
            <div className='icon' style={{backgroundImage: `url(${icon})`}}></div>
            <p><a href={link}>{text}</a></p>
        </li>
    )
}
