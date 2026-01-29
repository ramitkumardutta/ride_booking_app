# Ride Booking App - API Documentation

## Endpoints

### POST `/users/register`

#### Description
Registers a new user in the ride booking application. This endpoint creates a new user account with the provided credentials and returns an authentication token upon successful registration.

#### Status Codes
- **201 Created**: User successfully registered. Returns authentication token and user data.
- **400 Bad Request**: Validation error. Invalid input data provided.

#### Required Data Format

The request must be sent as JSON with the following structure:

```json
{
  "fullname": {
    "firstname": "string (minimum 3 characters)",
    "lastname": "string (minimum 3 characters)"
  },
  "email": "string (valid email format)",
  "password": "string (minimum 6 characters)"
}
```

#### Request Parameters

| Field | Type | Required | Validation | Description |
|-------|------|----------|-----------|-------------|
| `fullname.firstname` | String | Yes | Min length: 3 | User's first name |
| `fullname.lastname` | String | Yes | Min length: 3 | User's last name |
| `email` | String | Yes | Valid email format | User's email address (must be unique) |
| `password` | String | Yes | Min length: 6 | User's password |

#### Response

**Success (201 Created):**
```json
{
  "token": "jwt_token_string",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password",
    "socketId": null,
    "__v": 0
  }
}
```

**Error (400 Bad Request):**
```json
{
  "errors": [
    {
      "type": "field",
      "value": "invalid",
      "msg": "Invalid Email",
      "path": "email",
      "location": "body"
    }
  ]
}
```

#### Example Request

```bash
curl -X POST http://localhost:PORT/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }'
```

#### Validation Rules

- **First Name**: Must be at least 3 characters long
- **Last Name**: Must be at least 3 characters long
- **Email**: Must be a valid email format and unique in the database
- **Password**: Must be at least 6 characters long

#### Notes

- The password is hashed using bcrypt before being stored in the database
- An authentication JWT token is generated and returned upon successful registration
- The email must be unique; attempting to register with an existing email will fail
