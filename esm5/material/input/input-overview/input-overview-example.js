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
    InputOverviewExample.ɵfac = function InputOverviewExample_Factory(t) { return new (t || InputOverviewExample)(); };
    InputOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputOverviewExample, selectors: [["input-overview-example"]], decls: 9, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ex. Pizza", "value", "Sushi"], ["matInput", "", "placeholder", "Ex. It makes me feel..."]], template: function InputOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "Favorite food");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field", 1);
            i0.ɵɵelementStart(6, "mat-label");
            i0.ɵɵtext(7, "Leave a comment");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "textarea", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2lucHV0L2lucHV0LW92ZXJ2aWV3L2lucHV0LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1vdmVydmlldy9pbnB1dC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBS29DOzRGQUF2QixvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQ1ZqQywrQkFDRTtZQUFBLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSw2QkFBYTtZQUFBLGlCQUFZO1lBQ3BDLDJCQUNGO1lBQUEsaUJBQWlCO1lBRWpCLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSwrQkFBZTtZQUFBLGlCQUFZO1lBQ3RDLDhCQUFvRTtZQUN0RSxpQkFBaUI7WUFDbkIsaUJBQU87OytCRFZQO0NBVW9DLEFBTHBDLElBS29DO1NBQXZCLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsV0FBVyxFQUFFLDZCQUE2QjthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgSW5wdXRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdpbnB1dC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dE92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgPG1hdC1sYWJlbD5GYXZvcml0ZSBmb29kPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRXguIFBpenphXCIgdmFsdWU9XCJTdXNoaVwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgIDxtYXQtbGFiZWw+TGVhdmUgYSBjb21tZW50PC9tYXQtbGFiZWw+XG4gICAgPHRleHRhcmVhIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRXguIEl0IG1ha2VzIG1lIGZlZWwuLi5cIj48L3RleHRhcmVhPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9mb3JtPlxuIl19