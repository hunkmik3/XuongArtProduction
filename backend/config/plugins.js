'use strict';

module.exports = ({ env }) => ({
  'graphql': {
    enabled: true,
    config: {
      defaultLimit: 25,
      maxLimit: 100,
      apolloServer: {
        introspection: true,
      },
    },
  },
  'upload': {
    enabled: true,
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 1024 * 1024 * 2048, // ~2GB
      },
    },
  },
});


