/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/autocomplete/autocomplete-simple/autocomplete-simple-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    const option_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r22, " ");
} }
/**
 * \@title Simple autocomplete
 */
export class AutocompleteSimpleExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
}
AutocompleteSimpleExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-simple-example',
                templateUrl: 'autocomplete-simple-example.html',
                styleUrls: ['autocomplete-simple-example.css'],
            },] },
];
/** @nocollapse */ AutocompleteSimpleExample.ɵfac = function AutocompleteSimpleExample_Factory(t) { return new (t || AutocompleteSimpleExample)(); };
/** @nocollapse */ AutocompleteSimpleExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompleteSimpleExample, selectors: [["autocomplete-simple-example"]], decls: 6, vars: 3, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteSimpleExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelement(2, "input", 2);
        i0.ɵɵelementStart(3, "mat-autocomplete", null, 3);
        i0.ɵɵtemplate(5, AutocompleteSimpleExample_mat_option_5_Template, 2, 2, "mat-option", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r20 = i0.ɵɵreference(4);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r20);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i4.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlDirective, i4.MatAutocomplete, i5.NgForOf, i6.MatOption], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutocompleteSimpleExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-simple-example',
                templateUrl: 'autocomplete-simple-example.html',
                styleUrls: ['autocomplete-simple-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    AutocompleteSimpleExample.prototype.myControl;
    /** @type {?} */
    AutocompleteSimpleExample.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1zaW1wbGUvYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1zaW1wbGUvYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDR3JDLHFDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFhOzs7SUFGOEIsa0NBQWdCO0lBQ3pELGVBQ0Y7SUFERSwyQ0FDRjs7Ozs7QURLTixNQUFNLE9BQU8seUJBQXlCO0lBTHRDO1FBTUUsY0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztLQUM3Qzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DOztrR0FDWSx5QkFBeUI7OERBQXpCLHlCQUF5QjtRQ1h0QywrQkFDRTtRQUFBLHlDQUNFO1FBQUEsMkJBQ0E7UUFBQSxpREFDRTtRQUFBLHdGQUNFO1FBRUosaUJBQW1CO1FBQ3JCLGlCQUFpQjtRQUNuQixpQkFBTzs7O1FBUG9FLGVBQXlCO1FBQXpCLDJDQUF5Qix5QkFBQTtRQUVsRixlQUE4QjtRQUE5QixxQ0FBOEI7O2tERE9uQyx5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DOzs7O0lBRUMsOENBQThCOztJQUM5Qiw0Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFNpbXBsZSBhdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUtc2ltcGxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhdXRvY29tcGxldGUtc2ltcGxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZVNpbXBsZUV4YW1wbGUge1xuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgb3B0aW9uczogc3RyaW5nW10gPSBbJ09uZScsICdUd28nLCAnVGhyZWUnXTtcbn1cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUGljayBvbmVcIiBhcmlhLWxhYmVsPVwiTnVtYmVyXCIgbWF0SW5wdXQgW2Zvcm1Db250cm9sXT1cIm15Q29udHJvbFwiIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiPlxuICAgIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCI+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIiBbdmFsdWVdPVwib3B0aW9uXCI+XG4gICAgICAgIHt7b3B0aW9ufX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1hdXRvY29tcGxldGU+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=