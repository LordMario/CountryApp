import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

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

  @Output()
  onDebounce :EventEmitter<string>= new EventEmitter();

  private debouncer : Subject<string>= new Subject<string>();

  ngOnInit(): void {
    if(!this.placeholder){
      throw new Error('Property is required');
    }
    this.debouncer
    .pipe(
      debounceTime(500),
    )
    .subscribe(resp=>{
      this.onDebounce.emit(resp);
    })
  }
 

  searchTerm(term : string): void{
    this.termino.emit(term);
  }
  onKeyPress(searcTerm: string){
    this.debouncer.next(searcTerm);
  }
}
