import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
/**
 * @title Testing with MatCheckboxHarness
 */
class CheckboxHarnessExample {
    constructor() {
        this.disabled = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CheckboxHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CheckboxHarnessExample, isStandalone: true, selector: "checkbox-harness-example", ngImport: i0, template: "<mat-checkbox\n    required\n    [checked]=\"true\"\n    name=\"first-name\"\n    value=\"first-value\"\n    aria-label=\"First checkbox\">\n  First\n</mat-checkbox>\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled\" aria-label=\"Second checkbox\">\n  Second\n</mat-checkbox>\n", dependencies: [{ kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }] }); }
}
export { CheckboxHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CheckboxHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-harness-example', standalone: true, imports: [MatCheckboxModule], template: "<mat-checkbox\n    required\n    [checked]=\"true\"\n    name=\"first-name\"\n    value=\"first-value\"\n    aria-label=\"First checkbox\">\n  First\n</mat-checkbox>\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled\" aria-label=\"Second checkbox\">\n  Second\n</mat-checkbox>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hlY2tib3gvY2hlY2tib3gtaGFybmVzcy9jaGVja2JveC1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1oYXJuZXNzL2NoZWNrYm94LWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7OztBQUU3RDs7R0FFRztBQUNILE1BTWEsc0JBQXNCO0lBTm5DO1FBT0UsYUFBUSxHQUFHLElBQUksQ0FBQztLQUNqQjs4R0FGWSxzQkFBc0I7a0dBQXRCLHNCQUFzQixvRkNabkMsa1NBV0EsMkNERFksaUJBQWlCOztTQUVoQixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFObEMsU0FBUzsrQkFDRSwwQkFBMEIsY0FFeEIsSUFBSSxXQUNQLENBQUMsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRDaGVja2JveEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRDaGVja2JveE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94SGFybmVzc0V4YW1wbGUge1xuICBkaXNhYmxlZCA9IHRydWU7XG59XG4iLCI8bWF0LWNoZWNrYm94XG4gICAgcmVxdWlyZWRcbiAgICBbY2hlY2tlZF09XCJ0cnVlXCJcbiAgICBuYW1lPVwiZmlyc3QtbmFtZVwiXG4gICAgdmFsdWU9XCJmaXJzdC12YWx1ZVwiXG4gICAgYXJpYS1sYWJlbD1cIkZpcnN0IGNoZWNrYm94XCI+XG4gIEZpcnN0XG48L21hdC1jaGVja2JveD5cbjxtYXQtY2hlY2tib3ggaW5kZXRlcm1pbmF0ZT1cInRydWVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBhcmlhLWxhYmVsPVwiU2Vjb25kIGNoZWNrYm94XCI+XG4gIFNlY29uZFxuPC9tYXQtY2hlY2tib3g+XG4iXX0=