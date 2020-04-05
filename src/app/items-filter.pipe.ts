import {Pipe, PipeTransform} from "@angular/core";
import {Item} from "./task.service";

@Pipe({
    name: 'ItemsFilter'
})
export class ItemsFilterPipe implements PipeTransform{
    transform(items: Item[], serch:string = ''): Item[] {
        if(!serch.trim()){
            return items
        }
        return items.filter(item =>{
            return item.task.toLowerCase().indexOf(serch.toLowerCase()) !==-1
        })
    }

}
