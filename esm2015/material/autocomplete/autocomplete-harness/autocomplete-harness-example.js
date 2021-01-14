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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtaGFybmVzcy9hdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1oYXJuZXNzL2F1dG9jb21wbGV0ZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNDdEMscUNBQThEO0lBQUEsWUFBZ0I7SUFBQSxpQkFBYTs7O0lBQWxELHFDQUFvQjtJQUFDLGVBQWdCO0lBQWhCLG1DQUFnQjs7QURDaEY7O0dBRUc7QUFLSCxNQUFNLE9BQU8sMEJBQTBCO0lBSnZDO1FBS0UsV0FBTSxHQUFHO1lBQ1AsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUM7WUFDbEMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDL0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7U0FDOUIsQ0FBQztLQUNIOztvR0FkWSwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ1R2QyxpREFDRTtRQUFBLHlGQUEyRjtRQUM3RixpQkFBbUI7UUFFbkIsMkJBQ0E7UUFBQSwyQkFDQTs7O1FBTGdDLGVBQVM7UUFBVCxvQ0FBUztRQUd2QixlQUFnQztRQUFoQyxxQ0FBZ0M7UUFDcEIsZUFBZ0M7UUFBaEMscUNBQWdDOzt1RkRJakQsMEJBQTBCO2NBSnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsbUNBQW1DO2FBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0QXV0b2NvbXBsZXRlSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUhhcm5lc3NFeGFtcGxlIHtcbiAgc3RhdGVzID0gW1xuICAgIHtjb2RlOiAnQUwnLCBuYW1lOiAnQWxhYmFtYSd9LFxuICAgIHtjb2RlOiAnQ0EnLCBuYW1lOiAnQ2FsaWZvcm5pYSd9LFxuICAgIHtjb2RlOiAnRkwnLCBuYW1lOiAnRmxvcmlkYSd9LFxuICAgIHtjb2RlOiAnS1MnLCBuYW1lOiAnS2Fuc2FzJ30sXG4gICAge2NvZGU6ICdNQScsIG5hbWU6ICdNYXNzYWNodXNldHRzJ30sXG4gICAge2NvZGU6ICdOWScsIG5hbWU6ICdOZXcgWW9yayd9LFxuICAgIHtjb2RlOiAnT1InLCBuYW1lOiAnT3JlZ29uJ30sXG4gICAge2NvZGU6ICdQQScsIG5hbWU6ICdQZW5uc3lsdmFuaWEnfSxcbiAgICB7Y29kZTogJ1ROJywgbmFtZTogJ1Rlbm5lc3NlZSd9LFxuICAgIHtjb2RlOiAnVkEnLCBuYW1lOiAnVmlyZ2luaWEnfSxcbiAgICB7Y29kZTogJ1dZJywgbmFtZTogJ1d5b21pbmcnfSxcbiAgXTtcbn1cbiIsIjxtYXQtYXV0b2NvbXBsZXRlICNhdXRvY29tcGxldGU9XCJtYXRBdXRvY29tcGxldGVcIj5cbiAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHN0YXRlIG9mIHN0YXRlc1wiIFt2YWx1ZV09XCJzdGF0ZS5jb2RlXCI+e3sgc3RhdGUubmFtZSB9fTwvbWF0LW9wdGlvbj5cbjwvbWF0LWF1dG9jb21wbGV0ZT5cblxuPGlucHV0IGlkPVwicGxhaW5cIiBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiPlxuPGlucHV0IGlkPVwiZGlzYWJsZWRcIiBkaXNhYmxlZCBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiPlxuIl19