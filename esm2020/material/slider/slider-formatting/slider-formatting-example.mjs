import { Component } from '@angular/core';
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
}
SliderFormattingExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.1", ngImport: i0, type: SliderFormattingExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SliderFormattingExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-rc.1", type: SliderFormattingExample, selector: "slider-formatting-example", ngImport: i0, template: "<mat-slider min=\"0\" max=\"100000\" step=\"1000\" showTickMarks discrete [displayWith]=\"formatLabel\">\n  <input matSliderThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1.MatSliderThumb, selector: "input[matSliderThumb], input[matSliderStartThumb], input[matSliderEndThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd", "_blur", "_focus"], exportAs: ["matSliderThumb"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.1", ngImport: i0, type: SliderFormattingExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-formatting-example', template: "<mat-slider min=\"0\" max=\"100000\" step=\"1000\" showTickMarks discrete [displayWith]=\"formatLabel\">\n  <input matSliderThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItZm9ybWF0dGluZy9zbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1mb3JtYXR0aW5nL3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN2QztRQUVELE9BQU8sR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDOzt5SEFQVSx1QkFBdUI7NkdBQXZCLHVCQUF1QixpRUNWcEMscUpBR0E7Z0dET2EsdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgU2xpZGVyIHdpdGggY3VzdG9tIHRodW1iIGxhYmVsIGZvcm1hdHRpbmcuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJGb3JtYXR0aW5nRXhhbXBsZSB7XG4gIGZvcm1hdExhYmVsKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSA+PSAxMDAwKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDApICsgJ2snO1xuICAgIH1cblxuICAgIHJldHVybiBgJHt2YWx1ZX1gO1xuICB9XG59XG4iLCI8bWF0LXNsaWRlciBtaW49XCIwXCIgbWF4PVwiMTAwMDAwXCIgc3RlcD1cIjEwMDBcIiBzaG93VGlja01hcmtzIGRpc2NyZXRlIFtkaXNwbGF5V2l0aF09XCJmb3JtYXRMYWJlbFwiPlxuICA8aW5wdXQgbWF0U2xpZGVyVGh1bWI+XG48L21hdC1zbGlkZXI+XG4iXX0=