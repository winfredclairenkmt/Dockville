const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const app = express();
const connectDB = require('./config/dbConfig')
const port  = process.env.PORT || 3000;
const passport = require('passport');


// importing homeRoutes
const User = require('./models/userModel')
const landingRoutes = require('./controllers/landingRoutes')
const carRoutes = require('./controllers/carRoutes')
const batteryRoutes = require('./controllers/batteryRoutes')
const tyreRoutes = require('./controllers/tyreRoutes')
const dashRoutes = require('./controllers/dashRoutes')
const loginRoutes = require('./controllers/loginRoutes')
const userRoutes = require('./controllers/userRoutes')


//importing the session
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
})


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// calling the function
connectDB();

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());


passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// setting up directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// using imported routes
app.use('/api', landingRoutes);
app.use('/api', carRoutes);
app.use('/api', batteryRoutes);
app.use('/api', tyreRoutes);
app.use('/api', dashRoutes);
app.use('/api', loginRoutes);
app.use('/api', userRoutes);



app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));






