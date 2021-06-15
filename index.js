const fs = require('fs')

global.include = (param) => {
    let x =  __dirname.replace(/\\/g, "/");
    let y = x.replace('/node_modules/node-absolute-path', '');
    let z = param;
    let ext = ['', '.ts', '.tsx', '.js', '.jsx','.html','.css','.png','.jpg'];

    for (let i = 0; i < ext.length; i++) {
        if (fs.existsSync(`${y}/${param}${ext[i]}`)) {
            z = `${y}/${param}`;
        }
    };

    return require(directory);
}
