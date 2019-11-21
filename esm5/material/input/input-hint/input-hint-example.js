import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
/**
 * @title Input with hints
 */
var InputHintExample = /** @class */ (function () {
    function InputHintExample() {
    }
    InputHintExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-hint-example',
                    templateUrl: 'input-hint-example.html',
                    styleUrls: ['input-hint-example.css'],
                },] },
    ];
    InputHintExample.ɵfac = function InputHintExample_Factory(t) { return new (t || InputHintExample)(); };
    InputHintExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputHintExample, selectors: [["input-hint-example"]], decls: 9, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "Message"], ["message", ""], ["align", "start"], ["align", "end"]], template: function InputHintExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelement(2, "input", 2, 3);
            i0.ɵɵelementStart(4, "mat-hint", 4);
            i0.ɵɵelementStart(5, "strong");
            i0.ɵɵtext(6, "Don't disclose personal info");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-hint", 5);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r8 = i0.ɵɵreference(3);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("", _r8.value.length, " / 256");
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i2.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputHintExample;
}());
export { InputHintExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputHintExample, [{
        type: Component,
        args: [{
                selector: 'input-hint-example',
                templateUrl: 'input-hint-example.html',
                styleUrls: ['input-hint-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGludC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtaGludC9pbnB1dC1oaW50LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1oaW50L2lucHV0LWhpbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtLQUtnQzs7Z0JBTC9CLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixXQUFXLEVBQUUseUJBQXlCO29CQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDdEM7O29GQUNZLGdCQUFnQjt5REFBaEIsZ0JBQWdCO1lDVjdCLCtCQUVFO1lBQUEseUNBQ0U7WUFBQSw4QkFDQTtZQUFBLG1DQUF3QjtZQUFBLDhCQUFRO1lBQUEsNENBQTRCO1lBQUEsaUJBQVM7WUFBQyxpQkFBVztZQUNqRixtQ0FBc0I7WUFBQSxZQUE4QjtZQUFBLGlCQUFXO1lBQ2pFLGlCQUFpQjtZQUVuQixpQkFBTzs7O1lBSG1CLGVBQThCO1lBQTlCLHFEQUE4Qjs7MkJETHhEO0NBVWdDLEFBTGhDLElBS2dDO1NBQW5CLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBTDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgSW5wdXQgd2l0aCBoaW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1oaW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2lucHV0LWhpbnQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2lucHV0LWhpbnQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRIaW50RXhhbXBsZSB7fVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cblxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICA8aW5wdXQgbWF0SW5wdXQgI21lc3NhZ2UgbWF4bGVuZ3RoPVwiMjU2XCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCI+XG4gICAgPG1hdC1oaW50IGFsaWduPVwic3RhcnRcIj48c3Ryb25nPkRvbid0IGRpc2Nsb3NlIHBlcnNvbmFsIGluZm88L3N0cm9uZz4gPC9tYXQtaGludD5cbiAgICA8bWF0LWhpbnQgYWxpZ249XCJlbmRcIj57e21lc3NhZ2UudmFsdWUubGVuZ3RofX0gLyAyNTY8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICBcbjwvZm9ybT5cbiJdfQ==