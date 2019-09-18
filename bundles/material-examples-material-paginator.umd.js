(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/input'), require('@angular/material/paginator')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/paginator', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/input', '@angular/material/paginator'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.paginator = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.input, global.ng.material.paginator));
}(this, function (exports, common, core, forms, input, paginator) { 'use strict';

    /**
     * @title Configurable paginator
     */
    var PaginatorConfigurableExample = /** @class */ (function () {
        function PaginatorConfigurableExample() {
            // MatPaginator Inputs
            this.length = 100;
            this.pageSize = 10;
            this.pageSizeOptions = [5, 10, 25, 100];
        }
        PaginatorConfigurableExample.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
        };
        PaginatorConfigurableExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'paginator-configurable-example',
                        template: "<mat-form-field>\n  List length:\n  <input matInput [(ngModel)]=\"length\">\n</mat-form-field>\n\n<mat-form-field>\n  Page size:\n  <input matInput [(ngModel)]=\"pageSize\">\n</mat-form-field>\n<mat-form-field>\n  Page size options:\n  <input matInput\n         [ngModel]=\"pageSizeOptions\"\n         (ngModelChange)=\"setPageSizeOptions($event)\">\n</mat-form-field>\n\n<mat-paginator [length]=\"length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"\n              (page)=\"pageEvent = $event\">\n</mat-paginator>\n\n<div *ngIf=\"pageEvent\">\n  <h5>Page Change Event Properties</h5>\n  <div>List length: {{pageEvent.length}}</div>\n  <div>Page size: {{pageEvent.pageSize}}</div>\n  <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>\n",
                        styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                    }] }
        ];
        return PaginatorConfigurableExample;
    }());

    /**
     * @title Paginator
     */
    var PaginatorOverviewExample = /** @class */ (function () {
        function PaginatorOverviewExample() {
        }
        PaginatorOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'paginator-overview-example',
                        template: "<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\">\n</mat-paginator>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return PaginatorOverviewExample;
    }());

    var EXAMPLES = [
        PaginatorConfigurableExample,
        PaginatorOverviewExample,
    ];
    var PaginatorExamplesModule = /** @class */ (function () {
        function PaginatorExamplesModule() {
        }
        PaginatorExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            input.MatInputModule,
                            paginator.MatPaginatorModule,
                            forms.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return PaginatorExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PaginatorConfigurableExample = PaginatorConfigurableExample;
    exports.PaginatorOverviewExample = PaginatorOverviewExample;
    exports.PaginatorExamplesModule = PaginatorExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-paginator.umd.js.map
