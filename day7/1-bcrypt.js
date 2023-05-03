/* 
    bcrypt
    - 패스워드 암호화 알고리즘
    - 단방향 해싱 함수
    - Alg + Cost + Salt + Hash
    - npm i bcrypt
*/
const bcrypt = require("bcrypt");
const password = "abcd1234";
const hashed = bcrypt.hashSync(password, 10);

// password: abcd1234
console.log(`password: ${password}`);

// hashed: $2b$10$2RNDKVhfDueHOjh6QrCWJe7YuIHHfKVCRLUy07nuMbxlp1VHxfdWy
console.log(`hashed: ${hashed}`);

const result = bcrypt.compareSync("abcd1234", hashed);

console.log(result);