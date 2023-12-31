import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  margin: 0;
  margin-top: 20px;
  padding: 0;
`;

export const ContactItem = styled.p`
  color: black;
  font-weight: 500;
  margin-left: 10px;
  padding: 0;
  margin: 0;
  margin-right: 15px;
  font-style: normal;
`;
export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-top: 20px;
  font-size: 20px;
`;

export const DeleteButton = styled.button`
  min-width: 80px;
  height: 35px;
  font-size: 13px;
  padding: 5px;
  margin-right: 20px;
  margin-left: 15px;
  border-radius: 4px;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover,
  &:focus {
    color: grey;
  }
`;
