function getName(){
    return Promise.resolve("Pauzi");
}

const name = await getName();
console.log(name);