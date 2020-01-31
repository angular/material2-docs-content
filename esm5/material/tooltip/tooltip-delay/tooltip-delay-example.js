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
    TooltipDelayExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-delay-example',
                    templateUrl: 'tooltip-delay-example.html',
                    styleUrls: ['tooltip-delay-example.css'],
                },] },
    ];
    TooltipDelayExample.ɵfac = function TooltipDelayExample_Factory(t) { return new (t || TooltipDelayExample)(); };
    TooltipDelayExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipDelayExample, selectors: [["tooltip-delay-example"]], decls: 14, vars: 4, consts: [[1, "example-user-input"], ["matInput", "", "type", "number", "aria-label", "Adds a delay between hovering over the button and displaying the tooltip", 3, "formControl"], ["matInput", "", "type", "number", "aria-label", "Adds a delay between hovering away from the button and hiding the tooltip", 3, "formControl"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip with a customized delay in showing and hiding", 3, "matTooltipShowDelay", "matTooltipHideDelay"]], template: function TooltipDelayExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Show delay");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 1);
            i0.ɵɵelementStart(4, "mat-hint");
            i0.ɵɵtext(5, "milliseconds");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-form-field", 0);
            i0.ɵɵelementStart(7, "mat-label");
            i0.ɵɵtext(8, "Hide delay");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "input", 2);
            i0.ɵɵelementStart(10, "mat-hint");
            i0.ɵɵtext(11, "milliseconds");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 3);
            i0.ɵɵtext(13, " Action\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formControl", ctx.showDelay);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("formControl", ctx.hideDelay);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matTooltipShowDelay", ctx.showDelay.value)("matTooltipHideDelay", ctx.hideDelay.value);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i1.MatHint, i4.MatButton, i5.MatTooltip], styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kZWxheS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLWRlbGF5L3Rvb2x0aXAtZGVsYXktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1kZWxheS90b29sdGlwLWRlbGF5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUUzQzs7R0FFRztBQUNIO0lBQUE7UUFNRSxjQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsV0FBVyxFQUFFLDRCQUE0QjtvQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7aUJBQ3pDOzswRkFDWSxtQkFBbUI7NERBQW5CLG1CQUFtQjtZQ1hoQyx5Q0FDRTtZQUFBLGlDQUFXO1lBQUEsMEJBQVU7WUFBQSxpQkFBWTtZQUNqQywyQkFFQTtZQUFBLGdDQUFVO1lBQUEsNEJBQVk7WUFBQSxpQkFBVztZQUNuQyxpQkFBaUI7WUFFakIseUNBQ0U7WUFBQSxpQ0FBVztZQUFBLDBCQUFVO1lBQUEsaUJBQVk7WUFDakMsMkJBRUE7WUFBQSxpQ0FBVTtZQUFBLDZCQUFZO1lBQUEsaUJBQVc7WUFDbkMsaUJBQWlCO1lBRWpCLGtDQUlFO1lBQUEsMEJBQ0Y7WUFBQSxpQkFBUzs7WUFqQnVCLGVBQXlCO1lBQXpCLDJDQUF5QjtZQU96QixlQUF5QjtZQUF6QiwyQ0FBeUI7WUFNakQsZUFBdUM7WUFBdkMseURBQXVDLDRDQUFBOzs4QkRmL0M7Q0FjQyxBQVJELElBUUM7U0FIWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgd2l0aCBhIHNob3cgYW5kIGhpZGUgZGVsYXlcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1kZWxheS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLWRlbGF5LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLWRlbGF5LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEZWxheUV4YW1wbGUge1xuICBzaG93RGVsYXkgPSBuZXcgRm9ybUNvbnRyb2woMTAwMCk7XG4gIGhpZGVEZWxheSA9IG5ldyBGb3JtQ29udHJvbCgyMDAwKTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtdXNlci1pbnB1dFwiPlxuICA8bWF0LWxhYmVsPlNob3cgZGVsYXk8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbZm9ybUNvbnRyb2xdPVwic2hvd0RlbGF5XCJcbiAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGRzIGEgZGVsYXkgYmV0d2VlbiBob3ZlcmluZyBvdmVyIHRoZSBidXR0b24gYW5kIGRpc3BsYXlpbmcgdGhlIHRvb2x0aXBcIj5cbiAgPG1hdC1oaW50Pm1pbGxpc2Vjb25kczwvbWF0LWhpbnQ+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLXVzZXItaW5wdXRcIj5cbiAgPG1hdC1sYWJlbD5IaWRlIGRlbGF5PC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgW2Zvcm1Db250cm9sXT1cImhpZGVEZWxheVwiXG4gICAgICAgICBhcmlhLWxhYmVsPVwiQWRkcyBhIGRlbGF5IGJldHdlZW4gaG92ZXJpbmcgYXdheSBmcm9tIHRoZSBidXR0b24gYW5kIGhpZGluZyB0aGUgdG9vbHRpcFwiPlxuICA8bWF0LWhpbnQ+bWlsbGlzZWNvbmRzPC9tYXQtaGludD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gbWF0VG9vbHRpcD1cIkluZm8gYWJvdXQgdGhlIGFjdGlvblwiXG4gICAgICAgIFttYXRUb29sdGlwU2hvd0RlbGF5XT1cInNob3dEZWxheS52YWx1ZVwiXG4gICAgICAgIFttYXRUb29sdGlwSGlkZURlbGF5XT1cImhpZGVEZWxheS52YWx1ZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b24gdGhhdCBkaXNwbGF5cyBhIHRvb2x0aXAgd2l0aCBhIGN1c3RvbWl6ZWQgZGVsYXkgaW4gc2hvd2luZyBhbmQgaGlkaW5nXCI+XG4gIEFjdGlvblxuPC9idXR0b24+XG4iXX0=