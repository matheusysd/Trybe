const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

const checkNationality = nationality => nationality === 'Australian';//Checando se a nacionalidade é Australiana
const checkYear = year => year > 1900 && year < 2001;//Checando o ano que a pessoa nasceu
const filterPeople = (people) => people.filter(({bornIn, nationality}) =>//Usando filter para verificar o ano e a nacionalidade
checkYear(bornIn) && checkNationality(nationality));
const filteredPeople = filterPeople(people)

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })
    
