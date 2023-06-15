// import json_2019 from '../../excel_sheets/2019.json'

// document.addEventListener('DOMContentLoaded', function() {
//   console.log(json_2019)
//       const departamentosUnicos = new Set();
//       for (let i = 0; i < json_2019.length; i++) {
//         const departamento = json_2019[i].NDEP_PROCE;
//         if (departamento.slice(0, 5) != 'Total') {
//           departamentosUnicos.add(departamento);
//         }
//       }
//       const departamentosArray = Array.from(departamentosUnicos);
//       console.log(departamentosArray)
//       debugger
//       // Select element in the HTML
//       const selectElement = document.getElementsByClassName('departamentos');
    
//       // Iterate over the departments array and create option elements
//       for (let i = 0; i < departamentosArray.length; i++) {
//         const departamento = departamentosArray[i];
    
//         // Create option element
//         const optionElement = document.createElement('option');
//         optionElement.value = departamento;
//         optionElement.textContent = departamento;
//         debugger
//         // Append option element to select element
//         selectElement.appendChild(optionElement);
    
//         return departamentosArray
//   }
//   // Resto del código para crear las opciones del select
// });