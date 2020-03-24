const Direction = {
  NORTH: 0,
  EAST: 1,
  SOUTH: 2,
  WEST: 3,
};

module.exports.getDirectionVector = (direction) => {
  switch (direction) {
    case Direction.NORTH:
      return {x: 0, y: 1};
    case Direction.EAST:
      return {x: 1, y: 0};
    case Direction.SOUTH:
      return {x: 0, y: -1};
    case Direction.WEST:
      return {x: -1, y: 0};
  }
  return {x: 0, y: 0};
};

module.exports.getDirectionText = (direction) => {
  switch (direction) {
    case Direction.NORTH:
      return 'North';
    case Direction.EAST:
      return 'East';
    case Direction.SOUTH:
      return 'South';
    case Direction.WEST:
      return 'West';
  }
  return '';
};

module.exports.addDirection = (direction, deltaDirection) => {
  return (((direction + deltaDirection) % 4) + 4) % 4; // quick maths
};

module.exports.Values = Direction;
