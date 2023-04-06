import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/slide-toggle";
/**
 * @title Testing with MatSlideToggleHarness
 */
class SlideToggleHarnessExample {
    constructor() {
        this.disabled = true;
        this.ctrl = new FormControl(true);
    }
}
SlideToggleHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: SlideToggleHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SlideToggleHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: SlideToggleHarnessExample, selector: "slide-toggle-harness-example", ngImport: i0, template: "<mat-slide-toggle\n    [formControl]=\"ctrl\"\n    name=\"first-name\">\n  First\n</mat-slide-toggle>\n<mat-slide-toggle [disabled]=\"disabled\">\n  Second\n</mat-slide-toggle>\n", dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "component", type: i2.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
export { SlideToggleHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: SlideToggleHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-harness-example', template: "<mat-slide-toggle\n    [formControl]=\"ctrl\"\n    name=\"first-name\">\n  First\n</mat-slide-toggle>\n<mat-slide-toggle [disabled]=\"disabled\">\n  Second\n</mat-slide-toggle>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUtaGFybmVzcy9zbGlkZS10b2dnbGUtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1oYXJuZXNzL3NsaWRlLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUzQzs7R0FFRztBQUNILE1BSWEseUJBQXlCO0lBSnRDO1FBS0UsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixTQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7OzZIQUhZLHlCQUF5QjtpSEFBekIseUJBQXlCLG9FQ1Z0QyxvTEFRQTtTREVhLHlCQUF5QjtrR0FBekIseUJBQXlCO2tCQUpyQyxTQUFTOytCQUNFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFNsaWRlVG9nZ2xlSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbGlkZS10b2dnbGUtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZS10b2dnbGUtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZVRvZ2dsZUhhcm5lc3NFeGFtcGxlIHtcbiAgZGlzYWJsZWQgPSB0cnVlO1xuICBjdHJsID0gbmV3IEZvcm1Db250cm9sKHRydWUpO1xufVxuIiwiPG1hdC1zbGlkZS10b2dnbGVcbiAgICBbZm9ybUNvbnRyb2xdPVwiY3RybFwiXG4gICAgbmFtZT1cImZpcnN0LW5hbWVcIj5cbiAgRmlyc3RcbjwvbWF0LXNsaWRlLXRvZ2dsZT5cbjxtYXQtc2xpZGUtdG9nZ2xlIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICBTZWNvbmRcbjwvbWF0LXNsaWRlLXRvZ2dsZT5cbiJdfQ==