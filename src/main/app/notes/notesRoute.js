/**
 * Contains all of the route definitions for your application
 * These routes are intended to be stateless, so requests entering
 * the application through these routes are intended to be authenticated via tokens
 */

import {create, readAll, update, remove, readOne} from './notesController.js'

module.exports = router => {
  router.route('/notes').post(create).get(readAll)

  router.route('/notes/:id').get(readOne).delete(remove).patch(update)
}
