import React from 'react';

import { Content, SearchIcon, Input } from './styles';

interface IProps {
  onChange: () => void;
}

const Search = ({onChange}: IProps) => {
  return (
    <Content>
      <SearchIcon iconName= "search" />
      <Input type= "text" onChange= {onChange} placeholder= "Найти вещь" />
    </Content>
  )
}

export default Search;