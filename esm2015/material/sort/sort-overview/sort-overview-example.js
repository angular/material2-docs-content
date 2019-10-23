/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sort";
import * as i2 from "@angular/common";
function SortOverviewExample_tr_12_Template(rf, ctx) { if (rf & 1) {
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
 * @record
 */
export function Dessert() { }
if (false) {
    /** @type {?} */
    Dessert.prototype.calories;
    /** @type {?} */
    Dessert.prototype.carbs;
    /** @type {?} */
    Dessert.prototype.fat;
    /** @type {?} */
    Dessert.prototype.name;
    /** @type {?} */
    Dessert.prototype.protein;
}
/**
 * \@title Sorting overview
 */
export class SortOverviewExample {
    constructor() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    sortData(sort) {
        /** @type {?} */
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            /** @type {?} */
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(a.calories, b.calories, isAsc);
                case 'fat': return compare(a.fat, b.fat, isAsc);
                case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                case 'protein': return compare(a.protein, b.protein, isAsc);
                default: return 0;
            }
        }));
    }
}
SortOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'sort-overview-example',
                templateUrl: 'sort-overview-example.html',
                styleUrls: ['sort-overview-example.css'],
            },] },
];
/** @nocollapse */
SortOverviewExample.ctorParameters = () => [];
/** @nocollapse */ SortOverviewExample.ɵfac = function SortOverviewExample_Factory(t) { return new (t || SortOverviewExample)(); };
/** @nocollapse */ SortOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SortOverviewExample, selectors: [["sort-overview-example"]], decls: 13, vars: 1, consts: [["matSort", "", 3, "matSortChange"], ["mat-sort-header", "name"], ["mat-sort-header", "calories"], ["mat-sort-header", "fat"], ["mat-sort-header", "carbs"], ["mat-sort-header", "protein"], [4, "ngFor", "ngForOf"]], template: function SortOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵlistener("matSortChange", function SortOverviewExample_Template_table_matSortChange_0_listener($event) { return ctx.sortData($event); });
        i0.ɵɵelementStart(1, "tr");
        i0.ɵɵelementStart(2, "th", 1);
        i0.ɵɵtext(3, "Dessert (100g)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "th", 2);
        i0.ɵɵtext(5, "Calories");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "th", 3);
        i0.ɵɵtext(7, "Fat (g)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "th", 4);
        i0.ɵɵtext(9, "Carbs (g)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "th", 5);
        i0.ɵɵtext(11, "Protein (g)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, SortOverviewExample_tr_12_Template, 11, 5, "tr", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("ngForOf", ctx.sortedData);
    } }, directives: [i1.MatSort, i1.MatSortHeader, i2.NgForOf], styles: [".mat-sort-header-container[_ngcontent-%COMP%] {\n  align-items: center;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(SortOverviewExample, [{
        type: Component,
        args: [{
                selector: 'sort-overview-example',
                templateUrl: 'sort-overview-example.html',
                styleUrls: ['sort-overview-example.css'],
            }]
    }], function () { return []; }, null);
if (false) {
    /** @type {?} */
    SortOverviewExample.prototype.desserts;
    /** @type {?} */
    SortOverviewExample.prototype.sortedData;
}
/**
 * @param {?} a
 * @param {?} b
 * @param {?} isAsc
 * @return {?}
 */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3NvcnQvc29ydC1vdmVydmlldy9zb3J0LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc29ydC9zb3J0LW92ZXJ2aWV3L3NvcnQtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ1N0QywwQkFDRTtJQUFBLDBCQUFJO0lBQUEsWUFBZ0I7SUFBQSxpQkFBSztJQUN6QiwwQkFBSTtJQUFBLFlBQW9CO0lBQUEsaUJBQUs7SUFDN0IsMEJBQUk7SUFBQSxZQUFlO0lBQUEsaUJBQUs7SUFDeEIsMEJBQUk7SUFBQSxZQUFpQjtJQUFBLGlCQUFLO0lBQzFCLDBCQUFJO0lBQUEsYUFBbUI7SUFBQSxpQkFBSztJQUM5QixpQkFBSzs7O0lBTEMsZUFBZ0I7SUFBaEIscUNBQWdCO0lBQ2hCLGVBQW9CO0lBQXBCLHlDQUFvQjtJQUNwQixlQUFlO0lBQWYsb0NBQWU7SUFDZixlQUFpQjtJQUFqQixzQ0FBaUI7SUFDakIsZUFBbUI7SUFBbkIsd0NBQW1COzs7OztBRFgzQiw2QkFNQzs7O0lBTEMsMkJBQWlCOztJQUNqQix3QkFBYzs7SUFDZCxzQkFBWTs7SUFDWix1QkFBYTs7SUFDYiwwQkFBZ0I7Ozs7O0FBV2xCLE1BQU0sT0FBTyxtQkFBbUI7SUFXOUI7UUFWQSxhQUFRLEdBQWM7WUFDcEIsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVB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UUFFTCxxRUFDRTtRQU1KLGlCQUFROztRQVBGLGdCQUFrQztRQUFsQyx3Q0FBa0M7O21DRFUzQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDOzs7O0lBRUMsdUNBTUU7O0lBRUYseUNBQXNCOzs7Ozs7OztBQTJCeEIsU0FBUyxPQUFPLENBQUMsQ0FBa0IsRUFBRSxDQUFrQixFQUFFLEtBQWM7SUFDckUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlc3NlcnQge1xuICBjYWxvcmllczogbnVtYmVyO1xuICBjYXJiczogbnVtYmVyO1xuICBmYXQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBwcm90ZWluOiBudW1iZXI7XG59XG5cbi8qKlxuICogQHRpdGxlIFNvcnRpbmcgb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29ydC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzb3J0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzb3J0LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRPdmVydmlld0V4YW1wbGUge1xuICBkZXNzZXJ0czogRGVzc2VydFtdID0gW1xuICAgIHtuYW1lOiAnRnJvemVuIHlvZ3VydCcsIGNhbG9yaWVzOiAxNTksIGZhdDogNiwgY2FyYnM6IDI0LCBwcm90ZWluOiA0fSxcbiAgICB7bmFtZTogJ0ljZSBjcmVhbSBzYW5kd2ljaCcsIGNhbG9yaWVzOiAyMzcsIGZhdDogOSwgY2FyYnM6IDM3LCBwcm90ZWluOiA0fSxcbiAgICB7bmFtZTogJ0VjbGFpcicsIGNhbG9yaWVzOiAyNjIsIGZhdDogMTYsIGNhcmJzOiAyNCwgcHJvdGVpbjogNn0sXG4gICAge25hbWU6ICdDdXBjYWtlJywgY2Fsb3JpZXM6IDMwNSwgZmF0OiA0LCBjYXJiczogNjcsIHByb3RlaW46IDR9LFxuICAgIHtuYW1lOiAnR2luZ2VyYnJlYWQnLCBjYWxvcmllczogMzU2LCBmYXQ6IDE2LCBjYXJiczogNDksIHByb3RlaW46IDR9LFxuICBdO1xuXG4gIHNvcnRlZERhdGE6IERlc3NlcnRbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNvcnRlZERhdGEgPSB0aGlzLmRlc3NlcnRzLnNsaWNlKCk7XG4gIH1cblxuICBzb3J0RGF0YShzb3J0OiBTb3J0KSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGVzc2VydHMuc2xpY2UoKTtcbiAgICBpZiAoIXNvcnQuYWN0aXZlIHx8IHNvcnQuZGlyZWN0aW9uID09PSAnJykge1xuICAgICAgdGhpcy5zb3J0ZWREYXRhID0gZGF0YTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNvcnRlZERhdGEgPSBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGlzQXNjID0gc29ydC5kaXJlY3Rpb24gPT09ICdhc2MnO1xuICAgICAgc3dpdGNoIChzb3J0LmFjdGl2ZSkge1xuICAgICAgICBjYXNlICduYW1lJzogcmV0dXJuIGNvbXBhcmUoYS5uYW1lLCBiLm5hbWUsIGlzQXNjKTtcbiAgICAgICAgY2FzZSAnY2Fsb3JpZXMnOiByZXR1cm4gY29tcGFyZShhLmNhbG9yaWVzLCBiLmNhbG9yaWVzLCBpc0FzYyk7XG4gICAgICAgIGNhc2UgJ2ZhdCc6IHJldHVybiBjb21wYXJlKGEuZmF0LCBiLmZhdCwgaXNBc2MpO1xuICAgICAgICBjYXNlICdjYXJicyc6IHJldHVybiBjb21wYXJlKGEuY2FyYnMsIGIuY2FyYnMsIGlzQXNjKTtcbiAgICAgICAgY2FzZSAncHJvdGVpbic6IHJldHVybiBjb21wYXJlKGEucHJvdGVpbiwgYi5wcm90ZWluLCBpc0FzYyk7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUoYTogbnVtYmVyIHwgc3RyaW5nLCBiOiBudW1iZXIgfCBzdHJpbmcsIGlzQXNjOiBib29sZWFuKSB7XG4gIHJldHVybiAoYSA8IGIgPyAtMSA6IDEpICogKGlzQXNjID8gMSA6IC0xKTtcbn1cbiIsIjx0YWJsZSBtYXRTb3J0IChtYXRTb3J0Q2hhbmdlKT1cInNvcnREYXRhKCRldmVudClcIj5cbiAgPHRyPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJuYW1lXCI+RGVzc2VydCAoMTAwZyk8L3RoPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJjYWxvcmllc1wiPkNhbG9yaWVzPC90aD5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwiZmF0XCI+RmF0IChnKTwvdGg+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cImNhcmJzXCI+Q2FyYnMgKGcpPC90aD5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwicHJvdGVpblwiPlByb3RlaW4gKGcpPC90aD5cbiAgPC90cj5cblxuICA8dHIgKm5nRm9yPVwibGV0IGRlc3NlcnQgb2Ygc29ydGVkRGF0YVwiPlxuICAgIDx0ZD57e2Rlc3NlcnQubmFtZX19PC90ZD5cbiAgICA8dGQ+e3tkZXNzZXJ0LmNhbG9yaWVzfX08L3RkPlxuICAgIDx0ZD57e2Rlc3NlcnQuZmF0fX08L3RkPlxuICAgIDx0ZD57e2Rlc3NlcnQuY2FyYnN9fTwvdGQ+XG4gICAgPHRkPnt7ZGVzc2VydC5wcm90ZWlufX08L3RkPlxuICA8L3RyPlxuPC90YWJsZT5cbiJdfQ==