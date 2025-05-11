import React from 'react'
import StartSection from '../../components/startSection/StartSection'
import AdmissionProcess from '../../components/admissionProcess/AdmissionProcess'
const Admissions = () => {
  return (
    <>
    <StartSection 
    title={'Admission'}
    mainTitle={'Join Our Family of Young Learners'}
    paragraph={'At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Heres a step-by-step guide to joining our school'}
    />
    <AdmissionProcess />
    </>
  )
}

export default Admissions
