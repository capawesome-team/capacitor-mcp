# Capacitor MCP Server

Unofficial MCP server for the official [Capacitor](https://capacitorjs.com) documentation. It gives AI assistants the current documentation for Capacitor v8, v7, v6 and `next`, the official and community plugin list, and the Capacitor posts from the Ionic blog — so they stop guessing plugin APIs and CLI flags. Not affiliated with or endorsed by Ionic or OutSystems.

Maintained by [Capawesome](https://capawesome.io).

## Endpoint

The server is hosted and ready to use. No account, no token, no installation:

https://capacitor-mcp.capawesome.io/mcp

```
https://capacitor-mcp.capawesome.io/mcp
```

## Installation

### Claude Code

```bash
claude mcp add --transport http capacitor https://capacitor-mcp.capawesome.io/mcp
```

### Claude Desktop / Claude.ai

Go to **Settings → Connectors → Add custom connector** and enter:

- **Name**: `Capacitor`
- **URL**: `https://capacitor-mcp.capawesome.io/mcp`

### Cursor

[![Install in Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=capacitor&config=eyJ0eXBlIjoiaHR0cCIsInVybCI6Imh0dHBzOi8vY2FwYWNpdG9yLW1jcC5jYXBhd2Vzb21lLmlvL21jcCJ9)

Or add `.cursor/mcp.json` to your project:

```json
{
  "mcpServers": {
    "capacitor": {
      "url": "https://capacitor-mcp.capawesome.io/mcp"
    }
  }
}
```

### VS Code

[Install in VS Code](https://insiders.vscode.dev/redirect/mcp/install?name=capacitor&config=%7B%22name%22%3A%22capacitor%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcapacitor-mcp.capawesome.io%2Fmcp%22%7D)

Or add `.vscode/mcp.json` to your project:

```json
{
  "servers": {
    "capacitor": {
      "type": "http",
      "url": "https://capacitor-mcp.capawesome.io/mcp"
    }
  }
}
```

### Windsurf

Add the server to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "capacitor": {
      "serverUrl": "https://capacitor-mcp.capawesome.io/mcp"
    }
  }
}
```

### Zed

Add the server to your Zed `settings.json`:

```json
{
  "context_servers": {
    "capacitor": {
      "url": "https://capacitor-mcp.capawesome.io/mcp"
    }
  }
}
```

### Any client via npx

Clients that cannot connect to a remote server over HTTP can run this package, which proxies stdio to the hosted server:

```json
{
  "mcpServers": {
    "capacitor": {
      "command": "npx",
      "args": ["-y", "@capawesome/capacitor-mcp"]
    }
  }
}
```

Requires Node.js 22 or later.

## Tools

| Tool              | Purpose                                                                     | Parameters                                        |
| ----------------- | --------------------------------------------------------------------------- | ------------------------------------------------- |
| `search_docs`     | Search the documentation by keyword. Start here for any Capacitor question. | `query` (required), `section`, `version`, `limit` |
| `get_doc_page`    | Read a full documentation page returned by `search_docs`.                   | `url` (required), `version`                       |
| `list_plugins`    | List official and community Capacitor plugins.                              | `query`, `source`, `limit`                        |
| `list_blog_posts` | List recent Capacitor posts from the Ionic blog.                            | —                                                 |

## Versions

The documentation is available for Capacitor **v8** (default), **v7**, **v6** and **next**. Pass the `version` parameter to `search_docs` and `get_doc_page` to target a specific version.

## Rate limits

The endpoint is limited to **100 requests per minute per IP**. Requests over the limit are answered with `429 Too Many Requests`; retry after a short wait.

## Privacy

Your IP address is processed for rate limiting only. Queries and tool arguments are not stored, not logged beyond Cloudflare's standard edge logs, and never used for training.

## Related

- [Ionic Framework MCP Server](https://github.com/capawesome-team/ionic-framework-mcp) — the same for the Ionic Framework documentation, components and usage examples.
- [Capawesome MCP Server](https://github.com/capawesome-team/mcp) — the official MCP server for the Capawesome documentation and the Capawesome Cloud management API.
- [Capawesome Cloud Live Updates](https://capawesome.io/cloud/live-updates/) — ship JavaScript, HTML and CSS changes to your app without an app store review.
- [Capawesome Cloud Native Builds](https://capawesome.io/cloud/native-builds/) — build native iOS and Android apps in the cloud, without a Mac.
- [Capawesome Cloud App Store Publishing](https://capawesome.io/cloud/app-store-publishing/) — submit builds to the Apple App Store and Google Play Store.

## Attribution

The documentation content is © the Ionic team, licensed under [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0) and sourced from [`ionic-team/capacitor-docs`](https://github.com/ionic-team/capacitor-docs). It is converted from MDX to Markdown for delivery over MCP and otherwise served unmodified in substance. The community plugin list comes from [`capawesome-team/awesome-capacitorjs`](https://github.com/capawesome-team/awesome-capacitorjs). Blog excerpts come from the [Ionic blog](https://ionic.io/blog) and link to the original post.

See [NOTICE](NOTICE) for the full attribution.

## Development

```bash
npm install
npm run build
npm test
```

Set `CAPACITOR_MCP_URL` to point the proxy at a local server instead of the hosted one:

```bash
CAPACITOR_MCP_URL=http://localhost:8787/mcp node dist/index.js
```

## License

See [LICENSE](LICENSE).
