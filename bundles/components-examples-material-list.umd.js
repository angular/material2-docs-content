(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/icon'), require('@angular/material/list'), require('@angular/material/divider'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/list', ['exports', '@angular/common', '@angular/core', '@angular/material/icon', '@angular/material/list', '@angular/material/divider', '@angular/material/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.list = {}), global.ng.common, global.ng.core, global.ng.material.icon, global.ng.material.list, global.ng.material.divider, global.ng.material.core));
}(this, (function (exports, i2, i0, i4, i1, i3, i5) { 'use strict';

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
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);

    /**
     * @title Basic list
     */
    var ListOverviewExample = /** @class */ (function () {
        function ListOverviewExample() {
        }
        return ListOverviewExample;
    }());
    ListOverviewExample.ɵfac = function ListOverviewExample_Factory(t) { return new (t || ListOverviewExample)(); };
    ListOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ListOverviewExample, selectors: [["list-overview-example"]], decls: 7, vars: 0, consts: [["role", "list"], ["role", "listitem"]], template: function ListOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-list", 0);
                i0__namespace.ɵɵelementStart(1, "mat-list-item", 1);
                i0__namespace.ɵɵtext(2, "Item 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-list-item", 1);
                i0__namespace.ɵɵtext(4, "Item 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-list-item", 1);
                i0__namespace.ɵɵtext(6, "Item 3");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatList, i1__namespace.MatListItem], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ListOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'list-overview-example', template: "<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n" }]
            }], null, null);
    })();

    function ListSectionsExample_mat_list_item_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-list-item");
            i0__namespace.ɵɵelementStart(1, "mat-icon", 2);
            i0__namespace.ɵɵtext(2, "folder");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "div", 3);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "div", 3);
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵpipe(7, "date");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var folder_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(folder_r2.name);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(7, 2, folder_r2.updated), " ");
        }
    }
    function ListSectionsExample_mat_list_item_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-list-item");
            i0__namespace.ɵɵelementStart(1, "mat-icon", 2);
            i0__namespace.ɵɵtext(2, "note");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "div", 3);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "div", 3);
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵpipe(7, "date");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var note_r3 = ctx.$implicit;
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(note_r3.name);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(7, 2, note_r3.updated), " ");
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
    ListSectionsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ListSectionsExample, selectors: [["list-sections-example"]], decls: 8, vars: 2, consts: [["mat-subheader", ""], [4, "ngFor", "ngForOf"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListSectionsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-list");
                i0__namespace.ɵɵelementStart(1, "div", 0);
                i0__namespace.ɵɵtext(2, "Folders");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(3, ListSectionsExample_mat_list_item_3_Template, 8, 4, "mat-list-item", 1);
                i0__namespace.ɵɵelement(4, "mat-divider");
                i0__namespace.ɵɵelementStart(5, "div", 0);
                i0__namespace.ɵɵtext(6, "Notes");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(7, ListSectionsExample_mat_list_item_7_Template, 8, 4, "mat-list-item", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", ctx.folders);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngForOf", ctx.notes);
            }
        }, directives: [i1__namespace.MatList, i1__namespace.MatListSubheaderCssMatStyler, i2__namespace.NgForOf, i3__namespace.MatDivider, i1__namespace.MatListItem, i4__namespace.MatIcon, i1__namespace.MatListIconCssMatStyler, i5__namespace.MatLine], pipes: [i2__namespace.DatePipe], styles: [".mat-list-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ListSectionsExample, [{
                type: i0.Component,
                args: [{ selector: 'list-sections-example', template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <div mat-line>{{folder.name}}</div>\n    <div mat-line> {{folder.updated | date}} </div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <div mat-line>{{note.name}}</div>\n    <div mat-line> {{note.updated | date}} </div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"] }]
            }], null, null);
    })();

    function ListSelectionExample_mat_list_option_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-list-option");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var shoe_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", shoe_r2, " ");
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
    ListSelectionExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ListSelectionExample, selectors: [["list-selection-example"]], decls: 5, vars: 2, consts: [["shoes", ""], [4, "ngFor", "ngForOf"]], template: function ListSelectionExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-selection-list", null, 0);
                i0__namespace.ɵɵtemplate(2, ListSelectionExample_mat_list_option_2_Template, 2, 1, "mat-list-option", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "p");
                i0__namespace.ɵɵtext(4);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(1);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngForOf", ctx.typesOfShoes);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1(" Options selected: ", _r0.selectedOptions.selected.length, "\n");
            }
        }, directives: [i1__namespace.MatSelectionList, i2__namespace.NgForOf, i1__namespace.MatListOption], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ListSelectionExample, [{
                type: i0.Component,
                args: [{ selector: 'list-selection-example', template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n", styles: ["/** No styles for this example. */\n"] }]
            }], null, null);
    })();

    function ListSingleSelectionExample_mat_list_option_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-list-option", 3);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var shoe_r2 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", shoe_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", shoe_r2, " ");
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
    ListSingleSelectionExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ListSingleSelectionExample, selectors: [["list-single-selection-example"]], decls: 5, vars: 3, consts: [[3, "multiple"], ["shoes", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ListSingleSelectionExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-selection-list", 0, 1);
                i0__namespace.ɵɵtemplate(2, ListSingleSelectionExample_mat_list_option_2_Template, 2, 2, "mat-list-option", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "p");
                i0__namespace.ɵɵtext(4);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(1);
                i0__namespace.ɵɵproperty("multiple", false);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngForOf", ctx.typesOfShoes);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1(" Option selected: ", _r0.selectedOptions.selected[0] == null ? null : _r0.selectedOptions.selected[0].value, "\n");
            }
        }, directives: [i1__namespace.MatSelectionList, i2__namespace.NgForOf, i1__namespace.MatListOption], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ListSingleSelectionExample, [{
                type: i0.Component,
                args: [{ selector: 'list-single-selection-example', template: "<mat-selection-list #shoes [multiple]=\"false\">\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\" [value]=\"shoe\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Option selected: {{shoes.selectedOptions.selected[0]?.value}}\n</p>\n", styles: ["/** No styles for this example. */\n"] }]
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
    ListHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ListHarnessExample, selectors: [["list-harness-example"]], decls: 19, vars: 0, consts: [["matLine", ""], ["matListIcon", ""], ["matListAvatar", ""], ["matSubheader", ""], ["mat-list-item", ""]], template: function ListHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-list");
                i0__namespace.ɵɵelementStart(1, "mat-list-item");
                i0__namespace.ɵɵelementStart(2, "div", 0);
                i0__namespace.ɵɵtext(3, "Item ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "div", 0);
                i0__namespace.ɵɵtext(5, "1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "div", 1);
                i0__namespace.ɵɵtext(7, "icon");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "div", 2);
                i0__namespace.ɵɵtext(9, "Avatar");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "div", 3);
                i0__namespace.ɵɵtext(11, "Section 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "a", 4);
                i0__namespace.ɵɵelementStart(13, "span");
                i0__namespace.ɵɵtext(14, "Item 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "button", 4);
                i0__namespace.ɵɵtext(16, "Item 3");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "div", 3);
                i0__namespace.ɵɵtext(18, "Section 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatList, i1__namespace.MatListItem, i5__namespace.MatLine, i1__namespace.MatListIconCssMatStyler, i1__namespace.MatListAvatarCssMatStyler, i1__namespace.MatListSubheaderCssMatStyler], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ListHarnessExample, [{
                type: i0.Component,
                args: [{ selector: 'list-harness-example', template: "<mat-list>\n  <mat-list-item>\n    <div matLine>Item </div>\n    <div matLine>1</div>\n    <div matListIcon>icon</div>\n    <div matListAvatar>Avatar</div>\n  </mat-list-item>\n  <div matSubheader>Section 1</div>\n  <a mat-list-item>\n    <span>Item 2</span>\n  </a>\n  <button mat-list-item>Item 3</button>\n  <div matSubheader>Section 2</div>\n</mat-list>\n" }]
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
    ListExamplesModule.ɵfac = function ListExamplesModule_Factory(t) { return new (t || ListExamplesModule)(); };
    ListExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ListExamplesModule });
    ListExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.CommonModule,
                i4.MatIconModule,
                i1.MatListModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ListExamplesModule, [{
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
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ListExamplesModule, { declarations: [ListHarnessExample,
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
