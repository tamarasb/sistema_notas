import express from "express"
import Handlebars from "handlebars"
import handlebars from "express-handlebars"
import bodyParser from "body-parser"
import { allowInsecurePrototypeAccess} from "@handlebars/allow-prototype-access";

const app = express()

app.set("view engine", "handlebars")
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'index',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
bodyParser.urlencoded({extended:false})
bodyParser.json()

//routes
app.get("/", (req, res)=>{
    res.render("main")
})

app.listen(3000, ()=>{
    console.log("Server running on https://localhost:3000...")
})