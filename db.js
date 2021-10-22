const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    "media-library",
    "postgres",
    process.env.PASS,
    {
        host: "localhost",
        dialect: "postgres",
    }
);

sequelize.authenticate().then(
    function () {
        console.log("Connected to media-library postgres database");
    },
    function (err) {
        console.log(err);
    }
);

module.exports = sequelize;