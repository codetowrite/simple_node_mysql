/**
 *  NodeJS + MySQL tutorial application by codetowrite.
 *  
 *  Author: Tim Hallyburton
 *  Website: codetowrite.com
 * 
 *  Disclaimer:
 * 
 *  This software is provided by codetowrite.com "as is" and "with all faults". 
 *  The provider makes no representations or warranties of any kind concerning the 
 *  safety, suitability, lack of viruses, inaccuracies, typographical errors, 
 *  or other harmful components of this software. 
 *  There are inherent dangers in the use of any software, and you are solely 
 *  responsible for determining whether this software is compatible with your 
 *  equipment and other software installed on your equipment. 
 *  You are also solely responsible for the protection of your equipment and 
 *  backup of your data, and the provider will not be liable for any damages 
 *  you may suffer in connection with using, modifying, or distributing 
 *  this software. 
 */

// ----------------------------------------------------------------------------


/**
 * Import the http module and (somewhat optional) child_request module 
 * for opening our site in the browser.
 */
const http = require('http'); 
const childProcess = require('child_process');

// default port will do fine
const port = 8080;

// create a server instance. 
var server = http.createServer();

server.addListener('request', (request, response) => {

    response.writeHead(200); // HTTP Status Code 200 - Okay.
    response.write("Server running"); 
    response.end(); // Finish and send the response.

});

/**
 * At this point the server is set up and can start listening for connections.
 */
server.listen(port); 
console.log("The Node Server is running");


/**
 * Code from here on is optional. If you experience problems, delete or comment
 * out the following lines and manually navigate to the website.
 * 
 * Open    http://localhost:8080   in a web browser of your choice.
 */

// open the default web browser @localhost:port
var platformSpecificStartCommand = 
    (process.platform === 'darwin' ? 'open' :
     process.platform === 'win32'  ? 'start' : 'xdg-open');
// start a seperate process, opening the website (usually in a browser)
childProcess.exec(platformSpecificStartCommand + " http://localhost:" + port,
    (error, stdout, stderr) => {
        if(error) {
            console.error(stderr);
        }
    })