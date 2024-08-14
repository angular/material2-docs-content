import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
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
export class AutocompleteOptgroupExample {
    constructor() {
        this._formBuilder = inject(FormBuilder);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: AutocompleteOptgroupExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.0-next.2", type: AutocompleteOptgroupExample, isStandalone: true, selector: "autocomplete-optgroup-example", ngImport: i0, template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field>\n    <mat-label>States Group</mat-label>\n    <input type=\"text\"\n           matInput\n           formControlName=\"stateGroup\"\n           required\n           [matAutocomplete]=\"autoGroup\">\n<!-- #docregion mat-autocomplete -->\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        @for (group of stateGroupOptions | async; track group) {\n          <mat-optgroup [label]=\"group.letter\">\n            @for (name of group.names; track name) {\n              <mat-option [value]=\"name\">{{name}}</mat-option>\n            }\n          </mat-optgroup>\n        }\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: i5.MatOptgroup, selector: "mat-optgroup", inputs: ["label", "disabled"], exportAs: ["matOptgroup"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: AutocompleteOptgroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-optgroup-example', standalone: true, imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        AsyncPipe,
                    ], template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field>\n    <mat-label>States Group</mat-label>\n    <input type=\"text\"\n           matInput\n           formControlName=\"stateGroup\"\n           required\n           [matAutocomplete]=\"autoGroup\">\n<!-- #docregion mat-autocomplete -->\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        @for (group of stateGroupOptions | async; track group) {\n          <mat-optgroup [label]=\"group.letter\">\n            @for (name of group.names; track name) {\n              <mat-option [value]=\"name\">{{name}}</mat-option>\n            }\n          </mat-optgroup>\n        }\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0UsT0FBTyxFQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0FBT2hFLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQWEsRUFBRSxLQUFhLEVBQVksRUFBRTtJQUNoRSxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFeEMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEs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QUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDMUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQzdDLENBQUM7SUFDSixDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQWE7UUFDaEMsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVc7aUJBQ3BCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUMxRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7cUhBekhVLDJCQUEyQjt5R0FBM0IsMkJBQTJCLHlGQ3BDeEMsOHRCQXFCQSwyQ0RPSSxXQUFXLHczQkFDWCxtQkFBbUIsK1VBQ25CLGtCQUFrQiwwU0FDbEIsY0FBYyxpWUFDZCxxQkFBcUIscTlCQUNyQixTQUFTOztrR0FHQSwyQkFBMkI7a0JBYnZDLFNBQVM7K0JBQ0UsK0JBQStCLGNBRTdCLElBQUksV0FDUDt3QkFDUCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLHFCQUFxQjt3QkFDckIsU0FBUztxQkFDViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7c3RhcnRXaXRoLCBtYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXN5bmNQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRBdXRvY29tcGxldGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVHcm91cCB7XG4gIGxldHRlcjogc3RyaW5nO1xuICBuYW1lczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBfZmlsdGVyID0gKG9wdDogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4gb3B0LmZpbHRlcihpdGVtID0+IGl0ZW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xufTtcblxuLyoqXG4gKiBAdGl0bGUgT3B0aW9uIGdyb3VwcyBhdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIEFzeW5jUGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlT3B0Z3JvdXBFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZm9ybUJ1aWxkZXIgPSBpbmplY3QoRm9ybUJ1aWxkZXIpO1xuXG4gIHN0YXRlRm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICBzdGF0ZUdyb3VwOiAnJyxcbiAgfSk7XG5cbiAgc3RhdGVHcm91cHM6IFN0YXRlR3JvdXBbXSA9IFtcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdBJyxcbiAgICAgIG5hbWVzOiBbJ0FsYWJhbWEnLCAnQWxhc2thJywgJ0FyaXpvbmEnLCAnQXJrYW5zYXMnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ0MnLFxuICAgICAgbmFtZXM6IFsnQ2FsaWZvcm5pYScsICdDb2xvcmFkbycsICdDb25uZWN0aWN1dCddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnRCcsXG4gICAgICBuYW1lczogWydEZWxhd2FyZSddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnRicsXG4gICAgICBuYW1lczogWydGbG9yaWRhJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdHJyxcbiAgICAgIG5hbWVzOiBbJ0dlb3JnaWEnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ0gnLFxuICAgICAgbmFtZXM6IFsnSGF3YWlpJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdJJyxcbiAgICAgIG5hbWVzOiBbJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YSddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnSycsXG4gICAgICBuYW1lczogWydLYW5zYXMnLCAnS2VudHVja3knXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ0wnLFxuICAgICAgbmFtZXM6IFsnTG91aXNpYW5hJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdNJyxcbiAgICAgIG5hbWVzOiBbXG4gICAgICAgICdNYWluZScsXG4gICAgICAgICdNYXJ5bGFuZCcsXG4gICAgICAgICdNYXNzYWNodXNldHRzJyxcbiAgICAgICAgJ01pY2hpZ2FuJyxcbiAgICAgICAgJ01pbm5lc290YScsXG4gICAgICAgICdNaXNzaXNzaXBwaScsXG4gICAgICAgICdNaXNzb3VyaScsXG4gICAgICAgICdNb250YW5hJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdOJyxcbiAgICAgIG5hbWVzOiBbXG4gICAgICAgICdOZWJyYXNrYScsXG4gICAgICAgICdOZXZhZGEnLFxuICAgICAgICAnTmV3IEhhbXBzaGlyZScsXG4gICAgICAgICdOZXcgSmVyc2V5JyxcbiAgICAgICAgJ05ldyBNZXhpY28nLFxuICAgICAgICAnTmV3IFlvcmsnLFxuICAgICAgICAnTm9ydGggQ2Fyb2xpbmEnLFxuICAgICAgICAnTm9ydGggRGFrb3RhJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdPJyxcbiAgICAgIG5hbWVzOiBbJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdQJyxcbiAgICAgIG5hbWVzOiBbJ1Blbm5zeWx2YW5pYSddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnUicsXG4gICAgICBuYW1lczogWydSaG9kZSBJc2xhbmQnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ1MnLFxuICAgICAgbmFtZXM6IFsnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdUJyxcbiAgICAgIG5hbWVzOiBbJ1Rlbm5lc3NlZScsICdUZXhhcyddLFxuICAgIH0sXG4gICAge1xuICAgICAgbGV0dGVyOiAnVScsXG4gICAgICBuYW1lczogWydVdGFoJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsZXR0ZXI6ICdWJyxcbiAgICAgIG5hbWVzOiBbJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxldHRlcjogJ1cnLFxuICAgICAgbmFtZXM6IFsnV2FzaGluZ3RvbicsICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ10sXG4gICAgfSxcbiAgXTtcblxuICBzdGF0ZUdyb3VwT3B0aW9uczogT2JzZXJ2YWJsZTxTdGF0ZUdyb3VwW10+O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3RhdGVHcm91cE9wdGlvbnMgPSB0aGlzLnN0YXRlRm9ybS5nZXQoJ3N0YXRlR3JvdXAnKSEudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlckdyb3VwKHZhbHVlIHx8ICcnKSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckdyb3VwKHZhbHVlOiBzdHJpbmcpOiBTdGF0ZUdyb3VwW10ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGVHcm91cHNcbiAgICAgICAgLm1hcChncm91cCA9PiAoe2xldHRlcjogZ3JvdXAubGV0dGVyLCBuYW1lczogX2ZpbHRlcihncm91cC5uYW1lcywgdmFsdWUpfSkpXG4gICAgICAgIC5maWx0ZXIoZ3JvdXAgPT4gZ3JvdXAubmFtZXMubGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVHcm91cHM7XG4gIH1cbn1cbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwic3RhdGVGb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPlN0YXRlcyBHcm91cDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN0YXRlR3JvdXBcIlxuICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9Hcm91cFwiPlxuPCEtLSAjZG9jcmVnaW9uIG1hdC1hdXRvY29tcGxldGUgLS0+XG4gICAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0b0dyb3VwPVwibWF0QXV0b2NvbXBsZXRlXCI+XG4gICAgICAgIEBmb3IgKGdyb3VwIG9mIHN0YXRlR3JvdXBPcHRpb25zIHwgYXN5bmM7IHRyYWNrIGdyb3VwKSB7XG4gICAgICAgICAgPG1hdC1vcHRncm91cCBbbGFiZWxdPVwiZ3JvdXAubGV0dGVyXCI+XG4gICAgICAgICAgICBAZm9yIChuYW1lIG9mIGdyb3VwLm5hbWVzOyB0cmFjayBuYW1lKSB7XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJuYW1lXCI+e3tuYW1lfX08L21hdC1vcHRpb24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9tYXQtb3B0Z3JvdXA+XG4gICAgICAgIH1cbiAgICA8L21hdC1hdXRvY29tcGxldGU+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWF1dG9jb21wbGV0ZSAtLT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==