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


---

### POST /users/login

#### Description
Authenticates an existing user and returns an authentication token. This endpoint verifies the user's credentials and grants access to the application.

#### Status Codes
- **200 OK**: User successfully authenticated. Returns authentication token and user data.
- **400 Bad Request**: Validation error. Invalid input data provided.
- **404 Not Found**: User not found. Invalid email or password.
- **401 Unauthorized**: Password mismatch. Invalid email or password.

#### Required Data Format

The request must be sent as JSON with the following structure:

`json
{
  "email": "string (valid email format)",
  "password": "string (minimum 6 characters)"
}
`

#### Request Parameters

| Field | Type | Required | Validation | Description |
|-------|------|----------|-----------|-------------|
| email | String | Yes | Valid email format | User's registered email address |
| password | String | Yes | Min length: 6 | User's password |

#### Response

**Success (200 OK):**
`json
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
`

**Error (404 Not Found / 401 Unauthorized):**
`json
{
  "message": "Invalid email or password"
}
`

**Error (400 Bad Request):**
`json
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
`

#### Example Request

`bash
curl -X POST http://localhost:PORT/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "password123"
  }'
`

#### Validation Rules

- **Email**: Must be a valid email format
- **Password**: Must be at least 6 characters long

#### Notes

- Both invalid email and password errors return the same message for security reasons
- An authentication JWT token is generated and returned upon successful login
- The password is verified using bcrypt comparison against the stored hashed password
- The returned user object includes the hashed password field


---

### GET /users/profile

#### Description
Retrieves the authenticated user's profile information. This endpoint requires a valid authentication token and returns the user's profile data.

#### Status Codes
- **201 Created**: User profile successfully retrieved. Returns user data.
- **401 Unauthorized**: Authentication failed. Invalid, expired, or missing token.

#### Authentication Required
Yes - Must include a valid JWT token in either:
- Cookie: `token` cookie
- Header: `Authorization: Bearer <token>`

#### Request Parameters
No request body required. Token must be provided in headers or cookies.

#### Response

**Success (201 Created):**
```json
{
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
```

**Error (401 Unauthorized):**
```json
{
  "message": "unauthorized"
}
```

or

```json
{
  "message": "Unauthorized token"
}
```

#### Example Request

```bash
curl -X GET http://localhost:PORT/users/profile \
  -H "Authorization: Bearer <jwt_token>"
```

or with cookies:

```bash
curl -X GET http://localhost:PORT/users/profile \
  -b "token=<jwt_token>"
```

#### Notes

- This endpoint requires valid authentication middleware
- Token is validated against the blacklist to prevent use of logged-out tokens
- Returns the complete user object including hashed password


---

### GET /users/logout

#### Description
Logs out the authenticated user by invalidating their token. This endpoint clears the authentication token and prevents its future use.

#### Status Codes
- **200 OK**: User successfully logged out.
- **401 Unauthorized**: Authentication failed. Invalid, expired, or missing token.

#### Authentication Required
Yes - Must include a valid JWT token in either:
- Cookie: `token` cookie
- Header: `Authorization: Bearer <token>`

#### Request Parameters
No request body required. Token must be provided in headers or cookies.

#### Response

**Success (200 OK):**
```json
{
  "message": "Logged out successfully"
}
```

**Error (401 Unauthorized):**
```json
{
  "message": "unauthorized"
}
```

or

```json
{
  "message": "Unauthorized token"
}
```

#### Example Request

```bash
curl -X GET http://localhost:PORT/users/logout \
  -H "Authorization: Bearer <jwt_token>"
```

or with cookies:

```bash
curl -X GET http://localhost:PORT/users/logout \
  -b "token=<jwt_token>"
```

#### Notes

- This endpoint requires valid authentication middleware
- The token is added to the blacklist to prevent its reuse
- The authentication cookie is cleared from the response
- Tokens in the blacklist automatically expire after 24 hours (86400 seconds)

---

### POST /captains/register

#### Description
Registers a new captain (driver). Creates a captain record, hashes the password, and returns a JWT token and the created captain object.

#### Status Codes
- **201 Created**: Captain created successfully.
- **400 Bad Request**: Validation error.

#### Required Data Format

```json
{
  "fullname": { "firstname": "string", "lastname": "string" },
  "email": "string",
  "password": "string",
  "vehicle": { "color":"string", "plate":"string", "capacity":1, "vehicleType":"car" }
}
```

#### Validation Rules
- `fullname.firstname`: min 3 chars
- `fullname.lastname`: min 3 chars
- `email`: valid email
- `password`: min 6 chars
- `vehicle.plate`: min 3 chars
- `vehicle.capacity`: integer >= 1
- `vehicle.vehicleType`: one of `car`, `motorcycle`, `auto`

#### Response
**Success (201):** returns `token` and `captain` object.

**Error (400):** returns validation errors array, e.g. invalid vehicle type.

#### Example Request
```bash
curl -X POST http://localhost:PORT/captains/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"Jane","lastname":"Doe"},"email":"jane@example.com","password":"password123","vehicle":{"color":"Blue","plate":"ABC123","capacity":4,"vehicleType":"car"}}'
```

#### Notes
- Passwords are hashed with `bcrypt` before storage.
- A JWT token is generated and returned in the response.
- `vehicleType` is validated in the route and constrained by the Mongoose `enum`.

---

### POST /captains/login

#### Description
Authenticates an existing captain (driver) and returns an authentication token. This endpoint verifies the captain's credentials and grants access to the application.

#### Status Codes
- **200 OK**: Captain successfully authenticated. Returns authentication token and captain data.
- **400 Bad Request**: Validation error. Invalid input data provided.
- **400 Bad Request**: Invalid email or password. User not found or password mismatch.

#### Required Data Format

The request must be sent as JSON with the following structure:

```json
{
  "email": "string (valid email format)",
  "password": "string (minimum 6 characters)"
}
```

#### Request Parameters

| Field | Type | Required | Validation | Description |
|-------|------|----------|-----------|-------------|
| `email` | String | Yes | Valid email format | Captain's registered email address |
| `password` | String | Yes | Min length: 6 | Captain's password |

#### Response

**Success (200 OK):**
```json
{
  "token": "jwt_token_string",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane@example.com",
    "password": "hashed_password",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null,
    "__v": 0
  }
}
```

**Error (400 Bad Request - Invalid Credentials):**
```json
{
  "message": "Invalid email or password"
}
```

**Error (400 Bad Request - Validation Error):**
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
curl -X POST http://localhost:PORT/captains/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@example.com",
    "password": "password123"
  }'
```

#### Validation Rules

- **Email**: Must be a valid email format
- **Password**: Must be at least 6 characters long

#### Notes

- Both invalid email and password errors return the same generic message for security reasons
- An authentication JWT token is generated and returned upon successful login
- The password is verified using bcrypt comparison against the stored hashed password
- The returned captain object includes the hashed password field and vehicle details
- Authentication token is also set as an HTTP-only cookie for browser-based clients

---

### GET /captains/profile

#### Description
Retrieves the authenticated captain's profile information. This endpoint requires a valid authentication token and returns the captain's profile data including vehicle details.

#### Status Codes
- **200 OK**: Captain profile successfully retrieved. Returns captain data.
- **401 Unauthorized**: Authentication failed. Invalid, expired, or missing token.

#### Authentication Required
Yes - Must include a valid JWT token in either:
- Cookie: `token` cookie
- Header: `Authorization: Bearer <token>`

#### Request Parameters
No request body required. Token must be provided in headers or cookies.

#### Response

**Success (200 OK):**
```json
{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane@example.com",
    "password": "hashed_password",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null,
    "__v": 0
  }
}
```

**Error (401 Unauthorized):**
```json
{
  "message": "unauthorized"
}
```

or

```json
{
  "message": "Unauthorized token"
}
```

#### Example Request

```bash
curl -X GET http://localhost:PORT/captains/profile \
  -H "Authorization: Bearer <jwt_token>"
```

or with cookies:

```bash
curl -X GET http://localhost:PORT/captains/profile \
  -b "token=<jwt_token>"
```

#### Notes

- This endpoint requires valid authentication middleware
- Token is validated against the blacklist to prevent use of logged-out tokens
- Returns the complete captain object including hashed password and vehicle details
- If the token is blacklisted or invalid, appropriate error is returned

---

### GET /captains/logout

#### Description
Logs out the authenticated captain by invalidating their token. This endpoint clears the authentication token and prevents its future use by adding it to a blacklist.

#### Status Codes
- **200 OK**: Captain successfully logged out.
- **401 Unauthorized**: Authentication failed. Invalid, expired, or missing token.

#### Authentication Required
Yes - Must include a valid JWT token in either:
- Cookie: `token` cookie
- Header: `Authorization: Bearer <token>`

#### Request Parameters
No request body required. Token must be provided in headers or cookies.

#### Response

**Success (200 OK):**
```json
{
  "message": "Logged out successfully"
}
```

**Error (401 Unauthorized):**
```json
{
  "message": "unauthorized"
}
```

or

```json
{
  "message": "Unauthorized token"
}
```

#### Example Request

```bash
curl -X GET http://localhost:PORT/captains/logout \
  -H "Authorization: Bearer <jwt_token>"
```

or with cookies:

```bash
curl -X GET http://localhost:PORT/captains/logout \
  -b "token=<jwt_token>"
```

#### Notes

- This endpoint requires valid authentication middleware
- The token is added to the blacklist to prevent its reuse
- The authentication cookie is cleared from the response
- Tokens in the blacklist automatically expire after 24 hours (86400 seconds)
- Once logged out, the captain must login again to continue using the application


