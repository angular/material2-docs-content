/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/slider/slider-formatting/slider-formatting-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * \@title Slider with custom thumb label formatting.
 */
let SliderFormattingExample = /** @class */ (() => {
    /**
     * \@title Slider with custom thumb label formatting.
     */
    class SliderFormattingExample {
        /**
         * @param {?} value
         * @return {?}
         */
        formatLabel(value) {
            if (value >= 1000) {
                return Math.round(value / 1000) + 'k';
            }
            return value;
        }
    }
    SliderFormattingExample.decorators = [
        { type: Component, args: [{
                    selector: 'slider-formatting-example',
                    templateUrl: 'slider-formatting-example.html',
                    styleUrls: ['slider-formatting-example.css'],
                },] },
    ];
    /** @nocollapse */ SliderFormattingExample.ɵfac = function SliderFormattingExample_Factory(t) { return new (t || SliderFormattingExample)(); };
    /** @nocollapse */ SliderFormattingExample.ɵcmp = i0.ɵɵdefineComponent({ type: SliderFormattingExample, selectors: [["slider-formatting-example"]], decls: 1, vars: 1, consts: [["thumbLabel", "", "tickInterval", "1000", "min", "1", "max", "100000", 3, "displayWith"]], template: function SliderFormattingExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "mat-slider", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("displayWith", ctx.formatLabel);
        } }, directives: [i1.MatSlider], styles: ["mat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
    return SliderFormattingExample;
})();
export { SliderFormattingExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SliderFormattingExample, [{
        type: Component,
        args: [{
                selector: 'slider-formatting-example',
                templateUrl: 'slider-formatting-example.html',
                styleUrls: ['slider-formatting-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItZm9ybWF0dGluZy9zbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1mb3JtYXR0aW5nL3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUt4Qzs7OztJQUFBLE1BS2EsdUJBQXVCOzs7OztRQUNsQyxXQUFXLENBQUMsS0FBYTtZQUN2QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQ3ZDO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDOzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3Qzs7cUhBQ1ksdUJBQXVCO21GQUF2Qix1QkFBdUI7WUNWcEMsZ0NBSzRCOztZQUgxQiw2Q0FBMkI7O2tDREY3QjtLQWtCQztTQVJZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgU2xpZGVyIHdpdGggY3VzdG9tIHRodW1iIGxhYmVsIGZvcm1hdHRpbmcuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJGb3JtYXR0aW5nRXhhbXBsZSB7XG4gIGZvcm1hdExhYmVsKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgPj0gMTAwMCkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyAxMDAwKSArICdrJztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiIsIjxtYXQtc2xpZGVyXG4gIHRodW1iTGFiZWxcbiAgW2Rpc3BsYXlXaXRoXT1cImZvcm1hdExhYmVsXCJcbiAgdGlja0ludGVydmFsPVwiMTAwMFwiXG4gIG1pbj1cIjFcIlxuICBtYXg9XCIxMDAwMDBcIj48L21hdC1zbGlkZXI+XG4iXX0=