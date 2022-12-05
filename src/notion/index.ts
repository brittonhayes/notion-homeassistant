import { Client } from "@notionhq/client";
import { CreatePageParameters, UpdateDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";

interface IntegrationProperties {
  client: Client;
}

export class Integration {
  private readonly notion: Client;

  constructor(properties: IntegrationProperties) {
    this.notion = properties.client;
  }

  database = {
    properties: async (databaseId: string) => {
      const database = await this.notion.databases.retrieve({
        database_id: databaseId,
      });

      const propertyValues: typeof database.properties = {};
      Object.entries(database.properties).forEach(([key, value]) => {
        switch (key) {
          case "Domain":
            propertyValues[key] = value;
            break;
          case "Services":
            propertyValues[key] = value;
            break;
        }
      });

      return propertyValues;
    },

    update: async (pageParameters: CreatePageParameters) => {
      return await this.notion.pages.create(pageParameters);
    },
  };
}
