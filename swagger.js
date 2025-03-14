const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: 'Contacts',
        description: 'My Contacts'
    },
    host: 'localhost:3000'
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);