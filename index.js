const fs = require('fs')

global.include = (z) => {
    let x = __dirname.replace(/\\/g, "/");
    let y = x.replace('/node_modules/node-absolute-path', '');
    let ext = ['', '.ts', '.tsx', '.js', '.jsx', '.html', '.css', '.png', '.jpg'];

    for (let i = 0; i < ext.length; i++) {
        if (fs.existsSync(`${y}/${z}${ext[i]}`)) {
            z = `${y}/${z}`;
        }
    };

    return require(z);
}
