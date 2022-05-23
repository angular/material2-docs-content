import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
/**
 * @title Testing with MatCheckboxHarness
 */
export class CheckboxHarnessExample {
    constructor() {
        this.disabled = true;
    }
}
CheckboxHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: CheckboxHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CheckboxHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-rc.1", type: CheckboxHarnessExample, selector: "checkbox-harness-example", ngImport: i0, template: "<mat-checkbox\n    required\n    [checked]=\"true\"\n    name=\"first-name\"\n    value=\"first-value\"\n    aria-label=\"First checkbox\">\n  First\n</mat-checkbox>\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled\" aria-label=\"Second checkbox\">\n  Second\n</mat-checkbox>\n", dependencies: [{ kind: "component", type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: CheckboxHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-harness-example', template: "<mat-checkbox\n    required\n    [checked]=\"true\"\n    name=\"first-name\"\n    value=\"first-value\"\n    aria-label=\"First checkbox\">\n  First\n</mat-checkbox>\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled\" aria-label=\"Second checkbox\">\n  Second\n</mat-checkbox>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hlY2tib3gvY2hlY2tib3gtaGFybmVzcy9jaGVja2JveC1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1oYXJuZXNzL2NoZWNrYm94LWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxzQkFBc0I7SUFKbkM7UUFLRSxhQUFRLEdBQUcsSUFBSSxDQUFDO0tBQ2pCOzt3SEFGWSxzQkFBc0I7NEdBQXRCLHNCQUFzQixnRUNUbkMsa1NBV0E7Z0dERmEsc0JBQXNCO2tCQUpsQyxTQUFTOytCQUNFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdENoZWNrYm94SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGVja2JveC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hIYXJuZXNzRXhhbXBsZSB7XG4gIGRpc2FibGVkID0gdHJ1ZTtcbn1cbiIsIjxtYXQtY2hlY2tib3hcbiAgICByZXF1aXJlZFxuICAgIFtjaGVja2VkXT1cInRydWVcIlxuICAgIG5hbWU9XCJmaXJzdC1uYW1lXCJcbiAgICB2YWx1ZT1cImZpcnN0LXZhbHVlXCJcbiAgICBhcmlhLWxhYmVsPVwiRmlyc3QgY2hlY2tib3hcIj5cbiAgRmlyc3RcbjwvbWF0LWNoZWNrYm94PlxuPG1hdC1jaGVja2JveCBpbmRldGVybWluYXRlPVwidHJ1ZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIGFyaWEtbGFiZWw9XCJTZWNvbmQgY2hlY2tib3hcIj5cbiAgU2Vjb25kXG48L21hdC1jaGVja2JveD5cbiJdfQ==