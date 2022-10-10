import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../Common/apollo-client'


import { Header } from '../header/header.component'

import './app.component.css'
import '../../Common/styles'
import { About } from '../../pages/about/about.page'
import { Home } from '../../pages/home/home.page'



export const App: React.FC = () => {
  return (
    <div>
      <ApolloProvider client={client}>
          <Router>
              <Header />

              <Routes>
                <Route path='/about' element={<About />}> </Route>  
                <Route path='/' element={<Home />}> </Route>             
              </Routes>
          </Router>
        </ApolloProvider>
    </div>
  )
}
