function jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function p_stop () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function p_go () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
input.onButtonPressed(Button.A, function () {
    ap += 1
})
function clignote () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
p_stop()
let rp = 0
let ap = 0
basic.forever(function () {
    if (rp == 1 && ap >= 1) {
        p_go()
        basic.pause(500)
        for (let index = 0; index < 3; index++) {
            p_stop()
            basic.pause(85.5)
            clignote()
            basic.pause(85.5)
        }
        rp = 0
        ap = 0
        p_stop()
    } else {
        rp = 0
        while (rp == 0) {
            vert()
            basic.pause(500)
            jaune()
            basic.pause(500)
            rouge()
            rp += 1
            basic.pause(500)
        }
    }
})
