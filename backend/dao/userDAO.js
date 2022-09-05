import mongodb from "mongodb";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

// Connect to env file.
dotenv.config();
const client = new mongodb.MongoClient(process.env.PORTFOLIO_DB_URI);
const db_name = process.env.DB_NAME;

// For Encryption
const SALT_ROUNDS = 10;

const connectToCollection = async (collect) => {
  try {
    // Connect to Client to the server cluster
    await client.connect();

    // Connect to the database
    const db = client.db(db_name);
    console.log(`Connected to: ${db_name}`);
    const collection = db.collection(collect);
    return collection;
  } catch (err) {
    console.log(err);
  }
};

export const findUser = async (toConnect, username) => {
  let collection;
  try {
    collection = await connectToCollection(toConnect);

    const res = await collection.findOne({ username: username });
    console.log(toConnect, "--->", username);

    return res;
  } catch (error) {
    console.log("ERROR--", error);
  } finally {
    client.close();
  }
};

export const createUser = async (toConnect, userCredentials) => {
  try {
    const userExist = await findUser(toConnect, userCredentials.username);
    // if the user exist then don't create an account.
    if (userExist != null) {
      return false;
    }

    userCredentials.password = await bcrypt.hash(
      userCredentials.password,
      SALT_ROUNDS,
    );

    const collection = await connectToCollection(toConnect);
    await collection.insertOne(userCredentials);
    return true;
  } catch (error) {
    console.log("ERROR--", error);
  } finally {
    client.close();
  }
};

export const userLogin = async (toConnect, userCredentials) => {
  console.log("USER", userCredentials);
  const res = await findUser(toConnect, userCredentials.username);
  return res;
};
