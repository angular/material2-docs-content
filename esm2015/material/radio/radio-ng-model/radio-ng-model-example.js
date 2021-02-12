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
    const season_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", season_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", season_r1, " ");
} }
/**
 * @title Radios with ngModel
 */
export class RadioNgModelExample {
    constructor() {
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
}
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadioNgModelExample, [{
        type: Component,
        args: [{
                selector: 'radio-ng-model-example',
                templateUrl: 'radio-ng-model-example.html',
                styleUrls: ['radio-ng-model-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbmctbW9kZWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3JhZGlvL3JhZGlvLW5nLW1vZGVsL3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9yYWRpby1uZy1tb2RlbC9yYWRpby1uZy1tb2RlbC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDS3RDLDJDQUErRjtJQUM3RixZQUNGO0lBQUEsaUJBQW1COzs7SUFGMkQsaUNBQWdCO0lBQzVGLGVBQ0Y7SUFERSwwQ0FDRjs7QURMRjs7R0FFRztBQU1ILE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFPRSxZQUFPLEdBQWEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM5RDs7c0ZBSFksbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNWaEMsZ0NBQXNDO1FBQUEseUNBQXlCO1FBQUEsaUJBQVE7UUFDdkUsMENBRytCO1FBQTdCLDhKQUE0QjtRQUM1Qiw4RkFFbUI7UUFDckIsaUJBQWtCO1FBQ2xCLDJCQUFLO1FBQUEsWUFBMkM7UUFBQSxpQkFBTTs7UUFMcEQsZUFBNEI7UUFBNUIsNENBQTRCO1FBQ3NDLGVBQVU7UUFBVixxQ0FBVTtRQUl6RSxlQUEyQztRQUEzQywwRUFBMkM7O3VGRENuQyxtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBSYWRpb3Mgd2l0aCBuZ01vZGVsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyYWRpby1uZy1tb2RlbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb05nTW9kZWxFeGFtcGxlIHtcbiAgZmF2b3JpdGVTZWFzb246IHN0cmluZztcbiAgc2Vhc29uczogc3RyaW5nW10gPSBbJ1dpbnRlcicsICdTcHJpbmcnLCAnU3VtbWVyJywgJ0F1dHVtbiddO1xufVxuIiwiPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPlBpY2sgeW91ciBmYXZvcml0ZSBzZWFzb248L2xhYmVsPlxuPG1hdC1yYWRpby1ncm91cFxuICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCJcbiAgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCJcbiAgWyhuZ01vZGVsKV09XCJmYXZvcml0ZVNlYXNvblwiPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgKm5nRm9yPVwibGV0IHNlYXNvbiBvZiBzZWFzb25zXCIgW3ZhbHVlXT1cInNlYXNvblwiPlxuICAgIHt7c2Vhc29ufX1cbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG48ZGl2PllvdXIgZmF2b3JpdGUgc2Vhc29uIGlzOiB7e2Zhdm9yaXRlU2Vhc29ufX08L2Rpdj5cbiJdfQ==