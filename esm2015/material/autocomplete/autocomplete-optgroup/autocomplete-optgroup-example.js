/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/autocomplete/autocomplete-optgroup/autocomplete-optgroup-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/core";
function AutocompleteOptgroupExample_mat_optgroup_5_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const name_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", name_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", name_r4, " ");
} }
function AutocompleteOptgroupExample_mat_optgroup_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-optgroup", 4);
    i0.ɵɵtemplate(1, AutocompleteOptgroupExample_mat_optgroup_5_mat_option_1_Template, 2, 2, "mat-option", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    i0.ɵɵproperty("label", group_r2.letter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r2.names);
} }
/**
 * @record
 */
export function StateGroup() { }
if (false) {
    /** @type {?} */
    StateGroup.prototype.letter;
    /** @type {?} */
    StateGroup.prototype.names;
}
/** @type {?} */
export const _filter = (/**
 * @param {?} opt
 * @param {?} value
 * @return {?}
 */
(opt, value) => {
    /** @type {?} */
    const filterValue = value.toLowerCase();
    return opt.filter((/**
     * @param {?} item
     * @return {?}
     */
    item => item.toLowerCase().indexOf(filterValue) === 0));
});
/**
 * \@title Option groups autocomplete
 */
let AutocompleteOptgroupExample = /** @class */ (() => {
    /**
     * \@title Option groups autocomplete
     */
    class AutocompleteOptgroupExample {
        /**
         * @param {?} _formBuilder
         */
        constructor(_formBuilder) {
            this._formBuilder = _formBuilder;
            this.stateForm = this._formBuilder.group({
                stateGroup: '',
            });
            this.stateGroups = [{
                    letter: 'A',
                    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
                }, {
                    letter: 'C',
                    names: ['California', 'Colorado', 'Connecticut']
                }, {
                    letter: 'D',
                    names: ['Delaware']
                }, {
                    letter: 'F',
                    names: ['Florida']
                }, {
                    letter: 'G',
                    names: ['Georgia']
                }, {
                    letter: 'H',
                    names: ['Hawaii']
                }, {
                    letter: 'I',
                    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
                }, {
                    letter: 'K',
                    names: ['Kansas', 'Kentucky']
                }, {
                    letter: 'L',
                    names: ['Louisiana']
                }, {
                    letter: 'M',
                    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
                        'Minnesota', 'Mississippi', 'Missouri', 'Montana']
                }, {
                    letter: 'N',
                    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                        'New Mexico', 'New York', 'North Carolina', 'North Dakota']
                }, {
                    letter: 'O',
                    names: ['Ohio', 'Oklahoma', 'Oregon']
                }, {
                    letter: 'P',
                    names: ['Pennsylvania']
                }, {
                    letter: 'R',
                    names: ['Rhode Island']
                }, {
                    letter: 'S',
                    names: ['South Carolina', 'South Dakota']
                }, {
                    letter: 'T',
                    names: ['Tennessee', 'Texas']
                }, {
                    letter: 'U',
                    names: ['Utah']
                }, {
                    letter: 'V',
                    names: ['Vermont', 'Virginia']
                }, {
                    letter: 'W',
                    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
                }];
        }
        /**
         * @return {?}
         */
        ngOnInit() {
            this.stateGroupOptions = (/** @type {?} */ (this.stateForm.get('stateGroup'))).valueChanges
                .pipe(startWith(''), map((/**
             * @param {?} value
             * @return {?}
             */
            value => this._filterGroup(value))));
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        _filterGroup(value) {
            if (value) {
                return this.stateGroups
                    .map((/**
                 * @param {?} group
                 * @return {?}
                 */
                group => ({ letter: group.letter, names: _filter(group.names, value) })))
                    .filter((/**
                 * @param {?} group
                 * @return {?}
                 */
                group => group.names.length > 0));
            }
            return this.stateGroups;
        }
    }
    AutocompleteOptgroupExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-optgroup-example',
                    templateUrl: './autocomplete-optgroup-example.html',
                    styleUrls: ['./autocomplete-optgroup-example.css'],
                },] },
    ];
    /** @nocollapse */
    AutocompleteOptgroupExample.ctorParameters = () => [
        { type: FormBuilder }
    ];
    /** @nocollapse */ AutocompleteOptgroupExample.ɵfac = function AutocompleteOptgroupExample_Factory(t) { return new (t || AutocompleteOptgroupExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    /** @nocollapse */ AutocompleteOptgroupExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompleteOptgroupExample, selectors: [["autocomplete-optgroup-example"]], decls: 7, vars: 5, consts: [[3, "formGroup"], ["type", "text", "matInput", "", "placeholder", "States Group", "formControlName", "stateGroup", "required", "", 3, "matAutocomplete"], ["autoGroup", "matAutocomplete"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteOptgroupExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field");
            i0.ɵɵelement(2, "input", 1);
            i0.ɵɵelementStart(3, "mat-autocomplete", null, 2);
            i0.ɵɵtemplate(5, AutocompleteOptgroupExample_mat_optgroup_5_Template, 2, 2, "mat-optgroup", 3);
            i0.ɵɵpipe(6, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(4);
            i0.ɵɵproperty("formGroup", ctx.stateForm);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matAutocomplete", _r0);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 3, ctx.stateGroupOptions));
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i4.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i4.MatAutocomplete, i5.NgForOf, i6.MatOptgroup, i6.MatOption], pipes: [i5.AsyncPipe], styles: [""] });
    return AutocompleteOptgroupExample;
})();
export { AutocompleteOptgroupExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutocompleteOptgroupExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-optgroup-example',
                templateUrl: './autocomplete-optgroup-example.html',
                styleUrls: ['./autocomplete-optgroup-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
if (false) {
    /** @type {?} */
    AutocompleteOptgroupExample.prototype.stateForm;
    /** @type {?} */
    AutocompleteOptgroupExample.prototype.stateGroups;
    /** @type {?} */
    AutocompleteOptgroupExample.prototype.stateGroupOptions;
    /**
     * @type {?}
     * @private
     */
    AutocompleteOptgroupExample.prototype._formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDT3BDLHFDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFhOzs7SUFGZ0MsK0JBQWM7SUFDekQsZUFDRjtJQURFLHdDQUNGOzs7SUFIRix1Q0FDRTtJQUFBLHlHQUNFO0lBRU4saUJBQWU7OztJQUppRCx1Q0FBc0I7SUFDdEUsZUFBZ0M7SUFBaEMsd0NBQWdDOzs7OztBREx0RCxnQ0FHQzs7O0lBRkMsNEJBQWU7O0lBQ2YsMkJBQWdCOzs7QUFHbEIsTUFBTSxPQUFPLE9BQU87Ozs7O0FBQUcsQ0FBQyxHQUFhLEVBQUUsS0FBYSxFQUFZLEVBQUU7O1VBQzFELFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFO0lBRXZDLE9BQU8sR0FBRyxDQUFDLE1BQU07Ozs7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUss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O2NBTnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRDs7OztJQUdDLGdEQUVHOztJQUVILGtEQTJERzs7SUFFSCx3REFBNEM7Ozs7O0lBRWhDLG1EQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtzdGFydFdpdGgsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlR3JvdXAge1xuICBsZXR0ZXI6IHN0cmluZztcbiAgbmFtZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgX2ZpbHRlciA9IChvcHQ6IHN0cmluZ1tdLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIG9wdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPT09IDApO1xufTtcblxuLyoqXG4gKiBAdGl0bGUgT3B0aW9uIGdyb3VwcyBhdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZU9wdGdyb3VwRXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRlRm9ybTogRm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIHN0YXRlR3JvdXA6ICcnLFxuICB9KTtcblxuICBzdGF0ZUdyb3VwczogU3RhdGVHcm91cFtdID0gW3tcbiAgICBsZXR0ZXI6ICdBJyxcbiAgICBuYW1lczogWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0MnLFxuICAgIG5hbWVzOiBbJ0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLCAnQ29ubmVjdGljdXQnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnRCcsXG4gICAgbmFtZXM6IFsnRGVsYXdhcmUnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnRicsXG4gICAgbmFtZXM6IFsnRmxvcmlkYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdHJyxcbiAgICBuYW1lczogWydHZW9yZ2lhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0gnLFxuICAgIG5hbWVzOiBbJ0hhd2FpaSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdJJyxcbiAgICBuYW1lczogWydJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnSycsXG4gICAgbmFtZXM6IFsnS2Fuc2FzJywgJ0tlbnR1Y2t5J11cbiAgfSwge1xuICAgIGxldHRlcjogJ0wnLFxuICAgIG5hbWVzOiBbJ0xvdWlzaWFuYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdNJyxcbiAgICBuYW1lczogWydNYWluZScsICdNYXJ5bGFuZCcsICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJyxcbiAgICAgICdNaW5uZXNvdGEnLCAnTWlzc2lzc2lwcGknLCAnTWlzc291cmknLCAnTW9udGFuYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdOJyxcbiAgICBuYW1lczogWydOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsICdOZXcgSmVyc2V5JyxcbiAgICAgICdOZXcgTWV4aWNvJywgJ05ldyBZb3JrJywgJ05vcnRoIENhcm9saW5hJywgJ05vcnRoIERha290YSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdPJyxcbiAgICBuYW1lczogWydPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbiddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdQJyxcbiAgICBuYW1lczogWydQZW5uc3lsdmFuaWEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnUicsXG4gICAgbmFtZXM6IFsnUmhvZGUgSXNsYW5kJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1MnLFxuICAgIG5hbWVzOiBbJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdUJyxcbiAgICBuYW1lczogWydUZW5uZXNzZWUnLCAnVGV4YXMnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnVScsXG4gICAgbmFtZXM6IFsnVXRhaCddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdWJyxcbiAgICBuYW1lczogWydWZXJtb250JywgJ1ZpcmdpbmlhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1cnLFxuICAgIG5hbWVzOiBbJ1dhc2hpbmd0b24nLCAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZyddXG4gIH1dO1xuXG4gIHN0YXRlR3JvdXBPcHRpb25zOiBPYnNlcnZhYmxlPFN0YXRlR3JvdXBbXT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3RhdGVHcm91cE9wdGlvbnMgPSB0aGlzLnN0YXRlRm9ybS5nZXQoJ3N0YXRlR3JvdXAnKSEudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlckdyb3VwKHZhbHVlKSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJHcm91cCh2YWx1ZTogc3RyaW5nKTogU3RhdGVHcm91cFtdIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlR3JvdXBzXG4gICAgICAgIC5tYXAoZ3JvdXAgPT4gKHtsZXR0ZXI6IGdyb3VwLmxldHRlciwgbmFtZXM6IF9maWx0ZXIoZ3JvdXAubmFtZXMsIHZhbHVlKX0pKVxuICAgICAgICAuZmlsdGVyKGdyb3VwID0+IGdyb3VwLm5hbWVzLmxlbmd0aCA+IDApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXRlR3JvdXBzO1xuICB9XG59XG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cInN0YXRlRm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGF0ZXMgR3JvdXBcIlxuICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzdGF0ZUdyb3VwXCJcbiAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvR3JvdXBcIj5cbiAgICAgIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvR3JvdXA9XCJtYXRBdXRvY29tcGxldGVcIj5cbiAgICAgICAgPG1hdC1vcHRncm91cCAqbmdGb3I9XCJsZXQgZ3JvdXAgb2Ygc3RhdGVHcm91cE9wdGlvbnMgfCBhc3luY1wiIFtsYWJlbF09XCJncm91cC5sZXR0ZXJcIj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbmFtZSBvZiBncm91cC5uYW1lc1wiIFt2YWx1ZV09XCJuYW1lXCI+XG4gICAgICAgICAgICB7e25hbWV9fVxuICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LW9wdGdyb3VwPlxuICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==