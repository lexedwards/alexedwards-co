# The Sourcecode of [alexedwards.co](https://alexedwards.co)

[![Typescript](https://img.shields.io/badge/built%20with-Typescript-%23007acc)](https://www.typescriptlang.org/) [![Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://jestjs.io/) [![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/) 

[![Build Status](https://travis-ci.org/lexedwards/alexedwards-co.svg?branch=master)](https://travis-ci.org/lexedwards/alexedwards-co) [![codecov](https://codecov.io/gh/lexedwards/alexedwards-co/branch/master/graph/badge.svg)](https://codecov.io/gh/lexedwards/alexedwards-co)

![Screenshot](https://images.ctfassets.net/c6pc38xsagw4/72ozxYz6RjUYSM4jz8rUTp/34fd8494c66a9da951500884a4f06343/Screen_Shot_2020-06-10_at_16.32.33-fullpage.png)

Built with [GatsbyJS](https://gatsby.org), a React-based Framework with GraphQL, with a TDD workflow.

## Installation

Ensure that the computer you're running has [Node 10+](https://nodejs.org/en/) and NPM installed. Personally I use [NVM](https://github.com/nvm-sh/nvm) to help manage Node on my personal computer.

```shell
mkdir alexedwards-co
cd alexedwards-co
git clone https://github.com/lexedwards/alexedwards-co
```

Next, ensure that you have a Contentful space set up and both `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` are declared in the environment. If using the preview API within a development, you will also need to declare `CONTENTFUL_HOST` as `preview.contentful.com`

After the variabled are declared in a `.env` file, run the following:

```shell
npm run setup
```

This will run `npm install` as well as a `validate` script that runs Jest, Cypress, and generates a coverage report in `./coverage`.

### What's running under the hood?

Simply put, no matter which machine this is installed to, whether it's local or CI, it ensures that all NPM packages are installed correctly, that the test platforms are passing, as another insurance that there isn't anything wrong with the clone before working on the project.

## File Structure

```console
/ 
  - /__mocks__
  - /cypress
  - /src
  - /test
  .config files
```

### Root Files

There are config files and then there are config files. Most of these are set-and-forget, such as the `jest.loadershim.js` and `jest.preprocess.js` files that intergrate Jest with Gatsby per their documentation. Others include the `.env` that you'll set yourself, as well as various `.d.ts` files that are type declarations for it's declarative file name. i.e. `queries.d.ts` hold all the types for the various graphql queries that happen throughout Gatsby's build cycle.

The main config files that are in active development is `gatsby-node.js`. This is what Gatsby ustilises for it's develop and build cycle. Adding declared API's such as [createPage](https://www.gatsbyjs.org/docs/actions/#createPage) will help to autonomously build pages from templates. I.e :

```js
async function createPostIndex({ graphql, actions }) {
  const template = path.resolve('./src/templates/posts.tsx')

  actions.createPage({
    path: `/posts`,
    component: template,
    context: {
      // Any additional parameters needed to pass to a template page
    }
  })

}
```

I've kept a similar strcture to all createPage calls, including the context objectfor the sake of declarative parameters whilst in development; however, unnessassary code __will__ be scrapped once in a stable production.

### Folders

`/__mocks__` is a folder specific to Jest, as it's required to mock out specific things such as Gatsby and external files.

Likewise, `/test` contains all of Jest project configs and utilies for any `.test.js` files.

`/cypress` contains all things needed for End-To-End testing; All specs are within `/e2e`, with extra plugins and support commands within their respective folders.

`/src` is where development and code is written, with subfolders for `/components`, `/hooks`, images, `/pages`, and `/templates`. Where code is written, there are also `__tests__` subfolders for their counterparts.

## Running the Code

```shell
npm run develop
```

This will pool from Contentful, run Image Optimisation, parse from Long-text fields, and create static pages from `src/pages`, and dynamically create from templates in `src/templates` using `gatsby-node.js`. If all is well, Gatsby's inbuilt Hot-Reload server will launch onto `localhost:8000`

---

```shell
npm run test
```

Jest is set up to watch all changed files changes since the last commit, and whilst developing functional code is a great way to ensure what's written is ran against the tests scripted for them.

---

```shell
npm run test:e2e
```

Cypress is configured purely to test End-To-End tests, to follow through the pages in a way that a user would. Running `test:e2e` opens cypress and allows you to select which browser and spec to check and develop against. In a CI environment, it will run in headless mode using electron and output all the information to the terminal.

---

Open-source

MIT Licensed; Alex Edwards
