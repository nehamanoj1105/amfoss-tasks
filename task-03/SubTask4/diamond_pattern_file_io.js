const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8').trim();
const n = parseInt(input);

let output = '';

for (let i = 0; i < n; i++) 
{
    output += ' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1) + '\n';
}
for (let i = n - 2; i >= 0; i--)
{
    output += ' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1) + '\n';
}

fs.writeFileSync('output.txt', output);
