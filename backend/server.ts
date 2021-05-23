const appServer = require("./app.ts");
const PORT = 5000; //temporal para prueba basica retirar después

appServer.listen(PORT, () => console.log("Listening on Port:", PORT));
