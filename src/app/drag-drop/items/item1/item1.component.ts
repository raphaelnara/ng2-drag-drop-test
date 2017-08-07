import { Component, OnInit, Input, ContentChild} from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { ItemBaseComponent} from '../item-base.component';

@Component({
  selector: 'item1',
  templateUrl: './item1.component.html'
})
export class Item1Component extends ItemBaseComponent implements OnInit {
    ngOnInit(): void {
    }

    onDrag(e){
      this.drag.emit(this);
    }
    
    onDrop(e){
      this.drop.emit(this);
    }
}
    