const express = require("express");
const app = express();

const PORT = 3000;

const mainRoutes = require("./routes/mainroutes");

app.use("/", mainRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})