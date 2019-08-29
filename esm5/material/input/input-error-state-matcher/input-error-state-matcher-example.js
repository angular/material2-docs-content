import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
export { MyErrorStateMatcher };
/** @title Input with a custom ErrorStateMatcher */
var InputErrorStateMatcherExample = /** @class */ (function () {
    function InputErrorStateMatcherExample() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    InputErrorStateMatcherExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-error-state-matcher-example',
                    template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-hint>Errors appear instantly!</mat-hint>\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n",
                    styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
                }] }
    ];
    return InputErrorStateMatcherExample;
}());
export { InputErrorStateMatcherExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2lucHV0L2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXIvaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBOEIsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkYsa0VBQWtFO0FBQ2xFO0lBQUE7SUFLQSxDQUFDO0lBSkMsMENBQVksR0FBWixVQUFhLE9BQTJCLEVBQUUsSUFBd0M7UUFDaEYsSUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDM0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxJQUtDOztBQUVELG1EQUFtRDtBQUNuRDtJQUFBO1FBTUUscUJBQWdCLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFO1lBQ3JDLFVBQVUsQ0FBQyxRQUFRO1lBQ25CLFVBQVUsQ0FBQyxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUVILFlBQU8sR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Z0JBWkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLHlrQkFBdUQ7O2lCQUV4RDs7SUFRRCxvQ0FBQztDQUFBLEFBWkQsSUFZQztTQVBZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdGb3JtLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Vycm9yU3RhdGVNYXRjaGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLyoqIEVycm9yIHdoZW4gaW52YWxpZCBjb250cm9sIGlzIGRpcnR5LCB0b3VjaGVkLCBvciBzdWJtaXR0ZWQuICovXG5leHBvcnQgY2xhc3MgTXlFcnJvclN0YXRlTWF0Y2hlciBpbXBsZW1lbnRzIEVycm9yU3RhdGVNYXRjaGVyIHtcbiAgaXNFcnJvclN0YXRlKGNvbnRyb2w6IEZvcm1Db250cm9sIHwgbnVsbCwgZm9ybTogRm9ybUdyb3VwRGlyZWN0aXZlIHwgTmdGb3JtIHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzU3VibWl0dGVkID0gZm9ybSAmJiBmb3JtLnN1Ym1pdHRlZDtcbiAgICByZXR1cm4gISEoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkIHx8IGlzU3VibWl0dGVkKSk7XG4gIH1cbn1cblxuLyoqIEB0aXRsZSBJbnB1dCB3aXRoIGEgY3VzdG9tIEVycm9yU3RhdGVNYXRjaGVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlIHtcbiAgZW1haWxGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1xuICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgVmFsaWRhdG9ycy5lbWFpbCxcbiAgXSk7XG5cbiAgbWF0Y2hlciA9IG5ldyBNeUVycm9yU3RhdGVNYXRjaGVyKCk7XG59XG4iXX0=