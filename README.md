# Intuitive Surgical Calendar

## Demo
[`Demo link here`]

## Table of contents

- [About](#about)
- [Getting started](#getting-started)
- [Documentation](#documentation)
- [Development](#development) 
- [License](#licence)

## About

A calendar component for Intuitive Surgical that can display events on a month, week or day view. In this component, user can add, delete and segregate events by showing different color.

## Getting started

First install through npm:
```
npm install --save https://github.com/ISI-DigitalEngagement/IntuSurg-Calendar
```

Next include the CSS file somewhere into your app:
```
node_modules/angular-calendar/dist/css/angular-calendar.css
```

Finally import the calendar module into your apps module:
```
import { NgModule } from '@angular/core';
import { CalendarModule } from 'angular-calendar';

@NgModule({
  imports: [
    CalendarModule.forRoot()
  ]
})
export class MyModule {}
```

Then you can use the [`mwl-calendar-month-view`](https://mattlewis92.github.io/angular-calendar/docs/components/CalendarMonthViewComponent.html), [`mwl-calendar-week-view`](https://mattlewis92.github.io/angular-calendar/docs/components/CalendarWeekViewComponent.html) and [`mwl-calendar-day-view`](https://mattlewis92.github.io/angular-calendar/docs/components/CalendarDayViewComponent.html) components in your app. For a full e2e example see the [demo](https://mattlewis92.github.io/angular-calendar/demos/#/kitchen-sink). 


## Documentation
To see all available API options see the auto generated [documentation](https://pratiknahate.github.io/IntuSurg-Calendar/) or you may find it helpful to view the examples on the demo page.

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

Intuitive Surgical
