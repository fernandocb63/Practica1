const axios = require ('axios');
const apiKey = '5f869e794825494b846a6738bee04db2';
let aa='abc';


module.exports=function getnews(q: string): Promise<any> {
        let url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}`;
        return axios.get(url);
}


