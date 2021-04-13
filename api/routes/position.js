const express = require('express')
const passport = require('passport')
const controller = require('../controllers/position')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.post('/:id', passport.authenticate('jwt', {session: false}), controller.createElem)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove)

module.exports = router
