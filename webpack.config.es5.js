const fs = require('fs');

//copy the /root/style.css to /root/example/es5/scroll-select.css and rename
const scrollSelectCss = fs.readFileSync('./style.css');
fs.writeFile("./example/es5/scroll-select.css", scrollSelectCss, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was saved!");
});

module.exports = {
  entry: './index.js',
  output: {
    path: 'example/es5/',
    filename: 'scroll-select.js',
    library: 'Select',
    libraryTarget: 'window'
  }
}
