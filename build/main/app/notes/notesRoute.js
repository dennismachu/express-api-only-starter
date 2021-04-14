"use strict";

var _notesController = require("./notesController.js");

/**
 * Contains all of the route definitions for your application
 * These routes are intended to be stateless, so requests entering 
 * the application through these routes are intended to be authenticated via tokens
 */
module.exports = function (router) {
  router.route('/notes').post(_notesController.create).get(_notesController.readAll);
  router.route('/notes/:id').get(_notesController.readOne)["delete"](_notesController.remove).patch(_notesController.update);
};
//# sourceMappingURL=notesRoute.js.map