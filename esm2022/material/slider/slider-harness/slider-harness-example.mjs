import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * @title Testing with MatSliderHarness
 */
class SliderHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SliderHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: SliderHarnessExample, selector: "slider-harness-example", ngImport: i0, template: "<mat-slider>\n  <input matSliderThumb value=\"50\">\n</mat-slider>\n", dependencies: [{ kind: "component", type: i1.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }] }); }
}
export { SliderHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SliderHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-harness-example', template: "<mat-slider>\n  <input matSliderThumb value=\"50\">\n</mat-slider>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItaGFybmVzcy9zbGlkZXItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1oYXJuZXNzL3NsaWRlci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFDSCxNQUlhLG9CQUFvQjs4R0FBcEIsb0JBQW9CO2tHQUFwQixvQkFBb0IsOERDVGpDLHNFQUdBOztTRE1hLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQUpoQyxTQUFTOytCQUNFLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFNsaWRlckhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGVyLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGVyLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVySGFybmVzc0V4YW1wbGUge31cbiIsIjxtYXQtc2xpZGVyPlxuICA8aW5wdXQgbWF0U2xpZGVyVGh1bWIgdmFsdWU9XCI1MFwiPlxuPC9tYXQtc2xpZGVyPlxuIl19