import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Item} from "./task.service";
import {consoleTestResultHandler, consoleTestResultsHandler} from "tslint/lib/test";


@Injectable()
export class ModelService {

    public items: Item[] =[];
    private task: string;
    constructor(private http: HttpClient) {}

    loadFromServer(){
        return this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=7').pipe(
            map((items: any) => {
                return items.map( Item => {
                    return {
                        ...Item,
                        id: Date.now(),
                        date: new Date(),
                        rang: 1,
                        task: this.task,
                        completed: false
                    }
                });
}
))}
saveOnServer(items){

       this.http.post('https://jsonplaceholder.typicode.com/todos?_limit=7', items); console.log(items);

    }
}

