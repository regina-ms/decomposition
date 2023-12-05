/**
 * Компонент списка новостей, 
 * который хранит в себе состояние(какие новости сейчас отображать в зависимости от активного заголовка)
 * Также отображает текущее время и дату и список валют 
 */

import { useState } from 'react'
import { fakeNowInSMI, fakeInGermany, fakeRecomended, TNewsItem } from '../../datas&types';
import NewsItem from '../NewsItem/NewsItem';
import moment from 'moment';
import 'moment/locale/ru';
import CurrencyList from '../CurrencyList/CurrencyList';
import { fakeCurrency } from '../../datas&types';

export default function NewsList() {
    const [news, setNews] = useState<TNewsItem[]>(fakeNowInSMI);
    return (
        <div className='all-news'>
            <div className='news-header'>
                <div className='news-buttons'>
                    <button onClick={() => setNews(fakeNowInSMI)}>Сейчас в СМИ</button>
                    <button onClick={() => setNews(fakeInGermany)}>в Германии</button>
                    <button onClick={() => setNews(fakeRecomended)}>Рекомендуем</button>
                </div>
                <div className='news-date'>
                    {moment().format('D MMMM, dddd HH mm')}
                </div>
            </div>
            <ul className='news-list'>
                {news.map((el, index) => (<NewsItem key={index} {...el} />))}
            </ul>
            <CurrencyList datas={fakeCurrency}/>
        </div>
    )
}
