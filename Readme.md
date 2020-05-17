# Website Thumbnail Generator

Generate a thumbnail of any website.
Written in Go and Vue. This project uses [screenshotapi.net](https://screenshotapi.net) head over there to create an account and get an API token.

[View the live version here!](https://coffeecoding.dev/website-thumbnail-generator)

## Go server

*Replace the `SCREENSHOTAPI_TOKEN` with your screenshotapi.net token.*

To run the go server run the following command from the project root directory.

```
go run main/server.go
```

## Frontend

Navigate to the `frontend` directory and run the following command to install required packages.
```
yarn install 
```

To start up the frontend development server run:
```
yarn serve
```

To build the frontend for production use run:
```
yarn build
```
