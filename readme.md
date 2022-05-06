# Test GraphQL

## Install
```console
npm init

npm install apollo-server graphql graphql-tools mongoose 
npm install typescript ts-node ts-lib @types/node -g
npm install dotenv winston -g
npm install nodemon --save-dev
```

### Configure TS-config
```console
tsc --init
```

Customize `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "es2016",
    "lib": [
      "es6"
    ],
    "module": "commonjs",
    "rootDir": "src",
    "resolveJsonModule": true,
    "allowJs": true, 
    "outDir": "dist", 
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"],
  "ts-node": {
    "files": true
  }
}
```


## Compile TS to JS
To watch `TypeScript` file changes and convert to `JavaScript`
```console
npx tsc -w
```

## Customize logger `winston`
```

```

## Reference

- Merging GraphQL **Schema** and **Resolvers**: [GraphQL Schema and Resolvers](https://www.apollographql.com/docs/graphql-tools/generate-schema/)
