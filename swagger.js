const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Personal API',
      version: '1.0.0',
      description: 'API documentation for personal use'
    },
    basePath: '/',
  },
  apis: ['app.js'], // replace app.js with the name of your main server file
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = function(app) {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
