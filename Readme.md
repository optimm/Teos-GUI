# Eye of Satoshi GUI

The Eye of Satoshi GUI : This project aims to enhance the user experience and functionality of the Eye of Satoshi by providing a visual and intuitive way for tower administrators to manage and query the tower.
[Rust-Teos](https://github.com/talaia-labs/rust-teos)

### Setup on your machine

- Install NodeJs on your machine (https://nodejs.org/en/download)
- Move to the backend folder and install the dependencies `cd backend` & `npm install`
- create a `.env` file in the backend folder and copy content from `.env.example`
- Start the server in development `npm run start:dev`
- The server will start at Port `5000` , if u want to change the port change in the env file

### Endpoints on the backend

Base url = `http://localhost:5000/api/v1/cli` , change the port number if required

- GET `/tower-info` - Will get the info about the tower
- GET `/users` - Will get all registered users
- GET `/users/:public_key` - Will get the info of the user with user public key
- GET `/appointments` - Will get all the appointments in the tower
- GET `/appointments/:locator` - Will get the appointments with the given locator

### Tests

- The unit tests have been completed and to run them `npm run test:unit` in the backend folder
