
import getArea from '../state/get-area';

export default (function (el) {

  var qedDraghandleCenter = {};
  qedDraghandleCenter.x = el.getBoundingClientRect().left + 10;
  qedDraghandleCenter.y = getArea(el.getBoundingClientRect()).center.y;

  return qedDraghandleCenter;
});