
//import * as jsonString from './test.json';
import quicktypeJSON from './util';
import * as fs from 'fs'

import * as path from 'path'

async function main() {

    let src = path.join(__dirname, '../', '../json');

    if (!fs.existsSync(src)) {
        console.log('no dir');
        return;
    }
    let files = fs.readdirSync(src);
    console.log(files);
    if (files.length < 1) {
        console.log('no file');
        return;
    }
    files.forEach(async file => {
        const jsonString = require(path.join(src, file))
        const split = file.split('.');
        const name = split[0];

        const splits = name.split('-');
        let typeName = ''
        typeName = splits.reduce((pre, cur) => {
            let sub = cur.substring(0, 1).toUpperCase()
                + cur.substring(1);
            return pre + sub;
        }, typeName)

        const { lines: swiftPerson } = await quicktypeJSON(
            "ts",
            typeName + 'Dto',
            jsonString,
        );
        const output = swiftPerson.join("\n");
        let out = path.join(__dirname, '../', '../', 'schemas')
        let filename = name + '.ts'

        if (!fs.existsSync(out)) {
            fs.mkdirSync(out);
        }
        fs.writeFileSync(path.join(out, filename), output);

        console.log(swiftPerson.join("\n"));
    });



}

main();