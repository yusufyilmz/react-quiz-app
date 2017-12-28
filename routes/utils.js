import express from 'express';
import fs from 'fs';

const readJsonFileSync = (filepath, encoding) => {

    if (typeof (encoding) === 'undefined') {
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

export const getJson = (file) => {

    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}
