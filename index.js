const express = require("express")
const app = express()
const port = 5000

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('form')
  })

app.get('/form/connexion', (req, res) => {
    res.render('connexion')
  })

app.post('/form', (req, res) => {
    console.log(req.body)
    res.redirect('/form/connexion')
  })

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
  })