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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ3NCeEMsMkJBQ0U7SUFBQSwwQkFBSTtJQUFBLDRDQUE0QjtJQUFBLGlCQUFLO0lBQ3JDLDJCQUFLO0lBQUEsWUFBaUM7SUFBQSxpQkFBTTtJQUM1QywyQkFBSztJQUFBLFlBQWlDO0lBQUEsaUJBQU07SUFDNUMsMkJBQUs7SUFBQSxZQUFtQztJQUFBLGlCQUFNO0lBQ2hELGlCQUFNOzs7SUFIQyxlQUFpQztJQUFqQyxtRUFBaUM7SUFDakMsZUFBaUM7SUFBakMsbUVBQWlDO0lBQ2pDLGVBQW1DO0lBQW5DLHFFQUFtQzs7Ozs7QURmMUMsTUFBTSxPQUFPLDRCQUE0QjtJQUx6Qzs7UUFPRSxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLG9CQUFlLEdBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztLQVE5Qzs7Ozs7SUFIQyxrQkFBa0IsQ0FBQyx1QkFBK0I7UUFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQztJQUM3RSxDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEOzt3R0FDWSw0QkFBNEI7aUVBQTVCLDRCQUE0QjtRQ1h6QyxzQ0FDRTtRQUFBLDhCQUNBO1FBQUEsZ0NBQ0Y7UUFEa0IscUpBQW9CO1FBQXBDLGlCQUNGO1FBQUEsaUJBQWlCO1FBRWpCLHNDQUNFO1FBQUEsNEJBQ0E7UUFBQSxnQ0FDRjtRQURrQix1SkFBc0I7UUFBdEMsaUJBQ0Y7UUFBQSxpQkFBaUI7UUFDakIsc0NBQ0U7UUFBQSxvQ0FDQTtRQUFBLGdDQUdGO1FBRFMsOEhBQWlCLDhCQUEwQixJQUFDO1FBRm5ELGlCQUdGO1FBQUEsaUJBQWlCO1FBRWpCLHdDQUlnQjtRQURGLDhJQUEyQjtRQUN6QyxpQkFBZ0I7UUFFaEIsK0VBQ0U7O1FBckJnQixlQUFvQjtRQUFwQixvQ0FBb0I7UUFLcEIsZUFBc0I7UUFBdEIsc0NBQXNCO1FBSy9CLGVBQTJCO1FBQTNCLDZDQUEyQjtRQUlyQixlQUFpQjtRQUFqQixtQ0FBaUIsMEJBQUEsd0NBQUE7UUFNM0IsZUFBaUI7UUFBakIsb0NBQWlCOztrRERYVCw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEOzs7O0lBR0MsOENBQWE7O0lBQ2IsZ0RBQWM7O0lBQ2QsdURBQTZDOztJQUc3QyxpREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2VFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcblxuLyoqXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIHBhZ2luYXRvclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZSB7XG4gIC8vIE1hdFBhZ2luYXRvciBJbnB1dHNcbiAgbGVuZ3RoID0gMTAwO1xuICBwYWdlU2l6ZSA9IDEwO1xuICBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdID0gWzUsIDEwLCAyNSwgMTAwXTtcblxuICAvLyBNYXRQYWdpbmF0b3IgT3V0cHV0XG4gIHBhZ2VFdmVudDogUGFnZUV2ZW50O1xuXG4gIHNldFBhZ2VTaXplT3B0aW9ucyhzZXRQYWdlU2l6ZU9wdGlvbnNJbnB1dDogc3RyaW5nKSB7XG4gICAgdGhpcy5wYWdlU2l6ZU9wdGlvbnMgPSBzZXRQYWdlU2l6ZU9wdGlvbnNJbnB1dC5zcGxpdCgnLCcpLm1hcChzdHIgPT4gK3N0cik7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgTGlzdCBsZW5ndGg6XG4gIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cImxlbmd0aFwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICBQYWdlIHNpemU6XG4gIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInBhZ2VTaXplXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuPG1hdC1mb3JtLWZpZWxkPlxuICBQYWdlIHNpemUgb3B0aW9uczpcbiAgPGlucHV0IG1hdElucHV0XG4gICAgICAgICBbbmdNb2RlbF09XCJwYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0UGFnZVNpemVPcHRpb25zKCRldmVudClcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtcGFnaW5hdG9yIFtsZW5ndGhdPVwibGVuZ3RoXCJcbiAgICAgICAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2VTaXplXCJcbiAgICAgICAgICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAocGFnZSk9XCJwYWdlRXZlbnQgPSAkZXZlbnRcIj5cbjwvbWF0LXBhZ2luYXRvcj5cblxuPGRpdiAqbmdJZj1cInBhZ2VFdmVudFwiPlxuICA8aDU+UGFnZSBDaGFuZ2UgRXZlbnQgUHJvcGVydGllczwvaDU+XG4gIDxkaXY+TGlzdCBsZW5ndGg6IHt7cGFnZUV2ZW50Lmxlbmd0aH19PC9kaXY+XG4gIDxkaXY+UGFnZSBzaXplOiB7e3BhZ2VFdmVudC5wYWdlU2l6ZX19PC9kaXY+XG4gIDxkaXY+UGFnZSBpbmRleDoge3twYWdlRXZlbnQucGFnZUluZGV4fX08L2Rpdj5cbjwvZGl2PlxuIl19