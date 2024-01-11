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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SelectResetExample, isStandalone: true, selector: "select-reset-example", ngImport: i0, template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "panelWidth", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i5.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i5.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SelectResetExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-reset-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule], template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlc2V0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXJlc2V0L3NlbGVjdC1yZXNldC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZXNldC9zZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0FBRWhFLHNDQUFzQztBQU90QyxNQUFNLE9BQU8sa0JBQWtCO0lBTi9CO1FBT0UsV0FBTSxHQUFhO1lBQ2pCLFNBQVM7WUFDVCxRQUFRO1lBQ1IsU0FBUztZQUNULFVBQVU7WUFDVixZQUFZO1lBQ1osVUFBVTtZQUNWLGFBQWE7WUFDYixVQUFVO1lBQ1YsU0FBUztZQUNULFNBQVM7WUFDVCxRQUFRO1lBQ1IsT0FBTztZQUNQLFVBQVU7WUFDVixTQUFTO1lBQ1QsTUFBTTtZQUNOLFFBQVE7WUFDUixVQUFVO1lBQ1YsV0FBVztZQUNYLE9BQU87WUFDUCxVQUFVO1lBQ1YsZUFBZTtZQUNmLFVBQVU7WUFDVixXQUFXO1lBQ1gsYUFBYTtZQUNiLFVBQVU7WUFDVixTQUFTO1lBQ1QsVUFBVTtZQUNWLFFBQVE7WUFDUixlQUFlO1lBQ2YsWUFBWTtZQUNaLFlBQVk7WUFDWixVQUFVO1lBQ1YsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxNQUFNO1lBQ04sVUFBVTtZQUNWLFFBQVE7WUFDUixjQUFjO1lBQ2QsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsV0FBVztZQUNYLE9BQU87WUFDUCxNQUFNO1lBQ04sU0FBUztZQUNULFVBQVU7WUFDVixZQUFZO1lBQ1osZUFBZTtZQUNmLFdBQVc7WUFDWCxTQUFTO1NBQ1YsQ0FBQztLQUNIOzhHQXJEWSxrQkFBa0I7a0dBQWxCLGtCQUFrQixnRkNkL0IseW9CQW9CQSwyQ0RSWSxrQkFBa0IsMFNBQUUsZUFBZSx3VEFBRSxLQUFLLGtIQUFFLGNBQWMsMFdBQUUsV0FBVzs7MkZBRXRFLGtCQUFrQjtrQkFOOUIsU0FBUzsrQkFDRSxzQkFBc0IsY0FFcEIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtOZ0Zvcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIHJlc2V0IG9wdGlvbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LXJlc2V0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1yZXNldC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIE5nRm9yLCBNYXRJbnB1dE1vZHVsZSwgRm9ybXNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RSZXNldEV4YW1wbGUge1xuICBzdGF0ZXM6IHN0cmluZ1tdID0gW1xuICAgICdBbGFiYW1hJyxcbiAgICAnQWxhc2thJyxcbiAgICAnQXJpem9uYScsXG4gICAgJ0Fya2Fuc2FzJyxcbiAgICAnQ2FsaWZvcm5pYScsXG4gICAgJ0NvbG9yYWRvJyxcbiAgICAnQ29ubmVjdGljdXQnLFxuICAgICdEZWxhd2FyZScsXG4gICAgJ0Zsb3JpZGEnLFxuICAgICdHZW9yZ2lhJyxcbiAgICAnSGF3YWlpJyxcbiAgICAnSWRhaG8nLFxuICAgICdJbGxpbm9pcycsXG4gICAgJ0luZGlhbmEnLFxuICAgICdJb3dhJyxcbiAgICAnS2Fuc2FzJyxcbiAgICAnS2VudHVja3knLFxuICAgICdMb3Vpc2lhbmEnLFxuICAgICdNYWluZScsXG4gICAgJ01hcnlsYW5kJyxcbiAgICAnTWFzc2FjaHVzZXR0cycsXG4gICAgJ01pY2hpZ2FuJyxcbiAgICAnTWlubmVzb3RhJyxcbiAgICAnTWlzc2lzc2lwcGknLFxuICAgICdNaXNzb3VyaScsXG4gICAgJ01vbnRhbmEnLFxuICAgICdOZWJyYXNrYScsXG4gICAgJ05ldmFkYScsXG4gICAgJ05ldyBIYW1wc2hpcmUnLFxuICAgICdOZXcgSmVyc2V5JyxcbiAgICAnTmV3IE1leGljbycsXG4gICAgJ05ldyBZb3JrJyxcbiAgICAnTm9ydGggQ2Fyb2xpbmEnLFxuICAgICdOb3J0aCBEYWtvdGEnLFxuICAgICdPaGlvJyxcbiAgICAnT2tsYWhvbWEnLFxuICAgICdPcmVnb24nLFxuICAgICdQZW5uc3lsdmFuaWEnLFxuICAgICdSaG9kZSBJc2xhbmQnLFxuICAgICdTb3V0aCBDYXJvbGluYScsXG4gICAgJ1NvdXRoIERha290YScsXG4gICAgJ1Rlbm5lc3NlZScsXG4gICAgJ1RleGFzJyxcbiAgICAnVXRhaCcsXG4gICAgJ1Zlcm1vbnQnLFxuICAgICdWaXJnaW5pYScsXG4gICAgJ1dhc2hpbmd0b24nLFxuICAgICdXZXN0IFZpcmdpbmlhJyxcbiAgICAnV2lzY29uc2luJyxcbiAgICAnV3lvbWluZycsXG4gIF07XG59XG4iLCI8aDQ+bWF0LXNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+U3RhdGU8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3Q+XG4gICAgPG1hdC1vcHRpb24+Tm9uZTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc3RhdGUgb2Ygc3RhdGVzXCIgW3ZhbHVlXT1cInN0YXRlXCI+e3tzdGF0ZX19PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5TZWxlY3QgeW91ciBjYXI8L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIGlkPVwibXlTZWxlY3RJZFwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD48L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwidm9sdm9cIj5Wb2x2bzwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+U2FhYjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==