const fs = require('fs');

let predata1 = fs.readFileSync('./merging.json');

//testafter2010 이랑 testafter2011-1합쳐서 output으로 merging을 만들고

// merging이랑 2011-2합쳐서 다시 merging으로 overwrite하고 계속 돌려서 최종적으로 2010s로 저장한것임

// 이렇게 한 이유는 2010s가 너무커서
// test2010, test2011-1, test2011-2이런식으로 다 쪼개야만 읽는것이 가능했기때문



let data1 = JSON.parse(predata1);

let predata2 = fs.readFileSync('./testafter2019-3.json');
let data2 = JSON.parse(predata2);

async function mergefile() {
    let dummy = await preprocessing();
    let seconddummy = await mergingTwo();
    fs.writeFileSync('./2010s.json', JSON.stringify(data1))
    console.log('merged');

}

mergefile();

function preprocessing() {

    return new Promise((res, rej) => {

        let data1V = [];
        let data2V = [];
        let overlap = [];


        data1.forEach((d) => {
            data1V.push(d.value)
        });

        data2.forEach((d) => {
            data2V.push(d.value)
        })

        data2V.forEach((d) => {
            if (data1V.includes(d)) {
                overlap.push(d)
            }
        })

        overlap.forEach((d) => {

            let targetIndex1 = data1V.indexOf(d);

            let firstfrq = data1[targetIndex1].frequency;

            let targetIndex2 = data2V.indexOf(d);

            let secondfrq = data2[targetIndex2].frequency;

            data1[targetIndex1].frequency = firstfrq + secondfrq;

        })


        let nonOverlap = [];

        overlap.forEach((d) => {
            let index = data2V.indexOf(d);
            data2.splice(index, 1)
        })

        res('dummy')
    })

}

function mergingTwo() {
    return new Promise((res, rej) => {
        data1.forEach((d) => {
            data2.push(d)
        })
        res('dummy')


    })
}








// file을 하나 읽어내고,

// data1, data2가 있다.

// data1의 value를 뽑아낸다.
// data2의 value를 뽑아낸다.

// data1과 data2에서 겹치는 value가 있으면, overlap에 다가 push한다

// overlap을 iterate한다

// data2에서 overlap에 있는 녀석을 value에서 찾으면 그 값을 취하고

// data1에서 overlap에 있는 녀석을 찾아서 그 frequency에다가 이것을 더한다