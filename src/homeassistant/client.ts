import "./fetch-polyfill";

import { Fetcher } from "openapi-typescript-fetch";
import * as homeassistant from "./schema";
import { logger } from "./logger";

/**
 * Home Assistant API client properties
 *
 * @example { baseUrl: "http://localhost:8123", token: process.env.HA_TOKEN }
 */
export interface ClientProperties {
  /**
   * The base URL of the Home Assistant instance
   *
   * @default "http://localhost:8123"
   */
  baseUrl?: string;

  /**
   * The Home Assistant API token
   */
  token?: string;

  /**
   * Enable debug logging
   *
   * @default false
   */
  debug?: boolean;
}

/**
 * Home Assistant API Client
 */
export class Client {
  protected client = Fetcher.for<homeassistant.paths>();

  /**
   *
   * @param properties Home Assistant client connection properties
   * @returns Home Assistant API Client Fetcher
   */
  constructor(properties: ClientProperties) {
    this.client.configure({
      baseUrl: properties.baseUrl ?? "http://localhost:8123",
      init: {
        headers: {
          Authorization: `Bearer ${properties.token}`,
        },
      },
      use: properties.debug ? [logger] : undefined,
    });

    return this;
  }

  /**
   * API health endpoints
   */
  public readonly health = {
    /**
     * Retrieve the health of the Home Assistant instance
     *
     * @returns Health status of Home Assistant
     */
    retrieve: async () => {
      const get = this.client.path("/api/").method("get").create();
      const { status, data } = await get({});
      return { status, data };
    },
  };

  /**
   * Home Assistant configuration
   */
  public readonly config = {
    /**
     * Retrieve the configuration of the Home Assistant instance
     *
     * @returns Home Assistant configuration
     */
    retrieve: async () => {
      const get = this.client.path("/api/config").method("get").create();
      const { status, data } = await get({});
      return { status, data };
    },
  };

  /**
   * Home Assistant services endpoint
   */
  public readonly services = {
    /**
     * List all services
     *
     * @returns List of available services
     */
    list: async () => {
      const get = this.client.path("/api/services").method("get").create();
      const { status, data } = await get({});
      return { status, data };
    },
  };
}
