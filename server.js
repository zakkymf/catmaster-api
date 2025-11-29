const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./src/docs/swagger.json");
const ownerRoutes = require("./src/routes/owner.routes");
const errorMiddleware = require("./src/middleware/error.middleware");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/owners", ownerRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get("/", (req, res) => res.send("CatMaster API Running 🐾"));

app.use(errorMiddleware);

app.listen(PORT, () => console.log("Server running at http://localhost:3000"));
