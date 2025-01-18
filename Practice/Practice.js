// objects

const personOne = {
    firstName: "Parasuram",
    lastName: "Chelikam",
    age: "25",
    sayHello: () => {
        console.log(`My name is ${personOne["firstName"]} ${personOne["lastName"]}`)
    },
    eat: () => {
        console.log("eating sambar idly")
    }
}

const personTwo = {
    firstName: "Venkat",
    lastName: "G",
    age: "26",
    sayHello: () => {
        console.log(`My name is ${personTwo["firstName"]} ${personTwo["lastName"]}...`)
    },
    eat: () => {
        console.log("eating dosa idly and chutney")
    }
}

personOne.sayHello();
personOne.eat();

personTwo.sayHello();
personTwo.eat();

const personThree = {
    firstName: "Alan",
    sayHello: function () {
        console.log(`Hi I am ${personThree["firstName"]}`)
    }
}

personThree.sayHello();

