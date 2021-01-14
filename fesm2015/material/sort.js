import { NgForOf, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵdefineComponent, ɵɵlistener, ɵɵtemplate, ɵɵproperty, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';

function SortOverviewExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "td");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "td");
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "td");
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const dessert_r1 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(dessert_r1.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(dessert_r1.calories);
    ɵɵadvance(2);
    ɵɵtextInterpolate(dessert_r1.fat);
    ɵɵadvance(2);
    ɵɵtextInterpolate(dessert_r1.carbs);
    ɵɵadvance(2);
    ɵɵtextInterpolate(dessert_r1.protein);
} }
/**
 * @title Sorting overview
 */
class SortOverviewExample {
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
    sortData(sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(a.calories, b.calories, isAsc);
                case 'fat': return compare(a.fat, b.fat, isAsc);
                case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                case 'protein': return compare(a.protein, b.protein, isAsc);
                default: return 0;
            }
        });
    }
}
SortOverviewExample.ɵfac = function SortOverviewExample_Factory(t) { return new (t || SortOverviewExample)(); };
SortOverviewExample.ɵcmp = ɵɵdefineComponent({ type: SortOverviewExample, selectors: [["sort-overview-example"]], decls: 13, vars: 1, consts: [["matSort", "", 3, "matSortChange"], ["mat-sort-header", "name"], ["mat-sort-header", "calories"], ["mat-sort-header", "fat"], ["mat-sort-header", "carbs"], ["mat-sort-header", "protein"], [4, "ngFor", "ngForOf"]], template: function SortOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵlistener("matSortChange", function SortOverviewExample_Template_table_matSortChange_0_listener($event) { return ctx.sortData($event); });
        ɵɵelementStart(1, "tr");
        ɵɵelementStart(2, "th", 1);
        ɵɵtext(3, "Dessert (100g)");
        ɵɵelementEnd();
        ɵɵelementStart(4, "th", 2);
        ɵɵtext(5, "Calories");
        ɵɵelementEnd();
        ɵɵelementStart(6, "th", 3);
        ɵɵtext(7, "Fat (g)");
        ɵɵelementEnd();
        ɵɵelementStart(8, "th", 4);
        ɵɵtext(9, "Carbs (g)");
        ɵɵelementEnd();
        ɵɵelementStart(10, "th", 5);
        ɵɵtext(11, "Protein (g)");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(12, SortOverviewExample_tr_12_Template, 11, 5, "tr", 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(12);
        ɵɵproperty("ngForOf", ctx.sortedData);
    } }, directives: [MatSort, MatSortHeader, NgForOf], styles: [".mat-sort-header-container[_ngcontent-%COMP%] {\n  align-items: center;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SortOverviewExample, [{
        type: Component,
        args: [{
                selector: 'sort-overview-example',
                templateUrl: 'sort-overview-example.html',
                styleUrls: ['sort-overview-example.css'],
            }]
    }], function () { return []; }, null); })();
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function SortHarnessExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "td");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "td");
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "td");
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const dessert_r1 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(dessert_r1.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(dessert_r1.calories);
    ɵɵadvance(2);
    ɵɵtextInterpolate(dessert_r1.fat);
    ɵɵadvance(2);
    ɵɵtextInterpolate(dessert_r1.carbs);
    ɵɵadvance(2);
    ɵɵtextInterpolate(dessert_r1.protein);
} }
/**
 * @title Testing with MatSortHarness
 */
class SortHarnessExample {
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
SortHarnessExample.ɵcmp = ɵɵdefineComponent({ type: SortHarnessExample, selectors: [["sort-harness-example"]], decls: 13, vars: 2, consts: [["matSort", "", 3, "matSortChange"], ["mat-sort-header", "name"], ["mat-sort-header", "calories"], ["mat-sort-header", "fat", 3, "disabled"], ["mat-sort-header", "carbs"], ["mat-sort-header", "protein"], [4, "ngFor", "ngForOf"]], template: function SortHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵlistener("matSortChange", function SortHarnessExample_Template_table_matSortChange_0_listener($event) { return ctx.sortData($event); });
        ɵɵelementStart(1, "tr");
        ɵɵelementStart(2, "th", 1);
        ɵɵtext(3, "Dessert");
        ɵɵelementEnd();
        ɵɵelementStart(4, "th", 2);
        ɵɵtext(5, "Calories");
        ɵɵelementEnd();
        ɵɵelementStart(6, "th", 3);
        ɵɵtext(7, "Fat");
        ɵɵelementEnd();
        ɵɵelementStart(8, "th", 4);
        ɵɵtext(9, "Carbs");
        ɵɵelementEnd();
        ɵɵelementStart(10, "th", 5);
        ɵɵtext(11, "Protein");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(12, SortHarnessExample_tr_12_Template, 11, 5, "tr", 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(6);
        ɵɵproperty("disabled", ctx.disableThirdHeader);
        ɵɵadvance(6);
        ɵɵproperty("ngForOf", ctx.sortedData);
    } }, directives: [MatSort, MatSortHeader, NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SortHarnessExample, [{
        type: Component,
        args: [{
                selector: 'sort-harness-example',
                templateUrl: 'sort-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    SortHarnessExample,
    SortOverviewExample,
];
class SortExamplesModule {
}
SortExamplesModule.ɵmod = ɵɵdefineNgModule({ type: SortExamplesModule });
SortExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function SortExamplesModule_Factory(t) { return new (t || SortExamplesModule)(); }, imports: [[
            CommonModule,
            MatSortModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SortExamplesModule, { declarations: [SortHarnessExample,
        SortOverviewExample], imports: [CommonModule,
        MatSortModule], exports: [SortHarnessExample,
        SortOverviewExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SortExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatSortModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SortExamplesModule, SortHarnessExample, SortOverviewExample };
//# sourceMappingURL=sort.js.map
