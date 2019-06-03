
import getArea from '../state/get-area';

export default (function (el) {

  var qedDraghandleCenter = {};
  qedDraghandleCenter.x = el.getBoundingClientRect().left + 10;
  qedDraghandleCenter.y = (0, _getArea2.default)(el.getBoundingClientRect()).center.y;

  return qedDraghandleCenter;
});