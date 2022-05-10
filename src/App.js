import React, { Fragment } from 'react'
import { Banner } from './components/banner/Banner'
import { TalkForm } from './components/talkForm/TalkForm'
import { Toaster } from "react-hot-toast";



export const App = () => {
  return (
    <Fragment>
      <Toaster position="top-right" reverseOrder={false} />
      <Banner />
      <TalkForm />
    </Fragment>
  )
}

