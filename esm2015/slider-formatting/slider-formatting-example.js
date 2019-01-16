/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * \@title Slider with custom thumb label formatting.
 */
export class SliderFormattingExample {
    /**
     * @param {?} value
     * @return {?}
     */
    formatLabel(value) {
        if (!value) {
            return 0;
        }
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
SliderFormattingExample.decorators = [
    { type: Component, args: [{
                selector: 'slider-formatting-example',
                template: "<mat-slider\n  thumbLabel\n  [displayWith]=\"formatLabel\"\n  tickInterval=\"1000\"\n  min=\"1\"\n  max=\"100000\"></mat-slider>\n",
                styles: ["mat-slider {\n  width: 300px;\n}\n"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9zbGlkZXItZm9ybWF0dGluZy9zbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBVXhDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBQ2xDLFdBQVcsQ0FBQyxLQUFvQjtRQUM5QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUVELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN2QztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyw4SUFBNkM7O2FBRTlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBTbGlkZXIgd2l0aCBjdXN0b20gdGh1bWIgbGFiZWwgZm9ybWF0dGluZy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckZvcm1hdHRpbmdFeGFtcGxlIHtcbiAgZm9ybWF0TGFiZWwodmFsdWU6IG51bWJlciB8IG51bGwpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPj0gMTAwMCkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyAxMDAwKSArICdrJztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==