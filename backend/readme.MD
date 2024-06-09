# Diet Monitor Backend
This is the backend for the Diet Monitor project. It is a RESTful API that provides endpoints for the frontend to interact with the database.

## Installation

### Requirements
- Java 11 or higher
- Maven
- MySQL

### Steps
1. Clone the repository: 
You can clone the project using the following command:
```bash
git clone https://github.com/Habib97SE/dietmonitor.git
```

2. Navigate to the project directory:
```bash
cd backend
```

3. Build the project:
```bash
mvn clean install
```

4. Run the project:
```bash
mvn spring-boot:run
```

## Endpoints
The following are the endpoints provided by the API:

The first version of endpoints are as follows:

`api/v1`


### User
- `GET /user` - Get all users
- `GET /user/{id}` - Get a user by ID
- `POST /user` - Create a new user
- `PUT /user/{id}` - Update a user
- `DELETE /user/{id}` - Delete a user
- `POST /user/login` - Login a user
- `POST /user/logout` - Logout a user
- `POST /user/register` - Register a user
- `POST /user/forgot-password` - Send a password reset email


### Food
- `GET /food` - Get all foods
- `GET /food/{id}` - Get a food by ID
- `POST /food` - Create a new food
- `PUT /food/{id}` - Update a food
- `DELETE /food/{id}` - Delete a food
- `GET /food/search/{query}` - Search for foods by name
- `GET /food/autocomplete/{query}` - Autocomplete food names


If you have any questions or need help, please feel free to contact me at hezarehee.h@gmail.com

Visit my website at [https://habibdev.se](https://habibdev.se)
