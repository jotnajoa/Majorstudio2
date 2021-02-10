const fs = require('fs')
const d3 = require('d3')
var _ = require('lodash');



byDecades()

async function byDecades() {


    let predata = fs.readFileSync('./test2019-1.json');
    let data = JSON.parse(predata);
    let toptens = await getTopten(data)

    fs.writeFileSync('./testafter2019-1.json', JSON.stringify(toptens))

}


function getTopten(selectedArray) {
    return new Promise((res, rej) => {

        let toptenword;
        let selectedTotal = [];
        selectedArray.forEach((d) => {
            selectedTotal.push.apply(selectedTotal, d.words)
        });


        const frequency = _.map(_.groupBy(selectedTotal), val => ({ value: val[0], frequency: val.length }));
        frequency.sort((a, b) => parseFloat(b.frequency) - parseFloat(a.frequency));
        console.log(frequency);




        res(frequency)
    })
}