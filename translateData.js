const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');

// The best way is to just replace the hardcoded structures with translated ones.
// Let's just create a new data.ts
