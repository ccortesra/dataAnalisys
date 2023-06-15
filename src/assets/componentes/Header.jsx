import { useState } from 'react'
import './Header.css'
import * as XLSX from 'xlsx';


  function Header() {
    const [count, setCount] = useState(0)
    
    
    return (
      <>

        <body>
          <header>
            <img src="https://cdn.discordapp.com/attachments/1118913330137022484/1118934895201353728/LogoDataA.png" alt="" />
            <h1>Visualización de datos de salud</h1>
          </header>


          <form id='miFormulario'>

            <h2 id='text'>Escoja una opcion</h2>

            <div className='select-box'>
              <select name="" className="departamentos">
                <option value="">Bogota</option>
                <option value="">Nariño</option>
                <option value="">Cesar</option>
                <option value="">Choco</option>
                <option value="">Vaupes</option>
              </select>

              <select name="" id="">
                <option value="">2019</option>
                <option value="">2020</option>
                <option value="">2021</option>
                <option value="">2022</option>
                <option value="">2023</option>
              </select>

              <select name="" id="">
                <option value="">Cancer Infantil</option>
                <option value="">Dengue</option>
                <option value="">Hepatitis</option>
                <option value="">Chikunguya</option>
                <option value="">Intoxicación</option>
              </select>
            </div>


            <button id=''>Escoger</button>
          </form>


       
        </body>

      </>
    )
  }

  export default Header
