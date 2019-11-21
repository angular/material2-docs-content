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
    var name_r13 = ctx.$implicit;
    i0.ɵɵproperty("value", name_r13);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", name_r13, " ");
} }
function AutocompleteOptgroupExample_mat_optgroup_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-optgroup", 4);
    i0.ɵɵtemplate(1, AutocompleteOptgroupExample_mat_optgroup_5_mat_option_1_Template, 2, 2, "mat-option", 5);
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
    AutocompleteOptgroupExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompleteOptgroupExample, selectors: [["autocomplete-optgroup-example"]], decls: 7, vars: 5, consts: [[3, "formGroup"], ["type", "text", "matInput", "", "placeholder", "States Group", "formControlName", "stateGroup", "required", "", 3, "matAutocomplete"], ["autoGroup", "matAutocomplete"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteOptgroupExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutocompleteOptgroupExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-optgroup-example',
                templateUrl: './autocomplete-optgroup-example.html',
                styleUrls: ['./autocomplete-optgroup-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0VwQyxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRmdDLGdDQUFjO0lBQ3pELGVBQ0Y7SUFERSx5Q0FDRjs7O0lBSEYsdUNBQ0U7SUFBQSx5R0FDRTtJQUVOLGlCQUFlOzs7SUFKaUQsd0NBQXNCO0lBQ3RFLGVBQWdDO0lBQWhDLHlDQUFnQzs7QURLdEQsTUFBTSxDQUFDLElBQU0sT0FBTyxHQUFHLFVBQUMsR0FBYSxFQUFFLEtBQWE7SUFDbEQsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRXhDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUE3QyxDQUE2QyxDQUFD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QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7c3RhcnRXaXRoLCBtYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZUdyb3VwIHtcbiAgbGV0dGVyOiBzdHJpbmc7XG4gIG5hbWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IF9maWx0ZXIgPSAob3B0OiBzdHJpbmdbXSwgdmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gIHJldHVybiBvcHQuZmlsdGVyKGl0ZW0gPT4gaXRlbS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUpID09PSAwKTtcbn07XG5cbi8qKlxuICogQHRpdGxlIE9wdGlvbiBncm91cHMgYXV0b2NvbXBsZXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVPcHRncm91cEV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0ZUZvcm06IEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICBzdGF0ZUdyb3VwOiAnJyxcbiAgfSk7XG5cbiAgc3RhdGVHcm91cHM6IFN0YXRlR3JvdXBbXSA9IFt7XG4gICAgbGV0dGVyOiAnQScsXG4gICAgbmFtZXM6IFsnQWxhYmFtYScsICdBbGFza2EnLCAnQXJpem9uYScsICdBcmthbnNhcyddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdDJyxcbiAgICBuYW1lczogWydDYWxpZm9ybmlhJywgJ0NvbG9yYWRvJywgJ0Nvbm5lY3RpY3V0J11cbiAgfSwge1xuICAgIGxldHRlcjogJ0QnLFxuICAgIG5hbWVzOiBbJ0RlbGF3YXJlJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0YnLFxuICAgIG5hbWVzOiBbJ0Zsb3JpZGEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnRycsXG4gICAgbmFtZXM6IFsnR2VvcmdpYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdIJyxcbiAgICBuYW1lczogWydIYXdhaWknXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnSScsXG4gICAgbmFtZXM6IFsnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0snLFxuICAgIG5hbWVzOiBbJ0thbnNhcycsICdLZW50dWNreSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdMJyxcbiAgICBuYW1lczogWydMb3Vpc2lhbmEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnTScsXG4gICAgbmFtZXM6IFsnTWFpbmUnLCAnTWFyeWxhbmQnLCAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsXG4gICAgICAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJywgJ01pc3NvdXJpJywgJ01vbnRhbmEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnTicsXG4gICAgbmFtZXM6IFsnTmVicmFza2EnLCAnTmV2YWRhJywgJ05ldyBIYW1wc2hpcmUnLCAnTmV3IEplcnNleScsXG4gICAgICAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBDYXJvbGluYScsICdOb3J0aCBEYWtvdGEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnTycsXG4gICAgbmFtZXM6IFsnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnUCcsXG4gICAgbmFtZXM6IFsnUGVubnN5bHZhbmlhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1InLFxuICAgIG5hbWVzOiBbJ1Job2RlIElzbGFuZCddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdTJyxcbiAgICBuYW1lczogWydTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnVCcsXG4gICAgbmFtZXM6IFsnVGVubmVzc2VlJywgJ1RleGFzJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1UnLFxuICAgIG5hbWVzOiBbJ1V0YWgnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnVicsXG4gICAgbmFtZXM6IFsnVmVybW9udCcsICdWaXJnaW5pYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdXJyxcbiAgICBuYW1lczogWydXYXNoaW5ndG9uJywgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXVxuICB9XTtcblxuICBzdGF0ZUdyb3VwT3B0aW9uczogT2JzZXJ2YWJsZTxTdGF0ZUdyb3VwW10+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0YXRlR3JvdXBPcHRpb25zID0gdGhpcy5zdGF0ZUZvcm0uZ2V0KCdzdGF0ZUdyb3VwJykhLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXJHcm91cCh2YWx1ZSkpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyR3JvdXAodmFsdWU6IHN0cmluZyk6IFN0YXRlR3JvdXBbXSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZUdyb3Vwc1xuICAgICAgICAubWFwKGdyb3VwID0+ICh7bGV0dGVyOiBncm91cC5sZXR0ZXIsIG5hbWVzOiBfZmlsdGVyKGdyb3VwLm5hbWVzLCB2YWx1ZSl9KSlcbiAgICAgICAgLmZpbHRlcihncm91cCA9PiBncm91cC5uYW1lcy5sZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZUdyb3VwcztcbiAgfVxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJzdGF0ZUZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU3RhdGVzIEdyb3VwXCIgZm9ybUNvbnRyb2xOYW1lPVwic3RhdGVHcm91cFwiIHJlcXVpcmVkIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b0dyb3VwXCI+XG4gICAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0b0dyb3VwPVwibWF0QXV0b2NvbXBsZXRlXCI+XG4gICAgICAgIDxtYXQtb3B0Z3JvdXAgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHN0YXRlR3JvdXBPcHRpb25zIHwgYXN5bmNcIiBbbGFiZWxdPVwiZ3JvdXAubGV0dGVyXCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG5hbWUgb2YgZ3JvdXAubmFtZXNcIiBbdmFsdWVdPVwibmFtZVwiPlxuICAgICAgICAgICAge3tuYW1lfX1cbiAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1vcHRncm91cD5cbiAgICA8L21hdC1hdXRvY29tcGxldGU+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=