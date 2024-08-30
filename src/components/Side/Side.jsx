import './Side.css';
import { itemArray } from '../../constants';
import { Item } from '../Item/Item';
import { Footer } from '../Footer/Footer';

export const Side = () => {
  return (
    <div className='content-side'>
      <div className='content-side-list'>
        <h2 className='content-side-title'>Сервисы и услуги</h2>

        {itemArray.map((item) => (
          <Item key={item.id} icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
