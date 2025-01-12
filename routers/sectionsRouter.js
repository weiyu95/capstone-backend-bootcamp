const express = require('express');
const router = express.Router();

class SectionsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get('/', this.controller.getAll.bind(this.controller));
    router.post('/', this.controller.insertOne.bind(this.controller));
    // router.get(
    //   '/get-chapters',
    //   this.controller.getAllSectionChapters.bind(this.controller)
    // );
    router.get(
      '/count-all',
      this.controller.countSections.bind(this.controller)
    );

    return router;
  }
}

module.exports = SectionsRouter;
