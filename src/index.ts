import { Client } from "@notionhq/client";
import * as homeassistant from "@brittonhayes/homeassistant-ts";

import dotenv from "dotenv";
import { Integration } from "./notion";

dotenv.config();

async function main() {
  const ha = new homeassistant.Client({
    baseUrl: process.env.HASS_URL,
    token: process.env.HASS_TOKEN,
  });

  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const services = await ha.services.list();

  const integration = new Integration({
    client: notion,
  });

  const properties = await integration.database.properties(process.env.NOTION_DATABASE_ID!);

  return services.data.map(async (data) => {
    await integration.database.update({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Domain: {
          type: "title",
          title: [
            {
              type: "text",
              text: { content: data.domain! },
            },
          ],
        },
        Services: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: "content",
              },
            },
          ],
        },
      },
    });
  });
}

main()
  .then((responses) => {
    console.log(responses);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
