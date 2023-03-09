import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
/**
 * @title Testing with MatButtonToggleHarness
 */
class ButtonToggleHarnessExample {
    constructor() {
        this.disabled = false;
        this.appearance = 'standard';
    }
}
ButtonToggleHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: ButtonToggleHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonToggleHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.2", type: ButtonToggleHarnessExample, selector: "button-toggle-harness-example", ngImport: i0, template: "<mat-button-toggle-group [disabled]=\"disabled\" [appearance]=\"appearance\">\n  <mat-button-toggle value=\"1\">One</mat-button-toggle>\n  <mat-button-toggle value=\"2\">Two</mat-button-toggle>\n</mat-button-toggle-group>\n", dependencies: [{ kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }] });
export { ButtonToggleHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: ButtonToggleHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-harness-example', template: "<mat-button-toggle-group [disabled]=\"disabled\" [appearance]=\"appearance\">\n  <mat-button-toggle value=\"1\">One</mat-button-toggle>\n  <mat-button-toggle value=\"2\">Two</mat-button-toggle>\n</mat-button-toggle-group>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtaGFybmVzcy9idXR0b24tdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1oYXJuZXNzL2J1dHRvbi10b2dnbGUtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBR3hDOztHQUVHO0FBQ0gsTUFJYSwwQkFBMEI7SUFKdkM7UUFLRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBOEIsVUFBVSxDQUFDO0tBQ3BEOzs4SEFIWSwwQkFBMEI7a0hBQTFCLDBCQUEwQixxRUNWdkMsaU9BSUE7U0RNYSwwQkFBMEI7a0dBQTFCLDBCQUEwQjtrQkFKdEMsU0FBUzsrQkFDRSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0QnV0dG9uVG9nZ2xlSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b24tdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvZ2dsZUhhcm5lc3NFeGFtcGxlIHtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgYXBwZWFyYW5jZTogTWF0QnV0dG9uVG9nZ2xlQXBwZWFyYW5jZSA9ICdzdGFuZGFyZCc7XG59XG4iLCI8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCIxXCI+T25lPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiMlwiPlR3bzwvbWF0LWJ1dHRvbi10b2dnbGU+XG48L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuIl19