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
            <h1>Data-Analytics SiVIGILA </h1>
          </header>


          <form id='miFormulario'>

            <h2 id='text'>Escoja una opcion</h2>

            <div className='select-box'>
              <select name="" className="departamentos">
                <option value="">Colombia</option>
              </select>

              <select name="" id="">
                <option value="">2023</option>
              </select>

              <select name="" id="">
                <option value="">Dengue</option>
                <option value="">Infeccion Respiratoria</option>
                <option value="">Malaria</option>
                <option value="">Intento de suicidio</option>
                <option value="">Morbilidad materna externa</option>
              </select>
            </div>


            <button id=''>Escoger</button>
          </form>


       
        </body>

      </>
    )
  }

  export default Header
