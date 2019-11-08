/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/tooltip";
import * as i7 from "@angular/material/core";
function TooltipAutoHideExample_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const positionOption_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", positionOption_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", positionOption_r2, " ");
} }
/**
 * \@title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */
export class TooltipAutoHideExample {
    constructor() {
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
}
TooltipAutoHideExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-auto-hide-example',
                templateUrl: 'tooltip-auto-hide-example.html',
                styleUrls: ['tooltip-auto-hide-example.css'],
            },] },
];
/** @nocollapse */ TooltipAutoHideExample.ɵfac = function TooltipAutoHideExample_Factory(t) { return new (t || TooltipAutoHideExample)(); };
/** @nocollapse */ TooltipAutoHideExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipAutoHideExample, selectors: [["tooltip-auto-hide-example"]], decls: 7, vars: 3, consts: [["placeholder", "Tooltip position", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["cdk-scrollable", "", 1, "example-container"], ["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipHideDelay", "100000", "aria-label", "Button that displays a tooltip that hides when scrolled out of the container", 1, "example-button", 3, "matTooltipPosition"], ["tooltip", "matTooltip"], [3, "value"]], template: function TooltipAutoHideExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-select", 0);
        i0.ɵɵtemplate(2, TooltipAutoHideExample_mat_option_2_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "button", 3, 4);
        i0.ɵɵtext(6, " Action ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControl", ctx.position);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.positionOptions);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTooltipPosition", ctx.position.value);
    } }, directives: [i1.MatFormField, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.NgForOf, i5.MatButton, i6.MatTooltip, i7.MatOption], styles: [".example-button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(TooltipAutoHideExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-auto-hide-example',
                templateUrl: 'tooltip-auto-hide-example.html',
                styleUrls: ['tooltip-auto-hide-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    TooltipAutoHideExample.prototype.positionOptions;
    /** @type {?} */
    TooltipAutoHideExample.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1hdXRvLWhpZGUvdG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1hdXRvLWhpZGUvdG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztJQ0N2QyxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjhDLHlDQUF3QjtJQUNqRixlQUNGO0lBREUsa0RBQ0Y7Ozs7O0FEUUosTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLG9CQUFlLEdBQXNCLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekUsYUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyRDs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzs0RkFDWSxzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQ1puQyxzQ0FDRTtRQUFBLHFDQUNFO1FBQUEscUZBQ0U7UUFFSixpQkFBYTtRQUNmLGlCQUFpQjtRQUVqQiw4QkFDRTtRQUFBLG9DQU1FO1FBQUEsd0JBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFNOztRQWhCdUMsZUFBd0I7UUFBeEIsMENBQXdCO1FBQ3JELGVBQThDO1FBQTlDLDZDQUE4QztRQVNwRCxlQUFxQztRQUFyQyx1REFBcUM7O21DRENsQyxzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzs7O0lBRUMsaURBQXlFOztJQUN6RSwwQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1Rvb2x0aXBQb3NpdGlvbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgdGhhdCBkZW1vbnN0cmF0ZXMgYXV0by1oaWRpbmcgd2hlbiBpdCBjbGlwcyBvdXQgb2YgaXRzIHNjcm9sbGluZyBjb250YWluZXIuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtYXV0by1oaWRlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtYXV0by1oaWRlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLWF1dG8taGlkZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQXV0b0hpZGVFeGFtcGxlIHtcbiAgcG9zaXRpb25PcHRpb25zOiBUb29sdGlwUG9zaXRpb25bXSA9IFsnYmVsb3cnLCAnYWJvdmUnLCAnbGVmdCcsICdyaWdodCddO1xuICBwb3NpdGlvbiA9IG5ldyBGb3JtQ29udHJvbCh0aGlzLnBvc2l0aW9uT3B0aW9uc1swXSk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiVG9vbHRpcCBwb3NpdGlvblwiIFtmb3JtQ29udHJvbF09XCJwb3NpdGlvblwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBwb3NpdGlvbk9wdGlvbiBvZiBwb3NpdGlvbk9wdGlvbnNcIiBbdmFsdWVdPVwicG9zaXRpb25PcHRpb25cIj5cbiAgICAgIHt7cG9zaXRpb25PcHRpb259fVxuICAgIDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgY2RrLXNjcm9sbGFibGU+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gI3Rvb2x0aXA9XCJtYXRUb29sdGlwXCJcbiAgICAgICAgICBtYXRUb29sdGlwPVwiSW5mbyBhYm91dCB0aGUgYWN0aW9uXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcFBvc2l0aW9uXT1cInBvc2l0aW9uLnZhbHVlXCJcbiAgICAgICAgICBtYXRUb29sdGlwSGlkZURlbGF5PVwiMTAwMDAwXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQnV0dG9uIHRoYXQgZGlzcGxheXMgYSB0b29sdGlwIHRoYXQgaGlkZXMgd2hlbiBzY3JvbGxlZCBvdXQgb2YgdGhlIGNvbnRhaW5lclwiXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWJ1dHRvblwiPlxuICAgIEFjdGlvblxuICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19