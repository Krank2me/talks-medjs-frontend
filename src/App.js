import React, { Fragment } from 'react'
import { Banner } from './components/banner/Banner'
import { TalkForm } from './components/talkForm/TalkForm'



export const App = () => {
  return (
    <Fragment>
      <Banner />
      <TalkForm />
    </Fragment>
  )
}

