import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
/** @title Form field with label */
var FormFieldLabelExample = /** @class */ (function () {
    function FormFieldLabelExample(fb) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    FormFieldLabelExample = tslib_1.__decorate([
        Component({
            selector: 'form-field-label-example',
            template: "<div class=\"example-container\">\n  <form class=\"example-container\" [formGroup]=\"options\">\n    <mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group formControlName=\"floatLabel\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n        <mat-radio-button value=\"never\">Never</mat-radio-button>\n      </mat-radio-group>\n    </div>\n  </form>\n\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <input matInput placeholder=\"Simple placeholder\" required>\n  </mat-form-field>\n\n  <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n    <mat-label>Both a label and a placeholder</mat-label>\n    <input matInput placeholder=\"Simple placeholder\">\n  </mat-form-field>\n\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <mat-select required>\n      <mat-option>-- None --</mat-option>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>\n  </mat-form-field>\n</div>\n",
            styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], FormFieldLabelExample);
    return FormFieldLabelExample;
}());
export { FormFieldLabelExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Zvcm0tZmllbGQtbGFiZWwvZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxtQ0FBbUM7QUFNbkM7SUFHRSwrQkFBWSxFQUFlO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN0QixZQUFZLEVBQUUsS0FBSztZQUNuQixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBUlUscUJBQXFCO1FBTGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsaTFDQUE0Qzs7U0FFN0MsQ0FBQztpREFJZ0IsV0FBVztPQUhoQixxQkFBcUIsQ0FTakM7SUFBRCw0QkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBsYWJlbCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZExhYmVsRXhhbXBsZSB7XG4gIG9wdGlvbnM6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBmYi5ncm91cCh7XG4gICAgICBoaWRlUmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgZmxvYXRMYWJlbDogJ2F1dG8nLFxuICAgIH0pO1xuICB9XG59XG4iXX0=