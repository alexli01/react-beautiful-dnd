// @flow
import type { Position } from '../types';
import getArea from '../state/get-area';

export default (el: HTMLElement): Position => {
  //getArea(el.getBoundingClientRect()).center;

  var qedDraghandleCenter = {};
  qedDraghandleCenter.x = el.getBoundingClientRect().left + 10;
  qedDraghandleCenter.y = (0, _getArea2.default)(el.getBoundingClientRect()).center.y

  return qedDraghandleCenter;
}
