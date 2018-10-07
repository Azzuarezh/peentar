This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Many things generated by the platform

This only for ***PERSONAL PURPOSE***. If there are any vulnerables at dependencies, it's your own risk.

## Table of Contents

- [Prerequisites](#Prerequisites)
- [Installation](#Installation)
- [Folder Structure](#folder-structure)
- [Running in Build](#running-in-build)

## Prerequisites

This project run under NodeJS. So if you want to run the project, you should have Node js running in your machine

## Installation

Clone this repo and install the dependencies. 

```sh
$ git clone https://github.com/Azzuarezh/peentar.git
$ cd peentar/
$ npm install
$ npm start
```
to see the running port, you can see the console in the command.

## Folder Structure

the project should look like this:

```
peentar/
  README.md  
  package.json
  public/
    index.html
    favicon.ico    
  src/
    components
      Contact.js
      GeneralInfo.js
      Password.js
      RegistrationForm.js
      Success.js
      Tabs.js      
    assets
      yeay.webp
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

## Running in Build

you can run the project with minified option. For environments using [Node](https://nodejs.org/), the easiest way to handle this would be to install [serve](https://github.com/zeit/serve) and let it handle the rest. I assumed that you are in Root directory:

```sh
npm install -g serve
serve -s build
```
to see the running port, you can see the console in the command.
Note that ***serve -s build***  is command to running static server and the app instance is ***"build"***
