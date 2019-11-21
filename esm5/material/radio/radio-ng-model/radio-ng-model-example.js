import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/radio";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
function RadioNgModelExample_mat_radio_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var season_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", season_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", season_r1, " ");
} }
/**
 * @title Radios with ngModel
 */
var RadioNgModelExample = /** @class */ (function () {
    function RadioNgModelExample() {
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
    RadioNgModelExample.decorators = [
        { type: Component, args: [{
                    selector: 'radio-ng-model-example',
                    templateUrl: 'radio-ng-model-example.html',
                    styleUrls: ['radio-ng-model-example.css'],
                },] },
    ];
    RadioNgModelExample.ɵfac = function RadioNgModelExample_Factory(t) { return new (t || RadioNgModelExample)(); };
    RadioNgModelExample.ɵcmp = i0.ɵɵdefineComponent({ type: RadioNgModelExample, selectors: [["radio-ng-model-example"]], decls: 6, vars: 3, consts: [["id", "example-radio-group-label"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 3, "value"]], template: function RadioNgModelExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "label", 0);
            i0.ɵɵtext(1, "Pick your favorite season");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-radio-group", 1);
            i0.ɵɵlistener("ngModelChange", function RadioNgModelExample_Template_mat_radio_group_ngModelChange_2_listener($event) { return ctx.favoriteSeason = $event; });
            i0.ɵɵtemplate(3, RadioNgModelExample_mat_radio_button_3_Template, 2, 2, "mat-radio-button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.favoriteSeason);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.seasons);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Your favorite season is: ", ctx.favoriteSeason, "");
        } }, directives: [i1.MatRadioGroup, i2.NgControlStatus, i2.NgModel, i3.NgForOf, i1.MatRadioButton], styles: [".example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}"] });
    return RadioNgModelExample;
}());
export { RadioNgModelExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RadioNgModelExample, [{
        type: Component,
        args: [{
                selector: 'radio-ng-model-example',
                templateUrl: 'radio-ng-model-example.html',
                styleUrls: ['radio-ng-model-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbmctbW9kZWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3JhZGlvL3JhZGlvLW5nLW1vZGVsL3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9yYWRpby1uZy1tb2RlbC9yYWRpby1uZy1tb2RlbC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDS3RDLDJDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFtQjs7O0lBRjJELGlDQUFnQjtJQUM1RixlQUNGO0lBREUsMENBQ0Y7O0FETEY7O0dBRUc7QUFDSDtJQUFBO1FBT0UsWUFBTyxHQUFhLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDOUQ7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztpQkFDMUM7OzBGQUNZLG1CQUFtQjs0REFBbkIsbUJBQW1CO1lDVmhDLGdDQUFzQztZQUFBLHlDQUF5QjtZQUFBLGlCQUFRO1lBQ3ZFLDBDQUlFO1lBREEsOEpBQTRCO1lBQzVCLDhGQUNFO1lBRUosaUJBQWtCO1lBQ2xCLDJCQUFLO1lBQUEsWUFBMkM7WUFBQSxpQkFBTTs7WUFMcEQsZUFBNEI7WUFBNUIsNENBQTRCO1lBQ21CLGVBQThCO1lBQTlCLHFDQUE4QjtZQUkxRSxlQUEyQztZQUEzQywwRUFBMkM7OzhCRFRoRDtDQWFDLEFBUkQsSUFRQztTQUhZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgUmFkaW9zIHdpdGggbmdNb2RlbFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYWRpby1uZy1tb2RlbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdyYWRpby1uZy1tb2RlbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmFkaW8tbmctbW9kZWwtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9OZ01vZGVsRXhhbXBsZSB7XG4gIGZhdm9yaXRlU2Vhc29uOiBzdHJpbmc7XG4gIHNlYXNvbnM6IHN0cmluZ1tdID0gWydXaW50ZXInLCAnU3ByaW5nJywgJ1N1bW1lcicsICdBdXR1bW4nXTtcbn1cbiIsIjxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5QaWNrIHlvdXIgZmF2b3JpdGUgc2Vhc29uPC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbiAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG4gIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwiZmF2b3JpdGVTZWFzb25cIj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiICpuZ0Zvcj1cImxldCBzZWFzb24gb2Ygc2Vhc29uc1wiIFt2YWx1ZV09XCJzZWFzb25cIj5cbiAgICB7e3NlYXNvbn19XG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPGRpdj5Zb3VyIGZhdm9yaXRlIHNlYXNvbiBpczoge3tmYXZvcml0ZVNlYXNvbn19PC9kaXY+XG4iXX0=