//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Loukson/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dmKqfTP.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "22502331988";
global.owner = process.env.OWNER_NUMBER || "22502331988";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://iili.io/dmKqfTP.jpg,https://iili.io/dbuMtaa.jpg:
https://iili.io/dmKqfTP.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0ltcEk0cFp5bG5ndjF1RHhQWFozUGRKMllHSzV5cEhWc1g1MmRGK3Iycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnhjWnVYNUlveFNXVS9FWlNLMXYvMktYV2hYYmlMcWNLeTE1dnZMMXhnZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTXpyK2NrVG5JWDhsUFc0ei80ajhoQkwvY3p0QkxQb3RNSTFZYlRTZjB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYUGVTWFpYOU1LU0ZBRmZ1Qi9TTWloR29GamFISC9HOWlFaEJCYkpURW5jPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOSThHQThTdi9OT1VoMmxHVnUxVVRZdzZIb1o2TW9FMzJPbmZFREN5VXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9CVnRSODM1RFBwZlovR1RGb2toUmNGcFR1bmV6UFlPUDVHUVJ2RlRHaTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEpSdXhHRHRpenJ1bVY2Yy96SGp3QnNqYWpNWDFYMUJuenF5ckpyK1JYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZThtSlV1RXpKMmZqSm5ZWkhCU0NTc3hnUkhVa2pRVXpsQkdaYk5iMzNGND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndUcCtIaStmK3NaUnFtOFh4NDhwM2hZdnFtNG5lemcybGgvT2YwbCs3SDVYNTlMc0xZcGd5em5wRTdybCtZUmYyWDVpK0NXZ1pWS3dsMnVlU21SYmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6IlJUVlFlU0tWQkxvaElYTEowczhEOVZxSnYrZFowdjI4MTkrS0s2ckF1YW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InhncV9zTTB6UzcycE9oSDVXMG42ZlEiLCJwaG9uZUlkIjoiOTYzMjQzYjgtZjgzZi00MTQwLThhNmItYTU0MDQ3MGNjYTE2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImsveVBFRVNoS2ZwUExjNE4ySVZDcXFISGx0Yz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1MlpNSHlvd1FOK0Y1ZlRhMmtFcFZJem1LWXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUtYTjlIWkciLCJtZSI6eyJpZCI6IjIyNTAyMzMxOTg4OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIvwnZqv8J2QlPCdkIrwnZCS8J2ar/CdmrQt8J2QlPCdmq3wnZCU8J2as/CdmqvwnZCK8J2asCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFRjejRvREVQbnBrYmdHR0RZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU3FTQkkvTXcxS1hPdW1tblBZZFBmZDcrWEJKM1hwclFIYnhiSWh4cHlYOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoibUJSQ0w5TmU4azVkd0tMRFpMdThXSzVKM3FFek5FY2VlOFdCRWl0ZUNBOUVtckpGUzkwVnNtWnhBN1ViTXJPdzRPVHVOcXVzY3pZVDVZTTJTemIxQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkNmK2VhalJEQVVyUGErWDFqbHcvTmNSTzcyUno2TERLS2JvYy84R2RSN2E5TVFKS0p1eUx2cjNFKzJnZmFpbUpMTmFLcjFHK3JrSUN4NmtVN2l6RmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1MDIzMzE5ODg6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXFrZ1NQek1OU2x6cnBwcHoySFQzM2UvbHdTZDE2YTBCMjhXeUljYWNsLyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODM0NTM1MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGU2IifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "NARUTO-MD🍃`",
  author: process.env.PACK_AUTHER || "𝐋𝚯𝐔𝐊𝐒𝚯𝚴-𝐔𝚭𝐔𝚳𝚫𝐊𝚰",
  packname: process.env.PACK_NAME || "𝐋𝚯𝐔𝐊𝐒𝚯𝚴-𝐔𝚭𝐔𝚳𝚫𝐊𝚰",
  botname: process.env.BOT_NAME || "NARUTO-MD",
  ownername: process.env.OWNER_NAME || "𝐋𝚯𝐔𝐊𝐒𝚯𝚴-𝐔𝚭𝐔𝚳𝚫𝐊𝚰",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
