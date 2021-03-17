import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/button";
/**
 * @title Testing with MatToolbarHarness
 */
export class ToolbarHarnessExample {
}
ToolbarHarnessExample.ɵfac = function ToolbarHarnessExample_Factory(t) { return new (t || ToolbarHarnessExample)(); };
ToolbarHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarHarnessExample, selectors: [["toolbar-harness-example"]], decls: 14, vars: 0, consts: [["mat-button", ""]], template: function ToolbarHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-toolbar");
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵtext(2, "My App");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-toolbar");
        i0.ɵɵelementStart(4, "mat-toolbar-row");
        i0.ɵɵelementStart(5, "span");
        i0.ɵɵtext(6, "Row 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-toolbar-row");
        i0.ɵɵelementStart(8, "span");
        i0.ɵɵtext(9, "Row 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 0);
        i0.ɵɵtext(11, " Button 1 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 0);
        i0.ɵɵtext(13, " Button 2 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatToolbar, i1.MatToolbarRow, i2.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarHarnessExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-harness-example',
                templateUrl: 'toolbar-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sYmFyL3Rvb2xiYXItaGFybmVzcy90b29sYmFyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1oYXJuZXNzL3Rvb2xiYXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ1RsQyxtQ0FBYTtRQUFBLDRCQUFNO1FBQUEsc0JBQU07UUFBQSxpQkFBTztRQUFBLGlCQUFjO1FBQzlDLG1DQUFhO1FBQ1gsdUNBQWlCO1FBQUEsNEJBQU07UUFBQSxxQkFBSztRQUFBLGlCQUFPO1FBQUEsaUJBQWtCO1FBQ3JELHVDQUFpQjtRQUFBLDRCQUFNO1FBQUEscUJBQUs7UUFBQSxpQkFBTztRQUNqQyxrQ0FBbUI7UUFDakIsMkJBQ0Y7UUFBQSxpQkFBUztRQUNULGtDQUFtQjtRQUNqQiwyQkFDRjtRQUFBLGlCQUFTO1FBQ1gsaUJBQWtCO1FBQ3BCLGlCQUFjOzt1RkRGRCxxQkFBcUI7Y0FKakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRUb29sYmFySGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sYmFyLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbGJhci1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJIYXJuZXNzRXhhbXBsZSB7fVxuIiwiPG1hdC10b29sYmFyPjxzcGFuPk15IEFwcDwvc3Bhbj48L21hdC10b29sYmFyPlxuPG1hdC10b29sYmFyPlxuICA8bWF0LXRvb2xiYXItcm93PjxzcGFuPlJvdyAxPC9zcGFuPjwvbWF0LXRvb2xiYXItcm93PlxuICA8bWF0LXRvb2xiYXItcm93PjxzcGFuPlJvdyAyPC9zcGFuPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5cbiAgICAgIEJ1dHRvbiAxXG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlxuICAgICAgQnV0dG9uIDJcbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtdG9vbGJhci1yb3c+XG48L21hdC10b29sYmFyPlxuIl19