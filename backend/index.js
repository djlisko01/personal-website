import app from "./server.js";
import dotenv from "dotenv";

async function main() {
  dotenv.config();
  const port = process.env.PORT || 8000;

  try {
    app.listen(port, () => {
      console.log(`Server on port: ${port}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

// Send any error messages to the console.
main().catch(console.error);
