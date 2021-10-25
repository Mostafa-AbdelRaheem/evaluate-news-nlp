function handleSubmit(event) {
    event.preventDefault()
    let clientEnteredUrl  = document.getElementById('url').value
    if(Client.checkUrl(clientEnteredUrl )){
    
        const data ={clientEnteredUrl}
        const options ={
            method:'POST',
            credentials:'same-origin',
            mode:'cors',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }
        fetch('http://localhost:8081/addUrl',options)
        .then(res =>{
            console.log("res receiend in formhandler",res)
            return res.json()
        })
        .then(function(data){
        const result =data
        document.getElementById('text').innerHTML = `text: "${result.sentence_list[0].text}"`; 
        document.getElementById('agreement').innerHTML = `agreement: "${result.agreement}"`
        document.getElementById('subjectivity').innerHTML = `subjectivity: "${result.subjectivity}"`
        document.getElementById('confidence').innerHTML = `confidence: "${result.confidence}"`
        document.getElementById('irony').innerHTML = `irony: "${result.irony}"`
        document.getElementById('score_tag').innerHTML = `score_tag: "${result.score_tag}"`
        })
    }else{
        alert("please enter Valid URL")
    }
}
export { handleSubmit }