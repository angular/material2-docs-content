import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
/**
 * @title Basic button-toggles
 */
var ButtonToggleOverviewExample = /** @class */ (function () {
    function ButtonToggleOverviewExample() {
    }
    ButtonToggleOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-toggle-overview-example',
                    templateUrl: 'button-toggle-overview-example.html',
                    styleUrls: ['button-toggle-overview-example.css'],
                },] },
    ];
    ButtonToggleOverviewExample.ɵfac = function ButtonToggleOverviewExample_Factory(t) { return new (t || ButtonToggleOverviewExample)(); };
    ButtonToggleOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonToggleOverviewExample, selectors: [["button-toggle-overview-example"]], decls: 7, vars: 0, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"]], template: function ButtonToggleOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-button-toggle-group", 0);
            i0.ɵɵelementStart(1, "mat-button-toggle", 1);
            i0.ɵɵtext(2, "Bold");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-button-toggle", 2);
            i0.ɵɵtext(4, "Italic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-button-toggle", 3);
            i0.ɵɵtext(6, "Underline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle], styles: [""] });
    return ButtonToggleOverviewExample;
}());
export { ButtonToggleOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonToggleOverviewExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-overview-example',
                templateUrl: 'button-toggle-overview-example.html',
                styleUrls: ['button-toggle-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZS9idXR0b24tdG9nZ2xlLW92ZXJ2aWV3L2J1dHRvbi10b2dnbGUtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1vdmVydmlldy9idXR0b24tdG9nZ2xlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBSzJDOztnQkFMMUMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7b0JBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2lCQUNsRDs7MEdBQ1ksMkJBQTJCO29FQUEzQiwyQkFBMkI7WUNWeEMsa0RBQ0U7WUFBQSw0Q0FBZ0M7WUFBQSxvQkFBSTtZQUFBLGlCQUFvQjtZQUN4RCw0Q0FBa0M7WUFBQSxzQkFBTTtZQUFBLGlCQUFvQjtZQUM1RCw0Q0FBcUM7WUFBQSx5QkFBUztZQUFBLGlCQUFvQjtZQUNwRSxpQkFBMEI7O3NDREoxQjtDQVUyQyxBQUwzQyxJQUsyQztTQUE5QiwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIGJ1dHRvbi10b2dnbGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi10b2dnbGUtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYnV0dG9uLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVPdmVydmlld0V4YW1wbGUge31cbiIsIjxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCBuYW1lPVwiZm9udFN0eWxlXCIgYXJpYS1sYWJlbD1cIkZvbnQgU3R5bGVcIj5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiYm9sZFwiPkJvbGQ8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJpdGFsaWNcIj5JdGFsaWM8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJ1bmRlcmxpbmVcIj5VbmRlcmxpbmU8L21hdC1idXR0b24tdG9nZ2xlPlxuPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbiJdfQ==