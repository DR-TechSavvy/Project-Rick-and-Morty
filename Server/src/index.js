const http = require ("http");
// const data = require ("./utils/data.js")

const PORT = 3001;

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if(req.url.includes("/rickandmorty/character")){
//         const id = req.url.split("/").pop();
//         const pj = data.find((character)=> character.id === Number(id));
        
//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify(pj));
//     }
// }).listen(PORT, "127.0.0.1")

// const http = require("http");
const getCharById = require("./controllers/getCharById.js");

http
    .createServer((req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        if (req.url.includes(`/api/character`)) {
            const id = req.url.split("/").pop();
            getCharById(res, id); 
        }
    })
    .listen(PORT, "127.0.0.1");