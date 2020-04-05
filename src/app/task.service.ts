import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {ModelService} from './model.service';
import {BehaviorSubject} from "rxjs";
import {Observable} from "rxjs";

export interface Item {
    id: number;
    date: any;
    rang: number;
    task: string;
    completed: boolean;

}

@Injectable({providedIn: "root"})
export class TaskService {
    public items: Item[] = [];
    private subj: BehaviorSubject<any> = new BehaviorSubject([]);
    public subjm = new Subject<any>();




    constructor(
        private model: ModelService
    ) {
        this.load();
    }

    // поток
    //  get todos() {
    //     return this.subj.asObservable();}


    AddItem(item: Item) {
        this.items.push(item);
        this.subj.next(this.items);
        this.save();
    }

    onChange(id: number) {
        const itemindex = this.items.findIndex(t => t.id === id);
        this.items[itemindex].completed = !this.items[itemindex].completed;
        this.save();
    }

    EditItem(id: number) {

        this.subjm.next({event: 'EditItem'});
        this.saveNametext(id, name);
        this.subj.next(this.items);
        this.save();
    }

    saveNametext(id: number, name: string) {
        const itemindex1 = this.items.findIndex(z => z.id === id);
        this.items[itemindex1].task = name;
    }


    getMessageEdit(): Observable<any> {
        return this.subjm.asObservable();
    }


    remove(id: number) {
        this.items = this.items.filter(t => t.id !== id);
        this.subj.next(this.items);
        this.save();
    }

    Sort(date: any) {
        this.items = this.items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        this.save();
    }

    load() {
        this.items = this.model.load();
        this.subj.next(this.items);
    }

    save() {
        this.model.save(this.items);
    }


}
