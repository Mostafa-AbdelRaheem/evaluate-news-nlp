
require('dotenv').config();
const mockAPIResponse = require('./mockAPI.js')
const fetch =require('node-fetch')


// TODO add Configuration to be able to use env variables
const PORT = 8081
const API_KEY= process.env.API_KEY
const BASE_API_URL='https://api.meaningcloud.com/sentiment-2.1?'

// add .env in .gitignore

// TODO: Create an instance for the server
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
// a route that handling post request for new URL that coming from the frontend
//this is the route the clinet will use to send data to me (me as the server)
app.post('/addUrl',async(req,res)=>{
    //text coming from client side
    clientUrl = req.body.clientEnteredUrl;
    // console.log("this is the req.body",clientUrl);
    
    const apiUrl=`${BASE_API_URL}key=${API_KEY}&url=${clientUrl}&lang=en`
    // console.log("apiUrl : ",apiUrl);
    // getData(apiUrl)
    
    const apiRespone=await fetch(apiUrl)
    try{
        const dataRecieved =await apiRespone.json()
        // console.log("dataRecieved",dataRecieved)
        res.send(dataRecieved)
    }catch(error){
        console.log("error",error.message)
    }

            // res.send(text);
});
        
        
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})
        
        // TODO: export app to use it in the unit testing
        
        // const getData =async(API_URL) =>{
        //         const apiRespone=await fetch(API_URL)
        //         try{
        //                 const dataRecieved = await apiRespone.jason();
        //                 console.log("dataRecieved",dataRecieved)
        //                 return dataRecieved;
        //             }catch(error){
        //                     console.log("error",error.message)
        //                 }
        //             }
        
        
        // console.log("apiRespone",apiRespone);
        // const BASE_API_URL='https://api.meaningcloud.com/sentiment-2.1'
        // const API_URL=`${BASE_API_URL}?key=${API_KEY}&url=${clientUrl}&lang=en`
        // getData(apiUrl)