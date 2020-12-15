import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDarkBanner = styled.div`
  padding: 2.5rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  background-color: #303846;
  color: #fff;
  border-radius: 4px;
`;

export const StyledInnerContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`;

export const StyledTitle = styled.h1`
  font-size: 3rem;
`;

export const StyledSubTitle = styled.div`
  font-size: 1.5rem;
`;

export const StyledSubComment = styled.p`
  font-size: 1rem;
`;

export const StyledGetStarted = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  background-color: transparent;
  border: 1px solid #09d3ac;
  border-radius: 0.4rem;
  cursor: pointer;
  font-weight: 700;
  color: #09d3ac;
  line-height: 1.5;
  padding: 0.375rem 1.5rem;
  text-align: center;
  transition: color 0.4s cubic-bezier(0.08, 0.52, 0.52, 1),
    background 0.4s cubic-bezier(0.08, 0.52, 0.52, 1),
    border-color 0.4s cubic-bezier(0.08, 0.52, 0.52, 1);

  &:hover {
    background-color: #09d3ac;
    color: #fff;
  }
`;
