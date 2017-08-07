import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

export abstract class ItemBaseComponent {
    @Input() position: number;
    @Input() message: string;
    @Output() drag = new EventEmitter<ItemBaseComponent>();
    @Output() drop = new EventEmitter<ItemBaseComponent>();
}