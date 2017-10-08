window.butt.onclick = () => {
  fetch(`http://localhost:3000/api?value=${window.inp.value}`)
    .then(response => response.json())
    .then((json) => {
      document.body.appendChild(document.createTextNode(JSON.stringify(json)));
    });
};
// npm i -D eslint-plugin-no-loops git+https://github.com/jaygood/eslint-plugin-no-typeof-undefined.git babel-eslint eslint-config-airbnb-base eslint-plugin-import
