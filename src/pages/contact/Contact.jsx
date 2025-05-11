import React from 'react'
import ContactStart from '../../components/contactStartSection/ContactStart'
import FormSection from '../../components/formSection/FormSection'
const Contact = () => {
  return (
    <>
      <ContactStart 
      title={'Contact Us'}
      mainTitle={'Feel Free To Connect With Us'}
      paragraph={'We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods'}
      style={'width'}/>
      <FormSection />
    </>
  )
}

export default Contact
