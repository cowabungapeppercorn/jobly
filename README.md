# Jobly

Jobly is a job boad app that allows users to view companies and jobs at those companies as well as apply to jobs. The frontend is written in React and the backend is written in Node.js using Express as the framework.

  - **JWTs** are used for authorization and authentication.
  - Passwords are hashed using **bcrypt**.
  - The database is **PostgreSQL**.
  - **Bootstrap** is used for the styling.

See the live deployed app here: http://joblyyyy.herokuapp.com/

Or follow the set up instructions below to run locally. 

# Setup

To clone the repository, run: 
```
git clone https://github.com/cowabungapeppercorn/jobly
```

Run the following command to install the necessary packages in the root folder: 
```
npm install
```

You will need to start the front end and the back end in seperate tabs in the terminal

To start the front end server: 
```
cd frontend
npm start
```

Open a new tab in the terminal to start the back end server:
```
cd backend
nodemon
```

The app should now be running in your browser.