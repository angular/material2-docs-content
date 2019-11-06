/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/paginator";
import * as i5 from "@angular/common";
function PaginatorConfigurableExample_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "h5");
    i0.ɵɵtext(2, "Page Change Event Properties");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("List length: ", ctx_r0.pageEvent.length, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Page size: ", ctx_r0.pageEvent.pageSize, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Page index: ", ctx_r0.pageEvent.pageIndex, "");
} }
/**
 * \@title Configurable paginator
 */
export class PaginatorConfigurableExample {
    constructor() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    /**
     * @param {?} setPageSizeOptionsInput
     * @return {?}
     */
    setPageSizeOptions(setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map((/**
         * @param {?} str
         * @return {?}
         */
        str => +str));
    }
}
PaginatorConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'paginator-configurable-example',
                templateUrl: 'paginator-configurable-example.html',
                styleUrls: ['paginator-configurable-example.css'],
            },] },
];
/** @nocollapse */ PaginatorConfigurableExample.ɵfac = function PaginatorConfigurableExample_Factory(t) { return new (t || PaginatorConfigurableExample)(); };
/** @nocollapse */ PaginatorConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PaginatorConfigurableExample, selectors: [["paginator-configurable-example"]], decls: 11, vars: 7, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], [3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]], template: function PaginatorConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵtext(1, " List length: ");
        i0.ɵɵelementStart(2, "input", 0);
        i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_2_listener($event) { return ctx.length = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field");
        i0.ɵɵtext(4, " Page size: ");
        i0.ɵɵelementStart(5, "input", 0);
        i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_5_listener($event) { return ctx.pageSize = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-form-field");
        i0.ɵɵtext(7, " Page size options: ");
        i0.ɵɵelementStart(8, "input", 0);
        i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_8_listener($event) { return ctx.setPageSizeOptions($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-paginator", 1);
        i0.ɵɵlistener("page", function PaginatorConfigurableExample_Template_mat_paginator_page_9_listener($event) { return ctx.pageEvent = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, PaginatorConfigurableExample_div_10_Template, 9, 3, "div", 2);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.length);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.pageSize);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.pageSizeOptions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.pageEvent);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.MatPaginator, i5.NgIf], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(PaginatorConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'paginator-configurable-example',
                templateUrl: 'paginator-configurable-example.html',
                styleUrls: ['paginator-configurable-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    PaginatorConfigurableExample.prototype.length;
    /** @type {?} */
    PaginatorConfigurableExample.prototype.pageSize;
    /** @type {?} */
    PaginatorConfigurableExample.prototype.pageSizeOptions;
    /** @type {?} */
    PaginatorConfigurableExample.prototype.pageEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDc0J4QywyQkFDRTtJQUFBLDBCQUFJO0lBQUEsNENBQTRCO0lBQUEsaUJBQUs7SUFDckMsMkJBQUs7SUFBQSxZQUFpQztJQUFBLGlCQUFNO0lBQzVDLDJCQUFLO0lBQUEsWUFBaUM7SUFBQSxpQkFBTTtJQUM1QywyQkFBSztJQUFBLFlBQW1DO0lBQUEsaUJBQU07SUFDaEQsaUJBQU07OztJQUhDLGVBQWlDO0lBQWpDLG1FQUFpQztJQUNqQyxlQUFpQztJQUFqQyxtRUFBaUM7SUFDakMsZUFBbUM7SUFBbkMscUVBQW1DOzs7OztBRGYxQyxNQUFNLE9BQU8sNEJBQTRCO0lBTHpDOztRQU9FLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2Qsb0JBQWUsR0FBYSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBUTlDOzs7OztJQUhDLGtCQUFrQixDQUFDLHVCQUErQjtRQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFHLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDO0lBQzdFLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7O3dHQUNZLDRCQUE0QjtpRUFBNUIsNEJBQTRCO1FDWHpDLHNDQUNFO1FBQUEsOEJBQ0E7UUFBQSxnQ0FDRjtRQURrQixxSkFBb0I7UUFBcEMsaUJBQ0Y7UUFBQSxpQkFBaUI7UUFFakIsc0NBQ0U7UUFBQSw0QkFDQTtRQUFBLGdDQUNGO1FBRGtCLHVKQUFzQjtRQUF0QyxpQkFDRjtRQUFBLGlCQUFpQjtRQUNqQixzQ0FDRTtRQUFBLG9DQUNBO1FBQUEsZ0NBR0Y7UUFEUyw4SEFBaUIsOEJBQTBCLElBQUM7UUFGbkQsaUJBR0Y7UUFBQSxpQkFBaUI7UUFFakIsd0NBSWdCO1FBREYsOElBQTJCO1FBQ3pDLGlCQUFnQjtRQUVoQiwrRUFDRTs7UUFyQmdCLGVBQW9CO1FBQXBCLG9DQUFvQjtRQUtwQixlQUFzQjtRQUF0QixzQ0FBc0I7UUFLL0IsZUFBMkI7UUFBM0IsNkNBQTJCO1FBSXJCLGVBQWlCO1FBQWpCLG1DQUFpQiwwQkFBQSx3Q0FBQTtRQU0zQixlQUFpQjtRQUFqQixvQ0FBaUI7O21DRFhULDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7Ozs7SUFHQyw4Q0FBYTs7SUFDYixnREFBYzs7SUFDZCx1REFBNkM7O0lBRzdDLGlEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFnZUV2ZW50fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuXG4vKipcbiAqIEB0aXRsZSBDb25maWd1cmFibGUgcGFnaW5hdG9yXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JDb25maWd1cmFibGVFeGFtcGxlIHtcbiAgLy8gTWF0UGFnaW5hdG9yIElucHV0c1xuICBsZW5ndGggPSAxMDA7XG4gIHBhZ2VTaXplID0gMTA7XG4gIHBhZ2VTaXplT3B0aW9uczogbnVtYmVyW10gPSBbNSwgMTAsIDI1LCAxMDBdO1xuXG4gIC8vIE1hdFBhZ2luYXRvciBPdXRwdXRcbiAgcGFnZUV2ZW50OiBQYWdlRXZlbnQ7XG5cbiAgc2V0UGFnZVNpemVPcHRpb25zKHNldFBhZ2VTaXplT3B0aW9uc0lucHV0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhZ2VTaXplT3B0aW9ucyA9IHNldFBhZ2VTaXplT3B0aW9uc0lucHV0LnNwbGl0KCcsJykubWFwKHN0ciA9PiArc3RyKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICBMaXN0IGxlbmd0aDpcbiAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwibGVuZ3RoXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIFBhZ2Ugc2l6ZTpcbiAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwicGFnZVNpemVcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIFBhZ2Ugc2l6ZSBvcHRpb25zOlxuICA8aW5wdXQgbWF0SW5wdXRcbiAgICAgICAgIFtuZ01vZGVsXT1cInBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRQYWdlU2l6ZU9wdGlvbnMoJGV2ZW50KVwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1wYWdpbmF0b3IgW2xlbmd0aF09XCJsZW5ndGhcIlxuICAgICAgICAgICAgICBbcGFnZVNpemVdPVwicGFnZVNpemVcIlxuICAgICAgICAgICAgICBbcGFnZVNpemVPcHRpb25zXT1cInBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAgICAgICAgIChwYWdlKT1cInBhZ2VFdmVudCA9ICRldmVudFwiPlxuPC9tYXQtcGFnaW5hdG9yPlxuXG48ZGl2ICpuZ0lmPVwicGFnZUV2ZW50XCI+XG4gIDxoNT5QYWdlIENoYW5nZSBFdmVudCBQcm9wZXJ0aWVzPC9oNT5cbiAgPGRpdj5MaXN0IGxlbmd0aDoge3twYWdlRXZlbnQubGVuZ3RofX08L2Rpdj5cbiAgPGRpdj5QYWdlIHNpemU6IHt7cGFnZUV2ZW50LnBhZ2VTaXplfX08L2Rpdj5cbiAgPGRpdj5QYWdlIGluZGV4OiB7e3BhZ2VFdmVudC5wYWdlSW5kZXh9fTwvZGl2PlxuPC9kaXY+XG4iXX0=