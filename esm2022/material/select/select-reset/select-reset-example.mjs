import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/select";
import * as i6 from "@angular/material/core";
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: SelectResetExample, selector: "select-reset-example", ngImport: i0, template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "component", type: i5.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }] }); }
}
export { SelectResetExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SelectResetExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-reset-example', template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlc2V0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXJlc2V0L3NlbGVjdC1yZXNldC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZXNldC9zZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBRXhDLHNDQUFzQztBQUN0QyxNQUlhLGtCQUFrQjtJQUovQjtRQUtFLFdBQU0sR0FBYTtZQUNqQixTQUFTO1lBQ1QsUUFBUTtZQUNSLFNBQVM7WUFDVCxVQUFVO1lBQ1YsWUFBWTtZQUNaLFVBQVU7WUFDVixhQUFhO1lBQ2IsVUFBVTtZQUNWLFNBQVM7WUFDVCxTQUFTO1lBQ1QsUUFBUTtZQUNSLE9BQU87WUFDUCxVQUFVO1lBQ1YsU0FBUztZQUNULE1BQU07WUFDTixRQUFRO1lBQ1IsVUFBVTtZQUNWLFdBQVc7WUFDWCxPQUFPO1lBQ1AsVUFBVTtZQUNWLGVBQWU7WUFDZixVQUFVO1lBQ1YsV0FBVztZQUNYLGFBQWE7WUFDYixVQUFVO1lBQ1YsU0FBUztZQUNULFVBQVU7WUFDVixRQUFRO1lBQ1IsZUFBZTtZQUNmLFlBQVk7WUFDWixZQUFZO1lBQ1osVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsTUFBTTtZQUNOLFVBQVU7WUFDVixRQUFRO1lBQ1IsY0FBYztZQUNkLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLFdBQVc7WUFDWCxPQUFPO1lBQ1AsTUFBTTtZQUNOLFNBQVM7WUFDVCxVQUFVO1lBQ1YsWUFBWTtZQUNaLGVBQWU7WUFDZixXQUFXO1lBQ1gsU0FBUztTQUNWLENBQUM7S0FDSDs4R0FyRFksa0JBQWtCO2tHQUFsQixrQkFBa0IsNERDUC9CLHlvQkFvQkE7O1NEYmEsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBSjlCLFNBQVM7K0JBQ0Usc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIHJlc2V0IG9wdGlvbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LXJlc2V0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1yZXNldC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RSZXNldEV4YW1wbGUge1xuICBzdGF0ZXM6IHN0cmluZ1tdID0gW1xuICAgICdBbGFiYW1hJyxcbiAgICAnQWxhc2thJyxcbiAgICAnQXJpem9uYScsXG4gICAgJ0Fya2Fuc2FzJyxcbiAgICAnQ2FsaWZvcm5pYScsXG4gICAgJ0NvbG9yYWRvJyxcbiAgICAnQ29ubmVjdGljdXQnLFxuICAgICdEZWxhd2FyZScsXG4gICAgJ0Zsb3JpZGEnLFxuICAgICdHZW9yZ2lhJyxcbiAgICAnSGF3YWlpJyxcbiAgICAnSWRhaG8nLFxuICAgICdJbGxpbm9pcycsXG4gICAgJ0luZGlhbmEnLFxuICAgICdJb3dhJyxcbiAgICAnS2Fuc2FzJyxcbiAgICAnS2VudHVja3knLFxuICAgICdMb3Vpc2lhbmEnLFxuICAgICdNYWluZScsXG4gICAgJ01hcnlsYW5kJyxcbiAgICAnTWFzc2FjaHVzZXR0cycsXG4gICAgJ01pY2hpZ2FuJyxcbiAgICAnTWlubmVzb3RhJyxcbiAgICAnTWlzc2lzc2lwcGknLFxuICAgICdNaXNzb3VyaScsXG4gICAgJ01vbnRhbmEnLFxuICAgICdOZWJyYXNrYScsXG4gICAgJ05ldmFkYScsXG4gICAgJ05ldyBIYW1wc2hpcmUnLFxuICAgICdOZXcgSmVyc2V5JyxcbiAgICAnTmV3IE1leGljbycsXG4gICAgJ05ldyBZb3JrJyxcbiAgICAnTm9ydGggQ2Fyb2xpbmEnLFxuICAgICdOb3J0aCBEYWtvdGEnLFxuICAgICdPaGlvJyxcbiAgICAnT2tsYWhvbWEnLFxuICAgICdPcmVnb24nLFxuICAgICdQZW5uc3lsdmFuaWEnLFxuICAgICdSaG9kZSBJc2xhbmQnLFxuICAgICdTb3V0aCBDYXJvbGluYScsXG4gICAgJ1NvdXRoIERha290YScsXG4gICAgJ1Rlbm5lc3NlZScsXG4gICAgJ1RleGFzJyxcbiAgICAnVXRhaCcsXG4gICAgJ1Zlcm1vbnQnLFxuICAgICdWaXJnaW5pYScsXG4gICAgJ1dhc2hpbmd0b24nLFxuICAgICdXZXN0IFZpcmdpbmlhJyxcbiAgICAnV2lzY29uc2luJyxcbiAgICAnV3lvbWluZycsXG4gIF07XG59XG4iLCI8aDQ+bWF0LXNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+U3RhdGU8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3Q+XG4gICAgPG1hdC1vcHRpb24+Tm9uZTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc3RhdGUgb2Ygc3RhdGVzXCIgW3ZhbHVlXT1cInN0YXRlXCI+e3tzdGF0ZX19PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5TZWxlY3QgeW91ciBjYXI8L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIGlkPVwibXlTZWxlY3RJZFwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD48L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwidm9sdm9cIj5Wb2x2bzwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+U2FhYjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==