import styled from 'styled-components';

const Wrapper = styled.li`
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  transition: all ease-in 100ms;
  svg {
    margin-right: 1rem;
    color: ${(props) => props.theme.colors.grey};
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
  &.selected {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
  b {
    font-weight: bold;
  }
`;

const S = {
    Wrapper,
};

export default S;