// import Ship from "./ship";

export default function Gameboard(ship, startCoord, endCoord, orientation) {
  return {
    ships: [shipObj],
    placeShip: function (ship) {
      return this.ships.push(ship);
    },
  };
}
