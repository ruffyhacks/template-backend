import { config } from "dotenv";
import { createApp } from "./lib/createApp";
config();

const PORT = process.env.PORT || 3001;
const ENV = process.env.RAILWAY_ENVIRONMENT
	? process.env.RAILWAY_ENVIRONMENT
	: process.env.NODE_ENV;

async function main() {
	console.log("Running in " + ENV + " mode.");
	try {
		const app = createApp();
		app.listen(PORT, () => console.log("Running on Port " + PORT));
	} catch (err) {
		console.log(err);
	}
}

main();
