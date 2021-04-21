import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/slider";
function SliderConfigurableExample_mat_checkbox_24_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 4);
    i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_checkbox_24_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.autoTicks = $event; });
    i0.ɵɵtext(1, " Auto ticks ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r0.autoTicks);
} }
function SliderConfigurableExample_mat_form_field_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 2);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Tick interval");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 3);
    i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_form_field_25_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.tickInterval = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1.tickInterval);
} }
/**
 * @title Configurable slider
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
    getSliderTickInterval() {
        if (this.showTicks) {
            return this.autoTicks ? 'auto' : this.tickInterval;
        }
        return 0;
    }
}
SliderConfigurableExample.ɵfac = function SliderConfigurableExample_Factory(t) { return new (t || SliderConfigurableExample)(); };
SliderConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: SliderConfigurableExample, selectors: [["slider-configurable-example"]], decls: 49, vars: 23, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], [1, "example-margin", 3, "ngModel", "ngModelChange"], ["class", "example-margin", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "example-margin", 4, "ngIf"], [1, "example-result-card"], [1, "example-label-container"], ["id", "example-name-label", 1, "example-name-label"], [1, "example-value-label"], ["aria-labelledby", "example-name-label", 1, "example-margin", 3, "disabled", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "ngModel", "vertical", "ngModelChange"]], template: function SliderConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-card-content");
        i0.ɵɵelementStart(2, "h2", 0);
        i0.ɵɵtext(3, "Slider configuration");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "section", 1);
        i0.ɵɵelementStart(5, "mat-form-field", 2);
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "input", 3);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_8_listener($event) { return ctx.value = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-form-field", 2);
        i0.ɵɵelementStart(10, "mat-label");
        i0.ɵɵtext(11, "Min value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "input", 3);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_12_listener($event) { return ctx.min = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-form-field", 2);
        i0.ɵɵelementStart(14, "mat-label");
        i0.ɵɵtext(15, "Max value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "input", 3);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_16_listener($event) { return ctx.max = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-form-field", 2);
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Step size");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "input", 3);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_20_listener($event) { return ctx.step = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "section", 1);
        i0.ɵɵelementStart(22, "mat-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_22_listener($event) { return ctx.showTicks = $event; });
        i0.ɵɵtext(23, "Show ticks");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(24, SliderConfigurableExample_mat_checkbox_24_Template, 2, 1, "mat-checkbox", 5);
        i0.ɵɵtemplate(25, SliderConfigurableExample_mat_form_field_25_Template, 4, 1, "mat-form-field", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "section", 1);
        i0.ɵɵelementStart(27, "mat-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_27_listener($event) { return ctx.thumbLabel = $event; });
        i0.ɵɵtext(28, "Show thumb label");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "section", 1);
        i0.ɵɵelementStart(30, "mat-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_30_listener($event) { return ctx.vertical = $event; });
        i0.ɵɵtext(31, "Vertical");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "mat-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_32_listener($event) { return ctx.invert = $event; });
        i0.ɵɵtext(33, "Inverted");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "section", 1);
        i0.ɵɵelementStart(35, "mat-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_35_listener($event) { return ctx.disabled = $event; });
        i0.ɵɵtext(36, "Disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "mat-card", 7);
        i0.ɵɵelementStart(38, "mat-card-content");
        i0.ɵɵelementStart(39, "h2");
        i0.ɵɵtext(40, "Result");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(41, "br");
        i0.ɵɵelement(42, "br");
        i0.ɵɵelementStart(43, "div", 8);
        i0.ɵɵelementStart(44, "label", 9);
        i0.ɵɵtext(45, "Max Value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "label", 10);
        i0.ɵɵtext(47);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "mat-slider", 11);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_slider_ngModelChange_48_listener($event) { return ctx.value = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngModel", ctx.value);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.min);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.max);
        i0.ɵɵadvance(4);
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
        i0.ɵɵadvance(8);
        i0.ɵɵclassMap(ctx.vertical ? "example-label-vertical" : "example-label-horizontal");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.disabled)("invert", ctx.invert)("max", ctx.max)("min", ctx.min)("step", ctx.step)("thumbLabel", ctx.thumbLabel)("tickInterval", ctx.getSliderTickInterval())("ngModel", ctx.value)("vertical", ctx.vertical);
    } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatFormField, i2.MatLabel, i3.MatInput, i4.NumberValueAccessor, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatCheckbox, i6.NgIf, i7.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 0 8px 16px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.mat-slider-vertical[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.mat-card[_ngcontent-%COMP%]    + .mat-card[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   .example-label-container.example-label-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 12px 16px;\n  max-width: 284px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   .example-label-container.example-label-vertical[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 68px;\n  height: 48px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   .example-value-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'slider-configurable-example',
                templateUrl: 'slider-configurable-example.html',
                styleUrls: ['slider-configurable-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUN5QmxDLHVDQUNFO0lBRG1DLHlPQUF1QjtJQUMxRCw0QkFDRjtJQUFBLGlCQUFlOzs7SUFGc0IsMENBQXVCOzs7O0lBRzVELHlDQUNFO0lBQUEsaUNBQVc7SUFBQSw2QkFBYTtJQUFBLGlCQUFZO0lBQ3BDLGdDQUNGO0lBRGdDLHVPQUEwQjtJQUF4RCxpQkFDRjtJQUFBLGlCQUFpQjs7O0lBRGUsZUFBMEI7SUFBMUIsNkNBQTBCOztBRDVCaEU7O0dBRUc7QUFNSCxNQUFNLE9BQU8seUJBQXlCO0lBTHRDO1FBTUUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ1YsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxDQUFDLENBQUM7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bmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENvbmZpZ3VyYWJsZSBzbGlkZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbmZpZ3VyYWJsZUV4YW1wbGUge1xuICBhdXRvVGlja3MgPSBmYWxzZTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgaW52ZXJ0ID0gZmFsc2U7XG4gIG1heCA9IDEwMDtcbiAgbWluID0gMDtcbiAgc2hvd1RpY2tzID0gZmFsc2U7XG4gIHN0ZXAgPSAxO1xuICB0aHVtYkxhYmVsID0gZmFsc2U7XG4gIHZhbHVlID0gMDtcbiAgdmVydGljYWwgPSBmYWxzZTtcbiAgdGlja0ludGVydmFsID0gMTtcblxuICBnZXRTbGlkZXJUaWNrSW50ZXJ2YWwoKTogbnVtYmVyIHwgJ2F1dG8nIHtcbiAgICBpZiAodGhpcy5zaG93VGlja3MpIHtcbiAgICAgIHJldHVybiB0aGlzLmF1dG9UaWNrcyA/ICdhdXRvJyA6IHRoaXMudGlja0ludGVydmFsO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG59XG4iLCI8bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxoMiBjbGFzcz1cImV4YW1wbGUtaDJcIj5TbGlkZXIgY29uZmlndXJhdGlvbjwvaDI+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5cbiAgICAgICAgPG1hdC1sYWJlbD5WYWx1ZTwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwidmFsdWVcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPlxuICAgICAgICA8bWF0LWxhYmVsPk1pbiB2YWx1ZTwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwibWluXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5cbiAgICAgICAgPG1hdC1sYWJlbD5NYXggdmFsdWU8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cIm1heFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+U3RlcCBzaXplPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzdGVwXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cInNob3dUaWNrc1wiPlNob3cgdGlja3M8L21hdC1jaGVja2JveD5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiYXV0b1RpY2tzXCIgKm5nSWY9XCJzaG93VGlja3NcIj5cbiAgICAgICAgQXV0byB0aWNrc1xuICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiICpuZ0lmPVwic2hvd1RpY2tzICYmICFhdXRvVGlja3NcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5UaWNrIGludGVydmFsPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJ0aWNrSW50ZXJ2YWxcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwidGh1bWJMYWJlbFwiPlNob3cgdGh1bWIgbGFiZWw8L21hdC1jaGVja2JveD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJ2ZXJ0aWNhbFwiPlZlcnRpY2FsPC9tYXQtY2hlY2tib3g+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cImludmVydFwiPkludmVydGVkPC9tYXQtY2hlY2tib3g+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiZGlzYWJsZWRcIj5EaXNhYmxlZDwvbWF0LWNoZWNrYm94PlxuICAgIDwvc2VjdGlvbj5cblxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuXG48bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLXJlc3VsdC1jYXJkXCI+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxoMj5SZXN1bHQ8L2gyPlxuICAgIDxicj5cbiAgICA8YnI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYWJlbC1jb250YWluZXJcIiBbY2xhc3NdPVwidmVydGljYWwgPyAnZXhhbXBsZS1sYWJlbC12ZXJ0aWNhbCcgOiAnZXhhbXBsZS1sYWJlbC1ob3Jpem9udGFsJ1wiPlxuICAgICAgPGxhYmVsIGlkPVwiZXhhbXBsZS1uYW1lLWxhYmVsXCIgY2xhc3M9XCJleGFtcGxlLW5hbWUtbGFiZWxcIj5NYXggVmFsdWU8L2xhYmVsPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS12YWx1ZS1sYWJlbFwiPnt7dmFsdWV9fTwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPG1hdC1zbGlkZXJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtpbnZlcnRdPVwiaW52ZXJ0XCJcbiAgICAgICAgW21heF09XCJtYXhcIlxuICAgICAgICBbbWluXT1cIm1pblwiXG4gICAgICAgIFtzdGVwXT1cInN0ZXBcIlxuICAgICAgICBbdGh1bWJMYWJlbF09XCJ0aHVtYkxhYmVsXCJcbiAgICAgICAgW3RpY2tJbnRlcnZhbF09XCJnZXRTbGlkZXJUaWNrSW50ZXJ2YWwoKVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICBbdmVydGljYWxdPVwidmVydGljYWxcIlxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLW5hbWUtbGFiZWxcIj5cbiAgICA8L21hdC1zbGlkZXI+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG4iXX0=