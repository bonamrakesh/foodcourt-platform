import 'dotenv/config'
import app from './app.js'

import cors from "cors";

app.use(cors({
  origin: "https://foodcourt-platform.vercel.app"
}));
