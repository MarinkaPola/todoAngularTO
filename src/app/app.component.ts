import {Component} from '@angular/core';
import {TaskService} from "./task.service";

@Component({
    selector:'my-app',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css'],
    providers: [TaskService]
})
export class AppComponent {
    appTitle = 'TODO LIST'
    vartruefalse = true;
}


