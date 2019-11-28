/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/slider/slider-configurable/slider-configurable-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/slider";
function SliderConfigurableExample_mat_checkbox_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 7);
    i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_checkbox_16_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.autoTicks = $event; });
    i0.ɵɵtext(1, " Auto ticks ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r0.autoTicks);
} }
function SliderConfigurableExample_mat_form_field_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 2);
    i0.ɵɵelementStart(1, "input", 12);
    i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_form_field_17_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.tickInterval = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.tickInterval);
} }
/**
 * \@title Configurable slider
 */
export class SliderConfigurableExample {
    constructor() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this.tickInterval = 1;
    }
    /**
     * @return {?}
     */
    getSliderTickInterval() {
        return this.showTicks ? (this.autoTicks ? 'auto' : this.tickInterval) : 0;
    }
}
SliderConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'slider-configurable-example',
                templateUrl: 'slider-configurable-example.html',
                styleUrls: ['slider-configurable-example.css'],
            },] },
];
/** @nocollapse */ SliderConfigurableExample.ɵfac = function SliderConfigurableExample_Factory(t) { return new (t || SliderConfigurableExample)(); };
/** @nocollapse */ SliderConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: SliderConfigurableExample, selectors: [["slider-configurable-example"]], decls: 34, vars: 20, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], ["matInput", "", "type", "number", "placeholder", "Value", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Min value", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Max value", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Step size", 3, "ngModel", "ngModelChange"], [1, "example-margin", 3, "ngModel", "ngModelChange"], ["class", "example-margin", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "example-margin", 4, "ngIf"], [1, "result"], [1, "example-margin", 3, "disabled", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "ngModel", "vertical", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Tick interval", 3, "ngModel", "ngModelChange"]], template: function SliderConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-card-content");
        i0.ɵɵelementStart(2, "h2", 0);
        i0.ɵɵtext(3, "Slider configuration");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "section", 1);
        i0.ɵɵelementStart(5, "mat-form-field", 2);
        i0.ɵɵelementStart(6, "input", 3);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_6_listener($event) { return ctx.value = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-form-field", 2);
        i0.ɵɵelementStart(8, "input", 4);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_8_listener($event) { return ctx.min = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-form-field", 2);
        i0.ɵɵelementStart(10, "input", 5);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_10_listener($event) { return ctx.max = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-form-field", 2);
        i0.ɵɵelementStart(12, "input", 6);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_12_listener($event) { return ctx.step = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "section", 1);
        i0.ɵɵelementStart(14, "mat-checkbox", 7);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_14_listener($event) { return ctx.showTicks = $event; });
        i0.ɵɵtext(15, "Show ticks");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, SliderConfigurableExample_mat_checkbox_16_Template, 2, 1, "mat-checkbox", 8);
        i0.ɵɵtemplate(17, SliderConfigurableExample_mat_form_field_17_Template, 2, 1, "mat-form-field", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "section", 1);
        i0.ɵɵelementStart(19, "mat-checkbox", 7);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_19_listener($event) { return ctx.thumbLabel = $event; });
        i0.ɵɵtext(20, "Show thumb label");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "section", 1);
        i0.ɵɵelementStart(22, "mat-checkbox", 7);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_22_listener($event) { return ctx.vertical = $event; });
        i0.ɵɵtext(23, "Vertical");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "mat-checkbox", 7);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_24_listener($event) { return ctx.invert = $event; });
        i0.ɵɵtext(25, "Inverted");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "section", 1);
        i0.ɵɵelementStart(27, "mat-checkbox", 7);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_27_listener($event) { return ctx.disabled = $event; });
        i0.ɵɵtext(28, "Disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "mat-card", 10);
        i0.ɵɵelementStart(30, "mat-card-content");
        i0.ɵɵelementStart(31, "h2", 0);
        i0.ɵɵtext(32, "Result");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "mat-slider", 11);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_slider_ngModelChange_33_listener($event) { return ctx.value = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.value);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.min);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.max);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.step);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.showTicks);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showTicks);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showTicks && !ctx.autoTicks);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.thumbLabel);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.vertical);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.invert);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.disabled);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("disabled", ctx.disabled)("invert", ctx.invert)("max", ctx.max)("min", ctx.min)("step", ctx.step)("thumbLabel", ctx.thumbLabel)("tickInterval", ctx.getSliderTickInterval())("ngModel", ctx.value)("vertical", ctx.vertical);
    } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatFormField, i3.MatInput, i4.NumberValueAccessor, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatCheckbox, i6.NgIf, i7.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.mat-slider-vertical[_ngcontent-%COMP%] {\n  height: 300px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SliderConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'slider-configurable-example',
                templateUrl: 'slider-configurable-example.html',
                styleUrls: ['slider-configurable-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SliderConfigurableExample.prototype.autoTicks;
    /** @type {?} */
    SliderConfigurableExample.prototype.disabled;
    /** @type {?} */
    SliderConfigurableExample.prototype.invert;
    /** @type {?} */
    SliderConfigurableExample.prototype.max;
    /** @type {?} */
    SliderConfigurableExample.prototype.min;
    /** @type {?} */
    SliderConfigurableExample.prototype.showTicks;
    /** @type {?} */
    SliderConfigurableExample.prototype.step;
    /** @type {?} */
    SliderConfigurableExample.prototype.thumbLabel;
    /** @type {?} */
    SliderConfigurableExample.prototype.value;
    /** @type {?} */
    SliderConfigurableExample.prototype.vertical;
    /** @type {?} */
    SliderConfigurableExample.prototype.tickInterval;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQ3FCbEMsdUNBQ0U7SUFEbUMseU9BQXVCO0lBQzFELDRCQUNGO0lBQUEsaUJBQWU7OztJQUZzQiwwQ0FBdUI7Ozs7SUFHNUQseUNBQ0U7SUFBQSxpQ0FDRjtJQUQ0RCx1T0FBMEI7SUFBcEYsaUJBQ0Y7SUFBQSxpQkFBaUI7OztJQUQyQyxlQUEwQjtJQUExQiw2Q0FBMEI7Ozs7O0FEZjVGLE1BQU0sT0FBTyx5QkFBeUI7SUFMdEM7UUFNRSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFFBQUcsR0FBRyxHQUFHLENBQUM7UUFDVixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBWSxHQUFHLENBQUMsQ0FBQztLQUtsQjs7OztJQUhDLHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DOztrR0FDWSx5QkFBeUI7OERBQXpCLHlCQUF5QjtRQ1Z0QyxnQ0FDRTtRQUFBLHdDQUNFO1FBQUEsNkJBQXVCO1FBQUEsb0NBQW9CO1FBQUEsaUJBQUs7UUFFaEQsa0NBQ0U7UUFBQSx5Q0FDRTtRQUFBLGdDQUNGO1FBRG9ELGlKQUFtQjtRQUFyRSxpQkFDRjtRQUFBLGlCQUFpQjtRQUNqQix5Q0FDRTtRQUFBLGdDQUNGO1FBRHdELCtJQUFpQjtRQUF2RSxpQkFDRjtRQUFBLGlCQUFpQjtRQUNqQix5Q0FDRTtRQUFBLGlDQUNGO1FBRHdELGdKQUFpQjtRQUF2RSxpQkFDRjtRQUFBLGlCQUFpQjtRQUNqQiwwQ0FDRTtRQUFBLGlDQUNGO1FBRHdELGlKQUFrQjtRQUF4RSxpQkFDRjtRQUFBLGlCQUFpQjtRQUNuQixpQkFBVTtRQUVWLG1DQUNFO1FBQUEsd0NBQTZEO1FBQXhCLDZKQUF1QjtRQUFDLDJCQUFVO1FBQUEsaUJBQWU7UUFDdEYsOEZBQ0U7UUFFRixrR0FDRTtRQUVKLGlCQUFVO1FBRVYsbUNBQ0U7UUFBQSx3Q0FBOEQ7UUFBekIsOEpBQXdCO1FBQUMsaUNBQWdCO1FBQUEsaUJBQWU7UUFDL0YsaUJBQVU7UUFFVixtQ0FDRTtRQUFBLHdDQUE0RDtRQUF2Qiw0SkFBc0I7UUFBQyx5QkFBUTtRQUFBLGlCQUFlO1FBQ25GLHdDQUEwRDtRQUFyQiwwSkFBb0I7UUFBQyx5QkFBUTtRQUFBLGlCQUFlO1FBQ25GLGlCQUFVO1FBRVYsbUNBQ0U7UUFBQSx3Q0FBNEQ7UUFBdkIsNEpBQXNCO1FBQUMseUJBQVE7UUFBQSxpQkFBZTtRQUNyRixpQkFBVTtRQUVaLGlCQUFtQjtRQUNyQixpQkFBVztRQUVYLHFDQUNFO1FBQUEseUNBQ0U7UUFBQSw4QkFBdUI7UUFBQSx1QkFBTTtRQUFBLGlCQUFLO1FBRWxDLHVDQVdhO1FBRlQsdUpBQW1CO1FBRXZCLGlCQUFhO1FBQ2YsaUJBQW1CO1FBQ3JCLGlCQUFXOztRQXhEK0MsZUFBbUI7UUFBbkIsbUNBQW1CO1FBR2YsZUFBaUI7UUFBakIsaUNBQWlCO1FBR2pCLGVBQWlCO1FBQWpCLGlDQUFpQjtRQUdqQixlQUFrQjtRQUFsQixrQ0FBa0I7UUFLckMsZUFBdUI7UUFBdkIsdUNBQXVCO1FBQ0MsZUFBaUI7UUFBakIsb0NBQWlCO1FBR3ZDLGVBQStCO1FBQS9CLHNEQUErQjtRQU1qQyxlQUF3QjtRQUF4Qix3Q0FBd0I7UUFJeEIsZUFBc0I7UUFBdEIsc0NBQXNCO1FBQ3RCLGVBQW9CO1FBQXBCLG9DQUFvQjtRQUlwQixlQUFzQjtRQUF0QixzQ0FBc0I7UUFZekQsZUFBcUI7UUFBckIsdUNBQXFCLHNCQUFBLGdCQUFBLGdCQUFBLGtCQUFBLDhCQUFBLDZDQUFBLHNCQUFBLDBCQUFBOztrRER6Q2hCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0M7Ozs7SUFFQyw4Q0FBa0I7O0lBQ2xCLDZDQUFpQjs7SUFDakIsMkNBQWU7O0lBQ2Ysd0NBQVU7O0lBQ1Ysd0NBQVE7O0lBQ1IsOENBQWtCOztJQUNsQix5Q0FBUzs7SUFDVCwrQ0FBbUI7O0lBQ25CLDBDQUFVOztJQUNWLDZDQUFpQjs7SUFDakIsaURBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDb25maWd1cmFibGUgc2xpZGVyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb25maWd1cmFibGVFeGFtcGxlIHtcbiAgYXV0b1RpY2tzID0gZmFsc2U7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGludmVydCA9IGZhbHNlO1xuICBtYXggPSAxMDA7XG4gIG1pbiA9IDA7XG4gIHNob3dUaWNrcyA9IGZhbHNlO1xuICBzdGVwID0gMTtcbiAgdGh1bWJMYWJlbCA9IGZhbHNlO1xuICB2YWx1ZSA9IDA7XG4gIHZlcnRpY2FsID0gZmFsc2U7XG4gIHRpY2tJbnRlcnZhbCA9IDE7XG5cbiAgZ2V0U2xpZGVyVGlja0ludGVydmFsKCk6IG51bWJlciB8ICdhdXRvJyB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd1RpY2tzID8gKHRoaXMuYXV0b1RpY2tzID8gJ2F1dG8nIDogdGhpcy50aWNrSW50ZXJ2YWwpIDogMDtcbiAgfVxufVxuIiwiPG1hdC1jYXJkPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8aDIgY2xhc3M9XCJleGFtcGxlLWgyXCI+U2xpZGVyIGNvbmZpZ3VyYXRpb248L2gyPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiIFsobmdNb2RlbCldPVwidmFsdWVcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiTWluIHZhbHVlXCIgWyhuZ01vZGVsKV09XCJtaW5cIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiTWF4IHZhbHVlXCIgWyhuZ01vZGVsKV09XCJtYXhcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiU3RlcCBzaXplXCIgWyhuZ01vZGVsKV09XCJzdGVwXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cInNob3dUaWNrc1wiPlNob3cgdGlja3M8L21hdC1jaGVja2JveD5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiYXV0b1RpY2tzXCIgKm5nSWY9XCJzaG93VGlja3NcIj5cbiAgICAgICAgQXV0byB0aWNrc1xuICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiICpuZ0lmPVwic2hvd1RpY2tzICYmICFhdXRvVGlja3NcIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlRpY2sgaW50ZXJ2YWxcIiBbKG5nTW9kZWwpXT1cInRpY2tJbnRlcnZhbFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJ0aHVtYkxhYmVsXCI+U2hvdyB0aHVtYiBsYWJlbDwvbWF0LWNoZWNrYm94PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cInZlcnRpY2FsXCI+VmVydGljYWw8L21hdC1jaGVja2JveD5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiaW52ZXJ0XCI+SW52ZXJ0ZWQ8L21hdC1jaGVja2JveD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJkaXNhYmxlZFwiPkRpc2FibGVkPC9tYXQtY2hlY2tib3g+XG4gICAgPC9zZWN0aW9uPlxuXG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cbjxtYXQtY2FyZCBjbGFzcz1cInJlc3VsdFwiPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8aDIgY2xhc3M9XCJleGFtcGxlLWgyXCI+UmVzdWx0PC9oMj5cblxuICAgIDxtYXQtc2xpZGVyXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbaW52ZXJ0XT1cImludmVydFwiXG4gICAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgICAgW21pbl09XCJtaW5cIlxuICAgICAgICBbc3RlcF09XCJzdGVwXCJcbiAgICAgICAgW3RodW1iTGFiZWxdPVwidGh1bWJMYWJlbFwiXG4gICAgICAgIFt0aWNrSW50ZXJ2YWxdPVwiZ2V0U2xpZGVyVGlja0ludGVydmFsKClcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgW3ZlcnRpY2FsXT1cInZlcnRpY2FsXCI+XG4gICAgPC9tYXQtc2xpZGVyPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuIl19