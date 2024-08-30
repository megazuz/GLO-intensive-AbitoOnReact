import './Card.css';

export const Card = ({ title, price, address, date, image }) => {
  return (
    <a href='product.html' className='card'>
      <div className='card--img'>
        <img src={image} alt='card_image' width='100%' />
      </div>
      <h5 className='card--title'>{title}</h5>
      <strong className='card--price'>{price}</strong>
      <span className='card--desc'>{address}</span>
      <span className='card--desc'>{date}</span>
    </a>
  );
};
