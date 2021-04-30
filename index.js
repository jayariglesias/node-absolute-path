global.include = (x) => {
    const dir = __basedir.replace('node_modules/node-absolute-path','')
    return require(`${dir}/${x}`);
}