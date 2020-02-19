import React from 'react'
import { render } from 'react-dom'
import './styles/index.scss'
import Header from './containers/Header/Header'
import Main from './containers/Main/Main'
import Footer from './containers/Footer/Footer'

const App = () =>
<>
  <Header />
  <Main />
  <Footer />
</>

render(<App />, document.querySelector('#app'))
