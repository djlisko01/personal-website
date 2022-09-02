import mongodb from "mongodb";
import dotenv from "dotenv";

// Connect to env file.
dotenv.config();
const client = new mongodb.MongoClient(process.env.PORTFOLIO_DB_URI);
const db_name = process.env.DB_NAME;

const connectToDatabase = async (collect) => {
  try {
    // Connect to Client to the server cluster
    await client.connect();

    // Connect to the database
    const db = await client.db(db_name);
    console.log(`Connected to: ${db_name}`);
    const collection = db.collection(collect);

    return collection;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (userName, password) => {
  try {
    const collection = await connectToDatabase("user_info");
    const user = await collection.findOne({
      username: userName,
      password: password,
    });
    console.log(user);
  } finally {
    await client.close();
  }
};
