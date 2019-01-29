import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/** @title Datepicker start date */
var DatepickerStartViewExample = /** @class */ (function () {
    function DatepickerStartViewExample() {
        this.startDate = new Date(1990, 0, 1);
    }
    DatepickerStartViewExample = tslib_1.__decorate([
        Component({
            selector: 'datepicker-start-view-example',
            template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n",
            styles: ["/** No CSS for this example */\n"]
        })
    ], DatepickerStartViewExample);
    return DatepickerStartViewExample;
}());
export { DatepickerStartViewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1zdGFydC12aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvZGF0ZXBpY2tlci1zdGFydC12aWV3L2RhdGVwaWNrZXItc3RhcnQtdmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDLG1DQUFtQztBQU1uQztJQUxBO1FBTUUsY0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUZZLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLG9TQUFpRDs7U0FFbEQsQ0FBQztPQUNXLDBCQUEwQixDQUV0QztJQUFELGlDQUFDO0NBQUEsQUFGRCxJQUVDO1NBRlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgc3RhcnQgZGF0ZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1zdGFydC12aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItc3RhcnQtdmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1zdGFydC12aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJTdGFydFZpZXdFeGFtcGxlIHtcbiAgc3RhcnREYXRlID0gbmV3IERhdGUoMTk5MCwgMCwgMSk7XG59XG4iXX0=