import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
/**
 * @title Input with hints
 */
export class InputHintExample {
}
InputHintExample.ɵfac = function InputHintExample_Factory(t) { return new (t || InputHintExample)(); };
InputHintExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputHintExample, selectors: [["input-hint-example"]], decls: 11, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "Ex. I need help with..."], ["message", ""], ["align", "start"], ["align", "end"]], template: function InputHintExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Message");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2, 3);
        i0.ɵɵelementStart(6, "mat-hint", 4);
        i0.ɵɵelementStart(7, "strong");
        i0.ɵɵtext(8, "Don't disclose personal info");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-hint", 5);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(5);
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate1("", _r0.value.length, " / 256");
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i2.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputHintExample, [{
        type: Component,
        args: [{
                selector: 'input-hint-example',
                templateUrl: 'input-hint-example.html',
                styleUrls: ['input-hint-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGludC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtaGludC9pbnB1dC1oaW50LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1oaW50L2lucHV0LWhpbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLGdCQUFnQjs7Z0ZBQWhCLGdCQUFnQjtxREFBaEIsZ0JBQWdCO1FDVjdCLCtCQUEyQjtRQUN6Qix5Q0FBMkM7UUFDekMsaUNBQVc7UUFBQSx1QkFBTztRQUFBLGlCQUFZO1FBQzlCLDhCQUErRTtRQUMvRSxtQ0FBd0I7UUFBQSw4QkFBUTtRQUFBLDRDQUE0QjtRQUFBLGlCQUFTO1FBQUMsaUJBQVc7UUFDakYsbUNBQXNCO1FBQUEsYUFBOEI7UUFBQSxpQkFBVztRQUNqRSxpQkFBaUI7UUFDbkIsaUJBQU87OztRQUZtQixnQkFBOEI7UUFBOUIscURBQThCOzt1RkRLM0MsZ0JBQWdCO2NBTDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgSW5wdXQgd2l0aCBoaW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1oaW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2lucHV0LWhpbnQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2lucHV0LWhpbnQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRIaW50RXhhbXBsZSB7fVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgPG1hdC1sYWJlbD5NZXNzYWdlPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0ICNtZXNzYWdlIG1heGxlbmd0aD1cIjI1NlwiIHBsYWNlaG9sZGVyPVwiRXguIEkgbmVlZCBoZWxwIHdpdGguLi5cIj5cbiAgICA8bWF0LWhpbnQgYWxpZ249XCJzdGFydFwiPjxzdHJvbmc+RG9uJ3QgZGlzY2xvc2UgcGVyc29uYWwgaW5mbzwvc3Ryb25nPiA8L21hdC1oaW50PlxuICAgIDxtYXQtaGludCBhbGlnbj1cImVuZFwiPnt7bWVzc2FnZS52YWx1ZS5sZW5ndGh9fSAvIDI1NjwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=