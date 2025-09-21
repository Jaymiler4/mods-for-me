let gateColor = "#4a90e2"; // closed gate color
let openGateColor = "#a0d8ef"; // open gate color

elements.gate = {
  color: gateColor,
  behavior: behaviors.WALL, // solid when closed
  category: "machines",
  insulate: true,
  conduct: 1,
  properties: {
    open: false, // start closed
  },
  tick: function (pixel) {
    // if powered, open the gate
    if (pixel.charge) {
      if (!pixel.open) {
        pixel.open = true;
        pixel.color = openGateColor;
        pixel.behavior = behaviors.POWDER; // acts like empty space when open
      }
    }
    // if unpowered, close the gate
    else {
      if (pixel.open) {
        pixel.open = false;
        pixel.color = gateColor;
        pixel.behavior = behaviors.WALL; // solid again when closed
      }
    }

    doDefaults(pixel);
  },
  density: 5000,
  hardness: 0.8,
  state: "solid",
};
