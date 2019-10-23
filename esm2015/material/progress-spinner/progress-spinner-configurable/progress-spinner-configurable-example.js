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
/*@__PURE__*/ i0.ɵsetClassMetadata(ProgressSpinnerConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'progress-spinner-configurable-example',
                templateUrl: 'progress-spinner-configurable-example.html',
                styleUrls: ['progress-spinner-configurable-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    ProgressSpinnerConfigurableExample.prototype.color;
    /** @type {?} */
    ProgressSpinnerConfigurableExample.prototype.mode;
    /** @type {?} */
    ProgressSpinnerConfigurableExample.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlL3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLWNvbmZpZ3VyYWJsZS9wcm9ncmVzcy1zcGlubmVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUMrQnBDLGtDQUNFO0lBQUEsZ0NBQThCO0lBQUEseUJBQVM7SUFBQSxpQkFBUTtJQUMvQyxzQ0FBb0U7SUFBakMsdU9BQW1CO0lBQUMsaUJBQWE7SUFDdEUsaUJBQVU7OztJQUQyQixlQUFtQjtJQUFuQixzQ0FBbUI7Ozs7O0FEckI1RCxNQUFNLE9BQU8sa0NBQWtDO0lBTC9DO1FBTUUsVUFBSyxHQUFpQixTQUFTLENBQUM7UUFDaEMsU0FBSSxHQUF3QixhQUFhLENBQUM7UUFDMUMsVUFBSyxHQUFHLEVBQUUsQ0FBQztLQUNaOzs7WUFUQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsV0FBVyxFQUFFLDRDQUE0QztnQkFDekQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7YUFDekQ7O29IQUNZLGtDQUFrQzt1RUFBbEMsa0NBQWtDO1FDWi9DLGdDQUNFO1FBQUEsd0NBQ0U7UUFBQSw2QkFBdUI7UUFBQSw4Q0FBOEI7UUFBQSxpQkFBSztRQUUxRCxrQ0FDRTtRQUFBLGdDQUE4QjtRQUFBLHNCQUFNO1FBQUEsaUJBQVE7UUFDNUMsMENBQ0U7UUFEZSxvS0FBbUI7UUFDbEMsMkNBQ0U7UUFBQSx5QkFDRjtRQUFBLGlCQUFtQjtRQUNuQiw0Q0FDRTtRQUFBLHlCQUNGO1FBQUEsaUJBQW1CO1FBQ25CLDRDQUNFO1FBQUEsdUJBQ0Y7UUFBQSxpQkFBbUI7UUFDckIsaUJBQWtCO1FBQ3BCLGlCQUFVO1FBRVYsbUNBQ0U7UUFBQSxpQ0FBOEI7UUFBQSxzQkFBSztRQUFBLGlCQUFRO1FBQzNDLDJDQUNFO1FBRGUsb0tBQWtCO1FBQ2pDLDRDQUNFO1FBQUEsOEJBQ0Y7UUFBQSxpQkFBbUI7UUFDbkIsNENBQ0U7UUFBQSxnQ0FDRjtRQUFBLGlCQUFtQjtRQUNyQixpQkFBa0I7UUFDcEIsaUJBQVU7UUFFViw2RkFDRTtRQUdKLGlCQUFtQjtRQUNyQixpQkFBVztRQUNYLGlDQUNFO1FBQUEseUNBQ0U7UUFBQSw4QkFBdUI7UUFBQSx1QkFBTTtRQUFBLGlCQUFLO1FBRWxDLDRDQUt1QjtRQUN6QixpQkFBbUI7UUFDckIsaUJBQVc7O1FBMUNZLGVBQW1CO1FBQW5CLG1DQUFtQjtRQWVuQixnQkFBa0I7UUFBbEIsa0NBQWtCO1FBVUosZUFBOEI7UUFBOUIsaURBQThCO1FBWTNELGVBQWU7UUFBZixpQ0FBZSxrQkFBQSxvQkFBQTs7bUNEL0JWLGtDQUFrQztjQUw5QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsV0FBVyxFQUFFLDRDQUE0QztnQkFDekQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7YUFDekQ7Ozs7SUFFQyxtREFBZ0M7O0lBQ2hDLGtEQUEwQzs7SUFDMUMsbURBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge1Byb2dyZXNzU3Bpbm5lck1vZGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuXG4vKipcbiAqIEB0aXRsZSBDb25maWd1cmFibGUgcHJvZ3Jlc3Mgc3Bpbm5lclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm9ncmVzcy1zcGlubmVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdwcm9ncmVzcy1zcGlubmVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTcGlubmVyQ29uZmlndXJhYmxlRXhhbXBsZSB7XG4gIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIG1vZGU6IFByb2dyZXNzU3Bpbm5lck1vZGUgPSAnZGV0ZXJtaW5hdGUnO1xuICB2YWx1ZSA9IDUwO1xufVxuIiwiPG1hdC1jYXJkPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8aDIgY2xhc3M9XCJleGFtcGxlLWgyXCI+UHJvZ3Jlc3Mgc3Bpbm5lciBjb25maWd1cmF0aW9uPC9oMj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPkNvbG9yOjwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIFsobmdNb2RlbCldPVwiY29sb3JcIj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIHZhbHVlPVwicHJpbWFyeVwiPlxuICAgICAgICAgIFByaW1hcnlcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJhY2NlbnRcIj5cbiAgICAgICAgICBBY2NlbnRcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJ3YXJuXCI+XG4gICAgICAgICAgV2FyblxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5Nb2RlOjwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIFsobmdNb2RlbCldPVwibW9kZVwiPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJkZXRlcm1pbmF0ZVwiPlxuICAgICAgICAgIERldGVybWluYXRlXG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIHZhbHVlPVwiaW5kZXRlcm1pbmF0ZVwiPlxuICAgICAgICAgIEluZGV0ZXJtaW5hdGVcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIiAqbmdJZj1cIm1vZGUgPT09ICdkZXRlcm1pbmF0ZSdcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+UHJvZ3Jlc3M6PC9sYWJlbD5cbiAgICAgIDxtYXQtc2xpZGVyIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cInZhbHVlXCI+PC9tYXQtc2xpZGVyPlxuICAgIDwvc2VjdGlvbj5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cbjxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlJlc3VsdDwvaDI+XG5cbiAgICA8bWF0LXByb2dyZXNzLXNwaW5uZXJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiXG4gICAgICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgICBbdmFsdWVdPVwidmFsdWVcIj5cbiAgICA8L21hdC1wcm9ncmVzcy1zcGlubmVyPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuIl19