export class Kanban {
  _id?: string;
  kanbanTitle: string;
  kanbanDescription: string;
  kanbanCreatedAt: Date;
  kanbanEnum: string;


  constructor(){
    this.kanbanTitle = "";
    this.kanbanDescription = "";
    this.kanbanEnum = "TO_DO";
    this.kanbanCreatedAt = new Date()
  }

}
