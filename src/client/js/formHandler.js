const post = async (url='',data={})=>{
    const response = await fetch (url,{
        method:'POST',
        credentials:'same-origin',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        // body:JavascriptModulesPlugin.stringify(data)
        body:JSON.stringify(data)
    })
    try{
        const res = await response.json()
        const result =res.sentence_list[0]
        console.log("result",result)
        // document.getElementById('text').innerHTML = res.text
        document.getElementById('text').innerHTML = result.text
        document.getElementById('agreement').innerHTML = result.agreement
        document.getElementById('subjectivity').innerHTML = result.subjectivity
        document.getElementById('confidence').innerHTML = result.confidence
        document.getElementById('irony').innerHTML = result.irony
        document.getElementById('score_tag').innerHTML = result.score_tag

        return await response.json()
    }catch(error){
        console.log(error)
    }
}
function handleSubmit(event) {
    
    event.preventDefault()
    // check what text was put into the form field
    let clientEnteredUrl  = document.getElementById('url').value
    if(Client.checkUrl(clientEnteredUrl )){
        
        // console.log("::: Form Submitted :::")
        const data ={clientEnteredUrl}
        console.log("clientEnteredUrl",data)
        post('http://localhost:8081/addUrl',data)
        
    }else{
        alert("please enter Valid URL")
    }
}
export { handleSubmit }
// TODO: get the button for submit
// TODO: add event listener to it when the click to call handleSubmit function
/**
 * TODO: Get Value of the input for URL
 *  TODO: Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */

// fetch('http://localhost:8081/addUrl', {
    //     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Content-Type": "application/json" },
// })
// .then(res => res.json())
// .then(function(res) {
//     console.log("res of API")
//     // document.getElementById('results').innerHTML = res.message
// })


// const formdata = new FormData();
// formdata.append("key", "9034599b23f2fee2bffffd781759cef2");
// formdata.append("txt", "YOUR TEXT HERE");
// formdata.append("lang", "TEXT LANGUAGE HERE");  // 2-letter code, like en es fr ...

// const requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

// const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
//   .then(response => ({
//     status: response.status, 
//     body: response.json()
//   }))
//   .then(({ status, body }) => console.log(status, body))
//   .catch(error => console.log('error', error));




// You could call it aylienapi, or anything else

// const dotenv = require('dotenv');
// dotenv.config()
// console.log(`Your API key is ${process.env.API_KEY}`);
// var textapi = new meaningCloud({
//     application_key:process.env.API_KEY
// });
// add .env in .gitignore


//     event.preventDefault()
//     console.log(`Your API key is ${process.env.API_KEY}`);
//     var textapi = new meaningCloud({
//         application_key:process.env.API_KEY
//     });
// // add .env in .gitignore
//     console.log(`Your API key in textapi ${textapi}`);