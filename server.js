import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';

import routes from './routes/index.js'
import passport from './controllers/auth/auth.controller.js';
import session from 'express-session';
// import passportSetup from './passport.js';
import cookieSession from 'cookie-session';


const app = express();
dotenv.config()

// Connection to MongoDB
connectDB()

const whitelist = [
    'http://localhost:3000',
]

const corsOptions = {
    origin: function(origin, callback) {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}

app.use(session({ secret: 'zandersession', resave: true, saveUninitialized: true }));
// Middlewares
app.use(express.json());
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));
app.use(bodyParser.json());



// app.use(cookieSession({
//     name: 'session',
//     keys: ['zanderkey'],
//     maxAge: 24 * 60 * 60 * 100,
// }))
// Routes
app.use('/api/v1', routes)

// MIDDLEWARE FOR HANDLING ERRORS
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong!'
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});



// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});