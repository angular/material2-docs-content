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
/*@__PURE__*/ i0.ɵsetClassMetadata(SliderConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'slider-configurable-example',
                templateUrl: 'slider-configurable-example.html',
                styleUrls: ['slider-configurable-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItY29uZmlndXJhYmxlL3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvc2xpZGVyLWNvbmZpZ3VyYWJsZS9zbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQ3FCbEMsdUNBQ0U7SUFEbUMsdU9BQXVCO0lBQzFELDRCQUNGO0lBQUEsaUJBQWU7OztJQUZzQiwwQ0FBdUI7Ozs7SUFHNUQseUNBQ0U7SUFBQSxpQ0FDRjtJQUQ0RCxxT0FBMEI7SUFBcEYsaUJBQ0Y7SUFBQSxpQkFBaUI7OztJQUQyQyxlQUEwQjtJQUExQiw2Q0FBMEI7O0FEdkI1Rjs7R0FFRztBQUNIO0lBQUE7UUFNRSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFFBQUcsR0FBRyxHQUFHLENBQUM7UUFDVixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBWSxHQUFHLENBQUMsQ0FBQztLQUtsQjtJQUhDLHlEQUFxQixHQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztvQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQy9DOztzR0FDWSx5QkFBeUI7a0VBQXpCLHlCQUF5QjtZQ1Z0QyxnQ0FDRTtZQUFBLHdDQUNFO1lBQUEsNkJBQXVCO1lBQUEsb0NBQW9CO1lBQUEsaUJBQUs7WUFFaEQsa0NBQ0U7WUFBQSx5Q0FDRTtZQUFBLGdDQUNGO1lBRG9ELGlKQUFtQjtZQUFyRSxpQkFDRjtZQUFBLGlCQUFpQjtZQUNqQix5Q0FDRTtZQUFBLGdDQUNGO1lBRHdELCtJQUFpQjtZQUF2RSxpQkFDRjtZQUFBLGlCQUFpQjtZQUNqQix5Q0FDRTtZQUFBLGlDQUNGO1lBRHdELGdKQUFpQjtZQUF2RSxpQkFDRjtZQUFBLGlCQUFpQjtZQUNqQiwwQ0FDRTtZQUFBLGlDQUNGO1lBRHdELGlKQUFrQjtZQUF4RSxpQkFDRjtZQUFBLGlCQUFpQjtZQUNuQixpQkFBVTtZQUVWLG1DQUNFO1lBQUEsd0NBQTZEO1lBQXhCLDZKQUF1QjtZQUFDLDJCQUFVO1lBQUEsaUJBQWU7WUFDdEYsOEZBQ0U7WUFFRixrR0FDRTtZQUVKLGlCQUFVO1lBRVYsbUNBQ0U7WUFBQSx3Q0FBOEQ7WUFBekIsOEpBQXdCO1lBQUMsaUNBQWdCO1lBQUEsaUJBQWU7WUFDL0YsaUJBQVU7WUFFVixtQ0FDRTtZQUFBLHdDQUE0RDtZQUF2Qiw0SkFBc0I7WUFBQyx5QkFBUTtZQUFBLGlCQUFlO1lBQ25GLHdDQUEwRDtZQUFyQiwwSkFBb0I7WUFBQyx5QkFBUTtZQUFBLGlCQUFlO1lBQ25GLGlCQUFVO1lBRVYsbUNBQ0U7WUFBQSx3Q0FBNEQ7WUFBdkIsNEpBQXNCO1lBQUMseUJBQVE7WUFBQSxpQkFBZTtZQUNyRixpQkFBVTtZQUVaLGlCQUFtQjtZQUNyQixpQkFBVztZQUVYLHFDQUNFO1lBQUEseUNBQ0U7WUFBQSw4QkFBdUI7WUFBQSx1QkFBTTtZQUFBLGlCQUFLO1lBRWxDLHVDQVdhO1lBRlQsdUpBQW1CO1lBRXZCLGlCQUFhO1lBQ2YsaUJBQW1CO1lBQ3JCLGlCQUFXOztZQXhEK0MsZUFBbUI7WUFBbkIsbUNBQW1CO1lBR2YsZUFBaUI7WUFBakIsaUNBQWlCO1lBR2pCLGVBQWlCO1lBQWpCLGlDQUFpQjtZQUdqQixlQUFrQjtZQUFsQixrQ0FBa0I7WUFLckMsZUFBdUI7WUFBdkIsdUNBQXVCO1lBQ0MsZUFBaUI7WUFBakIsb0NBQWlCO1lBR3ZDLGVBQStCO1lBQS9CLHNEQUErQjtZQU1qQyxlQUF3QjtZQUF4Qix3Q0FBd0I7WUFJeEIsZUFBc0I7WUFBdEIsc0NBQXNCO1lBQ3RCLGVBQW9CO1lBQXBCLG9DQUFvQjtZQUlwQixlQUFzQjtZQUF0QixzQ0FBc0I7WUFZekQsZUFBcUI7WUFBckIsdUNBQXFCLHNCQUFBLGdCQUFBLGdCQUFBLGtCQUFBLDhCQUFBLDZDQUFBLHNCQUFBLDBCQUFBOztvQ0RuRDdCO0NBMEJDLEFBckJELElBcUJDO1NBaEJZLHlCQUF5QjttQ0FBekIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIHNsaWRlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29uZmlndXJhYmxlRXhhbXBsZSB7XG4gIGF1dG9UaWNrcyA9IGZhbHNlO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICBpbnZlcnQgPSBmYWxzZTtcbiAgbWF4ID0gMTAwO1xuICBtaW4gPSAwO1xuICBzaG93VGlja3MgPSBmYWxzZTtcbiAgc3RlcCA9IDE7XG4gIHRodW1iTGFiZWwgPSBmYWxzZTtcbiAgdmFsdWUgPSAwO1xuICB2ZXJ0aWNhbCA9IGZhbHNlO1xuICB0aWNrSW50ZXJ2YWwgPSAxO1xuXG4gIGdldFNsaWRlclRpY2tJbnRlcnZhbCgpOiBudW1iZXIgfCAnYXV0bycge1xuICAgIHJldHVybiB0aGlzLnNob3dUaWNrcyA/ICh0aGlzLmF1dG9UaWNrcyA/ICdhdXRvJyA6IHRoaXMudGlja0ludGVydmFsKSA6IDA7XG4gIH1cbn1cbiIsIjxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlNsaWRlciBjb25maWd1cmF0aW9uPC9oMj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiVmFsdWVcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIk1pbiB2YWx1ZVwiIFsobmdNb2RlbCldPVwibWluXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIk1heCB2YWx1ZVwiIFsobmdNb2RlbCldPVwibWF4XCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlN0ZXAgc2l6ZVwiIFsobmdNb2RlbCldPVwic3RlcFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJzaG93VGlja3NcIj5TaG93IHRpY2tzPC9tYXQtY2hlY2tib3g+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cImF1dG9UaWNrc1wiICpuZ0lmPVwic2hvd1RpY2tzXCI+XG4gICAgICAgIEF1dG8gdGlja3NcbiAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiAqbmdJZj1cInNob3dUaWNrcyAmJiAhYXV0b1RpY2tzXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJUaWNrIGludGVydmFsXCIgWyhuZ01vZGVsKV09XCJ0aWNrSW50ZXJ2YWxcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwidGh1bWJMYWJlbFwiPlNob3cgdGh1bWIgbGFiZWw8L21hdC1jaGVja2JveD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJ2ZXJ0aWNhbFwiPlZlcnRpY2FsPC9tYXQtY2hlY2tib3g+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cImludmVydFwiPkludmVydGVkPC9tYXQtY2hlY2tib3g+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiZGlzYWJsZWRcIj5EaXNhYmxlZDwvbWF0LWNoZWNrYm94PlxuICAgIDwvc2VjdGlvbj5cblxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuXG48bWF0LWNhcmQgY2xhc3M9XCJyZXN1bHRcIj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlJlc3VsdDwvaDI+XG5cbiAgICA8bWF0LXNsaWRlclxuICAgICAgICBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2ludmVydF09XCJpbnZlcnRcIlxuICAgICAgICBbbWF4XT1cIm1heFwiXG4gICAgICAgIFttaW5dPVwibWluXCJcbiAgICAgICAgW3N0ZXBdPVwic3RlcFwiXG4gICAgICAgIFt0aHVtYkxhYmVsXT1cInRodW1iTGFiZWxcIlxuICAgICAgICBbdGlja0ludGVydmFsXT1cImdldFNsaWRlclRpY2tJbnRlcnZhbCgpXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgIFt2ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiPlxuICAgIDwvbWF0LXNsaWRlcj5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cbiJdfQ==