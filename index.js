'use strict';

const listOfRegex = [
    {
        regex: /(?:B8[1-2][5-8][0-9][0-9]|X76[5-8][0-9][0-9]|Z27[5-9][0-9][0-9])/,
        model: "AGC"
    },
    {
        regex: /(?:Z315[0-9][0-9]|Z51[5-6][0-9][0-9]|Z549[0-9][0-9]|B835[0-9][0-9]|B84[5-7][0-9][0-9]|B859[0-1][0-9])/,
        model: "Régiolis"
    },
    {
        regex: /B850[0-9][0-9]/,
        model: "Coradia Liner"
    },
    {
        regex: /(?:Z55[5-8][0-9][0-9]|Z563[0-9][0-9]|Z565[0-9][0-9]|Z57[0-2][0-9][0-9])/,
        model: "Regio2N"
    },
    {
        regex: /(?:Z566[0-9][0-9]|Z567[0-9][0-9])/,
        model: "Omneo Premium"
    },
    {
        regex: /Z21[5-7][0-9][0-9]/,
        model: "ZTER"
    },
    {
        regex: /Z235[0-9][0-9]/,
        model: "TER 2N PG"
    },
    {
        regex: /(?:Z24[5-7][0-9][0-9]|Z26[5-9][0-9][0-9])/,
        model: "TER 2N NG"
    },
    {
        regex: /X72[5-7][0-9][0-9]/,
        model: "XTER"
    },
    {
        regex: /X73[5-9][0-9][0-9]/,
        model: "ATER"
    },
    {
        regex: /(?:Z115[0-2][0-9]|Z96[0-3][0-9]|Z95[0-1][0-9]|Z9958[1-2]|Z75[0-1][0-9]|Z73[0-7][0-9]|Z9738[1-4])/,
        model: "Z2"
    },
    {
        regex: /(?:U525[0-9][0-9]|U535[0-9][0-9]|U536[0-9][0-9]|U537[0-9][0-9]|U538[0-9][0-9])/,
        model: "Citadis Dualis"
    }
]

module.exports = function getTrainModel(trainSerial) {
    let matchedModel = "";
    listOfRegex.forEach(regexItem => {
        if(regexItem.regex.test(trainSerial)){
            matchedModel = regexItem.model;
        }
    })
    return matchedModel;
}
