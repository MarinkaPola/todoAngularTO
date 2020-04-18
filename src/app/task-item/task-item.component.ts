import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {ModelService} from "../model.service";

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{

    private load: boolean = true;
    private serchString: string ='';
    private items: [];

    constructor(private taskService: TaskService, private model:ModelService){}
    ngOnInit(){
        this.model.saveOnServer(this.items);
        this.model.loadFromServer().subscribe(()=>{
            this.load = false;
        })
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
