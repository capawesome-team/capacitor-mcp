import { describe, expect, it } from 'vitest';
import { resolveConnection } from '../src/connection.js';

describe('resolveConnection', () => {
  it('defaults to the hosted MCP server', () => {
    expect(resolveConnection({}).url).toBe(
      'https://capacitor-mcp.capawesome.io/mcp',
    );
  });

  it('uses CAPACITOR_MCP_URL when set', () => {
    expect(
      resolveConnection({ CAPACITOR_MCP_URL: 'http://127.0.0.1:3000/mcp' }).url,
    ).toBe('http://127.0.0.1:3000/mcp');
  });

  it('falls back to the default URL when CAPACITOR_MCP_URL is empty', () => {
    expect(resolveConnection({ CAPACITOR_MCP_URL: '' }).url).toBe(
      'https://capacitor-mcp.capawesome.io/mcp',
    );
  });

  it('identifies the package via the User-Agent header', () => {
    expect(resolveConnection({}).headers['User-Agent']).toMatch(
      /^@capawesome\/capacitor-mcp\/\d+\.\d+\.\d+/,
    );
  });

  it('sends no other headers', () => {
    expect(Object.keys(resolveConnection({}).headers)).toEqual(['User-Agent']);
  });
});
