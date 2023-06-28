import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  padding: 8px;
  margin-right: 8px;
  font-size: 18px;
  border: none;
  text-decoration: none;
  background-color: transparent;
  color: white;
  font-size: 15px;

  &:hover,
  &:focus {
    color: grey;
  }
`;
