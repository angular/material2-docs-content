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
SlideToggleHarnessExample.ɵfac = function SlideToggleHarnessExample_Factory(t) { return new (t || SlideToggleHarnessExample)(); };
SlideToggleHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SlideToggleHarnessExample, selectors: [["slide-toggle-harness-example"]], decls: 4, vars: 2, consts: [["name", "first-name", 3, "formControl"], [3, "disabled"]], template: function SlideToggleHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-slide-toggle", 0);
        i0.ɵɵtext(1, " First\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-slide-toggle", 1);
        i0.ɵɵtext(3, " Second\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formControl", ctx.ctrl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled);
    } }, directives: [i1.MatSlideToggle, i2.NgControlStatus, i2.FormControlDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlideToggleHarnessExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-harness-example',
                templateUrl: 'slide-toggle-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUtaGFybmVzcy9zbGlkZS10b2dnbGUtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1oYXJuZXNzL3NsaWRlLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUzQzs7R0FFRztBQUtILE1BQU0sT0FBTyx5QkFBeUI7SUFKdEM7UUFLRSxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFNBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7a0dBSFkseUJBQXlCOzRFQUF6Qix5QkFBeUI7UUNWdEMsMkNBRXNCO1FBQ3BCLHdCQUNGO1FBQUEsaUJBQW1CO1FBQ25CLDJDQUF3QztRQUN0Qyx5QkFDRjtRQUFBLGlCQUFtQjs7UUFOZixzQ0FBb0I7UUFJTixlQUFxQjtRQUFyQix1Q0FBcUI7O3VGREsxQix5QkFBeUI7Y0FKckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSxtQ0FBbUM7YUFDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRTbGlkZVRvZ2dsZUhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGUtdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGUtdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVUb2dnbGVIYXJuZXNzRXhhbXBsZSB7XG4gIGRpc2FibGVkID0gdHJ1ZTtcbiAgY3RybCA9IG5ldyBGb3JtQ29udHJvbCh0cnVlKTtcbn1cbiIsIjxtYXQtc2xpZGUtdG9nZ2xlXG4gICAgW2Zvcm1Db250cm9sXT1cImN0cmxcIlxuICAgIG5hbWU9XCJmaXJzdC1uYW1lXCI+XG4gIEZpcnN0XG48L21hdC1zbGlkZS10b2dnbGU+XG48bWF0LXNsaWRlLXRvZ2dsZSBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgU2Vjb25kXG48L21hdC1zbGlkZS10b2dnbGU+XG4iXX0=