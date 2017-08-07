import { Component, OnInit} from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { ItemBaseComponent} from '../item-base.component';

@Component({
  selector: 'item3',
  templateUrl: './item3.component.html',
})
export class Item3Component extends ItemBaseComponent implements OnInit {
    ngOnInit(): void {
    }
    
    onDrag(e){
    }
    
    onDrop(e){
      this.drop.emit(this);
    }
}