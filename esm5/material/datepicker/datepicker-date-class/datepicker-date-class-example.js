import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
/** @title Datepicker with custom date classes */
var DatepickerDateClassExample = /** @class */ (function () {
    function DatepickerDateClassExample() {
        this.dateClass = function (d) {
            var date = d.getDate();
            // Highlight the 1st and 20th day of each month.
            return (date === 1 || date === 20) ? 'example-custom-date-class' : undefined;
        };
    }
    DatepickerDateClassExample = tslib_1.__decorate([
        Component({
            selector: 'datepicker-date-class-example',
            template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\n</mat-form-field>\n",
            encapsulation: ViewEncapsulation.None,
            styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"]
        })
    ], DatepickerDateClassExample);
    return DatepickerDateClassExample;
}());
export { DatepickerDateClassExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWRhdGUtY2xhc3MvZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFM0QsaURBQWlEO0FBT2pEO0lBTkE7UUFPRSxjQUFTLEdBQUcsVUFBQyxDQUFPO1lBQ2xCLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV6QixnREFBZ0Q7WUFDaEQsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQy9FLENBQUMsQ0FBQTtJQUNILENBQUM7SUFQWSwwQkFBMEI7UUFOdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLCtCQUErQjtZQUN6QyxnVEFBaUQ7WUFFakQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7T0FDVywwQkFBMEIsQ0FPdEM7SUFBRCxpQ0FBQztDQUFBLEFBUEQsSUFPQztTQVBZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciB3aXRoIGN1c3RvbSBkYXRlIGNsYXNzZXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlLmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyRGF0ZUNsYXNzRXhhbXBsZSB7XG4gIGRhdGVDbGFzcyA9IChkOiBEYXRlKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IGQuZ2V0RGF0ZSgpO1xuXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSAxc3QgYW5kIDIwdGggZGF5IG9mIGVhY2ggbW9udGguXG4gICAgcmV0dXJuIChkYXRlID09PSAxIHx8IGRhdGUgPT09IDIwKSA/ICdleGFtcGxlLWN1c3RvbS1kYXRlLWNsYXNzJyA6IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19