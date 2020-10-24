import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleLink = styled.p`
  text-align: center;
`;

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const CategoriesMenu = styled(Link)`
  margin: 20px 0;
  text-decoration: none;
`;
