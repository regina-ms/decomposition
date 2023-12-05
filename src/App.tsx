import { faker } from '@faker-js/faker';
import './App.css';
import MainNews from './components/MainNews/MainNews';
import News from './components/News/News';
import NewsList from './components/NewsList/NewsList';
import Search from './components/Search/Search';
import Banner from './components/Banner/Banner';
import TabList from './components/TabList/TabList';
import { tabs } from './datas&types';
import Tab from './components/Tab/Tab';


function App() {
  return (
    <div className="App">
      <News>
        <NewsList />
        <MainNews />
      </News>
      <Search />
      <Banner link={faker.internet.url()} img={faker.image.urlLoremFlickr({ width: 1100, height: 100 })} />
      <TabList>
        {tabs.map((el,index) => (<Tab {...el} key={index} />))}
      </TabList>
    </div>
  );
}

export default App;
