import { Component } from '@angular/core';
/**
 * @title Exclusive selection
 */
var ButtonToggleExclusiveExample = /** @class */ (function () {
    function ButtonToggleExclusiveExample() {
    }
    ButtonToggleExclusiveExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-toggle-exclusive-example',
                    template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\n  <mat-button-toggle value=\"left\" aria-label=\"Text align left\">\n    <mat-icon>format_align_left</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"center\" aria-label=\"Text align center\">\n    <mat-icon>format_align_center</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"right\" aria-label=\"Text align right\">\n    <mat-icon>format_align_right</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"justify\" disabled aria-label=\"Text align justify\">\n    <mat-icon>format_align_justify</mat-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\n",
                    styles: [".example-selected-value {\n  margin: 15px 0;\n}\n"]
                }] }
    ];
    return ButtonToggleExclusiveExample;
}());
export { ButtonToggleExclusiveExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlL2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7SUFLMkMsQ0FBQzs7Z0JBTDNDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUNBQWlDO29CQUMzQywrdUJBQW1EOztpQkFFcEQ7O0lBQzBDLG1DQUFDO0NBQUEsQUFMNUMsSUFLNEM7U0FBL0IsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBFeGNsdXNpdmUgc2VsZWN0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydidXR0b24tdG9nZ2xlLWV4Y2x1c2l2ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVFeGNsdXNpdmVFeGFtcGxlIHt9XG4iXX0=