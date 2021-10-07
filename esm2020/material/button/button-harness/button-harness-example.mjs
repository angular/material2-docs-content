import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
/**
 * @title Testing with MatButtonHarness
 */
export class ButtonHarnessExample {
    constructor() {
        this.clicked = false;
    }
}
ButtonHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ButtonHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: ButtonHarnessExample, selector: "button-harness-example", ngImport: i0, template: "<button id=\"basic\" type=\"button\" mat-button (click)=\"clicked = true\">\n  Basic button\n</button>\n", components: [{ type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ButtonHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-harness-example', template: "<button id=\"basic\" type=\"button\" mat-button (click)=\"clicked = true\">\n  Basic button\n</button>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi9idXR0b24taGFybmVzcy9idXR0b24taGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi1oYXJuZXNzL2J1dHRvbi1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBS0UsWUFBTyxHQUFHLEtBQUssQ0FBQztLQUNqQjs7eUhBRlksb0JBQW9COzZHQUFwQixvQkFBb0IsOERDVGpDLDBHQUdBO21HRE1hLG9CQUFvQjtrQkFKaEMsU0FBUzsrQkFDRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRCdXR0b25IYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkhhcm5lc3NFeGFtcGxlICB7XG4gIGNsaWNrZWQgPSBmYWxzZTtcbn1cbiIsIjxidXR0b24gaWQ9XCJiYXNpY1wiIHR5cGU9XCJidXR0b25cIiBtYXQtYnV0dG9uIChjbGljayk9XCJjbGlja2VkID0gdHJ1ZVwiPlxuICBCYXNpYyBidXR0b25cbjwvYnV0dG9uPlxuIl19