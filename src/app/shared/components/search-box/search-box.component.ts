import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit{

  @Input()
  placeholder! : string ;

  @Output()
  termino : EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    if(!this.placeholder){
      throw new Error('Property is required');
    }
  }


  searchTerm(term : string): void{
    this.termino.emit(term);
  }
}
