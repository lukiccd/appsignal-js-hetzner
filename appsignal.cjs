// appsignal.cjs
const { Appsignal } = require("@appsignal/nodejs");

new Appsignal({
  active: true,
  name: "hetzner",
  pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY,
});
