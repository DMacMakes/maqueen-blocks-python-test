basic.showIcon(IconNames.Yes)
let got_dark = false
let reacted_to_darkness = false
basic.forever(function on_forever() {
    
    if (input.lightLevel() < 100 && !got_dark) {
        got_dark = true
        if (got_dark) {
            
        }
        
    }
    
    if (input.lightLevel() >= 120 && got_dark) {
        got_dark = false
    }
    
})
