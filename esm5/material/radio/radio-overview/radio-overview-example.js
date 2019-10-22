import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/radio";
/**
 * @title Basic radios
 */
var RadioOverviewExample = /** @class */ (function () {
    function RadioOverviewExample() {
    }
    RadioOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'radio-overview-example',
                    templateUrl: 'radio-overview-example.html',
                    styleUrls: ['radio-overview-example.css'],
                },] },
    ];
    RadioOverviewExample.ngFactoryDef = function RadioOverviewExample_Factory(t) { return new (t || RadioOverviewExample)(); };
    RadioOverviewExample.ngComponentDef = i0.ɵɵdefineComponent({ type: RadioOverviewExample, selectors: [["radio-overview-example"]], decls: 5, vars: 0, consts: [["aria-label", "Select an option"], ["value", "1"], ["value", "2"]], template: function RadioOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-radio-group", 0);
            i0.ɵɵelementStart(1, "mat-radio-button", 1);
            i0.ɵɵtext(2, "Option 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-radio-button", 2);
            i0.ɵɵtext(4, "Option 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatRadioGroup, i1.MatRadioButton], styles: [".mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}"] });
    return RadioOverviewExample;
}());
export { RadioOverviewExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(RadioOverviewExample, [{
        type: Component,
        args: [{
                selector: 'radio-overview-example',
                templateUrl: 'radio-overview-example.html',
                styleUrls: ['radio-overview-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9yYWRpby1vdmVydmlldy9yYWRpby1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3JhZGlvL3JhZGlvLW92ZXJ2aWV3L3JhZGlvLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBS29DOztnQkFMbkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7b0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUMxQzs7b0dBQ1ksb0JBQW9CO3VFQUFwQixvQkFBb0I7WUNWakMsMENBQ0U7WUFBQSwyQ0FBNEI7WUFBQSx3QkFBUTtZQUFBLGlCQUFtQjtZQUN2RCwyQ0FBNEI7WUFBQSx3QkFBUTtZQUFBLGlCQUFtQjtZQUN6RCxpQkFBa0I7OytCREhsQjtDQVVvQyxBQUxwQyxJQUtvQztTQUF2QixvQkFBb0I7bUNBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHJhZGlvc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYWRpby1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdyYWRpby1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmFkaW8tb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9PdmVydmlld0V4YW1wbGUge31cbiIsIjxtYXQtcmFkaW8tZ3JvdXAgYXJpYS1sYWJlbD1cIlNlbGVjdCBhbiBvcHRpb25cIj5cbiAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L21hdC1yYWRpby1idXR0b24+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiMlwiPk9wdGlvbiAyPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG4iXX0=