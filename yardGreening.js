function yardGreening(input) {
    let number = (input[0])
    let cenaZaOzelenqvane = ((input[0]) * 7.61)
    let discount = (0.18 * ((input[0]) * 7.61))
    let finalPrice = (((input[0]) * 7.61) - (0.18 * ((input[0]) * 7.61)))

    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["550"])