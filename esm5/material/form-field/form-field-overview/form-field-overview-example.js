import { Component } from '@angular/core';
/** @title Simple form field */
var FormFieldOverviewExample = /** @class */ (function () {
    function FormFieldOverviewExample() {
    }
    FormFieldOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-overview-example',
                    template: "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Input\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Textarea\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n",
                    styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
                }] }
    ];
    return FormFieldOverviewExample;
}());
export { FormFieldOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1vdmVydmlldy9mb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4QywrQkFBK0I7QUFDL0I7SUFBQTtJQUt1QyxDQUFDOztnQkFMdkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLG1aQUErQzs7aUJBRWhEOztJQUNzQywrQkFBQztDQUFBLEFBTHhDLElBS3dDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBTaW1wbGUgZm9ybSBmaWVsZCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZE92ZXJ2aWV3RXhhbXBsZSB7fVxuIl19