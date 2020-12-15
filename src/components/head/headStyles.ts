import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHead = styled.div`
  height: 48px;
  margin: 1%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
  border: #303846 2px solid;
  border-radius: 4px;
  padding: 0.4%;
  color: #303846;
`;

export const StyledAppTitle = styled(Link)`
  font-size: x-large;
  font-variant: all-small-caps;
  font-weight: 500;
  color: #303846;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledOptions = styled.div`
  display: flex;
  font-size: large;
  font-weight: 400;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledOption = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
