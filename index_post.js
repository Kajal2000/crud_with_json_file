// post data
const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.post('/api',(req,res) => {
   const con = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
   };
   var rawdata = fs.readFileSync('data.json');
   rawdata = rawdata.toString();
   var student = JSON.parse(rawdata);

    for(var i=0;i<student.length;i++){
        if (student[i]["email"] == con["email"]){
            return  res.end("kkkkkkkkkkkkkkkkkkkkkkkkk")
       }
    }
    con.id = student.length + 1
    student.push(con)

    fs.writeFileSync('data.json', JSON.stringify(student,null));
    return res.JSON(student)
});
app.listen(8006,function(){
   console.log("Started on PORT 8006");
});