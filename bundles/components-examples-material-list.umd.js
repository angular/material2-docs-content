(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/icon'), require('@angular/material/list'), require('@angular/material/divider'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/list', ['exports', '@angular/common', '@angular/core', '@angular/material/icon', '@angular/material/list', '@angular/material/divider', '@angular/material/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.list = {}), global.ng.common, global.ng.core, global.ng.material.icon, global.ng.material.list, global.ng.material.divider, global.ng.material.core));
}(this, (function (exports, i2, i0, i4, i1, i3, i5) { 'use strict';

    /**
     * @title Basic list
     */
    var ListOverviewExample = /** @class */ (function () {
        function ListOverviewExample() {
        }
        return ListOverviewExample;
    }());
    ListOverviewExample.ɵfac = function ListOverviewExample_Factory(t) { return new (t || ListOverviewExample)(); };
    ListOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListOverviewExample, selectors: [["list-overview-example"]], decls: 7, vars: 0, consts: [["role", "list"], ["role", "listitem"]], template: function ListOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-list", 0);
                i0.ɵɵelementStart(1, "mat-list-item", 1);
                i0.ɵɵtext(2, "Item 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-list-item", 1);
                i0.ɵɵtext(4, "Item 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-list-item", 1);
                i0.ɵɵtext(6, "Item 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatList, i1.MatListItem], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'list-overview-example',
                        templateUrl: 'list-overview-example.html',
                    }]
            }], null, null);
    })();

    function ListSectionsExample_mat_list_item_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-list-item");
            i0.ɵɵelementStart(1, "mat-icon", 2);
            i0.ɵɵtext(2, "folder");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 3);
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var folder_r2 = ctx.$implicit;
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(folder_r2.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 2, folder_r2.updated), " ");
        }
    }
    function ListSectionsExample_mat_list_item_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-list-item");
            i0.ɵɵelementStart(1, "mat-icon", 2);
            i0.ɵɵtext(2, "note");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 3);
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var note_r3 = ctx.$implicit;
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(note_r3.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 2, note_r3.updated), " ");
        }
    }
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
        return ListSectionsExample;
    }());
    ListSectionsExample.ɵfac = function ListSectionsExample_Factory(t) { return new (t || ListSectionsExample)(); };
    ListSectionsExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListSectionsExample, selectors: [["list-sections-example"]], decls: 8, vars: 2, consts: [["mat-subheader", ""], [4, "ngFor", "ngForOf"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListSectionsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-list");
                i0.ɵɵelementStart(1, "div", 0);
                i0.ɵɵtext(2, "Folders");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, ListSectionsExample_mat_list_item_3_Template, 8, 4, "mat-list-item", 1);
                i0.ɵɵelement(4, "mat-divider");
                i0.ɵɵelementStart(5, "div", 0);
                i0.ɵɵtext(6, "Notes");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(7, ListSectionsExample_mat_list_item_7_Template, 8, 4, "mat-list-item", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.folders);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.notes);
            }
        }, directives: [i1.MatList, i1.MatListSubheaderCssMatStyler, i2.NgForOf, i3.MatDivider, i1.MatListItem, i4.MatIcon, i1.MatListIconCssMatStyler, i5.MatLine], pipes: [i2.DatePipe], styles: [".mat-list-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListSectionsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'list-sections-example',
                        styleUrls: ['list-sections-example.css'],
                        templateUrl: 'list-sections-example.html',
                    }]
            }], null, null);
    })();

    function ListSelectionExample_mat_list_option_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-list-option");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var shoe_r2 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", shoe_r2, " ");
        }
    }
    /**
     * @title List with selection
     */
    var ListSelectionExample = /** @class */ (function () {
        function ListSelectionExample() {
            this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        }
        return ListSelectionExample;
    }());
    ListSelectionExample.ɵfac = function ListSelectionExample_Factory(t) { return new (t || ListSelectionExample)(); };
    ListSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListSelectionExample, selectors: [["list-selection-example"]], decls: 5, vars: 2, consts: [["shoes", ""], [4, "ngFor", "ngForOf"]], template: function ListSelectionExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-selection-list", null, 0);
                i0.ɵɵtemplate(2, ListSelectionExample_mat_list_option_2_Template, 2, 1, "mat-list-option", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "p");
                i0.ɵɵtext(4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(1);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.typesOfShoes);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1(" Options selected: ", _r0.selectedOptions.selected.length, "\n");
            }
        }, directives: [i1.MatSelectionList, i2.NgForOf, i1.MatListOption], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListSelectionExample, [{
                type: i0.Component,
                args: [{
                        selector: 'list-selection-example',
                        styleUrls: ['list-selection-example.css'],
                        templateUrl: 'list-selection-example.html',
                    }]
            }], null, null);
    })();

    function ListSingleSelectionExample_mat_list_option_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-list-option", 3);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var shoe_r2 = ctx.$implicit;
            i0.ɵɵproperty("value", shoe_r2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", shoe_r2, " ");
        }
    }
    /**
     * @title List with single selection
     */
    var ListSingleSelectionExample = /** @class */ (function () {
        function ListSingleSelectionExample() {
            this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        }
        return ListSingleSelectionExample;
    }());
    ListSingleSelectionExample.ɵfac = function ListSingleSelectionExample_Factory(t) { return new (t || ListSingleSelectionExample)(); };
    ListSingleSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListSingleSelectionExample, selectors: [["list-single-selection-example"]], decls: 5, vars: 3, consts: [[3, "multiple"], ["shoes", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ListSingleSelectionExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-selection-list", 0, 1);
                i0.ɵɵtemplate(2, ListSingleSelectionExample_mat_list_option_2_Template, 2, 2, "mat-list-option", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "p");
                i0.ɵɵtext(4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(1);
                i0.ɵɵproperty("multiple", false);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.typesOfShoes);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1(" Option selected: ", _r0.selectedOptions.selected[0] == null ? null : _r0.selectedOptions.selected[0].value, "\n");
            }
        }, directives: [i1.MatSelectionList, i2.NgForOf, i1.MatListOption], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListSingleSelectionExample, [{
                type: i0.Component,
                args: [{
                        selector: 'list-single-selection-example',
                        styleUrls: ['list-single-selection-example.css'],
                        templateUrl: 'list-single-selection-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatListHarness
     */
    var ListHarnessExample = /** @class */ (function () {
        function ListHarnessExample() {
        }
        return ListHarnessExample;
    }());
    ListHarnessExample.ɵfac = function ListHarnessExample_Factory(t) { return new (t || ListHarnessExample)(); };
    ListHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListHarnessExample, selectors: [["list-harness-example"]], decls: 19, vars: 0, consts: [["matLine", ""], ["matListIcon", ""], ["matListAvatar", ""], ["matSubheader", ""], ["mat-list-item", ""]], template: function ListHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-list");
                i0.ɵɵelementStart(1, "mat-list-item");
                i0.ɵɵelementStart(2, "div", 0);
                i0.ɵɵtext(3, "Item ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 0);
                i0.ɵɵtext(5, "1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 1);
                i0.ɵɵtext(7, "icon");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "div", 2);
                i0.ɵɵtext(9, "Avatar");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "div", 3);
                i0.ɵɵtext(11, "Section 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "a", 4);
                i0.ɵɵelementStart(13, "span");
                i0.ɵɵtext(14, "Item 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "button", 4);
                i0.ɵɵtext(16, "Item 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "div", 3);
                i0.ɵɵtext(18, "Section 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatList, i1.MatListItem, i5.MatLine, i1.MatListIconCssMatStyler, i1.MatListAvatarCssMatStyler, i1.MatListSubheaderCssMatStyler], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'list-harness-example',
                        templateUrl: 'list-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        ListHarnessExample,
        ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
        ListSingleSelectionExample,
    ];
    var ListExamplesModule = /** @class */ (function () {
        function ListExamplesModule() {
        }
        return ListExamplesModule;
    }());
    ListExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ListExamplesModule });
    ListExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ListExamplesModule_Factory(t) { return new (t || ListExamplesModule)(); }, imports: [[
                i2.CommonModule,
                i4.MatIconModule,
                i1.MatListModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ListExamplesModule, { declarations: [ListHarnessExample,
                ListOverviewExample,
                ListSectionsExample,
                ListSelectionExample,
                ListSingleSelectionExample], imports: [i2.CommonModule,
                i4.MatIconModule,
                i1.MatListModule], exports: [ListHarnessExample,
                ListOverviewExample,
                ListSectionsExample,
                ListSelectionExample,
                ListSingleSelectionExample] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CommonModule,
                            i4.MatIconModule,
                            i1.MatListModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ListExamplesModule = ListExamplesModule;
    exports.ListHarnessExample = ListHarnessExample;
    exports.ListOverviewExample = ListOverviewExample;
    exports.ListSectionsExample = ListSectionsExample;
    exports.ListSelectionExample = ListSelectionExample;
    exports.ListSingleSelectionExample = ListSingleSelectionExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-list.umd.js.map
