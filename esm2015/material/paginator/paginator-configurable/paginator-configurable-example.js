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
 * @title Configurable paginator
 */
export class PaginatorConfigurableExample {
    constructor() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
    }
}
PaginatorConfigurableExample.ɵfac = function PaginatorConfigurableExample_Factory(t) { return new (t || PaginatorConfigurableExample)(); };
PaginatorConfigurableExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginatorConfigurableExample, selectors: [["paginator-configurable-example"]], decls: 14, vars: 9, consts: [["appearance", "fill"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. 10,25,50", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["aria-label", "Select page", 3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]], template: function PaginatorConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "List length");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 1);
        i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_3_listener($event) { return ctx.length = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-form-field", 0);
        i0.ɵɵelementStart(5, "mat-label");
        i0.ɵɵtext(6, "Page size");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "input", 1);
        i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_7_listener($event) { return ctx.pageSize = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-form-field", 0);
        i0.ɵɵelementStart(9, "mat-label");
        i0.ɵɵtext(10, "Page size options");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "input", 2);
        i0.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_11_listener($event) { return ctx.setPageSizeOptions($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-paginator", 3);
        i0.ɵɵlistener("page", function PaginatorConfigurableExample_Template_mat_paginator_page_12_listener($event) { return ctx.pageEvent = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, PaginatorConfigurableExample_div_13_Template, 9, 3, "div", 4);
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginatorConfigurableExample, [{
        type: Component,
        args: [{ selector: 'paginator-configurable-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>List length</mat-label>\n  <input matInput [(ngModel)]=\"length\" type=\"number\">\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Page size</mat-label>\n  <input matInput [(ngModel)]=\"pageSize\" type=\"number\">\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Page size options</mat-label>\n  <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\n         [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\n</mat-form-field>\n\n<mat-paginator [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [pageSizeOptions]=\"pageSizeOptions\"\n               (page)=\"pageEvent = $event\"\n               aria-label=\"Select page\">\n</mat-paginator>\n\n<div *ngIf=\"pageEvent\">\n  <h5>Page Change Event Properties</h5>\n  <div>List length: {{pageEvent.length}}</div>\n  <div>Page size: {{pageEvent.pageSize}}</div>\n  <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>\n", styles: [".mat-form-field {\n  margin-right: 12px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUNzQnhDLDJCQUF1QjtJQUNyQiwwQkFBSTtJQUFBLDRDQUE0QjtJQUFBLGlCQUFLO0lBQ3JDLDJCQUFLO0lBQUEsWUFBaUM7SUFBQSxpQkFBTTtJQUM1QywyQkFBSztJQUFBLFlBQWlDO0lBQUEsaUJBQU07SUFDNUMsMkJBQUs7SUFBQSxZQUFtQztJQUFBLGlCQUFNO0lBQ2hELGlCQUFNOzs7SUFIQyxlQUFpQztJQUFqQyxtRUFBaUM7SUFDakMsZUFBaUM7SUFBakMsbUVBQWlDO0lBQ2pDLGVBQW1DO0lBQW5DLHFFQUFtQzs7O0FEdkIxQzs7R0FFRztBQU1ILE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7UUFNRSxzQkFBc0I7UUFDdEIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxvQkFBZSxHQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FVOUM7SUFMQyxrQkFBa0IsQ0FBQyx1QkFBK0I7UUFDaEQsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQzs7d0dBYlUsNEJBQTRCOytFQUE1Qiw0QkFBNEI7UUNYekMseUNBQWtDO1FBQ2hDLGlDQUFXO1FBQUEsMkJBQVc7UUFBQSxpQkFBWTtRQUNsQyxnQ0FBbUQ7UUFBbkMscUpBQW9CO1FBQXBDLGlCQUFtRDtRQUNyRCxpQkFBaUI7UUFFakIseUNBQWtDO1FBQ2hDLGlDQUFXO1FBQUEseUJBQVM7UUFBQSxpQkFBWTtRQUNoQyxnQ0FBcUQ7UUFBckMsdUpBQXNCO1FBQXRDLGlCQUFxRDtRQUN2RCxpQkFBaUI7UUFDakIseUNBQWtDO1FBQ2hDLGlDQUFXO1FBQUEsa0NBQWlCO1FBQUEsaUJBQVk7UUFDeEMsaUNBQ3dFO1FBRDVCLCtIQUFpQiw4QkFBMEIsSUFBQztRQUF4RixpQkFDd0U7UUFDMUUsaUJBQWlCO1FBRWpCLHlDQUl3QztRQUR6QiwrSUFBMkI7UUFFMUMsaUJBQWdCO1FBRWhCLCtFQUtNOztRQXpCWSxlQUFvQjtRQUFwQixvQ0FBb0I7UUFLcEIsZUFBc0I7UUFBdEIsc0NBQXNCO1FBSXRCLGVBQTJCO1FBQTNCLDZDQUEyQiw4Q0FBQTtRQUk5QixlQUFpQjtRQUFqQixtQ0FBaUIsMEJBQUEsd0NBQUE7UUFPMUIsZUFBZTtRQUFmLG9DQUFlOzt1RkRYUiw0QkFBNEI7Y0FMeEMsU0FBUzsyQkFDRSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2VFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcblxuLyoqXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIHBhZ2luYXRvclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZSB7XG4gIC8vIE1hdFBhZ2luYXRvciBJbnB1dHNcbiAgbGVuZ3RoID0gMTAwO1xuICBwYWdlU2l6ZSA9IDEwO1xuICBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdID0gWzUsIDEwLCAyNSwgMTAwXTtcblxuICAvLyBNYXRQYWdpbmF0b3IgT3V0cHV0XG4gIHBhZ2VFdmVudDogUGFnZUV2ZW50O1xuXG4gIHNldFBhZ2VTaXplT3B0aW9ucyhzZXRQYWdlU2l6ZU9wdGlvbnNJbnB1dDogc3RyaW5nKSB7XG4gICAgaWYgKHNldFBhZ2VTaXplT3B0aW9uc0lucHV0KSB7XG4gICAgICB0aGlzLnBhZ2VTaXplT3B0aW9ucyA9IHNldFBhZ2VTaXplT3B0aW9uc0lucHV0LnNwbGl0KCcsJykubWFwKHN0ciA9PiArc3RyKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkxpc3QgbGVuZ3RoPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cImxlbmd0aFwiIHR5cGU9XCJudW1iZXJcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlBhZ2Ugc2l6ZTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJwYWdlU2l6ZVwiIHR5cGU9XCJudW1iZXJcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5QYWdlIHNpemUgb3B0aW9uczwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW25nTW9kZWxdPVwicGFnZVNpemVPcHRpb25zXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2V0UGFnZVNpemVPcHRpb25zKCRldmVudClcIlxuICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInt1cGRhdGVPbjogJ2JsdXInfVwiIHBsYWNlaG9sZGVyPVwiRXguIDEwLDI1LDUwXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LXBhZ2luYXRvciBbbGVuZ3RoXT1cImxlbmd0aFwiXG4gICAgICAgICAgICAgICBbcGFnZVNpemVdPVwicGFnZVNpemVcIlxuICAgICAgICAgICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgKHBhZ2UpPVwicGFnZUV2ZW50ID0gJGV2ZW50XCJcbiAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWxlY3QgcGFnZVwiPlxuPC9tYXQtcGFnaW5hdG9yPlxuXG48ZGl2ICpuZ0lmPVwicGFnZUV2ZW50XCI+XG4gIDxoNT5QYWdlIENoYW5nZSBFdmVudCBQcm9wZXJ0aWVzPC9oNT5cbiAgPGRpdj5MaXN0IGxlbmd0aDoge3twYWdlRXZlbnQubGVuZ3RofX08L2Rpdj5cbiAgPGRpdj5QYWdlIHNpemU6IHt7cGFnZUV2ZW50LnBhZ2VTaXplfX08L2Rpdj5cbiAgPGRpdj5QYWdlIGluZGV4OiB7e3BhZ2VFdmVudC5wYWdlSW5kZXh9fTwvZGl2PlxuPC9kaXY+XG4iXX0=