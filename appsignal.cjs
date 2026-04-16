// appsignal.cjs
const { Appsignal } = require("@appsignal/nodejs");

new Appsignal({
  active: true,
  name: "hetzner",
  pushApiKey: "508a17fc-4b57-4774-b652-faacd4b8352a",
});
