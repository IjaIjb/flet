import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'https://seashell-app-lq4vz.ondigitalocean.app/api-json',
  apiFile: './store/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './store/api.ts',
  exportName: 'api',
  flattenArg: true,
  hooks: { queries: true, lazyQueries: true, mutations: true },
}

export default config