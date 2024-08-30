import { Header } from '../components/Header/Header';
import { Search } from '../components/Search/Search';
import { Side } from '../components/Side/Side';
import { Product } from '../components/Product/Product';

export const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Search />
        <section className='content'>
          <div className='container'>
            <div className='content-box'>
              <Product />
              <Side />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
