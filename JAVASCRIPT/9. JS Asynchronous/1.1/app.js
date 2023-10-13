

const loadData = async (url="https://api.agify.io?name=michael") =>{
try{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

} catch (error){
    console.log(error)
}
}


loadData()
