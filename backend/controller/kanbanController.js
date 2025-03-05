const Kanban = require("../model/kanbanSchema");

module.exports = {
  addTaskApi: async function (req, res) {
    try {
      const newKanbanTask = new Kanban({
        ...req.body,
      });
      await newKanbanTask.save();
      return res.status(201).json({ newKanbanTask });
    } catch (err) {
      return res.status(500).json({ message: "error adding task", err });
    }
  },

  //TODO
  listKanbanId: async function (req, res) {
    try {
      const kanbanTaskId = req.params.id; //replae with req.user._id when middleware exist
      const KanbanTask = await Kanban.findById(kanbanTaskId);
      if (!KanbanTask) {
        console.log("No Task available");
        return res.status(404).json({ message: "No task available" });
      }

      return res.status(201).json({ KanbanTask });
    } catch (err) {
      return res.status(500).json({ err });
    }
  },

  deleteKanbanTask: async function (req, res) {
    try {
      const kanbanTaskId = req.params.id;

      const deleteKanbanTask = await Kanban.findByIdAndDelete(kanbanTaskId);
      return res.status(201).json({ deleteKanbanTask });
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  editKanbanTask: async function (req, res) {
    try {
      const kanbanTaskId = req.params.id;
      const kanbanTaskUpdate = req.body;

      const updatedKanbanTask = await Kanban.findByIdAndUpdate(
        kanbanTaskId,
        kanbanTaskUpdate,
        { new: true }
      );
      return res.status(201).json({ updatedKanbanTask });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
