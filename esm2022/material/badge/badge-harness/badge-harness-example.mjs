import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/badge";
/**
 * @title Testing with MatBadgeHarness
 */
class BadgeHarnessExample {
    constructor() {
        this.simpleContent = 'S';
        this.overlap = true;
        this.disabled = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: BadgeHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: BadgeHarnessExample, isStandalone: true, selector: "badge-harness-example", ngImport: i0, template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\n<button mat-button\n    id=\"overlapping\"\n    matBadge=\"O\"\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\n<button\n    mat-button\n    id=\"disabled\"\n    matBadge=\"D\"\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatBadgeModule }, { kind: "directive", type: i2.MatBadge, selector: "[matBadge]", inputs: ["matBadgeDisabled", "matBadgeColor", "matBadgeOverlap", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }] }); }
}
export { BadgeHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: BadgeHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-harness-example', standalone: true, imports: [MatButtonModule, MatBadgeModule], template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\n<button mat-button\n    id=\"overlapping\"\n    matBadge=\"O\"\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\n<button\n    mat-button\n    id=\"disabled\"\n    matBadge=\"D\"\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYmFkZ2UvYmFkZ2UtaGFybmVzcy9iYWRnZS1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS1oYXJuZXNzL2JhZGdlLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUV6RDs7R0FFRztBQUNILE1BTWEsbUJBQW1CO0lBTmhDO1FBT0Usa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFDcEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGFBQVEsR0FBRyxJQUFJLENBQUM7S0FDakI7OEdBSlksbUJBQW1CO2tHQUFuQixtQkFBbUIsaUZDYmhDLGtVQVVBLDJDRENZLGVBQWUsMlFBQUUsY0FBYzs7U0FFOUIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBTi9CLFNBQVM7K0JBQ0UsdUJBQXVCLGNBRXJCLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJhZGdlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9iYWRnZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdEJhZGdlSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYWRnZS1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2JhZGdlLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZSwgTWF0QmFkZ2VNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZUhhcm5lc3NFeGFtcGxlIHtcbiAgc2ltcGxlQ29udGVudCA9ICdTJztcbiAgb3ZlcmxhcCA9IHRydWU7XG4gIGRpc2FibGVkID0gdHJ1ZTtcbn1cbiIsIjxidXR0b24gbWF0LWJ1dHRvbiBpZD1cInNpbXBsZVwiIFttYXRCYWRnZV09XCJzaW1wbGVDb250ZW50XCI+U2ltcGxlPC9idXR0b24+XG48YnV0dG9uIG1hdC1idXR0b25cbiAgICBpZD1cIm92ZXJsYXBwaW5nXCJcbiAgICBtYXRCYWRnZT1cIk9cIlxuICAgIFttYXRCYWRnZU92ZXJsYXBdPVwib3ZlcmxhcFwiPk92ZXJsYXBwaW5nPC9idXR0b24+XG48YnV0dG9uXG4gICAgbWF0LWJ1dHRvblxuICAgIGlkPVwiZGlzYWJsZWRcIlxuICAgIG1hdEJhZGdlPVwiRFwiXG4gICAgW21hdEJhZGdlRGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5EaXNhYmxlZDwvYnV0dG9uPlxuIl19