// console.log("test")
// const axios = require("axios");

async function gitDaThyme(){
    try {
        const {data} = await axios.post('/api/time', {test: "test"})
        console.log(data);
    } catch(err) {
        console.log(err);
    };
}
gitDaThyme()