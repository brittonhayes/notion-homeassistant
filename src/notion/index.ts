import { Client } from "@notionhq/client";

class NotionIntegration {
  private readonly notion: Client;

  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
  }

  async get(databaseId: string) {
    const response = await this.notion.databases.retrieve({
      database_id: databaseId,
    });

    return response;
  }
}
