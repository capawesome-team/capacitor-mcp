import { PACKAGE_INFO } from './package-info.js';

const DEFAULT_URL = 'https://capacitor-mcp.capawesome.io/mcp';

export interface Connection {
  headers: Record<string, string>;
  url: string;
}

export function resolveConnection(
  env: NodeJS.ProcessEnv = process.env,
): Connection {
  return {
    headers: { 'User-Agent': `${PACKAGE_INFO.name}/${PACKAGE_INFO.version}` },
    url: env.CAPACITOR_MCP_URL || DEFAULT_URL,
  };
}
