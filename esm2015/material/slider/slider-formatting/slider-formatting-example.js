import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * @title Slider with custom thumb label formatting.
 */
export class SliderFormattingExample {
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
SliderFormattingExample.ɵfac = function SliderFormattingExample_Factory(t) { return new (t || SliderFormattingExample)(); };
SliderFormattingExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderFormattingExample, selectors: [["slider-formatting-example"]], decls: 1, vars: 1, consts: [["thumbLabel", "", "tickInterval", "1000", "step", "1000", "min", "0", "max", "100000", "aria-label", "units", 3, "displayWith"]], template: function SliderFormattingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-slider", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("displayWith", ctx.formatLabel);
    } }, directives: [i1.MatSlider], styles: ["mat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderFormattingExample, [{
        type: Component,
        args: [{
                selector: 'slider-formatting-example',
                templateUrl: 'slider-formatting-example.html',
                styleUrls: ['slider-formatting-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItZm9ybWF0dGluZy9zbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1mb3JtYXR0aW5nL3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN2QztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OEZBUFUsdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUNWcEMsZ0NBT2tDOztRQUxoQyw2Q0FBMkI7O3VGRFFoQix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBTbGlkZXIgd2l0aCBjdXN0b20gdGh1bWIgbGFiZWwgZm9ybWF0dGluZy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckZvcm1hdHRpbmdFeGFtcGxlIHtcbiAgZm9ybWF0TGFiZWwodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA+PSAxMDAwKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDApICsgJ2snO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIiwiPG1hdC1zbGlkZXJcbiAgdGh1bWJMYWJlbFxuICBbZGlzcGxheVdpdGhdPVwiZm9ybWF0TGFiZWxcIlxuICB0aWNrSW50ZXJ2YWw9XCIxMDAwXCJcbiAgc3RlcD1cIjEwMDBcIlxuICBtaW49XCIwXCJcbiAgbWF4PVwiMTAwMDAwXCJcbiAgYXJpYS1sYWJlbD1cInVuaXRzXCI+PC9tYXQtc2xpZGVyPlxuIl19