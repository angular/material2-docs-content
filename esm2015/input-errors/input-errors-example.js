/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
/**
 * \@title Input with error messages
 */
export class InputErrorsExample {
    constructor() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
    }
}
InputErrorsExample.decorators = [
    { type: Component, args: [{
                selector: 'input-errors-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    InputErrorsExample.prototype.emailFormControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZXJyb3JzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvaW5wdXQtZXJyb3JzL2lucHV0LWVycm9ycy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFVdkQsTUFBTSxPQUFPLGtCQUFrQjtJQUwvQjtRQU1FLHFCQUFnQixHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRTtZQUNyQyxVQUFVLENBQUMsUUFBUTtZQUNuQixVQUFVLENBQUMsS0FBSztTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFWQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsMGVBQXdDOzthQUV6Qzs7OztJQUVDLDhDQUdHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dCB3aXRoIGVycm9yIG1lc3NhZ2VzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWVycm9ycy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdpbnB1dC1lcnJvcnMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2lucHV0LWVycm9ycy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEVycm9yc0V4YW1wbGUge1xuICBlbWFpbEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBbXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICBWYWxpZGF0b3JzLmVtYWlsLFxuICBdKTtcbn1cbiJdfQ==