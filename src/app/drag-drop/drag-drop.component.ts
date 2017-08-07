
import { Component, OnInit, AfterViewInit, ViewChild, EventEmitter, ViewContainerRef, ComponentFactoryResolver, Type} from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { Item1Component } from './items/item1/item1.component';
import { Item2Component } from './items/item2/item2.component';
import { Item3Component } from './items/item3/item3.component';
import { ItemBaseComponent} from './items/item-base.component';

@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
  entryComponents: [
    Item1Component,
    Item2Component,
    Item3Component
  ]
})
export class DragDropComponent implements OnInit, AfterViewInit {
  public draggedItemIndex: number;
  public itemsToDrop: Array<any>;
  
  @ViewChild('container', { read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, public container: ViewContainerRef) { 
    this.viewContainerRef = container;
  }

  ngOnInit(): void {
    this.draggedItemIndex = -1;
    this.itemsToDrop = [
      {name: "Item1Component", label: "teste1"},
      {name: "Item2Component", label: "teste2"},
      {name: "Item3Component", label: "teste3"},
      {name: "Item1Component", label: "teste4"}
    ];
  }

  ngAfterViewInit(): void {
    this.renderComponents();
  }

  onItemDrag(e, i){
    console.log("drag");
    this.draggedItemIndex = i;
  }

  onItemDrop(e, i){
    console.log("drop");
    let tempArray = new Array<any>();
    let index = 0;
    while(index < this.itemsToDrop.length){
      if (index != this.draggedItemIndex){
        if (index == i){
          tempArray.push(e.dragData);
        }
        tempArray.push(this.itemsToDrop[index]);
      }
      index++;
    }
    this.itemsToDrop = tempArray;
    this.renderComponents();
  }

  onItemDrag2(e){
    this.draggedItemIndex = e.position;
  }

  onItemDrop2(e){
    let i = e.position;
    let tempArray = new Array<any>();
    let index = 0;
    while(index < this.itemsToDrop.length){
      if (index != this.draggedItemIndex){
        if (index == i){
          tempArray.push(e);
        }
        tempArray.push(this.itemsToDrop[index]);
      }
      index++;
    }
    this.itemsToDrop = tempArray;
    this.renderComponents();
  }

  renderComponents(){    
    this.viewContainerRef.clear();

    for (let index = 0; index < this.itemsToDrop.length; index++){
      let item = this.itemsToDrop[index];

      let factories = Array.from(this.componentFactoryResolver['_factories'].keys());
      let factoryClass = <Type<any>>factories.find((x: any) => x.name == item.name);
      
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(factoryClass);
      let componentRef = this.viewContainerRef.createComponent(componentFactory);
      
      let self = this;

      let component = <ItemBaseComponent>componentRef.instance;
      component.message = item.label;
      component.position = index;
      component.drag.subscribe(e => {
        self.draggedItemIndex = e.position;
      });
      component.drop.subscribe(e =>{
        let i = e.position;
        let tempArray = new Array<any>();
        let index = 0;
        while(index < self.itemsToDrop.length){
          if (index != self.draggedItemIndex){
            if (index == i){
              tempArray.push(self.itemsToDrop[self.draggedItemIndex]);
            }
            tempArray.push(self.itemsToDrop[index]);
          }
          index++;
        }
        self.itemsToDrop = tempArray;
        self.renderComponents();
      });
    }
  }
}
