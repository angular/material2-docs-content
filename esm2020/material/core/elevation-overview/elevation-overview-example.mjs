import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
/**
 * @title Elevation CSS classes
 */
export class ElevationOverviewExample {
    constructor() {
        this.isActive = false;
    }
}
ElevationOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: ElevationOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ElevationOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0", type: ElevationOverviewExample, selector: "elevation-overview-example", ngImport: i0, template: "<div class=\"example-container\"\n    [class.mat-elevation-z2]=\"!isActive\"\n    [class.mat-elevation-z8]=\"isActive\">\n  Example\n</div>\n\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\n", styles: [".example-container {\n  padding: 16px;\n  margin-bottom: 16px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: ElevationOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'elevation-overview-example', template: "<div class=\"example-container\"\n    [class.mat-elevation-z2]=\"!isActive\"\n    [class.mat-elevation-z8]=\"isActive\">\n  Example\n</div>\n\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\n", styles: [".example-container {\n  padding: 16px;\n  margin-bottom: 16px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL2VsZXZhdGlvbi1vdmVydmlldy9lbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NvcmUvZWxldmF0aW9uLW92ZXJ2aWV3L2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHdCQUF3QjtJQUxyQztRQU1FLGFBQVEsR0FBRyxLQUFLLENBQUM7S0FDbEI7O3FIQUZZLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLGtFQ1ZyQyxnT0FPQTsyRkRHYSx3QkFBd0I7a0JBTHBDLFNBQVM7K0JBQ0UsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBFbGV2YXRpb24gQ1NTIGNsYXNzZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEVsZXZhdGlvbk92ZXJ2aWV3RXhhbXBsZSB7XG4gIGlzQWN0aXZlID0gZmFsc2U7XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIlxuICAgIFtjbGFzcy5tYXQtZWxldmF0aW9uLXoyXT1cIiFpc0FjdGl2ZVwiXG4gICAgW2NsYXNzLm1hdC1lbGV2YXRpb24tejhdPVwiaXNBY3RpdmVcIj5cbiAgRXhhbXBsZVxuPC9kaXY+XG5cbjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiaXNBY3RpdmUgPSAhaXNBY3RpdmVcIj5Ub2dnbGUgRWxldmF0aW9uPC9idXR0b24+XG4iXX0=