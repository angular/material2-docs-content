import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/autocomplete";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/common";
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
        this.stateGroups = [
            {
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
            },
            {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut'],
            },
            {
                letter: 'D',
                names: ['Delaware'],
            },
            {
                letter: 'F',
                names: ['Florida'],
            },
            {
                letter: 'G',
                names: ['Georgia'],
            },
            {
                letter: 'H',
                names: ['Hawaii'],
            },
            {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
            },
            {
                letter: 'K',
                names: ['Kansas', 'Kentucky'],
            },
            {
                letter: 'L',
                names: ['Louisiana'],
            },
            {
                letter: 'M',
                names: [
                    'Maine',
                    'Maryland',
                    'Massachusetts',
                    'Michigan',
                    'Minnesota',
                    'Mississippi',
                    'Missouri',
                    'Montana',
                ],
            },
            {
                letter: 'N',
                names: [
                    'Nebraska',
                    'Nevada',
                    'New Hampshire',
                    'New Jersey',
                    'New Mexico',
                    'New York',
                    'North Carolina',
                    'North Dakota',
                ],
            },
            {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon'],
            },
            {
                letter: 'P',
                names: ['Pennsylvania'],
            },
            {
                letter: 'R',
                names: ['Rhode Island'],
            },
            {
                letter: 'S',
                names: ['South Carolina', 'South Dakota'],
            },
            {
                letter: 'T',
                names: ['Tennessee', 'Texas'],
            },
            {
                letter: 'U',
                names: ['Utah'],
            },
            {
                letter: 'V',
                names: ['Vermont', 'Virginia'],
            },
            {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
            },
        ];
    }
    ngOnInit() {
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges.pipe(startWith(''), map(value => this._filterGroup(value)));
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
AutocompleteOptgroupExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: AutocompleteOptgroupExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
AutocompleteOptgroupExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-rc.1", type: AutocompleteOptgroupExample, selector: "autocomplete-optgroup-example", ngImport: i0, template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>States Group</mat-label>\n    <input type=\"text\"\n           matInput\n           formControlName=\"stateGroup\"\n           required\n           [matAutocomplete]=\"autoGroup\">\n<!-- #docregion mat-autocomplete -->\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n", components: [{ type: i2.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i3.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i4.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { type: i4.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.MatLabel, selector: "mat-label" }, { type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i6.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: AutocompleteOptgroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-optgroup-example', template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>States Group</mat-label>\n    <input type=\"text\"\n           matInput\n           formControlName=\"stateGroup\"\n           required\n           [matAutocomplete]=\"autoGroup\">\n<!-- #docregion mat-autocomplete -->\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0FBTzlDLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQWEsRUFBRSxLQUFhLEVBQVksRUFBRTtJQUNoRSxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFeEMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLENBQUMsQ0FBQztBQUVGOztHQUVHO0FBS0gsTUFBTSxPQUFPLDJCQUEyQjtJQXdHdEMsWUFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUF2RzdDLGNBQVMsR0FBYyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM3QyxVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUMsQ0FBQztRQUVI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Q2hDLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVztpQkFDcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUM7aUJBQzFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7OzZIQXpIVSwyQkFBMkI7aUhBQTNCLDJCQUEyQixxRUN2QnhDLHFzQkFtQkE7Z0dESWEsMkJBQTJCO2tCQUp2QyxTQUFTOytCQUNFLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtzdGFydFdpdGgsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlR3JvdXAge1xuICBsZXR0ZXI6IHN0cmluZztcbiAgbmFtZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgX2ZpbHRlciA9IChvcHQ6IHN0cmluZ1tdLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIG9wdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcbn07XG5cbi8qKlxuICogQHRpdGxlIE9wdGlvbiBncm91cHMgYXV0b2NvbXBsZXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVPcHRncm91cEV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0ZUZvcm06IEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICBzdGF0ZUdyb3VwOiAnJyxcbiAgfSk7XG5cbiAgc3RhdGVHcm91cHM6IFN0YXRlR3JvdXBbXSA9IFtcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdBJyxcbiAgICAgIG5hbWVzOiBbJ0FsYWJhbWEnLCAnQWxhc2thJywgJ0FyaXpvbmEnLCAnQXJrYW5zYXMnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ0MnLFxuICAgICAgbmFtZXM6IFsnQ2FsaWZvcm5pYScsICdDb2xvcmFkbycsICdDb25uZWN0aWN1dCddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnRCcsXG4gICAgICBuYW1lczogWydEZWxhd2FyZSddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnRicsXG4gICAgICBuYW1lczogWydGbG9yaWRhJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdHJyxcbiAgICAgIG5hbWVzOiBbJ0dlb3JnaWEnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ0gnLFxuICAgICAgbmFtZXM6IFsnSGF3YWlpJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdJJyxcbiAgICAgIG5hbWVzOiBbJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YSddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnSycsXG4gICAgICBuYW1lczogWydLYW5zYXMnLCAnS2VudHVja3knXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ0wnLFxuICAgICAgbmFtZXM6IFsnTG91aXNpYW5hJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdNJyxcbiAgICAgIG5hbWVzOiBbXG4gICAgICAgICdNYWluZScsXG4gICAgICAgICdNYXJ5bGFuZCcsXG4gICAgICAgICdNYXNzYWNodXNldHRzJyxcbiAgICAgICAgJ01pY2hpZ2FuJyxcbiAgICAgICAgJ01pbm5lc290YScsXG4gICAgICAgICdNaXNzaXNzaXBwaScsXG4gICAgICAgICdNaXNzb3VyaScsXG4gICAgICAgICdNb250YW5hJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdOJyxcbiAgICAgIG5hbWVzOiBbXG4gICAgICAgICdOZWJyYXNrYScsXG4gICAgICAgICdOZXZhZGEnLFxuICAgICAgICAnTmV3IEhhbXBzaGlyZScsXG4gICAgICAgICdOZXcgSmVyc2V5JyxcbiAgICAgICAgJ05ldyBNZXhpY28nLFxuICAgICAgICAnTmV3IFlvcmsnLFxuICAgICAgICAnTm9ydGggQ2Fyb2xpbmEnLFxuICAgICAgICAnTm9ydGggRGFrb3RhJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdPJyxcbiAgICAgIG5hbWVzOiBbJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdQJyxcbiAgICAgIG5hbWVzOiBbJ1Blbm5zeWx2YW5pYSddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnUicsXG4gICAgICBuYW1lczogWydSaG9kZSBJc2xhbmQnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ1MnLFxuICAgICAgbmFtZXM6IFsnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdUJyxcbiAgICAgIG5hbWVzOiBbJ1Rlbm5lc3NlZScsICdUZXhhcyddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnVScsXG4gICAgICBuYW1lczogWydVdGFoJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdWJyxcbiAgICAgIG5hbWVzOiBbJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ1cnLFxuICAgICAgbmFtZXM6IFsnV2FzaGluZ3RvbicsICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ10sXG4gICAgfSxcbiAgXTtcblxuICBzdGF0ZUdyb3VwT3B0aW9uczogT2JzZXJ2YWJsZTxTdGF0ZUdyb3VwW10+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0YXRlR3JvdXBPcHRpb25zID0gdGhpcy5zdGF0ZUZvcm0uZ2V0KCdzdGF0ZUdyb3VwJykhLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXJHcm91cCh2YWx1ZSkpLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJHcm91cCh2YWx1ZTogc3RyaW5nKTogU3RhdGVHcm91cFtdIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlR3JvdXBzXG4gICAgICAgIC5tYXAoZ3JvdXAgPT4gKHtsZXR0ZXI6IGdyb3VwLmxldHRlciwgbmFtZXM6IF9maWx0ZXIoZ3JvdXAubmFtZXMsIHZhbHVlKX0pKVxuICAgICAgICAuZmlsdGVyKGdyb3VwID0+IGdyb3VwLm5hbWVzLmxlbmd0aCA+IDApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXRlR3JvdXBzO1xuICB9XG59XG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cInN0YXRlRm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPlN0YXRlcyBHcm91cDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN0YXRlR3JvdXBcIlxuICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9Hcm91cFwiPlxuPCEtLSAjZG9jcmVnaW9uIG1hdC1hdXRvY29tcGxldGUgLS0+XG4gICAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0b0dyb3VwPVwibWF0QXV0b2NvbXBsZXRlXCI+XG4gICAgICAgIDxtYXQtb3B0Z3JvdXAgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHN0YXRlR3JvdXBPcHRpb25zIHwgYXN5bmNcIiBbbGFiZWxdPVwiZ3JvdXAubGV0dGVyXCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG5hbWUgb2YgZ3JvdXAubmFtZXNcIiBbdmFsdWVdPVwibmFtZVwiPlxuICAgICAgICAgICAge3tuYW1lfX1cbiAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1vcHRncm91cD5cbiAgICA8L21hdC1hdXRvY29tcGxldGU+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWF1dG9jb21wbGV0ZSAtLT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==