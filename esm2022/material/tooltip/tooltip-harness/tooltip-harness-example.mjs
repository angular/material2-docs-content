import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
/**
 * @title Testing with MatTooltipHarness
 */
class TooltipHarnessExample {
    constructor() {
        this.message = 'Tooltip message';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: TooltipHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: TooltipHarnessExample, selector: "tooltip-harness-example", ngImport: i0, template: "<button [matTooltip]=\"message\" id=\"one\">Trigger 1</button>\n<button matTooltip=\"Static message\" id=\"two\">Trigger 2</button>\n", dependencies: [{ kind: "directive", type: i1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] }); }
}
export { TooltipHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: TooltipHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-harness-example', template: "<button [matTooltip]=\"message\" id=\"one\">Trigger 1</button>\n<button matTooltip=\"Static message\" id=\"two\">Trigger 2</button>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL3Rvb2x0aXAtaGFybmVzcy90b29sdGlwLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1oYXJuZXNzL3Rvb2x0aXAtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBQ0gsTUFJYSxxQkFBcUI7SUFKbEM7UUFLRSxZQUFPLEdBQUcsaUJBQWlCLENBQUM7S0FDN0I7cUhBRlkscUJBQXFCO3lHQUFyQixxQkFBcUIsK0RDVGxDLHVJQUVBOztTRE9hLHFCQUFxQjtrR0FBckIscUJBQXFCO2tCQUpqQyxTQUFTOytCQUNFLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFRvb2x0aXBIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcEhhcm5lc3NFeGFtcGxlIHtcbiAgbWVzc2FnZSA9ICdUb29sdGlwIG1lc3NhZ2UnO1xufVxuIiwiPGJ1dHRvbiBbbWF0VG9vbHRpcF09XCJtZXNzYWdlXCIgaWQ9XCJvbmVcIj5UcmlnZ2VyIDE8L2J1dHRvbj5cbjxidXR0b24gbWF0VG9vbHRpcD1cIlN0YXRpYyBtZXNzYWdlXCIgaWQ9XCJ0d29cIj5UcmlnZ2VyIDI8L2J1dHRvbj5cbiJdfQ==