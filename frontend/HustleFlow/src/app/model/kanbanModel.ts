export class Kanban {
  _id?: String;
  kanbanTitle: String;
  kanbanDescription: String;
  kanbanCreatedAt: Date;
  kanbanEnum: string;

  constructor(){
    this.kanbanTitle = "";
    this.kanbanDescription = "";
    this.kanbanEnum = "TO_DO";
    this.kanbanCreatedAt = new Date()
  }

}
