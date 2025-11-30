# catmaster-api

catmaster-api is repository for the solutions of assignment to Surya Digital Teknologi hiring process. For API Docs you can find it [here](https://hollow-kimberley-cobaaja-0b1aeeeb.koyeb.app/docs/#/)

## Prerequisite

- [Node.js](https://nodejs.org/en)

## Setup Instructions

1. Clone this repository

```bash
https://github.com/zakkymf/catmaster-api.git
```

2. Install Dependencies

```bash
cd catmaster-api
npm install #or
yarn install
```

3. Running on local machine

```bash
yarn dev
```

## Tech Stack

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)

## Architecture

```
/catmaster-api/src
├── config
|  └── database.js
├── controllers
|  └── owner.controller.js
├── data
|  └── owners.json
├── docs
|  └── swagger.json
├── middleware
|  └── error.middleware.js
├── models
|  └── owner.model.js
├── routes
|  └── owner.routes.js
├── services
|  └── owner.service.js
└── utils
   └── response.js
```

### Detail Architecture

- `src/` This is the main source folder of the backend project, organized to follow a typical Node.js / Express API structure, separating concerns for scalability and maintainability.

- `config/` contains configuration files for the project.

- `controllers/` contains the request handlers for incoming HTTP requests.

- `data/` stores static or mock data used in development or testing.

- `docs/` contains API documentation.

- `middleware/` contains custom middleware functions for Express.

- `models/` contains data models representing the entities in your system.

- `routes/` defines the API endpoints and maps them to controllers.

- `services/` contains the business logic of the application.

- `utils/` contains helper functions that can be reused across the application.
