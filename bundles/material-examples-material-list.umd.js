(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/icon'), require('@angular/material/list')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/list', ['exports', '@angular/common', '@angular/core', '@angular/material/icon', '@angular/material/list'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.list = {}), global.ng.common, global.ng.core, global.ng.material.icon, global.ng.material.list));
}(this, function (exports, common, core, icon, list) { 'use strict';

    /**
     * @title Basic list
     */
    var ListOverviewExample = /** @class */ (function () {
        function ListOverviewExample() {
        }
        ListOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'list-overview-example',
                        template: "<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return ListOverviewExample;
    }());

    /**
     * @title List with sections
     */
    var ListSectionsExample = /** @class */ (function () {
        function ListSectionsExample() {
            this.folders = [
                {
                    name: 'Photos',
                    updated: new Date('1/1/16'),
                },
                {
                    name: 'Recipes',
                    updated: new Date('1/17/16'),
                },
                {
                    name: 'Work',
                    updated: new Date('1/28/16'),
                }
            ];
            this.notes = [
                {
                    name: 'Vacation Itinerary',
                    updated: new Date('2/20/16'),
                },
                {
                    name: 'Kitchen Remodel',
                    updated: new Date('1/18/16'),
                }
            ];
        }
        ListSectionsExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'list-sections-example',
                        template: "<mat-list>\n  <h3 mat-subheader>Folders</h3>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>{{folder.name}}</h4>\n    <p mat-line> {{folder.updated | date}} </p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Notes</h3>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <h4 mat-line>{{note.name}}</h4>\n    <p mat-line> {{note.updated | date}} </p>\n  </mat-list-item>\n</mat-list>\n",
                        styles: [".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"]
                    }] }
        ];
        return ListSectionsExample;
    }());

    /**
     * @title List with selection
     */
    var ListSelectionExample = /** @class */ (function () {
        function ListSelectionExample() {
            this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        }
        ListSelectionExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'list-selection-example',
                        template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n",
                        styles: ["/** No styles for this example. */\n"]
                    }] }
        ];
        return ListSelectionExample;
    }());

    var EXAMPLES = [
        ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
    ];
    var ListExamplesModule = /** @class */ (function () {
        function ListExamplesModule() {
        }
        ListExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            icon.MatIconModule,
                            list.MatListModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return ListExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ListOverviewExample = ListOverviewExample;
    exports.ListSectionsExample = ListSectionsExample;
    exports.ListSelectionExample = ListSelectionExample;
    exports.ListExamplesModule = ListExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-list.umd.js.map
