


function revertString(word) {
  var promise = new Promise(function (resolve, reject) {
    var i = word.length;
    newword = "";
    while (i--) {
      newword += word[i];
    }
    if (newword) resolve("It is a success:" + newword);
    else reject("It is a failure.");
  });
  return promise;
}

revertString("hello").then((word) => console.log(word));

let x = function sayHello(name) {
  return new Promise(function (resolve, reject) {
    if (name != "Hitler") {
      resolve("juhui");
    } else {
      reject("i hate Nazis");
    }
  });
};

x("Hitler").then((value) => {
  console.log(value);
}).catch((errortext) =>{
  console.log("Error:" + errortext);
});
