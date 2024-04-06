const getKeysVals = (inputStr, obj) => {
    return inputStr in obj;
}

const job = {
    jobName: 'programmer',
}

const person = Object.create(job)

person.name = 'Anton';
person.surname = 'Fedosov';
person.age = 28;


const result = getKeysVals('jobName', person)
console.log(result)