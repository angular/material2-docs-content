import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/select";
import * as i6 from "@angular/material/core";
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
}
SelectResetExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.1", ngImport: i0, type: SelectResetExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectResetExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-rc.1", type: SelectResetExample, selector: "select-reset-example", ngImport: i0, template: "<h4>mat-select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "component", type: i5.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.1", ngImport: i0, type: SelectResetExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-reset-example', template: "<h4>mat-select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlc2V0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXJlc2V0L3NlbGVjdC1yZXNldC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZXNldC9zZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBRXhDLHNDQUFzQztBQUt0QyxNQUFNLE9BQU8sa0JBQWtCO0lBSi9CO1FBS0UsV0FBTSxHQUFhO1lBQ2pCLFNBQVM7WUFDVCxRQUFRO1lBQ1IsU0FBUztZQUNULFVBQVU7WUFDVixZQUFZO1lBQ1osVUFBVTtZQUNWLGFBQWE7WUFDYixVQUFVO1lBQ1YsU0FBUztZQUNULFNBQVM7WUFDVCxRQUFRO1lBQ1IsT0FBTztZQUNQLFVBQVU7WUFDVixTQUFTO1lBQ1QsTUFBTTtZQUNOLFFBQVE7WUFDUixVQUFVO1lBQ1YsV0FBVztZQUNYLE9BQU87WUFDUCxVQUFVO1lBQ1YsZUFBZTtZQUNmLFVBQVU7WUFDVixXQUFXO1lBQ1gsYUFBYTtZQUNiLFVBQVU7WUFDVixTQUFTO1lBQ1QsVUFBVTtZQUNWLFFBQVE7WUFDUixlQUFlO1lBQ2YsWUFBWTtZQUNaLFlBQVk7WUFDWixVQUFVO1lBQ1YsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxNQUFNO1lBQ04sVUFBVTtZQUNWLFFBQVE7WUFDUixjQUFjO1lBQ2QsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsV0FBVztZQUNYLE9BQU87WUFDUCxNQUFNO1lBQ04sU0FBUztZQUNULFVBQVU7WUFDVixZQUFZO1lBQ1osZUFBZTtZQUNmLFdBQVc7WUFDWCxTQUFTO1NBQ1YsQ0FBQztLQUNIOztvSEFyRFksa0JBQWtCO3dHQUFsQixrQkFBa0IsNERDUC9CLGlyQkFvQkE7Z0dEYmEsa0JBQWtCO2tCQUo5QixTQUFTOytCQUNFLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCByZXNldCBvcHRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1yZXNldC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0UmVzZXRFeGFtcGxlIHtcbiAgc3RhdGVzOiBzdHJpbmdbXSA9IFtcbiAgICAnQWxhYmFtYScsXG4gICAgJ0FsYXNrYScsXG4gICAgJ0FyaXpvbmEnLFxuICAgICdBcmthbnNhcycsXG4gICAgJ0NhbGlmb3JuaWEnLFxuICAgICdDb2xvcmFkbycsXG4gICAgJ0Nvbm5lY3RpY3V0JyxcbiAgICAnRGVsYXdhcmUnLFxuICAgICdGbG9yaWRhJyxcbiAgICAnR2VvcmdpYScsXG4gICAgJ0hhd2FpaScsXG4gICAgJ0lkYWhvJyxcbiAgICAnSWxsaW5vaXMnLFxuICAgICdJbmRpYW5hJyxcbiAgICAnSW93YScsXG4gICAgJ0thbnNhcycsXG4gICAgJ0tlbnR1Y2t5JyxcbiAgICAnTG91aXNpYW5hJyxcbiAgICAnTWFpbmUnLFxuICAgICdNYXJ5bGFuZCcsXG4gICAgJ01hc3NhY2h1c2V0dHMnLFxuICAgICdNaWNoaWdhbicsXG4gICAgJ01pbm5lc290YScsXG4gICAgJ01pc3Npc3NpcHBpJyxcbiAgICAnTWlzc291cmknLFxuICAgICdNb250YW5hJyxcbiAgICAnTmVicmFza2EnLFxuICAgICdOZXZhZGEnLFxuICAgICdOZXcgSGFtcHNoaXJlJyxcbiAgICAnTmV3IEplcnNleScsXG4gICAgJ05ldyBNZXhpY28nLFxuICAgICdOZXcgWW9yaycsXG4gICAgJ05vcnRoIENhcm9saW5hJyxcbiAgICAnTm9ydGggRGFrb3RhJyxcbiAgICAnT2hpbycsXG4gICAgJ09rbGFob21hJyxcbiAgICAnT3JlZ29uJyxcbiAgICAnUGVubnN5bHZhbmlhJyxcbiAgICAnUmhvZGUgSXNsYW5kJyxcbiAgICAnU291dGggQ2Fyb2xpbmEnLFxuICAgICdTb3V0aCBEYWtvdGEnLFxuICAgICdUZW5uZXNzZWUnLFxuICAgICdUZXhhcycsXG4gICAgJ1V0YWgnLFxuICAgICdWZXJtb250JyxcbiAgICAnVmlyZ2luaWEnLFxuICAgICdXYXNoaW5ndG9uJyxcbiAgICAnV2VzdCBWaXJnaW5pYScsXG4gICAgJ1dpc2NvbnNpbicsXG4gICAgJ1d5b21pbmcnLFxuICBdO1xufVxuIiwiPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+U3RhdGU8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3Q+XG4gICAgPG1hdC1vcHRpb24+Tm9uZTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc3RhdGUgb2Ygc3RhdGVzXCIgW3ZhbHVlXT1cInN0YXRlXCI+e3tzdGF0ZX19PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlNlbGVjdCB5b3VyIGNhcjwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgaWQ9XCJteVNlbGVjdElkXCI+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJ2b2x2b1wiPlZvbHZvPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmNlZGVzXCI+TWVyY2VkZXM8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19