import { Header } from '../components/Header/Header';
import { Search } from '../components/Search/Search';
import { Side } from '../components/Side/Side';
import { Main } from '../components/Main/Main';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Search />
        <section className='content'>
          <div className='container'>
            <div className='content-box'>
              <Main />
              <Side />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
