// modules in node

const names = require('./first-module');
const func = require('./second-module');
console.log(names);

func('susan');
func(names.john);
func(names.peter);
