import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/tooltip";
import * as i7 from "@angular/material/core";
function TooltipPositionExample_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var positionOption_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", positionOption_r6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", positionOption_r6, " ");
} }
/**
 * @title Tooltip with a custom position
 */
var TooltipPositionExample = /** @class */ (function () {
    function TooltipPositionExample() {
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
    TooltipPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-position-example',
                    templateUrl: 'tooltip-position-example.html',
                    styleUrls: ['tooltip-position-example.css'],
                },] },
    ];
    TooltipPositionExample.ɵfac = function TooltipPositionExample_Factory(t) { return new (t || TooltipPositionExample)(); };
    TooltipPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipPositionExample, selectors: [["tooltip-position-example"]], decls: 5, vars: 3, consts: [[1, "example-user-input"], ["placeholder", "Tooltip position", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip in various positions", 3, "matTooltipPosition"], [3, "value"]], template: function TooltipPositionExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-select", 1);
            i0.ɵɵtemplate(2, TooltipPositionExample_mat_option_2_Template, 2, 2, "mat-option", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 3);
            i0.ɵɵtext(4, " Action\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formControl", ctx.position);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.positionOptions);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matTooltipPosition", ctx.position.value);
        } }, directives: [i1.MatFormField, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.NgForOf, i5.MatButton, i6.MatTooltip, i7.MatOption], styles: [".example-user-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    return TooltipPositionExample;
}());
export { TooltipPositionExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipPositionExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-position-example',
                templateUrl: 'tooltip-position-example.html',
                styleUrls: ['tooltip-position-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLXBvc2l0aW9uL3Rvb2x0aXAtcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1wb3NpdGlvbi90b29sdGlwLXBvc2l0aW9uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztJQ0N2QyxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjhDLHlDQUF3QjtJQUNqRixlQUNGO0lBREUsa0RBQ0Y7O0FEQUo7O0dBRUc7QUFDSDtJQUFBO1FBTUUsb0JBQWUsR0FBc0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVGLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckQ7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDNUM7O2dHQUNZLHNCQUFzQjsrREFBdEIsc0JBQXNCO1lDWm5DLHlDQUNFO1lBQUEscUNBQ0U7WUFBQSxxRkFDRTtZQUVKLGlCQUFhO1lBQ2YsaUJBQWlCO1lBRWpCLGlDQUlFO1lBQUEseUJBQ0Y7WUFBQSxpQkFBUzs7WUFab0MsZUFBd0I7WUFBeEIsMENBQXdCO1lBQ3JELGVBQThDO1lBQTlDLDZDQUE4QztZQVF0RCxlQUFxQztZQUFyQyx1REFBcUM7O2lDRFY3QztDQWVDLEFBUkQsSUFRQztTQUhZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VG9vbHRpcFBvc2l0aW9ufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB3aXRoIGEgY3VzdG9tIHBvc2l0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtcG9zaXRpb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1wb3NpdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1wb3NpdGlvbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwUG9zaXRpb25FeGFtcGxlIHtcbiAgcG9zaXRpb25PcHRpb25zOiBUb29sdGlwUG9zaXRpb25bXSA9IFsnYWZ0ZXInLCAnYmVmb3JlJywgJ2Fib3ZlJywgJ2JlbG93JywgJ2xlZnQnLCAncmlnaHQnXTtcbiAgcG9zaXRpb24gPSBuZXcgRm9ybUNvbnRyb2wodGhpcy5wb3NpdGlvbk9wdGlvbnNbMF0pO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS11c2VyLWlucHV0XCI+XG4gIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiVG9vbHRpcCBwb3NpdGlvblwiIFtmb3JtQ29udHJvbF09XCJwb3NpdGlvblwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBwb3NpdGlvbk9wdGlvbiBvZiBwb3NpdGlvbk9wdGlvbnNcIiBbdmFsdWVdPVwicG9zaXRpb25PcHRpb25cIj5cbiAgICAgIHt7cG9zaXRpb25PcHRpb259fVxuICAgIDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICBtYXRUb29sdGlwPVwiSW5mbyBhYm91dCB0aGUgYWN0aW9uXCJcbiAgICAgICAgW21hdFRvb2x0aXBQb3NpdGlvbl09XCJwb3NpdGlvbi52YWx1ZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b24gdGhhdCBkaXNwbGF5cyBhIHRvb2x0aXAgaW4gdmFyaW91cyBwb3NpdGlvbnNcIj5cbiAgQWN0aW9uXG48L2J1dHRvbj5cbiJdfQ==