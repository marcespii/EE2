input.onButtonPressed(Button.A, function () {
    intermitent(20)
})
function intermitent (vegades: number) {
    for (let index = 0; index < vegades; index++) {
        led.toggle(2, 2)
        basic.pause(500)
    }
}
function cor (temps: number) {
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(temps)
        basic.showIcon(IconNames.Heart)
        basic.pause(temps)
    }
}
input.onButtonPressed(Button.B, function () {
    cor(10)
})
intermitent(10)
basic.clearScreen()
basic.pause(500)
cor(1000)
basic.clearScreen()
basic.pause(500)
basic.showString("BON DIA")
basic.clearScreen()
basic.pause(500)
