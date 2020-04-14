import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{

    private load: boolean = true
    private serchString: string =''

    constructor(private taskService: TaskService){}
    ngOnInit(){
        this.taskService.load()
       this.load = false
    }

    onChange(id: number){
        this.taskService.onChange(id)
    }
    EditItem(id: number, task: string){
        this.taskService.EditItem(id, task)
    }
    remove(id:number){
        this.taskService.remove(id)
    }

}
