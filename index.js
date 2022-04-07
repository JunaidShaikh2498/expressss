const http = require("http");

http.createServer((req, res) => {
  let obj = {
    name: "Junaid",
    age: 24,
    batch: "October",
    course: "MERN",
  };
  res.write("Plain Text");
// //   res.write("<br>")
  res.write(
    "<h1>Any javascript application can be run only on browser, because to execute JS code we need JS engine that is present only in browsers like Chrome has V8, Explorer has Chakra.</h1>"
    );

  res.end(JSON.stringify(obj));
}).listen(3000);
