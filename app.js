const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerUI from 'swagger-ui-express';
const router = require('./src/routes/blogroutes')
const router1 = require('./src/routes/userrooutes')
const router2 = require('./src/routes/messageroutes')
const port  = process.env.PORT;
const app = express();
const options = {
    swaggerDefinition:{
        openapi: '3.0.0',
        info: {
            title: 'My brand api',
            version: '1.0.0',
            description: 'Simple express api'
        },
        servers: [{
            url : process.env.SWAGGER_URL
        }],
        components: {
            securitySchemes:{
             bearerAuth: {
                 type: "http",
                 scheme: "bearer",
                 bearerFormat: "JWT"
             },
             security:[
                 {
                     bearerAuth: []
                 }
             ]
            }
        }
     
    },
    apis: ['./src/routes/*.js']
}

const specs = swaggerJSDoc(options);

app.use('/api-docs',SwaggerUI.serve,SwaggerUI.setup(specs));
        app.use(express.json());
        app.use(express.urlencoded({extended: false}));
        app.use('/',router);
        app.use('/',router1);
        app.use('/',router2);

app.listen(port,(req,res)=>{
    console.log('server running on port: ', port)
})

//connection to database
mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DB_URL_TEST,{ useNewUrlParser: true }).then(()=>{
        
    console.log("database connect")
       
    }).catch((error)=>{
        console.log(error)
    })

    export default app