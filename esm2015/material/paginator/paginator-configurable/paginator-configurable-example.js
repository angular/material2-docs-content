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
PaginatorConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PaginatorConfigurableExample, selectors: [["paginator-configurable-example"]], decls: 14, vars: 9, consts: [["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. 10,25,50", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]], template: function PaginatorConfigurableExample_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUNxQnhDLDJCQUNFO0lBQUEsMEJBQUk7SUFBQSw0Q0FBNEI7SUFBQSxpQkFBSztJQUNyQywyQkFBSztJQUFBLFlBQWlDO0lBQUEsaUJBQU07SUFDNUMsMkJBQUs7SUFBQSxZQUFpQztJQUFBLGlCQUFNO0lBQzVDLDJCQUFLO0lBQUEsWUFBbUM7SUFBQSxpQkFBTTtJQUNoRCxpQkFBTTs7O0lBSEMsZUFBaUM7SUFBakMsbUVBQWlDO0lBQ2pDLGVBQWlDO0lBQWpDLG1FQUFpQztJQUNqQyxlQUFtQztJQUFuQyxxRUFBbUM7OztBRHRCMUM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sNEJBQTRCO0lBTHpDO1FBTUUsc0JBQXNCO1FBQ3RCLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2Qsb0JBQWUsR0FBYSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBVTlDO0lBTEMsa0JBQWtCLENBQUMsdUJBQStCO1FBQ2hELElBQUksdUJBQXVCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1RTtJQUNILENBQUM7O3dHQWJVLDRCQUE0QjtpRUFBNUIsNEJBQTRCO1FDWHpDLHNDQUNFO1FBQUEsaUNBQVc7UUFBQSwyQkFBVztRQUFBLGlCQUFZO1FBQ2xDLGdDQUNGO1FBRGtCLHFKQUFvQjtRQUFwQyxpQkFDRjtRQUFBLGlCQUFpQjtRQUVqQixzQ0FDRTtRQUFBLGlDQUFXO1FBQUEseUJBQVM7UUFBQSxpQkFBWTtRQUNoQyxnQ0FDRjtRQURrQix1SkFBc0I7UUFBdEMsaUJBQ0Y7UUFBQSxpQkFBaUI7UUFDakIsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLGtDQUFpQjtRQUFBLGlCQUFZO1FBQ3hDLGlDQUVGO1FBRjhDLCtIQUFpQiw4QkFBMEIsSUFBQztRQUF4RixpQkFFRjtRQUFBLGlCQUFpQjtRQUVqQix5Q0FJZ0I7UUFERCwrSUFBMkI7UUFDMUMsaUJBQWdCO1FBRWhCLCtFQUNFOztRQXBCZ0IsZUFBb0I7UUFBcEIsb0NBQW9CO1FBS3BCLGVBQXNCO1FBQXRCLHNDQUFzQjtRQUl0QixlQUEyQjtRQUEzQiw2Q0FBMkIsOENBQUE7UUFJOUIsZUFBaUI7UUFBakIsbUNBQWlCLDBCQUFBLHdDQUFBO1FBTTNCLGVBQWlCO1FBQWpCLG9DQUFpQjs7a0REVlQsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFnZUV2ZW50fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuXG4vKipcbiAqIEB0aXRsZSBDb25maWd1cmFibGUgcGFnaW5hdG9yXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JDb25maWd1cmFibGVFeGFtcGxlIHtcbiAgLy8gTWF0UGFnaW5hdG9yIElucHV0c1xuICBsZW5ndGggPSAxMDA7XG4gIHBhZ2VTaXplID0gMTA7XG4gIHBhZ2VTaXplT3B0aW9uczogbnVtYmVyW10gPSBbNSwgMTAsIDI1LCAxMDBdO1xuXG4gIC8vIE1hdFBhZ2luYXRvciBPdXRwdXRcbiAgcGFnZUV2ZW50OiBQYWdlRXZlbnQ7XG5cbiAgc2V0UGFnZVNpemVPcHRpb25zKHNldFBhZ2VTaXplT3B0aW9uc0lucHV0OiBzdHJpbmcpIHtcbiAgICBpZiAoc2V0UGFnZVNpemVPcHRpb25zSW5wdXQpIHtcbiAgICAgIHRoaXMucGFnZVNpemVPcHRpb25zID0gc2V0UGFnZVNpemVPcHRpb25zSW5wdXQuc3BsaXQoJywnKS5tYXAoc3RyID0+ICtzdHIpO1xuICAgIH1cbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkxpc3QgbGVuZ3RoPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cImxlbmd0aFwiIHR5cGU9XCJudW1iZXJcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5QYWdlIHNpemU8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwicGFnZVNpemVcIiB0eXBlPVwibnVtYmVyXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlBhZ2Ugc2l6ZSBvcHRpb25zPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbmdNb2RlbF09XCJwYWdlU2l6ZU9wdGlvbnNcIiAobmdNb2RlbENoYW5nZSk9XCJzZXRQYWdlU2l6ZU9wdGlvbnMoJGV2ZW50KVwiXG4gICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3VwZGF0ZU9uOiAnYmx1cid9XCIgcGxhY2Vob2xkZXI9XCJFeC4gMTAsMjUsNTBcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtcGFnaW5hdG9yIFtsZW5ndGhdPVwibGVuZ3RoXCJcbiAgICAgICAgICAgICAgIFtwYWdlU2l6ZV09XCJwYWdlU2l6ZVwiXG4gICAgICAgICAgICAgICBbcGFnZVNpemVPcHRpb25zXT1cInBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAocGFnZSk9XCJwYWdlRXZlbnQgPSAkZXZlbnRcIj5cbjwvbWF0LXBhZ2luYXRvcj5cblxuPGRpdiAqbmdJZj1cInBhZ2VFdmVudFwiPlxuICA8aDU+UGFnZSBDaGFuZ2UgRXZlbnQgUHJvcGVydGllczwvaDU+XG4gIDxkaXY+TGlzdCBsZW5ndGg6IHt7cGFnZUV2ZW50Lmxlbmd0aH19PC9kaXY+XG4gIDxkaXY+UGFnZSBzaXplOiB7e3BhZ2VFdmVudC5wYWdlU2l6ZX19PC9kaXY+XG4gIDxkaXY+UGFnZSBpbmRleDoge3twYWdlRXZlbnQucGFnZUluZGV4fX08L2Rpdj5cbjwvZGl2PlxuIl19