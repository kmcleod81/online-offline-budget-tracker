module.exports = {
    entry: "./src/app.js",
    output: {
        // path & name
        path: __dirname + "/dist", // folder contains complied code
        filename: "bundle.js", // lives in dist folder
    },
    // usually either development or production
    mode: 'development',
};