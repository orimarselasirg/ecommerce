const { app } = require("./app");
const { PORT } = process.env;
const { dbConnect } = require("./src/database/database");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbConnect();
});
