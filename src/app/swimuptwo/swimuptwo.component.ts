import {Component, OnInit} from "@angular/core";
import {TaskService} from "../task.service";
import {Subscription} from "rxjs";



@Component({
    selector: 'app-swimuptwo',
    templateUrl: './swimuptwo.component.html',
    styleUrls: ['./swimuptwo.component.css'],

})
export class SwimuptwoComponent implements OnInit {


    shoublock: boolean = true;
    subscription: Subscription;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.subscription = this.taskService.getMessageremove().subscribe(data => {
            if (data.event === 'remove') this.showModal();
            this.id = data.id;
        });
    }

    showModal() {
        this.shoublock= !this.shoublock
    }
    id: number;

    rem( id: number) {
            this.taskService.rem(this.id); this.showModal();
        }

}
