import React from 'react';

import { loadCategories } from './api';
import { OfficeWear } from 'components/.'
import { IMG_URL } from 'constants/api';
import { urls } from 'constants/.'

import { TitleLink, Conteiner, CategoriesMenu } from './styles';

const Home = ({ history }) => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const load = async () => {
      const categories = await loadCategories();
      setCategories(categories);
    };

    load();
  }, [setCategories]);

  
  return (
    <>
      <TitleLink>Главная</TitleLink>
      <Conteiner>
        {categories.map(category => (
          <CategoriesMenu>
            <OfficeWear
              key={category.uuid.toString()}
              picture={IMG_URL + category.picture}
              name={category.name}
              description={category.description}
              onClick={() => history.push(`${urls.CATEGORIES}/${category.uuid}`)}
            />
          </CategoriesMenu>
        ))}
      </Conteiner>
    </>
  )
}

export default Home;