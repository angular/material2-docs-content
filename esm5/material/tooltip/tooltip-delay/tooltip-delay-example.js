import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/tooltip";
/**
 * @title Tooltip with a show and hide delay
 */
var TooltipDelayExample = /** @class */ (function () {
    function TooltipDelayExample() {
        this.showDelay = new FormControl(1000);
        this.hideDelay = new FormControl(2000);
    }
    TooltipDelayExample.ɵfac = function TooltipDelayExample_Factory(t) { return new (t || TooltipDelayExample)(); };
    TooltipDelayExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipDelayExample, selectors: [["tooltip-delay-example"]], decls: 6, vars: 4, consts: [[1, "example-user-input"], ["matInput", "", "placeholder", "Show delay (milliseconds)", "type", "number", "aria-label", "Adds a delay between hovering over the button and displaying the tooltip", 3, "formControl"], ["matInput", "", "placeholder", "Hide delay (milliseconds)", "type", "number", "aria-label", "Adds a delay between hovering away from the button and hiding the tooltip", 3, "formControl"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip with a customized delay in showing and hiding", 3, "matTooltipShowDelay", "matTooltipHideDelay"]], template: function TooltipDelayExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelement(1, "input", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-form-field", 0);
            i0.ɵɵelement(3, "input", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵtext(5, " Action\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formControl", ctx.showDelay);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formControl", ctx.hideDelay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matTooltipShowDelay", ctx.showDelay.value)("matTooltipHideDelay", ctx.hideDelay.value);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i4.MatButton, i5.MatTooltip], styles: [".example-user-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 150px;\n}"] });
    return TooltipDelayExample;
}());
export { TooltipDelayExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipDelayExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-delay-example',
                templateUrl: 'tooltip-delay-example.html',
                styleUrls: ['tooltip-delay-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kZWxheS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLWRlbGF5L3Rvb2x0aXAtZGVsYXktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1kZWxheS90b29sdGlwLWRlbGF5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUUzQzs7R0FFRztBQUNIO0lBQUE7UUFNRSxjQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DOzBGQUhZLG1CQUFtQjs0REFBbkIsbUJBQW1CO1lDWGhDLHlDQUNFO1lBQUEsMkJBSUY7WUFBQSxpQkFBaUI7WUFFakIseUNBQ0U7WUFBQSwyQkFJRjtZQUFBLGlCQUFpQjtZQUVqQixpQ0FLRTtZQUFBLHlCQUNGO1lBQUEsaUJBQVM7O1lBaEJBLGVBQXlCO1lBQXpCLDJDQUF5QjtZQU96QixlQUF5QjtZQUF6QiwyQ0FBeUI7WUFLMUIsZUFBdUM7WUFBdkMseURBQXVDLDRDQUFBOzs4QkRoQi9DO0NBY0MsQUFSRCxJQVFDO1NBSFksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHdpdGggYSBzaG93IGFuZCBoaWRlIGRlbGF5XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtZGVsYXktZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1kZWxheS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1kZWxheS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGVsYXlFeGFtcGxlIHtcbiAgc2hvd0RlbGF5ID0gbmV3IEZvcm1Db250cm9sKDEwMDApO1xuICBoaWRlRGVsYXkgPSBuZXcgRm9ybUNvbnRyb2woMjAwMCk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLXVzZXItaW5wdXRcIj5cbiAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2hvdyBkZWxheSAobWlsbGlzZWNvbmRzKVwiXG4gICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGRzIGEgZGVsYXkgYmV0d2VlbiBob3ZlcmluZyBvdmVyIHRoZSBidXR0b24gYW5kIGRpc3BsYXlpbmcgdGhlIHRvb2x0aXBcIlxuICAgICAgICAgW2Zvcm1Db250cm9sXT1cInNob3dEZWxheVwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS11c2VyLWlucHV0XCI+XG4gIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkhpZGUgZGVsYXkgKG1pbGxpc2Vjb25kcylcIlxuICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICBhcmlhLWxhYmVsPVwiQWRkcyBhIGRlbGF5IGJldHdlZW4gaG92ZXJpbmcgYXdheSBmcm9tIHRoZSBidXR0b24gYW5kIGhpZGluZyB0aGUgdG9vbHRpcFwiXG4gICAgICAgICBbZm9ybUNvbnRyb2xdPVwiaGlkZURlbGF5XCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgIG1hdFRvb2x0aXA9XCJJbmZvIGFib3V0IHRoZSBhY3Rpb25cIlxuICAgICAgICBbbWF0VG9vbHRpcFNob3dEZWxheV09XCJzaG93RGVsYXkudmFsdWVcIlxuICAgICAgICBbbWF0VG9vbHRpcEhpZGVEZWxheV09XCJoaWRlRGVsYXkudmFsdWVcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiQnV0dG9uIHRoYXQgZGlzcGxheXMgYSB0b29sdGlwIHdpdGggYSBjdXN0b21pemVkIGRlbGF5IGluIHNob3dpbmcgYW5kIGhpZGluZ1wiPlxuICBBY3Rpb25cbjwvYnV0dG9uPlxuIl19