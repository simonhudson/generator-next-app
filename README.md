# Web app Yeoman Generator

This generator allows you to easily scaffold a basic web app built on the following tools

- [Next.js](https://nextjs.org/) (isomorphic JavaScript rendering)
- [React](https://reactjs.org/) (JavaScript component framework)
- [Jest](https://jestjs.io/) (unit testing)
- [Cypress](https://www.cypress.io/) (end-to-end testing)

## Pre-requisites

* Node
* Yeoman `npm install -g yo`

## Important - where to locally store the Generator

Yeoman Generators need to be run from your global node_modules directory (e.g: `C:\Users\XXXXX\AppData\Roaming\npm\node_modules`)

In order to do this, you have two options

* Simply place the **generator-next-app** directory into this global `node_modules` directory

OR

* Place the **generator-next-app** directory wherever you want, open a `cmd`, navigate to the location of the folder and run `npm link`. This will create an alias in your global `node_modules` directory, pointing to wherever you've stored the **generator-next-app** directory

## How to run

1. Open up a `cmd` prompt
2. Navigate to the working directory of your project
3. Run `yo next-app`

Once the Generator has created the files and installed any dependencies, it will automatically start your application at `https://localhost:3000`