/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/paginator/paginator-configurable/paginator-configurable-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/paginator";
import * as i5 from "@angular/common";
function PaginatorConfigurableExample_div_13_Template(rf, ctx) { if (rf & 1) {
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
const _c0 = function () { return { updateOn: "blur" }; };
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
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map((/**
             * @param {?} str
             * @return {?}
             */
            str => +str));
        }
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
/** @nocollapse */ PaginatorConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PaginatorConfigurableExample, selectors: [["paginator-configurable-example"]], decls: 14, vars: 9, consts: [["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. 10,25,50", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]], template: function PaginatorConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "List length");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 0);
        i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_3_listener($event) { return ctx.length = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-form-field");
        i0.ɵɵelementStart(5, "mat-label");
        i0.ɵɵtext(6, "Page size");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "input", 0);
        i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_7_listener($event) { return ctx.pageSize = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-form-field");
        i0.ɵɵelementStart(9, "mat-label");
        i0.ɵɵtext(10, "Page size options");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "input", 1);
        i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_11_listener($event) { return ctx.setPageSizeOptions($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-paginator", 2);
        i0.ɵɵlistener("page", function PaginatorConfigurableExample_Template_mat_paginator_page_12_listener($event) { return ctx.pageEvent = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, PaginatorConfigurableExample_div_13_Template, 9, 3, "div", 3);
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.length);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.pageSize);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.pageSizeOptions)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.pageEvent);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.MatPaginator, i5.NgIf], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PaginatorConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'paginator-configurable-example',
                templateUrl: 'paginator-configurable-example.html',
                styleUrls: ['paginator-configurable-example.css'],
            }]
    }], null, null); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ3FCeEMsMkJBQ0U7SUFBQSwwQkFBSTtJQUFBLDRDQUE0QjtJQUFBLGlCQUFLO0lBQ3JDLDJCQUFLO0lBQUEsWUFBaUM7SUFBQSxpQkFBTTtJQUM1QywyQkFBSztJQUFBLFlBQWlDO0lBQUEsaUJBQU07SUFDNUMsMkJBQUs7SUFBQSxZQUFtQztJQUFBLGlCQUFNO0lBQ2hELGlCQUFNOzs7SUFIQyxlQUFpQztJQUFqQyxtRUFBaUM7SUFDakMsZUFBaUM7SUFBakMsbUVBQWlDO0lBQ2pDLGVBQW1DO0lBQW5DLHFFQUFtQzs7Ozs7O0FEZDFDLE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7O1FBT0UsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxvQkFBZSxHQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FVOUM7Ozs7O0lBTEMsa0JBQWtCLENBQUMsdUJBQStCO1FBQ2hELElBQUksdUJBQXVCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQztTQUM1RTtJQUNILENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7OzJIQUNZLDRCQUE0QjtvRkFBNUIsNEJBQTRCO1FDWHpDLHNDQUNFO1FBQUEsaUNBQVc7UUFBQSwyQkFBVztRQUFBLGlCQUFZO1FBQ2xDLGdDQUNGO1FBRGtCLHFKQUFvQjtRQUFwQyxpQkFDRjtRQUFBLGlCQUFpQjtRQUVqQixzQ0FDRTtRQUFBLGlDQUFXO1FBQUEseUJBQVM7UUFBQSxpQkFBWTtRQUNoQyxnQ0FDRjtRQURrQix1SkFBc0I7UUFBdEMsaUJBQ0Y7UUFBQSxpQkFBaUI7UUFDakIsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLGtDQUFpQjtRQUFBLGlCQUFZO1FBQ3hDLGlDQUVGO1FBRjhDLCtIQUFpQiw4QkFBMEIsSUFBQztRQUF4RixpQkFFRjtRQUFBLGlCQUFpQjtRQUVqQix5Q0FJZ0I7UUFERCwrSUFBMkI7UUFDMUMsaUJBQWdCO1FBRWhCLCtFQUNFOztRQXBCZ0IsZUFBb0I7UUFBcEIsb0NBQW9CO1FBS3BCLGVBQXNCO1FBQXRCLHNDQUFzQjtRQUl0QixlQUEyQjtRQUEzQiw2Q0FBMkIsOENBQUE7UUFJOUIsZUFBaUI7UUFBakIsbUNBQWlCLDBCQUFBLHdDQUFBO1FBTTNCLGVBQWlCO1FBQWpCLG9DQUFpQjs7a0REVlQsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRDs7OztJQUdDLDhDQUFhOztJQUNiLGdEQUFjOztJQUNkLHVEQUE2Qzs7SUFHN0MsaURBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYWdlRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5cbi8qKlxuICogQHRpdGxlIENvbmZpZ3VyYWJsZSBwYWdpbmF0b3JcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckNvbmZpZ3VyYWJsZUV4YW1wbGUge1xuICAvLyBNYXRQYWdpbmF0b3IgSW5wdXRzXG4gIGxlbmd0aCA9IDEwMDtcbiAgcGFnZVNpemUgPSAxMDtcbiAgcGFnZVNpemVPcHRpb25zOiBudW1iZXJbXSA9IFs1LCAxMCwgMjUsIDEwMF07XG5cbiAgLy8gTWF0UGFnaW5hdG9yIE91dHB1dFxuICBwYWdlRXZlbnQ6IFBhZ2VFdmVudDtcblxuICBzZXRQYWdlU2l6ZU9wdGlvbnMoc2V0UGFnZVNpemVPcHRpb25zSW5wdXQ6IHN0cmluZykge1xuICAgIGlmIChzZXRQYWdlU2l6ZU9wdGlvbnNJbnB1dCkge1xuICAgICAgdGhpcy5wYWdlU2l6ZU9wdGlvbnMgPSBzZXRQYWdlU2l6ZU9wdGlvbnNJbnB1dC5zcGxpdCgnLCcpLm1hcChzdHIgPT4gK3N0cik7XG4gICAgfVxuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+TGlzdCBsZW5ndGg8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwibGVuZ3RoXCIgdHlwZT1cIm51bWJlclwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlBhZ2Ugc2l6ZTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJwYWdlU2l6ZVwiIHR5cGU9XCJudW1iZXJcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+UGFnZSBzaXplIG9wdGlvbnM8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFtuZ01vZGVsXT1cInBhZ2VTaXplT3B0aW9uc1wiIChuZ01vZGVsQ2hhbmdlKT1cInNldFBhZ2VTaXplT3B0aW9ucygkZXZlbnQpXCJcbiAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7dXBkYXRlT246ICdibHVyJ31cIiBwbGFjZWhvbGRlcj1cIkV4LiAxMCwyNSw1MFwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1wYWdpbmF0b3IgW2xlbmd0aF09XCJsZW5ndGhcIlxuICAgICAgICAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2VTaXplXCJcbiAgICAgICAgICAgICAgIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCJcbiAgICAgICAgICAgICAgIChwYWdlKT1cInBhZ2VFdmVudCA9ICRldmVudFwiPlxuPC9tYXQtcGFnaW5hdG9yPlxuXG48ZGl2ICpuZ0lmPVwicGFnZUV2ZW50XCI+XG4gIDxoNT5QYWdlIENoYW5nZSBFdmVudCBQcm9wZXJ0aWVzPC9oNT5cbiAgPGRpdj5MaXN0IGxlbmd0aDoge3twYWdlRXZlbnQubGVuZ3RofX08L2Rpdj5cbiAgPGRpdj5QYWdlIHNpemU6IHt7cGFnZUV2ZW50LnBhZ2VTaXplfX08L2Rpdj5cbiAgPGRpdj5QYWdlIGluZGV4OiB7e3BhZ2VFdmVudC5wYWdlSW5kZXh9fTwvZGl2PlxuPC9kaXY+XG4iXX0=