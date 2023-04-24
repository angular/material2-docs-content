import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-bar";
/**
 * @title Testing with MatProgressBarHarness
 */
class ProgressBarHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ProgressBarHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: ProgressBarHarnessExample, selector: "progress-bar-harness-example", ngImport: i0, template: "<mat-progress-bar mode=\"determinate\" [value]=\"value\"></mat-progress-bar>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n", dependencies: [{ kind: "component", type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
export { ProgressBarHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ProgressBarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-harness-example', template: "<mat-progress-bar mode=\"determinate\" [value]=\"value\"></mat-progress-bar>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXItaGFybmVzcy9wcm9ncmVzcy1iYXItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1oYXJuZXNzL3Byb2dyZXNzLWJhci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFDSCxNQUlhLHlCQUF5QjttSEFBekIseUJBQXlCO3VHQUF6Qix5QkFBeUIsb0VDVHRDLDhJQUVBOztTRE9hLHlCQUF5QjtnR0FBekIseUJBQXlCO2tCQUpyQyxTQUFTOytCQUNFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFByb2dyZXNzQmFySGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm9ncmVzcy1iYXItaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdwcm9ncmVzcy1iYXItaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0Jhckhhcm5lc3NFeGFtcGxlIHtcbiAgdmFsdWU6IG51bWJlcjtcbn1cbiIsIjxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJkZXRlcm1pbmF0ZVwiIFt2YWx1ZV09XCJ2YWx1ZVwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbjxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJpbmRldGVybWluYXRlXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuIl19