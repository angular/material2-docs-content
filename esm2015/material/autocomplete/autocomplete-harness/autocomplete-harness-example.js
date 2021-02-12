import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/autocomplete";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/core";
function AutocompleteHarnessExample_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r2.code);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(state_r2.name);
} }
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
}
AutocompleteHarnessExample.ɵfac = function AutocompleteHarnessExample_Factory(t) { return new (t || AutocompleteHarnessExample)(); };
AutocompleteHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompleteHarnessExample, selectors: [["autocomplete-harness-example"]], decls: 5, vars: 3, consts: [["autocomplete", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "plain", 3, "matAutocomplete"], ["id", "disabled", "disabled", "", 3, "matAutocomplete"], [3, "value"]], template: function AutocompleteHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-autocomplete", null, 0);
        i0.ɵɵtemplate(2, AutocompleteHarnessExample_mat_option_2_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 2);
        i0.ɵɵelement(4, "input", 3);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.states);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matAutocomplete", _r0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matAutocomplete", _r0);
    } }, directives: [i1.MatAutocomplete, i2.NgForOf, i1.MatAutocompleteTrigger, i3.MatOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutocompleteHarnessExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-harness-example',
                templateUrl: 'autocomplete-harness-example.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtaGFybmVzcy9hdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1oYXJuZXNzL2F1dG9jb21wbGV0ZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNDdEMscUNBQThEO0lBQUEsWUFBZ0I7SUFBQSxpQkFBYTs7O0lBQWxELHFDQUFvQjtJQUFDLGVBQWdCO0lBQWhCLG1DQUFnQjs7QURDaEY7O0dBRUc7QUFLSCxNQUFNLE9BQU8sMEJBQTBCO0lBSnZDO1FBS0UsV0FBTSxHQUFHO1lBQ1AsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUM7WUFDbEMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDL0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7U0FDOUIsQ0FBQztLQUNIOztvR0FkWSwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ1R2QyxpREFBa0Q7UUFDaEQseUZBQTJGO1FBQzdGLGlCQUFtQjtRQUVuQiwyQkFBbUQ7UUFDbkQsMkJBQStEOzs7UUFKL0IsZUFBUztRQUFULG9DQUFTO1FBR3ZCLGVBQWdDO1FBQWhDLHFDQUFnQztRQUNwQixlQUFnQztRQUFoQyxxQ0FBZ0M7O3VGRElqRCwwQkFBMEI7Y0FKdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSxtQ0FBbUM7YUFDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRBdXRvY29tcGxldGVIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlSGFybmVzc0V4YW1wbGUge1xuICBzdGF0ZXMgPSBbXG4gICAge2NvZGU6ICdBTCcsIG5hbWU6ICdBbGFiYW1hJ30sXG4gICAge2NvZGU6ICdDQScsIG5hbWU6ICdDYWxpZm9ybmlhJ30sXG4gICAge2NvZGU6ICdGTCcsIG5hbWU6ICdGbG9yaWRhJ30sXG4gICAge2NvZGU6ICdLUycsIG5hbWU6ICdLYW5zYXMnfSxcbiAgICB7Y29kZTogJ01BJywgbmFtZTogJ01hc3NhY2h1c2V0dHMnfSxcbiAgICB7Y29kZTogJ05ZJywgbmFtZTogJ05ldyBZb3JrJ30sXG4gICAge2NvZGU6ICdPUicsIG5hbWU6ICdPcmVnb24nfSxcbiAgICB7Y29kZTogJ1BBJywgbmFtZTogJ1Blbm5zeWx2YW5pYSd9LFxuICAgIHtjb2RlOiAnVE4nLCBuYW1lOiAnVGVubmVzc2VlJ30sXG4gICAge2NvZGU6ICdWQScsIG5hbWU6ICdWaXJnaW5pYSd9LFxuICAgIHtjb2RlOiAnV1knLCBuYW1lOiAnV3lvbWluZyd9LFxuICBdO1xufVxuIiwiPG1hdC1hdXRvY29tcGxldGUgI2F1dG9jb21wbGV0ZT1cIm1hdEF1dG9jb21wbGV0ZVwiPlxuICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc3RhdGUgb2Ygc3RhdGVzXCIgW3ZhbHVlXT1cInN0YXRlLmNvZGVcIj57eyBzdGF0ZS5uYW1lIH19PC9tYXQtb3B0aW9uPlxuPC9tYXQtYXV0b2NvbXBsZXRlPlxuXG48aW5wdXQgaWQ9XCJwbGFpblwiIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCI+XG48aW5wdXQgaWQ9XCJkaXNhYmxlZFwiIGRpc2FibGVkIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCI+XG4iXX0=