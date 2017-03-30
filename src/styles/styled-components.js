/* eslint-disable */
import styled, { injectGlobal, css } from 'styled-components';

const medium = (...args) => css`
  @media screen and (min-width: 601px) {
    ${css(...args)}
  }
`;

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 0.3rem;
    padding: 0;
    font-weight: normal;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: '-apple-system', 'San Francisco', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6rem;
    ${medium`
      line-height: 2rem;
      `}
  }
`;

export const Section = styled.section`
  background: ${props => props.bg ? props.bg : '#FFF'};
  color: ${props => props.color ? props.color : '#000'};
  padding: 1rem;
  ${medium`
    padding: 4rem;
    `}
`;

export const Insight = styled.div`
  flex-wrap: wrap;
  max-width: 700px;
  margin: 0 auto;
  background: ${props => props.bg ? props.bg : 'transparent'};
`;

export const Highlight = styled.span`
  display: inline-block;
  margin: 0 0 0.15rem;
  padding: 0.15rem 0.75rem;
  background: ${props => props.bg ? props.bg : '#223a50'};
  border-radius: 0.3125rem;
  color: #fff;
`;

export const Desc = styled.div`
  margin: 0.5rem;
  font-size: 1rem;
  ${medium`
    margin: 1rem;
    font-size: 1.5rem;
    text-align: center;
    `}
`;

// HEADER

export const UserHeader = styled.div`
  padding: 1rem;
  text-align: center;
  background: lightgrey;
`;

export const Avatar = styled.img`
  margin-bottom: 0.5rem;
  border-radius: 50%;
`;

export const Heading = styled.h1`
  font-size: 1.3rem;
  ${medium`
  font-size: 1.8rem;
  `}
`;

export const JoinDate = styled.h2`
  font-size: 1em;
`;
