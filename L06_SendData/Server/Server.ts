import * as Http from "http";

namespace L06_SendData {
    let port: number = process.env.PORT;
    if (port == undefined)
        port = 8100;
 
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Ich höre Stimmen!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write(_request.url);

        _response.end();
    }
}