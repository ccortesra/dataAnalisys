import { useState } from 'react'
import './Header.css'
import jsonUrl from '../componentes/pbi.json'

  function Header() {
    const [count, setCount] = useState(0)
    
    // Crear un diccionario vacío
    var diccionario = {};

    // Agregar elementos al diccionario
    diccionario["Dengue"] = "https://media.discordapp.net/attachments/1118913330137022484/1119007948308496546/image.png?width=1040&height=585";
    diccionario["clave2"] = "valor2";
    diccionario["clave3"] = "valor3";
    return (
      <>

        <body>
          <header>
            <img src="https://cdn.discordapp.com/attachments/1118913330137022484/1118934895201353728/LogoDataA.png" alt="" />
            <h1>Data-Analytics SiVIGILA </h1>
          </header>
          <div className='images-box'>
          <img src="https://media.discordapp.net/attachments/1118913330137022484/1119006916182548592/image.png?width=1040&height=585" alt="" />
          <img src="https://media.discordapp.net/attachments/1118913330137022484/1119006970507174069/image.png?width=1040&height=585" alt="" />
          </div>

          <form id='miFormulario'>

            <h2 id='text'>Escoja una opcion</h2>

            <div className='select-box'>
              <select name="" className="departamentos">
                <option value="">Colombia</option>
              </select>

              <select name="" id="">
                <option value="">2023</option>
              </select>

              <select name="" id="enfermedad">
                <option value="">Dengue</option>
                <option value="">Infeccion Respiratoria</option>
                <option value="">Malaria</option>
                <option value="">Intento de suicidio</option>
                <option value="">Morbilidad materna externa</option>
              </select>
            </div>


            <button id=''>Escoger</button>


            <img src={diccionario["Dengue"]} alt="" />
          </form>
          

          


       
        </body>

      </>
    )
  }

  export default Header
