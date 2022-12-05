# 🏠 Notion x Home Assistant

[![CI](https://github.com/brittonhayes/notion-homeassistant/actions/workflows/ci.yml/badge.svg)](https://github.com/brittonhayes/notion-homeassistant/actions/workflows/ci.yml)

📚 [API Docs](https://github.com/brittonhayes/notion-homeassistant/tree/main/docs)

This is a simple integration between [Notion](https://www.notion.so/) and [Home Assistant](https://www.home-assistant.io/). Allows you to sync your Home Assistant entities, devices, and services to Notion databases.

This package uses [brittonhayes/homeassistant-ts](https://github.com/brittonhayes/homeassistant-ts) to interact with Home Assistant.

## ⚡ Usage

How to use the integration.

### Setup

The integration uses the [Notion API](https://developers.notion.com/) to sync your entities to Notion. You need to create a new integration in the [Notion developer dashboard](https://developers.notion.com/) and use the generated token in the configuration.

The integration also uses the Home Assistant REST API, so you need to create a long-lived access token in your Home Assistant profile.

```shell
# Required
NOTION_TOKEN=""
# Required
NOTION_DATABASE_ID=""
# Required
HASS_TOKEN=""
# Optional (Defaults to http://localhost:8123)
HASS_URL=""
```

### Run in Docker

```shell
# Docker Container
docker build -t brittonhayes/notion-homeassistant .
docker run brittonhayes/notion-homeassistant -d

# Docker Compose
docker-compose up -d
```

### Run with Node

```shell
# Run ts-node directly on your machine for development
npm install
npm run start
```