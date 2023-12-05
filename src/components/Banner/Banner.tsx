/**
 * отображение баннера под строкой поиска 
 */
import { TBanner } from '../../datas&types'

export default function Banner({link, img}: TBanner) {
  return (
    <section className='banner'><a href={link}><img src={img} alt=''/></a></section>
  )
}
