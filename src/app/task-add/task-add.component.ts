import {Component} from "@angular/core";
import {Item, TaskService} from "../task.service";
@Component({
    selector: 'app-task-add',
    templateUrl: './task-add.component.html',
    styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
    task:string = ""


    constructor(private taskservice: TaskService) {}
    ngOnInit() {}
    AddItem(){
        const item: Item ={
            id: Date.now(),
            date: new Date(),
            rang: 1,
            task: this.task,
            completed: false,
        }
        this.taskservice.AddItem(item)
        this.task=""
    }

    Sort() {
        this.taskservice.Sort((date:any)=>date)
    }
}
