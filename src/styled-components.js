/* eslint-disable */
import styled, {injectGlobal, css} from 'styled-components';

const small = (...args) => css `
  @media screen and (max-width: 600px) {
    ${ css(...args) }
  }
`

const medium = (...args) => css `
  @media screen and (min-width: 601px) {
    ${ css(...args) }
  }
`

//  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,600,700');

injectGlobal `

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Titillium Web', '-apple-system', 'San Francisco', Helvetica, Arial, sans-serif;
    font-size: 16px;
    letter-spacing: 0.4px;
    line-height: 2em;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 0.5em;
  }
`

// LOGIN

export const Authorize = styled.button `
  padding: 1em 1.5em;
  background: red;
  color: white;
  border: 0;
`

// INSIGHTS

export const Section = styled.section `
  background: ${props => props.background ? props.background : 'white' }
  padding: 1rem;
  ${medium `
    padding: 4rem;
    `}
`

export const Averages = styled.div `
  display: flex;
`

export const AvgContainer = styled.div `
  flex: ${props => props.completed ? '1' : '1'};
  text-align: left;
`

export const AvgData = styled.span`
  display: block;
  font-size: 1.8rem;
  font-weight: bold;
`

export const Insight = styled.div `
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.5rem;
  background: ${props => props.background ? props.background : 'transparent'};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  ${medium `
    padding: 2rem;
    `}
`

export const Highlight = styled.span `
  display: inline-block;
  margin: 0 0.15rem;
  padding: 0.15rem 0.75rem;
  background: #223a50;
  border-radius: .3125rem;
  color: #fff;
`

export const Description = styled.div `
  margin: 1rem;
  font-size: 1rem;
  text-align: center;
  ${medium `
    font-size: 1.3rem;
    `}
`