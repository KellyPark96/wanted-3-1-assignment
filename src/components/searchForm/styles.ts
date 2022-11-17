import styled from 'styled-components';

const Form = styled.form`
  margin-top: 2rem;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 1.5rem;
  overflow: hidden;
  svg {
    margin-left: 1rem;
  }
  input {
    background-color: transparent;
    border: none;
    outline: none;
    flex: 1 1 80%;
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 20rem;
  padding: 1rem 0;
  background-color: white;
  border-radius: 1.5rem;
  font-size: 0.8rem;
  margin-top: 1rem;
  overflow-y: auto;
`;

const S = {
    Form,
    Wrapper
};
export default S;
