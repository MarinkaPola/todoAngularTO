import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {TaskItemComponent} from './task-item/task-item.component';
import {HttpClientModule} from "@angular/common/http";
import {TaskAddComponent} from './task-add/task-add.component';
import {FormsModule} from "@angular/forms";
import {ModelService} from "./model.service";
import {TaskService} from "./task.service";
import {ItemsFilterPipe} from "./items-filter.pipe";
import {SwimupComponent} from "./swimup/swimup.component";

@NgModule({
    declarations: [AppComponent, TaskItemComponent, TaskAddComponent, SwimupComponent, ItemsFilterPipe],
    imports:[BrowserModule, HttpClientModule, FormsModule],
    providers:[ModelService, TaskService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
