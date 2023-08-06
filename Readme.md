# Teosd GUI

Welcome to Teosd GUI (Graphical User Interface) designed to complement the existing Teos-CLI (Command-Line Interface) functionality.

While the CLI provides powerful command-based operations, Admins were faced with the task of manually interpreting the results and working with text-based outputs, making the data analysis process cumbersome and time-consuming.

To bridge this gap and enhance the user experience this GUI is developed

### Dependencies

- [NodeJs](https://nodejs.org/en/download)

- [Teos-CLI](https://github.com/talaia-labs/rust-teos)

### Installation

#### Backend

- Move to the backend folder and install the dependencies `cd backend` & `npm install`
- create a `.env` file in the backend folder and copy content from `.env.example`

#### Frontend

- Move to the backend folder and install the dependencies `cd frontend` & `npm install`
- create a `.env` file in the env directory in frontend folder and copy content from `.env.example`

### Running

#### Backend

- Start the server in development `npm run start:dev` in the backend folder
- The server will start at Port `5000` , if u want to change the port change in the env file

#### Frontend

- Start the server in development `npm run dev` in the frontend folder
- The server will start at Port `3000` , if you want to change the port change in the `vite.config.ts` file

### Testing

- The unit tests have been completed and to run them `npm run test:unit` in the backend folder

### Endpoints on the backend

Base url = `http://localhost:5000/api/v1/cli` , change the port number if required

- GET `/tower-info` - Will get the info about the tower

- GET `/users` - Will get all registered users

- GET `/get-user/:public_key` - Will get the info of the user with user public key

- GET `/appointments` - Will get all the appointments in the tower

- GET `/appointments/:locator` - Will get the appointments with the given locator
