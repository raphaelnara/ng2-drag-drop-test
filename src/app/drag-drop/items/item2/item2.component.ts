import { Component, OnInit} from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { ItemBaseComponent} from '../item-base.component';

@Component({
  selector: 'item2',
  templateUrl: './item2.component.html',
})
export class Item2Component extends ItemBaseComponent implements ItemBaseComponent, OnInit {
    ngOnInit(): void {
    }
    onDrag(e){
    }
    
    onDrop(e){
      this.drop.emit(this);
    }
}