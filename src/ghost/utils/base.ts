import { isEqual, isPlainObject, iteratee } from 'lodash-es'
export function any (obj, predicate) {
  predicate = iteratee(predicate);
  for (var index = 0; index < obj.length; index++) {
    if (predicate(index, obj[index], obj)) {
      return true;
    }
  }
  return false;
}
export function backAny (obj, predicate) {
  predicate = iteratee(predicate);
  for (var index = obj.length - 1; index >= 0; index--) {
    if (predicate(index, obj[index], obj)) {
      return true;
    }
  }
  return false;
}

export function isEmptyObject (obj) {
  return isEqual(obj, {});
}

function isNotEmptyObject(obj) {
  return isPlainObject(obj) && !isEmptyObject(obj);
}
