import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/radio";
/**
 * @title Radios with ngModel
 */
class RadioNgModelExample {
    constructor() {
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: RadioNgModelExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: RadioNgModelExample, selector: "radio-ng-model-example", ngImport: i0, template: "<label id=\"example-radio-group-label\">Pick your favorite season</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"favoriteSeason\">\n  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n    {{season}}\n  </mat-radio-button>\n</mat-radio-group>\n<div>Your favorite season is: {{favoriteSeason}}</div>\n", styles: [".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n  align-items: flex-start;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
export { RadioNgModelExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: RadioNgModelExample, decorators: [{
            type: Component,
            args: [{ selector: 'radio-ng-model-example', template: "<label id=\"example-radio-group-label\">Pick your favorite season</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"favoriteSeason\">\n  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n    {{season}}\n  </mat-radio-button>\n</mat-radio-group>\n<div>Your favorite season is: {{favoriteSeason}}</div>\n", styles: [".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n  align-items: flex-start;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbmctbW9kZWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3JhZGlvL3JhZGlvLW5nLW1vZGVsL3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9yYWRpby1uZy1tb2RlbC9yYWRpby1uZy1tb2RlbC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFDSCxNQUthLG1CQUFtQjtJQUxoQztRQU9FLFlBQU8sR0FBYSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzlEO3FIQUhZLG1CQUFtQjt5R0FBbkIsbUJBQW1CLDhEQ1ZoQyxnYkFVQTs7U0RBYSxtQkFBbUI7a0dBQW5CLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFJhZGlvcyB3aXRoIG5nTW9kZWxcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFkaW8tbmctbW9kZWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncmFkaW8tbmctbW9kZWwtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvTmdNb2RlbEV4YW1wbGUge1xuICBmYXZvcml0ZVNlYXNvbjogc3RyaW5nO1xuICBzZWFzb25zOiBzdHJpbmdbXSA9IFsnV2ludGVyJywgJ1NwcmluZycsICdTdW1tZXInLCAnQXV0dW1uJ107XG59XG4iLCI8bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+UGljayB5b3VyIGZhdm9yaXRlIHNlYXNvbjwvbGFiZWw+XG48bWF0LXJhZGlvLWdyb3VwXG4gIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIlxuICBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxuICBbKG5nTW9kZWwpXT1cImZhdm9yaXRlU2Vhc29uXCI+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiAqbmdGb3I9XCJsZXQgc2Vhc29uIG9mIHNlYXNvbnNcIiBbdmFsdWVdPVwic2Vhc29uXCI+XG4gICAge3tzZWFzb259fVxuICA8L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbjxkaXY+WW91ciBmYXZvcml0ZSBzZWFzb24gaXM6IHt7ZmF2b3JpdGVTZWFzb259fTwvZGl2PlxuIl19