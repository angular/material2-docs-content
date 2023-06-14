import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/autocomplete";
import * as i2 from "@angular/material/core";
/**
 * @title Testing with MatAutocompleteHarness
 */
export class AutocompleteHarnessExample {
    constructor() {
        this.states = [
            { code: 'AL', name: 'Alabama' },
            { code: 'CA', name: 'California' },
            { code: 'FL', name: 'Florida' },
            { code: 'KS', name: 'Kansas' },
            { code: 'MA', name: 'Massachusetts' },
            { code: 'NY', name: 'New York' },
            { code: 'OR', name: 'Oregon' },
            { code: 'PA', name: 'Pennsylvania' },
            { code: 'TN', name: 'Tennessee' },
            { code: 'VA', name: 'Virginia' },
            { code: 'WY', name: 'Wyoming' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: AutocompleteHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0", type: AutocompleteHarnessExample, isStandalone: true, selector: "autocomplete-harness-example", ngImport: i0, template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\n  <mat-option *ngFor=\"let state of states\" [value]=\"state.code\">{{ state.name }}</mat-option>\n</mat-autocomplete>\n\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\n", dependencies: [{ kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i1.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i2.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i1.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: AutocompleteHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-harness-example', standalone: true, imports: [MatAutocompleteModule, NgFor], template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\n  <mat-option *ngFor=\"let state of states\" [value]=\"state.code\">{{ state.name }}</mat-option>\n</mat-autocomplete>\n\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtaGFybmVzcy9hdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1oYXJuZXNzL2F1dG9jb21wbGV0ZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQUVyRTs7R0FFRztBQU9ILE1BQU0sT0FBTywwQkFBMEI7SUFOdkM7UUFPRSxXQUFNLEdBQUc7WUFDUCxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUM5QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztZQUMvQixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUM5QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztTQUM5QixDQUFDO0tBQ0g7OEdBZFksMEJBQTBCO2tHQUExQiwwQkFBMEIsd0ZDYnZDLGdUQU1BLDJDREtZLHFCQUFxQixpY0FBRSxLQUFLOzsyRkFFM0IsMEJBQTBCO2tCQU50QyxTQUFTOytCQUNFLDhCQUE4QixjQUU1QixJQUFJLFdBQ1AsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nRm9yfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRBdXRvY29tcGxldGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRBdXRvY29tcGxldGVIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRBdXRvY29tcGxldGVNb2R1bGUsIE5nRm9yXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlSGFybmVzc0V4YW1wbGUge1xuICBzdGF0ZXMgPSBbXG4gICAge2NvZGU6ICdBTCcsIG5hbWU6ICdBbGFiYW1hJ30sXG4gICAge2NvZGU6ICdDQScsIG5hbWU6ICdDYWxpZm9ybmlhJ30sXG4gICAge2NvZGU6ICdGTCcsIG5hbWU6ICdGbG9yaWRhJ30sXG4gICAge2NvZGU6ICdLUycsIG5hbWU6ICdLYW5zYXMnfSxcbiAgICB7Y29kZTogJ01BJywgbmFtZTogJ01hc3NhY2h1c2V0dHMnfSxcbiAgICB7Y29kZTogJ05ZJywgbmFtZTogJ05ldyBZb3JrJ30sXG4gICAge2NvZGU6ICdPUicsIG5hbWU6ICdPcmVnb24nfSxcbiAgICB7Y29kZTogJ1BBJywgbmFtZTogJ1Blbm5zeWx2YW5pYSd9LFxuICAgIHtjb2RlOiAnVE4nLCBuYW1lOiAnVGVubmVzc2VlJ30sXG4gICAge2NvZGU6ICdWQScsIG5hbWU6ICdWaXJnaW5pYSd9LFxuICAgIHtjb2RlOiAnV1knLCBuYW1lOiAnV3lvbWluZyd9LFxuICBdO1xufVxuIiwiPG1hdC1hdXRvY29tcGxldGUgI2F1dG9jb21wbGV0ZT1cIm1hdEF1dG9jb21wbGV0ZVwiPlxuICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc3RhdGUgb2Ygc3RhdGVzXCIgW3ZhbHVlXT1cInN0YXRlLmNvZGVcIj57eyBzdGF0ZS5uYW1lIH19PC9tYXQtb3B0aW9uPlxuPC9tYXQtYXV0b2NvbXBsZXRlPlxuXG48aW5wdXQgaWQ9XCJwbGFpblwiIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCI+XG48aW5wdXQgaWQ9XCJkaXNhYmxlZFwiIGRpc2FibGVkIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCI+XG4iXX0=