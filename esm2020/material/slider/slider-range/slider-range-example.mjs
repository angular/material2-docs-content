import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * @title Range slider
 */
class SliderRangeExample {
}
SliderRangeExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: SliderRangeExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SliderRangeExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: SliderRangeExample, selector: "slider-range-example", ngImport: i0, template: "<mat-slider min=\"200\" max=\"500\">\n  <input value=\"300\" matSliderStartThumb>\n  <input value=\"400\" matSliderEndThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1.MatSliderRangeThumb, selector: "input[matSliderStartThumb], input[matSliderEndThumb]", exportAs: ["matSliderRangeThumb"] }] });
export { SliderRangeExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: SliderRangeExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-range-example', template: "<mat-slider min=\"200\" max=\"500\">\n  <input value=\"300\" matSliderStartThumb>\n  <input value=\"400\" matSliderEndThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXJhbmdlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvc2xpZGVyLXJhbmdlL3NsaWRlci1yYW5nZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1yYW5nZS9zbGlkZXItcmFuZ2UtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUNILE1BS2Esa0JBQWtCOztzSEFBbEIsa0JBQWtCOzBHQUFsQixrQkFBa0IsNERDVi9CLCtJQUlBO1NETWEsa0JBQWtCO2tHQUFsQixrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0Usc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBSYW5nZSBzbGlkZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGVyLXJhbmdlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci1yYW5nZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2xpZGVyLXJhbmdlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlclJhbmdlRXhhbXBsZSB7fVxuIiwiPG1hdC1zbGlkZXIgbWluPVwiMjAwXCIgbWF4PVwiNTAwXCI+XG4gIDxpbnB1dCB2YWx1ZT1cIjMwMFwiIG1hdFNsaWRlclN0YXJ0VGh1bWI+XG4gIDxpbnB1dCB2YWx1ZT1cIjQwMFwiIG1hdFNsaWRlckVuZFRodW1iPlxuPC9tYXQtc2xpZGVyPlxuIl19