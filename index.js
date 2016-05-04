var Emitter = require('emitter')
var domify = require('domify')
var _ = require('dom')
var Iscroll = require('iscroll')
var hasTouch = require('has-touch')

/**
 * Init select with `el` and optional option
 *
 * @constructor
 * @param  {Element}  el
 * @param {Object} opt [optional]
 * @returns {undefined}
 */
function Select(el, opt) {
  if (!(this instanceof Select)) return new Select(el)
  var container = this.container = create('div', 'scroll-select-container')
  el.appendChild(this.container)
  this.rowHeight = opt.rowHeight || 30
  var data = opt.data || []
  var main = create('div')
  container.appendChild(main)
  container.appendChild(create('div', 'scroll-select-top'))
  container.appendChild(create('div', 'scroll-select-bottom'))
  var iscroll = this.iscroll = new Iscroll(container);
  this.el = create('ul', 'scroll-select')
  main.appendChild(this.el)
  this.setData(data)
  this._onscrollend = this.onscrollend.bind(this)
  iscroll.on('scrollend', this._onscrollend)
}

Emitter(Select.prototype)

/**
 * Set internal data
 *
 * @public
 * @param {Array} data
 */
Select.prototype.setData = function (data) {
  var v = this.value()
  var parentNode = this.el
  var is = this.iscroll
  this.data = data
  _(parentNode).clean('.scroll-select-item')
  var fragment = document.createDocumentFragment()
  for (var i = 0, l = data.length; i < l; i++) {
    var o = data[i]
    var el = domify('<li class="scroll-select-item" data-index="' +
         i + '">' + o.text + '</li>')
    fragment.appendChild(el)
  }
  parentNode.appendChild(fragment)
  //no scroll refresh
  is.refresh(true)
  var vals = data.map(function (o) {
    return String(o.id)
  })
  var idx = vals.indexOf(v)
  if (v == null || idx === -1) return is.scrollTo(0, 0)
  is.scrollTo(- idx*this.rowHeight, 0)
}

/**
 * Unbind all event listeners
 *
 * @public
 */
Select.prototype.unbind = function () {
  this.iscroll.unbind()
  this.off()
  _(this.container).remove()
}

/**
 * Select previous item
 *
 * @public
 */
Select.prototype.prev = function () {
  var is = this.iscroll
  var y = is.y
  is.scrollTo(y + this.rowHeight, 350)
}

/**
 * Select next item
 *
 * @public
 */
Select.prototype.next = function () {
  var is = this.iscroll
  var y = is.y
  is.scrollTo(y - this.rowHeight, 350)
}

/**
 * Scroll end event handler
 *
 * @private
 */
Select.prototype.onscrollend = function () {
  var is = this.iscroll
  var y = is.y
  if (y > 0) return is.scrollTo(0, 300)
  if (y < is.minY) return is.scrollTo(is.minY, 300)
  if (y%this.rowHeight === 0) {
    var v = this.value()
    if (this._value !== v) {
      this.emit('change', v, this._value)
    }
    this._value = v
    return
  }
  var m = is.direction == 1 ? Math.floor : Math.ceil
  m = hasTouch? Math.round : m
  var dest = this.rowHeight * m(y/this.rowHeight)
  is.scrollTo(dest, 300)
}

/**
 * Get/Set the value
 *
 * @public
 * @param {String|Number} value
 */
Select.prototype.value = function (value) {
  if (arguments.length === 0) {
    if (!this.data) return
    var n = Math.round(- this.iscroll.y/this.rowHeight)
    return this.data[n].id
  }
  for (var i = 0, l = this.data.length; i < l; i++) {
    var o = this.data[i]
    if (o.id == value) {
      this.iscroll.scrollTo(- i*this.rowHeight, 0)
      return
    }
  }
  throw new Error('value: ' + value + ' not found on data')
}

function create(tag, className) {
  var el = document.createElement(tag)
  if (className) el.className = className
  return el
}

module.exports = Select
