/* eslint-disable */
import styled, { injectGlobal, css } from 'styled-components';

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
`

export const Section = styled.section`
  background: ${props => props.background ? props.background : 'white' }
`

export const UserHeader = styled.div`
  text-align: center;
  background: lightgrey;
`
