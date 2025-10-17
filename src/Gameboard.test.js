import Gameboard from "./Gameboard";
import Ship from "./ship";

test("can create gameboard", () => {
  const gameboard = Gameboard();
  const ship = Ship(3);
  gameboard.placeShip(ship, [0, 0], "horizontal");
  expect(gameboard.ships.length).toBe(1);
  expect(gameboard.ships[0].ship).toBe(ship);
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

test("ship occupies correct coordinates when placed VERTICALLY", () => {
  const gameboard = Gameboard();
  const ship = Ship(3);
  gameboard.placeShip(ship, [2, 5], "vertical");

  const placedShip = gameboard.ships[0];
  expect(placedShip.coordinates).toEqual([
    [2, 5],
    [3, 5],
    [4, 5],
  ]);
});

test("ship's attack function", () => {
  const gameboard = Gameboard();
  gameboard.receiveAttack([5, 5]);

  expect(gameboard.missedAttacks).toContainEqual([5, 5]);
});

test("attack hits a ship", () => {
  const gameboard = Gameboard();
  const ship = Ship(3);
  gameboard.placeShip(ship, [2, 3], "horizontal");
  gameboard.receiveAttack([2, 4]);

  expect(ship.hits).toBe(1);
  expect(gameboard.missedAttacks.length).toBe(0);
});
