const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const app = express();
// const connectDB = require('./config/dbConfig')
const port  = process.env.PORT || 3000;



// importing homeRoutes
const landingRoutes = require('./controllers/landingRoutes')
const carRoutes = require('./controllers/carRoutes')
const batteryRoutes = require('./controllers/batteryRoutes')
const tyreRoutes = require('./controllers/tyreRoutes')
const dashRoutes = require('./controllers/dashRoutes')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// calling the function
// connectDB();

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// setting up directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// using imported routes
app.use('/api', landingRoutes);
app.use('/api', carRoutes);
app.use('/api', batteryRoutes);
app.use('/api', tyreRoutes);
app.use('/api', dashRoutes);



app.listen(3000, () => console.log('listening on port 3000'));






