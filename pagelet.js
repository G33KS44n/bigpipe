'use strict';

var path = require('path');

function Pagelet(page) {
  this.page = page;

  this.id = [1, 1, 1, 1].map(function generator() {
    return Math.random().toString(36).substring(2).toUpperCase();
  }).join('-');
}

/**
 * The name of this pagelet so it can checked to see if's enabled. In addition
 * to that, it can be injected in to placeholders using this name.
 *
 * @public
 */
Pagelet.prototype.name = '';

/**
 * Save the location where we got our resources from, this will help us with
 * fetching assets from the correct location.
 *
 * @type {String}
 * @public
 */
Pagelet.prototype.directory = path.dirname(process.mainModule.filename);

/**
 * Check if the given pagelet has been enabled for the page.
 *
 * @api public
 */
Pagelet.prototype.enabled = function enabled(name) {
  return name in this.page.enabled;
};

/**
 * Check if the given pagelet has been enabled for the page.
 *
 * @api public
 */
Pagelet.prototype.disabled = function disabled(name) {
  return name in this.page.disabled;
};

//
// Make the Pagelet extendable.
//
Pagelet.extend = require('extendable');

//
// Expose the pagelet.
//
module.exports = Pagelet;
