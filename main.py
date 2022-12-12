"""

call this function when it gets dark: It'll  display a skull on the microbit lights and play creepy music

"""
# Display a skull on the LEDs and play a creepy tune.
def react_to_darkness():
    global its_dark
    its_dark = True
    basic.show_icon(IconNames.SKULL)
    music.set_tempo(140)
    music.start_melody(music.built_in_melody(Melodies.DADADADUM),
        MelodyOptions.ONCE)
# Display the sun on the LEDs and play "here comes the sun" in a major key
def react_to_light():
    global its_dark
    its_dark = False
    # music.play_melody("A F G A A F F F", 240)
    music.set_tempo(240)
    music.start_melody(here_sun, MelodyOptions.ONCE)
    # music.play_melody("A", 120)
    basic.show_leds("""
        . # . # .
                # . # . #
                . # # # .
                # . # . #
                . # . # .
    """)
"""

Here Comes The Sun, by The Beatles as a series of notes.

"""
its_dark = False
here_sun: List[str] = []
here_sun = ["A", "F", "G", "A", "A", "F", "F", "F"]
# The leds on the MicroBit can check roughly how much light is shining on it. The number it gives you can be between 0 (no light at all) and 255 (a lot of light!). I've set it to 100, a number recommended as a good starting point by the people who made the Microbit. If the dark mode is triggering in bright rooms, lower the number by 10 and try again. If dark mode won't trigger  even in rooms with the light off, you might want to raise it by 10, and try again. Keep going until you find the right level for you.
DARKNESS = 100
basic.show_icon(IconNames.YES)
# Figure out if it's dark or light by checking the light sensor.
if input.light_level() < DARKNESS:
    react_to_darkness()
else:
    react_to_light()

def on_forever():
    if input.light_level() < DARKNESS and not (its_dark):
        react_to_darkness()
    if input.light_level() >= DARKNESS + 20 and its_dark:
        react_to_light()
basic.forever(on_forever)
