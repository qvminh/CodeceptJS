import { Test as MochaTest, Suite as MochaSuite } from 'mocha'

declare global {
  namespace CodeceptJS {
    interface Test extends MochaTest {
      uid: string
      title: string
      tags: string[]
      steps: string[]
      meta: Record<string, any>
      notes: Array<{
        type: string
        text: string
      }>
      config: Record<string, any>
      artifacts: string[]
      inject: Record<string, any>
      opts: Record<string, any>
      throws?: Error | string | RegExp | Function
      totalTimeout?: number
      addToSuite(suite: Mocha.Suite): void
      applyOptions(opts: Record<string, any>): void
      addNote(type: string, note: string): void
      codeceptjs: boolean
    }

    interface Suite extends MochaSuite {
      title: string
      tags: string[]
      opts: Record<string, any>
      totalTimeout?: number
      addTest(test: Test): void
      applyOptions(opts: Record<string, any>): void
      codeceptjs: boolean
    }
  }
}
