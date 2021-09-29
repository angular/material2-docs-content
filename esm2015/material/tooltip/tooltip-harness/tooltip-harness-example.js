import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
/**
 * @title Testing with MatTooltipHarness
 */
export class TooltipHarnessExample {
    constructor() {
        this.message = 'Tooltip message';
    }
}
TooltipHarnessExample.ɵfac = function TooltipHarnessExample_Factory(t) { return new (t || TooltipHarnessExample)(); };
TooltipHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TooltipHarnessExample, selectors: [["tooltip-harness-example"]], decls: 4, vars: 1, consts: [["id", "one", 3, "matTooltip"], ["matTooltip", "Static message", "id", "two"]], template: function TooltipHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, "Trigger 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵtext(3, "Trigger 2");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matTooltip", ctx.message);
    } }, directives: [i1.MatTooltip], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipHarnessExample, [{
        type: Component,
        args: [{ selector: 'tooltip-harness-example', template: "<button [matTooltip]=\"message\" id=\"one\">Trigger 1</button>\n<button matTooltip=\"Static message\" id=\"two\">Trigger 2</button>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL3Rvb2x0aXAtaGFybmVzcy90b29sdGlwLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1oYXJuZXNzL3Rvb2x0aXAtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBS0gsTUFBTSxPQUFPLHFCQUFxQjtJQUpsQztRQUtFLFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztLQUM3Qjs7MEZBRlkscUJBQXFCO3dFQUFyQixxQkFBcUI7UUNUbEMsaUNBQXdDO1FBQUEseUJBQVM7UUFBQSxpQkFBUztRQUMxRCxpQ0FBNkM7UUFBQSx5QkFBUztRQUFBLGlCQUFTOztRQUR2RCx3Q0FBc0I7O3VGRFNqQixxQkFBcUI7Y0FKakMsU0FBUzsyQkFDRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRUb29sdGlwSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBIYXJuZXNzRXhhbXBsZSB7XG4gIG1lc3NhZ2UgPSAnVG9vbHRpcCBtZXNzYWdlJztcbn1cbiIsIjxidXR0b24gW21hdFRvb2x0aXBdPVwibWVzc2FnZVwiIGlkPVwib25lXCI+VHJpZ2dlciAxPC9idXR0b24+XG48YnV0dG9uIG1hdFRvb2x0aXA9XCJTdGF0aWMgbWVzc2FnZVwiIGlkPVwidHdvXCI+VHJpZ2dlciAyPC9idXR0b24+XG4iXX0=