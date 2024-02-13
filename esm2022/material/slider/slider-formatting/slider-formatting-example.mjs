import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * @title Slider with custom thumb label formatting.
 */
export class SliderFormattingExample {
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return `${value}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: SliderFormattingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0-rc.1", type: SliderFormattingExample, isStandalone: true, selector: "slider-formatting-example", ngImport: i0, template: "<mat-slider min=\"0\" max=\"100000\" step=\"1000\" showTickMarks discrete [displayWith]=\"formatLabel\">\n  <input matSliderThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i1.MatSlider, selector: "mat-slider", inputs: ["disabled", "discrete", "showTickMarks", "min", "color", "disableRipple", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: SliderFormattingExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-formatting-example', standalone: true, imports: [MatSliderModule], template: "<mat-slider min=\"0\" max=\"100000\" step=\"1000\" showTickMarks discrete [displayWith]=\"formatLabel\">\n  <input matSliderThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItZm9ybWF0dGluZy9zbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1mb3JtYXR0aW5nL3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRXpEOztHQUVHO0FBUUgsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxXQUFXLENBQUMsS0FBYTtRQUN2QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUM7bUhBUFUsdUJBQXVCO3VHQUF2Qix1QkFBdUIscUZDYnBDLHFKQUdBLDJGRFFZLGVBQWU7O2dHQUVkLHVCQUF1QjtrQkFQbkMsU0FBUzsrQkFDRSwyQkFBMkIsY0FHekIsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTbGlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XG5cbi8qKlxuICogQHRpdGxlIFNsaWRlciB3aXRoIGN1c3RvbSB0aHVtYiBsYWJlbCBmb3JtYXR0aW5nLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbGlkZXItZm9ybWF0dGluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFNsaWRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckZvcm1hdHRpbmdFeGFtcGxlIHtcbiAgZm9ybWF0TGFiZWwodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlID49IDEwMDApIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMCkgKyAnayc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3ZhbHVlfWA7XG4gIH1cbn1cbiIsIjxtYXQtc2xpZGVyIG1pbj1cIjBcIiBtYXg9XCIxMDAwMDBcIiBzdGVwPVwiMTAwMFwiIHNob3dUaWNrTWFya3MgZGlzY3JldGUgW2Rpc3BsYXlXaXRoXT1cImZvcm1hdExhYmVsXCI+XG4gIDxpbnB1dCBtYXRTbGlkZXJUaHVtYj5cbjwvbWF0LXNsaWRlcj5cbiJdfQ==