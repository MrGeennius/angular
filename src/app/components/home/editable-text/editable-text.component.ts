import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.scss']
})
export class EditableTextComponent implements OnInit {
  @Input() text: string;
  @Output() textChanged = new EventEmitter<string>();
  editing = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSave(newText: string): void {
    this.text = newText;
    this.textChanged.emit(this.text);
    this.editing = false;
  }
}