import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
/**
 * @title Elevation CSS classes
 */
class ElevationOverviewExample {
    constructor() {
        this.isActive = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ElevationOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: ElevationOverviewExample, isStandalone: true, selector: "elevation-overview-example", ngImport: i0, template: "<div class=\"example-container\"\n    [class.mat-elevation-z2]=\"!isActive\"\n    [class.mat-elevation-z8]=\"isActive\">\n  Example\n</div>\n\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\n", styles: [".example-container {\n  padding: 16px;\n  margin-bottom: 16px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
export { ElevationOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ElevationOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'elevation-overview-example', standalone: true, imports: [MatButtonModule], template: "<div class=\"example-container\"\n    [class.mat-elevation-z2]=\"!isActive\"\n    [class.mat-elevation-z8]=\"isActive\">\n  Example\n</div>\n\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\n", styles: [".example-container {\n  padding: 16px;\n  margin-bottom: 16px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL2VsZXZhdGlvbi1vdmVydmlldy9lbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NvcmUvZWxldmF0aW9uLW92ZXJ2aWV3L2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7OztBQUV6RDs7R0FFRztBQUNILE1BT2Esd0JBQXdCO0lBUHJDO1FBUUUsYUFBUSxHQUFHLEtBQUssQ0FBQztLQUNsQjs4R0FGWSx3QkFBd0I7a0dBQXhCLHdCQUF3QixzRkNickMsZ09BT0EsNEhESVksZUFBZTs7U0FFZCx3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSw0QkFBNEIsY0FHMUIsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbi8qKlxuICogQHRpdGxlIEVsZXZhdGlvbiBDU1MgY2xhc3Nlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydlbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdlbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEVsZXZhdGlvbk92ZXJ2aWV3RXhhbXBsZSB7XG4gIGlzQWN0aXZlID0gZmFsc2U7XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIlxuICAgIFtjbGFzcy5tYXQtZWxldmF0aW9uLXoyXT1cIiFpc0FjdGl2ZVwiXG4gICAgW2NsYXNzLm1hdC1lbGV2YXRpb24tejhdPVwiaXNBY3RpdmVcIj5cbiAgRXhhbXBsZVxuPC9kaXY+XG5cbjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiaXNBY3RpdmUgPSAhaXNBY3RpdmVcIj5Ub2dnbGUgRWxldmF0aW9uPC9idXR0b24+XG4iXX0=