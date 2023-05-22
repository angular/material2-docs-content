import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * @title Slider with custom thumb label formatting.
 */
class SliderFormattingExample {
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return `${value}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SliderFormattingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: SliderFormattingExample, isStandalone: true, selector: "slider-formatting-example", ngImport: i0, template: "<mat-slider min=\"0\" max=\"100000\" step=\"1000\" showTickMarks discrete [displayWith]=\"formatLabel\">\n  <input matSliderThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i1.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }] }); }
}
export { SliderFormattingExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SliderFormattingExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-formatting-example', standalone: true, imports: [MatSliderModule], template: "<mat-slider min=\"0\" max=\"100000\" step=\"1000\" showTickMarks discrete [displayWith]=\"formatLabel\">\n  <input matSliderThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItZm9ybWF0dGluZy9zbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1mb3JtYXR0aW5nL3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRXpEOztHQUVHO0FBQ0gsTUFPYSx1QkFBdUI7SUFDbEMsV0FBVyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUM7OEdBUFUsdUJBQXVCO2tHQUF2Qix1QkFBdUIscUZDYnBDLHFKQUdBLDJGRFFZLGVBQWU7O1NBRWQsdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBUG5DLFNBQVM7K0JBQ0UsMkJBQTJCLGNBR3pCLElBQUksV0FDUCxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2xpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuXG4vKipcbiAqIEB0aXRsZSBTbGlkZXIgd2l0aCBjdXN0b20gdGh1bWIgbGFiZWwgZm9ybWF0dGluZy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRTbGlkZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJGb3JtYXR0aW5nRXhhbXBsZSB7XG4gIGZvcm1hdExhYmVsKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSA+PSAxMDAwKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDApICsgJ2snO1xuICAgIH1cblxuICAgIHJldHVybiBgJHt2YWx1ZX1gO1xuICB9XG59XG4iLCI8bWF0LXNsaWRlciBtaW49XCIwXCIgbWF4PVwiMTAwMDAwXCIgc3RlcD1cIjEwMDBcIiBzaG93VGlja01hcmtzIGRpc2NyZXRlIFtkaXNwbGF5V2l0aF09XCJmb3JtYXRMYWJlbFwiPlxuICA8aW5wdXQgbWF0U2xpZGVyVGh1bWI+XG48L21hdC1zbGlkZXI+XG4iXX0=