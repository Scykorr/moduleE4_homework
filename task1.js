const getKeysVals = obj => {
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key: ${key} -|- Value: ${obj[key]}`);
        }
    }
}

const job = {
    jobName: 'programmer',
}

const person = Object.create(job)

person.name = 'Anton';
person.surname = 'Fedosov';
person.age = 28;


getKeysVals(person)