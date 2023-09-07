The package has been configured successfully!

Make sure to first define the mapping inside the `contracts/ally.ts` file as follows.

```ts
import { CasdoorDriver, CasdoorDriverConfig } from 'ally-casdoor-driver/build/standalone'

declare module '@ioc:Adonis/Addons/Ally' {
  interface SocialProviders {
    // ... other mappings
    casdoor: {
      config: CasdoorDriverConfig
      implementation: CasdoorDriver
    }
  }
}
```
