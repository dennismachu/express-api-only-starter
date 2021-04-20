/**
 * Contains app controllers.
 * The controller can thus be thought of as a middleman between models & services
 */

import {
  createNotes,
  viewNote,
  viewAllNotes,
  updateNote,
  removeNotes,
} from './notesService.js'

import apiResponse from '../../utility/apiResponse'
import Joi from 'joi'

// Create
const create = async (req, res, next) => {
  const {title, description} = req.body
  try {
    let response = await createNotes(title, description)
    let message = 'Note created succeddfully'
    return apiResponse.successResponseWithData(res, message, response)
  } catch (error) {
    return apiResponse.errorResponse(res, error.errors)
  }
}

// Read
const readAll = async (req, res, next) => {
  try {
    const limit = req.query.limit || 10
    const notes = await viewAllNotes(limit)
    return apiResponse.successResponseWithData(res, notes)
  } catch (error) {
    return apiResponse.errorResponse(res, error.errors)
  }
}

// Read By ID
const readOne = async (req, res, next) => {
  try {
    const noteID = req.params.id
    const note = await viewNote(noteID)
    if (!note) {
      const message = 'No record found'
      return apiResponse.notFoundResponse(res, message)
    }
    return apiResponse.successResponseWithData(res, note)
  } catch (error) {
    return apiResponse.errorResponse(res, error.errors)
  }
}
// Update
const update = async (req, res, next) => {
  try {
    const noteID = req.params.id
    const note = await viewNote(noteID)
    if (!note) {
      const message = 'No record found'
      return apiResponse.notFoundResponse(res, message)
    }
    const noteData = {
      title: Joi.attempt(
        req.body.title,
        Joi.string().min(3).max(30).required(),
        'Title Error:',
      ),
      description: Joi.attempt(
        req.body.description,
        Joi.string(),
        'Description Error:',
      ),
    }

    const updateNoteData = await updateNote(noteID, noteData)

    return apiResponse.successResponseWithData(res, updateNoteData)
  } catch (error) {
    return apiResponse.errorResponse(res, error.message)
  }
}
// Delete
const remove = async (req, res, next) => {
  try {
    const note = await viewNote(req.params.id)
    if (!note) {
      const message = 'Note not found'
      return apiResponse.notFoundResponse(res, message)
    }
    await removeNotes(req.params.id)
      .then(result => {
        const message = 'Note Deleted'
        return apiResponse.successResponse(res, message)
      })
      .catch(err => {
        return apiResponse.errorResponse(res, err.errors)
      })
  } catch (error) {
    return apiResponse.errorResponse(res, error.errors)
  }
}

export {create, readAll, update, remove, readOne}
