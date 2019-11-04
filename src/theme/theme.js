import React from "react"

import "../theme/theme-styles/index.scss"
import themeStyles from "./theme-styles/theme.module.scss"
import Header from "./components/header"

const Theme = props => {
  return (
    <div className={themeStyles.container}>
      <Header />
      <div className={themeStyles.content}>{props.children}</div>
    </div>
  )
}

export default Theme
