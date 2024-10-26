const express = require('express');
const app = express();
const PORT = process.env.PORT || 80 ;
app.get('/',(request,response)=>{
    response.send('Test API')
    
})
app.listen(PORT ,()=>{
   console.log('REST API via Express')
})
