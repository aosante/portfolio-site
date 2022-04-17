import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

import { Button, Input, TextArea } from 'components/common'
import { Error, Center, InputField } from './styles'

const ContactForm = () => {
  const { handleSubmit, errors, register, reset } = useForm({
    mode: 'onTouched',
  })

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  const onSubmit = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data }),
    })
      .then(() => {
        Swal.fire('Message sent!', "I'll get back to you ASAP", 'success')
        reset()
      })
      .catch((error) => alert(error))
  }
  return (
    <form
      name="portfolio-dev"
      method="post"
      // will devploy on gatsby cloud, so this no longer works

      // data-netlify="true"
      // data-netlify-recaptcha="true"
      // data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" name="form-name" value="contact" />
      <InputField>
        <Input
          type="text"
          name="name"
          aria-label="name"
          placeholder="Full name*"
          ref={register({ required: true })}
          error={errors.name ? true : false}
        />
        <Error>{errors.name && 'Your name is required'}</Error>
      </InputField>
      <InputField>
        <Input
          id="email"
          aria-label="email"
          type="email"
          name="email"
          placeholder="Email*"
          ref={register({ required: true, pattern: /^\S+@\S+\.\S+$/ })}
          error={errors.email ? true : false}
        />
        <Error>
          {errors.email && 'You must provide a valid email address'}
        </Error>
      </InputField>
      <InputField>
        <TextArea
          aria-label="message"
          id="message"
          rows="8"
          type="message"
          name="message"
          placeholder="Message*"
          ref={register({ required: true })}
          error={errors.message ? true : false}
        />
        <Error>{errors.message && 'This field is required'}</Error>
      </InputField>
      {/* TODO: Add recaptcha here */}
      <Center>
        <Button secondary type="submit">
          Submit
        </Button>
      </Center>
    </form>
  )
}

export default ContactForm
