/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tooltip/tooltip-auto-hide/tooltip-auto-hide-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/cdk/scrolling";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/tooltip";
import * as i8 from "@angular/material/core";
function TooltipAutoHideExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
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
let TooltipAutoHideExample = /** @class */ (() => {
    /**
     * \@title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
     */
    class TooltipAutoHideExample {
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
    /** @nocollapse */ TooltipAutoHideExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipAutoHideExample, selectors: [["tooltip-auto-hide-example"]], decls: 9, vars: 3, consts: [[3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["cdkScrollable", "", 1, "example-container"], ["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipHideDelay", "100000", "aria-label", "Button that displays a tooltip that hides when scrolled out of the container", 1, "example-button", 3, "matTooltipPosition"], ["tooltip", "matTooltip"], [3, "value"]], template: function TooltipAutoHideExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Tooltip position");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-select", 0);
            i0.ɵɵtemplate(4, TooltipAutoHideExample_mat_option_4_Template, 2, 2, "mat-option", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 2);
            i0.ɵɵelementStart(6, "button", 3, 4);
            i0.ɵɵtext(8, " Action ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formControl", ctx.position);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.positionOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matTooltipPosition", ctx.position.value);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.NgForOf, i5.CdkScrollable, i6.MatButton, i7.MatTooltip, i8.MatOption], styles: [".example-button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}"] });
    return TooltipAutoHideExample;
})();
export { TooltipAutoHideExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipAutoHideExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-auto-hide-example',
                templateUrl: 'tooltip-auto-hide-example.html',
                styleUrls: ['tooltip-auto-hide-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TooltipAutoHideExample.prototype.positionOptions;
    /** @type {?} */
    TooltipAutoHideExample.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1hdXRvLWhpZGUvdG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1hdXRvLWhpZGUvdG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7O0lDRXZDLHFDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFhOzs7SUFGOEMseUNBQXdCO0lBQ2pGLGVBQ0Y7SUFERSxrREFDRjs7Ozs7QURFSjs7OztJQUFBLE1BS2Esc0JBQXNCO1FBTG5DO1lBTUUsb0JBQWUsR0FBc0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN6RSxhQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JEOzs7Z0JBUkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3Qzs7bUhBQ1ksc0JBQXNCO2tGQUF0QixzQkFBc0I7WUNabkMsc0NBQ0U7WUFBQSxpQ0FBVztZQUFBLGdDQUFnQjtZQUFBLGlCQUFZO1lBQ3ZDLHFDQUNFO1lBQUEscUZBQ0U7WUFFSixpQkFBYTtZQUNmLGlCQUFpQjtZQUVqQiw4QkFDRTtZQUFBLG9DQU1FO1lBQUEsd0JBQ0Y7WUFBQSxpQkFBUztZQUNYLGlCQUFNOztZQWhCUSxlQUF3QjtZQUF4QiwwQ0FBd0I7WUFDdEIsZUFBOEM7WUFBOUMsNkNBQThDO1lBU3BELGVBQXFDO1lBQXJDLHVEQUFxQzs7aUNEWi9DO0tBZUM7U0FIWSxzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7Ozs7SUFFQyxpREFBeUU7O0lBQ3pFLDBDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VG9vbHRpcFBvc2l0aW9ufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB0aGF0IGRlbW9uc3RyYXRlcyBhdXRvLWhpZGluZyB3aGVuIGl0IGNsaXBzIG91dCBvZiBpdHMgc2Nyb2xsaW5nIGNvbnRhaW5lci5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtYXV0by1oaWRlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBBdXRvSGlkZUV4YW1wbGUge1xuICBwb3NpdGlvbk9wdGlvbnM6IFRvb2x0aXBQb3NpdGlvbltdID0gWydiZWxvdycsICdhYm92ZScsICdsZWZ0JywgJ3JpZ2h0J107XG4gIHBvc2l0aW9uID0gbmV3IEZvcm1Db250cm9sKHRoaXMucG9zaXRpb25PcHRpb25zWzBdKTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5Ub29sdGlwIHBvc2l0aW9uPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJwb3NpdGlvblwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBwb3NpdGlvbk9wdGlvbiBvZiBwb3NpdGlvbk9wdGlvbnNcIiBbdmFsdWVdPVwicG9zaXRpb25PcHRpb25cIj5cbiAgICAgIHt7cG9zaXRpb25PcHRpb259fVxuICAgIDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgY2RrU2Nyb2xsYWJsZT5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAjdG9vbHRpcD1cIm1hdFRvb2x0aXBcIlxuICAgICAgICAgIG1hdFRvb2x0aXA9XCJJbmZvIGFib3V0IHRoZSBhY3Rpb25cIlxuICAgICAgICAgIFttYXRUb29sdGlwUG9zaXRpb25dPVwicG9zaXRpb24udmFsdWVcIlxuICAgICAgICAgIG1hdFRvb2x0aXBIaWRlRGVsYXk9XCIxMDAwMDBcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b24gdGhhdCBkaXNwbGF5cyBhIHRvb2x0aXAgdGhhdCBoaWRlcyB3aGVuIHNjcm9sbGVkIG91dCBvZiB0aGUgY29udGFpbmVyXCJcbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtYnV0dG9uXCI+XG4gICAgQWN0aW9uXG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=