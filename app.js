const path = require('path')
const express = require('express')
const port = 8000

app = express();

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','app.html'));
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
