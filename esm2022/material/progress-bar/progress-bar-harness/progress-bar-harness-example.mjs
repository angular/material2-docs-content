import { Component, signal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-bar";
/**
 * @title Testing with MatProgressBarHarness
 */
export class ProgressBarHarnessExample {
    constructor() {
        this.value = signal(undefined);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: ProgressBarHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-rc.2", type: ProgressBarHarnessExample, isStandalone: true, selector: "progress-bar-harness-example", ngImport: i0, template: "<mat-progress-bar mode=\"determinate\" [value]=\"value()\"></mat-progress-bar>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n", dependencies: [{ kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: ProgressBarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-harness-example', standalone: true, imports: [MatProgressBarModule], template: "<mat-progress-bar mode=\"determinate\" [value]=\"value()\"></mat-progress-bar>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXItaGFybmVzcy9wcm9ncmVzcy1iYXItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1oYXJuZXNzL3Byb2dyZXNzLWJhci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBRXBFOztHQUVHO0FBT0gsTUFBTSxPQUFPLHlCQUF5QjtJQU50QztRQU9FLFVBQUssR0FBRyxNQUFNLENBQXFCLFNBQVMsQ0FBQyxDQUFDO0tBQy9DO21IQUZZLHlCQUF5Qjt1R0FBekIseUJBQXlCLHdGQ1p0QyxnSkFFQSwyQ0RRWSxvQkFBb0I7O2dHQUVuQix5QkFBeUI7a0JBTnJDLFNBQVM7K0JBQ0UsOEJBQThCLGNBRTVCLElBQUksV0FDUCxDQUFDLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIHNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0UHJvZ3Jlc3NCYXJIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzLWJhci1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLWJhci1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRQcm9ncmVzc0Jhck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFySGFybmVzc0V4YW1wbGUge1xuICB2YWx1ZSA9IHNpZ25hbDxudW1iZXIgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG59XG4iLCI8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiZGV0ZXJtaW5hdGVcIiBbdmFsdWVdPVwidmFsdWUoKVwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbjxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJpbmRldGVybWluYXRlXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuIl19