export default function Gameboard() {
  return {
    ships: [],

    // Places a ship on the board by generating its coordinates
    placeShip: function (ship, startCoord, orientation) {
      const coordinates = [];
      const [row, col] = startCoord;

      for (let i = 0; i < ship.length; i++) {
        if (orientation === "horizontal") {
          coordinates.push([row, col + i]);
        } else if (orientation === "vertical") {
          coordinates.push([row + i, col]);
        }
      }

      this.ships.push({
        ship: ship,
        coordinates: coordinates,
      });
    },

    missedAttacks: [],

    // Checks if an attack hits a ship or misses
    receiveAttack: function (attackCoord) {
      let hit = false;

      for (let i = 0; i < this.ships.length; i++) {
        // Check if attackCoord matches any coordinate of this ship
        const match = this.ships[i].coordinates.some(
          (coord) => coord[0] === attackCoord[0] && coord[1] === attackCoord[1]
        );

        if (match) {
          this.ships[i].ship.hit();
          hit = true;
          break;
        }
      }

      // If no hit was found, record a miss
      if (!hit) {
        this.missedAttacks.push(attackCoord);
      }
    },
  };
}
