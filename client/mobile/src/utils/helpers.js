import { Dimensions } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const isIOS = Platform.OS === 'ios';

export const dynamicStyles = (stateArr, objStyle) => {
  if (stateArr.length > 0) {
    const thisarr = stateArr.map(e => e.split('-'));
    const toUpper = thisarr[0].slice(1, thisarr[0].length).map(e => e.charAt(0).toUpperCase() + e.substr(1));
    const nameStyle = [...thisarr[0].slice(0, 1)].concat([...toUpper]).join('');

    return objStyle[nameStyle];
  } else {
    return;
  }
};

export const fc = (selectedColor, objWtihColors) => {
  const objWC = objWtihColors.filter((e, i) => e.name === selectedColor);

  if (!objWC.length) {
    return selectedColor;
  } else {
    return objWC[0].color;
  }
};

export const scs = (selectedColor, objWtihColors, isObject = false, stylesMap) => {
  let emp;
  let obj = {};
  if (isObject && stylesMap.length > 0) {
    stylesMap.map(e => {
      if (!Array.isArray(selectedColor)) {
        const newArray = [selectedColor];
        const arrSplited = [...newArray].map(e => e.split(','))[0].map(e => e.trim());

        if (!!fc(selectedColor, objWtihColors)) {
          obj[e] = fc(selectedColor, objWtihColors);
          emp = obj;
        } else {
          emp = arrSplited;
        }
      } else {
        const colorObj = (obj[e] = !!fc(selectedColor, objWtihColors)
          ? fc(selectedColor, objWtihColors)
          : selectedColor);
        emp = colorObj;
      }
    });
  } else {
    if (!Array.isArray(selectedColor)) {
      const func = fc(selectedColor, objWtihColors);
      const newArray = [func];
      const arrSplited = [...newArray].map(e => e.split(','))[0].map(e => e.trim());

      emp = arrSplited;
    } else {
      emp = selectedColor;
    }
  }
  return emp;
};

export default function pick(t = {}, a = []) {
  return a.reduce(
    (m, k) => ({
      ...m,
      [k]: t[k]
    }),
    {}
  );
}
