
import * as jsonString from './test.json';
import quicktypeJSON from './util';




async function main() {


    const { lines: swiftPerson } = await quicktypeJSON(
        "ts",
        "Person",
        jsonString,
    );
    console.log(swiftPerson.join("\n"));


}

main();