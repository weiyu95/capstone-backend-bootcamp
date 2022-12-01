const BaseController = require("./baseController");

class CadetsController extends BaseController {
  constructor(model, cadetSectionModel, cadetChaptersModel, sectionsModel) {
    super(model);
    this.cadetSectionModel = cadetSectionModel;
    this.cadetChaptersModel = cadetChaptersModel;
    this.sectionsModel = sectionsModel;
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */
  async getAll(req, res) {
    try {
      const output = await this.model.findAll({
        include: { model: this.cadetSectionModel },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOne(req, res) {
    const { id, sectionId } = req.query;
    try {
      const user = await this.model.findOne({
        where: [{ cadetId: id }, { sectionId: sectionId }],
        include: { model: this.cadetSectionModel },
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CadetsController;