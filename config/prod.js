module.exports = {
  //googleClientID: '109323302830-0ekhhegh9gn9pgalcmp1jb9rspjgccqd.apps.googleusercontent.com',
  //googleClientSecret: 'rBwchPHXDj8u0yZHQZ3lGa1S',
  //mongoURI: 'mongodb://ethanprod:manofsteel@1@ds127994.mlab.com:27994/eg-emaily-prod',
  //cookieKey: 'asdfasdfasdfasdfasdfasf'
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};
