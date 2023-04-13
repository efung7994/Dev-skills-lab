import { Router } from 'express'

import * as pokemonCtrl from '../controllers/pokemon.js'

const router = Router()

// GET localhost:3000/
router.get('/', pokemonCtrl.index )
router.get('/new', pokemonCtrl.new)
router.get('/:pokemonId', pokemonCtrl.show)
router.post('/', pokemonCtrl.create)
router.delete('/:pokemonId', pokemonCtrl.delete)


export { router }