import React from 'react'
import StartSection from '../../components/startSection/StartSection'
import Activites from '../../components/studentsActivites/Activites'
import Events from '../../components/events/Events'
import Support from '../../components/support/Support'
const StudentsLife = () => {
  return (
    <>
    <StartSection
    title={'Enriching Student Life'}
    mainTitle={'Embracing Learning with Discovery and Joy'}
    paragraph={'Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a childs development.'}
    style={'width'} 
    />
    <Activites />
    <Events />
    <Support />
    </>
  )
}

export default StudentsLife
