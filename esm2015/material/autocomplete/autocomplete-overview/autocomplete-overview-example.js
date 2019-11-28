/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/autocomplete/autocomplete-overview/autocomplete-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/slide-toggle";
import * as i7 from "@angular/material/core";
function AutocompleteOverviewExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵelement(1, "img", 7);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " | ");
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r16 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r16.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", state_r16.flag, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(state_r16.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Population: ", state_r16.population, "");
} }
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.flag;
    /** @type {?} */
    State.prototype.name;
    /** @type {?} */
    State.prototype.population;
}
/**
 * \@title Autocomplete overview
 */
export class AutocompleteOverviewExample {
    constructor() {
        this.stateCtrl = new FormControl();
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(startWith(''), map((/**
         * @param {?} state
         * @return {?}
         */
        state => state ? this._filterStates(state) : this.states.slice())));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filterStates(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.states.filter((/**
         * @param {?} state
         * @return {?}
         */
        state => state.name.toLowerCase().indexOf(filterValue) === 0));
    }
}
AutocompleteOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-overview-example',
                templateUrl: 'autocomplete-overview-example.html',
                styleUrls: ['autocomplete-overview-example.css'],
            },] },
];
/** @nocollapse */
AutocompleteOverviewExample.ctorParameters = () => [];
/** @nocollapse */ AutocompleteOverviewExample.ɵfac = function AutocompleteOverviewExample_Factory(t) { return new (t || AutocompleteOverviewExample)(); };
/** @nocollapse */ AutocompleteOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompleteOverviewExample, selectors: [["autocomplete-overview-example"]], decls: 10, vars: 6, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "State", "aria-label", "State", 3, "matAutocomplete", "formControl"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "checked", "change"], [3, "value"], ["aria-hidden", "", "height", "25", 1, "example-option-img", 3, "src"]], template: function AutocompleteOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelement(2, "input", 2);
        i0.ɵɵelementStart(3, "mat-autocomplete", null, 3);
        i0.ɵɵtemplate(5, AutocompleteOverviewExample_mat_option_5_Template, 7, 4, "mat-option", 4);
        i0.ɵɵpipe(6, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "br");
        i0.ɵɵelementStart(8, "mat-slide-toggle", 5);
        i0.ɵɵlistener("change", function AutocompleteOverviewExample_Template_mat_slide_toggle_change_8_listener($event) { return ctx.stateCtrl.disabled ? ctx.stateCtrl.enable() : ctx.stateCtrl.disable(); });
        i0.ɵɵtext(9, " Disable Input? ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r14 = i0.ɵɵreference(4);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matAutocomplete", _r14)("formControl", ctx.stateCtrl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 4, ctx.filteredStates));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("checked", ctx.stateCtrl.disabled);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i4.MatAutocompleteTrigger, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i4.MatAutocomplete, i5.NgForOf, i6.MatSlideToggle, i7.MatOption], pipes: [i5.AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-option-img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'][_ngcontent-%COMP%]   .example-option-img[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutocompleteOverviewExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-overview-example',
                templateUrl: 'autocomplete-overview-example.html',
                styleUrls: ['autocomplete-overview-example.css'],
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    AutocompleteOverviewExample.prototype.stateCtrl;
    /** @type {?} */
    AutocompleteOverviewExample.prototype.filteredStates;
    /** @type {?} */
    AutocompleteOverviewExample.prototype.states;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3L2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vdmVydmlldy9hdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztJQ0N4QyxxQ0FDRTtJQUFBLHlCQUNBO0lBQUEsNEJBQU07SUFBQSxZQUFjO0lBQUEsaUJBQU87SUFBQyxtQkFDNUI7SUFBQSw2QkFBTztJQUFBLFlBQWdDO0lBQUEsaUJBQVE7SUFDakQsaUJBQWE7OztJQUo0QyxzQ0FBb0I7SUFDL0IsZUFBa0I7SUFBbEIsc0RBQWtCO0lBQ3hELGVBQWM7SUFBZCxvQ0FBYztJQUNiLGVBQWdDO0lBQWhDLCtEQUFnQzs7Ozs7QURGL0MsMkJBSUM7OztJQUhDLHFCQUFhOztJQUNiLHFCQUFhOztJQUNiLDJCQUFtQjs7Ozs7QUFXckIsTUFBTSxPQUFPLDJCQUEyQjtJQStCdEM7UUE5QkEsY0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFHOUIsV0FBTSxHQUFZO1lBQ2hCO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixVQUFVLEVBQUUsUUFBUTs7Z0JBRXBCLElBQUksRUFBRSwwRUFBMEU7YUFDakY7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsVUFBVSxFQUFFLFFBQVE7O2dCQUVwQixJQUFJLEVBQUUsNEVBQTRFO2FBQ25GO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsVUFBVSxFQUFFLFFBQVE7O2dCQUVwQixJQUFJLEVBQUUseUVBQXlFO2FBQ2hGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsVUFBVSxFQUFFLFFBQVE7O2dCQUVwQixJQUFJLEVBQUUsdUVBQXVFO2FBQzlFO1NBQ0YsQ0FBQztRQUdBLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2FBQzlDLElBQUksQ0FDSCxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFDLENBQ3RFLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsS0FBYTs7Y0FDM0IsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUU7UUFFdkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQzFGLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7Ozs7c0dBQ1ksMkJBQTJCO2dFQUEzQiwyQkFBMkI7UUNuQnhDLCtCQUNFO1FBQUEseUNBQ0U7UUFBQSwyQkFDQTtRQUFBLGlEQUNFO1FBQUEsMEZBQ0U7O1FBSUosaUJBQW1CO1FBQ3JCLGlCQUFpQjtRQUVqQixxQkFFQTtRQUFBLDJDQUdFO1FBREEsbUpBQStCLHNCQUFtQixHQUFFLHVCQUFtQixJQUFDO1FBQ3hFLGdDQUNGO1FBQUEsaUJBQW1CO1FBQ3JCLGlCQUFPOzs7UUFqQm9ELGVBQXdCO1FBQXhCLHNDQUF3Qiw4QkFBQTtRQUVqRSxlQUE0QztRQUE1QyxrRUFBNEM7UUFXMUQsZUFBOEI7UUFBOUIsZ0RBQThCOztrRERJckIsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRDs7OztJQUVDLGdEQUE4Qjs7SUFDOUIscURBQW9DOztJQUVwQyw2Q0F5QkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHN0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgZmxhZzogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvcHVsYXRpb246IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQXV0b2NvbXBsZXRlIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVPdmVydmlld0V4YW1wbGUge1xuICBzdGF0ZUN0cmwgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgZmlsdGVyZWRTdGF0ZXM6IE9ic2VydmFibGU8U3RhdGVbXT47XG5cbiAgc3RhdGVzOiBTdGF0ZVtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdBcmthbnNhcycsXG4gICAgICBwb3B1bGF0aW9uOiAnMi45NzhNJyxcbiAgICAgIC8vIGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpGbGFnX29mX0Fya2Fuc2FzLnN2Z1xuICAgICAgZmxhZzogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvOS85ZC9GbGFnX29mX0Fya2Fuc2FzLnN2ZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDYWxpZm9ybmlhJyxcbiAgICAgIHBvcHVsYXRpb246ICczOS4xNE0nLFxuICAgICAgLy8gaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkZsYWdfb2ZfQ2FsaWZvcm5pYS5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzAvMDEvRmxhZ19vZl9DYWxpZm9ybmlhLnN2ZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGbG9yaWRhJyxcbiAgICAgIHBvcHVsYXRpb246ICcyMC4yN00nLFxuICAgICAgLy8gaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkZsYWdfb2ZfRmxvcmlkYS5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2YvZjcvRmxhZ19vZl9GbG9yaWRhLnN2ZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdUZXhhcycsXG4gICAgICBwb3B1bGF0aW9uOiAnMjcuNDdNJyxcbiAgICAgIC8vIGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpGbGFnX29mX1RleGFzLnN2Z1xuICAgICAgZmxhZzogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZi9mNy9GbGFnX29mX1RleGFzLnN2ZydcbiAgICB9XG4gIF07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJlZFN0YXRlcyA9IHRoaXMuc3RhdGVDdHJsLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZSA/IHRoaXMuX2ZpbHRlclN0YXRlcyhzdGF0ZSkgOiB0aGlzLnN0YXRlcy5zbGljZSgpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlclN0YXRlcyh2YWx1ZTogc3RyaW5nKTogU3RhdGVbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVzLmZpbHRlcihzdGF0ZSA9PiBzdGF0ZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPT09IDApO1xuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiIGFyaWEtbGFiZWw9XCJTdGF0ZVwiIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiIFtmb3JtQ29udHJvbF09XCJzdGF0ZUN0cmxcIj5cbiAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHN0YXRlIG9mIGZpbHRlcmVkU3RhdGVzIHwgYXN5bmNcIiBbdmFsdWVdPVwic3RhdGUubmFtZVwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiZXhhbXBsZS1vcHRpb24taW1nXCIgYXJpYS1oaWRkZW4gW3NyY109XCJzdGF0ZS5mbGFnXCIgaGVpZ2h0PVwiMjVcIj5cbiAgICAgICAgPHNwYW4+e3tzdGF0ZS5uYW1lfX08L3NwYW4+IHxcbiAgICAgICAgPHNtYWxsPlBvcHVsYXRpb246IHt7c3RhdGUucG9wdWxhdGlvbn19PC9zbWFsbD5cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1hdXRvY29tcGxldGU+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPGJyPlxuXG4gIDxtYXQtc2xpZGUtdG9nZ2xlXG4gICAgW2NoZWNrZWRdPVwic3RhdGVDdHJsLmRpc2FibGVkXCJcbiAgICAoY2hhbmdlKT1cInN0YXRlQ3RybC5kaXNhYmxlZCA/IHN0YXRlQ3RybC5lbmFibGUoKSA6IHN0YXRlQ3RybC5kaXNhYmxlKClcIj5cbiAgICBEaXNhYmxlIElucHV0P1xuICA8L21hdC1zbGlkZS10b2dnbGU+XG48L2Zvcm0+XG4iXX0=