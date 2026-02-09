require("dotenv").config();
const connectToDb = require("./Config/ConnectToDb");
const app = require("./main");

const PORT = process.env.PORT || 5000;

connectToDb();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
