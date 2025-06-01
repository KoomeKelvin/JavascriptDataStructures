const {traverseString, inToString, deleteInString, searchInString } = require('../string.js');


let firstName;

beforeEach(()=>{
    firstName = "Koome"; 
});

test('traverses  a string', ()=>{
    expect(traverseString(firstName)).toEqual("Koome");
});

test('insert character to string at a position', ()=>{
    let position = 0;
    expect(inToString("K", position = 0, firstName)).toEqual("KKoome");
    position = 3;
    expect(inToString("K", position = 3, firstName)).toEqual("KooKme");
});

test('delete character to string at a position', ()=>{
    let position = 0;
    expect(deleteInString(position, firstName)).toEqual("oome");
    position = 3;
    expect(deleteInString(position, firstName)).toEqual("Kooe");
});

test('search character in string', ()=>{
    expect(searchInString("K", firstName)).toBeTruthy();
    expect(searchInString("J", firstName)).not.toBeTruthy();
});