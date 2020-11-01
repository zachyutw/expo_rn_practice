const fs = require('fs');
const { exec } = require('child_process');
let config = {};
try {
    config = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
} catch (err) {
    console.log(err);
}

exec(
    `keytool -genkey -v -keystore ${config.name}.keystore -alias ${config.name} -keyalg RSA -keysize 2048 -validity 10000`,
    (err, stout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stout);
        console.log(stderr);
    }
);
console.log(config.name);
