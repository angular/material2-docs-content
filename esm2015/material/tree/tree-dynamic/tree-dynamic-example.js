/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tree/tree-dynamic/tree-dynamic-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/progress-bar";
function TreeDynamicExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r2.item, " ");
} }
function TreeDynamicExample_mat_tree_node_2_mat_progress_bar_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-progress-bar", 8);
} }
function TreeDynamicExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵelementStart(2, "mat-icon", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, TreeDynamicExample_mat_tree_node_2_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "toggle " + node_r3.filename);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r3.item, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", node_r3.isLoading);
} }
/**
 * Flat node with expandable and level information
 */
export class DynamicFlatNode {
    /**
     * @param {?} item
     * @param {?=} level
     * @param {?=} expandable
     * @param {?=} isLoading
     */
    constructor(item, level = 1, expandable = false, isLoading = false) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
}
if (false) {
    /** @type {?} */
    DynamicFlatNode.prototype.item;
    /** @type {?} */
    DynamicFlatNode.prototype.level;
    /** @type {?} */
    DynamicFlatNode.prototype.expandable;
    /** @type {?} */
    DynamicFlatNode.prototype.isLoading;
}
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
export class DynamicDatabase {
    constructor() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']]
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /**
     * Initial data from database
     * @return {?}
     */
    initialData() {
        return this.rootLevelNodes.map((/**
         * @param {?} name
         * @return {?}
         */
        name => new DynamicFlatNode(name, 0, true)));
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getChildren(node) {
        return this.dataMap.get(node);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isExpandable(node) {
        return this.dataMap.has(node);
    }
}
DynamicDatabase.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */ DynamicDatabase.ɵfac = function DynamicDatabase_Factory(t) { return new (t || DynamicDatabase)(); };
/** @nocollapse */ DynamicDatabase.ɵprov = i0.ɵɵdefineInjectable({ token: DynamicDatabase, factory: DynamicDatabase.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DynamicDatabase, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DynamicDatabase.prototype.dataMap;
    /** @type {?} */
    DynamicDatabase.prototype.rootLevelNodes;
}
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
export class DynamicDataSource {
    /**
     * @param {?} _treeControl
     * @param {?} _database
     */
    constructor(_treeControl, _database) {
        this._treeControl = _treeControl;
        this._database = _database;
        this.dataChange = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        this._treeControl.expansionModel.changed.subscribe((/**
         * @param {?} change
         * @return {?}
         */
        change => {
            if (((/** @type {?} */ (change))).added ||
                ((/** @type {?} */ (change))).removed) {
                this.handleTreeControl((/** @type {?} */ (change)));
            }
        }));
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map((/**
         * @return {?}
         */
        () => this.data)));
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    disconnect(collectionViewer) { }
    /**
     * Handle expand/collapse behaviors
     * @param {?} change
     * @return {?}
     */
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach((/**
             * @param {?} node
             * @return {?}
             */
            node => this.toggleNode(node, true)));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach((/**
             * @param {?} node
             * @return {?}
             */
            node => this.toggleNode(node, false)));
        }
    }
    /**
     * Toggle the node, remove from display list
     * @param {?} node
     * @param {?} expand
     * @return {?}
     */
    toggleNode(node, expand) {
        /** @type {?} */
        const children = this._database.getChildren(node.item);
        /** @type {?} */
        const index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (expand) {
                /** @type {?} */
                const nodes = children.map((/**
                 * @param {?} name
                 * @return {?}
                 */
                name => new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name))));
                this.data.splice(index + 1, 0, ...nodes);
            }
            else {
                /** @type {?} */
                let count = 0;
                for (let i = index + 1; i < this.data.length
                    && this.data[i].level > node.level; i++, count++) { }
                this.data.splice(index + 1, count);
            }
            // notify the change
            this.dataChange.next(this.data);
            node.isLoading = false;
        }), 1000);
    }
}
if (false) {
    /** @type {?} */
    DynamicDataSource.prototype.dataChange;
    /**
     * @type {?}
     * @private
     */
    DynamicDataSource.prototype._treeControl;
    /**
     * @type {?}
     * @private
     */
    DynamicDataSource.prototype._database;
}
/**
 * \@title Tree with dynamic data
 */
export class TreeDynamicExample {
    /**
     * @param {?} database
     */
    constructor(database) {
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
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
}
TreeDynamicExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-dynamic-example',
                templateUrl: 'tree-dynamic-example.html',
                styleUrls: ['tree-dynamic-example.css']
            },] },
];
/** @nocollapse */
TreeDynamicExample.ctorParameters = () => [
    { type: DynamicDatabase }
];
/** @nocollapse */ TreeDynamicExample.ɵfac = function TreeDynamicExample_Factory(t) { return new (t || TreeDynamicExample)(i0.ɵɵdirectiveInject(DynamicDatabase)); };
/** @nocollapse */ TreeDynamicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeDynamicExample, selectors: [["tree-dynamic-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["mode", "indeterminate", "class", "example-tree-progress-bar", 4, "ngIf"], ["mode", "indeterminate", 1, "example-tree-progress-bar"]], template: function TreeDynamicExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree", 0);
        i0.ɵɵtemplate(1, TreeDynamicExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
        i0.ɵɵtemplate(2, TreeDynamicExample_mat_tree_node_2_Template, 6, 4, "mat-tree-node", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodePadding, i2.MatButton, i1.MatTreeNodeToggle, i3.MatIcon, i4.NgIf, i5.MatProgressBar], styles: [".example-tree-progress-bar[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tree-dynamic-example',
                templateUrl: 'tree-dynamic-example.html',
                styleUrls: ['tree-dynamic-example.css']
            }]
    }], function () { return [{ type: DynamicDatabase }]; }, null); })();
if (false) {
    /** @type {?} */
    TreeDynamicExample.prototype.treeControl;
    /** @type {?} */
    TreeDynamicExample.prototype.dataSource;
    /** @type {?} */
    TreeDynamicExample.prototype.getLevel;
    /** @type {?} */
    TreeDynamicExample.prototype.isExpandable;
    /** @type {?} */
    TreeDynamicExample.prototype.hasChild;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1keW5hbWljLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtZHluYW1pYy90cmVlLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1keW5hbWljL3RyZWUtZHluYW1pYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxLQUFLLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0hqQyx3Q0FDRTtJQUFBLDRCQUEwQztJQUMxQyxZQUNGO0lBQUEsaUJBQWdCOzs7SUFEZCxlQUNGO0lBREUsNkNBQ0Y7OztJQVNFLHNDQUV1RTs7O0lBVnpFLHdDQUNFO0lBQUEsaUNBRUU7SUFBQSxtQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBVztJQUNiLGlCQUFTO0lBQ1QsWUFDQTtJQUFBLDZHQUVvRDtJQUN0RCxpQkFBZ0I7Ozs7SUFUTixlQUE2QztJQUE3QywwREFBNkM7SUFFakQsZUFDRjtJQURFLHlHQUNGO0lBRUYsZUFDQTtJQURBLDZDQUNBO0lBQWtCLGVBQXNCO0lBQXRCLHdDQUFzQjs7Ozs7QURONUMsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7SUFDMUIsWUFBbUIsSUFBWSxFQUFTLFFBQVEsQ0FBQyxFQUFTLGFBQWEsS0FBSyxFQUN6RCxZQUFZLEtBQUs7UUFEakIsU0FBSSxHQUFKLElBQUksQ0FB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USxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDOzs7O1lBRXVCLGVBQWU7O3VHQUQxQixrQkFBa0IsdUJBQ1AsZUFBZTswRUFEMUIsa0JBQWtCO1FDMUgvQixtQ0FDRTtRQUFBLHVGQUNFO1FBR0YsdUZBQ0U7UUFXSixpQkFBVzs7UUFqQkQsMkNBQXlCLGdDQUFBO1FBS2xCLGVBQTBDO1FBQTFDLGlEQUEwQzs7a0REcUg5QyxrQkFBa0I7Y0FMOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDO3NDQUV1QixlQUFlOzs7SUFPckMseUNBQThDOztJQUU5Qyx3Q0FBOEI7O0lBRTlCLHNDQUFpRDs7SUFFakQsMENBQTBEOztJQUUxRCxzQ0FBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbGxlY3Rpb25WaWV3ZXIsIFNlbGVjdGlvbkNoYW5nZSwgRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgbWVyZ2UsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZsYXROb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGl0ZW06IHN0cmluZywgcHVibGljIGxldmVsID0gMSwgcHVibGljIGV4cGFuZGFibGUgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlKSB7fVxufVxuXG4vKipcbiAqIERhdGFiYXNlIGZvciBkeW5hbWljIGRhdGEuIFdoZW4gZXhwYW5kaW5nIGEgbm9kZSBpbiB0aGUgdHJlZSwgdGhlIGRhdGEgc291cmNlIHdpbGwgbmVlZCB0byBmZXRjaFxuICogdGhlIGRlc2NlbmRhbnRzIGRhdGEgZnJvbSB0aGUgZGF0YWJhc2UuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNEYXRhYmFzZSB7XG4gIGRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KFtcbiAgICBbJ0ZydWl0cycsIFsnQXBwbGUnLCAnT3JhbmdlJywgJ0JhbmFuYSddXSxcbiAgICBbJ1ZlZ2V0YWJsZXMnLCBbJ1RvbWF0bycsICdQb3RhdG8nLCAnT25pb24nXV0sXG4gICAgWydBcHBsZScsIFsnRnVqaScsICdNYWNpbnRvc2gnXV0sXG4gICAgWydPbmlvbicsIFsnWWVsbG93JywgJ1doaXRlJywgJ1B1cnBsZSddXVxuICBdKTtcblxuICByb290TGV2ZWxOb2Rlczogc3RyaW5nW10gPSBbJ0ZydWl0cycsICdWZWdldGFibGVzJ107XG5cbiAgLyoqIEluaXRpYWwgZGF0YSBmcm9tIGRhdGFiYXNlICovXG4gIGluaXRpYWxEYXRhKCk6IER5bmFtaWNGbGF0Tm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5yb290TGV2ZWxOb2Rlcy5tYXAobmFtZSA9PiBuZXcgRHluYW1pY0ZsYXROb2RlKG5hbWUsIDAsIHRydWUpKTtcbiAgfVxuXG4gIGdldENoaWxkcmVuKG5vZGU6IHN0cmluZyk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmdldChub2RlKTtcbiAgfVxuXG4gIGlzRXhwYW5kYWJsZShub2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmhhcyhub2RlKTtcbiAgfVxufVxuLyoqXG4gKiBGaWxlIGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QgZnJvbSBzdHJpbmcuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIGZpbGUgb3IgYSBkaXJlY3RvcnkuIEZvciBhIGZpbGUsIGl0IGhhcyBmaWxlbmFtZSBhbmQgdHlwZS5cbiAqIEZvciBhIGRpcmVjdG9yeSwgaXQgaGFzIGZpbGVuYW1lIGFuZCBjaGlsZHJlbiAoYSBsaXN0IG9mIGZpbGVzIG9yIGRpcmVjdG9yaWVzKS5cbiAqIFRoZSBpbnB1dCB3aWxsIGJlIGEganNvbiBvYmplY3Qgc3RyaW5nLCBhbmQgdGhlIG91dHB1dCBpcyBhIGxpc3Qgb2YgYEZpbGVOb2RlYCB3aXRoIG5lc3RlZFxuICogc3RydWN0dXJlLlxuICovXG5leHBvcnQgY2xhc3MgRHluYW1pY0RhdGFTb3VyY2UgaW1wbGVtZW50cyBEYXRhU291cmNlPER5bmFtaWNGbGF0Tm9kZT4ge1xuXG4gIGRhdGFDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PER5bmFtaWNGbGF0Tm9kZVtdPihbXSk7XG5cbiAgZ2V0IGRhdGEoKTogRHluYW1pY0ZsYXROb2RlW10geyByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlOyB9XG4gIHNldCBkYXRhKHZhbHVlOiBEeW5hbWljRmxhdE5vZGVbXSkge1xuICAgIHRoaXMuX3RyZWVDb250cm9sLmRhdGFOb2RlcyA9IHZhbHVlO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZGF0YWJhc2U6IER5bmFtaWNEYXRhYmFzZSkge31cblxuICBjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiBPYnNlcnZhYmxlPER5bmFtaWNGbGF0Tm9kZVtdPiB7XG4gICAgdGhpcy5fdHJlZUNvbnRyb2wuZXhwYW5zaW9uTW9kZWwuY2hhbmdlZC5zdWJzY3JpYmUoY2hhbmdlID0+IHtcbiAgICAgIGlmICgoY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KS5hZGRlZCB8fFxuICAgICAgICAoY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KS5yZW1vdmVkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlVHJlZUNvbnRyb2woY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXJnZShjb2xsZWN0aW9uVmlld2VyLnZpZXdDaGFuZ2UsIHRoaXMuZGF0YUNoYW5nZSkucGlwZShtYXAoKCkgPT4gdGhpcy5kYXRhKSk7XG4gIH1cblxuICBkaXNjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiB2b2lkIHt9XG5cbiAgLyoqIEhhbmRsZSBleHBhbmQvY29sbGFwc2UgYmVoYXZpb3JzICovXG4gIGhhbmRsZVRyZWVDb250cm9sKGNoYW5nZTogU2VsZWN0aW9uQ2hhbmdlPER5bmFtaWNGbGF0Tm9kZT4pIHtcbiAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICBjaGFuZ2UuYWRkZWQuZm9yRWFjaChub2RlID0+IHRoaXMudG9nZ2xlTm9kZShub2RlLCB0cnVlKSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgY2hhbmdlLnJlbW92ZWQuc2xpY2UoKS5yZXZlcnNlKCkuZm9yRWFjaChub2RlID0+IHRoaXMudG9nZ2xlTm9kZShub2RlLCBmYWxzZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIG5vZGUsIHJlbW92ZSBmcm9tIGRpc3BsYXkgbGlzdFxuICAgKi9cbiAgdG9nZ2xlTm9kZShub2RlOiBEeW5hbWljRmxhdE5vZGUsIGV4cGFuZDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZGF0YWJhc2UuZ2V0Q2hpbGRyZW4obm9kZS5pdGVtKTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YS5pbmRleE9mKG5vZGUpO1xuICAgIGlmICghY2hpbGRyZW4gfHwgaW5kZXggPCAwKSB7IC8vIElmIG5vIGNoaWxkcmVuLCBvciBjYW5ub3QgZmluZCB0aGUgbm9kZSwgbm8gb3BcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBub2RlLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChleHBhbmQpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbi5tYXAobmFtZSA9PlxuICAgICAgICAgIG5ldyBEeW5hbWljRmxhdE5vZGUobmFtZSwgbm9kZS5sZXZlbCArIDEsIHRoaXMuX2RhdGFiYXNlLmlzRXhwYW5kYWJsZShuYW1lKSkpO1xuICAgICAgICB0aGlzLmRhdGEuc3BsaWNlKGluZGV4ICsgMSwgMCwgLi4ubm9kZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4ICsgMTsgaSA8IHRoaXMuZGF0YS5sZW5ndGhcbiAgICAgICAgICAmJiB0aGlzLmRhdGFbaV0ubGV2ZWwgPiBub2RlLmxldmVsOyBpKyssIGNvdW50KyspIHt9XG4gICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXggKyAxLCBjb3VudCk7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vdGlmeSB0aGUgY2hhbmdlXG4gICAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICAgICAgbm9kZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggZHluYW1pYyBkYXRhXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtZHluYW1pYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWR5bmFtaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RyZWUtZHluYW1pYy1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVEeW5hbWljRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGFiYXNlOiBEeW5hbWljRGF0YWJhc2UpIHtcbiAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxEeW5hbWljRmxhdE5vZGU+KHRoaXMuZ2V0TGV2ZWwsIHRoaXMuaXNFeHBhbmRhYmxlKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgRHluYW1pY0RhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgZGF0YWJhc2UpO1xuXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhYmFzZS5pbml0aWFsRGF0YSgpO1xuICB9XG5cbiAgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxEeW5hbWljRmxhdE5vZGU+O1xuXG4gIGRhdGFTb3VyY2U6IER5bmFtaWNEYXRhU291cmNlO1xuXG4gIGdldExldmVsID0gKG5vZGU6IER5bmFtaWNGbGF0Tm9kZSkgPT4gbm9kZS5sZXZlbDtcblxuICBpc0V4cGFuZGFibGUgPSAobm9kZTogRHluYW1pY0ZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IER5bmFtaWNGbGF0Tm9kZSkgPT4gX25vZGVEYXRhLmV4cGFuZGFibGU7XG59XG4iLCI8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICB7e25vZGUuaXRlbX19XG4gIDwvbWF0LXRyZWUtbm9kZT5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIid0b2dnbGUgJyArIG5vZGUuZmlsZW5hbWVcIiBtYXRUcmVlTm9kZVRvZ2dsZT5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAge3t0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIHt7bm9kZS5pdGVtfX1cbiAgICA8bWF0LXByb2dyZXNzLWJhciAqbmdJZj1cIm5vZGUuaXNMb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLXRyZWUtcHJvZ3Jlc3MtYmFyXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuICA8L21hdC10cmVlLW5vZGU+XG48L21hdC10cmVlPlxuIl19