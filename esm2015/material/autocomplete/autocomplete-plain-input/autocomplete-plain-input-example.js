/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/autocomplete/autocomplete-plain-input/autocomplete-plain-input-example.ts
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
function AutocompletePlainInputExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const street_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", street_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", street_r2, " ");
} }
/**
 * \@title Plain input autocomplete
 */
let AutocompletePlainInputExample = /** @class */ (() => {
    /**
     * \@title Plain input autocomplete
     */
    class AutocompletePlainInputExample {
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
    /** @nocollapse */ AutocompletePlainInputExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompletePlainInputExample, selectors: [["autocomplete-plain-input-example"]], decls: 6, vars: 5, consts: [[1, "example-form"], ["type", "text", "placeholder", "Search for a street", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompletePlainInputExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelement(1, "input", 1);
            i0.ɵɵelementStart(2, "mat-autocomplete", null, 2);
            i0.ɵɵtemplate(4, AutocompletePlainInputExample_mat_option_4_Template, 2, 2, "mat-option", 3);
            i0.ɵɵpipe(5, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formControl", ctx.control)("matAutocomplete", _r0);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 3, ctx.filteredStreets));
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i1.DefaultValueAccessor, i2.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlDirective, i2.MatAutocomplete, i3.NgForOf, i4.MatOption], pipes: [i3.AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompletePlainInputExample;
})();
export { AutocompletePlainInputExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutocompletePlainInputExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-plain-input-example',
                templateUrl: 'autocomplete-plain-input-example.html',
                styleUrls: ['autocomplete-plain-input-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    AutocompletePlainInputExample.prototype.control;
    /** @type {?} */
    AutocompletePlainInputExample.prototype.streets;
    /** @type {?} */
    AutocompletePlainInputExample.prototype.filteredStreets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0L2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC9hdXRvY29tcGxldGUtcGxhaW4taW5wdXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQ0cxQyxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjhDLGlDQUFnQjtJQUN6RSxlQUNGO0lBREUsMENBQ0Y7Ozs7O0FEQUo7Ozs7SUFBQSxNQUthLDZCQUE2QjtRQUwxQztZQU1FLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzVCLFlBQU8sR0FBYSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztTQWtCeEY7Ozs7UUFmQyxRQUFRO1lBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ25ELFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQ2xDLENBQUM7UUFDSixDQUFDOzs7Ozs7UUFFTyxPQUFPLENBQUMsS0FBYTs7a0JBQ3JCLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztZQUMvQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztZQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQztRQUMzRixDQUFDOzs7Ozs7UUFFTyxlQUFlLENBQUMsS0FBYTtZQUNuQyxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7OztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7b0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2lCQUNwRDs7aUlBQ1ksNkJBQTZCO3lGQUE3Qiw2QkFBNkI7WUNiMUMsK0JBQ0U7WUFBQSwyQkFJQTtZQUFBLGlEQUNFO1lBQUEsNEZBQ0U7O1lBRUosaUJBQW1CO1lBQ3JCLGlCQUFPOzs7WUFQRSxlQUF1QjtZQUF2Qix5Q0FBdUIsd0JBQUE7WUFHaEIsZUFBOEM7WUFBOUMsbUVBQThDOzt3Q0ROOUQ7S0FpQ0M7U0FwQlksNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEOzs7O0lBRUMsZ0RBQTRCOztJQUM1QixnREFBdUY7O0lBQ3ZGLHdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7c3RhcnRXaXRoLCBtYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBAdGl0bGUgUGxhaW4gaW5wdXQgYXV0b2NvbXBsZXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUtcGxhaW4taW5wdXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVQbGFpbklucHV0RXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgc3RyZWV0czogc3RyaW5nW10gPSBbJ0NoYW1wcy3DiWx5c8OpZXMnLCAnTG9tYmFyZCBTdHJlZXQnLCAnQWJiZXkgUm9hZCcsICdGaWZ0aCBBdmVudWUnXTtcbiAgZmlsdGVyZWRTdHJlZXRzOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpbHRlcmVkU3RyZWV0cyA9IHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB0aGlzLl9ub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuc3RyZWV0cy5maWx0ZXIoc3RyZWV0ID0+IHRoaXMuX25vcm1hbGl6ZVZhbHVlKHN0cmVldCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgX25vcm1hbGl6ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gIH1cbn1cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBzdHJlZXRcIlxuICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCI+XG4gIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCI+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHN0cmVldCBvZiBmaWx0ZXJlZFN0cmVldHMgfCBhc3luY1wiIFt2YWx1ZV09XCJzdHJlZXRcIj5cbiAgICAgIHt7c3RyZWV0fX1cbiAgICA8L21hdC1vcHRpb24+XG4gIDwvbWF0LWF1dG9jb21wbGV0ZT5cbjwvZm9ybT5cbiJdfQ==