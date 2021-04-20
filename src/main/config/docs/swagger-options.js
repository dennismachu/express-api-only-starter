export const specOptions = {
  swaggerDefinition: {
    openapi: '3.0.2',
    info: {
      title: 'Boilerplate Express Server',
      description:
        'An Express Server Node.js API only boilerplate with Mongo DB',
      contact: {
        name: 'Wonchunii',
        url: 'https://wonchunii.com/',
        email: 'support@wonchunii.com',
      },
      servers: ['<SERVER_1_URL_HERE>', '<ANOTHER_SERVER_URL_HERE>'],
      version: '1.0.0',
    },
  },
  tags: ['Route Tag 1', 'Route Tag 2', 'ResponseBody Tag 1'],
  apis: ['src/main/config/docs/*.yaml'],
  consumes: ['application/json'],
  produces: ['application/json'],
}

export const customOptions = {
  customCssUrl: '/swagger-style.css',
}
