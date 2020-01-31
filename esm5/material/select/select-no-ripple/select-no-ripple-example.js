import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
/** @title Select with no option ripple */
var SelectNoRippleExample = /** @class */ (function () {
    function SelectNoRippleExample() {
    }
    SelectNoRippleExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-no-ripple-example',
                    templateUrl: 'select-no-ripple-example.html',
                    styleUrls: ['select-no-ripple-example.css'],
                },] },
    ];
    SelectNoRippleExample.ɵfac = function SelectNoRippleExample_Factory(t) { return new (t || SelectNoRippleExample)(); };
    SelectNoRippleExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectNoRippleExample, selectors: [["select-no-ripple-example"]], decls: 10, vars: 0, consts: [["disableRipple", ""], ["value", "1"], ["value", "2"], ["value", "3"]], template: function SelectNoRippleExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Select an option");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-select", 0);
            i0.ɵɵelementStart(4, "mat-option", 1);
            i0.ɵɵtext(5, "Option 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-option", 2);
            i0.ɵɵtext(7, "Option 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-option", 3);
            i0.ɵɵtext(9, "Option 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption], styles: [""] });
    return SelectNoRippleExample;
}());
export { SelectNoRippleExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectNoRippleExample, [{
        type: Component,
        args: [{
                selector: 'select-no-ripple-example',
                templateUrl: 'select-no-ripple-example.html',
                styleUrls: ['select-no-ripple-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW5vLXJpcHBsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1uby1yaXBwbGUvc2VsZWN0LW5vLXJpcHBsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1uby1yaXBwbGUvc2VsZWN0LW5vLXJpcHBsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEMsMENBQTBDO0FBQzFDO0lBQUE7S0FLcUM7O2dCQUxwQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtvQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzVDOzs4RkFDWSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQ1JsQyxzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsZ0NBQWdCO1lBQUEsaUJBQVk7WUFDdkMscUNBQ0U7WUFBQSxxQ0FBc0I7WUFBQSx3QkFBUTtZQUFBLGlCQUFhO1lBQzNDLHFDQUFzQjtZQUFBLHdCQUFRO1lBQUEsaUJBQWE7WUFDM0MscUNBQXNCO1lBQUEsd0JBQVE7WUFBQSxpQkFBYTtZQUM3QyxpQkFBYTtZQUNmLGlCQUFpQjs7Z0NEUGpCO0NBUXFDLEFBTHJDLElBS3FDO1NBQXhCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCBubyBvcHRpb24gcmlwcGxlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3Qtbm8tcmlwcGxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1uby1yaXBwbGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1uby1yaXBwbGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Tm9SaXBwbGVFeGFtcGxlIHt9XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+U2VsZWN0IGFuIG9wdGlvbjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBkaXNhYmxlUmlwcGxlPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMVwiPk9wdGlvbiAxPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMlwiPk9wdGlvbiAyPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiM1wiPk9wdGlvbiAzPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19