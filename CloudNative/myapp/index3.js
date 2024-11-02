const express = require('express');
const app = express();
const fs = require('fs');

const Tvs = require('./tvs.json').tvs;
//middleware
// Pour récupérer les données passées dans la requête POST
// Nous devons ajouter un middleware à notre Node JS
// API afin qu’elle soit capable d’interpréter le body de la requête 
app.use(express.json());


/// listen to the port 82
app.listen(82 ,()=>{
    console.log('REST API via EXPRESSJS')
});
// // css
// app.use(express.static('public'));   

// app.get('/tvs',(req,res)=>{
//     // res.send("Liste des Tvs ! ");
//     res.status(200).json(Tvs);
// })

// app.get('/tvs/:id',(req,res)=>{
//     const id = parseInt(req.params.id );
//     const Tv = Tvs.find(tv => tv.id == id);
//     res.status(200).json(Tv);
// })
app.get('/tvs', (req, res) => {
    const jsonString = JSON.stringify(Tvs, null, 2); 
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TVs List</title>
        <link rel="stylesheet" href="/styles.css">
        <style>
          pre {
            background-color: #f0f0f0;
            padding: 10px;
            border-radius: 5px;
            font-size: 16px;
            white-space: pre-wrap;
            color: #333;
          }
        </style>
      </head>
      <body>
        <h1>List of TVs</h1>
        <pre>${jsonString}</pre>
      </body>
      </html>
    `);
  });

// app.get('/tvs/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const Tv = Tvs.find(tv => tv.id == id);
  
    
//     if (!Tv) {
//       return res.status(404).send(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>TV Not Found</title>
//           <style>
//           p {
//             color: #5555;
//           }
//         </style>
//         </head>
//         <body>
//           <h1>TV Not Found</h1>
//           <p>The TV with ID ${id} could not be found.</p>
//         </body>
//         </html>
//       `);
//     }
  
//     const jsonString = JSON.stringify(Tv);
  
//     res.send(`
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>TV Details</title>
//         <style>
//           pre {
//             background-color: #f0f0f0;
//             padding: 10px;
//             border-radius: 5px;
//             font-size: 16px;
//             white-space: pre-wrap;
//             color: #333;
//           }
//         </style>
//       </head>
//       <body>
//         <h1>TV Details</h1>
//         <pre>${jsonString}</pre>
//       </body>
//       </html>
//     `);
//   });


// post
// app.post('/tvs',(req,res)=>{
//     Tvs.push(req.body)
//     res.status(200).json(Tvs);
// })
// put is used to modify the value 
// of the parametre wanted 
// wich is ID in our case
// body d'une requete represente les donées envoyés ou modifiés
// PUT route
app.put('/tvs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let tv = Tvs.find(tv => tv.id === id); // Use Tvs directly

    if (!tv) {
        return res.status(404).send('TV not found'); // Handle not found case
    }

    // Update TV properties from the request body
    tv.nom = req.body.nom;
    tv.prix = req.body.prix;

    // Save updated TV list back to the JSON file
    fs.writeFileSync('./tvs.json', JSON.stringify({ tvs: Tvs }, null, 2));

    res.status(200).json(tv);
});
// DELETE 
app.delete('/tvs/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    let Tv = Tvs.find(tv => tv.id === id);
    Tvs.splice(Tvs.indexOf(Tv),1);
    // Save updated TV list back to the JSON file
    fs.writeFileSync('./tvs.json', JSON.stringify({ tvs: Tvs }, null, 2));
    res.status(200).json(Tvs)
})
