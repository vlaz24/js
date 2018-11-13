export const getQuadrant = (point) => {
    const x = getX(point);
    const y = getY(point);
  
    if (x > 0 && y > 0) {
      return 1;
    } else if (x < 0 && y > 0) {
      return 2;
    } else if (x < 0 && y < 0) {
      return 3;
    } else if (x > 0 && y < 0) {
      return 4;
    }
  
    return null;
  };
  
  export const getSymmetricalPoint = point => makePoint(-getX(point), -getY(point));
  
  export const calculateDistance = (point1, point2) => {
    const dX = getX(point2) - getX(point1);
    const dY = getY(point2) - getY(point1);
    return Math.sqrt((dX ** 2) + (dY ** 2));
  };