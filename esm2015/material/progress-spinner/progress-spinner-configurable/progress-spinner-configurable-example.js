/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/radio";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/progress-spinner";
import * as i6 from "@angular/material/slider";
function ProgressSpinnerConfigurableExample_section_22_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "label", 2);
    i0.ɵɵtext(2, "Progress:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slider", 11);
    i0.ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_section_22_Template_mat_slider_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.value);
} }
/**
 * \@title Configurable progress spinner
 */
export class ProgressSpinnerConfigurableExample {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
}
ProgressSpinnerConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-spinner-configurable-example',
                templateUrl: 'progress-spinner-configurable-example.html',
                styleUrls: ['progress-spinner-configurable-example.css'],
            },] },
];
/** @nocollapse */ ProgressSpinnerConfigurableExample.ɵfac = function ProgressSpinnerConfigurableExample_Factory(t) { return new (t || ProgressSpinnerConfigurableExample)(); };
/** @nocollapse */ ProgressSpinnerConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressSpinnerConfigurableExample, selectors: [["progress-spinner-configurable-example"]], decls: 28, vars: 6, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-margin", 3, "color", "mode", "value"], [1, "example-margin", 3, "ngModel", "ngModelChange"]], template: function ProgressSpinnerConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-card-content");
        i0.ɵɵelementStart(2, "h2", 0);
        i0.ɵɵtext(3, "Progress spinner configuration");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "section", 1);
        i0.ɵɵelementStart(5, "label", 2);
        i0.ɵɵtext(6, "Color:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-radio-group", 3);
        i0.ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
        i0.ɵɵelementStart(8, "mat-radio-button", 4);
        i0.ɵɵtext(9, " Primary ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-radio-button", 5);
        i0.ɵɵtext(11, " Accent ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-radio-button", 6);
        i0.ɵɵtext(13, " Warn ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "section", 1);
        i0.ɵɵelementStart(15, "label", 2);
        i0.ɵɵtext(16, "Mode:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-radio-group", 3);
        i0.ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_Template_mat_radio_group_ngModelChange_17_listener($event) { return ctx.mode = $event; });
        i0.ɵɵelementStart(18, "mat-radio-button", 7);
        i0.ɵɵtext(19, " Determinate ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-radio-button", 8);
        i0.ɵɵtext(21, " Indeterminate ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(22, ProgressSpinnerConfigurableExample_section_22_Template, 4, 1, "section", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "mat-card");
        i0.ɵɵelementStart(24, "mat-card-content");
        i0.ɵɵelementStart(25, "h2", 0);
        i0.ɵɵtext(26, "Result");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(27, "mat-progress-spinner", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngModel", ctx.color);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngModel", ctx.mode);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.mode === "determinate");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("color", ctx.color)("mode", ctx.mode)("value", ctx.value);
    } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatRadioGroup, i3.NgControlStatus, i3.NgModel, i2.MatRadioButton, i4.NgIf, i5.MatProgressSpinner, i6.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProgressSpinnerConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'progress-spinner-configurable-example',
                templateUrl: 'progress-spinner-configurable-example.html',
                styleUrls: ['progress-spinner-configurable-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ProgressSpinnerConfigurableExample.prototype.color;
    /** @type {?} */
    ProgressSpinnerConfigurableExample.prototype.mode;
    /** @type {?} */
    ProgressSpinnerConfigurableExample.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUvcHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUvcHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0lDK0JwQyxrQ0FDRTtJQUFBLGdDQUE4QjtJQUFBLHlCQUFTO0lBQUEsaUJBQVE7SUFDL0Msc0NBQW9FO0lBQWpDLHVPQUFtQjtJQUFDLGlCQUFhO0lBQ3RFLGlCQUFVOzs7SUFEMkIsZUFBbUI7SUFBbkIsc0NBQW1COzs7OztBRHJCNUQsTUFBTSxPQUFPLGtDQUFrQztJQUwvQztRQU1FLFVBQUssR0FBaUIsU0FBUyxDQUFDO1FBQ2hDLFNBQUksR0FBd0IsYUFBYSxDQUFDO1FBQzFDLFVBQUssR0FBRyxFQUFFLENBQUM7S0FDWjs7O1lBVEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3pEOztvSEFDWSxrQ0FBa0M7dUVBQWxDLGtDQUFrQztRQ1ovQyxnQ0FDRTtRQUFBLHdDQUNFO1FBQUEsNkJBQXVCO1FBQUEsOENBQThCO1FBQUEsaUJBQUs7UUFFMUQsa0NBQ0U7UUFBQSxnQ0FBOEI7UUFBQSxzQkFBTTtRQUFBLGlCQUFRO1FBQzVDLDBDQUNFO1FBRGUsb0tBQW1CO1FBQ2xDLDJDQUNFO1FBQUEseUJBQ0Y7UUFBQSxpQkFBbUI7UUFDbkIsNENBQ0U7UUFBQSx5QkFDRjtRQUFBLGlCQUFtQjtRQUNuQiw0Q0FDRTtRQUFBLHVCQUNGO1FBQUEsaUJBQW1CO1FBQ3JCLGlCQUFrQjtRQUNwQixpQkFBVTtRQUVWLG1DQUNFO1FBQUEsaUNBQThCO1FBQUEsc0JBQUs7UUFBQSxpQkFBUTtRQUMzQywyQ0FDRTtRQURlLG9LQUFrQjtRQUNqQyw0Q0FDRTtRQUFBLDhCQUNGO1FBQUEsaUJBQW1CO1FBQ25CLDRDQUNFO1FBQUEsZ0NBQ0Y7UUFBQSxpQkFBbUI7UUFDckIsaUJBQWtCO1FBQ3BCLGlCQUFVO1FBRVYsNkZBQ0U7UUFHSixpQkFBbUI7UUFDckIsaUJBQVc7UUFDWCxpQ0FDRTtRQUFBLHlDQUNFO1FBQUEsOEJBQXVCO1FBQUEsdUJBQU07UUFBQSxpQkFBSztRQUVsQyw0Q0FLdUI7UUFDekIsaUJBQW1CO1FBQ3JCLGlCQUFXOztRQTFDWSxlQUFtQjtRQUFuQixtQ0FBbUI7UUFlbkIsZ0JBQWtCO1FBQWxCLGtDQUFrQjtRQVVKLGVBQThCO1FBQTlCLGlEQUE4QjtRQVkzRCxlQUFlO1FBQWYsaUNBQWUsa0JBQUEsb0JBQUE7O2tERC9CVixrQ0FBa0M7Y0FMOUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3pEOzs7O0lBRUMsbURBQWdDOztJQUNoQyxrREFBMEM7O0lBQzFDLG1EQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtQcm9ncmVzc1NwaW5uZXJNb2RlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcblxuLyoqXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIHByb2dyZXNzIHNwaW5uZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU3Bpbm5lckNvbmZpZ3VyYWJsZUV4YW1wbGUge1xuICBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuICBtb2RlOiBQcm9ncmVzc1NwaW5uZXJNb2RlID0gJ2RldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbn1cbiIsIjxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlByb2dyZXNzIHNwaW5uZXIgY29uZmlndXJhdGlvbjwvaDI+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5Db2xvcjo8L2xhYmVsPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBbKG5nTW9kZWwpXT1cImNvbG9yXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cInByaW1hcnlcIj5cbiAgICAgICAgICBQcmltYXJ5XG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIHZhbHVlPVwiYWNjZW50XCI+XG4gICAgICAgICAgQWNjZW50XG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIHZhbHVlPVwid2FyblwiPlxuICAgICAgICAgIFdhcm5cbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+TW9kZTo8L2xhYmVsPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBbKG5nTW9kZWwpXT1cIm1vZGVcIj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIHZhbHVlPVwiZGV0ZXJtaW5hdGVcIj5cbiAgICAgICAgICBEZXRlcm1pbmF0ZVxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImluZGV0ZXJtaW5hdGVcIj5cbiAgICAgICAgICBJbmRldGVybWluYXRlXG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCIgKm5nSWY9XCJtb2RlID09PSAnZGV0ZXJtaW5hdGUnXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPlByb2dyZXNzOjwvbGFiZWw+XG4gICAgICA8bWF0LXNsaWRlciBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPjwvbWF0LXNsaWRlcj5cbiAgICA8L3NlY3Rpb24+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG48bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxoMiBjbGFzcz1cImV4YW1wbGUtaDJcIj5SZXN1bHQ8L2gyPlxuXG4gICAgPG1hdC1wcm9ncmVzcy1zcGlubmVyXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIlxuICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICBbbW9kZV09XCJtb2RlXCJcbiAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCI+XG4gICAgPC9tYXQtcHJvZ3Jlc3Mtc3Bpbm5lcj5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cbiJdfQ==