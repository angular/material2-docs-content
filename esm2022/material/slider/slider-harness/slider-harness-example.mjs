import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * @title Testing with MatSliderHarness
 */
export class SliderHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: SliderHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: SliderHarnessExample, isStandalone: true, selector: "slider-harness-example", ngImport: i0, template: "<mat-slider>\n  <input matSliderThumb value=\"50\">\n</mat-slider>\n", dependencies: [{ kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i1.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: SliderHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-harness-example', standalone: true, imports: [MatSliderModule], template: "<mat-slider>\n  <input matSliderThumb value=\"50\">\n</mat-slider>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItaGFybmVzcy9zbGlkZXItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1oYXJuZXNzL3NsaWRlci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRXpEOztHQUVHO0FBT0gsTUFBTSxPQUFPLG9CQUFvQjtxSEFBcEIsb0JBQW9CO3lHQUFwQixvQkFBb0Isa0ZDWmpDLHNFQUdBLDJDRE9ZLGVBQWU7O2tHQUVkLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDRSx3QkFBd0IsY0FFdEIsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTbGlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRTbGlkZXJIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlci1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRTbGlkZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJIYXJuZXNzRXhhbXBsZSB7fVxuIiwiPG1hdC1zbGlkZXI+XG4gIDxpbnB1dCBtYXRTbGlkZXJUaHVtYiB2YWx1ZT1cIjUwXCI+XG48L21hdC1zbGlkZXI+XG4iXX0=