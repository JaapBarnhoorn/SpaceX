import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-rocket',
  templateUrl: './search-rocket.component.html',
  styleUrls: ['./search-rocket.component.css']
})
export class SearchRocketComponent implements OnInit {
  filteredStatus = ''
 @Output() emitFilteredStatus: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitStatus() {
    this.emitFilteredStatus.emit(this.filteredStatus);
  }

}
