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
class SelectResetExample {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SelectResetExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: SelectResetExample, isStandalone: true, selector: "select-reset-example", ngImport: i0, template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "panelWidth", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i5.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i5.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] }); }
}
export { SelectResetExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SelectResetExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-reset-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule], template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlc2V0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXJlc2V0L3NlbGVjdC1yZXNldC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZXNldC9zZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0FBRWhFLHNDQUFzQztBQUN0QyxNQU1hLGtCQUFrQjtJQU4vQjtRQU9FLFdBQU0sR0FBYTtZQUNqQixTQUFTO1lBQ1QsUUFBUTtZQUNSLFNBQVM7WUFDVCxVQUFVO1lBQ1YsWUFBWTtZQUNaLFVBQVU7WUFDVixhQUFhO1lBQ2IsVUFBVTtZQUNWLFNBQVM7WUFDVCxTQUFTO1lBQ1QsUUFBUTtZQUNSLE9BQU87WUFDUCxVQUFVO1lBQ1YsU0FBUztZQUNULE1BQU07WUFDTixRQUFRO1lBQ1IsVUFBVTtZQUNWLFdBQVc7WUFDWCxPQUFPO1lBQ1AsVUFBVTtZQUNWLGVBQWU7WUFDZixVQUFVO1lBQ1YsV0FBVztZQUNYLGFBQWE7WUFDYixVQUFVO1lBQ1YsU0FBUztZQUNULFVBQVU7WUFDVixRQUFRO1lBQ1IsZUFBZTtZQUNmLFlBQVk7WUFDWixZQUFZO1lBQ1osVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsTUFBTTtZQUNOLFVBQVU7WUFDVixRQUFRO1lBQ1IsY0FBYztZQUNkLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLFdBQVc7WUFDWCxPQUFPO1lBQ1AsTUFBTTtZQUNOLFNBQVM7WUFDVCxVQUFVO1lBQ1YsWUFBWTtZQUNaLGVBQWU7WUFDZixXQUFXO1lBQ1gsU0FBUztTQUNWLENBQUM7S0FDSDs4R0FyRFksa0JBQWtCO2tHQUFsQixrQkFBa0IsZ0ZDZC9CLHlvQkFvQkEsMkNEUlksa0JBQWtCLDBTQUFFLGVBQWUsd1RBQUUsS0FBSyxrSEFBRSxjQUFjLDBXQUFFLFdBQVc7O1NBRXRFLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQU45QixTQUFTOytCQUNFLHNCQUFzQixjQUVwQixJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge05nRm9yfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggcmVzZXQgb3B0aW9uICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtcmVzZXQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LXJlc2V0LWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSwgTmdGb3IsIE1hdElucHV0TW9kdWxlLCBGb3Jtc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFJlc2V0RXhhbXBsZSB7XG4gIHN0YXRlczogc3RyaW5nW10gPSBbXG4gICAgJ0FsYWJhbWEnLFxuICAgICdBbGFza2EnLFxuICAgICdBcml6b25hJyxcbiAgICAnQXJrYW5zYXMnLFxuICAgICdDYWxpZm9ybmlhJyxcbiAgICAnQ29sb3JhZG8nLFxuICAgICdDb25uZWN0aWN1dCcsXG4gICAgJ0RlbGF3YXJlJyxcbiAgICAnRmxvcmlkYScsXG4gICAgJ0dlb3JnaWEnLFxuICAgICdIYXdhaWknLFxuICAgICdJZGFobycsXG4gICAgJ0lsbGlub2lzJyxcbiAgICAnSW5kaWFuYScsXG4gICAgJ0lvd2EnLFxuICAgICdLYW5zYXMnLFxuICAgICdLZW50dWNreScsXG4gICAgJ0xvdWlzaWFuYScsXG4gICAgJ01haW5lJyxcbiAgICAnTWFyeWxhbmQnLFxuICAgICdNYXNzYWNodXNldHRzJyxcbiAgICAnTWljaGlnYW4nLFxuICAgICdNaW5uZXNvdGEnLFxuICAgICdNaXNzaXNzaXBwaScsXG4gICAgJ01pc3NvdXJpJyxcbiAgICAnTW9udGFuYScsXG4gICAgJ05lYnJhc2thJyxcbiAgICAnTmV2YWRhJyxcbiAgICAnTmV3IEhhbXBzaGlyZScsXG4gICAgJ05ldyBKZXJzZXknLFxuICAgICdOZXcgTWV4aWNvJyxcbiAgICAnTmV3IFlvcmsnLFxuICAgICdOb3J0aCBDYXJvbGluYScsXG4gICAgJ05vcnRoIERha290YScsXG4gICAgJ09oaW8nLFxuICAgICdPa2xhaG9tYScsXG4gICAgJ09yZWdvbicsXG4gICAgJ1Blbm5zeWx2YW5pYScsXG4gICAgJ1Job2RlIElzbGFuZCcsXG4gICAgJ1NvdXRoIENhcm9saW5hJyxcbiAgICAnU291dGggRGFrb3RhJyxcbiAgICAnVGVubmVzc2VlJyxcbiAgICAnVGV4YXMnLFxuICAgICdVdGFoJyxcbiAgICAnVmVybW9udCcsXG4gICAgJ1ZpcmdpbmlhJyxcbiAgICAnV2FzaGluZ3RvbicsXG4gICAgJ1dlc3QgVmlyZ2luaWEnLFxuICAgICdXaXNjb25zaW4nLFxuICAgICdXeW9taW5nJyxcbiAgXTtcbn1cbiIsIjxoND5tYXQtc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5TdGF0ZTwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdD5cbiAgICA8bWF0LW9wdGlvbj5Ob25lPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzdGF0ZSBvZiBzdGF0ZXNcIiBbdmFsdWVdPVwic3RhdGVcIj57e3N0YXRlfX08L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlNlbGVjdCB5b3VyIGNhcjwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgaWQ9XCJteVNlbGVjdElkXCI+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJ2b2x2b1wiPlZvbHZvPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmNlZGVzXCI+TWVyY2VkZXM8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19