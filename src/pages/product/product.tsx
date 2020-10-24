import React from 'react';

import { loadProducts } from './api';
import { OuterWear } from 'components/.';
import { IMG_URL } from 'constants/api';

import { TitleLink, Conteiner, Content } from './styles';

const Product = ({ match }) => {
  const [products, setProducts] = React.useState([]);
  const [count, setCount] = React.useState("");
  const categoryId = match.params.categoryId;

  React.useEffect(() => {
    const load = async () => {
      const products = await loadProducts(categoryId);
      setProducts(products);
      setCount(products[0].name);
    };

    load();
  }, []);

  return (
    <>
      <TitleLink>{count}</TitleLink>
      <Conteiner>
        {products.map(product => {
          return (
            <Content>
              <OuterWear
                key={product.uuid}
                picture={IMG_URL + product.picture}
                name={product.name}
                duration={product.duration}
                price={product.price}
                onOpenModalWindow={() => 2}
              />
            </Content>
          )
        })}
      </Conteiner>
    </>
  )
}

export default Product;