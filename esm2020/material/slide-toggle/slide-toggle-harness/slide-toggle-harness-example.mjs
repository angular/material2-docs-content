import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slide-toggle";
import * as i2 from "@angular/forms";
/**
 * @title Testing with MatSlideToggleHarness
 */
export class SlideToggleHarnessExample {
    constructor() {
        this.disabled = true;
        this.ctrl = new FormControl(true);
    }
}
SlideToggleHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: SlideToggleHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SlideToggleHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.6", type: SlideToggleHarnessExample, selector: "slide-toggle-harness-example", ngImport: i0, template: "<mat-slide-toggle\n    [formControl]=\"ctrl\"\n    name=\"first-name\">\n  First\n</mat-slide-toggle>\n<mat-slide-toggle [disabled]=\"disabled\">\n  Second\n</mat-slide-toggle>\n", components: [{ type: i1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "checked"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: SlideToggleHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-harness-example', template: "<mat-slide-toggle\n    [formControl]=\"ctrl\"\n    name=\"first-name\">\n  First\n</mat-slide-toggle>\n<mat-slide-toggle [disabled]=\"disabled\">\n  Second\n</mat-slide-toggle>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUtaGFybmVzcy9zbGlkZS10b2dnbGUtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1oYXJuZXNzL3NsaWRlLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUzQzs7R0FFRztBQUtILE1BQU0sT0FBTyx5QkFBeUI7SUFKdEM7UUFLRSxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFNBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7NkhBSFkseUJBQXlCO2lIQUF6Qix5QkFBeUIsb0VDVnRDLG9MQVFBO2tHREVhLHlCQUF5QjtrQkFKckMsU0FBUzsrQkFDRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRTbGlkZVRvZ2dsZUhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGUtdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGUtdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVUb2dnbGVIYXJuZXNzRXhhbXBsZSB7XG4gIGRpc2FibGVkID0gdHJ1ZTtcbiAgY3RybCA9IG5ldyBGb3JtQ29udHJvbCh0cnVlKTtcbn1cbiIsIjxtYXQtc2xpZGUtdG9nZ2xlXG4gICAgW2Zvcm1Db250cm9sXT1cImN0cmxcIlxuICAgIG5hbWU9XCJmaXJzdC1uYW1lXCI+XG4gIEZpcnN0XG48L21hdC1zbGlkZS10b2dnbGU+XG48bWF0LXNsaWRlLXRvZ2dsZSBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgU2Vjb25kXG48L21hdC1zbGlkZS10b2dnbGU+XG4iXX0=