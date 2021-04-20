/**
 * The Models files contains all of your schema.
 * Each database table has a corresponding "Model" which is used to interact with that table.
 * Models allow you to query for data in your tables, as well as insert new records into the table.
 */

import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const Schema = mongoose.Schema

const notesSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required. - Insert a title'],
      minlength: [3, 'Minimun title length 3 characters'],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

notesSchema.plugin(mongoosePaginate)

const notes = mongoose.model('note', notesSchema, 'notes')

export default notes
