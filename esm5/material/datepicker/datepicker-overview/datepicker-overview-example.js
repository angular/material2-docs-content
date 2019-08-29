import { Component } from '@angular/core';
/** @title Basic datepicker */
var DatepickerOverviewExample = /** @class */ (function () {
    function DatepickerOverviewExample() {
    }
    DatepickerOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-overview-example',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return DatepickerOverviewExample;
}());
export { DatepickerOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1vdmVydmlldy9kYXRlcGlja2VyLW92ZXJ2aWV3LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qyw4QkFBOEI7QUFDOUI7SUFBQTtJQUt3QyxDQUFDOztnQkFMeEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLHlQQUErQzs7aUJBRWhEOztJQUN1QyxnQ0FBQztDQUFBLEFBTHpDLElBS3lDO1NBQTVCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBCYXNpYyBkYXRlcGlja2VyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlck92ZXJ2aWV3RXhhbXBsZSB7fVxuIl19