/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/core";
/**
 * \@title Select with custom panel styling
 */
export class SelectPanelClassExample {
    constructor() {
        this.panelColor = new FormControl('red');
    }
}
SelectPanelClassExample.decorators = [
    { type: Component, args: [{
                selector: 'select-panel-class-example',
                templateUrl: 'select-panel-class-example.html',
                styleUrls: ['select-panel-class-example.css'],
                // Encapsulation has to be disabled in order for the
                // component style to apply to the select panel.
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */ SelectPanelClassExample.ɵfac = function SelectPanelClassExample_Factory(t) { return new (t || SelectPanelClassExample)(); };
/** @nocollapse */ SelectPanelClassExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectPanelClassExample, selectors: [["select-panel-class-example"]], decls: 10, vars: 2, consts: [[3, "formControl", "panelClass"], ["value", "red"], ["value", "green"], ["value", "blue"]], template: function SelectPanelClassExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Panel color");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 0);
        i0.ɵɵelementStart(4, "mat-option", 1);
        i0.ɵɵtext(5, "Red");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-option", 2);
        i0.ɵɵtext(7, "Green");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-option", 3);
        i0.ɵɵtext(9, "Blue");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate1("panelClass", "example-panel-", ctx.panelColor.value, "");
        i0.ɵɵproperty("formControl", ctx.panelColor);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption], styles: [".example-panel-red.mat-select-panel {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-panel-green.mat-select-panel {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-panel-blue.mat-select-panel {\n  background: rgba(0, 0, 255, 0.5);\n}\n"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectPanelClassExample, [{
        type: Component,
        args: [{
                selector: 'select-panel-class-example',
                templateUrl: 'select-panel-class-example.html',
                styleUrls: ['select-panel-class-example.css'],
                // Encapsulation has to be disabled in order for the
                // component style to apply to the select panel.
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectPanelClassExample.prototype.panelColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXBhbmVsLWNsYXNzL3NlbGVjdC1wYW5lbC1jbGFzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1wYW5lbC1jbGFzcy9zZWxlY3QtcGFuZWwtY2xhc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0FBYTNDLE1BQU0sT0FBTyx1QkFBdUI7SUFScEM7UUFTRSxlQUFVLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckM7OztZQVZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzs7O2dCQUc3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OEZBQ1ksdUJBQXVCOzREQUF2Qix1QkFBdUI7UUNkcEMsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLDJCQUFXO1FBQUEsaUJBQVk7UUFDbEMscUNBRUU7UUFBQSxxQ0FBd0I7UUFBQSxtQkFBRztRQUFBLGlCQUFhO1FBQ3hDLHFDQUEwQjtRQUFBLHFCQUFLO1FBQUEsaUJBQWE7UUFDNUMscUNBQXlCO1FBQUEsb0JBQUk7UUFBQSxpQkFBYTtRQUM1QyxpQkFBYTtRQUNmLGlCQUFpQjs7UUFMSCxlQUErQztRQUEvQyxtRkFBK0M7UUFEL0MsNENBQTBCOztrRERZM0IsdUJBQXVCO2NBUm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzs7O2dCQUc3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztJQUVDLDZDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFNlbGVjdCB3aXRoIGN1c3RvbSBwYW5lbCBzdHlsaW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1wYW5lbC1jbGFzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtcGFuZWwtY2xhc3MtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1wYW5lbC1jbGFzcy1leGFtcGxlLmNzcyddLFxuICAvLyBFbmNhcHN1bGF0aW9uIGhhcyB0byBiZSBkaXNhYmxlZCBpbiBvcmRlciBmb3IgdGhlXG4gIC8vIGNvbXBvbmVudCBzdHlsZSB0byBhcHBseSB0byB0aGUgc2VsZWN0IHBhbmVsLlxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RQYW5lbENsYXNzRXhhbXBsZSB7XG4gIHBhbmVsQ29sb3IgPSBuZXcgRm9ybUNvbnRyb2woJ3JlZCcpO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlBhbmVsIGNvbG9yPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJwYW5lbENvbG9yXCJcbiAgICAgICAgICAgICAgcGFuZWxDbGFzcz1cImV4YW1wbGUtcGFuZWwte3twYW5lbENvbG9yLnZhbHVlfX1cIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJlZFwiPlJlZDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImdyZWVuXCI+R3JlZW48L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJibHVlXCI+Qmx1ZTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==