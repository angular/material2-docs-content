import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
/**
 * @title Testing with MatButtonHarness
 */
class ButtonHarnessExample {
    constructor() {
        this.clicked = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ButtonHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: ButtonHarnessExample, isStandalone: true, selector: "button-harness-example", ngImport: i0, template: "<button id=\"basic\" type=\"button\" mat-button (click)=\"clicked = true\">\n  Basic button\n</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
export { ButtonHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ButtonHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-harness-example', standalone: true, imports: [MatButtonModule], template: "<button id=\"basic\" type=\"button\" mat-button (click)=\"clicked = true\">\n  Basic button\n</button>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi9idXR0b24taGFybmVzcy9idXR0b24taGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi1oYXJuZXNzL2J1dHRvbi1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRXpEOztHQUVHO0FBQ0gsTUFNYSxvQkFBb0I7SUFOakM7UUFPRSxZQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ2pCOzhHQUZZLG9CQUFvQjtrR0FBcEIsb0JBQW9CLGtGQ1pqQywwR0FHQSwyQ0RPWSxlQUFlOztTQUVkLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQU5oQyxTQUFTOytCQUNFLHdCQUF3QixjQUV0QixJQUFJLFdBQ1AsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdEJ1dHRvbkhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkhhcm5lc3NFeGFtcGxlIHtcbiAgY2xpY2tlZCA9IGZhbHNlO1xufVxuIiwiPGJ1dHRvbiBpZD1cImJhc2ljXCIgdHlwZT1cImJ1dHRvblwiIG1hdC1idXR0b24gKGNsaWNrKT1cImNsaWNrZWQgPSB0cnVlXCI+XG4gIEJhc2ljIGJ1dHRvblxuPC9idXR0b24+XG4iXX0=