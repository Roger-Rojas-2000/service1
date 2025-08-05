import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hola desde el index, soy Roger Rojas.')
})

app.listen(3000, ()=>{
  console.log('Listening on port 3000')
})

