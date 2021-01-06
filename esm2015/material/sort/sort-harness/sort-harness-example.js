import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sort";
import * as i2 from "@angular/common";
function SortHarnessExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dessert_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r1.calories);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r1.fat);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r1.carbs);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r1.protein);
} }
/**
 * @title Testing with MatSortHarness
 */
export class SortHarnessExample {
    constructor() {
        this.disableThirdHeader = false;
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    sortData(sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
        }
        else {
            this.sortedData = data.sort((a, b) => {
                const aValue = a[sort.active];
                const bValue = b[sort.active];
                return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
            });
        }
    }
}
SortHarnessExample.ɵfac = function SortHarnessExample_Factory(t) { return new (t || SortHarnessExample)(); };
SortHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: SortHarnessExample, selectors: [["sort-harness-example"]], decls: 13, vars: 2, consts: [["matSort", "", 3, "matSortChange"], ["mat-sort-header", "name"], ["mat-sort-header", "calories"], ["mat-sort-header", "fat", 3, "disabled"], ["mat-sort-header", "carbs"], ["mat-sort-header", "protein"], [4, "ngFor", "ngForOf"]], template: function SortHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵlistener("matSortChange", function SortHarnessExample_Template_table_matSortChange_0_listener($event) { return ctx.sortData($event); });
        i0.ɵɵelementStart(1, "tr");
        i0.ɵɵelementStart(2, "th", 1);
        i0.ɵɵtext(3, "Dessert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "th", 2);
        i0.ɵɵtext(5, "Calories");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "th", 3);
        i0.ɵɵtext(7, "Fat");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "th", 4);
        i0.ɵɵtext(9, "Carbs");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "th", 5);
        i0.ɵɵtext(11, "Protein");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, SortHarnessExample_tr_12_Template, 11, 5, "tr", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("disabled", ctx.disableThirdHeader);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.sortedData);
    } }, directives: [i1.MatSort, i1.MatSortHeader, i2.NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SortHarnessExample, [{
        type: Component,
        args: [{
                selector: 'sort-harness-example',
                templateUrl: 'sort-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zb3J0L3NvcnQtaGFybmVzcy9zb3J0LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NvcnQvc29ydC1oYXJuZXNzL3NvcnQtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNTdEMsMEJBQ0U7SUFBQSwwQkFBSTtJQUFBLFlBQWdCO0lBQUEsaUJBQUs7SUFDekIsMEJBQUk7SUFBQSxZQUFvQjtJQUFBLGlCQUFLO0lBQzdCLDBCQUFJO0lBQUEsWUFBZTtJQUFBLGlCQUFLO0lBQ3hCLDBCQUFJO0lBQUEsWUFBaUI7SUFBQSxpQkFBSztJQUMxQiwwQkFBSTtJQUFBLGFBQW1CO0lBQUEsaUJBQUs7SUFDOUIsaUJBQUs7OztJQUxDLGVBQWdCO0lBQWhCLHFDQUFnQjtJQUNoQixlQUFvQjtJQUFwQix5Q0FBb0I7SUFDcEIsZUFBZTtJQUFmLG9DQUFlO0lBQ2YsZUFBaUI7SUFBakIsc0NBQWlCO0lBQ2pCLGVBQW1CO0lBQW5CLHdDQUFtQjs7QURYM0I7O0dBRUc7QUFLSCxNQUFNLE9BQU8sa0JBQWtCO0lBSi9CO1FBS0UsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBRztZQUNULEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDO1lBQ3JFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDMUUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDL0QsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDL0QsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7U0FDckUsQ0FBQztRQUVGLGVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBZXBDO0lBYkMsUUFBUSxDQUFDLElBQVU7UUFDakIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuQyxNQUFNLE1BQU0sR0FBSSxDQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxNQUFNLE1BQU0sR0FBSSxDQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7b0ZBeEJVLGtCQUFrQjt1REFBbEIsa0JBQWtCO1FDVi9CLGdDQUNFO1FBRGEsb0hBQWlCLG9CQUFnQixJQUFDO1FBQy9DLDBCQUNFO1FBQUEsNkJBQTJCO1FBQUEsdUJBQU87UUFBQSxpQkFBSztRQUN2Qyw2QkFBK0I7UUFBQSx3QkFBUTtRQUFBLGlCQUFLO1FBQzVDLDZCQUEwRDtRQUFBLG1CQUFHO1FBQUEsaUJBQUs7UUFDbEUsNkJBQTRCO1FBQUEscUJBQUs7UUFBQSxpQkFBSztRQUN0Qyw4QkFBOEI7UUFBQSx3QkFBTztRQUFBLGlCQUFLO1FBQzVDLGlCQUFLO1FBRUwsb0VBTUs7UUFDUCxpQkFBUTs7UUFac0IsZUFBK0I7UUFBL0IsaURBQStCO1FBS25DLGVBQWE7UUFBYix3Q0FBYTs7a0REQzFCLGtCQUFrQjtjQUo5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRTb3J0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb3J0LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc29ydC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRIYXJuZXNzRXhhbXBsZSB7XG4gIGRpc2FibGVUaGlyZEhlYWRlciA9IGZhbHNlO1xuICBkZXNzZXJ0cyA9IFtcbiAgICB7bmFtZTogJ0Zyb3plbiB5b2d1cnQnLCBjYWxvcmllczogMTU5LCBmYXQ6IDYsIGNhcmJzOiAyNCwgcHJvdGVpbjogNH0sXG4gICAge25hbWU6ICdJY2UgY3JlYW0gc2FuZHdpY2gnLCBjYWxvcmllczogMjM3LCBmYXQ6IDksIGNhcmJzOiAzNywgcHJvdGVpbjogNH0sXG4gICAge25hbWU6ICdFY2xhaXInLCBjYWxvcmllczogMjYyLCBmYXQ6IDE2LCBjYXJiczogMjQsIHByb3RlaW46IDZ9LFxuICAgIHtuYW1lOiAnQ3VwY2FrZScsIGNhbG9yaWVzOiAzMDUsIGZhdDogNCwgY2FyYnM6IDY3LCBwcm90ZWluOiA0fSxcbiAgICB7bmFtZTogJ0dpbmdlcmJyZWFkJywgY2Fsb3JpZXM6IDM1NiwgZmF0OiAxNiwgY2FyYnM6IDQ5LCBwcm90ZWluOiA0fSxcbiAgXTtcblxuICBzb3J0ZWREYXRhID0gdGhpcy5kZXNzZXJ0cy5zbGljZSgpO1xuXG4gIHNvcnREYXRhKHNvcnQ6IFNvcnQpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kZXNzZXJ0cy5zbGljZSgpO1xuXG4gICAgaWYgKCFzb3J0LmFjdGl2ZSB8fCBzb3J0LmRpcmVjdGlvbiA9PT0gJycpIHtcbiAgICAgIHRoaXMuc29ydGVkRGF0YSA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydGVkRGF0YSA9IGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBhVmFsdWUgPSAoYSBhcyBhbnkpW3NvcnQuYWN0aXZlXTtcbiAgICAgICAgY29uc3QgYlZhbHVlID0gKGIgYXMgYW55KVtzb3J0LmFjdGl2ZV07XG4gICAgICAgIHJldHVybiAoYVZhbHVlIDwgYlZhbHVlID8gLTEgOiAxKSAqIChzb3J0LmRpcmVjdGlvbiA9PT0gJ2FzYycgPyAxIDogLTEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCI8dGFibGUgbWF0U29ydCAobWF0U29ydENoYW5nZSk9XCJzb3J0RGF0YSgkZXZlbnQpXCI+XG4gIDx0cj5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwibmFtZVwiPkRlc3NlcnQ8L3RoPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJjYWxvcmllc1wiPkNhbG9yaWVzPC90aD5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwiZmF0XCIgW2Rpc2FibGVkXT1cImRpc2FibGVUaGlyZEhlYWRlclwiPkZhdDwvdGg+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cImNhcmJzXCI+Q2FyYnM8L3RoPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJwcm90ZWluXCI+UHJvdGVpbjwvdGg+XG4gIDwvdHI+XG5cbiAgPHRyICpuZ0Zvcj1cImxldCBkZXNzZXJ0IG9mIHNvcnRlZERhdGFcIj5cbiAgICA8dGQ+e3tkZXNzZXJ0Lm5hbWV9fTwvdGQ+XG4gICAgPHRkPnt7ZGVzc2VydC5jYWxvcmllc319PC90ZD5cbiAgICA8dGQ+e3tkZXNzZXJ0LmZhdH19PC90ZD5cbiAgICA8dGQ+e3tkZXNzZXJ0LmNhcmJzfX08L3RkPlxuICAgIDx0ZD57e2Rlc3NlcnQucHJvdGVpbn19PC90ZD5cbiAgPC90cj5cbjwvdGFibGU+XG4iXX0=