import mongoose from "mongoose";

const Schema = mongoose.Schema

const pokemonSchema = new Schema({
  text: String,
  starter: Boolean
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

export{
  Pokemon
}