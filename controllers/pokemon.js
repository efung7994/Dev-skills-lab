import { Pokemon } from '../models/pokemon.js'

function index(req, res) {
    Pokemon.find({})
    .then(pokemon =>{
      res.render('pokemon/index', {
        pokemon:pokemon
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/pokemon')
    })
}

function newPokemon(req, res) {
  res.render ('pokemon/new',)
}

function create(req,res) {
  req.body.starter = false
  Pokemon.create(req.body)
  .then(pokemon => {
    res.redirect('/pokemon')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/pokemon/new')
  })
}

function show(req, res) {
  Pokemon.findById(req.params.pokemonId)
  .then(pokemon => {
    res.render('pokemon/show', {
      pokemon: pokemon
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/pokemon')
  })
}

function deletePokemon(req, res) {
  Todo.findByIdAndDelete(req.params.pokemonId)
  .then(pokemon => {
    res.redirect('/pokemon')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/pokemon')
  })
}

export{
  index,
  newPokemon as new,
  create,
  show,
  deletePokemon as delete
}