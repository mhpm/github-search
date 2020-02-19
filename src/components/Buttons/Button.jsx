import React from "react"
import styled, { css } from "styled-components"

const ButtonStyled = styled.button`
  color: white;
  margin: 3px;
  background-color: ${props => props.theme.default.color};
  &:hover {
    background-color: ${props => props.theme.default.hover};
  }
  border-radius: 8px;
  border: none;
  padding: 5px;
  width: 100px;
  height: 40px;
  ${props =>
    props.primary &&
    css`
      background-color: ${props => props.theme.primary.color};
      &:hover {
        background-color: ${props => props.theme.primary.hover};
      }
    `};
  ${props =>
    props.color &&
    css`
      background-color: ${props => props.theme[props.color].color};
      &:hover {
        background-color: ${props => props.theme[props.color].hover};
      }
    `}
  &.customClass {
    background-color: teal;
    &:hover {
      background-color: #015c5c;
    }
  }
`

const Button = props => {
  return <ButtonStyled {...props} children={props.children} />
}

export default Button
