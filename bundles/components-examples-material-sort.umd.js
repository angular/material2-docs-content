(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/sort')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/sort', ['exports', '@angular/common', '@angular/core', '@angular/material/sort'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.sort = {}), global.ng.common, global.ng.core, global.ng.material.sort));
}(this, (function (exports, i2, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    function SortOverviewExample_tr_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "tr");
            i0__namespace.ɵɵelementStart(1, "td");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "td");
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "td");
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "td");
            i0__namespace.ɵɵtext(8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(9, "td");
            i0__namespace.ɵɵtext(10);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var dessert_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(dessert_r1.name);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(dessert_r1.calories);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(dessert_r1.fat);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(dessert_r1.carbs);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(dessert_r1.protein);
        }
    }
    /**
     * @title Sorting overview
     */
    var SortOverviewExample = /** @class */ (function () {
        function SortOverviewExample() {
            this.desserts = [
                { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
                { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
                { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
                { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
                { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
            ];
            this.sortedData = this.desserts.slice();
        }
        SortOverviewExample.prototype.sortData = function (sort) {
            var data = this.desserts.slice();
            if (!sort.active || sort.direction === '') {
                this.sortedData = data;
                return;
            }
            this.sortedData = data.sort(function (a, b) {
                var isAsc = sort.direction === 'asc';
                switch (sort.active) {
                    case 'name': return compare(a.name, b.name, isAsc);
                    case 'calories': return compare(a.calories, b.calories, isAsc);
                    case 'fat': return compare(a.fat, b.fat, isAsc);
                    case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                    case 'protein': return compare(a.protein, b.protein, isAsc);
                    default: return 0;
                }
            });
        };
        return SortOverviewExample;
    }());
    SortOverviewExample.ɵfac = function SortOverviewExample_Factory(t) { return new (t || SortOverviewExample)(); };
    SortOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SortOverviewExample, selectors: [["sort-overview-example"]], decls: 13, vars: 1, consts: [["matSort", "", 3, "matSortChange"], ["mat-sort-header", "name"], ["mat-sort-header", "calories"], ["mat-sort-header", "fat"], ["mat-sort-header", "carbs"], ["mat-sort-header", "protein"], [4, "ngFor", "ngForOf"]], template: function SortOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "table", 0);
                i0__namespace.ɵɵlistener("matSortChange", function SortOverviewExample_Template_table_matSortChange_0_listener($event) { return ctx.sortData($event); });
                i0__namespace.ɵɵelementStart(1, "tr");
                i0__namespace.ɵɵelementStart(2, "th", 1);
                i0__namespace.ɵɵtext(3, "Dessert (100g)");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "th", 2);
                i0__namespace.ɵɵtext(5, "Calories");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "th", 3);
                i0__namespace.ɵɵtext(7, "Fat (g)");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "th", 4);
                i0__namespace.ɵɵtext(9, "Carbs (g)");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "th", 5);
                i0__namespace.ɵɵtext(11, "Protein (g)");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(12, SortOverviewExample_tr_12_Template, 11, 5, "tr", 6);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(12);
                i0__namespace.ɵɵproperty("ngForOf", ctx.sortedData);
            }
        }, directives: [i1__namespace.MatSort, i1__namespace.MatSortHeader, i2__namespace.NgForOf], styles: [".mat-sort-header-container[_ngcontent-%COMP%] {\n  align-items: center;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SortOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'sort-overview-example', template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert (100g)</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\">Fat (g)</th>\n    <th mat-sort-header=\"carbs\">Carbs (g)</th>\n    <th mat-sort-header=\"protein\">Protein (g)</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n", styles: [".mat-sort-header-container {\n  align-items: center;\n}\n"] }]
            }], function () { return []; }, null);
    })();
    function compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    function SortHarnessExample_tr_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "tr");
            i0__namespace.ɵɵelementStart(1, "td");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "td");
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "td");
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "td");
            i0__namespace.ɵɵtext(8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(9, "td");
            i0__namespace.ɵɵtext(10);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var dessert_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(dessert_r1.name);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(dessert_r1.calories);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(dessert_r1.fat);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(dessert_r1.carbs);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(dessert_r1.protein);
        }
    }
    /**
     * @title Testing with MatSortHarness
     */
    var SortHarnessExample = /** @class */ (function () {
        function SortHarnessExample() {
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
        SortHarnessExample.prototype.sortData = function (sort) {
            var data = this.desserts.slice();
            if (!sort.active || sort.direction === '') {
                this.sortedData = data;
            }
            else {
                this.sortedData = data.sort(function (a, b) {
                    var aValue = a[sort.active];
                    var bValue = b[sort.active];
                    return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
                });
            }
        };
        return SortHarnessExample;
    }());
    SortHarnessExample.ɵfac = function SortHarnessExample_Factory(t) { return new (t || SortHarnessExample)(); };
    SortHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SortHarnessExample, selectors: [["sort-harness-example"]], decls: 13, vars: 2, consts: [["matSort", "", 3, "matSortChange"], ["mat-sort-header", "name"], ["mat-sort-header", "calories"], ["mat-sort-header", "fat", 3, "disabled"], ["mat-sort-header", "carbs"], ["mat-sort-header", "protein"], [4, "ngFor", "ngForOf"]], template: function SortHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "table", 0);
                i0__namespace.ɵɵlistener("matSortChange", function SortHarnessExample_Template_table_matSortChange_0_listener($event) { return ctx.sortData($event); });
                i0__namespace.ɵɵelementStart(1, "tr");
                i0__namespace.ɵɵelementStart(2, "th", 1);
                i0__namespace.ɵɵtext(3, "Dessert");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "th", 2);
                i0__namespace.ɵɵtext(5, "Calories");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "th", 3);
                i0__namespace.ɵɵtext(7, "Fat");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "th", 4);
                i0__namespace.ɵɵtext(9, "Carbs");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "th", 5);
                i0__namespace.ɵɵtext(11, "Protein");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(12, SortHarnessExample_tr_12_Template, 11, 5, "tr", 6);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵproperty("disabled", ctx.disableThirdHeader);
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵproperty("ngForOf", ctx.sortedData);
            }
        }, directives: [i1__namespace.MatSort, i1__namespace.MatSortHeader, i2__namespace.NgForOf], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SortHarnessExample, [{
                type: i0.Component,
                args: [{ selector: 'sort-harness-example', template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\" [disabled]=\"disableThirdHeader\">Fat</th>\n    <th mat-sort-header=\"carbs\">Carbs</th>\n    <th mat-sort-header=\"protein\">Protein</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n" }]
            }], null, null);
    })();

    var EXAMPLES = [
        SortHarnessExample,
        SortOverviewExample,
    ];
    var SortExamplesModule = /** @class */ (function () {
        function SortExamplesModule() {
        }
        return SortExamplesModule;
    }());
    SortExamplesModule.ɵfac = function SortExamplesModule_Factory(t) { return new (t || SortExamplesModule)(); };
    SortExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: SortExamplesModule });
    SortExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.CommonModule,
                i1.MatSortModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SortExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CommonModule,
                            i1.MatSortModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(SortExamplesModule, { declarations: [SortHarnessExample,
                SortOverviewExample], imports: [i2.CommonModule,
                i1.MatSortModule], exports: [SortHarnessExample,
                SortOverviewExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SortExamplesModule = SortExamplesModule;
    exports.SortHarnessExample = SortHarnessExample;
    exports.SortOverviewExample = SortOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-sort.umd.js.map
