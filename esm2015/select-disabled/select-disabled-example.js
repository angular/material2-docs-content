/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * \@title Disabled select
 */
export class SelectDisabledExample {
    constructor() {
        this.disableSelect = new FormControl(false);
    }
}
SelectDisabledExample.decorators = [
    { type: Component, args: [{
                selector: 'select-disabled-example',
                template: "<p>\n  <mat-checkbox [formControl]=\"disableSelect\">Disable select</mat-checkbox>\n</p>\n\n<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Choose an option</mat-label>\n  <mat-select [disabled]=\"disableSelect.value\">\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\" disabled>Option 2 (disabled)</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Choose an option</mat-label>\n  <select matNativeControl [disabled]=\"disableSelect.value\">\n    <option value=\"\" selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\" disabled>Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
if (false) {
    /** @type {?} */
    SelectDisabledExample.prototype.disableSelect;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRpc2FibGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvc2VsZWN0LWRpc2FibGVkL3NlbGVjdC1kaXNhYmxlZC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVEzQyxNQUFNLE9BQU8scUJBQXFCO0lBTGxDO1FBTUUsa0JBQWEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUFQQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsbzNCQUEyQzs7YUFFNUM7Ozs7SUFFQyw4Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRGlzYWJsZWQgc2VsZWN0ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZGlzYWJsZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWRpc2FibGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtZGlzYWJsZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RGlzYWJsZWRFeGFtcGxlIHtcbiAgZGlzYWJsZVNlbGVjdCA9IG5ldyBGb3JtQ29udHJvbChmYWxzZSk7XG59XG4iXX0=