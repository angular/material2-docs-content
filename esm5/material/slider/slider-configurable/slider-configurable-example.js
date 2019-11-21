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
        return this.showTicks ? (this.autoTicks ? 'auto' : this.tickInterval) : 0;
    };
    SliderConfigurableExample.decorators = [
        { type: Component, args: [{
                    selector: 'slider-configurable-example',
                    templateUrl: 'slider-configurable-example.html',
                    styleUrls: ['slider-configurable-example.css'],
                },] },
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUNxQmxDLHVDQUNFO0lBRG1DLHVPQUF1QjtJQUMxRCw0QkFDRjtJQUFBLGlCQUFlOzs7SUFGc0IsMENBQXVCOzs7O0lBRzVELHlDQUNFO0lBQUEsaUNBQ0Y7SUFENEQscU9BQTBCO0lBQXBGLGlCQUNGO0lBQUEsaUJBQWlCOzs7SUFEMkMsZUFBMEI7SUFBMUIsNkNBQTBCOztBRHZCNUY7O0dBRUc7QUFDSDtJQUFBO1FBTUUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ1YsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxDQUFDLENBQUM7S0FLbEI7SUFIQyx5REFBcUIsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7b0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2lCQUMvQzs7c0dBQ1kseUJBQXlCO2tFQUF6Qix5QkFBeUI7WUNWdEMsZ0NBQ0U7WUFBQSx3Q0FDRTtZQUFBLDZCQUF1QjtZQUFBLG9DQUFvQjtZQUFBLGlCQUFLO1lBRWhELGtDQUNFO1lBQUEseUNBQ0U7WUFBQSxnQ0FDRjtZQURvRCxpSkFBbUI7WUFBckUsaUJBQ0Y7WUFBQSxpQkFBaUI7WUFDakIseUNBQ0U7WUFBQSxnQ0FDRjtZQUR3RCwrSUFBaUI7WUFBdkUsaUJBQ0Y7WUFBQSxpQkFBaUI7WUFDakIseUNBQ0U7WUFBQSxpQ0FDRjtZQUR3RCxnSkFBaUI7WUFBdkUsaUJBQ0Y7WUFBQSxpQkFBaUI7WUFDakIsMENBQ0U7WUFBQSxpQ0FDRjtZQUR3RCxpSkFBa0I7WUFBeEUsaUJBQ0Y7WUFBQSxpQkFBaUI7WUFDbkIsaUJBQVU7WUFFVixtQ0FDRTtZQUFBLHdDQUE2RDtZQUF4Qiw2SkFBdUI7WUFBQywyQkFBVTtZQUFBLGlCQUFlO1lBQ3RGLDhGQUNFO1lBRUYsa0dBQ0U7WUFFSixpQkFBVTtZQUVWLG1DQUNFO1lBQUEsd0NBQThEO1lBQXpCLDhKQUF3QjtZQUFDLGlDQUFnQjtZQUFBLGlCQUFlO1lBQy9GLGlCQUFVO1lBRVYsbUNBQ0U7WUFBQSx3Q0FBNEQ7WUFBdkIsNEpBQXNCO1lBQUMseUJBQVE7WUFBQSxpQkFBZTtZQUNuRix3Q0FBMEQ7WUFBckIsMEpBQW9CO1lBQUMseUJBQVE7WUFBQSxpQkFBZTtZQUNuRixpQkFBVTtZQUVWLG1DQUNFO1lBQUEsd0NBQTREO1lBQXZCLDRKQUFzQjtZQUFDLHlCQUFRO1lBQUEsaUJBQWU7WUFDckYsaUJBQVU7WUFFWixpQkFBbUI7WUFDckIsaUJBQVc7WUFFWCxxQ0FDRTtZQUFBLHlDQUNFO1lBQUEsOEJBQXVCO1lBQUEsdUJBQU07WUFBQSxpQkFBSztZQUVsQyx1Q0FXYTtZQUZULHVKQUFtQjtZQUV2QixpQkFBYTtZQUNmLGlCQUFtQjtZQUNyQixpQkFBVzs7WUF4RCtDLGVBQW1CO1lBQW5CLG1DQUFtQjtZQUdmLGVBQWlCO1lBQWpCLGlDQUFpQjtZQUdqQixlQUFpQjtZQUFqQixpQ0FBaUI7WUFHakIsZUFBa0I7WUFBbEIsa0NBQWtCO1lBS3JDLGVBQXVCO1lBQXZCLHVDQUF1QjtZQUNDLGVBQWlCO1lBQWpCLG9DQUFpQjtZQUd2QyxlQUErQjtZQUEvQixzREFBK0I7WUFNakMsZUFBd0I7WUFBeEIsd0NBQXdCO1lBSXhCLGVBQXNCO1lBQXRCLHNDQUFzQjtZQUN0QixlQUFvQjtZQUFwQixvQ0FBb0I7WUFJcEIsZUFBc0I7WUFBdEIsc0NBQXNCO1lBWXpELGVBQXFCO1lBQXJCLHVDQUFxQixzQkFBQSxnQkFBQSxnQkFBQSxrQkFBQSw4QkFBQSw2Q0FBQSxzQkFBQSwwQkFBQTs7b0NEbkQ3QjtDQTBCQyxBQXJCRCxJQXFCQztTQWhCWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENvbmZpZ3VyYWJsZSBzbGlkZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbmZpZ3VyYWJsZUV4YW1wbGUge1xuICBhdXRvVGlja3MgPSBmYWxzZTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgaW52ZXJ0ID0gZmFsc2U7XG4gIG1heCA9IDEwMDtcbiAgbWluID0gMDtcbiAgc2hvd1RpY2tzID0gZmFsc2U7XG4gIHN0ZXAgPSAxO1xuICB0aHVtYkxhYmVsID0gZmFsc2U7XG4gIHZhbHVlID0gMDtcbiAgdmVydGljYWwgPSBmYWxzZTtcbiAgdGlja0ludGVydmFsID0gMTtcblxuICBnZXRTbGlkZXJUaWNrSW50ZXJ2YWwoKTogbnVtYmVyIHwgJ2F1dG8nIHtcbiAgICByZXR1cm4gdGhpcy5zaG93VGlja3MgPyAodGhpcy5hdXRvVGlja3MgPyAnYXV0bycgOiB0aGlzLnRpY2tJbnRlcnZhbCkgOiAwO1xuICB9XG59XG4iLCI8bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxoMiBjbGFzcz1cImV4YW1wbGUtaDJcIj5TbGlkZXIgY29uZmlndXJhdGlvbjwvaDI+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlZhbHVlXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJNaW4gdmFsdWVcIiBbKG5nTW9kZWwpXT1cIm1pblwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJNYXggdmFsdWVcIiBbKG5nTW9kZWwpXT1cIm1heFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJTdGVwIHNpemVcIiBbKG5nTW9kZWwpXT1cInN0ZXBcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwic2hvd1RpY2tzXCI+U2hvdyB0aWNrczwvbWF0LWNoZWNrYm94PlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJhdXRvVGlja3NcIiAqbmdJZj1cInNob3dUaWNrc1wiPlxuICAgICAgICBBdXRvIHRpY2tzXG4gICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgKm5nSWY9XCJzaG93VGlja3MgJiYgIWF1dG9UaWNrc1wiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiVGljayBpbnRlcnZhbFwiIFsobmdNb2RlbCldPVwidGlja0ludGVydmFsXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cInRodW1iTGFiZWxcIj5TaG93IHRodW1iIGxhYmVsPC9tYXQtY2hlY2tib3g+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwidmVydGljYWxcIj5WZXJ0aWNhbDwvbWF0LWNoZWNrYm94PlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJpbnZlcnRcIj5JbnZlcnRlZDwvbWF0LWNoZWNrYm94PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cImRpc2FibGVkXCI+RGlzYWJsZWQ8L21hdC1jaGVja2JveD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cblxuPG1hdC1jYXJkIGNsYXNzPVwicmVzdWx0XCI+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxoMiBjbGFzcz1cImV4YW1wbGUtaDJcIj5SZXN1bHQ8L2gyPlxuXG4gICAgPG1hdC1zbGlkZXJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtpbnZlcnRdPVwiaW52ZXJ0XCJcbiAgICAgICAgW21heF09XCJtYXhcIlxuICAgICAgICBbbWluXT1cIm1pblwiXG4gICAgICAgIFtzdGVwXT1cInN0ZXBcIlxuICAgICAgICBbdGh1bWJMYWJlbF09XCJ0aHVtYkxhYmVsXCJcbiAgICAgICAgW3RpY2tJbnRlcnZhbF09XCJnZXRTbGlkZXJUaWNrSW50ZXJ2YWwoKVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICBbdmVydGljYWxdPVwidmVydGljYWxcIj5cbiAgICA8L21hdC1zbGlkZXI+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG4iXX0=