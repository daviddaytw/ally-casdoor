import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class CasdoorDriverProvider {
  constructor(protected app: ApplicationContract) {}

  public async boot() {
    const Ally = this.app.container.resolveBinding('Adonis/Addons/Ally')
    const { CasdoorDriver } = await import('../src/CasdoorDriver')

    Ally.extend('CasdoorDriver', (_, __, config, ctx) => {
      return new CasdoorDriver(ctx, config)
    })
  }
}
