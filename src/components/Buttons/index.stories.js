import React from "react"
import { ThemeProvider } from "styled-components"

import Button from "./Button"
import { storiesOf } from "@storybook/react"

export default { title: "Button" }

const theme = {
  primary: {
    color: "#007bff",
    hover: "#005fc6"
  },
  danger: {
    color: "tomato",
    hover: "#c54c36"
  },
  default: {
    color: "#b6b6b6",
    hover: "#929292"
  },
  font: "roboto"
}

storiesOf("Buttons", module)
  .add("Default", () => (
    <ThemeProvider theme={theme}>
      <Button>Default</Button>
    </ThemeProvider>
  ))
  .add("Primary", () => (
    <ThemeProvider theme={theme}>
      <Button primary>Primary</Button>
    </ThemeProvider>
  ))
  .add("Danger", () => (
    <ThemeProvider theme={theme}>
      <Button color="danger">danger</Button>
    </ThemeProvider>
  ))
  .add("Danger", () => (
    <ThemeProvider theme={theme}>
      <Button className="customClass">Custom</Button>
    </ThemeProvider>
  ))

// export const Default = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button primary>Primary</Button>
//     </ThemeProvider>
//   )
// }
