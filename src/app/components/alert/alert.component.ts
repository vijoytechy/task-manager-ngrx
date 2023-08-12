import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div [ngClass]="['alert', 'alert-' + type]" role="alert" [hidden]="!visible">
      {{ message }}
    </div>
  `,
})
export class AlertComponent implements OnInit {
  @Input() type: string = 'success'; // Alert type (e.g., 'success', 'danger', etc.)
  @Input() message: string = ''; // Alert message
  visible: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.visible = false;
    }, 3000); // Hide the alert after 3 seconds
  }
}
