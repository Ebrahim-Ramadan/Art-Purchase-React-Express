# Art-Purchase-React-Express
Paper Contract fpr purchasing artistic pictures free

<br>
Added some sections for the homepage: some random pieces of Art and their selling areas in the north america,
<br>

https://github.com/Ebrahim-Ramadan/Art-Purchase-React-Express/assets/65041082/6fe3303d-e4ee-47bb-a426-cc7b09e90226

<br>
Previous versions:
<br>

https://github.com/Ebrahim-Ramadan/Art-Purchase-React-Express/assets/65041082/881b82df-5ae6-46db-9f81-d64ac15578cb

<br>


https://github.com/Ebrahim-Ramadan/Art-Purchase-React-Express/assets/65041082/3f8caf61-9bf6-4e11-9d7c-487c6f9ac096

<br>


https://github.com/Ebrahim-Ramadan/Art-Purchase-React-Express/assets/65041082/6115623a-592f-4749-a349-ffe820fa4b8f

<br><br>
# Art Purchase Application

An application for confirming and delivering art purchases via email. This project consists of a server-side component built using Express.js and Nodemailer, and a client-side React modal component for confirming purchases.

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- - [Server](#server)
- - [Client](#client)
- [Getting Started](#getting-started)
  - [Server Setup](#server-setup)
  - [Client Setup](#client-setup)
- [Usage](#usage)
- - [Server Usage](#server-usage)
- - [Client Usage](#client-usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The Art Purchase Application is a full-stack project that enables users to confirm and deliver art purchases by sending an email to the specified recipient. It includes a server built with Express.js and Nodemailer to handle email sending, and a client-side React modal component to trigger the purchase confirmation process.

## Technologies

### Server

- Node.js
- Express.js
- Nodemailer
- dotenv (for environment variables)
- cors (Cross-Origin Resource Sharing)

### Client

- React
- Material-UI (for styling)
- axios (for making HTTP requests)
- react-toastify (for displaying notifications)
- validator (for email validation)

## Getting Started

### Server Setup

1. Clone this repository to your local machine.
2. Navigate to the server directory: `cd server`.
3. Install the required dependencies: `npm install`.
4. Create a `.env` file in the server directory and add your Gmail email and password:

<br>
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
<br>

**Note:** It's recommended to use an app password or an email account with less security restrictions.

5. Start the server: `npm start`.
6. The server will run on `http://localhost:3000`.

### Client Setup

1. Navigate to the client directory: `cd client`.
2. Install the required dependencies: `npm install`.
3. Start the client: `npm start`.
4. The client will run on `http://localhost:3000`.

## Usage

### Server Usage

The server listens on port 3000 and exposes an API endpoint for sending purchase confirmation emails. Use the `/send-email` POST endpoint with the following JSON payload:

```json
{
"toEmail": "recipient@example.com",
"imgData": {
 "title": "Art Title",
 "url": "https://art-url.com/image.jpg",
 "description": "Art Description",
 "id": "123"
}
}
```
<br>
Client Usage
The client displays a modal that allows users to confirm purchases by providing their email address. Press the "Purchase" button to open the modal, enter a valid email address, and click "Confirm." The application will send an email to the specified address with purchase details.

Contributing
Contributions to this project are welcome! If you find any issues or want to add features, please open an issue or create a pull request.

License
This project is licensed under the MIT License.

Contact
For any questions or inquiries, you can contact the project maintainer:

<br>
Name: Ebrahim Ramadan
<br>
Email: ramadanebrahim791@gmail.com
<br>
GitHub: Ebrahim-Ramadan
