import React from 'react';

import { loadCategories } from './api';
import { OfficeWear } from 'components/.'
import { IMG_URL } from 'constants/api';
import { urls } from 'constants/.'

import { TitleLink, Conteiner, CategoriesMenu } from './styles';

const Home = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const load = async () => {
      const categories = await loadCategories();
      setCategories(categories);
    };

    load();
  }, [setCategories]);

  console.log(categories);
  return (
    <>
      <TitleLink>Главная</TitleLink>
      <Conteiner>
        {categories.map(category => (
          <CategoriesMenu to={urls.PRODUCTS}>
            <OfficeWear
              key={category.uuid.toString()}
              picture={IMG_URL + category.picture}
              name={category.name}
              description={category.description}
            />
          </CategoriesMenu>
        ))}
        {/* {categories.map(category => <Category key={category.uuid} {...category} />)} */}
      </Conteiner>
    </>
  )
}

export default Home;