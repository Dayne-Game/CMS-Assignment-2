import React from "react"

import Theme from "../theme/theme"
import policyStyles from "./styles/policy.module.scss"

const PolicyPage = () => {
  return (
    <Theme>
      <div className={policyStyles.policyContainer}>
        <h1>Policy</h1>
        <p>We dont' have any! Jog on!</p>
      </div>
    </Theme>
  )
}

export default PolicyPage
