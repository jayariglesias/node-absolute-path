const fs = require('fs')

global.include = (param) => {
    let replaced = __dirname.replace('/node_modules/node-absolute-path', '');
    let directory = param;
    let ext = ['', '.ts', '.tsx', '.js', '.jsx','.html','.css','.png','.jpg'];

    for (let i = 0; i < ext.length; i++) {
        if (fs.existsSync(`${replaced}/${param}${ext[i]}`)) {
            directory = `${replaced}/${param}`;
        }
    };

    return require(directory);
}
