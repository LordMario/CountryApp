import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent{

  @Input()
  placeholder! : string ;

  @Input()
  terminoServicio : string ='';

  @Output()
  termino : EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce :EventEmitter<string>= new EventEmitter();

  private debouncer : Subject<string>= new Subject<string>();
  private debouncerSuscribe? : Subscription;

  ngOnInit(): void {
    if(!this.placeholder){
      throw new Error('Property is required');
    }
    this. debouncerSuscribe=this.debouncer
    .pipe(
      debounceTime(500),
    )
    .subscribe(resp=>{
      this.onDebounce.emit(resp);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscribe?.unsubscribe();
  }
 

  searchTerm(term : string): void{
    this.termino.emit(term);
  }
  onKeyPress(searcTerm: string){
    this.debouncer.next(searcTerm);
  }
}
