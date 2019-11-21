/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * \@title Slider with custom thumb label formatting.
 */
export class SliderFormattingExample {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SliderFormattingExample, [{
        type: Component,
        args: [{
                selector: 'slider-formatting-example',
                templateUrl: 'slider-formatting-example.html',
                styleUrls: ['slider-formatting-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItZm9ybWF0dGluZy9zbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1mb3JtYXR0aW5nL3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBVXhDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBQ2xDLFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN2QztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzs4RkFDWSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1ZwQyxnQ0FLNEI7O1FBSDFCLDZDQUEyQjs7a0REUWhCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFNsaWRlciB3aXRoIGN1c3RvbSB0aHVtYiBsYWJlbCBmb3JtYXR0aW5nLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbGlkZXItZm9ybWF0dGluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyRm9ybWF0dGluZ0V4YW1wbGUge1xuICBmb3JtYXRMYWJlbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlID49IDEwMDApIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMCkgKyAnayc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iLCI8bWF0LXNsaWRlclxuICB0aHVtYkxhYmVsXG4gIFtkaXNwbGF5V2l0aF09XCJmb3JtYXRMYWJlbFwiXG4gIHRpY2tJbnRlcnZhbD1cIjEwMDBcIlxuICBtaW49XCIxXCJcbiAgbWF4PVwiMTAwMDAwXCI+PC9tYXQtc2xpZGVyPlxuIl19