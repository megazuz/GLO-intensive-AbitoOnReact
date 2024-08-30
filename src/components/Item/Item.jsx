import './Item.css';

export const Item = ({ icon, title, desc }) => {
  return (
    <div className='content-side-item'>
      <div className='content-side-item-title'>
        <img src={icon} alt='truck' height='30px' width='30px' />
        <span>{title}</span>
      </div>
      <span>{desc}</span>
    </div>
  );
};
