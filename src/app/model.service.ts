import { Injectable } from '@angular/core';

@Injectable()
export class ModelService {

    storage: any = window.localStorage;

    readonly KEY: string = "ITEMS";

    constructor() { }

    save(data: any){
        let dataStr = JSON.stringify(data);
        this.storage.setItem(this.KEY, dataStr);
    }

    load(){
        let dataStr = this.storage.getItem(this.KEY);
        return dataStr ? JSON.parse(dataStr) : [];
    }

}
