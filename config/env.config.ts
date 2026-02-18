import dotenv from "dotenv";
import path from "path";

const env = process.env.ENV || "prod";

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${env}`),
});

console.log(`Running tests on ENV: ${env}`);

export const EnvConfig = {
  baseUrl: process.env.BASE_URL!,
  username: process.env.APP_USERNAME!,
  password: process.env.APP_PASSWORD!,
  timeout: 30000,
};