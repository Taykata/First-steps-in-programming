function projectCreation(input) {
    let name = (input[0]);
    let number = (input[1]);
    let hours = (number * 3)

    console.log(`The architect ${name} will need ${hours} hours to complete ${number} project/s.`);
}

projectCreation(["George", "4"])