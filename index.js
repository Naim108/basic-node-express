const express = require('express')
const app = express()
const cors=require('cors')
const port = 5000
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from node js')
})
const users=[
    {id:0,name:"Sumaiya",email:'sumaiya@gmail.com',phone:"0186765..."},
    {id:1,name:"Suimin",email:'sumaiya@gmail.com',phone:"0186765..."},
    {id:2,name:"Sumi",email:'sumaiya@gmail.com',phone:"0186765..."},
    {id:3,name:"Shahin",email:'sumaiya@gmail.com',phone:"0186765..."},
    {id:4,name:"Karim",email:'sumaiya@gmail.com',phone:"0186765..."},
    {id:5,name:"Hashem",email:'sumaiya@gmail.com',phone:"0186765..."},
    {id:6,name:"Sakib",email:'sumaiya@gmail.com',phone:"0186765..."},
    {id:7,name:"Sojib",email:'sumaiya@gmail.com',phone:"0186765..."},,
]

app.get('/users',(req,res)=>{
  const search=(req.query.search)
  if(search){
const searchResult=users.filter(user=>user.name.toLowerCase().includes(search))
    res.send(searchResult)
  }
  else{
    res.send(users)
  }
    
})
app.get('/users/:id',(req,res)=>{
  const id=req.params.id
  const user=user[id]
    res.send(user)

})

app.post('/users', (req,res)=>{
  const newUser=req.body;
  const id=users.length;
  users.push(newUser)
  console.log('post submitted',req.body)
  res.json(newUser)
})
app.get('/fruits/mangoes/fazli',(req,res)=>{
  res.send('I eat fazli mango,yaaaaaaaA!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})