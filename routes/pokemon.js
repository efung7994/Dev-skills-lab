import { Router } from 'express'

import * as pokemonCtrl from '../controllers/pokemon.js'

const router = Router()

// GET localhost:3000/
router.get('/', pokemonCtrl.index )
router.get('/new', pokemonCtrl.new)
router.get('/show', pokemonCtrl.show)
router.post('/', pokemonCtrl.create)


export { router }