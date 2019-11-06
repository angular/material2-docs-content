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
var _c0 = ["autoGroup", "matAutocomplete"];
function AutocompleteOptgroupExample_mat_optgroup_5_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var name_r13 = ctx.$implicit;
    i0.ɵɵproperty("value", name_r13);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", name_r13, " ");
} }
function AutocompleteOptgroupExample_mat_optgroup_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-optgroup", 3);
    i0.ɵɵtemplate(1, AutocompleteOptgroupExample_mat_optgroup_5_mat_option_1_Template, 2, 2, "mat-option", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var group_r11 = ctx.$implicit;
    i0.ɵɵproperty("label", group_r11.letter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r11.names);
} }
export var _filter = function (opt, value) {
    var filterValue = value.toLowerCase();
    return opt.filter(function (item) { return item.toLowerCase().indexOf(filterValue) === 0; });
};
/**
 * @title Option groups autocomplete
 */
var AutocompleteOptgroupExample = /** @class */ (function () {
    function AutocompleteOptgroupExample(_formBuilder) {
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
    AutocompleteOptgroupExample.prototype.ngOnInit = function () {
        var _this = this;
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(startWith(''), map(function (value) { return _this._filterGroup(value); }));
    };
    AutocompleteOptgroupExample.prototype._filterGroup = function (value) {
        if (value) {
            return this.stateGroups
                .map(function (group) { return ({ letter: group.letter, names: _filter(group.names, value) }); })
                .filter(function (group) { return group.names.length > 0; });
        }
        return this.stateGroups;
    };
    AutocompleteOptgroupExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-optgroup-example',
                    templateUrl: './autocomplete-optgroup-example.html',
                    styleUrls: ['./autocomplete-optgroup-example.css'],
                },] },
    ];
    /** @nocollapse */
    AutocompleteOptgroupExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    AutocompleteOptgroupExample.ɵfac = function AutocompleteOptgroupExample_Factory(t) { return new (t || AutocompleteOptgroupExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    AutocompleteOptgroupExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompleteOptgroupExample, selectors: [["autocomplete-optgroup-example"]], decls: 7, vars: 5, consts: [[3, "formGroup"], ["type", "text", "matInput", "", "placeholder", "States Group", "formControlName", "stateGroup", "required", "", 3, "matAutocomplete"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteOptgroupExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field");
            i0.ɵɵelement(2, "input", 1);
            i0.ɵɵelementStart(3, "mat-autocomplete", null, _c0);
            i0.ɵɵtemplate(5, AutocompleteOptgroupExample_mat_optgroup_5_Template, 2, 2, "mat-optgroup", 2);
            i0.ɵɵpipe(6, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r9 = i0.ɵɵreference(4);
            i0.ɵɵproperty("formGroup", ctx.stateForm);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matAutocomplete", _r9);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 3, ctx.stateGroupOptions));
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i4.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i4.MatAutocomplete, i5.NgForOf, i6.MatOptgroup, i6.MatOption], pipes: [i5.AsyncPipe], styles: [""] });
    return AutocompleteOptgroupExample;
}());
export { AutocompleteOptgroupExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(AutocompleteOptgroupExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-optgroup-example',
                templateUrl: './autocomplete-optgroup-example.html',
                styleUrls: ['./autocomplete-optgroup-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7SUNFcEMscUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQWE7OztJQUZnQyxnQ0FBYztJQUN6RCxlQUNGO0lBREUseUNBQ0Y7OztJQUhGLHVDQUNFO0lBQUEseUdBQ0U7SUFFTixpQkFBZTs7O0lBSmlELHdDQUFzQjtJQUN0RSxlQUFnQztJQUFoQyx5Q0FBZ0M7O0FES3RELE1BQU0sQ0FBQyxJQUFNLE9BQU8sR0FBRyxVQUFDLEdBQWEsRUFBRSxLQUFhO0lBQ2xELElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV4QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBN0MsQ0FBNkMsQ0FB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dkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2FBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3N0YXJ0V2l0aCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVHcm91cCB7XG4gIGxldHRlcjogc3RyaW5nO1xuICBuYW1lczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBfZmlsdGVyID0gKG9wdDogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4gb3B0LmZpbHRlcihpdGVtID0+IGl0ZW0udG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbHVlKSA9PT0gMCk7XG59O1xuXG4vKipcbiAqIEB0aXRsZSBPcHRpb24gZ3JvdXBzIGF1dG9jb21wbGV0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlT3B0Z3JvdXBFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGVGb3JtOiBGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgc3RhdGVHcm91cDogJycsXG4gIH0pO1xuXG4gIHN0YXRlR3JvdXBzOiBTdGF0ZUdyb3VwW10gPSBbe1xuICAgIGxldHRlcjogJ0EnLFxuICAgIG5hbWVzOiBbJ0FsYWJhbWEnLCAnQWxhc2thJywgJ0FyaXpvbmEnLCAnQXJrYW5zYXMnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnQycsXG4gICAgbmFtZXM6IFsnQ2FsaWZvcm5pYScsICdDb2xvcmFkbycsICdDb25uZWN0aWN1dCddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdEJyxcbiAgICBuYW1lczogWydEZWxhd2FyZSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdGJyxcbiAgICBuYW1lczogWydGbG9yaWRhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0cnLFxuICAgIG5hbWVzOiBbJ0dlb3JnaWEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnSCcsXG4gICAgbmFtZXM6IFsnSGF3YWlpJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0knLFxuICAgIG5hbWVzOiBbJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdLJyxcbiAgICBuYW1lczogWydLYW5zYXMnLCAnS2VudHVja3knXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnTCcsXG4gICAgbmFtZXM6IFsnTG91aXNpYW5hJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ00nLFxuICAgIG5hbWVzOiBbJ01haW5lJywgJ01hcnlsYW5kJywgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLFxuICAgICAgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsICdNaXNzb3VyaScsICdNb250YW5hJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ04nLFxuICAgIG5hbWVzOiBbJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJywgJ05ldyBKZXJzZXknLFxuICAgICAgJ05ldyBNZXhpY28nLCAnTmV3IFlvcmsnLCAnTm9ydGggQ2Fyb2xpbmEnLCAnTm9ydGggRGFrb3RhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ08nLFxuICAgIG5hbWVzOiBbJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1AnLFxuICAgIG5hbWVzOiBbJ1Blbm5zeWx2YW5pYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdSJyxcbiAgICBuYW1lczogWydSaG9kZSBJc2xhbmQnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnUycsXG4gICAgbmFtZXM6IFsnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1QnLFxuICAgIG5hbWVzOiBbJ1Rlbm5lc3NlZScsICdUZXhhcyddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdVJyxcbiAgICBuYW1lczogWydVdGFoJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1YnLFxuICAgIG5hbWVzOiBbJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnVycsXG4gICAgbmFtZXM6IFsnV2FzaGluZ3RvbicsICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ11cbiAgfV07XG5cbiAgc3RhdGVHcm91cE9wdGlvbnM6IE9ic2VydmFibGU8U3RhdGVHcm91cFtdPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdGF0ZUdyb3VwT3B0aW9ucyA9IHRoaXMuc3RhdGVGb3JtLmdldCgnc3RhdGVHcm91cCcpIS52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyR3JvdXAodmFsdWUpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckdyb3VwKHZhbHVlOiBzdHJpbmcpOiBTdGF0ZUdyb3VwW10ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGVHcm91cHNcbiAgICAgICAgLm1hcChncm91cCA9PiAoe2xldHRlcjogZ3JvdXAubGV0dGVyLCBuYW1lczogX2ZpbHRlcihncm91cC5uYW1lcywgdmFsdWUpfSkpXG4gICAgICAgIC5maWx0ZXIoZ3JvdXAgPT4gZ3JvdXAubmFtZXMubGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVHcm91cHM7XG4gIH1cbn1cbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwic3RhdGVGb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlN0YXRlcyBHcm91cFwiIGZvcm1Db250cm9sTmFtZT1cInN0YXRlR3JvdXBcIiByZXF1aXJlZCBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9Hcm91cFwiPlxuICAgICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG9Hcm91cD1cIm1hdEF1dG9jb21wbGV0ZVwiPlxuICAgICAgICA8bWF0LW9wdGdyb3VwICpuZ0Zvcj1cImxldCBncm91cCBvZiBzdGF0ZUdyb3VwT3B0aW9ucyB8IGFzeW5jXCIgW2xhYmVsXT1cImdyb3VwLmxldHRlclwiPlxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBuYW1lIG9mIGdyb3VwLm5hbWVzXCIgW3ZhbHVlXT1cIm5hbWVcIj5cbiAgICAgICAgICAgIHt7bmFtZX19XG4gICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtb3B0Z3JvdXA+XG4gICAgPC9tYXQtYXV0b2NvbXBsZXRlPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9mb3JtPlxuIl19