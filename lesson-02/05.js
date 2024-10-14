let passport = {
    name: "Petr",
    surname: "Petrov",
};

let newPassport = {
    ...passport,
    name: "Ivan" 
};

console.log(passport.name); 

console.log(newPassport.name);