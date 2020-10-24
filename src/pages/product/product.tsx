import React from 'react';

import { loadProducts } from './api';
import { OuterWear } from 'components/.';
import { IMG_URL } from 'constants/api';

import { TitleLink, Conteiner, Content } from './styles';

const Product = () => {
  const [products, setProducts] = React.useState([]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const load = async () => {
      const products = await loadProducts();
      setProducts(products);
    };

    load();
  }, [setProducts]);

  return (
    <>
      <TitleLink>Верхняя одежда</TitleLink>
      <Conteiner>
        {products.map(product => (
          <Content>
            <OuterWear
              key={product.uuid}
              picture={IMG_URL + product.picture}
              name={product.name}
              duration={product.duration}
              price={product.price}
              count={count}
              onPlus={() => setCount(count + 1)}
              onMinus={() => setCount(count > 0 ? count - 1 : count)}
              onOpenModalWindow={() => 2}
            />
          </Content>
        ))}
      </Conteiner>
    </>
  )
}

export default Product;