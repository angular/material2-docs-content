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
        return value;
    }
}
SliderFormattingExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SliderFormattingExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SliderFormattingExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: SliderFormattingExample, selector: "slider-formatting-example", ngImport: i0, template: "<mat-slider\n  thumbLabel\n  [displayWith]=\"formatLabel\"\n  tickInterval=\"1000\"\n  step=\"1000\"\n  min=\"0\"\n  max=\"100000\"\n  aria-label=\"units\"></mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatSlider, selector: "mat-slider", inputs: ["disabled", "color", "tabIndex", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "value", "displayWith", "valueText", "vertical"], outputs: ["change", "input", "valueChange"], exportAs: ["matSlider"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SliderFormattingExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-formatting-example', template: "<mat-slider\n  thumbLabel\n  [displayWith]=\"formatLabel\"\n  tickInterval=\"1000\"\n  step=\"1000\"\n  min=\"0\"\n  max=\"100000\"\n  aria-label=\"units\"></mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItZm9ybWF0dGluZy9zbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1mb3JtYXR0aW5nL3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN2QztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7b0hBUFUsdUJBQXVCO3dHQUF2Qix1QkFBdUIsaUVDVnBDLDZLQVFBOzJGREVhLHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDRSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFNsaWRlciB3aXRoIGN1c3RvbSB0aHVtYiBsYWJlbCBmb3JtYXR0aW5nLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbGlkZXItZm9ybWF0dGluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyRm9ybWF0dGluZ0V4YW1wbGUge1xuICBmb3JtYXRMYWJlbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlID49IDEwMDApIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMCkgKyAnayc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iLCI8bWF0LXNsaWRlclxuICB0aHVtYkxhYmVsXG4gIFtkaXNwbGF5V2l0aF09XCJmb3JtYXRMYWJlbFwiXG4gIHRpY2tJbnRlcnZhbD1cIjEwMDBcIlxuICBzdGVwPVwiMTAwMFwiXG4gIG1pbj1cIjBcIlxuICBtYXg9XCIxMDAwMDBcIlxuICBhcmlhLWxhYmVsPVwidW5pdHNcIj48L21hdC1zbGlkZXI+XG4iXX0=