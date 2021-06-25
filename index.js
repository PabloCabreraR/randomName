'use strict'

const uniqueRandomArray = require('unique-random-array')

const maleNames = require('./spanish-male')
const femaleNames = require('./spanish-female')

exports.all = {maleNames, femaleNames}
exports.randomMale = uniqueRandomArray(maleNames)
exports.randomFemale = uniqueRandomArray(maleNames)