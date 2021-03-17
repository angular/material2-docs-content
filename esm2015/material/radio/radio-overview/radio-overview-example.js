import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/radio";
/**
 * @title Basic radios
 */
export class RadioOverviewExample {
}
RadioOverviewExample.ɵfac = function RadioOverviewExample_Factory(t) { return new (t || RadioOverviewExample)(); };
RadioOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RadioOverviewExample, selectors: [["radio-overview-example"]], decls: 5, vars: 0, consts: [["aria-label", "Select an option"], ["value", "1"], ["value", "2"]], template: function RadioOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-radio-group", 0);
        i0.ɵɵelementStart(1, "mat-radio-button", 1);
        i0.ɵɵtext(2, "Option 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-radio-button", 2);
        i0.ɵɵtext(4, "Option 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatRadioGroup, i1.MatRadioButton], styles: [".mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadioOverviewExample, [{
        type: Component,
        args: [{
                selector: 'radio-overview-example',
                templateUrl: 'radio-overview-example.html',
                styleUrls: ['radio-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3JhZGlvL3JhZGlvLW92ZXJ2aWV3L3JhZGlvLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9yYWRpby1vdmVydmlldy9yYWRpby1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDVmpDLDBDQUErQztRQUM3QywyQ0FBNEI7UUFBQSx3QkFBUTtRQUFBLGlCQUFtQjtRQUN2RCwyQ0FBNEI7UUFBQSx3QkFBUTtRQUFBLGlCQUFtQjtRQUN6RCxpQkFBa0I7O3VGRE9MLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHJhZGlvc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYWRpby1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdyYWRpby1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmFkaW8tb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9PdmVydmlld0V4YW1wbGUge31cbiIsIjxtYXQtcmFkaW8tZ3JvdXAgYXJpYS1sYWJlbD1cIlNlbGVjdCBhbiBvcHRpb25cIj5cbiAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L21hdC1yYWRpby1idXR0b24+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiMlwiPk9wdGlvbiAyPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG4iXX0=