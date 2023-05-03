// jwt
// npm i jsonwebtoken

const jwt = require("jsonwebtoken");
const secret = "Nyy7!IQ8zLRmrwG7Ld9b81OySu&mMN";
const token = jwt.sign(
    {
        id: "apple",
        name: "김사과",
        isAdmin:false
    },
    secret,
    {
        expiresIn: 2
    }
);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFwcGxlIiwibmFtZSI6Iuq5gOyCrOqzvCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODMwNzkxODYsImV4cCI6MTY4MzA3OTE4OH0.wp4jmHVHU4FhNDj8CRMitZrlz0jLtkUXtEffqk5gLsw

setTimeout(() => {
    jwt.verify(token, secret, (error, decoded) => {
        console.log(error, decoded);
    });
}, 3000);

console.log(token);
