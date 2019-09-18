(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/sort')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/sort', ['exports', '@angular/common', '@angular/core', '@angular/material/sort'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.sort = {}), global.ng.common, global.ng.core, global.ng.material.sort));
}(this, function (exports, common, core, sort) { 'use strict';

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
        SortOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'sort-overview-example',
                        template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert (100g)</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\">Fat (g)</th>\n    <th mat-sort-header=\"carbs\">Carbs (g)</th>\n    <th mat-sort-header=\"protein\">Protein (g)</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n",
                        styles: [".mat-sort-header-container {\n  align-items: center;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SortOverviewExample.ctorParameters = function () { return []; };
        return SortOverviewExample;
    }());
    function compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    var EXAMPLES = [
        SortOverviewExample,
    ];
    var SortExamplesModule = /** @class */ (function () {
        function SortExamplesModule() {
        }
        SortExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            sort.MatSortModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return SortExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SortOverviewExample = SortOverviewExample;
    exports.SortExamplesModule = SortExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-sort.umd.js.map
