import styled from 'styled-components';

export const StyledTopButton = styled.div`
  cursor: pointer;
  margin-left: 50%;
  text-align: center;
  background-color: white;
  width: 8%;
  border: 2px solid #303846;
  border-radius: 4px;
  padding: 2px;
  transition: color 0.4s cubic-bezier(0.08, 0.52, 0.52, 1),
    background 0.4s cubic-bezier(0.08, 0.52, 0.52, 1),
    border-color 0.4s cubic-bezier(0.08, 0.52, 0.52, 1);

  &:hover {
    background-color: #303846;
    color: white;
  }
`;
