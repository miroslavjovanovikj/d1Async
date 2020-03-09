const fs = require('fs');

const readFile= async(req, res)=>{
  await fs.readFile('studenti.json', 'utf8',(err, data)=>{
       try{
         let json = JSON.parse(data)
         res.send(json)
       }catch(err){
         console.log(err)
       }
   })

}

const writeFile = async(req,res)=>{
  await fs.readFile('studenti.json', 'utf8', (err, data)=>{
      try{
        let json =JSON.parse(data);

         json.push({student:`${req.body.name} ${req.body.lastname}`})
         fs.writeFile('studenti.json', JSON.stringify(json),(err)=>{
           res.send("succes")
         })
      }catch(err){
        console.log(err)
      }

  })


}

module.exports ={writeFile, readFile}
