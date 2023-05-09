export const CODES = {
  ServerError: 0,
  Success: 1,
  Created: 2,
  Updated: 3,
  Archived: 4,
  Deleted: 5,
  Restored: 6,
  BadRequest: 7,
  Unauthorized: 8,
  Conflict: 9,
  NotFound: 10,
  Forbidden: 11,
};

export const HTTP_RESPONSES = {
  ServerError: {
    message: 'Server Error',
    statusCode: 500,
    code: 0,
  },
  Success: {
    message: 'Success',
    statusCode: 200,
    code: 1,
  },
  Created: {
    message: 'Created',
    statusCode: 201,
    code: 2,
  },
  Updated: {
    message: 'Updated',
    statusCode: 200,
    code: 3,
  },
  Archived: {
    message: 'Archived',
    statusCode: 200,
    code: 4,
  },
  Deleted: {
    message: 'Deleted',
    statusCode: 200,
    code: 5,
  },
  Restored: {
    message: 'Restored',
    statusCode: 200,
    code: 6,
  },
  BadRequest: {
    message: 'Bad Request',
    statusCode: 400,
    code: 7,
  },
  Unauthorized: {
    message: 'Unauthorized',
    statusCode: 401,
    code: 8,
  },
  Conflict: {
    message: 'Conflict',
    statusCode: 409,
    code: 9,
  },
  NotFound: {
    message: 'Not Found',
    statusCode: 404,
    code: 10,
  },
  Forbidden: {
    message: 'Forbidden',
    statusCode: 403,
    code: 11,
  },
};

export const X_HEADERS = {
  AccessToken: 'x-access-token',
};
