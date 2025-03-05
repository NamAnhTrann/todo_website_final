const express = require("express");
const router = express.Router();
const KanbanController = require("../controller/kanbanController");

router.post("/add/kanban/task/api/", KanbanController.addTaskApi);
router.get("/get/kanban/:id", KanbanController.listKanbanId);
router.delete("/delete/kanban/:id", KanbanController.deleteKanbanTask);
router.put("/edit/kanban/:id", KanbanController.editKanbanTask);

module.exports = router;
