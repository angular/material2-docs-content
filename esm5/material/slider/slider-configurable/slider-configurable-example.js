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
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 4);
    i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_checkbox_24_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.autoTicks = $event; });
    i0.ɵɵtext(1, " Auto ticks ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r0.autoTicks);
} }
function SliderConfigurableExample_mat_form_field_25_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 2);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Tick interval");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 3);
    i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_form_field_25_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.tickInterval = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
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
    SliderConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: SliderConfigurableExample, selectors: [["slider-configurable-example"]], decls: 42, vars: 20, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], [1, "example-margin", 3, "ngModel", "ngModelChange"], ["class", "example-margin", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "example-margin", 4, "ngIf"], [1, "example-result-card"], [1, "example-margin", 3, "disabled", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "ngModel", "vertical", "ngModelChange"]], template: function SliderConfigurableExample_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵelementStart(41, "mat-slider", 8);
            i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_slider_ngModelChange_41_listener($event) { return ctx.value = $event; });
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
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("disabled", ctx.disabled)("invert", ctx.invert)("max", ctx.max)("min", ctx.min)("step", ctx.step)("thumbLabel", ctx.thumbLabel)("tickInterval", ctx.getSliderTickInterval())("ngModel", ctx.value)("vertical", ctx.vertical);
        } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatFormField, i2.MatLabel, i3.MatInput, i4.NumberValueAccessor, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatCheckbox, i6.NgIf, i7.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 0 8px 16px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.mat-slider-vertical[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.mat-card[_ngcontent-%COMP%]    + .mat-card[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUN5QmxDLHVDQUNFO0lBRG1DLHVPQUF1QjtJQUMxRCw0QkFDRjtJQUFBLGlCQUFlOzs7SUFGc0IsMENBQXVCOzs7O0lBRzVELHlDQUNFO0lBQUEsaUNBQVc7SUFBQSw2QkFBYTtJQUFBLGlCQUFZO0lBQ3BDLGdDQUNGO0lBRGdDLHFPQUEwQjtJQUF4RCxpQkFDRjtJQUFBLGlCQUFpQjs7O0lBRGUsZUFBMEI7SUFBMUIsNkNBQTBCOztBRDVCaEU7O0dBRUc7QUFDSDtJQUFBO1FBTUUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ1YsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FB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Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIHNsaWRlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29uZmlndXJhYmxlRXhhbXBsZSB7XG4gIGF1dG9UaWNrcyA9IGZhbHNlO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICBpbnZlcnQgPSBmYWxzZTtcbiAgbWF4ID0gMTAwO1xuICBtaW4gPSAwO1xuICBzaG93VGlja3MgPSBmYWxzZTtcbiAgc3RlcCA9IDE7XG4gIHRodW1iTGFiZWwgPSBmYWxzZTtcbiAgdmFsdWUgPSAwO1xuICB2ZXJ0aWNhbCA9IGZhbHNlO1xuICB0aWNrSW50ZXJ2YWwgPSAxO1xuXG4gIGdldFNsaWRlclRpY2tJbnRlcnZhbCgpOiBudW1iZXIgfCAnYXV0bycge1xuICAgIHJldHVybiB0aGlzLnNob3dUaWNrcyA/ICh0aGlzLmF1dG9UaWNrcyA/ICdhdXRvJyA6IHRoaXMudGlja0ludGVydmFsKSA6IDA7XG4gIH1cbn1cbiIsIjxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlNsaWRlciBjb25maWd1cmF0aW9uPC9oMj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPlxuICAgICAgICA8bWF0LWxhYmVsPlZhbHVlPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+TWluIHZhbHVlPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJtaW5cIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPlxuICAgICAgICA8bWF0LWxhYmVsPk1heCB2YWx1ZTwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwibWF4XCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5cbiAgICAgICAgPG1hdC1sYWJlbD5TdGVwIHNpemU8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInN0ZXBcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwic2hvd1RpY2tzXCI+U2hvdyB0aWNrczwvbWF0LWNoZWNrYm94PlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJhdXRvVGlja3NcIiAqbmdJZj1cInNob3dUaWNrc1wiPlxuICAgICAgICBBdXRvIHRpY2tzXG4gICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgKm5nSWY9XCJzaG93VGlja3MgJiYgIWF1dG9UaWNrc1wiPlxuICAgICAgICA8bWF0LWxhYmVsPlRpY2sgaW50ZXJ2YWw8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInRpY2tJbnRlcnZhbFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJ0aHVtYkxhYmVsXCI+U2hvdyB0aHVtYiBsYWJlbDwvbWF0LWNoZWNrYm94PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cInZlcnRpY2FsXCI+VmVydGljYWw8L21hdC1jaGVja2JveD5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiaW52ZXJ0XCI+SW52ZXJ0ZWQ8L21hdC1jaGVja2JveD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJkaXNhYmxlZFwiPkRpc2FibGVkPC9tYXQtY2hlY2tib3g+XG4gICAgPC9zZWN0aW9uPlxuXG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cbjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtcmVzdWx0LWNhcmRcIj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyPlJlc3VsdDwvaDI+XG5cbiAgICA8bWF0LXNsaWRlclxuICAgICAgICBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2ludmVydF09XCJpbnZlcnRcIlxuICAgICAgICBbbWF4XT1cIm1heFwiXG4gICAgICAgIFttaW5dPVwibWluXCJcbiAgICAgICAgW3N0ZXBdPVwic3RlcFwiXG4gICAgICAgIFt0aHVtYkxhYmVsXT1cInRodW1iTGFiZWxcIlxuICAgICAgICBbdGlja0ludGVydmFsXT1cImdldFNsaWRlclRpY2tJbnRlcnZhbCgpXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgIFt2ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiPlxuICAgIDwvbWF0LXNsaWRlcj5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cbiJdfQ==