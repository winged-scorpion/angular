import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-timer',
  templateUrl: 'timer.component.html'
})
export class TimerComponent {

 private intervalObject: any;
 public currentValue: number = 0;

 @Input()
  interval: number = 1000;

 @Output()
  tick: EventEmitter<number> = new EventEmitter();

 start() {
   if (this.intervalObject) return;
   this.intervalObject = setInterval(() => { this.callback(); }, this.interval);
   console.log(this);
 }

 stop() {
   if (!this.intervalObject) return;
   clearInterval( this.intervalObject);
   this.intervalObject = false;
 }

 private callback() {
   this.currentValue++;
   this.tick.emit(this.currentValue);
 }
}
