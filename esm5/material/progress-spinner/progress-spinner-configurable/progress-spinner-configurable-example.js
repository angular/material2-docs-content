import { Component } from '@angular/core';
/**
 * @title Configurable progress spinner
 */
var ProgressSpinnerConfigurableExample = /** @class */ (function () {
    function ProgressSpinnerConfigurableExample() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
    ProgressSpinnerConfigurableExample.decorators = [
        { type: Component, args: [{
                    selector: 'progress-spinner-configurable-example',
                    template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress spinner configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\" *ngIf=\"mode === 'determinate'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <mat-progress-spinner\n        class=\"example-margin\"\n        [color]=\"color\"\n        [mode]=\"mode\"\n        [value]=\"value\">\n    </mat-progress-spinner>\n  </mat-card-content>\n</mat-card>\n",
                    styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"]
                }] }
    ];
    return ProgressSpinnerConfigurableExample;
}());
export { ProgressSpinnerConfigurableExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci1jb25maWd1cmFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlL3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7UUFNRSxVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLFNBQUksR0FBRyxhQUFhLENBQUM7UUFDckIsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7O2dCQVRBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUNBQXVDO29CQUNqRCxzbURBQXlEOztpQkFFMUQ7O0lBS0QseUNBQUM7Q0FBQSxBQVRELElBU0M7U0FKWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENvbmZpZ3VyYWJsZSBwcm9ncmVzcyBzcGlubmVyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwcm9ncmVzcy1zcGlubmVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1NwaW5uZXJDb25maWd1cmFibGVFeGFtcGxlIHtcbiAgY29sb3IgPSAncHJpbWFyeSc7XG4gIG1vZGUgPSAnZGV0ZXJtaW5hdGUnO1xuICB2YWx1ZSA9IDUwO1xufVxuIl19