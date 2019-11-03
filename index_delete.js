const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.delete('/api/:id',(req,res) => {
   id=req.params.id
   var rawdata = fs.readFileSync('data.json');
   rawdata = rawdata.toString();
   var student = JSON.parse(rawdata);

    for(var i=0;i<student.length;i++){
        if (student[i]["id"] == req.params.id){
            delete student[i]["first_name"]
            delete student[i]["last_name"]
            delete student[i]["email"]
            delete student[i][id]
            fs.writeFileSync('data.json', JSON.stringify(student,null));
            return res.json(student)    }  
    }
});
app.listen(8001,function(){
   console.log("Started on PORT 8001");
});