import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { Container } from 'components/common'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm/ContactForm'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <StaticImage
        src="../../../assets/illustrations/contact2.svg"
        alt="Contact Form"
      />
    </Thumbnail>
  </Wrapper>
)
