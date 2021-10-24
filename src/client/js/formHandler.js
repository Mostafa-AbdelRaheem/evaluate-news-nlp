const post = async (url='',data={})=>{
    const response = await fetch (url,{
        method:'POST',
        credentials:'same-origin',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    try{
        const res = await response.json()
        const result =res.sentence_list[0]
        console.log("result",result)
        document.getElementById('text').innerHTML = `text: ${result.text}`; 
        document.getElementById('agreement').innerHTML = `agreement: ${result.agreement}`
        document.getElementById('subjectivity').innerHTML = `subjectivity${result.subjectivity}`
        document.getElementById('confidence').innerHTML = `confidence${result.confidence}`
        document.getElementById('irony').innerHTML = `irony${result.irony}`
        document.getElementById('score_tag').innerHTML = `score_tag${result.score_tag}`

        return await response.json()
    }catch(error){
        console.log(error)
    }
}
function handleSubmit(event) {
    
    event.preventDefault()

    let clientEnteredUrl  = document.getElementById('url').value
    if(Client.checkUrl(clientEnteredUrl )){
    
        const data ={clientEnteredUrl}
        post('http://localhost:8081/addUrl',data)
        
    }else{
        alert("please enter Valid URL")
    }
}
export { handleSubmit }