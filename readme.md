# Test GraphQL

## Install
```console
npm init

npm install apollo-server graphql graphql-tools mongoose 
npm install typescript ts-node ts-lib @types/node -g
npm install dotenv -g
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

## Hygen

## Running
```
npx tsx -w
npm run dev
```

## Construct
- `Model` and `Service` for work with `MongoDB`
- `Schema` and `Resolver` for work with `GraphQL`

- `Service` call `Model` to **CRUD** with `MongoDB`
- `Resolver` for work with `GraphQL`, call `Service` to interact with `Database`



## Reference

- Merging GraphQL **Schema** and **Resolvers**: [GraphQL Schema and Resolvers](https://www.apollographql.com/docs/graphql-tools/generate-schema/)
- **Save**, **Create** and **Insert** in mongoDB: [MongoDB - Save, Create, Insert](https://stackoverflow.com/questions/38290684/mongoose-save-vs-insert-vs-create)
- Declare **global type TS**: [TypeScript make type global](https://bobbyhadz.com/blog/typescript-make-types-global) and [Global type in typescript](https://stackoverflow.com/questions/42984889/global-types-in-typescript)