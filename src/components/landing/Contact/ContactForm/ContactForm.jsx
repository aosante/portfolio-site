import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

import { Button, Input, TextArea } from 'components/common'
import { Error, Center, InputField } from './styles'

const ContactForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    mode: 'onTouched',
  })

  const onSubmit = (data) => {
    const formData = new FormData()

    Object.keys(data).forEach((field) =>
      formData.append(`${field}`, data[field])
    )

    // @todo: place endpoint in env variable
    fetch(`https://getform.io/f/${process.env.GATSBY_GETFORM_KEY}`, {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        Swal.fire('Message sent!', "I'll get back to you ASAP", 'success')
        reset()
      })
      .catch((error) => alert(error))
  }

  return (
    <form name="portfolio-dev" method="POST" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="form-name" value="contact" />
      <InputField>
        <Input
          type="text"
          name="name"
          aria-label="name"
          placeholder="Full name *"
          {...register('name', { required: true })}
          error={Boolean(errors.name)}
        />
        <Error>{errors.name && 'Your name is required'}</Error>
      </InputField>
      <InputField>
        <Input
          id="email"
          aria-label="email"
          type="email"
          name="email"
          placeholder="Email *"
          {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
          error={Boolean(errors.email)}
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
          placeholder="Message *"
          {...register('message', { required: true })}
          error={Boolean(errors.message)}
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
