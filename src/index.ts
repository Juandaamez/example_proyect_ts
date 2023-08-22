import App from "./config/app";
import {connectDB} from "./config/db";


async function main(){
  const app = new App();
  console.clear();
  app.initializer();
  connectDB()
  .then(() => console.log('Successfully connection database'))
  .catch((error: string) => console.log("Error connecting database",error));

}
main();
