# Conferences Management tool
a simple web app to create, update, delete conferences.


application built with the following technologies:
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Webpack](https://webpack.js.org/)
* [ExpressJS](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)

### Application Features
* User can create an conference, or update an existing conference, or add themself to existing conference

### Application Features
*https://pure-basin-08287.herokuapp.com/

## Run the app locally

Please make sure you have following software installed in your system:
* Node.js > 6.0
* NPM / Yarn
* Git
* MongoDB

First we need to clone the repository:
```
$ git clone https://github.com/haiyangmin/conference.git
```

Then we have to install the necessary dependencies using either NPM or Yarn:
```
$ npm i
```
```
$ yarn
```


Make sure your local MongoDB running
```
mongodb://localhost:27017
```

Now we are ready to run the application. You can run either run the development environment of the application which will include Hot-Reload for JS codes using Webpack and the Redux dev tool extension, or you can run the production edition. The default port for developer edition is `8080`, and for production is `process.env.PORT`.

To run the app in development environment:
```
$ npm run start:dev
```

To run the app in production environment:
```
$ npm run start
```

Now, if you visit [http://localhost:8080](http://localhost:8080) (if you ran the dev), or the production URL, you will see that the application is up and running.

### Home View
![home view](./docs/12.png)

### Calculator View
![Calculator view](./docs/11.png)


## Conclusion
The application is created for a test assignment.
