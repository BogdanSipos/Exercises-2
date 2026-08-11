const password = "1234abcde";

const isValid = password.length > 8 &&
                password[0] !== password[password.length - 1] &&
                password !== "12345678" &&
                password[0] !== " " &&
                password[password.length - 1] !== "!";

console.log(`Is the password ${password} valid? ${isValid}`);
