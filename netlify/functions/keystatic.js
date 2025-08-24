import { createHandler } from '@keystatic/core/api/generic';
import config from '../../keystatic.config.js';

const handler = createHandler({
  config,
  createGitHubAccessToken: async (code) => {
    // GitHub OAuth token exchange
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.KEYSTATIC_GITHUB_CLIENT_ID,
        client_secret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
        code,
      }),
    });
    
    const data = await response.json();
    return data.access_token;
  },
});

export { handler as default };
