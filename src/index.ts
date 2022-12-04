import * as homeassistant from "./homeassistant";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const response = await notion.databases.query({
    database_id: "87d830629f814fd8ad62106328937a3c",
  });
  console.log("Got response:", response);

  const ha = new homeassistant.Client({
    baseUrl: process.env.HASS_URL,
    token: process.env.HASS_TOKEN,
  });

  await ha.services.list().then((response) => {
    console.log(response.data[0].services);
  });
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
