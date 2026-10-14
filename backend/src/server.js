import 'dotenv/config'
import app from './app.js'

const cors = require("cors");

app.use(cors({
  origin: "https://foodcourt-platform.vercel.app"
}));
