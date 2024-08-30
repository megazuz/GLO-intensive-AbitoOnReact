import './Search.css';

export const Search = () => {
  return (
    <section className='search'>
      <div className='container'>
        <div className='search-box'>
          <input type='text' />
          <button className='btn btn-primary search-btn'>
            <img src='/images/search.svg' alt='Ⴍ' />
            <span>Найти</span>
          </button>
        </div>
      </div>
    </section>
  );
};
