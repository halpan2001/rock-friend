import { helper } from '@ember/component/helper';

export function setColors(params/*, hash*/) {
  let bColor = params[0];
  let rColor = params[1];
  let pColor = params[2];

  let rockPath = document.getElementsByClassName("rockPath");
  // console.log(rockPath);
  for (var i = 0; i < rockPath.length; i++) {
        // console.log(rockPath[i]);
        rockPath[i].style.fill = rColor;
    }

  let pupilEllipse = document.getElementsByClassName("pupilEllipse");
  // console.log(rockPath);
  for (var j = 0; j < pupilEllipse.length; j++) {
        // console.log(rockPath[i]);
        pupilEllipse[j].style.fill = pColor;
    }

  let body = document.getElementsByTagName('body');
  body[0].style.backgroundColor = bColor;


  // console.log(bColor, rColor, pColor);
  return '';
}

export default helper(setColors);
