import { Component } from '@angular/core';
/**
 * @title Slider with custom thumb label formatting.
 */
var SliderFormattingExample = /** @class */ (function () {
    function SliderFormattingExample() {
    }
    SliderFormattingExample.prototype.formatLabel = function (value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    };
    SliderFormattingExample.decorators = [
        { type: Component, args: [{
                    selector: 'slider-formatting-example',
                    template: "<mat-slider\n  thumbLabel\n  [displayWith]=\"formatLabel\"\n  tickInterval=\"1000\"\n  min=\"1\"\n  max=\"100000\"></mat-slider>\n",
                    styles: ["mat-slider {\n  width: 300px;\n}\n"]
                }] }
    ];
    return SliderFormattingExample;
}());
export { SliderFormattingExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvc2xpZGVyLWZvcm1hdHRpbmcvc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtJQWFBLENBQUM7SUFQQyw2Q0FBVyxHQUFYLFVBQVksS0FBYTtRQUN2QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDdkM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyw4SUFBNkM7O2lCQUU5Qzs7SUFTRCw4QkFBQztDQUFBLEFBYkQsSUFhQztTQVJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgU2xpZGVyIHdpdGggY3VzdG9tIHRodW1iIGxhYmVsIGZvcm1hdHRpbmcuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJGb3JtYXR0aW5nRXhhbXBsZSB7XG4gIGZvcm1hdExhYmVsKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgPj0gMTAwMCkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyAxMDAwKSArICdrJztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==