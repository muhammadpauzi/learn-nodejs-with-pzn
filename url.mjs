import { URL } from "url";

const google = new URL("https://google.co.id/search?q=nodejs+url+module");

console.log(google.toString());
console.log(google.origin);
console.log(google.href);
console.log(google.protocol);
console.log(google.host);
console.log(google.hostname);
console.log(google.pathname);
console.log(google.search);
console.log(google.searchParams);
console.log(google.searchParams.append("browser", "chrome"));
console.log(google.search);
console.log(google.searchParams);
