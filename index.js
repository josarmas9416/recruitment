const container = require("./src/startup/container");
const server = container.resolve('app');
const db = container.resolve('db');
db.sequelize.sync().then( () => {
    console.log('Connection has been established successfully.');
    server.start();
})

