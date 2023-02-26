import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/autocomplete";
import * as i3 from "@angular/material/core";
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
AutocompleteHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: AutocompleteHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
AutocompleteHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.0", type: AutocompleteHarnessExample, selector: "autocomplete-harness-example", ngImport: i0, template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\n  <mat-option *ngFor=\"let state of states\" [value]=\"state.code\">{{ state.name }}</mat-option>\n</mat-autocomplete>\n\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: AutocompleteHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-harness-example', template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\n  <mat-option *ngFor=\"let state of states\" [value]=\"state.code\">{{ state.name }}</mat-option>\n</mat-autocomplete>\n\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtaGFybmVzcy9hdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1oYXJuZXNzL2F1dG9jb21wbGV0ZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTywwQkFBMEI7SUFKdkM7UUFLRSxXQUFNLEdBQUc7WUFDUCxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUM5QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztZQUMvQixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUM5QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztTQUM5QixDQUFDO0tBQ0g7OzhIQWRZLDBCQUEwQjtrSEFBMUIsMEJBQTBCLG9FQ1R2QyxnVEFNQTtrR0RHYSwwQkFBMEI7a0JBSnRDLFNBQVM7K0JBQ0UsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0QXV0b2NvbXBsZXRlSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVIYXJuZXNzRXhhbXBsZSB7XG4gIHN0YXRlcyA9IFtcbiAgICB7Y29kZTogJ0FMJywgbmFtZTogJ0FsYWJhbWEnfSxcbiAgICB7Y29kZTogJ0NBJywgbmFtZTogJ0NhbGlmb3JuaWEnfSxcbiAgICB7Y29kZTogJ0ZMJywgbmFtZTogJ0Zsb3JpZGEnfSxcbiAgICB7Y29kZTogJ0tTJywgbmFtZTogJ0thbnNhcyd9LFxuICAgIHtjb2RlOiAnTUEnLCBuYW1lOiAnTWFzc2FjaHVzZXR0cyd9LFxuICAgIHtjb2RlOiAnTlknLCBuYW1lOiAnTmV3IFlvcmsnfSxcbiAgICB7Y29kZTogJ09SJywgbmFtZTogJ09yZWdvbid9LFxuICAgIHtjb2RlOiAnUEEnLCBuYW1lOiAnUGVubnN5bHZhbmlhJ30sXG4gICAge2NvZGU6ICdUTicsIG5hbWU6ICdUZW5uZXNzZWUnfSxcbiAgICB7Y29kZTogJ1ZBJywgbmFtZTogJ1ZpcmdpbmlhJ30sXG4gICAge2NvZGU6ICdXWScsIG5hbWU6ICdXeW9taW5nJ30sXG4gIF07XG59XG4iLCI8bWF0LWF1dG9jb21wbGV0ZSAjYXV0b2NvbXBsZXRlPVwibWF0QXV0b2NvbXBsZXRlXCI+XG4gIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzdGF0ZSBvZiBzdGF0ZXNcIiBbdmFsdWVdPVwic3RhdGUuY29kZVwiPnt7IHN0YXRlLm5hbWUgfX08L21hdC1vcHRpb24+XG48L21hdC1hdXRvY29tcGxldGU+XG5cbjxpbnB1dCBpZD1cInBsYWluXCIgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIj5cbjxpbnB1dCBpZD1cImRpc2FibGVkXCIgZGlzYWJsZWQgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIj5cbiJdfQ==