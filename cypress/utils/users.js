const admin = {
  email: 'admin@gmail.com',
  password: Cypress.env('ADMIN_USER_PASSWORD'),
}
const editor = {
  email: 'editor@gmail.com',
  password: Cypress.env('EDITOR_USER_PASSWORD'),
}

exports.getUser = user => {
  switch (user.toLowerCase()) {
    case 'editor':
      return editor
    case 'admin':
      return admin
    default:
      return admin
  }
}
