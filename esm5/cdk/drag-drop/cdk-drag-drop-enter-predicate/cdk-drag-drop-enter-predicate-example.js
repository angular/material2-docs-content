import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropEnterPredicateExample_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var number_r25 = ctx.$implicit;
    i0.ɵɵproperty("cdkDragData", number_r25);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(number_r25);
} }
function CdkDragDropEnterPredicateExample_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var number_r26 = ctx.$implicit;
    i0.ɵɵproperty("cdkDragData", number_r26);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(number_r26);
} }
/**
 * @title Drag&Drop enter predicate
 */
var CdkDragDropEnterPredicateExample = /** @class */ (function () {
    function CdkDragDropEnterPredicateExample() {
        this.all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.even = [10];
    }
    CdkDragDropEnterPredicateExample.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    /** Predicate function that only allows even numbers to be dropped into a list. */
    CdkDragDropEnterPredicateExample.prototype.evenPredicate = function (item) {
        return item.data % 2 === 0;
    };
    /** Predicate function that doesn't allow items to be dropped into a list. */
    CdkDragDropEnterPredicateExample.prototype.noReturnPredicate = function () {
        return false;
    };
    CdkDragDropEnterPredicateExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-enter-predicate-example',
                    templateUrl: 'cdk-drag-drop-enter-predicate-example.html',
                    styleUrls: ['cdk-drag-drop-enter-predicate-example.css'],
                },] },
    ];
    CdkDragDropEnterPredicateExample.ɵfac = function CdkDragDropEnterPredicateExample_Factory(t) { return new (t || CdkDragDropEnterPredicateExample)(); };
    CdkDragDropEnterPredicateExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropEnterPredicateExample, selectors: [["cdk-drag-drop-enter-predicate-example"]], decls: 10, vars: 6, consts: [[1, "example-container"], ["id", "all", "cdkDropList", "", "cdkDropListConnectedTo", "even", 1, "example-list", 3, "cdkDropListData", "cdkDropListEnterPredicate", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "cdkDragData", 4, "ngFor", "ngForOf"], ["id", "even", "cdkDropList", "", "cdkDropListConnectedTo", "all", 1, "example-list", 3, "cdkDropListData", "cdkDropListEnterPredicate", "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragData"]], template: function CdkDragDropEnterPredicateExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h2");
            i0.ɵɵtext(2, "Available numbers");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropEnterPredicateExample_Template_div_cdkDropListDropped_3_listener($event) { return ctx.drop($event); });
            i0.ɵɵtemplate(4, CdkDragDropEnterPredicateExample_div_4_Template, 2, 2, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 0);
            i0.ɵɵelementStart(6, "h2");
            i0.ɵɵtext(7, "Even numbers");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 3);
            i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropEnterPredicateExample_Template_div_cdkDropListDropped_8_listener($event) { return ctx.drop($event); });
            i0.ɵɵtemplate(9, CdkDragDropEnterPredicateExample_div_9_Template, 2, 2, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("cdkDropListData", ctx.all)("cdkDropListEnterPredicate", ctx.noReturnPredicate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.all);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("cdkDropListData", ctx.even)("cdkDropListEnterPredicate", ctx.evenPredicate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.even);
        } }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    return CdkDragDropEnterPredicateExample;
}());
export { CdkDragDropEnterPredicateExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkDragDropEnterPredicateExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-enter-predicate-example',
                templateUrl: 'cdk-drag-drop-enter-predicate-example.html',
                styleUrls: ['cdk-drag-drop-enter-predicate-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlL2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS9jZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQWMsZUFBZSxFQUFFLGlCQUFpQixFQUFVLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0lDVTVGLDhCQUlVO0lBQUEsWUFBVTtJQUFBLGlCQUFNOzs7SUFEeEIsd0NBQXNCO0lBQ2QsZUFBVTtJQUFWLGdDQUFVOzs7SUFlcEIsOEJBSXlCO0lBQUEsWUFBVTtJQUFBLGlCQUFNOzs7SUFBdkMsd0NBQXNCO0lBQUMsZUFBVTtJQUFWLGdDQUFVOztBRC9CdkM7O0dBRUc7QUFDSDtJQUFBO1FBTUUsUUFBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxTQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQXNCYjtJQXBCQywrQ0FBSSxHQUFKLFVBQUssS0FBNEI7UUFDL0IsSUFBSSxLQUFLLENBQUMsaUJBQWlCLEtBQUssS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUMvQyxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEY7YUFBTTtZQUNMLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQzVCLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUNwQixLQUFLLENBQUMsYUFBYSxFQUNuQixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsa0ZBQWtGO0lBQ2xGLHdEQUFhLEdBQWIsVUFBYyxJQUFxQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNkVBQTZFO0lBQzdFLDREQUFpQixHQUFqQjtRQUNFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUNBQXVDO29CQUNqRCxXQUFXLEVBQUUsNENBQTRDO29CQUN6RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQztpQkFDekQ7O29IQUNZLGdDQUFnQzt5RUFBaEMsZ0NBQWdDO1lDWDdDLDhCQUNFO1lBQUEsMEJBQUk7WUFBQSxpQ0FBaUI7WUFBQSxpQkFBSztZQUUxQiw4QkFRRTtZQUZBLDBJQUFzQixnQkFBWSxJQUFDO1lBRW5DLGlGQUlVO1lBQ1osaUJBQU07WUFDUixpQkFBTTtZQUVOLDhCQUNFO1lBQUEsMEJBQUk7WUFBQSw0QkFBWTtZQUFBLGlCQUFLO1lBRXJCLDhCQVFFO1lBRkEsMElBQXNCLGdCQUFZLElBQUM7WUFFbkMsaUZBSXlCO1lBQzNCLGlCQUFNO1lBQ1IsaUJBQU07O1lBOUJGLGVBQXVCO1lBQXZCLHlDQUF1QixvREFBQTtZQU9yQixlQUEwQjtZQUExQixpQ0FBMEI7WUFZNUIsZUFBd0I7WUFBeEIsMENBQXdCLGdEQUFBO1lBT3RCLGVBQTJCO1lBQTNCLGtDQUEyQjs7MkNEaENqQztDQW1DQyxBQTdCRCxJQTZCQztTQXhCWSxnQ0FBZ0M7bUNBQWhDLGdDQUFnQztjQUw1QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsV0FBVyxFQUFFLDRDQUE0QztnQkFDekQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7YUFDekQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtLCBDZGtEcmFnfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuLyoqXG4gKiBAdGl0bGUgRHJhZyZEcm9wIGVudGVyIHByZWRpY2F0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BFbnRlclByZWRpY2F0ZUV4YW1wbGUge1xuICBhbGwgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG4gIGV2ZW4gPSBbMTBdO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jb250YWluZXIuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBQcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBvbmx5IGFsbG93cyBldmVuIG51bWJlcnMgdG8gYmUgZHJvcHBlZCBpbnRvIGEgbGlzdC4gKi9cbiAgZXZlblByZWRpY2F0ZShpdGVtOiBDZGtEcmFnPG51bWJlcj4pIHtcbiAgICByZXR1cm4gaXRlbS5kYXRhICUgMiA9PT0gMDtcbiAgfVxuXG4gIC8qKiBQcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBkb2Vzbid0IGFsbG93IGl0ZW1zIHRvIGJlIGRyb3BwZWQgaW50byBhIGxpc3QuICovXG4gIG5vUmV0dXJuUHJlZGljYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxoMj5BdmFpbGFibGUgbnVtYmVyczwvaDI+XG5cbiAgPGRpdlxuICAgIGlkPVwiYWxsXCJcbiAgICBjZGtEcm9wTGlzdFxuICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiYWxsXCJcbiAgICBjZGtEcm9wTGlzdENvbm5lY3RlZFRvPVwiZXZlblwiXG4gICAgY2xhc3M9XCJleGFtcGxlLWxpc3RcIlxuICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCJcbiAgICBbY2RrRHJvcExpc3RFbnRlclByZWRpY2F0ZV09XCJub1JldHVyblByZWRpY2F0ZVwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1ib3hcIlxuICAgICAgKm5nRm9yPVwibGV0IG51bWJlciBvZiBhbGxcIlxuICAgICAgW2Nka0RyYWdEYXRhXT1cIm51bWJlclwiXG4gICAgICBjZGtEcmFnPnt7bnVtYmVyfX08L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxoMj5FdmVuIG51bWJlcnM8L2gyPlxuXG4gIDxkaXZcbiAgICBpZD1cImV2ZW5cIlxuICAgIGNka0Ryb3BMaXN0XG4gICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJldmVuXCJcbiAgICBjZGtEcm9wTGlzdENvbm5lY3RlZFRvPVwiYWxsXCJcbiAgICBjbGFzcz1cImV4YW1wbGUtbGlzdFwiXG4gICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIlxuICAgIFtjZGtEcm9wTGlzdEVudGVyUHJlZGljYXRlXT1cImV2ZW5QcmVkaWNhdGVcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImV4YW1wbGUtYm94XCJcbiAgICAgICpuZ0Zvcj1cImxldCBudW1iZXIgb2YgZXZlblwiXG4gICAgICBjZGtEcmFnXG4gICAgICBbY2RrRHJhZ0RhdGFdPVwibnVtYmVyXCI+e3tudW1iZXJ9fTwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG4iXX0=