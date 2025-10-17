import Gameboard from "./Gameboard";
import Ship from "./ship";

test("can create gameboard", () => {
  const gameboard = Gameboard();
  const ship = Ship(3);
  gameboard.placeShip(ship);
  expect(gameboard.ships.length).toBe(1);
  expect(gameboard.ships[0]).toBe(ship);
});

test("ship occupies correct coordinates when placed horizontally", () => {
  const gameboard = Gameboard();
  const ship = Ship(3);
  gameboard.placeShip(ship, [2, 3], "horizontal");

  const placedShip = gameboard.ships[0];
  expect(placedShip.coordinates).toEqual([
    [2, 3],
    [2, 4],
    [2, 5],
  ]);
});
