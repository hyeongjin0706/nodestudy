// import express from "express";
// import {body, param, validationResult} from 'express-validator';

// const app = express();
// app.use(express.json);

// app.post(
//     '/users', 
//     body('name').isLength({min:4}).withMessage("이름은 4글자 이상으로 입력하세요!"), 
//     (req,res) => {
//         console.log(req.body);
//         res.sendStatus(201);
//     }
// );

// app.listen(8080);

import express from 'express';
import { body, param, validationResult } from 'express-validator';

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    return res.status(400).json({message: errors.array()});
}

const app = express();
app.use(express.json());
app.post(
    '/users',
    [
        body("name").trim().isLength({min:4}).withMessage('이름은 4글자 이상으로 입력하세요!'),
        body("age").isInt().withMessage("숫자를 입력하세요!"),
        body("email").isEmail().withMessage("이메일 형식을 확인해주세요").normalizeEmail(),
        body("job.name").notEmpty(),
        validate
    ],
    (req, res) => {
        console.log(req.body);
        res.sendStatus(201);
    }
);

app.get(
    '/:email',
    [
        param("email").isEmail().withMessage("이메일 형식을 확인하세요"),validate
    ],
    (req, res, next)=>{
        res.sendStatus(200);
    }
)
app.listen(8080);