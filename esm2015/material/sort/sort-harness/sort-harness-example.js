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
SortHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SortHarnessExample, selectors: [["sort-harness-example"]], decls: 13, vars: 2, consts: [["matSort", "", 3, "matSortChange"], ["mat-sort-header", "name"], ["mat-sort-header", "calories"], ["mat-sort-header", "fat", 3, "disabled"], ["mat-sort-header", "carbs"], ["mat-sort-header", "protein"], [4, "ngFor", "ngForOf"]], template: function SortHarnessExample_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortHarnessExample, [{
        type: Component,
        args: [{
                selector: 'sort-harness-example',
                templateUrl: 'sort-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zb3J0L3NvcnQtaGFybmVzcy9zb3J0LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NvcnQvc29ydC1oYXJuZXNzL3NvcnQtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNTdEMsMEJBQXVDO0lBQ3JDLDBCQUFJO0lBQUEsWUFBZ0I7SUFBQSxpQkFBSztJQUN6QiwwQkFBSTtJQUFBLFlBQW9CO0lBQUEsaUJBQUs7SUFDN0IsMEJBQUk7SUFBQSxZQUFlO0lBQUEsaUJBQUs7SUFDeEIsMEJBQUk7SUFBQSxZQUFpQjtJQUFBLGlCQUFLO0lBQzFCLDBCQUFJO0lBQUEsYUFBbUI7SUFBQSxpQkFBSztJQUM5QixpQkFBSzs7O0lBTEMsZUFBZ0I7SUFBaEIscUNBQWdCO0lBQ2hCLGVBQW9CO0lBQXBCLHlDQUFvQjtJQUNwQixlQUFlO0lBQWYsb0NBQWU7SUFDZixlQUFpQjtJQUFqQixzQ0FBaUI7SUFDakIsZUFBbUI7SUFBbkIsd0NBQW1COztBRFgzQjs7R0FFRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7SUFKL0I7UUFLRSx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFHO1lBQ1QsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDckUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUMxRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUMvRCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUMvRCxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztTQUNyRSxDQUFDO1FBRUYsZUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7S0FlcEM7SUFiQyxRQUFRLENBQUMsSUFBVTtRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25DLE1BQU0sTUFBTSxHQUFJLENBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sTUFBTSxHQUFJLENBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztvRkF4QlUsa0JBQWtCO3FFQUFsQixrQkFBa0I7UUNWL0IsZ0NBQWtEO1FBQW5DLG9IQUFpQixvQkFBZ0IsSUFBQztRQUMvQywwQkFBSTtRQUNGLDZCQUEyQjtRQUFBLHVCQUFPO1FBQUEsaUJBQUs7UUFDdkMsNkJBQStCO1FBQUEsd0JBQVE7UUFBQSxpQkFBSztRQUM1Qyw2QkFBMEQ7UUFBQSxtQkFBRztRQUFBLGlCQUFLO1FBQ2xFLDZCQUE0QjtRQUFBLHFCQUFLO1FBQUEsaUJBQUs7UUFDdEMsOEJBQThCO1FBQUEsd0JBQU87UUFBQSxpQkFBSztRQUM1QyxpQkFBSztRQUVMLG9FQU1LO1FBQ1AsaUJBQVE7O1FBWnNCLGVBQStCO1FBQS9CLGlEQUErQjtRQUtuQyxlQUFhO1FBQWIsd0NBQWE7O3VGREMxQixrQkFBa0I7Y0FKOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0U29ydEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29ydC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NvcnQtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTb3J0SGFybmVzc0V4YW1wbGUge1xuICBkaXNhYmxlVGhpcmRIZWFkZXIgPSBmYWxzZTtcbiAgZGVzc2VydHMgPSBbXG4gICAge25hbWU6ICdGcm96ZW4geW9ndXJ0JywgY2Fsb3JpZXM6IDE1OSwgZmF0OiA2LCBjYXJiczogMjQsIHByb3RlaW46IDR9LFxuICAgIHtuYW1lOiAnSWNlIGNyZWFtIHNhbmR3aWNoJywgY2Fsb3JpZXM6IDIzNywgZmF0OiA5LCBjYXJiczogMzcsIHByb3RlaW46IDR9LFxuICAgIHtuYW1lOiAnRWNsYWlyJywgY2Fsb3JpZXM6IDI2MiwgZmF0OiAxNiwgY2FyYnM6IDI0LCBwcm90ZWluOiA2fSxcbiAgICB7bmFtZTogJ0N1cGNha2UnLCBjYWxvcmllczogMzA1LCBmYXQ6IDQsIGNhcmJzOiA2NywgcHJvdGVpbjogNH0sXG4gICAge25hbWU6ICdHaW5nZXJicmVhZCcsIGNhbG9yaWVzOiAzNTYsIGZhdDogMTYsIGNhcmJzOiA0OSwgcHJvdGVpbjogNH0sXG4gIF07XG5cbiAgc29ydGVkRGF0YSA9IHRoaXMuZGVzc2VydHMuc2xpY2UoKTtcblxuICBzb3J0RGF0YShzb3J0OiBTb3J0KSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGVzc2VydHMuc2xpY2UoKTtcblxuICAgIGlmICghc29ydC5hY3RpdmUgfHwgc29ydC5kaXJlY3Rpb24gPT09ICcnKSB7XG4gICAgICB0aGlzLnNvcnRlZERhdGEgPSBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnRlZERhdGEgPSBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgYVZhbHVlID0gKGEgYXMgYW55KVtzb3J0LmFjdGl2ZV07XG4gICAgICAgIGNvbnN0IGJWYWx1ZSA9IChiIGFzIGFueSlbc29ydC5hY3RpdmVdO1xuICAgICAgICByZXR1cm4gKGFWYWx1ZSA8IGJWYWx1ZSA/IC0xIDogMSkgKiAoc29ydC5kaXJlY3Rpb24gPT09ICdhc2MnID8gMSA6IC0xKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiPHRhYmxlIG1hdFNvcnQgKG1hdFNvcnRDaGFuZ2UpPVwic29ydERhdGEoJGV2ZW50KVwiPlxuICA8dHI+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cIm5hbWVcIj5EZXNzZXJ0PC90aD5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwiY2Fsb3JpZXNcIj5DYWxvcmllczwvdGg+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cImZhdFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlVGhpcmRIZWFkZXJcIj5GYXQ8L3RoPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJjYXJic1wiPkNhcmJzPC90aD5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwicHJvdGVpblwiPlByb3RlaW48L3RoPlxuICA8L3RyPlxuXG4gIDx0ciAqbmdGb3I9XCJsZXQgZGVzc2VydCBvZiBzb3J0ZWREYXRhXCI+XG4gICAgPHRkPnt7ZGVzc2VydC5uYW1lfX08L3RkPlxuICAgIDx0ZD57e2Rlc3NlcnQuY2Fsb3JpZXN9fTwvdGQ+XG4gICAgPHRkPnt7ZGVzc2VydC5mYXR9fTwvdGQ+XG4gICAgPHRkPnt7ZGVzc2VydC5jYXJic319PC90ZD5cbiAgICA8dGQ+e3tkZXNzZXJ0LnByb3RlaW59fTwvdGQ+XG4gIDwvdHI+XG48L3RhYmxlPlxuIl19