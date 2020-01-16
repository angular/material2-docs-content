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
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("List length: ", ctx_r0.pageEvent.length, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Page size: ", ctx_r0.pageEvent.pageSize, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Page index: ", ctx_r0.pageEvent.pageIndex, "");
} }
/**
 * @title Configurable paginator
 */
var PaginatorConfigurableExample = /** @class */ (function () {
    function PaginatorConfigurableExample() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    PaginatorConfigurableExample.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    PaginatorConfigurableExample.ɵfac = function PaginatorConfigurableExample_Factory(t) { return new (t || PaginatorConfigurableExample)(); };
    PaginatorConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PaginatorConfigurableExample, selectors: [["paginator-configurable-example"]], decls: 11, vars: 7, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], [3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]], template: function PaginatorConfigurableExample_Template(rf, ctx) { if (rf & 1) {
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
    return PaginatorConfigurableExample;
}());
export { PaginatorConfigurableExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PaginatorConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'paginator-configurable-example',
                templateUrl: 'paginator-configurable-example.html',
                styleUrls: ['paginator-configurable-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUNzQnhDLDJCQUNFO0lBQUEsMEJBQUk7SUFBQSw0Q0FBNEI7SUFBQSxpQkFBSztJQUNyQywyQkFBSztJQUFBLFlBQWlDO0lBQUEsaUJBQU07SUFDNUMsMkJBQUs7SUFBQSxZQUFpQztJQUFBLGlCQUFNO0lBQzVDLDJCQUFLO0lBQUEsWUFBbUM7SUFBQSxpQkFBTTtJQUNoRCxpQkFBTTs7O0lBSEMsZUFBaUM7SUFBakMsbUVBQWlDO0lBQ2pDLGVBQWlDO0lBQWpDLG1FQUFpQztJQUNqQyxlQUFtQztJQUFuQyxxRUFBbUM7O0FEdkIxQzs7R0FFRztBQUNIO0lBQUE7UUFNRSxzQkFBc0I7UUFDdEIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxvQkFBZSxHQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FROUM7SUFIQyx5REFBa0IsR0FBbEIsVUFBbUIsdUJBQStCO1FBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUcsdUJBQXVCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsR0FBRyxFQUFKLENBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7NEdBWFUsNEJBQTRCO3FFQUE1Qiw0QkFBNEI7WUNYekMsc0NBQ0U7WUFBQSw4QkFDQTtZQUFBLGdDQUNGO1lBRGtCLHFKQUFvQjtZQUFwQyxpQkFDRjtZQUFBLGlCQUFpQjtZQUVqQixzQ0FDRTtZQUFBLDRCQUNBO1lBQUEsZ0NBQ0Y7WUFEa0IsdUpBQXNCO1lBQXRDLGlCQUNGO1lBQUEsaUJBQWlCO1lBQ2pCLHNDQUNFO1lBQUEsb0NBQ0E7WUFBQSxnQ0FHRjtZQURTLDhIQUFpQiw4QkFBMEIsSUFBQztZQUZuRCxpQkFHRjtZQUFBLGlCQUFpQjtZQUVqQix3Q0FJZ0I7WUFERiw4SUFBMkI7WUFDekMsaUJBQWdCO1lBRWhCLCtFQUNFOztZQXJCZ0IsZUFBb0I7WUFBcEIsb0NBQW9CO1lBS3BCLGVBQXNCO1lBQXRCLHNDQUFzQjtZQUsvQixlQUEyQjtZQUEzQiw2Q0FBMkI7WUFJckIsZUFBaUI7WUFBakIsbUNBQWlCLDBCQUFBLHdDQUFBO1lBTTNCLGVBQWlCO1lBQWpCLG9DQUFpQjs7dUNEdEJ0QjtDQXVCQyxBQWpCRCxJQWlCQztTQVpZLDRCQUE0QjtrREFBNUIsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFnZUV2ZW50fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuXG4vKipcbiAqIEB0aXRsZSBDb25maWd1cmFibGUgcGFnaW5hdG9yXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JDb25maWd1cmFibGVFeGFtcGxlIHtcbiAgLy8gTWF0UGFnaW5hdG9yIElucHV0c1xuICBsZW5ndGggPSAxMDA7XG4gIHBhZ2VTaXplID0gMTA7XG4gIHBhZ2VTaXplT3B0aW9uczogbnVtYmVyW10gPSBbNSwgMTAsIDI1LCAxMDBdO1xuXG4gIC8vIE1hdFBhZ2luYXRvciBPdXRwdXRcbiAgcGFnZUV2ZW50OiBQYWdlRXZlbnQ7XG5cbiAgc2V0UGFnZVNpemVPcHRpb25zKHNldFBhZ2VTaXplT3B0aW9uc0lucHV0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhZ2VTaXplT3B0aW9ucyA9IHNldFBhZ2VTaXplT3B0aW9uc0lucHV0LnNwbGl0KCcsJykubWFwKHN0ciA9PiArc3RyKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICBMaXN0IGxlbmd0aDpcbiAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwibGVuZ3RoXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIFBhZ2Ugc2l6ZTpcbiAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwicGFnZVNpemVcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIFBhZ2Ugc2l6ZSBvcHRpb25zOlxuICA8aW5wdXQgbWF0SW5wdXRcbiAgICAgICAgIFtuZ01vZGVsXT1cInBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRQYWdlU2l6ZU9wdGlvbnMoJGV2ZW50KVwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1wYWdpbmF0b3IgW2xlbmd0aF09XCJsZW5ndGhcIlxuICAgICAgICAgICAgICBbcGFnZVNpemVdPVwicGFnZVNpemVcIlxuICAgICAgICAgICAgICBbcGFnZVNpemVPcHRpb25zXT1cInBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAgICAgICAgIChwYWdlKT1cInBhZ2VFdmVudCA9ICRldmVudFwiPlxuPC9tYXQtcGFnaW5hdG9yPlxuXG48ZGl2ICpuZ0lmPVwicGFnZUV2ZW50XCI+XG4gIDxoNT5QYWdlIENoYW5nZSBFdmVudCBQcm9wZXJ0aWVzPC9oNT5cbiAgPGRpdj5MaXN0IGxlbmd0aDoge3twYWdlRXZlbnQubGVuZ3RofX08L2Rpdj5cbiAgPGRpdj5QYWdlIHNpemU6IHt7cGFnZUV2ZW50LnBhZ2VTaXplfX08L2Rpdj5cbiAgPGRpdj5QYWdlIGluZGV4OiB7e3BhZ2VFdmVudC5wYWdlSW5kZXh9fTwvZGl2PlxuPC9kaXY+XG4iXX0=