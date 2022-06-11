import axios from 'axios'
async function fetchHello(){
    let res = axios.get("/api/helloworld");
    return res
}
async function fetchJSONData(){
    let res =  await fetch('/api/getJsonData')
    return  res.json()
}
async function fetchCatImg() {
    let res = await fetch('/api/getCatImgData')
    return res.json()
}
export {
    fetchHello,
    fetchJSONData,
    fetchCatImg
}