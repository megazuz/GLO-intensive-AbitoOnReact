import './Main.css';
import { cardArray } from '../../constants';
import { Card } from '../Card/Card';

export const Main = () => {
  return (
    <div className='content-main'>
      <h2 className='content-main-title'>Рекомендации для вас</h2>
      <div className='content-main__list'>

        {cardArray.map((card) => (
          <Card key={card.id} title={card.title} price={card.price} address={card.address} date={card.date} image={card.image} />
        ))}
        
      </div>
    </div>
  );
};
