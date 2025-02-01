const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs/promises');
const expressLayout = require('express-ejs-layouts');
const {weatherRender, tes} = require('../weather-app/controllers/control');
const { title } = require('process');

// gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static('public'));

// middleware
app.use(express.urlencoded({ extended:true }))

// main page route
app.get('/', (req, res) => {
    const city = req.params.city
    res.render('main',{
        layout : 'layouts/main-layout',
        title: 'Main',
        city
    })
})


// route for catch input and redirect route as input
app.post('/search', (req, res) => {
    const city = req.body.city; // catch data from input form
    res.redirect(`/${city}`)
})


// app.get('/:city', (req, res) => {
//     weatherRender(req.params.city)
// })

app.get('/:city', async (req, res) => {
    const city = req.params.city; // Ambil parameter dari URL
    try {
      const data = await weatherRender(city); // Panggil fungsi untuk fetch data
      const a = tes(city)
      res.render('main', {  
        layout: 'layouts/main-layout',
        city,
        weather: data, // Kirim data ke view
        title: `Weather in ${city}`,
        a
        
      });
    } catch (error) {
      res.render('error-page', {
        layout: 'layouts/main-layout',
        urlMsg : city,
        title : 'Error 404',
        city : null,
        weather : null
      })
    }
    
  });

app.listen(port ,() => {
    console.log(`Server on listening in port ${port}`)
})