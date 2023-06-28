import styled from 'styled-components';
export const Form = styled.form`
  width: 320px;
  margin: 0 auto;
  align-content: center;
  padding: 15px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  text-align: center;
  margin-bottom: 15px;

`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: black;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  // transition: all 0.25s;
  font-size: 20px;
  background-color: black;
  color: white;
  &:hover,
  &:focus {
    color: grey;
    box-shadow: 1px solid white;
  }
`;
