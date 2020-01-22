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
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 7);
    i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_checkbox_16_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.autoTicks = $event; });
    i0.ɵɵtext(1, " Auto ticks ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r0.autoTicks);
} }
function SliderConfigurableExample_mat_form_field_17_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 2);
    i0.ɵɵelementStart(1, "input", 12);
    i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_form_field_17_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.tickInterval = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.tickInterval);
} }
/**
 * @title Configurable slider
 */
var SliderConfigurableExample = /** @class */ (function () {
    function SliderConfigurableExample() {
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
    SliderConfigurableExample.prototype.getSliderTickInterval = function () {
        if (this.showTicks) {
            return this.autoTicks ? 'auto' : this.tickInterval;
        }
        return 0;
    };
    SliderConfigurableExample.ɵfac = function SliderConfigurableExample_Factory(t) { return new (t || SliderConfigurableExample)(); };
    SliderConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: SliderConfigurableExample, selectors: [["slider-configurable-example"]], decls: 34, vars: 20, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], ["matInput", "", "type", "number", "placeholder", "Value", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Min value", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Max value", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Step size", 3, "ngModel", "ngModelChange"], [1, "example-margin", 3, "ngModel", "ngModelChange"], ["class", "example-margin", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "example-margin", 4, "ngIf"], [1, "result"], [1, "example-margin", 3, "disabled", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "ngModel", "vertical", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Tick interval", 3, "ngModel", "ngModelChange"]], template: function SliderConfigurableExample_Template(rf, ctx) { if (rf & 1) {
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
    return SliderConfigurableExample;
}());
export { SliderConfigurableExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SliderConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'slider-configurable-example',
                templateUrl: 'slider-configurable-example.html',
                styleUrls: ['slider-configurable-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUNxQmxDLHVDQUNFO0lBRG1DLHVPQUF1QjtJQUMxRCw0QkFDRjtJQUFBLGlCQUFlOzs7SUFGc0IsMENBQXVCOzs7O0lBRzVELHlDQUNFO0lBQUEsaUNBQ0Y7SUFENEQscU9BQTBCO0lBQXBGLGlCQUNGO0lBQUEsaUJBQWlCOzs7SUFEMkMsZUFBMEI7SUFBMUIsNkNBQTBCOztBRHZCNUY7O0dBRUc7QUFDSDtJQUFBO1FBTUUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ1YsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxDQUFDLENBQUM7S0FTbEI7SUFQQyx5REFBcUIsR0FBckI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDcEQ7UUFFRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7c0dBbkJVLHlCQUF5QjtrRUFBekIseUJBQXlCO1lDVnRDLGdDQUNFO1lBQUEsd0NBQ0U7WUFBQSw2QkFBdUI7WUFBQSxvQ0FBb0I7WUFBQSxpQkFBSztZQUVoRCxrQ0FDRTtZQUFBLHlDQUNFO1lBQUEsZ0NBQ0Y7WUFEb0QsaUpBQW1CO1lBQXJFLGlCQUNGO1lBQUEsaUJBQWlCO1lBQ2pCLHlDQUNFO1lBQUEsZ0NBQ0Y7WUFEd0QsK0lBQWlCO1lBQXZFLGlCQUNGO1lBQUEsaUJBQWlCO1lBQ2pCLHlDQUNFO1lBQUEsaUNBQ0Y7WUFEd0QsZ0pBQWlCO1lBQXZFLGlCQUNGO1lBQUEsaUJBQWlCO1lBQ2pCLDBDQUNFO1lBQUEsaUNBQ0Y7WUFEd0QsaUpBQWtCO1lBQXhFLGlCQUNGO1lBQUEsaUJBQWlCO1lBQ25CLGlCQUFVO1lBRVYsbUNBQ0U7WUFBQSx3Q0FBNkQ7WUFBeEIsNkpBQXVCO1lBQUMsMkJBQVU7WUFBQSxpQkFBZTtZQUN0Riw4RkFDRTtZQUVGLGtHQUNFO1lBRUosaUJBQVU7WUFFVixtQ0FDRTtZQUFBLHdDQUE4RDtZQUF6Qiw4SkFBd0I7WUFBQyxpQ0FBZ0I7WUFBQSxpQkFBZTtZQUMvRixpQkFBVTtZQUVWLG1DQUNFO1lBQUEsd0NBQTREO1lBQXZCLDRKQUFzQjtZQUFDLHlCQUFRO1lBQUEsaUJBQWU7WUFDbkYsd0NBQTBEO1lBQXJCLDBKQUFvQjtZQUFDLHlCQUFRO1lBQUEsaUJBQWU7WUFDbkYsaUJBQVU7WUFFVixtQ0FDRTtZQUFBLHdDQUE0RDtZQUF2Qiw0SkFBc0I7WUFBQyx5QkFBUTtZQUFBLGlCQUFlO1lBQ3JGLGlCQUFVO1lBRVosaUJBQW1CO1lBQ3JCLGlCQUFXO1lBRVgscUNBQ0U7WUFBQSx5Q0FDRTtZQUFBLDhCQUF1QjtZQUFBLHVCQUFNO1lBQUEsaUJBQUs7WUFFbEMsdUNBV2E7WUFGVCx1SkFBbUI7WUFFdkIsaUJBQWE7WUFDZixpQkFBbUI7WUFDckIsaUJBQVc7O1lBeEQrQyxlQUFtQjtZQUFuQixtQ0FBbUI7WUFHZixlQUFpQjtZQUFqQixpQ0FBaUI7WUFHakIsZUFBaUI7WUFBakIsaUNBQWlCO1lBR2pCLGVBQWtCO1lBQWxCLGtDQUFrQjtZQUtyQyxlQUF1QjtZQUF2Qix1Q0FBdUI7WUFDQyxlQUFpQjtZQUFqQixvQ0FBaUI7WUFHdkMsZUFBK0I7WUFBL0Isc0RBQStCO1lBTWpDLGVBQXdCO1lBQXhCLHdDQUF3QjtZQUl4QixlQUFzQjtZQUF0QixzQ0FBc0I7WUFDdEIsZUFBb0I7WUFBcEIsb0NBQW9CO1lBSXBCLGVBQXNCO1lBQXRCLHNDQUFzQjtZQVl6RCxlQUFxQjtZQUFyQix1Q0FBcUIsc0JBQUEsZ0JBQUEsZ0JBQUEsa0JBQUEsOEJBQUEsNkNBQUEsc0JBQUEsMEJBQUE7O29DRG5EN0I7Q0E4QkMsQUF6QkQsSUF5QkM7U0FwQlkseUJBQXlCO2tEQUF6Qix5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDb25maWd1cmFibGUgc2xpZGVyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb25maWd1cmFibGVFeGFtcGxlIHtcbiAgYXV0b1RpY2tzID0gZmFsc2U7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGludmVydCA9IGZhbHNlO1xuICBtYXggPSAxMDA7XG4gIG1pbiA9IDA7XG4gIHNob3dUaWNrcyA9IGZhbHNlO1xuICBzdGVwID0gMTtcbiAgdGh1bWJMYWJlbCA9IGZhbHNlO1xuICB2YWx1ZSA9IDA7XG4gIHZlcnRpY2FsID0gZmFsc2U7XG4gIHRpY2tJbnRlcnZhbCA9IDE7XG5cbiAgZ2V0U2xpZGVyVGlja0ludGVydmFsKCk6IG51bWJlciB8ICdhdXRvJyB7XG4gICAgaWYgKHRoaXMuc2hvd1RpY2tzKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdXRvVGlja3MgPyAnYXV0bycgOiB0aGlzLnRpY2tJbnRlcnZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxufVxuIiwiPG1hdC1jYXJkPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8aDIgY2xhc3M9XCJleGFtcGxlLWgyXCI+U2xpZGVyIGNvbmZpZ3VyYXRpb248L2gyPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiIFsobmdNb2RlbCldPVwidmFsdWVcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiTWluIHZhbHVlXCIgWyhuZ01vZGVsKV09XCJtaW5cIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiTWF4IHZhbHVlXCIgWyhuZ01vZGVsKV09XCJtYXhcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiU3RlcCBzaXplXCIgWyhuZ01vZGVsKV09XCJzdGVwXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cInNob3dUaWNrc1wiPlNob3cgdGlja3M8L21hdC1jaGVja2JveD5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiYXV0b1RpY2tzXCIgKm5nSWY9XCJzaG93VGlja3NcIj5cbiAgICAgICAgQXV0byB0aWNrc1xuICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiICpuZ0lmPVwic2hvd1RpY2tzICYmICFhdXRvVGlja3NcIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlRpY2sgaW50ZXJ2YWxcIiBbKG5nTW9kZWwpXT1cInRpY2tJbnRlcnZhbFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJ0aHVtYkxhYmVsXCI+U2hvdyB0aHVtYiBsYWJlbDwvbWF0LWNoZWNrYm94PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cInZlcnRpY2FsXCI+VmVydGljYWw8L21hdC1jaGVja2JveD5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiaW52ZXJ0XCI+SW52ZXJ0ZWQ8L21hdC1jaGVja2JveD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJkaXNhYmxlZFwiPkRpc2FibGVkPC9tYXQtY2hlY2tib3g+XG4gICAgPC9zZWN0aW9uPlxuXG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cbjxtYXQtY2FyZCBjbGFzcz1cInJlc3VsdFwiPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8aDIgY2xhc3M9XCJleGFtcGxlLWgyXCI+UmVzdWx0PC9oMj5cblxuICAgIDxtYXQtc2xpZGVyXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbaW52ZXJ0XT1cImludmVydFwiXG4gICAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgICAgW21pbl09XCJtaW5cIlxuICAgICAgICBbc3RlcF09XCJzdGVwXCJcbiAgICAgICAgW3RodW1iTGFiZWxdPVwidGh1bWJMYWJlbFwiXG4gICAgICAgIFt0aWNrSW50ZXJ2YWxdPVwiZ2V0U2xpZGVyVGlja0ludGVydmFsKClcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgW3ZlcnRpY2FsXT1cInZlcnRpY2FsXCI+XG4gICAgPC9tYXQtc2xpZGVyPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuIl19