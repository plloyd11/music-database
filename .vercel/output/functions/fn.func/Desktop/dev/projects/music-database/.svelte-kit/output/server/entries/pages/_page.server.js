import { e as error } from "../../chunks/index.js";
const SECRET_AIRTABLE_API = "patRiRJWzOPIevrAk.78afb47da099a442af391e150b710b3a8d943c7d78290ea6fd144780f5330b7a";
async function load({ fetch, setHeaders }) {
  const res = await fetch("https://api.airtable.com/v0/appu60A0INZAOVMPC/2023", {
    headers: {
      Authorization: `Bearer ${SECRET_AIRTABLE_API}`
    }
  });
  const data = await res.json();
  console.log(data);
  if (data.message) {
    throw error(404, `${data.message}. you fucked up dawg!`);
  }
  setHeaders({
    "cache-control": `max-age=3600,`
  });
  return {
    albums: data
  };
}
export {
  load
};
