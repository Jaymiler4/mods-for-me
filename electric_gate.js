let gateColor = "#4a90e2";
let openGateColor = "#a0d8ef";

elements.gate = {
    color: gateColor,
    behavior: behaviors.WALL,
    category: "machines",
    insulate: true,
    conduct: 1,
    properties: {
        open: false,
    },
    temp: 20,
    tempHigh: 1000,
    stateHigh: "molten_metal",
    density: 5000,
    hardness: 0.8,
    state: "solid",
    
    tick: function(pixel) {
        // Handle overheating
        if (pixel.temp > 1000) return;
        
        const shouldBeOpen = !!pixel.charge;
        
        // Only update if state actually changed
        if (shouldBeOpen !== pixel.open) {
            pixel.open = shouldBeOpen;
            pixel.color = shouldBeOpen ? openGateColor : gateColor;
            pixel.behavior = shouldBeOpen ? behaviors.POWDER : behaviors.WALL;
        }
        
        // Safe defaults handling
        if (typeof doDefaults === "function") {
            try {
                doDefaults(pixel);
            } catch (e) {
                // Ignore errors
            }
        }
    }
};
