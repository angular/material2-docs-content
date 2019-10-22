import { NgForOf, DatePipe, CommonModule } from '@angular/common';
import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, ɵɵpipe, ɵɵadvance, ɵɵtextInterpolate, ɵɵtextInterpolate1, ɵɵpipeBind1, ɵɵtemplate, ɵɵelement, ɵɵproperty, ɵɵreference, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatList, MatListItem, MatListSubheaderCssMatStyler, MatListIconCssMatStyler, MatSelectionList, MatListOption, MatListModule } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { MatLine } from '@angular/material/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic list
 */
class ListOverviewExample {
}
ListOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'list-overview-example',
                templateUrl: 'list-overview-example.html',
                styleUrls: ['list-overview-example.css'],
            },] },
];
/** @nocollapse */ ListOverviewExample.ngFactoryDef = function ListOverviewExample_Factory(t) { return new (t || ListOverviewExample)(); };
/** @nocollapse */ ListOverviewExample.ngComponentDef = ɵɵdefineComponent({ type: ListOverviewExample, selectors: [["list-overview-example"]], decls: 7, vars: 0, consts: [["role", "list"], ["role", "listitem"]], template: function ListOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-list", 0);
        ɵɵelementStart(1, "mat-list-item", 1);
        ɵɵtext(2, "Item 1");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-list-item", 1);
        ɵɵtext(4, "Item 2");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-list-item", 1);
        ɵɵtext(6, "Item 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatList, MatListItem], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(ListOverviewExample, [{
        type: Component,
        args: [{
                selector: 'list-overview-example',
                templateUrl: 'list-overview-example.html',
                styleUrls: ['list-overview-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function ListSectionsExample_mat_list_item_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-list-item");
    ɵɵelementStart(1, "mat-icon", 2);
    ɵɵtext(2, "folder");
    ɵɵelementEnd();
    ɵɵelementStart(3, "h4", 3);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "p", 3);
    ɵɵtext(6);
    ɵɵpipe(7, "date");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const folder_r2 = ctx.$implicit;
    ɵɵadvance(4);
    ɵɵtextInterpolate(folder_r2.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 2, folder_r2.updated), " ");
} }
function ListSectionsExample_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-list-item");
    ɵɵelementStart(1, "mat-icon", 2);
    ɵɵtext(2, "note");
    ɵɵelementEnd();
    ɵɵelementStart(3, "h4", 3);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "p", 3);
    ɵɵtext(6);
    ɵɵpipe(7, "date");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const note_r3 = ctx.$implicit;
    ɵɵadvance(4);
    ɵɵtextInterpolate(note_r3.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 2, note_r3.updated), " ");
} }
/**
 * @record
 */
function Section() { }
if (false) {
    /** @type {?} */
    Section.prototype.name;
    /** @type {?} */
    Section.prototype.updated;
}
/**
 * \@title List with sections
 */
class ListSectionsExample {
    constructor() {
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
}
ListSectionsExample.decorators = [
    { type: Component, args: [{
                selector: 'list-sections-example',
                styleUrls: ['list-sections-example.css'],
                templateUrl: 'list-sections-example.html',
            },] },
];
/** @nocollapse */ ListSectionsExample.ngFactoryDef = function ListSectionsExample_Factory(t) { return new (t || ListSectionsExample)(); };
/** @nocollapse */ ListSectionsExample.ngComponentDef = ɵɵdefineComponent({ type: ListSectionsExample, selectors: [["list-sections-example"]], decls: 8, vars: 2, consts: [["mat-subheader", ""], [4, "ngFor", "ngForOf"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListSectionsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-list");
        ɵɵelementStart(1, "h3", 0);
        ɵɵtext(2, "Folders");
        ɵɵelementEnd();
        ɵɵtemplate(3, ListSectionsExample_mat_list_item_3_Template, 8, 4, "mat-list-item", 1);
        ɵɵelement(4, "mat-divider");
        ɵɵelementStart(5, "h3", 0);
        ɵɵtext(6, "Notes");
        ɵɵelementEnd();
        ɵɵtemplate(7, ListSectionsExample_mat_list_item_7_Template, 8, 4, "mat-list-item", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.folders);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.notes);
    } }, directives: [MatList, MatListSubheaderCssMatStyler, NgForOf, MatDivider, MatListItem, MatIcon, MatListIconCssMatStyler, MatLine], pipes: [DatePipe], styles: [".mat-list-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}"] });
/*@__PURE__*/ ɵsetClassMetadata(ListSectionsExample, [{
        type: Component,
        args: [{
                selector: 'list-sections-example',
                styleUrls: ['list-sections-example.css'],
                templateUrl: 'list-sections-example.html',
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    ListSectionsExample.prototype.folders;
    /** @type {?} */
    ListSectionsExample.prototype.notes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const _c0 = ["shoes", ""];
function ListSelectionExample_mat_list_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-list-option");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const shoe_r6 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", shoe_r6, " ");
} }
/**
 * \@title List with selection
 */
class ListSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
}
ListSelectionExample.decorators = [
    { type: Component, args: [{
                selector: 'list-selection-example',
                styleUrls: ['list-selection-example.css'],
                templateUrl: 'list-selection-example.html',
            },] },
];
/** @nocollapse */ ListSelectionExample.ngFactoryDef = function ListSelectionExample_Factory(t) { return new (t || ListSelectionExample)(); };
/** @nocollapse */ ListSelectionExample.ngComponentDef = ɵɵdefineComponent({ type: ListSelectionExample, selectors: [["list-selection-example"]], decls: 5, vars: 2, consts: [[4, "ngFor", "ngForOf"]], template: function ListSelectionExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-selection-list", null, _c0);
        ɵɵtemplate(2, ListSelectionExample_mat_list_option_2_Template, 2, 1, "mat-list-option", 0);
        ɵɵelementEnd();
        ɵɵelementStart(3, "p");
        ɵɵtext(4);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r4 = ɵɵreference(1);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.typesOfShoes);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" Options selected: ", _r4.selectedOptions.selected.length, "\n");
    } }, directives: [MatSelectionList, NgForOf, MatListOption], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(ListSelectionExample, [{
        type: Component,
        args: [{
                selector: 'list-selection-example',
                styleUrls: ['list-selection-example.css'],
                templateUrl: 'list-selection-example.html',
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    ListSelectionExample.prototype.typesOfShoes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    ListOverviewExample,
    ListSectionsExample,
    ListSelectionExample,
];
class ListExamplesModule {
}
ListExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ ListExamplesModule.ngModuleDef = ɵɵdefineNgModule({ type: ListExamplesModule });
/** @nocollapse */ ListExamplesModule.ngInjectorDef = ɵɵdefineInjector({ factory: function ListExamplesModule_Factory(t) { return new (t || ListExamplesModule)(); }, imports: [[
            CommonModule,
            MatIconModule,
            MatListModule,
        ]] });
/*@__PURE__*/ ɵɵsetNgModuleScope(ListExamplesModule, { declarations: [ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample], imports: [CommonModule,
        MatIconModule,
        MatListModule], exports: [ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample] });
/*@__PURE__*/ ɵsetClassMetadata(ListExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null);

/**
 * Generated bundle index. Do not edit.
 */

export { ListOverviewExample, ListSectionsExample, ListSelectionExample, ListExamplesModule };
//# sourceMappingURL=list.js.map
