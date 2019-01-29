import * as tslib_1 from "tslib";
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
    InputErrorStateMatcherExample = tslib_1.__decorate([
        Component({
            selector: 'input-error-state-matcher-example',
            template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-hint>Errors appear instantly!</mat-hint>\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n",
            styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
        })
    ], InputErrorStateMatcherExample);
    return InputErrorStateMatcherExample;
}());
export { InputErrorStateMatcherExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXIvaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQThCLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR25GLGtFQUFrRTtBQUNsRTtJQUFBO0lBS0EsQ0FBQztJQUpDLDBDQUFZLEdBQVosVUFBYSxPQUEyQixFQUFFLElBQXdDO1FBQ2hGLElBQU0sV0FBVyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7QUFFRCxtREFBbUQ7QUFNbkQ7SUFMQTtRQU1FLHFCQUFnQixHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRTtZQUNyQyxVQUFVLENBQUMsUUFBUTtZQUNuQixVQUFVLENBQUMsS0FBSztTQUNqQixDQUFDLENBQUM7UUFFSCxZQUFPLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFQWSw2QkFBNkI7UUFMekMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1DQUFtQztZQUM3Qyx5a0JBQXVEOztTQUV4RCxDQUFDO09BQ1csNkJBQTZCLENBT3pDO0lBQUQsb0NBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtFcnJvclN0YXRlTWF0Y2hlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8qKiBFcnJvciB3aGVuIGludmFsaWQgY29udHJvbCBpcyBkaXJ0eSwgdG91Y2hlZCwgb3Igc3VibWl0dGVkLiAqL1xuZXhwb3J0IGNsYXNzIE15RXJyb3JTdGF0ZU1hdGNoZXIgaW1wbGVtZW50cyBFcnJvclN0YXRlTWF0Y2hlciB7XG4gIGlzRXJyb3JTdGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCB8IG51bGwsIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSB8IE5nRm9ybSB8IG51bGwpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1N1Ym1pdHRlZCA9IGZvcm0gJiYgZm9ybS5zdWJtaXR0ZWQ7XG4gICAgcmV0dXJuICEhKGNvbnRyb2wgJiYgY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZCB8fCBpc1N1Ym1pdHRlZCkpO1xuICB9XG59XG5cbi8qKiBAdGl0bGUgSW5wdXQgd2l0aCBhIGN1c3RvbSBFcnJvclN0YXRlTWF0Y2hlciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEVycm9yU3RhdGVNYXRjaGVyRXhhbXBsZSB7XG4gIGVtYWlsRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtcbiAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgIFZhbGlkYXRvcnMuZW1haWwsXG4gIF0pO1xuXG4gIG1hdGNoZXIgPSBuZXcgTXlFcnJvclN0YXRlTWF0Y2hlcigpO1xufVxuIl19