
require('dotenv').config();
const mockAPIResponse = require('./mockAPI.js')
const fetch =require('node-fetch')


const PORT = 8081
const API_KEY= process.env.API_KEY
const BASE_API_URL='https://api.meaningcloud.com/sentiment-2.1?'


var path = require('path')
const express = require('express')
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'));

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/addUrl',async(req,res)=>{

    clientUrl = req.body.clientEnteredUrl;
    
    const apiUrl=`${BASE_API_URL}key=${API_KEY}&url=${clientUrl}&lang=en`
    
    const apiRespone=await fetch(apiUrl)
    try{
        const dataRecieved =await apiRespone.json()
        res.send(dataRecieved)
    }catch(error){
        console.log("error",error.message)
    }

});
        
        
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})