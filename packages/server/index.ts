import express from "express"
import router from "./routes/summerizerRoute"

const app = express()
const port = 4000

app.use(router);

app.get("/api",(req, res)=>{
    res.json({message: "it workedd"})
})

app.listen(port, ()=>{
    console.log(`Server listen to Port: ${port}`)
})