import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

/**
 * Shows header with buttons Previous, Today, Next, Month, Week and Day. This will also include inbult filter which will show particular events based on the selection. Filter will pick all the event categories with color. Which will help user to filter the events. Example usage:
 *
 * ```
 * &lt;mwl-calendar-header
 *  [view]="view"
 *  [(viewDate)]="viewDate"
 *  [events]="events"&gt;
 * &lt;/mwl-calendar-header&gt;
 * ```
 */
 
@Component({
  selector: 'mwl-calendar-header',
  template: `
    <div class="row text-center">
      <div class="col-md-3">
        <div class="btn-group">
          <div
            class="btn btn-primary"
            mwlCalendarPreviousView
            [view]="view"
            [(viewDate)]="viewDate">
            Previous
          </div>
          <div
            class="btn btn-secondary"
            mwlCalendarToday
            [(viewDate)]="viewDate">
            Today
          </div>
          <div
            class="btn btn-primary"
            mwlCalendarNextView
            [view]="view"
            [(viewDate)]="viewDate">
            Next
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}</h3>
      </div>
      <div class="col-md-3">
        <div class="btn-group">
          <div
            class="btn btn-primary"
            (click)="viewChange.emit('month')"
            [class.active]="view === 'month'">
            Month
          </div>
          <div
            class="btn btn-primary"
            (click)="viewChange.emit('week')"
            [class.active]="view === 'week'">
            Week
          </div>
          <div
            class="btn btn-primary"
            (click)="viewChange.emit('day')"
            [class.active]="view === 'day'">
            Day
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <select class="col-md-3">
          <option value="red" *ngFor="let event of events" [ngStyle]="{'color': event.color.primary}">{{event.color.primary}}}</option>
        </select>
      </div>
    </div>
    <br>
  `
})
export class CalendarHeaderComponent {

  @Input() view: string;

  @Input() viewDate: Date;
  
  /**
   * An array of events to display on view. Events will be the JSON array which consists of start date, end date, title, color (primary and secondary) and actions.
   * 
   */
  @Input() events: CalendarEvent[] = [];

  @Input() locale: string = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  constructor() {
  }
  
  ngOnInit(): void {
    
  }
}