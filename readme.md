# GraphQL-MongoDB example

## Create project
- Install package
  ```bash
  npm init
  npm install apollo-server graphql graphql-tools mongoose @types/node
  npm install typescript ts-node ts-lib -g
  npm install dotenv
  npm install nodemon --save-dev
  ```

- Create TS-config
  ```bash
  tsc --init
  ```

- Customize `tsconfig.json` file:
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

- Import **fake data** in `./graphQl/fake data` to your `MongoDB database` with 2 collection `authors` and `books`

- Config `.env` file:
  - Create `.env` file in `./graphQL`
  - Update `.env` file: 
  ``` 
  MONGO_URI = [mongodb+srv://... (your MongoDB URI)]
  PORT = 4000
  ```

- To watch `TypeScript` file changes and convert to `JavaScript`
  ```bash
  npx tsc -w
  ```

## Running
```bash
npm install 
npm run watch
npm run dev
```

## Construct
- `Model` and `Service` for working with `MongoDB`
- `Schema` and `Resolver` for working with `GraphQL`

- `Service` call `Model` to **CRUD** `MongoDB` database
- `Resolver` for work with `GraphQL`, call `Service` to interact with `Database`



## Reference

- Merging GraphQL **Schema** and **Resolvers**: 
  - **Way 1**: [User **graphql-tools**](https://www.apollographql.com/docs/graphql-tools/generate-schema/)
  - **Way 2**: [User **type-graphql**](https://typegraphql.com/docs/getting-started.html)
  - **Way 3**: [Use **autoloader-ts**](https://www.npmjs.com/package/autoloader-ts?activeTab=readme) (for Huge project)
- Distinguish **Save**, **Create** and **Insert** in mongoDB: [MongoDB - Save, Create, Insert](https://stackoverflow.com/questions/38290684/mongoose-save-vs-insert-vs-create)
- Declare **global type TS**: [TypeScript make type global](https://bobbyhadz.com/blog/typescript-make-types-global) and [Global type in typescript](https://stackoverflow.com/questions/42984889/global-types-in-typescript)
