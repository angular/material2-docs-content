import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/autocomplete";
import * as i2 from "@angular/material/core";
/**
 * @title Testing with MatAutocompleteHarness
 */
class AutocompleteHarnessExample {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: AutocompleteHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: AutocompleteHarnessExample, isStandalone: true, selector: "autocomplete-harness-example", ngImport: i0, template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\n  <mat-option *ngFor=\"let state of states\" [value]=\"state.code\">{{ state.name }}</mat-option>\n</mat-autocomplete>\n\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\n", dependencies: [{ kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i1.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i2.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i1.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
export { AutocompleteHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: AutocompleteHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-harness-example', standalone: true, imports: [MatAutocompleteModule, NgFor], template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\n  <mat-option *ngFor=\"let state of states\" [value]=\"state.code\">{{ state.name }}</mat-option>\n</mat-autocomplete>\n\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtaGFybmVzcy9hdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1oYXJuZXNzL2F1dG9jb21wbGV0ZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQUVyRTs7R0FFRztBQUNILE1BTWEsMEJBQTBCO0lBTnZDO1FBT0UsV0FBTSxHQUFHO1lBQ1AsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUM7WUFDbEMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDL0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7U0FDOUIsQ0FBQztLQUNIOzhHQWRZLDBCQUEwQjtrR0FBMUIsMEJBQTBCLHdGQ2J2QyxnVEFNQSwyQ0RLWSxxQkFBcUIsaWNBQUUsS0FBSzs7U0FFM0IsMEJBQTBCOzJGQUExQiwwQkFBMEI7a0JBTnRDLFNBQVM7K0JBQ0UsOEJBQThCLGNBRTVCLElBQUksV0FDUCxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdGb3J9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdEF1dG9jb21wbGV0ZUhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYXV0b2NvbXBsZXRlLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEF1dG9jb21wbGV0ZU1vZHVsZSwgTmdGb3JdLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVIYXJuZXNzRXhhbXBsZSB7XG4gIHN0YXRlcyA9IFtcbiAgICB7Y29kZTogJ0FMJywgbmFtZTogJ0FsYWJhbWEnfSxcbiAgICB7Y29kZTogJ0NBJywgbmFtZTogJ0NhbGlmb3JuaWEnfSxcbiAgICB7Y29kZTogJ0ZMJywgbmFtZTogJ0Zsb3JpZGEnfSxcbiAgICB7Y29kZTogJ0tTJywgbmFtZTogJ0thbnNhcyd9LFxuICAgIHtjb2RlOiAnTUEnLCBuYW1lOiAnTWFzc2FjaHVzZXR0cyd9LFxuICAgIHtjb2RlOiAnTlknLCBuYW1lOiAnTmV3IFlvcmsnfSxcbiAgICB7Y29kZTogJ09SJywgbmFtZTogJ09yZWdvbid9LFxuICAgIHtjb2RlOiAnUEEnLCBuYW1lOiAnUGVubnN5bHZhbmlhJ30sXG4gICAge2NvZGU6ICdUTicsIG5hbWU6ICdUZW5uZXNzZWUnfSxcbiAgICB7Y29kZTogJ1ZBJywgbmFtZTogJ1ZpcmdpbmlhJ30sXG4gICAge2NvZGU6ICdXWScsIG5hbWU6ICdXeW9taW5nJ30sXG4gIF07XG59XG4iLCI8bWF0LWF1dG9jb21wbGV0ZSAjYXV0b2NvbXBsZXRlPVwibWF0QXV0b2NvbXBsZXRlXCI+XG4gIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzdGF0ZSBvZiBzdGF0ZXNcIiBbdmFsdWVdPVwic3RhdGUuY29kZVwiPnt7IHN0YXRlLm5hbWUgfX08L21hdC1vcHRpb24+XG48L21hdC1hdXRvY29tcGxldGU+XG5cbjxpbnB1dCBpZD1cInBsYWluXCIgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIj5cbjxpbnB1dCBpZD1cImRpc2FibGVkXCIgZGlzYWJsZWQgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIj5cbiJdfQ==