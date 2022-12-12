/**
 * call this function when it gets dark: It'll  display a skull on the microbit lights and play creepy music
 */
// Display a skull on the LEDs and play a creepy tune.
function react_to_darkness () {
    its_dark = true
    basic.showIcon(IconNames.Skull)
    music.setTempo(140)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
}
// Display the sun on the LEDs and play "here comes the sun" in a major key
function react_to_light () {
    its_dark = false
    // music.play_melody("A F G A A F F F", 240)
    music.setTempo(240)
    music.startMelody(here_sun, MelodyOptions.Once)
    // music.play_melody("A", 120)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # # # .
        # . # . #
        . # . # .
        `)
}
/**
 * Here Comes The Sun, by The Beatles as a series of notes.
 */
let its_dark = false
let here_sun: string[] = []
here_sun = [
"A",
"F",
"G",
"A",
"A",
"F",
"F",
"F"
]
// The leds on the MicroBit can check roughly how much light is shining on it. The number it gives you can be between 0 (no light at all) and 255 (a lot of light!). I've set it to 100, a number recommended as a good starting point by the people who made the Microbit. If the dark mode is triggering in bright rooms, lower the number by 10 and try again. If dark mode won't trigger  even in rooms with the light off, you might want to raise it by 10, and try again. Keep going until you find the right level for you.
let DARKNESS = 80
basic.showIcon(IconNames.Yes)
// Figure out if it's dark or light by checking the light sensor.
if (input.lightLevel() < DARKNESS) {
    react_to_darkness()
} else {
    react_to_light()
}
basic.forever(function () {
    if (input.lightLevel() < DARKNESS && !(its_dark)) {
        react_to_darkness()
    }
    if (input.lightLevel() >= DARKNESS + 10 && its_dark) {
        react_to_light()
    }
})
