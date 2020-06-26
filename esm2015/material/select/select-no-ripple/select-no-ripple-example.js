import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
/** @title Select with no option ripple */
let SelectNoRippleExample = /** @class */ (() => {
    class SelectNoRippleExample {
    }
    SelectNoRippleExample.ɵfac = function SelectNoRippleExample_Factory(t) { return new (t || SelectNoRippleExample)(); };
    SelectNoRippleExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectNoRippleExample, selectors: [["select-no-ripple-example"]], decls: 10, vars: 0, consts: [["appearance", "fill"], ["disableRipple", ""], ["value", "1"], ["value", "2"], ["value", "3"]], template: function SelectNoRippleExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Select an option");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-select", 1);
            i0.ɵɵelementStart(4, "mat-option", 2);
            i0.ɵɵtext(5, "Option 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-option", 3);
            i0.ɵɵtext(7, "Option 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-option", 4);
            i0.ɵɵtext(9, "Option 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption], styles: [""] });
    return SelectNoRippleExample;
})();
export { SelectNoRippleExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectNoRippleExample, [{
        type: Component,
        args: [{
                selector: 'select-no-ripple-example',
                templateUrl: 'select-no-ripple-example.html',
                styleUrls: ['select-no-ripple-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW5vLXJpcHBsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1uby1yaXBwbGUvc2VsZWN0LW5vLXJpcHBsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1uby1yaXBwbGUvc2VsZWN0LW5vLXJpcHBsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEMsMENBQTBDO0FBQzFDO0lBQUEsTUFLYSxxQkFBcUI7OzhGQUFyQixxQkFBcUI7OERBQXJCLHFCQUFxQjtZQ1JsQyx5Q0FDRTtZQUFBLGlDQUFXO1lBQUEsZ0NBQWdCO1lBQUEsaUJBQVk7WUFDdkMscUNBQ0U7WUFBQSxxQ0FBc0I7WUFBQSx3QkFBUTtZQUFBLGlCQUFhO1lBQzNDLHFDQUFzQjtZQUFBLHdCQUFRO1lBQUEsaUJBQWE7WUFDM0MscUNBQXNCO1lBQUEsd0JBQVE7WUFBQSxpQkFBYTtZQUM3QyxpQkFBYTtZQUNmLGlCQUFpQjs7Z0NEUGpCO0tBUXFDO1NBQXhCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCBubyBvcHRpb24gcmlwcGxlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3Qtbm8tcmlwcGxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1uby1yaXBwbGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1uby1yaXBwbGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Tm9SaXBwbGVFeGFtcGxlIHt9XG4iLCI8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5TZWxlY3QgYW4gb3B0aW9uPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IGRpc2FibGVSaXBwbGU+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIyXCI+T3B0aW9uIDI8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIzXCI+T3B0aW9uIDM8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=