import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: SelectResetExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.1", type: SelectResetExample, isStandalone: true, selector: "select-reset-example", ngImport: i0, template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    @for (state of states; track state) {\n      <mat-option [value]=\"state\">{{state}}</mat-option>\n    }\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i5.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i5.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: SelectResetExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-reset-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule], template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    @for (state of states; track state) {\n      <mat-option [value]=\"state\">{{state}}</mat-option>\n    }\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlc2V0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXJlc2V0L3NlbGVjdC1yZXNldC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZXNldC9zZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFFaEUsc0NBQXNDO0FBT3RDLE1BQU0sT0FBTyxrQkFBa0I7SUFOL0I7UUFPRSxXQUFNLEdBQWE7WUFDakIsU0FBUztZQUNULFFBQVE7WUFDUixTQUFTO1lBQ1QsVUFBVTtZQUNWLFlBQVk7WUFDWixVQUFVO1lBQ1YsYUFBYTtZQUNiLFVBQVU7WUFDVixTQUFTO1lBQ1QsU0FBUztZQUNULFFBQVE7WUFDUixPQUFPO1lBQ1AsVUFBVTtZQUNWLFNBQVM7WUFDVCxNQUFNO1lBQ04sUUFBUTtZQUNSLFVBQVU7WUFDVixXQUFXO1lBQ1gsT0FBTztZQUNQLFVBQVU7WUFDVixlQUFlO1lBQ2YsVUFBVTtZQUNWLFdBQVc7WUFDWCxhQUFhO1lBQ2IsVUFBVTtZQUNWLFNBQVM7WUFDVCxVQUFVO1lBQ1YsUUFBUTtZQUNSLGVBQWU7WUFDZixZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLE1BQU07WUFDTixVQUFVO1lBQ1YsUUFBUTtZQUNSLGNBQWM7WUFDZCxjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxXQUFXO1lBQ1gsT0FBTztZQUNQLE1BQU07WUFDTixTQUFTO1lBQ1QsVUFBVTtZQUNWLFlBQVk7WUFDWixlQUFlO1lBQ2YsV0FBVztZQUNYLFNBQVM7U0FDVixDQUFDO0tBQ0g7OEdBckRZLGtCQUFrQjtrR0FBbEIsa0JBQWtCLGdGQ2IvQiw4cEJBc0JBLDJDRFhZLGtCQUFrQiwwU0FBRSxlQUFlLG1yQkFBRSxjQUFjLDBXQUFFLFdBQVc7OzJGQUUvRCxrQkFBa0I7a0JBTjlCLFNBQVM7K0JBQ0Usc0JBQXNCLGNBRXBCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggcmVzZXQgb3B0aW9uICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtcmVzZXQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LXJlc2V0LWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIEZvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0UmVzZXRFeGFtcGxlIHtcbiAgc3RhdGVzOiBzdHJpbmdbXSA9IFtcbiAgICAnQWxhYmFtYScsXG4gICAgJ0FsYXNrYScsXG4gICAgJ0FyaXpvbmEnLFxuICAgICdBcmthbnNhcycsXG4gICAgJ0NhbGlmb3JuaWEnLFxuICAgICdDb2xvcmFkbycsXG4gICAgJ0Nvbm5lY3RpY3V0JyxcbiAgICAnRGVsYXdhcmUnLFxuICAgICdGbG9yaWRhJyxcbiAgICAnR2VvcmdpYScsXG4gICAgJ0hhd2FpaScsXG4gICAgJ0lkYWhvJyxcbiAgICAnSWxsaW5vaXMnLFxuICAgICdJbmRpYW5hJyxcbiAgICAnSW93YScsXG4gICAgJ0thbnNhcycsXG4gICAgJ0tlbnR1Y2t5JyxcbiAgICAnTG91aXNpYW5hJyxcbiAgICAnTWFpbmUnLFxuICAgICdNYXJ5bGFuZCcsXG4gICAgJ01hc3NhY2h1c2V0dHMnLFxuICAgICdNaWNoaWdhbicsXG4gICAgJ01pbm5lc290YScsXG4gICAgJ01pc3Npc3NpcHBpJyxcbiAgICAnTWlzc291cmknLFxuICAgICdNb250YW5hJyxcbiAgICAnTmVicmFza2EnLFxuICAgICdOZXZhZGEnLFxuICAgICdOZXcgSGFtcHNoaXJlJyxcbiAgICAnTmV3IEplcnNleScsXG4gICAgJ05ldyBNZXhpY28nLFxuICAgICdOZXcgWW9yaycsXG4gICAgJ05vcnRoIENhcm9saW5hJyxcbiAgICAnTm9ydGggRGFrb3RhJyxcbiAgICAnT2hpbycsXG4gICAgJ09rbGFob21hJyxcbiAgICAnT3JlZ29uJyxcbiAgICAnUGVubnN5bHZhbmlhJyxcbiAgICAnUmhvZGUgSXNsYW5kJyxcbiAgICAnU291dGggQ2Fyb2xpbmEnLFxuICAgICdTb3V0aCBEYWtvdGEnLFxuICAgICdUZW5uZXNzZWUnLFxuICAgICdUZXhhcycsXG4gICAgJ1V0YWgnLFxuICAgICdWZXJtb250JyxcbiAgICAnVmlyZ2luaWEnLFxuICAgICdXYXNoaW5ndG9uJyxcbiAgICAnV2VzdCBWaXJnaW5pYScsXG4gICAgJ1dpc2NvbnNpbicsXG4gICAgJ1d5b21pbmcnLFxuICBdO1xufVxuIiwiPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlN0YXRlPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0PlxuICAgIDxtYXQtb3B0aW9uPk5vbmU8L21hdC1vcHRpb24+XG4gICAgQGZvciAoc3RhdGUgb2Ygc3RhdGVzOyB0cmFjayBzdGF0ZSkge1xuICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cInN0YXRlXCI+e3tzdGF0ZX19PC9tYXQtb3B0aW9uPlxuICAgIH1cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGg0Pm5hdGl2ZSBodG1sIHNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+U2VsZWN0IHlvdXIgY2FyPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBpZD1cIm15U2VsZWN0SWRcIj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInZvbHZvXCI+Vm9sdm88L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwic2FhYlwiPlNhYWI8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwibWVyY2VkZXNcIj5NZXJjZWRlczwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJhdWRpXCI+QXVkaTwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=