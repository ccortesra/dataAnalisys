import { useState } from 'react'
import './Header.css'


function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
       <header>
            <img src="https://cdn.discordapp.com/attachments/1118913330137022484/1118934895201353728/LogoDataA.png" alt="" />
            <h1>Visualización de datos de salud</h1>
       </header>

       <form>
        <p>Escoja una opcion</p>
        <select name="" id="">
            <option value="">Bogota</option>
            <option value="">Nariño</option>
        </select>

        <select name="" id="">
            <option value="">2019</option>
            <option value="">2020</option>
            <option value="">2021</option>
            <option value="">2022</option>
            <option value="">2023</option>
        </select>

        <select name="" id="">
            <option value="">2019</option>
            <option value="">2020</option>
            <option value="">2021</option>
            <option value="">2022</option>
            <option value="">2023</option>
        </select>


        <button type='submit'>escoger</button>
       </form>
     
    </>
  )
}

export default Header
