/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tree/tree-loadmore/tree-loadmore-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
function TreeLoadmoreExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 4);
    i0.ɵɵelement(1, "button", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r26 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r26.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 4);
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_2_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r29); const node_r27 = ctx.$implicit; const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.loadChildren(node_r27); });
    i0.ɵɵelementStart(2, "mat-icon", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r27 = ctx.$implicit;
    const ctx_r24 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "toggle " + node_r27.filename);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r24.treeControl.isExpanded(node_r27) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r27.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node");
    i0.ɵɵelementStart(1, "button", 8);
    i0.ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_3_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r32); const node_r30 = ctx.$implicit; const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.loadMore(node_r30.loadMoreParentItem); });
    i0.ɵɵtext(2, " Load more... ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/** @type {?} */
const LOAD_MORE = 'LOAD_MORE';
/**
 * Nested node
 */
export class LoadmoreNode {
    /**
     * @param {?} item
     * @param {?=} hasChildren
     * @param {?=} loadMoreParentItem
     */
    constructor(item, hasChildren = false, loadMoreParentItem = null) {
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    get children() {
        return this.childrenChange.value;
    }
}
if (false) {
    /** @type {?} */
    LoadmoreNode.prototype.childrenChange;
    /** @type {?} */
    LoadmoreNode.prototype.item;
    /** @type {?} */
    LoadmoreNode.prototype.hasChildren;
    /** @type {?} */
    LoadmoreNode.prototype.loadMoreParentItem;
}
/**
 * Flat node with expandable and level information
 */
export class LoadmoreFlatNode {
    /**
     * @param {?} item
     * @param {?=} level
     * @param {?=} expandable
     * @param {?=} loadMoreParentItem
     */
    constructor(item, level = 1, expandable = false, loadMoreParentItem = null) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
}
if (false) {
    /** @type {?} */
    LoadmoreFlatNode.prototype.item;
    /** @type {?} */
    LoadmoreFlatNode.prototype.level;
    /** @type {?} */
    LoadmoreFlatNode.prototype.expandable;
    /** @type {?} */
    LoadmoreFlatNode.prototype.loadMoreParentItem;
}
/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
export class LoadmoreDatabase {
    constructor() {
        this.batchNumber = 5;
        this.dataChange = new BehaviorSubject([]);
        this.nodeMap = new Map();
        /**
         * The data
         */
        this.rootLevelNodes = ['Vegetables', 'Fruits'];
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
        ]);
    }
    /**
     * @return {?}
     */
    initialize() {
        /** @type {?} */
        const data = this.rootLevelNodes.map((/**
         * @param {?} name
         * @return {?}
         */
        name => this._generateNode(name)));
        this.dataChange.next(data);
    }
    /**
     * Expand a node whose children are not loaded
     * @param {?} item
     * @param {?=} onlyFirstTime
     * @return {?}
     */
    loadMore(item, onlyFirstTime = false) {
        if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
        }
        /** @type {?} */
        const parent = (/** @type {?} */ (this.nodeMap.get(item)));
        /** @type {?} */
        const children = (/** @type {?} */ (this.dataMap.get(item)));
        if (onlyFirstTime && (/** @type {?} */ (parent.children)).length > 0) {
            return;
        }
        /** @type {?} */
        const newChildrenNumber = (/** @type {?} */ (parent.children)).length + this.batchNumber;
        /** @type {?} */
        const nodes = children.slice(0, newChildrenNumber)
            .map((/**
         * @param {?} name
         * @return {?}
         */
        name => this._generateNode(name)));
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    _generateNode(item) {
        if (this.nodeMap.has(item)) {
            return (/** @type {?} */ (this.nodeMap.get(item)));
        }
        /** @type {?} */
        const result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    }
}
LoadmoreDatabase.decorators = [
    { type: Injectable },
];
/** @nocollapse */ LoadmoreDatabase.ɵfac = function LoadmoreDatabase_Factory(t) { return new (t || LoadmoreDatabase)(); };
/** @nocollapse */ LoadmoreDatabase.ɵprov = i0.ɵɵdefineInjectable({ token: LoadmoreDatabase, factory: function (t) { return LoadmoreDatabase.ɵfac(t); }, providedIn: null });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoadmoreDatabase, [{
        type: Injectable
    }], null, null); })();
if (false) {
    /** @type {?} */
    LoadmoreDatabase.prototype.batchNumber;
    /** @type {?} */
    LoadmoreDatabase.prototype.dataChange;
    /** @type {?} */
    LoadmoreDatabase.prototype.nodeMap;
    /**
     * The data
     * @type {?}
     */
    LoadmoreDatabase.prototype.rootLevelNodes;
    /** @type {?} */
    LoadmoreDatabase.prototype.dataMap;
}
/**
 * \@title Tree with partially loaded data
 */
export class TreeLoadmoreExample {
    /**
     * @param {?} _database
     */
    constructor(_database) {
        this._database = _database;
        this.nodeMap = new Map();
        this.getChildren = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.childrenChange);
        this.transformer = (/**
         * @param {?} node
         * @param {?} level
         * @return {?}
         */
        (node, level) => {
            /** @type {?} */
            const existingNode = this.nodeMap.get(node.item);
            if (existingNode) {
                return existingNode;
            }
            /** @type {?} */
            const newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            this.nodeMap.set(node.item, newNode);
            return newNode;
        });
        this.getLevel = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.level);
        this.isExpandable = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.expandable);
        this.hasChild = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        (_, _nodeData) => _nodeData.expandable);
        this.isLoadMore = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        (_, _nodeData) => _nodeData.item === LOAD_MORE);
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        _database.dataChange.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.dataSource.data = data;
        }));
        _database.initialize();
    }
    /**
     * Load more nodes from data source
     * @param {?} item
     * @return {?}
     */
    loadMore(item) {
        this._database.loadMore(item);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    loadChildren(node) {
        this._database.loadMore(node.item, true);
    }
}
TreeLoadmoreExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-loadmore-example',
                templateUrl: 'tree-loadmore-example.html',
                styleUrls: ['tree-loadmore-example.css'],
                providers: [LoadmoreDatabase]
            },] },
];
/** @nocollapse */
TreeLoadmoreExample.ctorParameters = () => [
    { type: LoadmoreDatabase }
];
/** @nocollapse */ TreeLoadmoreExample.ɵfac = function TreeLoadmoreExample_Factory(t) { return new (t || TreeLoadmoreExample)(i0.ɵɵdirectiveInject(LoadmoreDatabase)); };
/** @nocollapse */ TreeLoadmoreExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeLoadmoreExample, selectors: [["tree-loadmore-example"]], features: [i0.ɵɵProvidersFeature([LoadmoreDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"], ["mat-button", "", 3, "click"]], template: function TreeLoadmoreExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree", 0);
        i0.ɵɵtemplate(1, TreeLoadmoreExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
        i0.ɵɵtemplate(2, TreeLoadmoreExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
        i0.ɵɵtemplate(3, TreeLoadmoreExample_mat_tree_node_3_Template, 3, 0, "mat-tree-node", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTreeNodeDefWhen", ctx.isLoadMore);
    } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodePadding, i2.MatButton, i1.MatTreeNodeToggle, i3.MatIcon], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeLoadmoreExample, [{
        type: Component,
        args: [{
                selector: 'tree-loadmore-example',
                templateUrl: 'tree-loadmore-example.html',
                styleUrls: ['tree-loadmore-example.css'],
                providers: [LoadmoreDatabase]
            }]
    }], function () { return [{ type: LoadmoreDatabase }]; }, null); })();
if (false) {
    /** @type {?} */
    TreeLoadmoreExample.prototype.nodeMap;
    /** @type {?} */
    TreeLoadmoreExample.prototype.treeControl;
    /** @type {?} */
    TreeLoadmoreExample.prototype.treeFlattener;
    /** @type {?} */
    TreeLoadmoreExample.prototype.dataSource;
    /** @type {?} */
    TreeLoadmoreExample.prototype.getChildren;
    /** @type {?} */
    TreeLoadmoreExample.prototype.transformer;
    /** @type {?} */
    TreeLoadmoreExample.prototype.getLevel;
    /** @type {?} */
    TreeLoadmoreExample.prototype.isExpandable;
    /** @type {?} */
    TreeLoadmoreExample.prototype.hasChild;
    /** @type {?} */
    TreeLoadmoreExample.prototype.isLoadMore;
    /**
     * @type {?}
     * @private
     */
    TreeLoadmoreExample.prototype._database;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sb2FkbW9yZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdHJlZS90cmVlLWxvYWRtb3JlL3RyZWUtbG9hZG1vcmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1sb2FkbW9yZS90cmVlLWxvYWRtb3JlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0lDUi9DLHdDQUNFO0lBQUEsNEJBQTBDO0lBQzFDLFlBQ0Y7SUFBQSxpQkFBZ0I7OztJQURkLGVBQ0Y7SUFERSw4Q0FDRjs7OztJQUdBLHdDQUNFO0lBQUEsaUNBSUU7SUFGTSxvUEFBNEI7SUFFbEMsbUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQVc7SUFDYixpQkFBUztJQUNULFlBQ0Y7SUFBQSxpQkFBZ0I7Ozs7SUFSTixlQUE2QztJQUE3QywyREFBNkM7SUFJakQsZUFDRjtJQURFLDJHQUNGO0lBRUYsZUFDRjtJQURFLDhDQUNGOzs7O0lBRUEscUNBQ0U7SUFBQSxpQ0FDRTtJQURpQixtUUFBMkM7SUFDNUQsOEJBQ0Y7SUFBQSxpQkFBUztJQUNYLGlCQUFnQjs7O01EWlosU0FBUyxHQUFHLFdBQVc7Ozs7QUFHN0IsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQU92QixZQUFtQixJQUFZLEVB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WTFDLGVBQTRDO1FBQTVDLG1EQUE0Qzs7a0REZ0ZoRCxtQkFBbUI7Y0FOL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM5QjtzQ0FRZ0MsZ0JBQWdCOzs7SUFOL0Msc0NBQThDOztJQUM5QywwQ0FBK0M7O0lBQy9DLDRDQUFnRTs7SUFFaEUseUNBQWtFOztJQWlCbEUsMENBQXNGOztJQUV0RiwwQ0FXQzs7SUFFRCx1Q0FBa0Q7O0lBRWxELDJDQUEyRDs7SUFFM0QsdUNBQTRFOztJQUU1RSx5Q0FBc0Y7Ozs7O0lBcEMxRSx3Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRyZWVGbGF0RGF0YVNvdXJjZSwgTWF0VHJlZUZsYXR0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IExPQURfTU9SRSA9ICdMT0FEX01PUkUnO1xuXG4vKiogTmVzdGVkIG5vZGUgKi9cbmV4cG9ydCBjbGFzcyBMb2FkbW9yZU5vZGUge1xuICBjaGlsZHJlbkNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TG9hZG1vcmVOb2RlW10+KFtdKTtcblxuICBnZXQgY2hpbGRyZW4oKTogTG9hZG1vcmVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuQ2hhbmdlLnZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGl0ZW06IHN0cmluZyxcbiAgICAgICAgICAgICAgcHVibGljIGhhc0NoaWxkcmVuID0gZmFsc2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBsb2FkTW9yZVBhcmVudEl0ZW06IHN0cmluZyB8IG51bGwgPSBudWxsKSB7fVxufVxuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBMb2FkbW9yZUZsYXROb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGl0ZW06IHN0cmluZyxcbiAgICAgICAgICAgICAgcHVibGljIGxldmVsID0gMSxcbiAgICAgICAgICAgICAgcHVibGljIGV4cGFuZGFibGUgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcHVibGljIGxvYWRNb3JlUGFyZW50SXRlbTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHt9XG59XG5cbi8qKlxuICogQSBkYXRhYmFzZSB0aGF0IG9ubHkgbG9hZCBwYXJ0IG9mIHRoZSBkYXRhIGluaXRpYWxseS4gQWZ0ZXIgdXNlciBjbGlja3Mgb24gdGhlIGBMb2FkIG1vcmVgXG4gKiBidXR0b24sIG1vcmUgZGF0YSB3aWxsIGJlIGxvYWRlZC5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvYWRtb3JlRGF0YWJhc2Uge1xuICBiYXRjaE51bWJlciA9IDU7XG4gIGRhdGFDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExvYWRtb3JlTm9kZVtdPihbXSk7XG4gIG5vZGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTG9hZG1vcmVOb2RlPigpO1xuXG4gIC8qKiBUaGUgZGF0YSAqL1xuICByb290TGV2ZWxOb2Rlczogc3RyaW5nW10gPSBbJ1ZlZ2V0YWJsZXMnLCAnRnJ1aXRzJ107XG4gIGRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KFtcbiAgICBbJ0ZydWl0cycsIFsnQXBwbGUnLCAnT3JhbmdlJywgJ0JhbmFuYSddXSxcbiAgICBbJ1ZlZ2V0YWJsZXMnLCBbJ1RvbWF0bycsICdQb3RhdG8nLCAnT25pb24nXV0sXG4gICAgWydBcHBsZScsIFsnRnVqaScsICdNYWNpbnRvc2gnXV0sXG4gICAgWydPbmlvbicsIFsnWWVsbG93JywgJ1doaXRlJywgJ1B1cnBsZScsICdHcmVlbicsICdTaGFsbG90JywgJ1N3ZWV0JywgJ1JlZCcsICdMZWVrJ11dLFxuICBdKTtcblxuICBpbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJvb3RMZXZlbE5vZGVzLm1hcChuYW1lID0+IHRoaXMuX2dlbmVyYXRlTm9kZShuYW1lKSk7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoZGF0YSk7XG4gIH1cblxuICAvKiogRXhwYW5kIGEgbm9kZSB3aG9zZSBjaGlsZHJlbiBhcmUgbm90IGxvYWRlZCAqL1xuICBsb2FkTW9yZShpdGVtOiBzdHJpbmcsIG9ubHlGaXJzdFRpbWUgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5ub2RlTWFwLmhhcyhpdGVtKSB8fCAhdGhpcy5kYXRhTWFwLmhhcyhpdGVtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLm5vZGVNYXAuZ2V0KGl0ZW0pITtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZGF0YU1hcC5nZXQoaXRlbSkhO1xuICAgIGlmIChvbmx5Rmlyc3RUaW1lICYmIHBhcmVudC5jaGlsZHJlbiEubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdDaGlsZHJlbk51bWJlciA9IHBhcmVudC5jaGlsZHJlbiEubGVuZ3RoICsgdGhpcy5iYXRjaE51bWJlcjtcbiAgICBjb25zdCBub2RlcyA9IGNoaWxkcmVuLnNsaWNlKDAsIG5ld0NoaWxkcmVuTnVtYmVyKVxuICAgICAgLm1hcChuYW1lID0+IHRoaXMuX2dlbmVyYXRlTm9kZShuYW1lKSk7XG4gICAgaWYgKG5ld0NoaWxkcmVuTnVtYmVyIDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAvLyBOZWVkIGEgbmV3IGxvYWQgbW9yZSBub2RlXG4gICAgICBub2Rlcy5wdXNoKG5ldyBMb2FkbW9yZU5vZGUoTE9BRF9NT1JFLCBmYWxzZSwgaXRlbSkpO1xuICAgIH1cblxuICAgIHBhcmVudC5jaGlsZHJlbkNoYW5nZS5uZXh0KG5vZGVzKTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmRhdGFDaGFuZ2UudmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVOb2RlKGl0ZW06IHN0cmluZyk6IExvYWRtb3JlTm9kZSB7XG4gICAgaWYgKHRoaXMubm9kZU1hcC5oYXMoaXRlbSkpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVNYXAuZ2V0KGl0ZW0pITtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IExvYWRtb3JlTm9kZShpdGVtLCB0aGlzLmRhdGFNYXAuaGFzKGl0ZW0pKTtcbiAgICB0aGlzLm5vZGVNYXAuc2V0KGl0ZW0sIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggcGFydGlhbGx5IGxvYWRlZCBkYXRhXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtbG9hZG1vcmUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1sb2FkbW9yZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1sb2FkbW9yZS1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtMb2FkbW9yZURhdGFiYXNlXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTG9hZG1vcmVFeGFtcGxlIHtcbiAgbm9kZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBMb2FkbW9yZUZsYXROb2RlPigpO1xuICB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPExvYWRtb3JlRmxhdE5vZGU+O1xuICB0cmVlRmxhdHRlbmVyOiBNYXRUcmVlRmxhdHRlbmVyPExvYWRtb3JlTm9kZSwgTG9hZG1vcmVGbGF0Tm9kZT47XG4gIC8vIEZsYXQgdHJlZSBkYXRhIHNvdXJjZVxuICBkYXRhU291cmNlOiBNYXRUcmVlRmxhdERhdGFTb3VyY2U8TG9hZG1vcmVOb2RlLCBMb2FkbW9yZUZsYXROb2RlPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhYmFzZTogTG9hZG1vcmVEYXRhYmFzZSkge1xuICAgIHRoaXMudHJlZUZsYXR0ZW5lciA9IG5ldyBNYXRUcmVlRmxhdHRlbmVyKHRoaXMudHJhbnNmb3JtZXIsIHRoaXMuZ2V0TGV2ZWwsXG4gICAgICB0aGlzLmlzRXhwYW5kYWJsZSwgdGhpcy5nZXRDaGlsZHJlbik7XG5cbiAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxMb2FkbW9yZUZsYXROb2RlPih0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSk7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZUZsYXREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMudHJlZUZsYXR0ZW5lcik7XG5cbiAgICBfZGF0YWJhc2UuZGF0YUNoYW5nZS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGE7XG4gICAgfSk7XG5cbiAgICBfZGF0YWJhc2UuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4gPSAobm9kZTogTG9hZG1vcmVOb2RlKTogT2JzZXJ2YWJsZTxMb2FkbW9yZU5vZGVbXT4gPT4gbm9kZS5jaGlsZHJlbkNoYW5nZTtcblxuICB0cmFuc2Zvcm1lciA9IChub2RlOiBMb2FkbW9yZU5vZGUsIGxldmVsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBleGlzdGluZ05vZGUgPSB0aGlzLm5vZGVNYXAuZ2V0KG5vZGUuaXRlbSk7XG5cbiAgICBpZiAoZXhpc3RpbmdOb2RlKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld05vZGUgPVxuICAgICAgICBuZXcgTG9hZG1vcmVGbGF0Tm9kZShub2RlLml0ZW0sIGxldmVsLCBub2RlLmhhc0NoaWxkcmVuLCBub2RlLmxvYWRNb3JlUGFyZW50SXRlbSk7XG4gICAgdGhpcy5ub2RlTWFwLnNldChub2RlLml0ZW0sIG5ld05vZGUpO1xuICAgIHJldHVybiBuZXdOb2RlO1xuICB9XG5cbiAgZ2V0TGV2ZWwgPSAobm9kZTogTG9hZG1vcmVGbGF0Tm9kZSkgPT4gbm9kZS5sZXZlbDtcblxuICBpc0V4cGFuZGFibGUgPSAobm9kZTogTG9hZG1vcmVGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBMb2FkbW9yZUZsYXROb2RlKSA9PiBfbm9kZURhdGEuZXhwYW5kYWJsZTtcblxuICBpc0xvYWRNb3JlID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBMb2FkbW9yZUZsYXROb2RlKSA9PiBfbm9kZURhdGEuaXRlbSA9PT0gTE9BRF9NT1JFO1xuXG4gIC8qKiBMb2FkIG1vcmUgbm9kZXMgZnJvbSBkYXRhIHNvdXJjZSAqL1xuICBsb2FkTW9yZShpdGVtOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhYmFzZS5sb2FkTW9yZShpdGVtKTtcbiAgfVxuXG4gIGxvYWRDaGlsZHJlbihub2RlOiBMb2FkbW9yZUZsYXROb2RlKSB7XG4gICAgdGhpcy5fZGF0YWJhc2UubG9hZE1vcmUobm9kZS5pdGVtLCB0cnVlKTtcbiAgfVxufVxuIiwiPG1hdC10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPCEtLSBMZWFmIG5vZGUgLS0+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIHt7bm9kZS5pdGVtfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuXG4gIDwhLS0gZXhwYW5kYWJsZSBub2RlIC0tPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3RvZ2dsZSAnICsgbm9kZS5maWxlbmFtZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwibG9hZENoaWxkcmVuKG5vZGUpXCJcbiAgICAgICAgICAgIG1hdFRyZWVOb2RlVG9nZ2xlPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAge3tub2RlLml0ZW19fVxuICA8L21hdC10cmVlLW5vZGU+XG5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGlzTG9hZE1vcmVcIj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImxvYWRNb3JlKG5vZGUubG9hZE1vcmVQYXJlbnRJdGVtKVwiPlxuICAgICAgTG9hZCBtb3JlLi4uXG4gICAgPC9idXR0b24+XG4gIDwvbWF0LXRyZWUtbm9kZT5cbjwvbWF0LXRyZWU+XG4iXX0=