// import { usersData, myNames } from "./usersData.js";
// import { usersData, myName as myNames } from "./usersData.js";
// import getFirstUser, { usersData, myName } from "./usersData.js";

 import productsData from "./productsData.js";
// import pD from "./productsData.js";

 console.log(productsData)
// console.log(pD)

// console.log(usersData)
// console.log(myName)

// console.log(getFirstUser())

// import * as allData from "./usersData.js";
// console.log(allData)
// console.log(allData.myName)
// console.log(allData.usersData)
// console.log(allData.default())


// Using module provides: 
// 1. Better code organization: By breaking code into separate files, modules help keep code organized and manageable.
// 2. Reusability: Modules can be reused across different parts of an application or even in different projects, reducing code duplication.
// 3. Maintainability: Modules make it easier to maintain and update code, as changes can be made in one place without affecting the entire codebase.
// 4. Namespace management: Modules help avoid naming conflicts by encapsulating variables and functions within their own scope.
// 5. Dependency management: Modules allow developers to explicitly declare dependencies, making it easier to understand and manage relationships between different parts of the code.
// 6. Improved collaboration: In team environments, modules enable multiple developers to work on different parts of the codebase simultaneously without interfering with each other's work.    
// 7. Lazy loading: Modules can be loaded on demand, improving application performance by reducing initial load times.
// 8. Enhanced tooling support: Many modern development tools and build systems provide better support for modular code, including features like tree shaking and code splitting.
// 9. Standardization: ES6 modules provide a standardized way to define and use modules in JavaScript, promoting consistency across projects and teams.
// 10. Better testing: Modules can be tested in isolation, making it easier to write unit tests and ensuring that individual components work as expected.
// Overall, using modules in JavaScript leads to cleaner, more efficient, and more maintainable code.

// Note: To use ES6 modules in the browser, the script tag must include type="module" attribute in the HTML file.
// Example: <script type="module" src="script.js"></script>
// This tells the browser to treat the script as a module, enabling the use of import and export statements.
// Without this attribute, the browser will not recognize the module syntax and will throw errors.
// Additionally, when using modules, the files are loaded with CORS (Cross-Origin Resource Sharing) restrictions, so they must be served from a web server rather than being opened directly from the file system.
// For local development, you can use a simple HTTP server like Live Server in VSCode or Python's built-in HTTP server.
// Also, module scripts are deferred by default, meaning they will execute after the HTML document has been fully parsed.
// Remember to test your modules in an environment that supports them, such as modern browsers or Node.js with ES module support enabled.
