const admin = {
  email: 'admin@gmail.com',
  password: Cypress.env('ADMIN_USER_PASSWORD'),
}

exports.getUser = user => {
  switch (user.toLowerCase()) {
    case 'admin':
      return admin
    default:
      return admin
  }
}
