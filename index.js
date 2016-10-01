let fs = require('fs'),
    debug = require('debug')('replace');

// set the expression to replace code
const FLAG = '1f234sf哈d13llcin34jldfx';
const FLAG_exp = /1f234sf哈d13llcin34jldfx/g;

exports.loadFile = function (files) {
    Promise.all(files.map((path)=>{
        return new Promise((res,rej)=>{
            let codes = [];
            fs.readFile(path,'utf8',(err,data)=>{

                // hide markdown code like ``` cccc ``` format
                let hide = hideCode(data);
                codes = hide.code_container;
                data = hide.str;

                // remove English paragraph
                data = convert(data);

                // recover the markdown code
                data = backCode(data,codes);
                let copy_path = path+'.copy';
                fs.writeFile(copy_path,data,()=>{
                    // finish promise
                    res();
                })
            })
        })
    }))
}

function hideCode(str){
    let code = /\`\`\`[\s\S]+?\`\`\`/g,
        code_container=[];
    let replacer = function (match) {
        if(match){
            code_container.push(match);
            return FLAG;
        }
        return match;
    }
    str = str.replace(code,replacer);
    debug('hide code return '+str.slice(100));
    debug('and the code_container is '+code_container.slice(30));
    return {str,code_container};
}
function backCode(str,codes) {
    let start = 0;
    let replacer = function (match) {
        if(match){
            return codes[start++];
        }
        return match;
    }
    debug('the code_container is '+codes);
    debug('in Code the replacer could match ',str.match(FLAG_exp).length);
    return str.replace(FLAG_exp,replacer);
}

function convert(md) {
    let eng = /[\r\n]{1}[\s\w\,\.\!\'\"\[\]\-\+\(\)\&\?\/]+[\r\n]{1}/g;
    let replacer = function (match) {
        if(match){
            return '\r\n';
        }
        return match;
    }
    return md.replace(eng,replacer);
}

