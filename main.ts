basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showString("t=")
        basic.showNumber(input.temperature())
        basic.showString("degres")
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
