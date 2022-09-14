import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/autocomplete";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
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
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges.pipe(startWith(''), map(value => this._filterGroup(value || '')));
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
AutocompleteOptgroupExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: AutocompleteOptgroupExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
AutocompleteOptgroupExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: AutocompleteOptgroupExample, selector: "autocomplete-optgroup-example", ngImport: i0, template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>States Group</mat-label>\n    <input type=\"text\"\n           matInput\n           formControlName=\"stateGroup\"\n           required\n           [matAutocomplete]=\"autoGroup\">\n<!-- #docregion mat-autocomplete -->\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i4.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { kind: "directive", type: i3.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: AutocompleteOptgroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-optgroup-example', template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>States Group</mat-label>\n    <input type=\"text\"\n           matInput\n           formControlName=\"stateGroup\"\n           required\n           [matAutocomplete]=\"autoGroup\">\n<!-- #docregion mat-autocomplete -->\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0FBTzlDLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQWEsRUFBRSxLQUFhLEVBQVksRUFBRTtJQUNoRSxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFeEMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLENBQUMsQ0FBQztBQUVGOztHQUVHO0FBS0gsTUFBTSxPQUFPLDJCQUEyQjtJQXdHdEMsWUFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUF2RzdDLGNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNsQyxVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUMsQ0FBQztRQUVI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QUMsS0FBYTtRQUNoQyxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDLFdBQVc7aUJBQ3BCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUMxRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1QztRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzsrSEF6SFUsMkJBQTJCO21IQUEzQiwyQkFBMkIscUVDdkJ4Qyxxc0JBbUJBO2tHRElhLDJCQUEyQjtrQkFKdkMsU0FBUzsrQkFDRSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3N0YXJ0V2l0aCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVHcm91cCB7XG4gIGxldHRlcjogc3RyaW5nO1xuICBuYW1lczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBfZmlsdGVyID0gKG9wdDogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4gb3B0LmZpbHRlcihpdGVtID0+IGl0ZW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xufTtcblxuLyoqXG4gKiBAdGl0bGUgT3B0aW9uIGdyb3VwcyBhdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVPcHRncm91cEV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0ZUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgc3RhdGVHcm91cDogJycsXG4gIH0pO1xuXG4gIHN0YXRlR3JvdXBzOiBTdGF0ZUdyb3VwW10gPSBbXG4gICAge1xuICAgICAgbGV0dGVyOiAnQScsXG4gICAgICBuYW1lczogWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdDJyxcbiAgICAgIG5hbWVzOiBbJ0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLCAnQ29ubmVjdGljdXQnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ0QnLFxuICAgICAgbmFtZXM6IFsnRGVsYXdhcmUnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ0YnLFxuICAgICAgbmFtZXM6IFsnRmxvcmlkYSddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnRycsXG4gICAgICBuYW1lczogWydHZW9yZ2lhJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdIJyxcbiAgICAgIG5hbWVzOiBbJ0hhd2FpaSddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnSScsXG4gICAgICBuYW1lczogWydJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ0snLFxuICAgICAgbmFtZXM6IFsnS2Fuc2FzJywgJ0tlbnR1Y2t5J10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdMJyxcbiAgICAgIG5hbWVzOiBbJ0xvdWlzaWFuYSddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnTScsXG4gICAgICBuYW1lczogW1xuICAgICAgICAnTWFpbmUnLFxuICAgICAgICAnTWFyeWxhbmQnLFxuICAgICAgICAnTWFzc2FjaHVzZXR0cycsXG4gICAgICAgICdNaWNoaWdhbicsXG4gICAgICAgICdNaW5uZXNvdGEnLFxuICAgICAgICAnTWlzc2lzc2lwcGknLFxuICAgICAgICAnTWlzc291cmknLFxuICAgICAgICAnTW9udGFuYScsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnTicsXG4gICAgICBuYW1lczogW1xuICAgICAgICAnTmVicmFza2EnLFxuICAgICAgICAnTmV2YWRhJyxcbiAgICAgICAgJ05ldyBIYW1wc2hpcmUnLFxuICAgICAgICAnTmV3IEplcnNleScsXG4gICAgICAgICdOZXcgTWV4aWNvJyxcbiAgICAgICAgJ05ldyBZb3JrJyxcbiAgICAgICAgJ05vcnRoIENhcm9saW5hJyxcbiAgICAgICAgJ05vcnRoIERha290YScsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnTycsXG4gICAgICBuYW1lczogWydPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbiddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnUCcsXG4gICAgICBuYW1lczogWydQZW5uc3lsdmFuaWEnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ1InLFxuICAgICAgbmFtZXM6IFsnUmhvZGUgSXNsYW5kJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdTJyxcbiAgICAgIG5hbWVzOiBbJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YSddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnVCcsXG4gICAgICBuYW1lczogWydUZW5uZXNzZWUnLCAnVGV4YXMnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ1UnLFxuICAgICAgbmFtZXM6IFsnVXRhaCddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnVicsXG4gICAgICBuYW1lczogWydWZXJtb250JywgJ1ZpcmdpbmlhJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdXJyxcbiAgICAgIG5hbWVzOiBbJ1dhc2hpbmd0b24nLCAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZyddLFxuICAgIH0sXG4gIF07XG5cbiAgc3RhdGVHcm91cE9wdGlvbnM6IE9ic2VydmFibGU8U3RhdGVHcm91cFtdPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdGF0ZUdyb3VwT3B0aW9ucyA9IHRoaXMuc3RhdGVGb3JtLmdldCgnc3RhdGVHcm91cCcpIS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyR3JvdXAodmFsdWUgfHwgJycpKSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyR3JvdXAodmFsdWU6IHN0cmluZyk6IFN0YXRlR3JvdXBbXSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZUdyb3Vwc1xuICAgICAgICAubWFwKGdyb3VwID0+ICh7bGV0dGVyOiBncm91cC5sZXR0ZXIsIG5hbWVzOiBfZmlsdGVyKGdyb3VwLm5hbWVzLCB2YWx1ZSl9KSlcbiAgICAgICAgLmZpbHRlcihncm91cCA9PiBncm91cC5uYW1lcy5sZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZUdyb3VwcztcbiAgfVxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJzdGF0ZUZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5TdGF0ZXMgR3JvdXA8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzdGF0ZUdyb3VwXCJcbiAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvR3JvdXBcIj5cbjwhLS0gI2RvY3JlZ2lvbiBtYXQtYXV0b2NvbXBsZXRlIC0tPlxuICAgICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG9Hcm91cD1cIm1hdEF1dG9jb21wbGV0ZVwiPlxuICAgICAgICA8bWF0LW9wdGdyb3VwICpuZ0Zvcj1cImxldCBncm91cCBvZiBzdGF0ZUdyb3VwT3B0aW9ucyB8IGFzeW5jXCIgW2xhYmVsXT1cImdyb3VwLmxldHRlclwiPlxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBuYW1lIG9mIGdyb3VwLm5hbWVzXCIgW3ZhbHVlXT1cIm5hbWVcIj5cbiAgICAgICAgICAgIHt7bmFtZX19XG4gICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtb3B0Z3JvdXA+XG4gICAgPC9tYXQtYXV0b2NvbXBsZXRlPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1hdXRvY29tcGxldGUgLS0+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=