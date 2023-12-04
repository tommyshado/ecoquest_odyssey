import express from "express";
import { engine } from 'express-handlebars'
import dotenv from "dotenv";
import pgPromise from "pg-promise";
import session from 'express-session';


const app = express();


const PORT = process.env.PORT || 3014;

app.listen(PORT, function () {
  console.log("App has started", PORT);
});
