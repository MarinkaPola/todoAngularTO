import {Component, OnInit} from "@angular/core";
import {TaskService} from "../task.service";
import {Subscription} from "rxjs";



@Component({
    selector: 'app-swimup',
    templateUrl: './swimup.component.html',
    styleUrls: ['./swimup.component.css'],

})
export class SwimupComponent implements OnInit {


    vartruefalse: boolean = true;
    subscription: Subscription;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.subscription = this.taskService.getMessageEdit().subscribe(data => {
            if (data.event === 'EditItem') this.showModal()
        });

    }

    showModal() {
        this.vartruefalse = !this.vartruefalse
    }

    id: number;
    name: string;

    saveNametext(id: number, name: string) {
        this.name = name;
        if (this.name != undefined) {
            this.taskService.saveNametext(id, name);
        }
    }
}
