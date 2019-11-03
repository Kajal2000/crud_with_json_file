const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.put('/api/:id',(req,res) => {
   id=req.params.id
   var rawdata = fs.readFileSync('data.json');
   rawdata = rawdata.toString();
   var student = JSON.parse(rawdata);

    for(var i=0;i<student.length;i++){
        if (student[i]["id"] == id){
            student[i]["first_name"]=req.body.first_name
            student[i]["last_name"]=req.body.last_name
            student[i]["email"]=req.body.email
            
            fs.writeFileSync('data.json', JSON.stringify(student,null));
            return res.JSON(student)    }  
    }
});
app.listen(8005,function(){
   console.log("Started on PORT 8005");
});