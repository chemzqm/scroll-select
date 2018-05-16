require('../../style.css')
var Select = require('../../')

var el = document.getElementById('select')

var select = new Select(el, {
  data: getData(1980)
})
select.value(1990)

select.on('change', function (v) {
  console.log(v)
})

function getData(from) {
  var data = []
  for (var i = 0; i < 15; i ++) {
    data.push({
      id: String(from + i),
      text: String(from + i) + '年'
    })
  }
  return data
}

document.getElementById('prev').addEventListener('click', function () {
  select.prev()
}, false)

document.getElementById('next').addEventListener('click', function () {
  select.next()
}, false)

document.getElementById('rebuild').addEventListener('click', function () {
  select.setData(getData(1970))
}, false)

document.getElementById('unbind').addEventListener('click', function () {
  select.unbind()
}, false)
