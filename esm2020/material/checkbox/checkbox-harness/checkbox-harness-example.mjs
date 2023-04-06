import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
/**
 * @title Testing with MatCheckboxHarness
 */
class CheckboxHarnessExample {
    constructor() {
        this.disabled = true;
    }
}
CheckboxHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: CheckboxHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CheckboxHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: CheckboxHarnessExample, selector: "checkbox-harness-example", ngImport: i0, template: "<mat-checkbox\n    required\n    [checked]=\"true\"\n    name=\"first-name\"\n    value=\"first-value\"\n    aria-label=\"First checkbox\">\n  First\n</mat-checkbox>\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled\" aria-label=\"Second checkbox\">\n  Second\n</mat-checkbox>\n", dependencies: [{ kind: "component", type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }] });
export { CheckboxHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: CheckboxHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-harness-example', template: "<mat-checkbox\n    required\n    [checked]=\"true\"\n    name=\"first-name\"\n    value=\"first-value\"\n    aria-label=\"First checkbox\">\n  First\n</mat-checkbox>\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled\" aria-label=\"Second checkbox\">\n  Second\n</mat-checkbox>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hlY2tib3gvY2hlY2tib3gtaGFybmVzcy9jaGVja2JveC1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1oYXJuZXNzL2NoZWNrYm94LWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUNILE1BSWEsc0JBQXNCO0lBSm5DO1FBS0UsYUFBUSxHQUFHLElBQUksQ0FBQztLQUNqQjs7MEhBRlksc0JBQXNCOzhHQUF0QixzQkFBc0IsZ0VDVG5DLGtTQVdBO1NERmEsc0JBQXNCO2tHQUF0QixzQkFBc0I7a0JBSmxDLFNBQVM7K0JBQ0UsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0Q2hlY2tib3hIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoZWNrYm94LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3gtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveEhhcm5lc3NFeGFtcGxlIHtcbiAgZGlzYWJsZWQgPSB0cnVlO1xufVxuIiwiPG1hdC1jaGVja2JveFxuICAgIHJlcXVpcmVkXG4gICAgW2NoZWNrZWRdPVwidHJ1ZVwiXG4gICAgbmFtZT1cImZpcnN0LW5hbWVcIlxuICAgIHZhbHVlPVwiZmlyc3QtdmFsdWVcIlxuICAgIGFyaWEtbGFiZWw9XCJGaXJzdCBjaGVja2JveFwiPlxuICBGaXJzdFxuPC9tYXQtY2hlY2tib3g+XG48bWF0LWNoZWNrYm94IGluZGV0ZXJtaW5hdGU9XCJ0cnVlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgYXJpYS1sYWJlbD1cIlNlY29uZCBjaGVja2JveFwiPlxuICBTZWNvbmRcbjwvbWF0LWNoZWNrYm94PlxuIl19