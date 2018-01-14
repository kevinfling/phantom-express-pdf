PhantomJS + Express PDF Generation Test
========

This example probably requires Node v7.9.0+

## Dependencies

  * [phantomjs-prebuilt](https://github.com/Medium/phantomjs)
  * [express](//github.com/expressjs/express)
  * [http-auth](//github.com/http-auth/http-auth)
  * [dotenv](//github.com/motdotla/dotenv)
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

Once you run the server, you can access it like so (default configuration):

[http://localhost:3000/?url=http://stackoverflow.com&w=1024&h=768](http://localhost:3000/?url=http://stackoverflow.com&w=1024&h=768)

## Configuration

  This project uses [dotenv](//github.com/motdotla/dotenv). Drop a file called `.env` file in the root of the project.

  The following configuration options are supported:

 ```bash
PORT=3000
USERNAME=pdf
PASSWORD=gimme
```
