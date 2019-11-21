import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
/**
 * @title Basic Inputs
 */
var InputOverviewExample = /** @class */ (function () {
    function InputOverviewExample() {
    }
    InputOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-overview-example',
                    styleUrls: ['input-overview-example.css'],
                    templateUrl: 'input-overview-example.html',
                },] },
    ];
    InputOverviewExample.ɵfac = function InputOverviewExample_Factory(t) { return new (t || InputOverviewExample)(); };
    InputOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputOverviewExample, selectors: [["input-overview-example"]], decls: 5, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Favorite food", "value", "Sushi"], ["matInput", "", "placeholder", "Leave a comment"]], template: function InputOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelement(2, "input", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field", 1);
            i0.ɵɵelement(4, "textarea", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputOverviewExample;
}());
export { InputOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputOverviewExample, [{
        type: Component,
        args: [{
                selector: 'input-overview-example',
                styleUrls: ['input-overview-example.css'],
                templateUrl: 'input-overview-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2lucHV0L2lucHV0LW92ZXJ2aWV3L2lucHV0LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1vdmVydmlldy9pbnB1dC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBS29DOztnQkFMbkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO29CQUN6QyxXQUFXLEVBQUUsNkJBQTZCO2lCQUMzQzs7NEZBQ1ksb0JBQW9COzZEQUFwQixvQkFBb0I7WUNWakMsK0JBQ0U7WUFBQSx5Q0FDRTtZQUFBLDJCQUNGO1lBQUEsaUJBQWlCO1lBRWpCLHlDQUNFO1lBQUEsOEJBQTREO1lBQzlELGlCQUFpQjtZQUNuQixpQkFBTzs7K0JEUlA7Q0FVb0MsQUFMcEMsSUFLb0M7U0FBdkIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUN6QyxXQUFXLEVBQUUsNkJBQTZCO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBJbnB1dHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydpbnB1dC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2lucHV0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIElucHV0T3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJGYXZvcml0ZSBmb29kXCIgdmFsdWU9XCJTdXNoaVwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgIDx0ZXh0YXJlYSBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxlYXZlIGEgY29tbWVudFwiPjwvdGV4dGFyZWE+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=