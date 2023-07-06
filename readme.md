# API WATTER JUG CHALLENGE

## PRE-API Configuration

1. Install Node.js

    Official Node.js website and documentation: https://nodejs.org/en/

    On the website, select version 18.16.1 LTS and download the executable if you are using Windows.

    If you work with multiple Node.js versions, you can install NVM for your operating system and run the following commands:

    ```
    nvm install 18.16.0
    nvm use 18.16.0
    ```

    To verify that it has been installed correctly, open a console and run the following commands:

    ```
    node -v
    npm -v
    ```

    This will show you the versions of Node.js and npm previously installed (npm comes with the installation of Node.js).

## API Configuration

1. Node.js Version:

    The Node.js version to run this API is 18.16.1 LTS.

    Install Dependencies:

    To install all dependencies for this project, run the following command:

    ```
    npm install
    ```

2. Environment Variables:

    The only environment variable required for this API is the port number to run on. This should be set in a .env file at the root of the project with the variable PORT:

    ```
    PORT=port_number
    ```

    If no port is specified, the API will default to port 3000.


## API Startup Commands

As this is a TypeScript API, the code must be transpiled to JavaScript before being executed by Node.js. The development environment is configured with two commands to initialize the API:

1. Start without hot reload (for deployment):

    ```
    npm run start
    ```

    This command will transpile the code to JavaScript into a `dist` folder and then execute the API using the transpiled `./dist/index.js` file.

2. Start with hot reload (for development):

    ```
    npm run dev
    ```

    This command will transpile the code to JavaScript into the `dist` folder and then execute `nodemon` to listen for changes made to the code.

After executing either of these commands, the API will be available at http://localhost:port/, where port is the port assigned in the .env file. If no port is specified, it will default to port 3000.

## API Functionality

The API has only one endpoint, which is aimed at solving the Water Jug Challenge.

This endpoint has the following route: http://localhost:port/api/resolve POST, and requires the following parameters in its body:

```
{
	"bucketX": integer,
	"bucketY": integer,
	"goalZ": integer
}
```

where:
    - bucketX: is the maximum capacity of bucket X
    - bucketY: is the maximum capacity of bucket Y
    - goalZ: is the capacity to achieve in either of the two buckets


The response of the endpoint has the following format:

```
{
	"message": "resolved!!!",
	"solution": [
		{
			"quantityX": 4,
			"quantityY": 0,
			"explanation": "Fill bucket X solved"
		}
	]
}
```

where solution is an array of all the most efficient steps or explanations that lead to the problem's solution based on the given data. If there is no solution or there is a problem with the given data, the API will inform the error or issue.