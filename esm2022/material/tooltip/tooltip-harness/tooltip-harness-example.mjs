import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
/**
 * @title Testing with MatTooltipHarness
 */
class TooltipHarnessExample {
    constructor() {
        this.message = 'Tooltip message';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TooltipHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: TooltipHarnessExample, isStandalone: true, selector: "tooltip-harness-example", ngImport: i0, template: "<button [matTooltip]=\"message\" id=\"one\">Trigger 1</button>\n<button matTooltip=\"Static message\" id=\"two\">Trigger 2</button>\n", dependencies: [{ kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] }); }
}
export { TooltipHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TooltipHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-harness-example', standalone: true, imports: [MatTooltipModule], template: "<button [matTooltip]=\"message\" id=\"one\">Trigger 1</button>\n<button matTooltip=\"Static message\" id=\"two\">Trigger 2</button>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL3Rvb2x0aXAtaGFybmVzcy90b29sdGlwLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1oYXJuZXNzL3Rvb2x0aXAtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRTNEOztHQUVHO0FBQ0gsTUFNYSxxQkFBcUI7SUFObEM7UUFPRSxZQUFPLEdBQUcsaUJBQWlCLENBQUM7S0FDN0I7OEdBRlkscUJBQXFCO2tHQUFyQixxQkFBcUIsbUZDWmxDLHVJQUVBLDJDRFFZLGdCQUFnQjs7U0FFZixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFOakMsU0FBUzsrQkFDRSx5QkFBeUIsY0FFdkIsSUFBSSxXQUNQLENBQUMsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0VG9vbHRpcEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0VG9vbHRpcE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBIYXJuZXNzRXhhbXBsZSB7XG4gIG1lc3NhZ2UgPSAnVG9vbHRpcCBtZXNzYWdlJztcbn1cbiIsIjxidXR0b24gW21hdFRvb2x0aXBdPVwibWVzc2FnZVwiIGlkPVwib25lXCI+VHJpZ2dlciAxPC9idXR0b24+XG48YnV0dG9uIG1hdFRvb2x0aXA9XCJTdGF0aWMgbWVzc2FnZVwiIGlkPVwidHdvXCI+VHJpZ2dlciAyPC9idXR0b24+XG4iXX0=