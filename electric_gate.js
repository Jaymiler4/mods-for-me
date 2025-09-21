let gateColor = "#4a90e2"; // default gate color
let openGateColor = "#a0d8ef"; // lighter color when open

elements.electric_gate = {
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
        pixel.behavior = behaviors.POWDER; // act like empty space so things can pass through
      }
    }
    // if not powered, close the gate
    else {
      if (pixel.open) {
        pixel.open = false;
        pixel.color = gateColor;
        pixel.behavior = behaviors.WALL; // back to solid
      }
    }

    doDefaults(pixel);
  },
  density: 5000,
  hardness: 0.8,
  state: "solid",
};
