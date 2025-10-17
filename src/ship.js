export default function Ship(length) {
  return {
    length: length,
    hits: 0,
    hit: function () {
      this.hits++;
    },
    isSunk: function () {
      if (this.hits >= length) {
        return true;
      } else {
        return false;
      }
    },
  };
}
