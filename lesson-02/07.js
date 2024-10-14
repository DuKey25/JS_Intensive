let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let newpassportMarried = structuredClone(passportMarried)

newpassportMarried.married = true

console.log(passportMarried);

console.log(newpassportMarried);

