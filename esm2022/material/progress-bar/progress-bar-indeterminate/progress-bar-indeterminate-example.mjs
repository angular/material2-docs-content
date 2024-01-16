import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-bar";
/**
 * @title Indeterminate progress-bar
 */
export class ProgressBarIndeterminateExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: ProgressBarIndeterminateExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: ProgressBarIndeterminateExample, isStandalone: true, selector: "progress-bar-indeterminate-example", ngImport: i0, template: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n", dependencies: [{ kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: ProgressBarIndeterminateExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-indeterminate-example', standalone: true, imports: [MatProgressBarModule], template: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLWluZGV0ZXJtaW5hdGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXItaW5kZXRlcm1pbmF0ZS9wcm9ncmVzcy1iYXItaW5kZXRlcm1pbmF0ZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlL3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7QUFFcEU7O0dBRUc7QUFPSCxNQUFNLE9BQU8sK0JBQStCO21IQUEvQiwrQkFBK0I7dUdBQS9CLCtCQUErQiw4RkNaNUMsZ0VBQ0EsMkNEU1ksb0JBQW9COztnR0FFbkIsK0JBQStCO2tCQU4zQyxTQUFTOytCQUNFLG9DQUFvQyxjQUVsQyxJQUFJLFdBQ1AsQ0FBQyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5cbi8qKlxuICogQHRpdGxlIEluZGV0ZXJtaW5hdGUgcHJvZ3Jlc3MtYmFyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRQcm9ncmVzc0Jhck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFySW5kZXRlcm1pbmF0ZUV4YW1wbGUge31cbiIsIjxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJpbmRldGVybWluYXRlXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuIl19