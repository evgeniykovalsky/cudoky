
import fs, { appendFile } from 'fs-extra';




export function getJsonLevel(){
    
    
   //let url=`${app.path.srcFolder}/data.json`;
    let url=`./src/data.json`;

   const dataFromFile=JSON.parse(fs.readFileSync(url));
   console.log(dataFromFile); 

     
     
//     let response = fetch(url,{
//         method: 'POST',
//         headers: { method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'no-cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//           'Content-Type': 'application/json'
//         }}});

// if (response.ok) { // если HTTP-статус в диапазоне 200-299
//   // получаем тело ответа (см. про этот метод ниже)
//   let json =  response.json();
// } else {
//   console.log("Ошибка HTTP: " + response.status);
// }
}