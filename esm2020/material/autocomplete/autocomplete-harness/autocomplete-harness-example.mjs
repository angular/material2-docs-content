import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/autocomplete";
import * as i3 from "@angular/material/core";
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
}
AutocompleteHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: AutocompleteHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
AutocompleteHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: AutocompleteHarnessExample, selector: "autocomplete-harness-example", ngImport: i0, template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\n  <mat-option *ngFor=\"let state of states\" [value]=\"state.code\">{{ state.name }}</mat-option>\n</mat-autocomplete>\n\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }] });
export { AutocompleteHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: AutocompleteHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-harness-example', template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\n  <mat-option *ngFor=\"let state of states\" [value]=\"state.code\">{{ state.name }}</mat-option>\n</mat-autocomplete>\n\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtaGFybmVzcy9hdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1oYXJuZXNzL2F1dG9jb21wbGV0ZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQUNILE1BSWEsMEJBQTBCO0lBSnZDO1FBS0UsV0FBTSxHQUFHO1lBQ1AsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUM7WUFDbEMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDL0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7U0FDOUIsQ0FBQztLQUNIOzs4SEFkWSwwQkFBMEI7a0hBQTFCLDBCQUEwQixvRUNUdkMsZ1RBTUE7U0RHYSwwQkFBMEI7a0dBQTFCLDBCQUEwQjtrQkFKdEMsU0FBUzsrQkFDRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRBdXRvY29tcGxldGVIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUhhcm5lc3NFeGFtcGxlIHtcbiAgc3RhdGVzID0gW1xuICAgIHtjb2RlOiAnQUwnLCBuYW1lOiAnQWxhYmFtYSd9LFxuICAgIHtjb2RlOiAnQ0EnLCBuYW1lOiAnQ2FsaWZvcm5pYSd9LFxuICAgIHtjb2RlOiAnRkwnLCBuYW1lOiAnRmxvcmlkYSd9LFxuICAgIHtjb2RlOiAnS1MnLCBuYW1lOiAnS2Fuc2FzJ30sXG4gICAge2NvZGU6ICdNQScsIG5hbWU6ICdNYXNzYWNodXNldHRzJ30sXG4gICAge2NvZGU6ICdOWScsIG5hbWU6ICdOZXcgWW9yayd9LFxuICAgIHtjb2RlOiAnT1InLCBuYW1lOiAnT3JlZ29uJ30sXG4gICAge2NvZGU6ICdQQScsIG5hbWU6ICdQZW5uc3lsdmFuaWEnfSxcbiAgICB7Y29kZTogJ1ROJywgbmFtZTogJ1Rlbm5lc3NlZSd9LFxuICAgIHtjb2RlOiAnVkEnLCBuYW1lOiAnVmlyZ2luaWEnfSxcbiAgICB7Y29kZTogJ1dZJywgbmFtZTogJ1d5b21pbmcnfSxcbiAgXTtcbn1cbiIsIjxtYXQtYXV0b2NvbXBsZXRlICNhdXRvY29tcGxldGU9XCJtYXRBdXRvY29tcGxldGVcIj5cbiAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHN0YXRlIG9mIHN0YXRlc1wiIFt2YWx1ZV09XCJzdGF0ZS5jb2RlXCI+e3sgc3RhdGUubmFtZSB9fTwvbWF0LW9wdGlvbj5cbjwvbWF0LWF1dG9jb21wbGV0ZT5cblxuPGlucHV0IGlkPVwicGxhaW5cIiBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiPlxuPGlucHV0IGlkPVwiZGlzYWJsZWRcIiBkaXNhYmxlZCBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiPlxuIl19