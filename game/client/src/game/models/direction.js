const Direction = {
  NORTH: 0,
  EAST: 1,
  SOUTH: 2,
  WEST: 3,
};

export const getDirectionText = (direction) => {
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

export default Direction;
