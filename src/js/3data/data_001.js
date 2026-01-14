// Dedicated to God the Father

let theDataArray = [
    {
        name: "Node.js Official",
        url: "https://nodejs.org/",
        description: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. It's used to build scalable network applications.",
        urlSource: "https://nodejs.org/en/about/",
        category: "JavaScript Runtime"
    },

    {
        name: "Node.js Downloads",
        url: "https://nodejs.org/en/download/",
        description: "Download the latest LTS or Current version of Node.js for Windows, macOS, and Linux. Includes installers and source code.",
        urlSource: "https://nodejs.org/en/download/",
        category: "JavaScript Runtime Downloads"
    },

    {
        name: "fs.readFile()",
        url: "https://nodejs.org/api/fs.html#fsreadfilepath-options-callback",
        description: "Asynchronously reads the entire contents of a file. A callback function is called with the contents (as a Buffer or string) once the read is complete.",
        urlSource: "https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs",
        category: "fs"
    },
    
    {
        name: "fs.writeFile()",
        url: "https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback",
        description: "Asynchronously writes data to a file, replacing the file if it already exists. Takes a callback function that is called once writing is complete.",
        urlSource: "https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs",
        category: "fs"
    },

    {
        name: "path.basename()",
        url: "https://nodejs.org/api/path.html#pathbasenamepath-ext",
        description: "Returns the last portion of a path, similar to the Unix basename command. Optionally removes a given extension.",
        urlSource: "https://nodejs.org/api/path.html",
        category: "path"
    },

    {
        name: "path.extname()",
        url: "https://nodejs.org/api/path.html#pathextnamepath",
        description: "Returns the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion, it returns an empty string.",
        urlSource: "https://nodejs.org/api/path.html",
        category: "path"
    },
    
    {
        name: "os.platform()",
        url: "https://nodejs.org/api/os.html#osplatform",
        description: "Returns a string identifying the operating system platform as set during compile time. Examples: 'darwin', 'win32', 'linux'.",
        urlSource: "https://nodejs.org/api/os.html",
        category: "os"
    },

    {
        name: "os.totalmem()",
        url: "https://nodejs.org/api/os.html#ostotalmem",
        description: "Returns the total amount of system memory in bytes as an integer.",
        urlSource: "https://nodejs.org/api/os.html",
        category: "os"
    },
    
    {
        name: "process.argv",
        url: "https://nodejs.org/api/process.html#processargv",
        description: "An array containing the command-line arguments passed when the Node.js process was launched. The first element is the path to the Node.js executable, and the second element is the path to the JavaScript file being executed.",
        urlSource: "https://nodejs.org/api/process.html",
        category: "process"
    },

    {
        name: "process.exit([code])",
        url: "https://nodejs.org/api/process.html#processexitcode",
        description: "Ends the process with the specified exit code. If omitted, exit code 0 is used (meaning success). Useful for graceful shutdown or signaling an error.",
        urlSource: "https://nodejs.org/api/process.html",
        category: "process"
    },

    {
        name: "http.createServer",
        url: "https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener",
        description: "Creates a new HTTP server. The 'requestListener' is a function which is automatically added to the 'request' event. Commonly used to serve web pages or APIs.",
        urlSource: "https://nodejs.org/api/http.html",
        category: "http"
    },

    {
        name: "http.request",
        url: "https://nodejs.org/api/http.html#httprequestoptions-callback",
        description: "Makes a request to a specified host and port. It returns an instance of the 'http.ClientRequest' class and can be used for making API calls or HTTP communication.",
        urlSource: "https://nodejs.org/api/http.html",
        category: "http"
    },

    {
        name: "url.parse",
        url: "https://nodejs.org/api/url.html#urlparseurlstring-parsequerystring-slashesdenotehost",
        description: "Parses a URL string into an object. Useful for breaking down URLs into readable parts like host, pathname, query, etc.",
        urlSource: "https://nodejs.org/api/url.html",
        category: "url"
    },
    {
        name: "url.format",
        url: "https://nodejs.org/api/url.html#urlformaturlobject",
        description: "Takes a parsed URL object and formats it back into a URL string. Useful for modifying and reconstructing URLs.",
        urlSource: "https://nodejs.org/api/url.html",
        category: "url"
    },

    {
        name: "url.parse",
        url: "https://nodejs.org/api/url.html#urlparseurlstring-parsequerystring-slashesdenotehost",
        description: "Parses a URL string into an object. Useful for breaking down URLs into readable parts like host, pathname, query, etc.",
        urlSource: "https://nodejs.org/api/url.html",
        category: "url"
    },
    {
        name: "url.format",
        url: "https://nodejs.org/api/url.html#urlformaturlobject",
        description: "Takes a parsed URL object and formats it back into a URL string. Useful for modifying and reconstructing URLs.",
        urlSource: "https://nodejs.org/api/url.html",
        category: "url"
    },

    {
        name: "util.format",
        url: "https://nodejs.org/api/util.html#utilformatformat-args",
        description: "Returns a formatted string using printf-like formatting. Useful for debugging or logging values in a clean way.",
        urlSource: "https://nodejs.org/api/util.html",
        category: "util"
    },
    {
        name: "util.promisify",
        url: "https://nodejs.org/api/util.html#utilpromisifyoriginal",
        description: "Converts a callback-based function into a Promise-based one, which is very useful for using 'async/await' with legacy APIs.",
        urlSource: "https://nodejs.org/api/util.html",
        category: "util"
    },

    {
        name: "util.format",
        url: "https://nodejs.org/api/util.html#utilformatformat-args",
        description: "Returns a formatted string using printf-like formatting. Useful for debugging or logging values in a clean way.",
        urlSource: "https://nodejs.org/api/util.html",
        category: "util"
    },
    {
        name: "util.promisify",
        url: "https://nodejs.org/api/util.html#utilpromisifyoriginal",
        description: "Converts a callback-based function into a Promise-based one, which is very useful for using 'async/await' with legacy APIs.",
        urlSource: "https://nodejs.org/api/util.html",
        category: "util"
    },

    {
        name: "stream.pipeline",
        url: "https://nodejs.org/api/stream.html#streampipelinesource-transforms-destination-callback",
        description: "A convenient way to pipe a series of streams together and handle errors and cleanup.",
        urlSource: "https://nodejs.org/api/stream.html",
        category: "stream"
    },
    
    {
        name: "stream.Readable.from",
        url: "https://nodejs.org/api/stream.html#readablefromiterable-options",
        description: "Creates a readable stream from an iterable, useful for converting simple data into stream form.",
        urlSource: "https://nodejs.org/api/stream.html",
        category: "stream"
    }
];

/*
{
    name: " ",
    url: " ",
    description: " ",
    urlSource: " ",
    category: " "
},
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

