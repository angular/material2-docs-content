import { Component } from '@angular/core';
/** @title Datepicker touch UI */
var DatepickerTouchExample = /** @class */ (function () {
    function DatepickerTouchExample() {
    }
    DatepickerTouchExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-touch-example',
                    template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker touchUi #picker></mat-datepicker>\n</mat-form-field>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return DatepickerTouchExample;
}());
export { DatepickerTouchExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci10b3VjaC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci10b3VjaC9kYXRlcGlja2VyLXRvdWNoLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4QyxpQ0FBaUM7QUFDakM7SUFBQTtJQUtxQyxDQUFDOztnQkFMckMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLDhSQUE0Qzs7aUJBRTdDOztJQUNvQyw2QkFBQztDQUFBLEFBTHRDLElBS3NDO1NBQXpCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHRvdWNoIFVJICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLXRvdWNoLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItdG91Y2gtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItdG91Y2gtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlclRvdWNoRXhhbXBsZSB7fVxuIl19