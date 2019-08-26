import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/** @title Datepicker input and change events */
var DatepickerEventsExample = /** @class */ (function () {
    function DatepickerEventsExample() {
        this.events = [];
    }
    DatepickerEventsExample.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    DatepickerEventsExample = tslib_1.__decorate([
        Component({
            selector: 'datepicker-events-example',
            template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Input & change events\"\n         (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n\n<div class=\"example-events\">\n  <div *ngFor=\"let e of events\">{{e}}</div>\n</div>\n",
            styles: [".example-events {\n  width: 400px;\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}\n"]
        })
    ], DatepickerEventsExample);
    return DatepickerEventsExample;
}());
export { DatepickerEventsExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItZXZlbnRzL2RhdGVwaWNrZXItZXZlbnRzLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHeEMsZ0RBQWdEO0FBTWhEO0lBTEE7UUFNRSxXQUFNLEdBQWEsRUFBRSxDQUFDO0lBS3hCLENBQUM7SUFIQywwQ0FBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLEtBQW9DO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFJLElBQUksVUFBSyxLQUFLLENBQUMsS0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUxVLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLDBiQUE2Qzs7U0FFOUMsQ0FBQztPQUNXLHVCQUF1QixDQU1uQztJQUFELDhCQUFDO0NBQUEsQUFORCxJQU1DO1NBTlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREYXRlcGlja2VySW5wdXRFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBpbnB1dCBhbmQgY2hhbmdlIGV2ZW50cyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItZXZlbnRzLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJFdmVudHNFeGFtcGxlIHtcbiAgZXZlbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGFkZEV2ZW50KHR5cGU6IHN0cmluZywgZXZlbnQ6IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50PERhdGU+KSB7XG4gICAgdGhpcy5ldmVudHMucHVzaChgJHt0eXBlfTogJHtldmVudC52YWx1ZX1gKTtcbiAgfVxufVxuIl19