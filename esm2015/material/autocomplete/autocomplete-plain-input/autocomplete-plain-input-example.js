/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/autocomplete";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/core";
const _c0 = ["auto", "matAutocomplete"];
function AutocompletePlainInputExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const street_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", street_r19);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", street_r19, " ");
} }
/**
 * \@title Plain input autocomplete
 */
export class AutocompletePlainInputExample {
    constructor() {
        this.control = new FormControl();
        this.streets = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredStreets = this.control.valueChanges.pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = this._normalizeValue(value);
        return this.streets.filter((/**
         * @param {?} street
         * @return {?}
         */
        street => this._normalizeValue(street).includes(filterValue)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _normalizeValue(value) {
        return value.toLowerCase().replace(/\s/g, '');
    }
}
AutocompletePlainInputExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-plain-input-example',
                templateUrl: 'autocomplete-plain-input-example.html',
                styleUrls: ['autocomplete-plain-input-example.css'],
            },] },
];
/** @nocollapse */ AutocompletePlainInputExample.ɵfac = function AutocompletePlainInputExample_Factory(t) { return new (t || AutocompletePlainInputExample)(); };
/** @nocollapse */ AutocompletePlainInputExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompletePlainInputExample, selectors: [["autocomplete-plain-input-example"]], decls: 6, vars: 5, consts: [[1, "example-form"], ["type", "text", "placeholder", "Search for a street", 3, "formControl", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompletePlainInputExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelement(1, "input", 1);
        i0.ɵɵelementStart(2, "mat-autocomplete", null, _c0);
        i0.ɵɵtemplate(4, AutocompletePlainInputExample_mat_option_4_Template, 2, 2, "mat-option", 2);
        i0.ɵɵpipe(5, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r17 = i0.ɵɵreference(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControl", ctx.control)("matAutocomplete", _r17);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 3, ctx.filteredStreets));
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i1.DefaultValueAccessor, i2.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlDirective, i2.MatAutocomplete, i3.NgForOf, i4.MatOption], pipes: [i3.AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(AutocompletePlainInputExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-plain-input-example',
                templateUrl: 'autocomplete-plain-input-example.html',
                styleUrls: ['autocomplete-plain-input-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    AutocompletePlainInputExample.prototype.control;
    /** @type {?} */
    AutocompletePlainInputExample.prototype.streets;
    /** @type {?} */
    AutocompletePlainInputExample.prototype.filteredStreets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0L2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC9hdXRvY29tcGxldGUtcGxhaW4taW5wdXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0ExQyxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjhDLGtDQUFnQjtJQUN6RSxlQUNGO0lBREUsMkNBQ0Y7Ozs7O0FEUUosTUFBTSxPQUFPLDZCQUE2QjtJQUwxQztRQU1FLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBYSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztLQWtCeEY7Ozs7SUFmQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ25ELFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQ2xDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxPQUFPLENBQUMsS0FBYTs7Y0FDckIsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDO0lBQzNGLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxLQUFhO1FBQ25DLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQzthQUNwRDs7MEdBQ1ksNkJBQTZCO2tFQUE3Qiw2QkFBNkI7UUNiMUMsK0JBQ0U7UUFBQSwyQkFDQTtRQUFBLG1EQUNFO1FBQUEsNEZBQ0U7O1FBRUosaUJBQW1CO1FBQ3JCLGlCQUFPOzs7UUFOZ0QsZUFBdUI7UUFBdkIseUNBQXVCLHlCQUFBO1FBRTlELGVBQThDO1FBQTlDLG1FQUE4Qzs7bUNEVWpELDZCQUE2QjtjQUx6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7YUFDcEQ7Ozs7SUFFQyxnREFBNEI7O0lBQzVCLGdEQUF1Rjs7SUFDdkYsd0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtzdGFydFdpdGgsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEB0aXRsZSBQbGFpbiBpbnB1dCBhdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZVBsYWluSW5wdXRFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBzdHJlZXRzOiBzdHJpbmdbXSA9IFsnQ2hhbXBzLcOJbHlzw6llcycsICdMb21iYXJkIFN0cmVldCcsICdBYmJleSBSb2FkJywgJ0ZpZnRoIEF2ZW51ZSddO1xuICBmaWx0ZXJlZFN0cmVldHM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmlsdGVyZWRTdHJlZXRzID0gdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHRoaXMuX25vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5zdHJlZXRzLmZpbHRlcihzdHJlZXQgPT4gdGhpcy5fbm9ybWFsaXplVmFsdWUoc3RyZWV0KS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbm9ybWFsaXplVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgfVxufVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgc3RyZWV0XCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9cIj5cbiAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc3RyZWV0IG9mIGZpbHRlcmVkU3RyZWV0cyB8IGFzeW5jXCIgW3ZhbHVlXT1cInN0cmVldFwiPlxuICAgICAge3tzdHJlZXR9fVxuICAgIDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtYXV0b2NvbXBsZXRlPlxuPC9mb3JtPlxuIl19