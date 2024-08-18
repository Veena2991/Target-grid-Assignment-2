# Customer Information Capture & CRM Integration (MERN Stack)

This project is a full-stack application that captures customer information and integrates with Zoho CRM using OAuth 2.0 for authentication. The application is built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and allows for managing and syncing customer data with Zoho CRM.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Zoho CRM Integration](#zoho-crm-integration)
- [API Documentation](#api-documentation)
- [License](#license)

## Features

- Capture customer data through a responsive form.
- Validate inputs for phone numbers and email addresses.
- Store data temporarily in MongoDB.
- Sync customer data with Zoho CRM via API.
- OAuth 2.0 authentication with Zoho CRM.
- Error handling and logging for API requests.

## Technologies Used

- **Front-End**: React, Axios, CSS
- **Back-End**: Node.js, Express.js, Axios
- **Database**: MongoDB, Mongoose
- **External API**: Zoho CRM API with OAuth 2.0

## Project Structure

```plaintext
root-directory/
│
├── client/                   # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CustomerForm.js
│   │   │   ├── CustomerList.js
│   │   │   └── ...
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── server/                   # Express backend
│   ├── controllers/
│   │   └── customerController.js
│   ├── models/
│   │   └── Customer.js
│   ├── routes/
│   │   └── customerRoutes.js
│   ├── services/
│   │   └── zohoService.js
│   ├── .env
│   ├── index.js
│   └── ...
│
├── README.md
└── package.json

Getting Started

Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
MongoDB (local or cloud instance)

Installation
1. Clone the repository
2. Install dependencies for the server
3. Install dependencies for the client
4. Set up environment variables (See Environment Variables)
5. Start the MongoDB server
6. Run the server
7. Run the client