const express = require("express");
const router = express.Router();
const KanbanController = require("../controller/kanbanController");
const kanbanController = require("../controller/kanbanController");

router.post("/add/kanban/task/api/", KanbanController.addTaskApi);
router.get("/get/kanban/:id", KanbanController.listKanbanId);
router.get("/get/all/kanban/task/", kanbanController.listAllKanbanTask);
router.delete("/delete/kanban/:id", KanbanController.deleteKanbanTask);
router.put("/edit/kanban/:id", KanbanController.editKanbanTask);

module.exports = router;
