const color = document.querySelector('.color');
const text = document.querySelector('.text');
const history = document.querySelector('.history');
let colorList = ['#000000'];
function changeColor() {
  function stringHex(num) {
    const hex = '0123456789ABCDEF';
    let string = '';
    for (let i = 0; i < num; ++i) {
      string += hex.charAt(Math.random() * hex.length); // hex.length is 16.
    }
    return string;
  }
  let presentColor = stringHex(6); // 6 because the color is only of 6 digits.
  colorList.push(`#${presentColor}`);
  history.style.display = 'block';
}
document.addEventListener('keypress', function (e) {
  changeColor();
  let ki = e.key;
  if (ki == 'h') {
    console.log(colorList);
  } else {
    let col = colorList[colorList.length - 1];
    color.style.backgroundColor = `${col}`;
    text.textContent = `${col}`;
  }
}
  document.addEventListener('click', function (e) {
  changeColor();
  let col = colorList[colorList.length - 1];
  color.style.backgroundColor = `${col}`;
  text.textContent = `${col}`;
});
