# JavaScript Concepts

This project covers JavaScript concepts along with TypeScript.

## Session 1

This session covers below topics:

- Data Types
- Scopes
- Arrow Functions
- Array Methods
- Spread
- Destructuring
- Callbacks
- Promise
- Async/Await

## Session 2

This session covers below topics:

- Web API (CRUD)
- TypeScript
  - Installation & Commands
  - Types
  - Classes
  - Interfaces
  - Inheritance - Implements & Extends
  - Generics

### Installation

- Install Node.js
- Run Command: `npm i typescript -g`

### Commands

- Run: `tsc index`
- Help: `tsc --help`
- Watch: `tsc --watch`

### Steps to setup TS project
- Initialize Project: `tsc --init`
- Remove comments from `tsconfig.json` file
- Add below properties
```
"rootDir": "./src",
"outDir": "./build",
```
- Create `.ts` files inside `./src` folder
- Run Watch Command: `project> tsc --watch`
- Run Watch Command for Node: `project> node --watch build/index`