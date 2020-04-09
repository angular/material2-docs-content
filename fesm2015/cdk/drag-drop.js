import { CdkDrag, moveItemInArray, transferArrayItem, CdkDropListGroup, CdkDropList, CdkDragPlaceholder, CdkDragPreview, CdkDragHandle, DragDropModule } from '@angular/cdk/drag-drop';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { NgForOf, CommonModule } from '@angular/common';
import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, ɵɵadvance, ɵɵtextInterpolate, ɵɵlistener, ɵɵtemplate, ɵɵproperty, ɵɵreference, ɵɵpureFunction1, ɵɵelement, ɵɵtextInterpolate1, ɵɵnextContext, ɵɵsanitizeUrl, ɵɵnamespaceSVG, ViewContainerRef, ViewChild, TemplateRef, ɵɵdirectiveInject, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-axis-lock/cdk-drag-drop-axis-lock-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop position locking
 */
class CdkDragDropAxisLockExample {
}
CdkDragDropAxisLockExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-axis-lock-example',
                templateUrl: 'cdk-drag-drop-axis-lock-example.html',
                styleUrls: ['cdk-drag-drop-axis-lock-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropAxisLockExample.ɵfac = function CdkDragDropAxisLockExample_Factory(t) { return new (t || CdkDragDropAxisLockExample)(); };
/** @nocollapse */ CdkDragDropAxisLockExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropAxisLockExample, selectors: [["cdk-drag-drop-axis-lock-example"]], decls: 4, vars: 0, consts: [["cdkDragLockAxis", "y", "cdkDrag", "", 1, "example-box"], ["cdkDragLockAxis", "x", "cdkDrag", "", 1, "example-box"]], template: function CdkDragDropAxisLockExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtext(1, " I can only be dragged up/down\n");
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 1);
        ɵɵtext(3, " I can only be dragged left/right\n");
        ɵɵelementEnd();
    } }, directives: [CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropAxisLockExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-axis-lock-example',
                templateUrl: 'cdk-drag-drop-axis-lock-example.html',
                styleUrls: ['cdk-drag-drop-axis-lock-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-boundary/cdk-drag-drop-boundary-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop boundary
 */
class CdkDragDropBoundaryExample {
}
CdkDragDropBoundaryExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-boundary-example',
                templateUrl: 'cdk-drag-drop-boundary-example.html',
                styleUrls: ['cdk-drag-drop-boundary-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropBoundaryExample.ɵfac = function CdkDragDropBoundaryExample_Factory(t) { return new (t || CdkDragDropBoundaryExample)(); };
/** @nocollapse */ CdkDragDropBoundaryExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropBoundaryExample, selectors: [["cdk-drag-drop-boundary-example"]], decls: 3, vars: 0, consts: [[1, "example-boundary"], ["cdkDragBoundary", ".example-boundary", "cdkDrag", "", 1, "example-box"]], template: function CdkDragDropBoundaryExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵtext(2, " I can only be dragged within the dotted container ");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-boundary[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropBoundaryExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-boundary-example',
                templateUrl: 'cdk-drag-drop-boundary-example.html',
                styleUrls: ['cdk-drag-drop-boundary-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-connected-sorting-group/cdk-drag-drop-connected-sorting-group-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkDragDropConnectedSortingGroupExample_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r2);
} }
function CdkDragDropConnectedSortingGroupExample_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r3);
} }
/**
 * \@title Drag&Drop connected sorting group
 */
class CdkDragDropConnectedSortingGroupExample {
    constructor() {
        this.todo = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.done = [
            'Get up',
            'Brush teeth',
            'Take a shower',
            'Check e-mail',
            'Walk dog'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
CdkDragDropConnectedSortingGroupExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-connected-sorting-group-example',
                templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
                styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropConnectedSortingGroupExample.ɵfac = function CdkDragDropConnectedSortingGroupExample_Factory(t) { return new (t || CdkDragDropConnectedSortingGroupExample)(); };
/** @nocollapse */ CdkDragDropConnectedSortingGroupExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropConnectedSortingGroupExample, selectors: [["cdk-drag-drop-connected-sorting-group-example"]], decls: 11, vars: 4, consts: [["cdkDropListGroup", ""], [1, "example-container"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropConnectedSortingGroupExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "h2");
        ɵɵtext(3, "To do");
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 2);
        ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingGroupExample_Template_div_cdkDropListDropped_4_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(5, CdkDragDropConnectedSortingGroupExample_div_5_Template, 2, 1, "div", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 1);
        ɵɵelementStart(7, "h2");
        ɵɵtext(8, "Done");
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 2);
        ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingGroupExample_Template_div_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(10, CdkDragDropConnectedSortingGroupExample_div_10_Template, 2, 1, "div", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("cdkDropListData", ctx.todo);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.todo);
        ɵɵadvance(4);
        ɵɵproperty("cdkDropListData", ctx.done);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.done);
    } }, directives: [CdkDropListGroup, CdkDropList, NgForOf, CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropConnectedSortingGroupExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-connected-sorting-group-example',
                templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
                styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropConnectedSortingGroupExample.prototype.todo;
    /** @type {?} */
    CdkDragDropConnectedSortingGroupExample.prototype.done;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-connected-sorting/cdk-drag-drop-connected-sorting-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkDragDropConnectedSortingExample_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r8);
} }
function CdkDragDropConnectedSortingExample_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r9);
} }
const _c0 = function (a0) { return [a0]; };
/**
 * \@title Drag&Drop connected sorting
 */
class CdkDragDropConnectedSortingExample {
    constructor() {
        this.todo = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.done = [
            'Get up',
            'Brush teeth',
            'Take a shower',
            'Check e-mail',
            'Walk dog'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
CdkDragDropConnectedSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-connected-sorting-example',
                templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
                styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropConnectedSortingExample.ɵfac = function CdkDragDropConnectedSortingExample_Factory(t) { return new (t || CdkDragDropConnectedSortingExample)(); };
/** @nocollapse */ CdkDragDropConnectedSortingExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropConnectedSortingExample, selectors: [["cdk-drag-drop-connected-sorting-example"]], decls: 12, vars: 10, consts: [[1, "example-container"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["todoList", "cdkDropList"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["doneList", "cdkDropList"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropConnectedSortingExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h2");
        ɵɵtext(2, "To do");
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 1, 2);
        ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingExample_Template_div_cdkDropListDropped_3_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(5, CdkDragDropConnectedSortingExample_div_5_Template, 2, 1, "div", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 0);
        ɵɵelementStart(7, "h2");
        ɵɵtext(8, "Done");
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 1, 4);
        ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingExample_Template_div_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(11, CdkDragDropConnectedSortingExample_div_11_Template, 2, 1, "div", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r4 = ɵɵreference(4);
        const _r6 = ɵɵreference(10);
        ɵɵadvance(3);
        ɵɵproperty("cdkDropListData", ctx.todo)("cdkDropListConnectedTo", ɵɵpureFunction1(6, _c0, _r6));
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.todo);
        ɵɵadvance(4);
        ɵɵproperty("cdkDropListData", ctx.done)("cdkDropListConnectedTo", ɵɵpureFunction1(8, _c0, _r4));
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.done);
    } }, directives: [CdkDropList, NgForOf, CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropConnectedSortingExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-connected-sorting-example',
                templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
                styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropConnectedSortingExample.prototype.todo;
    /** @type {?} */
    CdkDragDropConnectedSortingExample.prototype.done;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-custom-placeholder/cdk-drag-drop-custom-placeholder-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkDragDropCustomPlaceholderExample_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 4);
} }
function CdkDragDropCustomPlaceholderExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, CdkDragDropCustomPlaceholderExample_div_1_div_1_Template, 1, 0, "div", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const movie_r11 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", movie_r11, " ");
} }
/**
 * \@title Drag&Drop custom placeholder
 */
class CdkDragDropCustomPlaceholderExample {
    constructor() {
        this.movies = [
            'Episode I - The Phantom Menace',
            'Episode II - Attack of the Clones',
            'Episode III - Revenge of the Sith',
            'Episode IV - A New Hope',
            'Episode V - The Empire Strikes Back',
            'Episode VI - Return of the Jedi',
            'Episode VII - The Force Awakens',
            'Episode VIII - The Last Jedi',
            'Episode IX – The Rise of Skywalker'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropCustomPlaceholderExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-custom-placeholder-example',
                templateUrl: 'cdk-drag-drop-custom-placeholder-example.html',
                styleUrls: ['cdk-drag-drop-custom-placeholder-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropCustomPlaceholderExample.ɵfac = function CdkDragDropCustomPlaceholderExample_Factory(t) { return new (t || CdkDragDropCustomPlaceholderExample)(); };
/** @nocollapse */ CdkDragDropCustomPlaceholderExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropCustomPlaceholderExample, selectors: [["cdk-drag-drop-custom-placeholder-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"], ["class", "example-custom-placeholder", 4, "cdkDragPlaceholder"], [1, "example-custom-placeholder"]], template: function CdkDragDropCustomPlaceholderExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("cdkDropListDropped", function CdkDragDropCustomPlaceholderExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(1, CdkDragDropCustomPlaceholderExample_div_1_Template, 3, 1, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.movies);
    } }, directives: [CdkDropList, NgForOf, CdkDrag, CdkDragPlaceholder], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropCustomPlaceholderExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-custom-placeholder-example',
                templateUrl: 'cdk-drag-drop-custom-placeholder-example.html',
                styleUrls: ['cdk-drag-drop-custom-placeholder-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropCustomPlaceholderExample.prototype.movies;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-custom-preview/cdk-drag-drop-custom-preview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkDragDropCustomPreviewExample_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "img", 4);
} if (rf & 2) {
    const movie_r14 = ɵɵnextContext().$implicit;
    ɵɵproperty("src", movie_r14.poster, ɵɵsanitizeUrl)("alt", movie_r14.title);
} }
function CdkDragDropCustomPreviewExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵtemplate(2, CdkDragDropCustomPreviewExample_div_1_img_2_Template, 1, 2, "img", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const movie_r14 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", movie_r14.title, " ");
} }
/**
 * \@title Drag&Drop custom preview
 */
class CdkDragDropCustomPreviewExample {
    constructor() {
        // tslint:disable:max-line-length
        this.movies = [
            {
                title: 'Episode I - The Phantom Menace',
                poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
            },
            {
                title: 'Episode II - Attack of the Clones',
                poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
            },
            {
                title: 'Episode III - Revenge of the Sith',
                poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
            },
            {
                title: 'Episode IV - A New Hope',
                poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
            },
            {
                title: 'Episode V - The Empire Strikes Back',
                poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
            },
            {
                title: 'Episode VI - Return of the Jedi',
                poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'
            },
            {
                title: 'Episode VII - The Force Awakens',
                poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
            },
            {
                title: 'Episode VIII - The Last Jedi',
                poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg'
            },
            {
                title: 'Episode IX – The Rise of Skywalker',
                poster: 'https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg'
            }
        ];
    }
    // tslint:enable:max-line-length
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropCustomPreviewExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-custom-preview-example',
                templateUrl: 'cdk-drag-drop-custom-preview-example.html',
                styleUrls: ['cdk-drag-drop-custom-preview-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropCustomPreviewExample.ɵfac = function CdkDragDropCustomPreviewExample_Factory(t) { return new (t || CdkDragDropCustomPreviewExample)(); };
/** @nocollapse */ CdkDragDropCustomPreviewExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropCustomPreviewExample, selectors: [["cdk-drag-drop-custom-preview-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"], [3, "src", "alt", 4, "cdkDragPreview"], [3, "src", "alt"]], template: function CdkDragDropCustomPreviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("cdkDropListDropped", function CdkDragDropCustomPreviewExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(1, CdkDragDropCustomPreviewExample_div_1_Template, 3, 1, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.movies);
    } }, directives: [CdkDropList, NgForOf, CdkDrag, CdkDragPreview], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropCustomPreviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-custom-preview-example',
                templateUrl: 'cdk-drag-drop-custom-preview-example.html',
                styleUrls: ['cdk-drag-drop-custom-preview-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropCustomPreviewExample.prototype.movies;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-delay/cdk-drag-drop-delay-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Delayed dragging
 */
class CdkDragDropDelayExample {
}
CdkDragDropDelayExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-delay-example',
                templateUrl: 'cdk-drag-drop-delay-example.html',
                styleUrls: ['cdk-drag-drop-delay-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropDelayExample.ɵfac = function CdkDragDropDelayExample_Factory(t) { return new (t || CdkDragDropDelayExample)(); };
/** @nocollapse */ CdkDragDropDelayExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropDelayExample, selectors: [["cdk-drag-drop-delay-example"]], decls: 2, vars: 1, consts: [["cdkDrag", "", 1, "example-box", 3, "cdkDragStartDelay"]], template: function CdkDragDropDelayExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtext(1, " Dragging starts after one second\n");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("cdkDragStartDelay", 1000);
    } }, directives: [CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropDelayExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-delay-example',
                templateUrl: 'cdk-drag-drop-delay-example.html',
                styleUrls: ['cdk-drag-drop-delay-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-disabled-sorting/cdk-drag-drop-disabled-sorting-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkDragDropDisabledSortingExample_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r19);
} }
function CdkDragDropDisabledSortingExample_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r20);
} }
/**
 * \@title Drag&Drop disabled sorting
 */
class CdkDragDropDisabledSortingExample {
    constructor() {
        this.items = [
            'Carrots',
            'Tomatoes',
            'Onions',
            'Apples',
            'Avocados'
        ];
        this.basket = [
            'Oranges',
            'Bananas',
            'Cucumbers'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
CdkDragDropDisabledSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-disabled-sorting-example',
                templateUrl: 'cdk-drag-drop-disabled-sorting-example.html',
                styleUrls: ['cdk-drag-drop-disabled-sorting-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropDisabledSortingExample.ɵfac = function CdkDragDropDisabledSortingExample_Factory(t) { return new (t || CdkDragDropDisabledSortingExample)(); };
/** @nocollapse */ CdkDragDropDisabledSortingExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropDisabledSortingExample, selectors: [["cdk-drag-drop-disabled-sorting-example"]], decls: 11, vars: 4, consts: [["cdkDropListGroup", ""], [1, "example-container"], ["cdkDropList", "", "cdkDropListSortingDisabled", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropDisabledSortingExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "h2");
        ɵɵtext(3, "Available items");
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 2);
        ɵɵlistener("cdkDropListDropped", function CdkDragDropDisabledSortingExample_Template_div_cdkDropListDropped_4_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(5, CdkDragDropDisabledSortingExample_div_5_Template, 2, 1, "div", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 1);
        ɵɵelementStart(7, "h2");
        ɵɵtext(8, "Shopping basket");
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 4);
        ɵɵlistener("cdkDropListDropped", function CdkDragDropDisabledSortingExample_Template_div_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(10, CdkDragDropDisabledSortingExample_div_10_Template, 2, 1, "div", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("cdkDropListData", ctx.items);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.items);
        ɵɵadvance(4);
        ɵɵproperty("cdkDropListData", ctx.basket);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.basket);
    } }, directives: [CdkDropListGroup, CdkDropList, NgForOf, CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropDisabledSortingExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-disabled-sorting-example',
                templateUrl: 'cdk-drag-drop-disabled-sorting-example.html',
                styleUrls: ['cdk-drag-drop-disabled-sorting-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropDisabledSortingExample.prototype.items;
    /** @type {?} */
    CdkDragDropDisabledSortingExample.prototype.basket;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-disabled/cdk-drag-drop-disabled-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkDragDropDisabledExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    ɵɵproperty("cdkDragDisabled", item_r22.disabled);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r22.value);
} }
/**
 * \@title Drag&Drop disabled
 */
class CdkDragDropDisabledExample {
    constructor() {
        this.items = [
            { value: 'I can be dragged', disabled: false },
            { value: 'I cannot be dragged', disabled: true },
            { value: 'I can also be dragged', disabled: false }
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropDisabledExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-disabled-example',
                templateUrl: 'cdk-drag-drop-disabled-example.html',
                styleUrls: ['cdk-drag-drop-disabled-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropDisabledExample.ɵfac = function CdkDragDropDisabledExample_Factory(t) { return new (t || CdkDragDropDisabledExample)(); };
/** @nocollapse */ CdkDragDropDisabledExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropDisabledExample, selectors: [["cdk-drag-drop-disabled-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "cdkDragDisabled", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragDisabled"]], template: function CdkDragDropDisabledExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("cdkDropListDropped", function CdkDragDropDisabledExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(1, CdkDragDropDisabledExample_div_1_Template, 2, 2, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [CdkDropList, NgForOf, CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.example-box.cdk-drag-disabled[_ngcontent-%COMP%] {\n  background: #ccc;\n  cursor: default;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropDisabledExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-disabled-example',
                templateUrl: 'cdk-drag-drop-disabled-example.html',
                styleUrls: ['cdk-drag-drop-disabled-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropDisabledExample.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-enter-predicate/cdk-drag-drop-enter-predicate-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkDragDropEnterPredicateExample_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const number_r25 = ctx.$implicit;
    ɵɵproperty("cdkDragData", number_r25);
    ɵɵadvance(1);
    ɵɵtextInterpolate(number_r25);
} }
function CdkDragDropEnterPredicateExample_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const number_r26 = ctx.$implicit;
    ɵɵproperty("cdkDragData", number_r26);
    ɵɵadvance(1);
    ɵɵtextInterpolate(number_r26);
} }
/**
 * \@title Drag&Drop enter predicate
 */
class CdkDragDropEnterPredicateExample {
    constructor() {
        this.all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.even = [10];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    /**
     * Predicate function that only allows even numbers to be dropped into a list.
     * @param {?} item
     * @return {?}
     */
    evenPredicate(item) {
        return item.data % 2 === 0;
    }
    /**
     * Predicate function that doesn't allow items to be dropped into a list.
     * @return {?}
     */
    noReturnPredicate() {
        return false;
    }
}
CdkDragDropEnterPredicateExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-enter-predicate-example',
                templateUrl: 'cdk-drag-drop-enter-predicate-example.html',
                styleUrls: ['cdk-drag-drop-enter-predicate-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropEnterPredicateExample.ɵfac = function CdkDragDropEnterPredicateExample_Factory(t) { return new (t || CdkDragDropEnterPredicateExample)(); };
/** @nocollapse */ CdkDragDropEnterPredicateExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropEnterPredicateExample, selectors: [["cdk-drag-drop-enter-predicate-example"]], decls: 10, vars: 6, consts: [[1, "example-container"], ["id", "all", "cdkDropList", "", "cdkDropListConnectedTo", "even", 1, "example-list", 3, "cdkDropListData", "cdkDropListEnterPredicate", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "cdkDragData", 4, "ngFor", "ngForOf"], ["id", "even", "cdkDropList", "", "cdkDropListConnectedTo", "all", 1, "example-list", 3, "cdkDropListData", "cdkDropListEnterPredicate", "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragData"]], template: function CdkDragDropEnterPredicateExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h2");
        ɵɵtext(2, "Available numbers");
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 1);
        ɵɵlistener("cdkDropListDropped", function CdkDragDropEnterPredicateExample_Template_div_cdkDropListDropped_3_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(4, CdkDragDropEnterPredicateExample_div_4_Template, 2, 2, "div", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 0);
        ɵɵelementStart(6, "h2");
        ɵɵtext(7, "Even numbers");
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 3);
        ɵɵlistener("cdkDropListDropped", function CdkDragDropEnterPredicateExample_Template_div_cdkDropListDropped_8_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(9, CdkDragDropEnterPredicateExample_div_9_Template, 2, 2, "div", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("cdkDropListData", ctx.all)("cdkDropListEnterPredicate", ctx.noReturnPredicate);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.all);
        ɵɵadvance(4);
        ɵɵproperty("cdkDropListData", ctx.even)("cdkDropListEnterPredicate", ctx.evenPredicate);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.even);
    } }, directives: [CdkDropList, NgForOf, CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropEnterPredicateExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-enter-predicate-example',
                templateUrl: 'cdk-drag-drop-enter-predicate-example.html',
                styleUrls: ['cdk-drag-drop-enter-predicate-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropEnterPredicateExample.prototype.all;
    /** @type {?} */
    CdkDragDropEnterPredicateExample.prototype.even;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-free-drag-position/cdk-drag-drop-free-drag-position-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Programmatically setting the free drag position
 */
class CdkDragDropFreeDragPositionExample {
    constructor() {
        this.dragPosition = { x: 0, y: 0 };
    }
    /**
     * @return {?}
     */
    changePosition() {
        this.dragPosition = { x: this.dragPosition.x + 50, y: this.dragPosition.y + 50 };
    }
}
CdkDragDropFreeDragPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-free-drag-position-example',
                templateUrl: 'cdk-drag-drop-free-drag-position-example.html',
                styleUrls: ['cdk-drag-drop-free-drag-position-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropFreeDragPositionExample.ɵfac = function CdkDragDropFreeDragPositionExample_Factory(t) { return new (t || CdkDragDropFreeDragPositionExample)(); };
/** @nocollapse */ CdkDragDropFreeDragPositionExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropFreeDragPositionExample, selectors: [["cdk-drag-drop-free-drag-position-example"]], decls: 5, vars: 1, consts: [[3, "click"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragFreeDragPosition"]], template: function CdkDragDropFreeDragPositionExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵelementStart(1, "button", 0);
        ɵɵlistener("click", function CdkDragDropFreeDragPositionExample_Template_button_click_1_listener() { return ctx.changePosition(); });
        ɵɵtext(2, "Change element position");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 1);
        ɵɵtext(4, " Drag me around\n");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("cdkDragFreeDragPosition", ctx.dragPosition);
    } }, directives: [CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropFreeDragPositionExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-free-drag-position-example',
                templateUrl: 'cdk-drag-drop-free-drag-position-example.html',
                styleUrls: ['cdk-drag-drop-free-drag-position-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropFreeDragPositionExample.prototype.dragPosition;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-handle/cdk-drag-drop-handle-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Drag&Drop with a handle
 */
class CdkDragDropHandleExample {
}
CdkDragDropHandleExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-handle-example',
                templateUrl: 'cdk-drag-drop-handle-example.html',
                styleUrls: ['cdk-drag-drop-handle-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropHandleExample.ɵfac = function CdkDragDropHandleExample_Factory(t) { return new (t || CdkDragDropHandleExample)(); };
/** @nocollapse */ CdkDragDropHandleExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropHandleExample, selectors: [["cdk-drag-drop-handle-example"]], decls: 6, vars: 0, consts: [["cdkDrag", "", 1, "example-box"], ["cdkDragHandle", "", 1, "example-handle"], ["width", "24px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"]], template: function CdkDragDropHandleExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtext(1, " I can only be dragged using the handle ");
        ɵɵelementStart(2, "div", 1);
        ɵɵnamespaceSVG();
        ɵɵelementStart(3, "svg", 2);
        ɵɵelement(4, "path", 3);
        ɵɵelement(5, "path", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [CdkDrag, CdkDragHandle], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  box-sizing: border-box;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropHandleExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-handle-example',
                templateUrl: 'cdk-drag-drop-handle-example.html',
                styleUrls: ['cdk-drag-drop-handle-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-horizontal-sorting/cdk-drag-drop-horizontal-sorting-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkDragDropHorizontalSortingExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const timePeriod_r28 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(timePeriod_r28);
} }
/**
 * \@title Drag&Drop horizontal sorting
 */
class CdkDragDropHorizontalSortingExample {
    constructor() {
        this.timePeriods = [
            'Bronze age',
            'Iron age',
            'Middle ages',
            'Early modern period',
            'Long nineteenth century'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropHorizontalSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-horizontal-sorting-example',
                templateUrl: 'cdk-drag-drop-horizontal-sorting-example.html',
                styleUrls: ['cdk-drag-drop-horizontal-sorting-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropHorizontalSortingExample.ɵfac = function CdkDragDropHorizontalSortingExample_Factory(t) { return new (t || CdkDragDropHorizontalSortingExample)(); };
/** @nocollapse */ CdkDragDropHorizontalSortingExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropHorizontalSortingExample, selectors: [["cdk-drag-drop-horizontal-sorting-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropHorizontalSortingExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("cdkDropListDropped", function CdkDragDropHorizontalSortingExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(1, CdkDragDropHorizontalSortingExample_div_1_Template, 2, 1, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.timePeriods);
    } }, directives: [CdkDropList, NgForOf, CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropHorizontalSortingExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-horizontal-sorting-example',
                templateUrl: 'cdk-drag-drop-horizontal-sorting-example.html',
                styleUrls: ['cdk-drag-drop-horizontal-sorting-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropHorizontalSortingExample.prototype.timePeriods;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-overview/cdk-drag-drop-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic Drag&Drop
 */
class CdkDragDropOverviewExample {
}
CdkDragDropOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-overview-example',
                templateUrl: 'cdk-drag-drop-overview-example.html',
                styleUrls: ['cdk-drag-drop-overview-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropOverviewExample.ɵfac = function CdkDragDropOverviewExample_Factory(t) { return new (t || CdkDragDropOverviewExample)(); };
/** @nocollapse */ CdkDragDropOverviewExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropOverviewExample, selectors: [["cdk-drag-drop-overview-example"]], decls: 2, vars: 0, consts: [["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtext(1, " Drag me around\n");
        ɵɵelementEnd();
    } }, directives: [CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-overview-example',
                templateUrl: 'cdk-drag-drop-overview-example.html',
                styleUrls: ['cdk-drag-drop-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-root-element/cdk-drag-drop-root-element-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkDragDropRootElementExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtext(1, " Drag the dialog around! ");
    ɵɵelementEnd();
} }
/**
 * \@title Drag&Drop with alternate root element
 */
class CdkDragDropRootElementExample {
    /**
     * @param {?} _overlay
     * @param {?} _viewContainerRef
     */
    constructor(_overlay, _viewContainerRef) {
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
        this._overlayRef = this._overlay.create({
            positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
            hasBackdrop: true
        });
        this._overlayRef.backdropClick().subscribe((/**
         * @return {?}
         */
        () => this._overlayRef.detach()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._overlayRef.dispose();
    }
    /**
     * @return {?}
     */
    openDialog() {
        this._overlayRef.attach(this._portal);
    }
}
CdkDragDropRootElementExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-root-element-example',
                templateUrl: 'cdk-drag-drop-root-element-example.html',
                styleUrls: ['cdk-drag-drop-root-element-example.css'],
            },] },
];
/** @nocollapse */
CdkDragDropRootElementExample.ctorParameters = () => [
    { type: Overlay },
    { type: ViewContainerRef }
];
CdkDragDropRootElementExample.propDecorators = {
    _dialogTemplate: [{ type: ViewChild, args: [TemplateRef,] }]
};
/** @nocollapse */ CdkDragDropRootElementExample.ɵfac = function CdkDragDropRootElementExample_Factory(t) { return new (t || CdkDragDropRootElementExample)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef)); };
/** @nocollapse */ CdkDragDropRootElementExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropRootElementExample, selectors: [["cdk-drag-drop-root-element-example"]], viewQuery: function CdkDragDropRootElementExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._dialogTemplate = _t.first);
    } }, decls: 3, vars: 0, consts: [[3, "click"], ["cdkDrag", "", "cdkDragRootElement", ".cdk-overlay-pane", 1, "example-dialog-content"]], template: function CdkDragDropRootElementExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function CdkDragDropRootElementExample_Template_button_click_0_listener() { return ctx.openDialog(); });
        ɵɵtext(1, "Open a draggable dialog");
        ɵɵelementEnd();
        ɵɵtemplate(2, CdkDragDropRootElementExample_ng_template_2_Template, 2, 0, "ng-template");
    } }, directives: [CdkDrag], styles: [".example-dialog-content[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-dialog-content[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropRootElementExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-root-element-example',
                templateUrl: 'cdk-drag-drop-root-element-example.html',
                styleUrls: ['cdk-drag-drop-root-element-example.css'],
            }]
    }], function () { return [{ type: Overlay }, { type: ViewContainerRef }]; }, { _dialogTemplate: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();
if (false) {
    /** @type {?} */
    CdkDragDropRootElementExample.prototype._dialogTemplate;
    /**
     * @type {?}
     * @private
     */
    CdkDragDropRootElementExample.prototype._overlayRef;
    /**
     * @type {?}
     * @private
     */
    CdkDragDropRootElementExample.prototype._portal;
    /**
     * @type {?}
     * @private
     */
    CdkDragDropRootElementExample.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    CdkDragDropRootElementExample.prototype._viewContainerRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-sorting/cdk-drag-drop-sorting-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkDragDropSortingExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const movie_r31 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(movie_r31);
} }
/**
 * \@title Drag&Drop sorting
 */
class CdkDragDropSortingExample {
    constructor() {
        this.movies = [
            'Episode I - The Phantom Menace',
            'Episode II - Attack of the Clones',
            'Episode III - Revenge of the Sith',
            'Episode IV - A New Hope',
            'Episode V - The Empire Strikes Back',
            'Episode VI - Return of the Jedi',
            'Episode VII - The Force Awakens',
            'Episode VIII - The Last Jedi',
            'Episode IX – The Rise of Skywalker'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-sorting-example',
                templateUrl: 'cdk-drag-drop-sorting-example.html',
                styleUrls: ['cdk-drag-drop-sorting-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropSortingExample.ɵfac = function CdkDragDropSortingExample_Factory(t) { return new (t || CdkDragDropSortingExample)(); };
/** @nocollapse */ CdkDragDropSortingExample.ɵcmp = ɵɵdefineComponent({ type: CdkDragDropSortingExample, selectors: [["cdk-drag-drop-sorting-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropSortingExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("cdkDropListDropped", function CdkDragDropSortingExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(1, CdkDragDropSortingExample_div_1_Template, 2, 1, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.movies);
    } }, directives: [CdkDropList, NgForOf, CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropSortingExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-sorting-example',
                templateUrl: 'cdk-drag-drop-sorting-example.html',
                styleUrls: ['cdk-drag-drop-sorting-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropSortingExample.prototype.movies;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    CdkDragDropAxisLockExample,
    CdkDragDropBoundaryExample,
    CdkDragDropConnectedSortingExample,
    CdkDragDropConnectedSortingGroupExample,
    CdkDragDropCustomPlaceholderExample,
    CdkDragDropCustomPreviewExample,
    CdkDragDropDelayExample,
    CdkDragDropDisabledExample,
    CdkDragDropDisabledSortingExample,
    CdkDragDropEnterPredicateExample,
    CdkDragDropFreeDragPositionExample,
    CdkDragDropHandleExample,
    CdkDragDropHorizontalSortingExample,
    CdkDragDropOverviewExample,
    CdkDragDropRootElementExample,
    CdkDragDropSortingExample,
];
class CdkDragDropExamplesModule {
}
CdkDragDropExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    DragDropModule,
                    OverlayModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            },] },
];
/** @nocollapse */ CdkDragDropExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CdkDragDropExamplesModule });
/** @nocollapse */ CdkDragDropExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CdkDragDropExamplesModule_Factory(t) { return new (t || CdkDragDropExamplesModule)(); }, imports: [[
            DragDropModule,
            OverlayModule,
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkDragDropExamplesModule, { declarations: [CdkDragDropAxisLockExample,
        CdkDragDropBoundaryExample,
        CdkDragDropConnectedSortingExample,
        CdkDragDropConnectedSortingGroupExample,
        CdkDragDropCustomPlaceholderExample,
        CdkDragDropCustomPreviewExample,
        CdkDragDropDelayExample,
        CdkDragDropDisabledExample,
        CdkDragDropDisabledSortingExample,
        CdkDragDropEnterPredicateExample,
        CdkDragDropFreeDragPositionExample,
        CdkDragDropHandleExample,
        CdkDragDropHorizontalSortingExample,
        CdkDragDropOverviewExample,
        CdkDragDropRootElementExample,
        CdkDragDropSortingExample], imports: [DragDropModule,
        OverlayModule,
        CommonModule], exports: [CdkDragDropAxisLockExample,
        CdkDragDropBoundaryExample,
        CdkDragDropConnectedSortingExample,
        CdkDragDropConnectedSortingGroupExample,
        CdkDragDropCustomPlaceholderExample,
        CdkDragDropCustomPreviewExample,
        CdkDragDropDelayExample,
        CdkDragDropDisabledExample,
        CdkDragDropDisabledSortingExample,
        CdkDragDropEnterPredicateExample,
        CdkDragDropFreeDragPositionExample,
        CdkDragDropHandleExample,
        CdkDragDropHorizontalSortingExample,
        CdkDragDropOverviewExample,
        CdkDragDropRootElementExample,
        CdkDragDropSortingExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkDragDropExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    DragDropModule,
                    OverlayModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

export { CdkDragDropAxisLockExample, CdkDragDropBoundaryExample, CdkDragDropConnectedSortingExample, CdkDragDropConnectedSortingGroupExample, CdkDragDropCustomPlaceholderExample, CdkDragDropCustomPreviewExample, CdkDragDropDelayExample, CdkDragDropDisabledExample, CdkDragDropDisabledSortingExample, CdkDragDropEnterPredicateExample, CdkDragDropExamplesModule, CdkDragDropFreeDragPositionExample, CdkDragDropHandleExample, CdkDragDropHorizontalSortingExample, CdkDragDropOverviewExample, CdkDragDropRootElementExample, CdkDragDropSortingExample };
//# sourceMappingURL=drag-drop.js.map
