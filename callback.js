const callme= (name) =>{
    console.log("my name is:", name);
}

const whatsyourname = (name, callback) => {
    callback(name);
}

whatsyourname("Michael Kane", callme);

