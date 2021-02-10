const fs = require('fs')
const d3 = require('d3')
var _ = require('lodash');

let predata = fs.readFileSync('./data/data.json');
let data = JSON.parse(predata);

byDecades('eighty')


async function byDecades(number) {
    let selectedEra = number
    let years;
    if (selectedEra == 'eighty') {
        years = d3.range(1980, 1990, 1)
        console.log(years);
    } else if (selectedEra == 'ninety') {
        years = d3.range(1990, 2000, 1)
        console.log(years);
    } else if (selectedEra == 'zero') {
        years = d3.range(2000, 2010, 1)
        console.log(years);
    } else if (selectedEra == 'ten') {
        years = d3.range(2010, 2020, 1)
        console.log(years);
    }


    let selectedArray = [];


    for (let year of years) {
        let wordarray = await createArray(year, data);
        selectedArray.push(wordarray)
    }

    let toptens = await getTopten(selectedArray);

    fs.writeFileSync('./1980s.json', JSON.stringify(toptens))

}


function createArray(year, data) {
    return new Promise((res, rej) => {

        let words = {
            year: year,
            words: []
        };

        data.forEach((d) => {

            if (d.date == year) {
                words.words.push.apply(words.words, d.lyrics);
            } else {
                null
            }
        })
        res(words)
    })
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