import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * @title Tab group with dynamically changing tabs
 */
var TabGroupDynamicExample = /** @class */ (function () {
    function TabGroupDynamicExample() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new FormControl(0);
    }
    TabGroupDynamicExample.prototype.addTab = function (selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    };
    TabGroupDynamicExample.prototype.removeTab = function (index) {
        this.tabs.splice(index, 1);
    };
    TabGroupDynamicExample = tslib_1.__decorate([
        Component({
            selector: 'tab-group-dynamic-example',
            template: "<div>\n  <span class=\"example-input-label\"> Selected tab index: </span>\n  <mat-form-field>\n    <input matInput type=\"number\" [formControl]=\"selected\">\n  </mat-form-field>\n</div>\n\n<div>\n  <button mat-raised-button\n          class=\"example-add-tab-button\"\n          (click)=\"addTab(selectAfterAdding.checked)\">\n    Add new tab\n  </button>\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n</div>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"selected.setValue($event)\">\n  <mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">\n    Contents for {{tab}} tab\n\n    <button mat-raised-button\n            class=\"example-delete-tab-button\"\n            [disabled]=\"tabs.length === 1\"\n            (click)=\"removeTab(index)\">\n      Delete Tab\n    </button>\n  </mat-tab>\n</mat-tab-group>\n",
            styles: [".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n"]
        })
    ], TabGroupDynamicExample);
    return TabGroupDynamicExample;
}());
export { TabGroupDynamicExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90YWItZ3JvdXAtZHluYW1pYy90YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQzs7R0FFRztBQU1IO0lBTEE7UUFNRSxTQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQWFoQyxDQUFDO0lBWEMsdUNBQU0sR0FBTixVQUFPLGlCQUEwQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QixJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVELDBDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBZFUsc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsdTVCQUE2Qzs7U0FFOUMsQ0FBQztPQUNXLHNCQUFzQixDQWVsQztJQUFELDZCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBkeW5hbWljYWxseSBjaGFuZ2luZyB0YWJzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1keW5hbWljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1keW5hbWljLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cER5bmFtaWNFeGFtcGxlIHtcbiAgdGFicyA9IFsnRmlyc3QnLCAnU2Vjb25kJywgJ1RoaXJkJ107XG4gIHNlbGVjdGVkID0gbmV3IEZvcm1Db250cm9sKDApO1xuXG4gIGFkZFRhYihzZWxlY3RBZnRlckFkZGluZzogYm9vbGVhbikge1xuICAgIHRoaXMudGFicy5wdXNoKCdOZXcnKTtcblxuICAgIGlmIChzZWxlY3RBZnRlckFkZGluZykge1xuICAgICAgdGhpcy5zZWxlY3RlZC5zZXRWYWx1ZSh0aGlzLnRhYnMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVGFiKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnRhYnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuIl19