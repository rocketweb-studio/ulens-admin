import type {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://ulens.org/api/v1/graphql',
  documents: ['./src/shared/graphql/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/shared/graphql/generated/':
      {
        preset: 'client',
        config: {
          useTypeImports: true, enumsAsTypes: true
        }
      }
  }
}

export default config
