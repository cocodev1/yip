import React, {useState, useEffect} from 'react'
import Nav from './navigations/'
import {Provider} from 'react-redux'
import Store from './redux/store/configureStore'
import {createTables, addUuid, getUuid, dropTables} from './db'
import AppSplashAnimated from './AppSplashAnimated'
import * as Segment from 'expo-analytics-segment'

export default function App() {
    //dropTables()
    createTables()
      .then(() => {
        addUuid().then(res => {
          getUuid().then(uuid => {
            Segment.initialize({androidWriteKey: 'H01Crf99g0P3Pr6EkEF5cbR5lnZV7xny', iosWriteKey: 'H01Crf99g0P3Pr6EkEF5cbR5lnZV7xny'})
            Segment.identify(uuid)
          })
        })
      })

  return (
    <AppSplashAnimated>
      <Provider store={Store}>
        <Nav />
      </Provider> 
    </AppSplashAnimated>
  )
}

