import "dotenv/config";
import { app } from "./app";
import connectToDatabase from "./db/mongoose";

const port = parseInt(process.env.PORT as string) || 5138;

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(
        `⚙️ Server is running at port: ${port} in ${process.env.NODE_ENV} mode`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
