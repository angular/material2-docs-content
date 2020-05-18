/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/progress-bar/progress-bar-configurable/progress-bar-configurable-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/radio";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/progress-bar";
import * as i6 from "@angular/material/slider";
function ProgressBarConfigurableExample_section_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "label", 2);
    i0.ɵɵtext(2, "Progress:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slider", 13);
    i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_section_26_Template_mat_slider_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.value);
} }
function ProgressBarConfigurableExample_section_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "label", 2);
    i0.ɵɵtext(2, "Buffer:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slider", 13);
    i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_section_27_Template_mat_slider_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.bufferValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1.bufferValue);
} }
/**
 * \@title Configurable progress-bar
 */
let ProgressBarConfigurableExample = /** @class */ (() => {
    /**
     * \@title Configurable progress-bar
     */
    class ProgressBarConfigurableExample {
        constructor() {
            this.color = 'primary';
            this.mode = 'determinate';
            this.value = 50;
            this.bufferValue = 75;
        }
    }
    ProgressBarConfigurableExample.decorators = [
        { type: Component, args: [{
                    selector: 'progress-bar-configurable-example',
                    templateUrl: 'progress-bar-configurable-example.html',
                    styleUrls: ['progress-bar-configurable-example.css'],
                },] },
    ];
    /** @nocollapse */ ProgressBarConfigurableExample.ɵfac = function ProgressBarConfigurableExample_Factory(t) { return new (t || ProgressBarConfigurableExample)(); };
    /** @nocollapse */ ProgressBarConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressBarConfigurableExample, selectors: [["progress-bar-configurable-example"]], decls: 34, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["value", "buffer", 1, "example-margin"], ["value", "query", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-margin", 3, "color", "mode", "value", "bufferValue"], [1, "example-margin", 3, "ngModel", "ngModelChange"]], template: function ProgressBarConfigurableExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-card");
            i0.ɵɵelementStart(1, "mat-card-content");
            i0.ɵɵelementStart(2, "h2", 0);
            i0.ɵɵtext(3, "Progress bar configuration");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "section", 1);
            i0.ɵɵelementStart(5, "label", 2);
            i0.ɵɵtext(6, "Color:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-radio-group", 3);
            i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
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
            i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_Template_mat_radio_group_ngModelChange_17_listener($event) { return ctx.mode = $event; });
            i0.ɵɵelementStart(18, "mat-radio-button", 7);
            i0.ɵɵtext(19, " Determinate ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "mat-radio-button", 8);
            i0.ɵɵtext(21, " Indeterminate ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "mat-radio-button", 9);
            i0.ɵɵtext(23, " Buffer ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "mat-radio-button", 10);
            i0.ɵɵtext(25, " Query ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(26, ProgressBarConfigurableExample_section_26_Template, 4, 1, "section", 11);
            i0.ɵɵtemplate(27, ProgressBarConfigurableExample_section_27_Template, 4, 1, "section", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "mat-card");
            i0.ɵɵelementStart(29, "mat-card-content");
            i0.ɵɵelementStart(30, "h2", 0);
            i0.ɵɵtext(31, "Result");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "section", 1);
            i0.ɵɵelement(33, "mat-progress-bar", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.color);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngModel", ctx.mode);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.mode === "determinate" || ctx.mode === "buffer");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.mode === "buffer");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("color", ctx.color)("mode", ctx.mode)("value", ctx.value)("bufferValue", ctx.bufferValue);
        } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatRadioGroup, i3.NgControlStatus, i3.NgModel, i2.MatRadioButton, i4.NgIf, i5.MatProgressBar, i6.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
    return ProgressBarConfigurableExample;
})();
export { ProgressBarConfigurableExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProgressBarConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'progress-bar-configurable-example',
                templateUrl: 'progress-bar-configurable-example.html',
                styleUrls: ['progress-bar-configurable-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ProgressBarConfigurableExample.prototype.color;
    /** @type {?} */
    ProgressBarConfigurableExample.prototype.mode;
    /** @type {?} */
    ProgressBarConfigurableExample.prototype.value;
    /** @type {?} */
    ProgressBarConfigurableExample.prototype.bufferValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUvcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUvcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0lDcUNwQyxrQ0FDRTtJQUFBLGdDQUE4QjtJQUFBLHlCQUFTO0lBQUEsaUJBQVE7SUFDL0Msc0NBQW9FO0lBQWpDLG1PQUFtQjtJQUFDLGlCQUFhO0lBQ3RFLGlCQUFVOzs7SUFEMkIsZUFBbUI7SUFBbkIsc0NBQW1COzs7O0lBRXhELGtDQUNFO0lBQUEsZ0NBQThCO0lBQUEsdUJBQU87SUFBQSxpQkFBUTtJQUM3QyxzQ0FBMEU7SUFBdkMseU9BQXlCO0lBQUMsaUJBQWE7SUFDNUUsaUJBQVU7OztJQUQyQixlQUF5QjtJQUF6Qiw0Q0FBeUI7Ozs7O0FEcENsRTs7OztJQUFBLE1BS2EsOEJBQThCO1FBTDNDO1lBTUUsVUFBSyxHQUFpQixTQUFTLENBQUM7WUFDaEMsU0FBSSxHQUFvQixhQUFhLENBQUM7WUFDdEMsVUFBSyxHQUFHLEVBQUUsQ0FBQztZQUNYLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1NBQ2xCOzs7Z0JBVkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLFdBQVcsRUFBRSx3Q0FBd0M7b0JBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2lCQUNyRDs7bUlBQ1ksOEJBQThCOzBGQUE5Qiw4QkFBOEI7WUNaM0MsZ0NBQ0U7WUFBQSx3Q0FDRTtZQUFBLDZCQUF1QjtZQUFBLDBDQUEwQjtZQUFBLGlCQUFLO1lBRXRELGtDQUNFO1lBQUEsZ0NBQThCO1lBQUEsc0JBQU07WUFBQSxpQkFBUTtZQUM1QywwQ0FDRTtZQURlLGdLQUFtQjtZQUNsQywyQ0FDRTtZQUFBLHlCQUNGO1lBQUEsaUJBQW1CO1lBQ25CLDRDQUNFO1lBQUEseUJBQ0Y7WUFBQSxpQkFBbUI7WUFDbkIsNENBQ0U7WUFBQSx1QkFDRjtZQUFBLGlCQUFtQjtZQUNyQixpQkFBa0I7WUFDcEIsaUJBQVU7WUFFVixtQ0FDRTtZQUFBLGlDQUE4QjtZQUFBLHNCQUFLO1lBQUEsaUJBQVE7WUFDM0MsMkNBQ0U7WUFEZSxnS0FBa0I7WUFDakMsNENBQ0U7WUFBQSw4QkFDRjtZQUFBLGlCQUFtQjtZQUNuQiw0Q0FDRTtZQUFBLGdDQUNGO1lBQUEsaUJBQW1CO1lBQ25CLDRDQUNFO1lBQUEseUJBQ0Y7WUFBQSxpQkFBbUI7WUFDbkIsNkNBQ0U7WUFBQSx3QkFDRjtZQUFBLGlCQUFtQjtZQUNyQixpQkFBa0I7WUFDcEIsaUJBQVU7WUFFViwwRkFDRTtZQUdGLDBGQUNFO1lBR0osaUJBQW1CO1lBQ3JCLGlCQUFXO1lBRVgsaUNBQ0U7WUFBQSx5Q0FDRTtZQUFBLDhCQUF1QjtZQUFBLHVCQUFNO1lBQUEsaUJBQUs7WUFFbEMsbUNBQ0U7WUFBQSx3Q0FNbUI7WUFDckIsaUJBQVU7WUFDWixpQkFBbUI7WUFDckIsaUJBQVc7O1lBeERZLGVBQW1CO1lBQW5CLG1DQUFtQjtZQWVuQixnQkFBa0I7WUFBbEIsa0NBQWtCO1lBZ0JKLGVBQW1EO1lBQW5ELDBFQUFtRDtZQUluRCxlQUF5QjtZQUF6Qiw0Q0FBeUI7WUFjcEQsZUFBZTtZQUFmLGlDQUFlLGtCQUFBLG9CQUFBLGdDQUFBOzt5Q0R2RHpCO0tBaUJDO1NBTFksOEJBQThCO2tEQUE5Qiw4QkFBOEI7Y0FMMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2FBQ3JEOzs7O0lBRUMsK0NBQWdDOztJQUNoQyw4Q0FBc0M7O0lBQ3RDLCtDQUFXOztJQUNYLHFEQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7UHJvZ3Jlc3NCYXJNb2RlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuXG4vKipcbiAqIEB0aXRsZSBDb25maWd1cmFibGUgcHJvZ3Jlc3MtYmFyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbmZpZ3VyYWJsZUV4YW1wbGUge1xuICBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuICBtb2RlOiBQcm9ncmVzc0Jhck1vZGUgPSAnZGV0ZXJtaW5hdGUnO1xuICB2YWx1ZSA9IDUwO1xuICBidWZmZXJWYWx1ZSA9IDc1O1xufVxuIiwiPG1hdC1jYXJkPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8aDIgY2xhc3M9XCJleGFtcGxlLWgyXCI+UHJvZ3Jlc3MgYmFyIGNvbmZpZ3VyYXRpb248L2gyPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+Q29sb3I6PC9sYWJlbD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJjb2xvclwiPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgUHJpbWFyeVxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImFjY2VudFwiPlxuICAgICAgICAgIEFjY2VudFxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cIndhcm5cIj5cbiAgICAgICAgICBXYXJuXG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPk1vZGU6PC9sYWJlbD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJtb2RlXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImRldGVybWluYXRlXCI+XG4gICAgICAgICAgRGV0ZXJtaW5hdGVcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJpbmRldGVybWluYXRlXCI+XG4gICAgICAgICAgSW5kZXRlcm1pbmF0ZVxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImJ1ZmZlclwiPlxuICAgICAgICAgIEJ1ZmZlclxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cInF1ZXJ5XCI+XG4gICAgICAgICAgUXVlcnlcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIiAqbmdJZj1cIm1vZGUgPT09ICdkZXRlcm1pbmF0ZScgfHwgbW9kZSA9PT0gJ2J1ZmZlcidcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+UHJvZ3Jlc3M6PC9sYWJlbD5cbiAgICAgIDxtYXQtc2xpZGVyIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cInZhbHVlXCI+PC9tYXQtc2xpZGVyPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiICpuZ0lmPVwibW9kZSA9PT0gJ2J1ZmZlcidcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+QnVmZmVyOjwvbGFiZWw+XG4gICAgICA8bWF0LXNsaWRlciBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJidWZmZXJWYWx1ZVwiPjwvbWF0LXNsaWRlcj5cbiAgICA8L3NlY3Rpb24+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cbjxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlJlc3VsdDwvaDI+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1wcm9ncmVzcy1iYXJcbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCJcbiAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgW2J1ZmZlclZhbHVlXT1cImJ1ZmZlclZhbHVlXCI+XG4gICAgICA8L21hdC1wcm9ncmVzcy1iYXI+XG4gICAgPC9zZWN0aW9uPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuIl19