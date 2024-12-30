// Importing 'os' and 'url' modules
// const os = require('os');
const url = require('url');

// // ---- OS Module Methods ----
// console.log("---- OS Module Information ----");

// console.log("Architecture:", os.arch()); // CPU architecture
// console.log("Platform:", os.platform()); // OS platform
// console.log("OS Type:", os.type()); // OS name
// console.log("Uptime (seconds):", os.uptime()); // System uptime in seconds
// console.log("Free Memory (bytes):", os.freemem()); // Free memory
// console.log("Total Memory (bytes):", os.totalmem()); // Total memory
// console.log("Home Directory:", os.homedir()); // Home directory
// console.log("Hostname:", os.hostname()); // Hostname
// console.log("Network Interfaces:", os.networkInterfaces()); // Network interfaces
// console.log("CPU Info:", os.cpus()); // CPU information

// console.log("\n---- URL Module Information ----");

// ---- URL Module Methods ----

// Sample URL for demonstration
const sampleURL = 'https://example.com:8080/path/to/page?name=JohnDoe&age=25#section2';

// // Parse URL using the URL constructor
const parsedURL = new URL(sampleURL);

console.log("Parsed URL:", parsedURL); // Full URL object
console.log("Protocol:", parsedURL.protocol); // Protocol (https:)
console.log("Host:", parsedURL.host); // Host (example.com:8080)
console.log("Hostname:", parsedURL.hostname); // Hostname (example.com)
console.log("Port:", parsedURL.port); // Port (8080)
console.log("Pathname:", parsedURL.pathname); // Path (/path/to/page)
console.log("Search Params:", parsedURL.searchParams); // Query parameters as URLSearchParams object
console.log("Hash:", parsedURL.hash); // Fragment (#section2)

// Manipulating search parameters
console.log("\n---- URL SearchParams Manipulation ----");

parsedURL.searchParams.append("status", "active"); // Add a new search parameter
console.log("New URL with 'status' param:", parsedURL.toString()); // Full URL with new parameter
console.log("Get 'name' param:", parsedURL.searchParams.get("name")); // Get specific search parameter
parsedURL.searchParams.delete("age"); // Remove a search parameter
console.log("URL after removing 'age' param:", parsedURL.toString());

// Legacy URL parsing with url.parse (not recommended for new code)
const legacyParsedURL = url.parse(sampleURL);
console.log("\nLegacy Parsed URL:", legacyParsedURL);

// Formatting URL object back into string
console.log("Formatted URL from object:", url.format(parsedURL));

// Resolving relative URL
console.log("Resolved URL:", url.resolve("https://example.com/path/", "/newpath"));
