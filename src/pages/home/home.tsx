import React from 'react';

import { loadCategories } from './api';
import { OfficeWear } from 'components/.'
import { IMG_URL } from 'constants/api';

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
          <CategoriesMenu to="/">
            <OfficeWear
              key={category.uuid.toString()}
              picture={IMG_URL + category.picture}
              name={category.name}
              hint={category.hint}
            />
          </CategoriesMenu>
        ))}
        {/* {categories.map(category => <Category key={category.uuid} {...category} />)} */}
      </Conteiner>
    </>
  )
}

export default Home;