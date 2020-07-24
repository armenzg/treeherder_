// Whilst the configuration object can be modified here, the recommended way of making
// changes is via the presets' options or Neutrino's API in `.neutrinorc.js` instead.
// Neutrino's inspect feature can be used to view/export the generated configuration.
const neutrino = require('neutrino');

module.exports = (env = {}) => {
  // Convert `--env.NAME <value>` CLI arguments into environment variables.
  // This makes it possible to write cross-platform-compatible package.json `scripts`.
  Object.entries(env).forEach(([name, value]) => {
    process.env[name] = value;
  });
  return neutrino().webpack();
};
