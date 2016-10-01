let path = require('path'),
    remove_en = require('../');

var files = [
    path.join(__dirname,'test.md')
]

remove_en.loadFile(files);