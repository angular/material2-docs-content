import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/radio";
/**
 * @title Testing with MatRadioHarness
 */
export class RadioHarnessExample {
}
RadioHarnessExample.ɵfac = function RadioHarnessExample_Factory(t) { return new (t || RadioHarnessExample)(); };
RadioHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RadioHarnessExample, selectors: [["radio-harness-example"]], decls: 7, vars: 0, consts: [["name", "flavors"], ["value", "chocolate", "checked", "true"], ["value", "vanilla"], ["value", "strawberry"]], template: function RadioHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-radio-group", 0);
        i0.ɵɵelementStart(1, "mat-radio-button", 1);
        i0.ɵɵtext(2, "Chocolate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-radio-button", 2);
        i0.ɵɵtext(4, "Vanilla");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-radio-button", 3);
        i0.ɵɵtext(6, "Strawberry");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatRadioGroup, i1.MatRadioButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadioHarnessExample, [{
        type: Component,
        args: [{ selector: 'radio-harness-example', template: "<mat-radio-group name=\"flavors\">\n  <mat-radio-button value=\"chocolate\" checked=\"true\">Chocolate</mat-radio-button>\n  <mat-radio-button value=\"vanilla\">Vanilla</mat-radio-button>\n  <mat-radio-button value=\"strawberry\">Strawberry</mat-radio-button>\n</mat-radio-group>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcmFkaW8vcmFkaW8taGFybmVzcy9yYWRpby1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9yYWRpby1oYXJuZXNzL3JhZGlvLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxtQkFBbUI7O3NGQUFuQixtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1RoQywwQ0FBZ0M7UUFDOUIsMkNBQW1EO1FBQUEseUJBQVM7UUFBQSxpQkFBbUI7UUFDL0UsMkNBQWtDO1FBQUEsdUJBQU87UUFBQSxpQkFBbUI7UUFDNUQsMkNBQXFDO1FBQUEsMEJBQVU7UUFBQSxpQkFBbUI7UUFDcEUsaUJBQWtCOzt1RkRLTCxtQkFBbUI7Y0FKL0IsU0FBUzsyQkFDRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRSYWRpb0hhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFkaW8taGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdyYWRpby1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvSGFybmVzc0V4YW1wbGUge31cbiIsIjxtYXQtcmFkaW8tZ3JvdXAgbmFtZT1cImZsYXZvcnNcIj5cbiAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJjaG9jb2xhdGVcIiBjaGVja2VkPVwidHJ1ZVwiPkNob2NvbGF0ZTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJ2YW5pbGxhXCI+VmFuaWxsYTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJzdHJhd2JlcnJ5XCI+U3RyYXdiZXJyeTwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuIl19