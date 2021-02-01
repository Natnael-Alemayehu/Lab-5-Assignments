/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/

// Define UI Variables  here 

const all = document.querySelectorAll('.collection-item');

const locationInformation = [ window.location.href, window.location.protocol, window.location.host, window.location.port, window.location.hostname]
const BrowserInformation = [ navigator.appName, navigator.appVersion, navigator.platform, navigator.language, navigator.cookieEnabled]
const screenInformation = [screen.height, screen.width, screen.pixelDepth, window.history.length, window.history.state]
const history = [window.history.length, window.history.state]

//Location Information
for(let i=0; i<locationInformation.length; i++){
        all[i].children[0].innerHTML = locationInformation[i];
}

//Browser Information
for(let i=0; i<BrowserInformation.length; i++){
    all[i+(locationInformation.length )].children[0].innerHTML = BrowserInformation[i];
}

// //Screen information
for(let i=0; i<screenInformation.length; i++){

    all[i+(locationInformation.length + BrowserInformation.length)].children[0].innerHTML = screenInformation[i];
}

//Browsing History Information
for(let i=0; i<history.length; i++){
    smt = (locationInformation.length + BrowserInformation.length + screenInformation.length)
    all[i+smt].children[0].innerHTML = history[i];
}









