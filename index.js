const express = require('express')
const app = express()

app.route('/').get((request, response) => 
{
    response.send('Hop hey!')
})

app.listen(8080, ()=>
{
    console.log('Serve sterted')
 })