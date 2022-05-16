module.exports = {
  name: 'host',
  remotes: ['account'],
  exposes: {
    './Module': './apps/host/src/app/app.module.ts',
  }
};
