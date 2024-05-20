# Cypress Typescript API Testing

[![Cypress](https://img.shields.io/npm/v/cypress?color=33ff99&label=cypress&logo=cypress&logoColor=33ff99&style=for-the-badge)](https://www.cypress.io)

base url set by default https://restful-api.dev/

## Prerequisites

Make sure you have installed all the following prerequisites on your development machine:

| OS      | Node                                    |
| ------- | --------------------------------------- |
| Windows | `winget install --id OpenJS.NodeJS.LTS` |
| macOS   | `brew install node@20`                  |

## Executing The Tests

2. Clone the repository.

```shell
git clone git@github.com:burakkaygusuz/cypress-typescript-api-testing.git
```

3. Change the directory.
```
cd cypress-typescript-api-testing
npm install
```

4. Setup up baseUrl in cypress.config.ts

5. Run the test.

```shell
npm run cypress
```

Run test in headless mode. 'path' should be filled in
```
npx cypress run --spec path --browser chrome --headless
```


