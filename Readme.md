# Scroll-select

Select item with scroll.

[demo](https://chemzqm.github.io/scroll-select)

The local example for this project have 2 different version , one is for es6 , other one is for es5 ,
those are in the example folder.

## Install

Using npm:

    npm i scroll-select -S

Using with es5 /Including by link & script tag:

(those files your need include is at /example/es5/scroll-select/ )
    
``` html
<link rel="stylesheet" type="text/css" href="scroll-select.css">
<script src="scroll-select.js"></script>
```


## Usage

if your include this lib by script tag, you should remove the ```var Select = require("scroll-select")```

``` js
var Select = require("scroll-select")
var select = new Select(el, {
  data: [{
    id: 1,
    text: '1990'
  }, {
    id: 2,
    text: '1991'
  }]
})
select.value(2000)

select.on('change', function (v) {
  console.log(v)
})
```

## Events

* `change` is emitted with new value and old value when selected item change ()

## API

### new Select(el, [opt])

Init select with `el` and optional option.

* `el` is container
* `opt.data` data array contains data with `id` and `text` property

### .setData(data)

Reset internal data with new data array.

### .unbind()

Unbind all event listeners.

### .prev()

Select previous item.

### .next()

Select next item.

### .value([value])

Get/Set the value

## LICENSE

  Copyright 2016 chemzqm@gmail.com

  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the "Software"),
  to deal in the Software without restriction, including without limitation
  the rights to use, copy, modify, merge, publish, distribute, sublicense,
  and/or sell copies of the Software, and to permit persons to whom the
  Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included
  in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
  OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
## CONTRIBUTION

   **2018.05.16 :**
   [NorthBei](https://github.com/NorthBei) help to build this project to be a single lib,
   let this project can incldue in html file separately.