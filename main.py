basic.show_icon(IconNames.YES)
got_dark = False
reacted_to_darkness = False

def on_forever():
    global got_dark
    if input.light_level() < 100 and not got_dark:
        got_dark = True
        if got_dark:
            pass
    if input.light_level() >= 120 and got_dark:
        got_dark  = False
        
basic.forever(on_forever)
