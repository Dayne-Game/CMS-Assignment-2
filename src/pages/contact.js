import React from "react"
import Theme from "../theme/theme"
import contactStyles from "./styles/contact.module.scss"

const ContactPage = () => {
  return (
    <Theme>
      <div className={contactStyles.contactContainer}>
        <h1>Contact Me!</h1>
        <form>
          <input
            type="text"
            className={contactStyles.input}
            placeholder="Name"
            required
          />
          <input
            type="text"
            className={contactStyles.input}
            placeholder="Email"
            required
          />
          <textarea
            className={contactStyles.messageBox}
            rows="10"
            placeholder="Write me a Message!"
            required
          />
          <button type="submit" className={contactStyles.send}>
            Send
          </button>
        </form>
      </div>
    </Theme>
  )
}

export default ContactPage
