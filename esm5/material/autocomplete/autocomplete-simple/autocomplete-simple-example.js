import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/core";
function AutocompleteSimpleExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r22, " ");
} }
/**
 * @title Simple autocomplete
 */
var AutocompleteSimpleExample = /** @class */ (function () {
    function AutocompleteSimpleExample() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    AutocompleteSimpleExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-simple-example',
                    templateUrl: 'autocomplete-simple-example.html',
                    styleUrls: ['autocomplete-simple-example.css'],
                },] },
    ];
    AutocompleteSimpleExample.ɵfac = function AutocompleteSimpleExample_Factory(t) { return new (t || AutocompleteSimpleExample)(); };
    AutocompleteSimpleExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompleteSimpleExample, selectors: [["autocomplete-simple-example"]], decls: 6, vars: 3, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteSimpleExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelement(2, "input", 2);
            i0.ɵɵelementStart(3, "mat-autocomplete", null, 3);
            i0.ɵɵtemplate(5, AutocompleteSimpleExample_mat_option_5_Template, 2, 2, "mat-option", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r20 = i0.ɵɵreference(4);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r20);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.options);
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i4.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlDirective, i4.MatAutocomplete, i5.NgForOf, i6.MatOption], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompleteSimpleExample;
}());
export { AutocompleteSimpleExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutocompleteSimpleExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-simple-example',
                templateUrl: 'autocomplete-simple-example.html',
                styleUrls: ['autocomplete-simple-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1zaW1wbGUvYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1zaW1wbGUvYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ1FyQyxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjhCLGtDQUFnQjtJQUN6RCxlQUNGO0lBREUsMkNBQ0Y7O0FEUk47O0dBRUc7QUFDSDtJQUFBO1FBTUUsY0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztLQUM3Qzs7Z0JBUkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7b0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2lCQUMvQzs7c0dBQ1kseUJBQXlCO2tFQUF6Qix5QkFBeUI7WUNYdEMsK0JBQ0U7WUFBQSx5Q0FDRTtZQUFBLDJCQU1BO1lBQUEsaURBQ0U7WUFBQSx3RkFDRTtZQUVKLGlCQUFtQjtZQUNyQixpQkFBaUI7WUFDbkIsaUJBQU87OztZQVJJLGVBQXlCO1lBQXpCLDJDQUF5Qix5QkFBQTtZQUdsQixlQUE4QjtZQUE5QixxQ0FBOEI7O29DRFRoRDtDQWNDLEFBUkQsSUFRQztTQUhZLHlCQUF5QjtrREFBekIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgU2ltcGxlIGF1dG9jb21wbGV0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUtc2ltcGxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS1zaW1wbGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2F1dG9jb21wbGV0ZS1zaW1wbGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlU2ltcGxlRXhhbXBsZSB7XG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBvcHRpb25zOiBzdHJpbmdbXSA9IFsnT25lJywgJ1R3bycsICdUaHJlZSddO1xufVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWNrIG9uZVwiXG4gICAgICAgICAgIGFyaWEtbGFiZWw9XCJOdW1iZXJcIlxuICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwibXlDb250cm9sXCJcbiAgICAgICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCI+XG4gICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIj5cbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb25cIj5cbiAgICAgICAge3tvcHRpb259fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==