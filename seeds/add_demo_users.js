'use strict'

const User = require('../models/User')

module.exports.seed = (knex, Promise) =>
  new User({
    Name: 'Daniel',
    email: '1@2.com'
  }).save()


