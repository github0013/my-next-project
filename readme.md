# [AS OF nextjs 9.0.6] how to use prcess.env VARS on now.sh server

## use static env

If you don't use `.env`, then it works as is.

[Build-time configuration][1]

```js
// next.config.js
module.exports = {
  env: {
    customKey: "value",
  },
}
```

## use dotenv

This works on `yarn dev`, `yarn build && yarn start`, but not on now.sh

```ini
# dotenv
CUSTOM_KEY=1234
```

```js
// next.config.js
module.exports = {
  env: {
    customKey: process.env.CUSTOM_KEY,
  },
}
```

## use dotenv on now.sh

`process.env.CUSTOM_KEY` doesn't work out of the box.

[Adding Secrets][2]

run `now secrets add from-dot-env 'from now secret'`, then add

**now.json**

```json
{
  "build": {
    "env": {
      "CUSTOM_KEY": "@from-dot-env"
    }
  }
}
```

run `now` and see the secrets shows on the screen.

[1]: https://nextjs.org/docs#build-time-configuration
[2]: https://zeit.co/docs/v2/build-step/#adding-secrets
