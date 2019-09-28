require("dotenv").config()

// reboot server if midified
module.exports = {
  env: {
    // works on `yarn dev` `yarn build && yarn start` `now`
    STATIC_ENV: "static value",
    // works on `yarn dev` `yarn build && yarn start`, but not on `now` without now.json
    FROM_DOT_ENV: process.env.FROM_DOT_ENV,
  },
}
