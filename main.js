const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load("./swagger.yaml");

const authRoutes = require("./routes/auth.routes");
const noteRoutes = require("./routes/note.routes");
const sharedNoteRoutes = require("./routes/shared.note.routes");
const profileRoutes = require("./routes/profile.route");
const adminRoutes = require("./routes/admin.routes");
const aiRoutes = require("./routes/ai.routes");

const app = express();
const corsOptions = {
  origin: process.env.FRONT_URL,
  credentials: true,
};
// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api/note", noteRoutes);
app.use("/api/shared-note", sharedNoteRoutes);
app.use("/api/user", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/ai", aiRoutes);

module.exports = app;
