import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/** @title Form field with hints */
var FormFieldHintExample = /** @class */ (function () {
    function FormFieldHintExample() {
    }
    FormFieldHintExample = tslib_1.__decorate([
        Component({
            selector: 'form-field-hint-example',
            template: "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <input matInput #input maxlength=\"10\" placeholder=\"Enter some input\">\n    <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select me\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n",
            styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
        })
    ], FormFieldHintExample);
    return FormFieldHintExample;
}());
export { FormFieldHintExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1oaW50LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvZm9ybS1maWVsZC1oaW50L2Zvcm0tZmllbGQtaGludC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDLG1DQUFtQztBQU1uQztJQUFBO0lBQW1DLENBQUM7SUFBdkIsb0JBQW9CO1FBTGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsNmZBQTJDOztTQUU1QyxDQUFDO09BQ1csb0JBQW9CLENBQUc7SUFBRCwyQkFBQztDQUFBLEFBQXBDLElBQW9DO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggaGludHMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtaGludC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWhpbnQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0tZmllbGQtaGludC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRIaW50RXhhbXBsZSB7fVxuIl19