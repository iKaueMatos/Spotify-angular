import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrl: './button-panel.component.scss'
})
export class ButtonPanelComponent {

  @Input()
  description: string = '';

  @Input()
  selectButton: string | Boolean = '';

  @Output()
  click = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.click.emit();
  }
}
