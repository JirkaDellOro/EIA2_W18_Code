"use strict";
const Http = require("http");
var L06_SendData;
(function (L06_SendData) {
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);
    function handleRequest(_request, _response) {
        console.log("Ich höre Stimmen!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map