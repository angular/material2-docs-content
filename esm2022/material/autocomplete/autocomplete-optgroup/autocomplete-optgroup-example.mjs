import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/core";
export const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().includes(filterValue));
};
/**
 * @title Option groups autocomplete
 */
class AutocompleteOptgroupExample {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: AutocompleteOptgroupExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: AutocompleteOptgroupExample, isStandalone: true, selector: "autocomplete-optgroup-example", ngImport: i0, template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field>\n    <mat-label>States Group</mat-label>\n    <input type=\"text\"\n           matInput\n           formControlName=\"stateGroup\"\n           required\n           [matAutocomplete]=\"autoGroup\">\n<!-- #docregion mat-autocomplete -->\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i5.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
export { AutocompleteOptgroupExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: AutocompleteOptgroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-optgroup-example', standalone: true, imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        NgFor,
                        AsyncPipe,
                    ], template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field>\n    <mat-label>States Group</mat-label>\n    <input type=\"text\"\n           matInput\n           formControlName=\"stateGroup\"\n           required\n           [matAutocomplete]=\"autoGroup\">\n<!-- #docregion mat-autocomplete -->\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RSxPQUFPLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0FBT2hFLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQWEsRUFBRSxLQUFhLEVBQVksRUFBRTtJQUNoRSxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFeEMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEs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QUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDMUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQzdDLENBQUM7SUFDSixDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQWE7UUFDaEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxXQUFXO2lCQUNwQixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQztpQkFDMUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs4R0F6SFUsMkJBQTJCO2tHQUEzQiwyQkFBMkIseUZDckN4QyxpckJBbUJBLDJDRFNJLFdBQVcsdzNCQUNYLG1CQUFtQiwrVUFDbkIsa0JBQWtCLDBTQUNsQixjQUFjLDBXQUNkLHFCQUFxQix5akJBQ3JCLEtBQUssOEdBQ0wsU0FBUzs7U0FHQSwyQkFBMkI7MkZBQTNCLDJCQUEyQjtrQkFkdkMsU0FBUzsrQkFDRSwrQkFBK0IsY0FFN0IsSUFBSSxXQUNQO3dCQUNQLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixLQUFLO3dCQUNMLFNBQVM7cUJBQ1YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtzdGFydFdpdGgsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtOZ0ZvciwgQXN5bmNQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRBdXRvY29tcGxldGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVHcm91cCB7XG4gIGxldHRlcjogc3RyaW5nO1xuICBuYW1lczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBfZmlsdGVyID0gKG9wdDogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4gb3B0LmZpbHRlcihpdGVtID0+IGl0ZW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xufTtcblxuLyoqXG4gKiBAdGl0bGUgT3B0aW9uIGdyb3VwcyBhdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE5nRm9yLFxuICAgIEFzeW5jUGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlT3B0Z3JvdXBFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGVGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIHN0YXRlR3JvdXA6ICcnLFxuICB9KTtcblxuICBzdGF0ZUdyb3VwczogU3RhdGVHcm91cFtdID0gW1xuICAgIHtcbiAgICAgIGxldHRlcjogJ0EnLFxuICAgICAgbmFtZXM6IFsnQWxhYmFtYScsICdBbGFza2EnLCAnQXJpem9uYScsICdBcmthbnNhcyddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnQycsXG4gICAgICBuYW1lczogWydDYWxpZm9ybmlhJywgJ0NvbG9yYWRvJywgJ0Nvbm5lY3RpY3V0J10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdEJyxcbiAgICAgIG5hbWVzOiBbJ0RlbGF3YXJlJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdGJyxcbiAgICAgIG5hbWVzOiBbJ0Zsb3JpZGEnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ0cnLFxuICAgICAgbmFtZXM6IFsnR2VvcmdpYSddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnSCcsXG4gICAgICBuYW1lczogWydIYXdhaWknXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ0knLFxuICAgICAgbmFtZXM6IFsnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdLJyxcbiAgICAgIG5hbWVzOiBbJ0thbnNhcycsICdLZW50dWNreSddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnTCcsXG4gICAgICBuYW1lczogWydMb3Vpc2lhbmEnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ00nLFxuICAgICAgbmFtZXM6IFtcbiAgICAgICAgJ01haW5lJyxcbiAgICAgICAgJ01hcnlsYW5kJyxcbiAgICAgICAgJ01hc3NhY2h1c2V0dHMnLFxuICAgICAgICAnTWljaGlnYW4nLFxuICAgICAgICAnTWlubmVzb3RhJyxcbiAgICAgICAgJ01pc3Npc3NpcHBpJyxcbiAgICAgICAgJ01pc3NvdXJpJyxcbiAgICAgICAgJ01vbnRhbmEnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ04nLFxuICAgICAgbmFtZXM6IFtcbiAgICAgICAgJ05lYnJhc2thJyxcbiAgICAgICAgJ05ldmFkYScsXG4gICAgICAgICdOZXcgSGFtcHNoaXJlJyxcbiAgICAgICAgJ05ldyBKZXJzZXknLFxuICAgICAgICAnTmV3IE1leGljbycsXG4gICAgICAgICdOZXcgWW9yaycsXG4gICAgICAgICdOb3J0aCBDYXJvbGluYScsXG4gICAgICAgICdOb3J0aCBEYWtvdGEnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ08nLFxuICAgICAgbmFtZXM6IFsnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ1AnLFxuICAgICAgbmFtZXM6IFsnUGVubnN5bHZhbmlhJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdSJyxcbiAgICAgIG5hbWVzOiBbJ1Job2RlIElzbGFuZCddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnUycsXG4gICAgICBuYW1lczogWydTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ1QnLFxuICAgICAgbmFtZXM6IFsnVGVubmVzc2VlJywgJ1RleGFzJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdVJyxcbiAgICAgIG5hbWVzOiBbJ1V0YWgnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ1YnLFxuICAgICAgbmFtZXM6IFsnVmVybW9udCcsICdWaXJnaW5pYSddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnVycsXG4gICAgICBuYW1lczogWydXYXNoaW5ndG9uJywgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXSxcbiAgICB9LFxuICBdO1xuXG4gIHN0YXRlR3JvdXBPcHRpb25zOiBPYnNlcnZhYmxlPFN0YXRlR3JvdXBbXT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3RhdGVHcm91cE9wdGlvbnMgPSB0aGlzLnN0YXRlRm9ybS5nZXQoJ3N0YXRlR3JvdXAnKSEudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlckdyb3VwKHZhbHVlIHx8ICcnKSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckdyb3VwKHZhbHVlOiBzdHJpbmcpOiBTdGF0ZUdyb3VwW10ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGVHcm91cHNcbiAgICAgICAgLm1hcChncm91cCA9PiAoe2xldHRlcjogZ3JvdXAubGV0dGVyLCBuYW1lczogX2ZpbHRlcihncm91cC5uYW1lcywgdmFsdWUpfSkpXG4gICAgICAgIC5maWx0ZXIoZ3JvdXAgPT4gZ3JvdXAubmFtZXMubGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVHcm91cHM7XG4gIH1cbn1cbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwic3RhdGVGb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPlN0YXRlcyBHcm91cDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN0YXRlR3JvdXBcIlxuICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9Hcm91cFwiPlxuPCEtLSAjZG9jcmVnaW9uIG1hdC1hdXRvY29tcGxldGUgLS0+XG4gICAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0b0dyb3VwPVwibWF0QXV0b2NvbXBsZXRlXCI+XG4gICAgICAgIDxtYXQtb3B0Z3JvdXAgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHN0YXRlR3JvdXBPcHRpb25zIHwgYXN5bmNcIiBbbGFiZWxdPVwiZ3JvdXAubGV0dGVyXCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG5hbWUgb2YgZ3JvdXAubmFtZXNcIiBbdmFsdWVdPVwibmFtZVwiPlxuICAgICAgICAgICAge3tuYW1lfX1cbiAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1vcHRncm91cD5cbiAgICA8L21hdC1hdXRvY29tcGxldGU+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWF1dG9jb21wbGV0ZSAtLT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==