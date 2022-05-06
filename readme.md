#Test **GraphQL**

## Install
```bash
npm init

npm install apollo-server graphql mongoose 
npm install typescript ts-node ts-lib @types/node -g
npm install dotenv -g
npm install nodemon --save-dev
```

### Configure TS-config
```bash
tsc --init
```

Customize `tsconfig.json`:
```bash
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
```bash
npx tsc -w
```