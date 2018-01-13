PhantomJS + Express PDF Generation Test
========

This example probably requires Node v7.9.0+

## Dependencies

  * [phantomjs-prebuilt](https://github.com/Medium/phantomjs)
  * [express](//github.com/expressjs/express)
  * [body-parser](//github.com/expressjs/body-parser)
  * [http-auth](//github.com/http-auth/http-auth)
  * [dotenv](//github.com/motdotla/dotenv)
  * [slugify](//github.com/simov/slugify)
  * [tmp](//github.com/raszi/node-tmp)

## Installation and Usage

### Install npm packages
```bash
npm install
```

### Run server
```bash
node server.js
```

Once you run the server, you can access it locally using URLs like this (default configuration):
[http://localhost:3000/?url=http://stackoverflow.com&w=1024&h=768](http://localhost:3000/?url=http://stackoverflow.com&w=1024&h=768)

## Configuration

  This project uses [dotenv](//github.com/motdotla/dotenv). See the `.env` file in the root of the project.

 ```bash
PORT=3000
USERNAME=pdf
PASSWORD=gimme
```
