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
SlideToggleHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: SlideToggleHarnessExample, selectors: [["slide-toggle-harness-example"]], decls: 4, vars: 2, consts: [["name", "first-name", 3, "formControl"], [3, "disabled"]], template: function SlideToggleHarnessExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SlideToggleHarnessExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-harness-example',
                templateUrl: 'slide-toggle-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUtaGFybmVzcy9zbGlkZS10b2dnbGUtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1oYXJuZXNzL3NsaWRlLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUzQzs7R0FFRztBQUtILE1BQU0sT0FBTyx5QkFBeUI7SUFKdEM7UUFLRSxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFNBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7a0dBSFkseUJBQXlCOzhEQUF6Qix5QkFBeUI7UUNWdEMsMkNBR0U7UUFBQSx3QkFDRjtRQUFBLGlCQUFtQjtRQUNuQiwyQ0FDRTtRQUFBLHlCQUNGO1FBQUEsaUJBQW1COztRQU5mLHNDQUFvQjtRQUlOLGVBQXFCO1FBQXJCLHVDQUFxQjs7a0RESzFCLHlCQUF5QjtjQUpyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLG1DQUFtQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFNsaWRlVG9nZ2xlSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbGlkZS10b2dnbGUtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZS10b2dnbGUtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZVRvZ2dsZUhhcm5lc3NFeGFtcGxlIHtcbiAgZGlzYWJsZWQgPSB0cnVlO1xuICBjdHJsID0gbmV3IEZvcm1Db250cm9sKHRydWUpO1xufVxuIiwiPG1hdC1zbGlkZS10b2dnbGVcbiAgICBbZm9ybUNvbnRyb2xdPVwiY3RybFwiXG4gICAgbmFtZT1cImZpcnN0LW5hbWVcIj5cbiAgRmlyc3RcbjwvbWF0LXNsaWRlLXRvZ2dsZT5cbjxtYXQtc2xpZGUtdG9nZ2xlIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICBTZWNvbmRcbjwvbWF0LXNsaWRlLXRvZ2dsZT5cbiJdfQ==