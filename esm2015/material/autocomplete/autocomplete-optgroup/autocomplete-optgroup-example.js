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
function AutocompleteOptgroupExample_mat_optgroup_7_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const name_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", name_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", name_r4, " ");
} }
function AutocompleteOptgroupExample_mat_optgroup_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-optgroup", 4);
    i0.ɵɵtemplate(1, AutocompleteOptgroupExample_mat_optgroup_7_mat_option_1_Template, 2, 2, "mat-option", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    i0.ɵɵproperty("label", group_r2.letter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r2.names);
} }
export const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().includes(filterValue));
};
/**
 * @title Option groups autocomplete
 */
export class AutocompleteOptgroupExample {
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
    ngOnInit() {
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(startWith(''), map(value => this._filterGroup(value)));
    }
    _filterGroup(value) {
        if (value) {
            return this.stateGroups
                .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
                .filter(group => group.names.length > 0);
        }
        return this.stateGroups;
    }
}
AutocompleteOptgroupExample.ɵfac = function AutocompleteOptgroupExample_Factory(t) { return new (t || AutocompleteOptgroupExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
AutocompleteOptgroupExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AutocompleteOptgroupExample, selectors: [["autocomplete-optgroup-example"]], decls: 9, vars: 5, consts: [[3, "formGroup"], ["type", "text", "matInput", "", "formControlName", "stateGroup", "required", "", 3, "matAutocomplete"], ["autoGroup", "matAutocomplete"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteOptgroupExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field");
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "States Group");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 1);
        i0.ɵɵelementStart(5, "mat-autocomplete", null, 2);
        i0.ɵɵtemplate(7, AutocompleteOptgroupExample_mat_optgroup_7_Template, 2, 2, "mat-optgroup", 3);
        i0.ɵɵpipe(8, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(6);
        i0.ɵɵproperty("formGroup", ctx.stateForm);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matAutocomplete", _r0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 3, ctx.stateGroupOptions));
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i2.MatLabel, i3.MatInput, i1.DefaultValueAccessor, i4.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i4.MatAutocomplete, i5.NgForOf, i6.MatOptgroup, i6.MatOption], pipes: [i5.AsyncPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutocompleteOptgroupExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-optgroup-example',
                templateUrl: './autocomplete-optgroup-example.html',
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ1FwQyxxQ0FBNEQ7SUFDMUQsWUFDRjtJQUFBLGlCQUFhOzs7SUFGZ0MsK0JBQWM7SUFDekQsZUFDRjtJQURFLHdDQUNGOzs7SUFIRix1Q0FBcUY7SUFDbkYseUdBRWE7SUFDakIsaUJBQWU7OztJQUppRCx1Q0FBc0I7SUFDckQsZUFBYztJQUFkLHdDQUFjOztBRERyRCxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFhLEVBQUUsS0FBYSxFQUFZLEVBQUU7SUFDaEUsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRXhDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUM7QUFFRjs7R0FFRztBQU1ILE1B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SCxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUN2QyxDQUFDO0lBQ04sQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFhO1FBQ2hDLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVztpQkFDcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUM7aUJBQzFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7O3NHQXRGVSwyQkFBMkI7OEVBQTNCLDJCQUEyQjtRQ3hCeEMsK0JBQThCO1FBQzVCLHNDQUFnQjtRQUNkLGlDQUFXO1FBQUEsNEJBQVk7UUFBQSxpQkFBWTtRQUNuQywyQkFJcUM7UUFFbkMsaURBQStDO1FBQzdDLDhGQUlhOztRQUNqQixpQkFBbUI7UUFFckIsaUJBQWlCO1FBQ25CLGlCQUFPOzs7UUFsQkQseUNBQXVCO1FBT2xCLGVBQTZCO1FBQTdCLHFDQUE2QjtRQUdBLGVBQTRCO1FBQTVCLHFFQUE0Qjs7dUZEY3ZELDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLHNDQUFzQzthQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtzdGFydFdpdGgsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlR3JvdXAge1xuICBsZXR0ZXI6IHN0cmluZztcbiAgbmFtZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgX2ZpbHRlciA9IChvcHQ6IHN0cmluZ1tdLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIG9wdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcbn07XG5cbi8qKlxuICogQHRpdGxlIE9wdGlvbiBncm91cHMgYXV0b2NvbXBsZXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZU9wdGdyb3VwRXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRlRm9ybTogRm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIHN0YXRlR3JvdXA6ICcnLFxuICB9KTtcblxuICBzdGF0ZUdyb3VwczogU3RhdGVHcm91cFtdID0gW3tcbiAgICBsZXR0ZXI6ICdBJyxcbiAgICBuYW1lczogWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0MnLFxuICAgIG5hbWVzOiBbJ0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLCAnQ29ubmVjdGljdXQnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnRCcsXG4gICAgbmFtZXM6IFsnRGVsYXdhcmUnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnRicsXG4gICAgbmFtZXM6IFsnRmxvcmlkYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdHJyxcbiAgICBuYW1lczogWydHZW9yZ2lhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0gnLFxuICAgIG5hbWVzOiBbJ0hhd2FpaSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdJJyxcbiAgICBuYW1lczogWydJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnSycsXG4gICAgbmFtZXM6IFsnS2Fuc2FzJywgJ0tlbnR1Y2t5J11cbiAgfSwge1xuICAgIGxldHRlcjogJ0wnLFxuICAgIG5hbWVzOiBbJ0xvdWlzaWFuYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdNJyxcbiAgICBuYW1lczogWydNYWluZScsICdNYXJ5bGFuZCcsICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJyxcbiAgICAgICdNaW5uZXNvdGEnLCAnTWlzc2lzc2lwcGknLCAnTWlzc291cmknLCAnTW9udGFuYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdOJyxcbiAgICBuYW1lczogWydOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsICdOZXcgSmVyc2V5JyxcbiAgICAgICdOZXcgTWV4aWNvJywgJ05ldyBZb3JrJywgJ05vcnRoIENhcm9saW5hJywgJ05vcnRoIERha290YSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdPJyxcbiAgICBuYW1lczogWydPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbiddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdQJyxcbiAgICBuYW1lczogWydQZW5uc3lsdmFuaWEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnUicsXG4gICAgbmFtZXM6IFsnUmhvZGUgSXNsYW5kJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1MnLFxuICAgIG5hbWVzOiBbJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdUJyxcbiAgICBuYW1lczogWydUZW5uZXNzZWUnLCAnVGV4YXMnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnVScsXG4gICAgbmFtZXM6IFsnVXRhaCddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdWJyxcbiAgICBuYW1lczogWydWZXJtb250JywgJ1ZpcmdpbmlhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1cnLFxuICAgIG5hbWVzOiBbJ1dhc2hpbmd0b24nLCAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZyddXG4gIH1dO1xuXG4gIHN0YXRlR3JvdXBPcHRpb25zOiBPYnNlcnZhYmxlPFN0YXRlR3JvdXBbXT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3RhdGVHcm91cE9wdGlvbnMgPSB0aGlzLnN0YXRlRm9ybS5nZXQoJ3N0YXRlR3JvdXAnKSEudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlckdyb3VwKHZhbHVlKSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJHcm91cCh2YWx1ZTogc3RyaW5nKTogU3RhdGVHcm91cFtdIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlR3JvdXBzXG4gICAgICAgIC5tYXAoZ3JvdXAgPT4gKHtsZXR0ZXI6IGdyb3VwLmxldHRlciwgbmFtZXM6IF9maWx0ZXIoZ3JvdXAubmFtZXMsIHZhbHVlKX0pKVxuICAgICAgICAuZmlsdGVyKGdyb3VwID0+IGdyb3VwLm5hbWVzLmxlbmd0aCA+IDApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXRlR3JvdXBzO1xuICB9XG59XG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cInN0YXRlRm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5TdGF0ZXMgR3JvdXA8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzdGF0ZUdyb3VwXCJcbiAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvR3JvdXBcIj5cbjwhLS0gI2RvY3JlZ2lvbiBtYXQtYXV0b2NvbXBsZXRlIC0tPlxuICAgICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG9Hcm91cD1cIm1hdEF1dG9jb21wbGV0ZVwiPlxuICAgICAgICA8bWF0LW9wdGdyb3VwICpuZ0Zvcj1cImxldCBncm91cCBvZiBzdGF0ZUdyb3VwT3B0aW9ucyB8IGFzeW5jXCIgW2xhYmVsXT1cImdyb3VwLmxldHRlclwiPlxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBuYW1lIG9mIGdyb3VwLm5hbWVzXCIgW3ZhbHVlXT1cIm5hbWVcIj5cbiAgICAgICAgICAgIHt7bmFtZX19XG4gICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtb3B0Z3JvdXA+XG4gICAgPC9tYXQtYXV0b2NvbXBsZXRlPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1hdXRvY29tcGxldGUgLS0+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=