/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/select/select-value-binding/select-value-binding-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
/**
 * \@title Select with 2-way value binding
 */
export class SelectValueBindingExample {
    constructor() {
        this.selected = 'option2';
    }
}
SelectValueBindingExample.decorators = [
    { type: Component, args: [{
                selector: 'select-value-binding-example',
                templateUrl: 'select-value-binding-example.html',
                styleUrls: ['select-value-binding-example.css'],
            },] },
];
/** @nocollapse */ SelectValueBindingExample.ɵfac = function SelectValueBindingExample_Factory(t) { return new (t || SelectValueBindingExample)(); };
/** @nocollapse */ SelectValueBindingExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectValueBindingExample, selectors: [["select-value-binding-example"]], decls: 14, vars: 2, consts: [[3, "value", "valueChange"], ["value", "option1"], ["value", "option2"], ["value", "option3"]], template: function SelectValueBindingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Select an option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 0);
        i0.ɵɵlistener("valueChange", function SelectValueBindingExample_Template_mat_select_valueChange_3_listener($event) { return ctx.selected = $event; });
        i0.ɵɵelementStart(4, "mat-option");
        i0.ɵɵtext(5, "None");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-option", 1);
        i0.ɵɵtext(7, "Option 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-option", 2);
        i0.ɵɵtext(9, "Option 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 3);
        i0.ɵɵtext(11, "Option 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "p");
        i0.ɵɵtext(13);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("value", ctx.selected);
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate1("You selected: ", ctx.selected, "");
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectValueBindingExample, [{
        type: Component,
        args: [{
                selector: 'select-value-binding-example',
                templateUrl: 'select-value-binding-example.html',
                styleUrls: ['select-value-binding-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectValueBindingExample.prototype.selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtdmFsdWUtYmluZGluZy9zZWxlY3QtdmFsdWUtYmluZGluZy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC12YWx1ZS1iaW5kaW5nL3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUXhDLE1BQU0sT0FBTyx5QkFBeUI7SUFMdEM7UUFNRSxhQUFRLEdBQUcsU0FBUyxDQUFDO0tBQ3RCOzs7WUFQQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7O3FIQUNZLHlCQUF5QjtpRkFBekIseUJBQXlCO1FDUnRDLHNDQUNFO1FBQUEsaUNBQVc7UUFBQSxnQ0FBZ0I7UUFBQSxpQkFBWTtRQUN2QyxxQ0FDRTtRQURVLHFKQUFvQjtRQUM5QixrQ0FBWTtRQUFBLG9CQUFJO1FBQUEsaUJBQWE7UUFDN0IscUNBQTRCO1FBQUEsd0JBQVE7UUFBQSxpQkFBYTtRQUNqRCxxQ0FBNEI7UUFBQSx3QkFBUTtRQUFBLGlCQUFhO1FBQ2pELHNDQUE0QjtRQUFBLHlCQUFRO1FBQUEsaUJBQWE7UUFDbkQsaUJBQWE7UUFDZixpQkFBaUI7UUFFakIsMEJBQUc7UUFBQSxhQUEwQjtRQUFBLGlCQUFJOztRQVJuQixlQUFvQjtRQUFwQixvQ0FBb0I7UUFRL0IsZ0JBQTBCO1FBQTFCLHlEQUEwQjs7a0RERmhCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7Ozs7SUFFQyw2Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggMi13YXkgdmFsdWUgYmluZGluZyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFZhbHVlQmluZGluZ0V4YW1wbGUge1xuICBzZWxlY3RlZCA9ICdvcHRpb24yJztcbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5TZWxlY3QgYW4gb3B0aW9uPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFsodmFsdWUpXT1cInNlbGVjdGVkXCI+XG4gICAgPG1hdC1vcHRpb24+Tm9uZTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvbjFcIj5PcHRpb24gMTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvbjJcIj5PcHRpb24gMjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvbjNcIj5PcHRpb24gMzwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPHA+WW91IHNlbGVjdGVkOiB7e3NlbGVjdGVkfX08L3A+XG4iXX0=