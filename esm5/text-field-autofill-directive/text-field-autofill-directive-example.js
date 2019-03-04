import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/** @title Monitoring autofill state with cdkAutofill */
var TextFieldAutofillDirectiveExample = /** @class */ (function () {
    function TextFieldAutofillDirectiveExample() {
    }
    TextFieldAutofillDirectiveExample = tslib_1.__decorate([
        Component({
            selector: 'text-field-autofill-directive-example',
            template: "<form>\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n",
            styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
        })
    ], TextFieldAutofillDirectiveExample);
    return TextFieldAutofillDirectiveExample;
}());
export { TextFieldAutofillDirectiveExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDLHdEQUF3RDtBQU14RDtJQUFBO0lBR0EsQ0FBQztJQUhZLGlDQUFpQztRQUw3QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUNBQXVDO1lBQ2pELG1oQkFBMkQ7O1NBRTVELENBQUM7T0FDVyxpQ0FBaUMsQ0FHN0M7SUFBRCx3Q0FBQztDQUFBLEFBSEQsSUFHQztTQUhZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBNb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIHdpdGggY2RrQXV0b2ZpbGwgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQXV0b2ZpbGxEaXJlY3RpdmVFeGFtcGxlIHtcbiAgZmlyc3ROYW1lQXV0b2ZpbGxlZDogYm9vbGVhbjtcbiAgbGFzdE5hbWVBdXRvZmlsbGVkOiBib29sZWFuO1xufVxuIl19