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
    public subjo = new Subject<any>();




    constructor(
        private model: ModelService
    ) {
        this.load();
        this.save();
    }

    // поток
    //  get todos() {
    //     return this.subj.asObservable();}


    AddItem(item: Item) {
        this.items.push(item);
        // this.subj.next(this.items);
        this.save();
    }

    onChange(id: number) {
        const itemindex = this.items.findIndex(t => t.id === id);
        this.items[itemindex].completed = !this.items[itemindex].completed;
        this.save();
    }

    EditItem(id: number, task: string ) {
        this.subjm.next({event: 'EditItem', id:id, task:task }); console.log(task);
    }
    saveNametext(id: number, name: string) {
        const itemindex1 = this.items.findIndex(z => z.id === id);
        this.items[itemindex1].task = name;
        this.save();
    }

    getMessageEdit(): Observable<any> {
        return this.subjm.asObservable();}

    remove(id: number) {
        this.subjo.next({event: 'remove', id:id });
    }
    rem(id: number){ this.items = this.items.filter(t => t.id !== id);
        this.save();

    }
    getMessageremove(): Observable<any> {
        return this.subjo.asObservable();}

    Sort(date: any) {
        this.items = this.items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        this.save();
    }

    load() {
        this.model.loadFromServer().subscribe(
            (data: any) => {
                console.log(data);
                this.items = data;
            }
        );
        this.subj.next(this.items);
    }

  save() {
      this.model.saveOnServer(this.items) ;
   // this.subj.next(this.items);
}


}

