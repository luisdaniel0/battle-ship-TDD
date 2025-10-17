import Ship from "../src/ship.js";

describe("Ship object", () => {
  test("ship obj test", () => {
    const ship = Ship(4);
    expect(ship.length).toBe(4);
  });
  test("tracking hits:", () => {
    const ship = Ship(4);
    expect(ship.hits).toBe(0);
  });
  test("hit function to increase hits", () => {
    const ship = Ship(4);
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2);
  });
  test("the ship is NOT sinking", () => {
    const ship = Ship(4);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
  test("the ship has SUNK", () => {
    const ship = Ship(4);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
