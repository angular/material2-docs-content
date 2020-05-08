/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/select/select-overview/select-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/material/core";
function SelectOverviewExample_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const food_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r1.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r1.viewValue, " ");
} }
/**
 * @record
 */
function Food() { }
if (false) {
    /** @type {?} */
    Food.prototype.value;
    /** @type {?} */
    Food.prototype.viewValue;
}
/**
 * \@title Basic select
 */
export class SelectOverviewExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
}
SelectOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'select-overview-example',
                templateUrl: 'select-overview-example.html',
                styleUrls: ['select-overview-example.css'],
            },] },
];
/** @nocollapse */ SelectOverviewExample.ɵfac = function SelectOverviewExample_Factory(t) { return new (t || SelectOverviewExample)(); };
/** @nocollapse */ SelectOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectOverviewExample, selectors: [["select-overview-example"]], decls: 21, vars: 1, consts: [[3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "required", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "Basic mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field");
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Favorite food");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select");
        i0.ɵɵtemplate(6, SelectOverviewExample_mat_option_6_Template, 2, 2, "mat-option", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "h4");
        i0.ɵɵtext(8, "Basic native select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-form-field");
        i0.ɵɵelementStart(10, "mat-label");
        i0.ɵɵtext(11, "Cars");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "select", 1);
        i0.ɵɵelementStart(13, "option", 2);
        i0.ɵɵtext(14, "Volvo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "option", 3);
        i0.ɵɵtext(16, "Saab");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "option", 4);
        i0.ɵɵtext(18, "Mercedes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "option", 5);
        i0.ɵɵtext(20, "Audi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.foods);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgForOf, i4.MatInput, i5.NgSelectOption, i5.ɵangular_packages_forms_forms_x, i6.MatOption], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectOverviewExample, [{
        type: Component,
        args: [{
                selector: 'select-overview-example',
                templateUrl: 'select-overview-example.html',
                styleUrls: ['select-overview-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectOverviewExample.prototype.foods;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW92ZXJ2aWV3L3NlbGVjdC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vdmVydmlldy9zZWxlY3Qtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lDSXBDLHFDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFhOzs7SUFGMEIscUNBQW9CO0lBQ3pELGVBQ0Y7SUFERSxrREFDRjs7Ozs7QURKSixtQkFHQzs7O0lBRkMscUJBQWM7O0lBQ2QseUJBQWtCOzs7OztBQVdwQixNQUFNLE9BQU8scUJBQXFCO0lBTGxDO1FBTUUsVUFBSyxHQUFXO1lBQ2QsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7U0FDdkMsQ0FBQztLQUNIOzs7WUFYQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7OzZHQUNZLHFCQUFxQjs2RUFBckIscUJBQXFCO1FDZmxDLDBCQUFJO1FBQUEsZ0NBQWdCO1FBQUEsaUJBQUs7UUFDekIsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLDZCQUFhO1FBQUEsaUJBQVk7UUFDcEMsa0NBQ0U7UUFBQSxvRkFDRTtRQUVKLGlCQUFhO1FBQ2YsaUJBQWlCO1FBRWpCLDBCQUFJO1FBQUEsbUNBQW1CO1FBQUEsaUJBQUs7UUFDNUIsc0NBQ0U7UUFBQSxrQ0FBVztRQUFBLHFCQUFJO1FBQUEsaUJBQVk7UUFDM0Isa0NBQ0U7UUFBQSxrQ0FBc0I7UUFBQSxzQkFBSztRQUFBLGlCQUFTO1FBQ3BDLGtDQUFxQjtRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDbEMsa0NBQXlCO1FBQUEseUJBQVE7UUFBQSxpQkFBUztRQUMxQyxrQ0FBcUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ3BDLGlCQUFTO1FBQ1gsaUJBQWlCOztRQWZELGVBQTBCO1FBQTFCLG1DQUEwQjs7a0REVzdCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7Ozs7SUFFQyxzQ0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW50ZXJmYWNlIEZvb2Qge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgc2VsZWN0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3Qtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RPdmVydmlld0V4YW1wbGUge1xuICBmb29kczogRm9vZFtdID0gW1xuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxuICAgIHt2YWx1ZTogJ3BpenphLTEnLCB2aWV3VmFsdWU6ICdQaXp6YSd9LFxuICAgIHt2YWx1ZTogJ3RhY29zLTInLCB2aWV3VmFsdWU6ICdUYWNvcyd9XG4gIF07XG59XG4iLCI8aDQ+QmFzaWMgbWF0LXNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgZm9vZDwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdD5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZm9vZCBvZiBmb29kc1wiIFt2YWx1ZV09XCJmb29kLnZhbHVlXCI+XG4gICAgICB7e2Zvb2Qudmlld1ZhbHVlfX1cbiAgICA8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxoND5CYXNpYyBuYXRpdmUgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5DYXJzPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCByZXF1aXJlZD5cbiAgICA8b3B0aW9uIHZhbHVlPVwidm9sdm9cIj5Wb2x2bzwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+U2FhYjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==