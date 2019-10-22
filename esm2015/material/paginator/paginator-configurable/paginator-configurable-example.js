/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @nocollapse */ PaginatorConfigurableExample.ngFactoryDef = function PaginatorConfigurableExample_Factory(t) { return new (t || PaginatorConfigurableExample)(); };
/** @nocollapse */ PaginatorConfigurableExample.ngComponentDef = i0.ɵɵdefineComponent({ type: PaginatorConfigurableExample, selectors: [["paginator-configurable-example"]], decls: 11, vars: 7, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], [3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]], template: function PaginatorConfigurableExample_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItY29uZmlndXJhYmxlL3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0b3IvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS9wYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUNzQnhDLDJCQUNFO0lBQUEsMEJBQUk7SUFBQSw0Q0FBNEI7SUFBQSxpQkFBSztJQUNyQywyQkFBSztJQUFBLFlBQWlDO0lBQUEsaUJBQU07SUFDNUMsMkJBQUs7SUFBQSxZQUFpQztJQUFBLGlCQUFNO0lBQzVDLDJCQUFLO0lBQUEsWUFBbUM7SUFBQSxpQkFBTTtJQUNoRCxpQkFBTTs7O0lBSEMsZUFBaUM7SUFBakMsbUVBQWlDO0lBQ2pDLGVBQWlDO0lBQWpDLG1FQUFpQztJQUNqQyxlQUFtQztJQUFuQyxxRUFBbUM7Ozs7O0FEZjFDLE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7O1FBT0UsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxvQkFBZSxHQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FROUM7Ozs7O0lBSEMsa0JBQWtCLENBQUMsdUJBQStCO1FBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUcsdUJBQXVCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUM7SUFDN0UsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRDs7Z0hBQ1ksNEJBQTRCOzJFQUE1Qiw0QkFBNEI7UUNYekMsc0NBQ0U7UUFBQSw4QkFDQTtRQUFBLGdDQUNGO1FBRGtCLHFKQUFvQjtRQUFwQyxpQkFDRjtRQUFBLGlCQUFpQjtRQUVqQixzQ0FDRTtRQUFBLDRCQUNBO1FBQUEsZ0NBQ0Y7UUFEa0IsdUpBQXNCO1FBQXRDLGlCQUNGO1FBQUEsaUJBQWlCO1FBQ2pCLHNDQUNFO1FBQUEsb0NBQ0E7UUFBQSxnQ0FHRjtRQURTLDhIQUFpQiw4QkFBMEIsSUFBQztRQUZuRCxpQkFHRjtRQUFBLGlCQUFpQjtRQUVqQix3Q0FJZ0I7UUFERiw4SUFBMkI7UUFDekMsaUJBQWdCO1FBRWhCLCtFQUNFOztRQXJCZ0IsZUFBb0I7UUFBcEIsb0NBQW9CO1FBS3BCLGVBQXNCO1FBQXRCLHNDQUFzQjtRQUsvQixlQUEyQjtRQUEzQiw2Q0FBMkI7UUFJckIsZUFBaUI7UUFBakIsbUNBQWlCLDBCQUFBLHdDQUFBO1FBTTNCLGVBQWlCO1FBQWpCLG9DQUFpQjs7bUNEWFQsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRDs7OztJQUdDLDhDQUFhOztJQUNiLGdEQUFjOztJQUNkLHVEQUE2Qzs7SUFHN0MsaURBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYWdlRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5cbi8qKlxuICogQHRpdGxlIENvbmZpZ3VyYWJsZSBwYWdpbmF0b3JcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckNvbmZpZ3VyYWJsZUV4YW1wbGUge1xuICAvLyBNYXRQYWdpbmF0b3IgSW5wdXRzXG4gIGxlbmd0aCA9IDEwMDtcbiAgcGFnZVNpemUgPSAxMDtcbiAgcGFnZVNpemVPcHRpb25zOiBudW1iZXJbXSA9IFs1LCAxMCwgMjUsIDEwMF07XG5cbiAgLy8gTWF0UGFnaW5hdG9yIE91dHB1dFxuICBwYWdlRXZlbnQ6IFBhZ2VFdmVudDtcblxuICBzZXRQYWdlU2l6ZU9wdGlvbnMoc2V0UGFnZVNpemVPcHRpb25zSW5wdXQ6IHN0cmluZykge1xuICAgIHRoaXMucGFnZVNpemVPcHRpb25zID0gc2V0UGFnZVNpemVPcHRpb25zSW5wdXQuc3BsaXQoJywnKS5tYXAoc3RyID0+ICtzdHIpO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIExpc3QgbGVuZ3RoOlxuICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJsZW5ndGhcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZD5cbiAgUGFnZSBzaXplOlxuICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJwYWdlU2l6ZVwiPlxuPC9tYXQtZm9ybS1maWVsZD5cbjxtYXQtZm9ybS1maWVsZD5cbiAgUGFnZSBzaXplIG9wdGlvbnM6XG4gIDxpbnB1dCBtYXRJbnB1dFxuICAgICAgICAgW25nTW9kZWxdPVwicGFnZVNpemVPcHRpb25zXCJcbiAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFBhZ2VTaXplT3B0aW9ucygkZXZlbnQpXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LXBhZ2luYXRvciBbbGVuZ3RoXT1cImxlbmd0aFwiXG4gICAgICAgICAgICAgIFtwYWdlU2l6ZV09XCJwYWdlU2l6ZVwiXG4gICAgICAgICAgICAgIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCJcbiAgICAgICAgICAgICAgKHBhZ2UpPVwicGFnZUV2ZW50ID0gJGV2ZW50XCI+XG48L21hdC1wYWdpbmF0b3I+XG5cbjxkaXYgKm5nSWY9XCJwYWdlRXZlbnRcIj5cbiAgPGg1PlBhZ2UgQ2hhbmdlIEV2ZW50IFByb3BlcnRpZXM8L2g1PlxuICA8ZGl2Pkxpc3QgbGVuZ3RoOiB7e3BhZ2VFdmVudC5sZW5ndGh9fTwvZGl2PlxuICA8ZGl2PlBhZ2Ugc2l6ZToge3twYWdlRXZlbnQucGFnZVNpemV9fTwvZGl2PlxuICA8ZGl2PlBhZ2UgaW5kZXg6IHt7cGFnZUV2ZW50LnBhZ2VJbmRleH19PC9kaXY+XG48L2Rpdj5cbiJdfQ==