import { Component } from '@angular/core';
/** @title Datepicker start date */
var DatepickerStartViewExample = /** @class */ (function () {
    function DatepickerStartViewExample() {
        this.startDate = new Date(1990, 0, 1);
    }
    DatepickerStartViewExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-start-view-example',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return DatepickerStartViewExample;
}());
export { DatepickerStartViewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1zdGFydC12aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLXN0YXJ0LXZpZXcvZGF0ZXBpY2tlci1zdGFydC12aWV3LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4QyxtQ0FBbUM7QUFDbkM7SUFBQTtRQU1FLGNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxvU0FBaUQ7O2lCQUVsRDs7SUFHRCxpQ0FBQztDQUFBLEFBUEQsSUFPQztTQUZZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHN0YXJ0IGRhdGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItc3RhcnQtdmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLXN0YXJ0LXZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItc3RhcnQtdmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyU3RhcnRWaWV3RXhhbXBsZSB7XG4gIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKDE5OTAsIDAsIDEpO1xufVxuIl19