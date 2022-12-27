REST APIs Docs
=============

Installation
-----------

```
npm install
```

Start Application
-----------

```
npm start
```
will run's the apis on production. 

or
-----------

```
npm run dev
```

will run's the apis on development.

Usage
-----

```
/users (base url)
```

/register -POST
-------------

```ruby
{
  "name": "user's name"
  "email": "user@gmail.com",
  "password": "password",
  "passwordConfirm": "password"
}
```

request body must contain this payload in order to create a user

/login -POST
-------------

```ruby
{
  "email": "user@gmail.com",
  "password": "password"
}
```

request body must contain this payload in order to login

/logout -GET
-------------

```
Just hit the request
```

from postman just hit the request, current logged in user will get logged out

/forgotPassword -POST
-------------

```ruby
{
  "email": "user@gmail.com"
}
```

provide email address and hit the required a token will be send to your email address

/resetPassword/:resetToken -POST
-------------

```ruby
{
    "password": "new password",
    "passwordConfirm": "new password confirm"
}
```

provide the password reset token that is send to your email in the route params with the required above payload

/updateMyPassword -POST
-------------

```ruby
{
    "currentPassword": "current password",
    "password": "new password",
    "passwordConfirm": "new password"
}
```

This endpoint can be use for changing or updating the password of current logged in user