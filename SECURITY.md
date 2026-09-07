# Security Policy

## Reporting a vulnerability

Please report security vulnerabilities to [security@capawesome.io](mailto:security@capawesome.io). Do not open a public issue.

We will acknowledge your report and keep you updated until the issue is resolved.

## Scope

This package is a thin proxy that forwards MCP requests from your client to `https://capacitor-mcp.capawesome.io/mcp` over HTTPS.

It carries no credentials: the hosted server requires no account and no token, so nothing is read from your environment beyond the optional `CAPACITOR_MCP_URL` override. Tool arguments are forwarded to the endpoint above and nowhere else.
