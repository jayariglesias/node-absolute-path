const fs = require('fs')

global.include = (param) => {
    let path = __dirname;
    path = __dirname.replace(/\\/g, "/")
    let replaced = path.replace('/node_modules/node-absolute-path', '');
    let directory = param;
    let ext = ['', '.ts', '.tsx', '.js', '.jsx','.html','.css','.png','.jpg'];

    for (let i = 0; i < ext.length; i++) {
        if (fs.existsSync(`${replaced}/${param}${ext[i]}`)) {
            directory = `${replaced}/${param}`;
        }
    };

    return require(directory);
}
