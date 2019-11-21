/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropConnectedSortingGroupExample_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r2);
} }
function CdkDragDropConnectedSortingGroupExample_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r3);
} }
/**
 * \@title Drag&Drop connected sorting group
 */
export class CdkDragDropConnectedSortingGroupExample {
    constructor() {
        this.todo = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.done = [
            'Get up',
            'Brush teeth',
            'Take a shower',
            'Check e-mail',
            'Walk dog'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
CdkDragDropConnectedSortingGroupExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-connected-sorting-group-example',
                templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
                styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropConnectedSortingGroupExample.ɵfac = function CdkDragDropConnectedSortingGroupExample_Factory(t) { return new (t || CdkDragDropConnectedSortingGroupExample)(); };
/** @nocollapse */ CdkDragDropConnectedSortingGroupExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropConnectedSortingGroupExample, selectors: [["cdk-drag-drop-connected-sorting-group-example"]], decls: 11, vars: 4, consts: [["cdkDropListGroup", ""], [1, "example-container"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropConnectedSortingGroupExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "h2");
        i0.ɵɵtext(3, "To do");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingGroupExample_Template_div_cdkDropListDropped_4_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(5, CdkDragDropConnectedSortingGroupExample_div_5_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 1);
        i0.ɵɵelementStart(7, "h2");
        i0.ɵɵtext(8, "Done");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 2);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingGroupExample_Template_div_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(10, CdkDragDropConnectedSortingGroupExample_div_10_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("cdkDropListData", ctx.todo);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.todo);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("cdkDropListData", ctx.done);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.done);
    } }, directives: [i1.CdkDropListGroup, i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropConnectedSortingGroupExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-connected-sorting-group-example',
                templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
                styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropConnectedSortingGroupExample.prototype.todo;
    /** @type {?} */
    CdkDragDropConnectedSortingGroupExample.prototype.done;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwL2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmctZ3JvdXAtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQWMsZUFBZSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0lDUWpGLDhCQUEyRDtJQUFBLFlBQVE7SUFBQSxpQkFBTTs7O0lBQWQsZUFBUTtJQUFSLDZCQUFROzs7SUFZbkUsOEJBQTJEO0lBQUEsWUFBUTtJQUFBLGlCQUFNOzs7SUFBZCxlQUFRO0lBQVIsNkJBQVE7Ozs7O0FEVnpFLE1BQU0sT0FBTyx1Q0FBdUM7SUFMcEQ7UUFNRSxTQUFJLEdBQUc7WUFDTCxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFNBQVM7WUFDVCxhQUFhO1NBQ2QsQ0FBQztRQUVGLFNBQUksR0FBRztZQUNMLFFBQVE7WUFDUixhQUFhO1lBQ2IsZUFBZTtZQUNmLGNBQWM7WUFDZCxVQUFVO1NBQ1gsQ0FBQztLQVlIOzs7OztJQVZDLElBQUksQ0FBQyxLQUE0QjtRQUMvQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQy9DLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRjthQUFNO1lBQ0wsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQ3BCLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtDQUErQztnQkFDekQsV0FBVyxFQUFFLG9EQUFvRDtnQkFDakUsU0FBUyxFQUFFLENBQUMsbURBQW1ELENBQUM7YUFDakU7OzhIQUNZLHVDQUF1Qzs0RUFBdkMsdUNBQXVDO1FDWHBELDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSwwQkFBSTtRQUFBLHFCQUFLO1FBQUEsaUJBQUs7UUFFZCw4QkFLRTtRQURBLGlKQUFzQixnQkFBWSxJQUFDO1FBQ25DLHdGQUEyRDtRQUM3RCxpQkFBTTtRQUNSLGlCQUFNO1FBRU4sOEJBQ0U7UUFBQSwwQkFBSTtRQUFBLG9CQUFJO1FBQUEsaUJBQUs7UUFFYiw4QkFLRTtRQURBLGlKQUFzQixnQkFBWSxJQUFDO1FBQ25DLDBGQUEyRDtRQUM3RCxpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07O1FBbEJBLGVBQXdCO1FBQXhCLDBDQUF3QjtRQUdDLGVBQXlCO1FBQXpCLGtDQUF5QjtRQVNsRCxlQUF3QjtRQUF4QiwwQ0FBd0I7UUFHQyxlQUF5QjtRQUF6QixrQ0FBeUI7O2tERFYzQyx1Q0FBdUM7Y0FMbkQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQ0FBK0M7Z0JBQ3pELFdBQVcsRUFBRSxvREFBb0Q7Z0JBQ2pFLFNBQVMsRUFBRSxDQUFDLG1EQUFtRCxDQUFDO2FBQ2pFOzs7O0lBRUMsdURBS0U7O0lBRUYsdURBTUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuLyoqXG4gKiBAdGl0bGUgRHJhZyZEcm9wIGNvbm5lY3RlZCBzb3J0aW5nIGdyb3VwXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmctZ3JvdXAtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdHcm91cEV4YW1wbGUge1xuICB0b2RvID0gW1xuICAgICdHZXQgdG8gd29yaycsXG4gICAgJ1BpY2sgdXAgZ3JvY2VyaWVzJyxcbiAgICAnR28gaG9tZScsXG4gICAgJ0ZhbGwgYXNsZWVwJ1xuICBdO1xuXG4gIGRvbmUgPSBbXG4gICAgJ0dldCB1cCcsXG4gICAgJ0JydXNoIHRlZXRoJyxcbiAgICAnVGFrZSBhIHNob3dlcicsXG4gICAgJ0NoZWNrIGUtbWFpbCcsXG4gICAgJ1dhbGsgZG9nJ1xuICBdO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jb250YWluZXIuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjZGtEcm9wTGlzdEdyb3VwPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgICA8aDI+VG8gZG88L2gyPlxuXG4gICAgPGRpdlxuICAgICAgY2RrRHJvcExpc3RcbiAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwidG9kb1wiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdFwiXG4gICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdG9kb1wiIGNka0RyYWc+e3tpdGVtfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgPGgyPkRvbmU8L2gyPlxuXG4gICAgPGRpdlxuICAgICAgY2RrRHJvcExpc3RcbiAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiZG9uZVwiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdFwiXG4gICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZG9uZVwiIGNka0RyYWc+e3tpdGVtfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==