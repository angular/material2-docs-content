import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/forms";
/** @title Select with reset option */
export class SelectResetExample {
    constructor() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SelectResetExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SelectResetExample, isStandalone: true, selector: "select-reset-example", ngImport: i0, template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "aria-describedby", "panelClass", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i5.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i5.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SelectResetExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-reset-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule], template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlc2V0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXJlc2V0L3NlbGVjdC1yZXNldC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZXNldC9zZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0FBRWhFLHNDQUFzQztBQU90QyxNQUFNLE9BQU8sa0JBQWtCO0lBTi9CO1FBT0UsV0FBTSxHQUFhO1lBQ2pCLFNBQVM7WUFDVCxRQUFRO1lBQ1IsU0FBUztZQUNULFVBQVU7WUFDVixZQUFZO1lBQ1osVUFBVTtZQUNWLGFBQWE7WUFDYixVQUFVO1lBQ1YsU0FBUztZQUNULFNBQVM7WUFDVCxRQUFRO1lBQ1IsT0FBTztZQUNQLFVBQVU7WUFDVixTQUFTO1lBQ1QsTUFBTTtZQUNOLFFBQVE7WUFDUixVQUFVO1lBQ1YsV0FBVztZQUNYLE9BQU87WUFDUCxVQUFVO1lBQ1YsZUFBZTtZQUNmLFVBQVU7WUFDVixXQUFXO1lBQ1gsYUFBYTtZQUNiLFVBQVU7WUFDVixTQUFTO1lBQ1QsVUFBVTtZQUNWLFFBQVE7WUFDUixlQUFlO1lBQ2YsWUFBWTtZQUNaLFlBQVk7WUFDWixVQUFVO1lBQ1YsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxNQUFNO1lBQ04sVUFBVTtZQUNWLFFBQVE7WUFDUixjQUFjO1lBQ2QsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsV0FBVztZQUNYLE9BQU87WUFDUCxNQUFNO1lBQ04sU0FBUztZQUNULFVBQVU7WUFDVixZQUFZO1lBQ1osZUFBZTtZQUNmLFdBQVc7WUFDWCxTQUFTO1NBQ1YsQ0FBQztLQUNIOzhHQXJEWSxrQkFBa0I7a0dBQWxCLGtCQUFrQixnRkNkL0IseW9CQW9CQSwyQ0RSWSxrQkFBa0IsMFNBQUUsZUFBZSxvckJBQUUsS0FBSyxrSEFBRSxjQUFjLDBXQUFFLFdBQVc7OzJGQUV0RSxrQkFBa0I7a0JBTjlCLFNBQVM7K0JBQ0Usc0JBQXNCLGNBRXBCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TmdGb3J9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCByZXNldCBvcHRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1yZXNldC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0U2VsZWN0TW9kdWxlLCBOZ0ZvciwgTWF0SW5wdXRNb2R1bGUsIEZvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0UmVzZXRFeGFtcGxlIHtcbiAgc3RhdGVzOiBzdHJpbmdbXSA9IFtcbiAgICAnQWxhYmFtYScsXG4gICAgJ0FsYXNrYScsXG4gICAgJ0FyaXpvbmEnLFxuICAgICdBcmthbnNhcycsXG4gICAgJ0NhbGlmb3JuaWEnLFxuICAgICdDb2xvcmFkbycsXG4gICAgJ0Nvbm5lY3RpY3V0JyxcbiAgICAnRGVsYXdhcmUnLFxuICAgICdGbG9yaWRhJyxcbiAgICAnR2VvcmdpYScsXG4gICAgJ0hhd2FpaScsXG4gICAgJ0lkYWhvJyxcbiAgICAnSWxsaW5vaXMnLFxuICAgICdJbmRpYW5hJyxcbiAgICAnSW93YScsXG4gICAgJ0thbnNhcycsXG4gICAgJ0tlbnR1Y2t5JyxcbiAgICAnTG91aXNpYW5hJyxcbiAgICAnTWFpbmUnLFxuICAgICdNYXJ5bGFuZCcsXG4gICAgJ01hc3NhY2h1c2V0dHMnLFxuICAgICdNaWNoaWdhbicsXG4gICAgJ01pbm5lc290YScsXG4gICAgJ01pc3Npc3NpcHBpJyxcbiAgICAnTWlzc291cmknLFxuICAgICdNb250YW5hJyxcbiAgICAnTmVicmFza2EnLFxuICAgICdOZXZhZGEnLFxuICAgICdOZXcgSGFtcHNoaXJlJyxcbiAgICAnTmV3IEplcnNleScsXG4gICAgJ05ldyBNZXhpY28nLFxuICAgICdOZXcgWW9yaycsXG4gICAgJ05vcnRoIENhcm9saW5hJyxcbiAgICAnTm9ydGggRGFrb3RhJyxcbiAgICAnT2hpbycsXG4gICAgJ09rbGFob21hJyxcbiAgICAnT3JlZ29uJyxcbiAgICAnUGVubnN5bHZhbmlhJyxcbiAgICAnUmhvZGUgSXNsYW5kJyxcbiAgICAnU291dGggQ2Fyb2xpbmEnLFxuICAgICdTb3V0aCBEYWtvdGEnLFxuICAgICdUZW5uZXNzZWUnLFxuICAgICdUZXhhcycsXG4gICAgJ1V0YWgnLFxuICAgICdWZXJtb250JyxcbiAgICAnVmlyZ2luaWEnLFxuICAgICdXYXNoaW5ndG9uJyxcbiAgICAnV2VzdCBWaXJnaW5pYScsXG4gICAgJ1dpc2NvbnNpbicsXG4gICAgJ1d5b21pbmcnLFxuICBdO1xufVxuIiwiPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlN0YXRlPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0PlxuICAgIDxtYXQtb3B0aW9uPk5vbmU8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHN0YXRlIG9mIHN0YXRlc1wiIFt2YWx1ZV09XCJzdGF0ZVwiPnt7c3RhdGV9fTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGg0Pm5hdGl2ZSBodG1sIHNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+U2VsZWN0IHlvdXIgY2FyPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBpZD1cIm15U2VsZWN0SWRcIj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInZvbHZvXCI+Vm9sdm88L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwic2FhYlwiPlNhYWI8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwibWVyY2VkZXNcIj5NZXJjZWRlczwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJhdWRpXCI+QXVkaTwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=