import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
/**
 * @title Testing with MatSelectHarness
 */
export class SelectHarnessExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: SelectHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0", type: SelectHarnessExample, isStandalone: true, selector: "select-harness-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Favorite food</mat-label>\n  <mat-select>\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{food.viewValue}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "panelWidth", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: SelectHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-harness-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, NgFor], template: "<mat-form-field>\n  <mat-label>Favorite food</mat-label>\n  <mat-select>\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{food.viewValue}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaGFybmVzcy9zZWxlY3QtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1oYXJuZXNzL3NlbGVjdC1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBRWhFOztHQUVHO0FBT0gsTUFBTSxPQUFPLG9CQUFvQjtJQU5qQztRQU9FLFVBQUssR0FBRztZQUNOLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3ZDLENBQUM7S0FDSDs4R0FOWSxvQkFBb0I7a0dBQXBCLG9CQUFvQixrRkNkakMsbU9BUUEsMkNESVksa0JBQWtCLDBTQUFFLGVBQWUsd1RBQUUsS0FBSzs7MkZBRXpDLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDRSx3QkFBd0IsY0FFdEIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdGb3J9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFNlbGVjdEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0U2VsZWN0TW9kdWxlLCBOZ0Zvcl0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEhhcm5lc3NFeGFtcGxlIHtcbiAgZm9vZHMgPSBbXG4gICAge3ZhbHVlOiAnc3RlYWstMCcsIHZpZXdWYWx1ZTogJ1N0ZWFrJ30sXG4gICAge3ZhbHVlOiAncGl6emEtMScsIHZpZXdWYWx1ZTogJ1BpenphJ30sXG4gICAge3ZhbHVlOiAndGFjb3MtMicsIHZpZXdWYWx1ZTogJ1RhY29zJ30sXG4gIF07XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgZm9vZDwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdD5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZm9vZCBvZiBmb29kc1wiIFt2YWx1ZV09XCJmb29kLnZhbHVlXCI+XG4gICAgICB7e2Zvb2Qudmlld1ZhbHVlfX1cbiAgICA8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=