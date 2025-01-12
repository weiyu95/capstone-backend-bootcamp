const express = require('express');
const router = express.Router();

class CadetChaptersRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get('/', this.controller.getAll.bind(this.controller));
    router.post('/', this.controller.insertOne.bind(this.controller));
    router.put('/', this.controller.updateOne.bind(this.controller));
    router.get(
      '/complete-status',
      this.controller.getOne.bind(this.controller)
    );
    router.get(
      '/section-progress-status',
      this.controller.getAllChaptersProgress.bind(this.controller)
    );

    router.get(
      '/progress-status',
      this.controller.getTotalChaptersProgress.bind(this.controller)
    );

    return router;
  }
}

module.exports = CadetChaptersRouter;
