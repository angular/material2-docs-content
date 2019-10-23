import { coerceNumberProperty } from '@angular/cdk/coercion';
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
        this._tickInterval = 1;
    }
    Object.defineProperty(SliderConfigurableExample.prototype, "tickInterval", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        set: function (value) {
            this._tickInterval = coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
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
            i0.ɵɵproperty("disabled", ctx.disabled)("invert", ctx.invert)("max", ctx.max)("min", ctx.min)("step", ctx.step)("thumbLabel", ctx.thumbLabel)("tickInterval", ctx.tickInterval)("ngModel", ctx.value)("vertical", ctx.vertical);
        } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatFormField, i3.MatInput, i4.NumberValueAccessor, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatCheckbox, i6.NgIf, i7.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.mat-slider-vertical[_ngcontent-%COMP%] {\n  height: 300px;\n}"] });
    return SliderConfigurableExample;
}());
export { SliderConfigurableExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(SliderConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'slider-configurable-example',
                templateUrl: 'slider-configurable-example.html',
                styleUrls: ['slider-configurable-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItY29uZmlndXJhYmxlL3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvc2xpZGVyLWNvbmZpZ3VyYWJsZS9zbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQ29CbEMsdUNBQ0U7SUFEbUMsdU9BQXVCO0lBQzFELDRCQUNGO0lBQUEsaUJBQWU7OztJQUZzQiwwQ0FBdUI7Ozs7SUFHNUQseUNBQ0U7SUFBQSxpQ0FDRjtJQUQ0RCxxT0FBMEI7SUFBcEYsaUJBQ0Y7SUFBQSxpQkFBaUI7OztJQUQyQyxlQUEwQjtJQUExQiw2Q0FBMEI7O0FEdEI1Rjs7R0FFRztBQUNIO0lBQUE7UUFNRSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFFBQUcsR0FBRyxHQUFHLENBQUM7UUFDVixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVFULGtC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ci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDb25maWd1cmFibGUgc2xpZGVyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb25maWd1cmFibGVFeGFtcGxlIHtcbiAgYXV0b1RpY2tzID0gZmFsc2U7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGludmVydCA9IGZhbHNlO1xuICBtYXggPSAxMDA7XG4gIG1pbiA9IDA7XG4gIHNob3dUaWNrcyA9IGZhbHNlO1xuICBzdGVwID0gMTtcbiAgdGh1bWJMYWJlbCA9IGZhbHNlO1xuICB2YWx1ZSA9IDA7XG4gIHZlcnRpY2FsID0gZmFsc2U7XG5cbiAgZ2V0IHRpY2tJbnRlcnZhbCgpOiBudW1iZXIgfCAnYXV0bycge1xuICAgIHJldHVybiB0aGlzLnNob3dUaWNrcyA/ICh0aGlzLmF1dG9UaWNrcyA/ICdhdXRvJyA6IHRoaXMuX3RpY2tJbnRlcnZhbCkgOiAwO1xuICB9XG4gIHNldCB0aWNrSW50ZXJ2YWwodmFsdWUpIHtcbiAgICB0aGlzLl90aWNrSW50ZXJ2YWwgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfdGlja0ludGVydmFsID0gMTtcbn1cbiIsIjxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlNsaWRlciBjb25maWd1cmF0aW9uPC9oMj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiVmFsdWVcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIk1pbiB2YWx1ZVwiIFsobmdNb2RlbCldPVwibWluXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIk1heCB2YWx1ZVwiIFsobmdNb2RlbCldPVwibWF4XCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlN0ZXAgc2l6ZVwiIFsobmdNb2RlbCldPVwic3RlcFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJzaG93VGlja3NcIj5TaG93IHRpY2tzPC9tYXQtY2hlY2tib3g+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cImF1dG9UaWNrc1wiICpuZ0lmPVwic2hvd1RpY2tzXCI+XG4gICAgICAgIEF1dG8gdGlja3NcbiAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiAqbmdJZj1cInNob3dUaWNrcyAmJiAhYXV0b1RpY2tzXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJUaWNrIGludGVydmFsXCIgWyhuZ01vZGVsKV09XCJ0aWNrSW50ZXJ2YWxcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwidGh1bWJMYWJlbFwiPlNob3cgdGh1bWIgbGFiZWw8L21hdC1jaGVja2JveD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJ2ZXJ0aWNhbFwiPlZlcnRpY2FsPC9tYXQtY2hlY2tib3g+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cImludmVydFwiPkludmVydGVkPC9tYXQtY2hlY2tib3g+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiZGlzYWJsZWRcIj5EaXNhYmxlZDwvbWF0LWNoZWNrYm94PlxuICAgIDwvc2VjdGlvbj5cblxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuXG48bWF0LWNhcmQgY2xhc3M9XCJyZXN1bHRcIj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlJlc3VsdDwvaDI+XG5cbiAgICA8bWF0LXNsaWRlclxuICAgICAgICBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2ludmVydF09XCJpbnZlcnRcIlxuICAgICAgICBbbWF4XT1cIm1heFwiXG4gICAgICAgIFttaW5dPVwibWluXCJcbiAgICAgICAgW3N0ZXBdPVwic3RlcFwiXG4gICAgICAgIFt0aHVtYkxhYmVsXT1cInRodW1iTGFiZWxcIlxuICAgICAgICBbdGlja0ludGVydmFsXT1cInRpY2tJbnRlcnZhbFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICBbdmVydGljYWxdPVwidmVydGljYWxcIj5cbiAgICA8L21hdC1zbGlkZXI+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG4iXX0=