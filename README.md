# Adonis Ally Casdoor Driver

[![NPM version](https://img.shields.io/npm/v/ally-casdoor-driver.svg)](https://www.npmjs.com/package/ally-casdoor-driver)
![NPM Downloads](https://img.shields.io/npm/dm/ally-casdoor-driver)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/daviddaytw/ally-casdoor)

A [Casdoor](https://casdoor.org/) driver for [AdonisJS Ally](https://docs.adonisjs.com/guides/auth/social)

## Getting started

### 1. Install the package
Install the package from your command line.

```bash
npm install --save ally-casdoor-driver
```

or

```bash
yarn add ally-casdoor-driver
```

### 2. Configure the package

```bash
node ace configure ally-casdoor-driver
```

### 3. Validate environment variables

```ts
CASDOOR_DRIVER_CLIENT_ID: Env.schema.string(),
CASDOOR_DRIVER_CLIENT_SECRET: Env.schema.string(),
CASDOOR_DRIVER_CALLBACK_URL: Env.schema.string(),
CASDOOR_DRIVER_CASDOOR_ROOT: Env.schema.string(),
```

### 4. Add variables to `config/ally.ts` file. 

```ts
const allyConfig: AllyConfig = {
  // ... other drivers
  casdoor: {
    driver: 'casdoor',
    clientId: Env.get('CASDOOR_DRIVER_CLIENT_ID'),
    clientSecret: Env.get('CASDOOR_DRIVER_CLIENT_SECRET'),
    callbackUrl: Env.get('CASDOOR_DRIVER_CALLBACK_URL'),
    casdoorRoot: Env.get('CASDOOR_DRIVER_CASDOOR_ROOT'),
  }
}
```

## Scope

You can pass an string of scopes in [the configuration](https://docs.adonisjs.com/guides/auth/social#define-scopes). According to [Casdoor's documentation](https://casdoor.org/docs/how-to-connect/oauth/#available-scopes), available scopes are `'openid', 'profile', 'email', 'address', 'phone'`.

## How it works

You can learn more about [AdonisJS Ally](https://docs.adonisjs.com/guides/auth/social) in the documentation. And learn about the implementation in the [ally-driver-boilerplate](https://github.com/adonisjs-community/ally-driver-boilerplate) repository.

## Contributing

Just submit a pull request :D
