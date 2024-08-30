import './Product.css';

export const Product = () => {
  return (
    <div class='content-product'>
      <div class='content-product-left'>
        <h2 class='content-product-title'>Электросамокат kugoo Gx</h2>
        <div class='content-product--img'>
          <img src='./images/product-image.jpg' alt='product_image' width='100%' />
        </div>
        <div class='content-product--text'>
          Продаю неспеша самокат в хорошем состоянии.
          <br />
          Торг возможен.
          <br />
          За период эксплуатации не выявлено ни одной проблемы.
          <br />
          Из минусов — нужно прокачать задний тормоз.
          <br />
          Установлен отсекатель сзади.
          <br />
          Покрышки CST внедорожные.
          <br />
          Всё на подшипниках, болты протянуты.
          <br />
          Пробег 881км, но это немного для такого зверя.
        </div>
        <span class='content-product--address'>Казань, р-н Вахитовский</span>
        <span class='content-product--time'>10 июля 11:39</span>
      </div>
      <div class='content-product-right'>
        <h2 class='content-product-price'>75 000 ₽</h2>
        <button class='btn btn-primary content-product-btn'>Показать телефон</button>
      </div>
    </div>
  );
};
