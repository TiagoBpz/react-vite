import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import {Btn} from './components/btn.jsx'
import {Menu} from './components/menu.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Menu s1='morango' s2='batata' s3='laranja'/>
   <main>
    <section id='s1'>primeira
    <br />
    <Btn text='desce' func='#s2'/>
      </section>
    <section id='s2'>segunda
      <br/>
      <Btn text='desce mais' func='#s3'/>
      </section>
    <section id='s3'>terceira
    <br />
      <Btn text='sobe tudo' func='s1'/>
      </section>
   </main>

    </>
  )
}

export default App
