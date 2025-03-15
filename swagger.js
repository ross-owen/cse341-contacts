const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: 'Contacts',
        description: 'My Contacts'
    },
    host: 'cse341-ross-contacts.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);