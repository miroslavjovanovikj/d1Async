const express     = require('express');
      bodyParser  = require('body-parser'),
      fs          = require('fs'),
      handlers    = require('./handlers'),
      app         = express();



app.use(bodyParser.urlencoded({extended:true}));


app.get('/',handlers.readFile)
app.post('/',handlers.writeFile)


app.listen(3000, ()=>{
  console.log('Server is started...')
});
