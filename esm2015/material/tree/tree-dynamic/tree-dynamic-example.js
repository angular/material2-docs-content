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
import * as i1 from "@angular/cdk/tree";
import * as i2 from "@angular/material/tree";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/progress-bar";
function TreeDynamicExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r16 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r16.item, " ");
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
    const node_r17 = ctx.$implicit;
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "toggle " + node_r17.filename);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.treeControl.isExpanded(node_r17) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r17.item, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", node_r17.isLoading);
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
DynamicDataSource.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DynamicDataSource.ctorParameters = () => [
    { type: FlatTreeControl },
    { type: DynamicDatabase }
];
/** @nocollapse */ DynamicDataSource.ɵfac = function DynamicDataSource_Factory(t) { return new (t || DynamicDataSource)(i0.ɵɵinject(i1.FlatTreeControl), i0.ɵɵinject(DynamicDatabase)); };
/** @nocollapse */ DynamicDataSource.ɵprov = i0.ɵɵdefineInjectable({ token: DynamicDataSource, factory: function (t) { return DynamicDataSource.ɵfac(t); }, providedIn: null });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DynamicDataSource, [{
        type: Injectable
    }], function () { return [{ type: i1.FlatTreeControl }, { type: DynamicDatabase }]; }, null); })();
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
                styleUrls: ['tree-dynamic-example.css'],
                providers: [DynamicDatabase]
            },] },
];
/** @nocollapse */
TreeDynamicExample.ctorParameters = () => [
    { type: DynamicDatabase }
];
/** @nocollapse */ TreeDynamicExample.ɵfac = function TreeDynamicExample_Factory(t) { return new (t || TreeDynamicExample)(i0.ɵɵdirectiveInject(DynamicDatabase)); };
/** @nocollapse */ TreeDynamicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeDynamicExample, selectors: [["tree-dynamic-example"]], features: [i0.ɵɵProvidersFeature([DynamicDatabase])], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["mode", "indeterminate", "class", "example-tree-progress-bar", 4, "ngIf"], ["mode", "indeterminate", 1, "example-tree-progress-bar"]], template: function TreeDynamicExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree", 0);
        i0.ɵɵtemplate(1, TreeDynamicExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
        i0.ɵɵtemplate(2, TreeDynamicExample_mat_tree_node_2_Template, 6, 4, "mat-tree-node", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [i2.MatTree, i2.MatTreeNodeDef, i2.MatTreeNode, i2.MatTreeNodePadding, i3.MatButton, i2.MatTreeNodeToggle, i4.MatIcon, i5.NgIf, i6.MatProgressBar], styles: [".example-tree-progress-bar[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tree-dynamic-example',
                templateUrl: 'tree-dynamic-example.html',
                styleUrls: ['tree-dynamic-example.css'],
                providers: [DynamicDatabase]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1keW5hbWljLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtZHluYW1pYy90cmVlLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1keW5hbWljL3RyZWUtZHluYW1pYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxLQUFLLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7SUNIakMsd0NBQ0U7SUFBQSw0QkFBMEM7SUFDMUMsWUFDRjtJQUFBLGlCQUFnQjs7O0lBRGQsZUFDRjtJQURFLDhDQUNGOzs7SUFTRSxzQ0FFdUU7OztJQVZ6RSx3Q0FDRTtJQUFBLGlDQUVFO0lBQUEsbUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQVc7SUFDYixpQkFBUztJQUNULFlBQ0E7SUFBQSw2R0FFb0Q7SUFDdEQsaUJBQWdCOzs7O0lBVE4sZUFBNkM7SUFBN0MsMkRBQTZDO0lBRWpELGVBQ0Y7SUFERSwyR0FDRjtJQUVGLGVBQ0E7SUFEQSw4Q0FDQTtJQUFrQixlQUFzQjtJQUF0Qix5Q0FBc0I7Ozs7O0FETjVDLE1BQU0sT0FBTyxlQUFlOzs7Ozs7O0lBQzFCLFlBQW1CLElBQVksRUFBUyxRQUFRLENBQUMsRUFBUyxhQUFhLEtBQUssRUFDekQsWUFBWSxLQUFLO1FBRGpCLFNBQUksR0FBSixJQUFJLENB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SUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUM3Qjs7OztZQUV1QixlQUFlOztvRkFEMUIsa0JBQWtCLHVCQUNQLGVBQWU7dURBRDFCLGtCQUFrQiwwRUFGbEIsQ0FBQyxlQUFlLENBQUM7UUN6SDlCLG1DQUNFO1FBQUEsdUZBQ0U7UUFHRix1RkFDRTtRQVdKLGlCQUFXOztRQWpCRCwyQ0FBeUIsZ0NBQUE7UUFLbEIsZUFBMEM7UUFBMUMsaURBQTBDOztrRERzSDlDLGtCQUFrQjtjQU45QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUM3QjtzQ0FFdUIsZUFBZTs7O0lBT3JDLHlDQUE4Qzs7SUFFOUMsd0NBQThCOztJQUU5QixzQ0FBaUQ7O0lBRWpELDBDQUEwRDs7SUFFMUQsc0NBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2xsZWN0aW9uVmlld2VyLCBTZWxlY3Rpb25DaGFuZ2UsIERhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIG1lcmdlLCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBGbGF0IG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGNsYXNzIER5bmFtaWNGbGF0Tm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpdGVtOiBzdHJpbmcsIHB1YmxpYyBsZXZlbCA9IDEsIHB1YmxpYyBleHBhbmRhYmxlID0gZmFsc2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZSkge31cbn1cblxuLyoqXG4gKiBEYXRhYmFzZSBmb3IgZHluYW1pYyBkYXRhLiBXaGVuIGV4cGFuZGluZyBhIG5vZGUgaW4gdGhlIHRyZWUsIHRoZSBkYXRhIHNvdXJjZSB3aWxsIG5lZWQgdG8gZmV0Y2hcbiAqIHRoZSBkZXNjZW5kYW50cyBkYXRhIGZyb20gdGhlIGRhdGFiYXNlLlxuICovXG5leHBvcnQgY2xhc3MgRHluYW1pY0RhdGFiYXNlIHtcbiAgZGF0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oW1xuICAgIFsnRnJ1aXRzJywgWydBcHBsZScsICdPcmFuZ2UnLCAnQmFuYW5hJ11dLFxuICAgIFsnVmVnZXRhYmxlcycsIFsnVG9tYXRvJywgJ1BvdGF0bycsICdPbmlvbiddXSxcbiAgICBbJ0FwcGxlJywgWydGdWppJywgJ01hY2ludG9zaCddXSxcbiAgICBbJ09uaW9uJywgWydZZWxsb3cnLCAnV2hpdGUnLCAnUHVycGxlJ11dXG4gIF0pO1xuXG4gIHJvb3RMZXZlbE5vZGVzOiBzdHJpbmdbXSA9IFsnRnJ1aXRzJywgJ1ZlZ2V0YWJsZXMnXTtcblxuICAvKiogSW5pdGlhbCBkYXRhIGZyb20gZGF0YWJhc2UgKi9cbiAgaW5pdGlhbERhdGEoKTogRHluYW1pY0ZsYXROb2RlW10ge1xuICAgIHJldHVybiB0aGlzLnJvb3RMZXZlbE5vZGVzLm1hcChuYW1lID0+IG5ldyBEeW5hbWljRmxhdE5vZGUobmFtZSwgMCwgdHJ1ZSkpO1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4obm9kZTogc3RyaW5nKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmRhdGFNYXAuZ2V0KG5vZGUpO1xuICB9XG5cbiAgaXNFeHBhbmRhYmxlKG5vZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFNYXAuaGFzKG5vZGUpO1xuICB9XG59XG4vKipcbiAqIEZpbGUgZGF0YWJhc2UsIGl0IGNhbiBidWlsZCBhIHRyZWUgc3RydWN0dXJlZCBKc29uIG9iamVjdCBmcm9tIHN0cmluZy5cbiAqIEVhY2ggbm9kZSBpbiBKc29uIG9iamVjdCByZXByZXNlbnRzIGEgZmlsZSBvciBhIGRpcmVjdG9yeS4gRm9yIGEgZmlsZSwgaXQgaGFzIGZpbGVuYW1lIGFuZCB0eXBlLlxuICogRm9yIGEgZGlyZWN0b3J5LCBpdCBoYXMgZmlsZW5hbWUgYW5kIGNoaWxkcmVuIChhIGxpc3Qgb2YgZmlsZXMgb3IgZGlyZWN0b3JpZXMpLlxuICogVGhlIGlucHV0IHdpbGwgYmUgYSBqc29uIG9iamVjdCBzdHJpbmcsIGFuZCB0aGUgb3V0cHV0IGlzIGEgbGlzdCBvZiBgRmlsZU5vZGVgIHdpdGggbmVzdGVkXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEeW5hbWljRGF0YVNvdXJjZSBpbXBsZW1lbnRzIERhdGFTb3VyY2U8RHluYW1pY0ZsYXROb2RlPiB7XG5cbiAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RHluYW1pY0ZsYXROb2RlW10+KFtdKTtcblxuICBnZXQgZGF0YSgpOiBEeW5hbWljRmxhdE5vZGVbXSB7IHJldHVybiB0aGlzLmRhdGFDaGFuZ2UudmFsdWU7IH1cbiAgc2V0IGRhdGEodmFsdWU6IER5bmFtaWNGbGF0Tm9kZVtdKSB7XG4gICAgdGhpcy5fdHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gdmFsdWU7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxEeW5hbWljRmxhdE5vZGU+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9kYXRhYmFzZTogRHluYW1pY0RhdGFiYXNlKSB7fVxuXG4gIGNvbm5lY3QoY29sbGVjdGlvblZpZXdlcjogQ29sbGVjdGlvblZpZXdlcik6IE9ic2VydmFibGU8RHluYW1pY0ZsYXROb2RlW10+IHtcbiAgICB0aGlzLl90cmVlQ29udHJvbC5leHBhbnNpb25Nb2RlbC5jaGFuZ2VkLnN1YnNjcmliZShjaGFuZ2UgPT4ge1xuICAgICAgaWYgKChjaGFuZ2UgYXMgU2VsZWN0aW9uQ2hhbmdlPER5bmFtaWNGbGF0Tm9kZT4pLmFkZGVkIHx8XG4gICAgICAgIChjaGFuZ2UgYXMgU2VsZWN0aW9uQ2hhbmdlPER5bmFtaWNGbGF0Tm9kZT4pLnJlbW92ZWQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVUcmVlQ29udHJvbChjaGFuZ2UgYXMgU2VsZWN0aW9uQ2hhbmdlPER5bmFtaWNGbGF0Tm9kZT4pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lcmdlKGNvbGxlY3Rpb25WaWV3ZXIudmlld0NoYW5nZSwgdGhpcy5kYXRhQ2hhbmdlKS5waXBlKG1hcCgoKSA9PiB0aGlzLmRhdGEpKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoY29sbGVjdGlvblZpZXdlcjogQ29sbGVjdGlvblZpZXdlcik6IHZvaWQge31cblxuICAvKiogSGFuZGxlIGV4cGFuZC9jb2xsYXBzZSBiZWhhdmlvcnMgKi9cbiAgaGFuZGxlVHJlZUNvbnRyb2woY2hhbmdlOiBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikge1xuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgIGNoYW5nZS5hZGRlZC5mb3JFYWNoKG5vZGUgPT4gdGhpcy50b2dnbGVOb2RlKG5vZGUsIHRydWUpKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICBjaGFuZ2UucmVtb3ZlZC5zbGljZSgpLnJldmVyc2UoKS5mb3JFYWNoKG5vZGUgPT4gdGhpcy50b2dnbGVOb2RlKG5vZGUsIGZhbHNlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgbm9kZSwgcmVtb3ZlIGZyb20gZGlzcGxheSBsaXN0XG4gICAqL1xuICB0b2dnbGVOb2RlKG5vZGU6IER5bmFtaWNGbGF0Tm9kZSwgZXhwYW5kOiBib29sZWFuKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9kYXRhYmFzZS5nZXRDaGlsZHJlbihub2RlLml0ZW0pO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLmluZGV4T2Yobm9kZSk7XG4gICAgaWYgKCFjaGlsZHJlbiB8fCBpbmRleCA8IDApIHsgLy8gSWYgbm8gY2hpbGRyZW4sIG9yIGNhbm5vdCBmaW5kIHRoZSBub2RlLCBubyBvcFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5vZGUuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGV4cGFuZCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkcmVuLm1hcChuYW1lID0+XG4gICAgICAgICAgbmV3IER5bmFtaWNGbGF0Tm9kZShuYW1lLCBub2RlLmxldmVsICsgMSwgdGhpcy5fZGF0YWJhc2UuaXNFeHBhbmRhYmxlKG5hbWUpKSk7XG4gICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXggKyAxLCAwLCAuLi5ub2Rlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgdGhpcy5kYXRhLmxlbmd0aFxuICAgICAgICAgICYmIHRoaXMuZGF0YVtpXS5sZXZlbCA+IG5vZGUubGV2ZWw7IGkrKywgY291bnQrKykge31cbiAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCArIDEsIGNvdW50KTtcbiAgICAgIH1cblxuICAgICAgLy8gbm90aWZ5IHRoZSBjaGFuZ2VcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gICAgICBub2RlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH0sIDEwMDApO1xuICB9XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBkeW5hbWljIGRhdGFcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1keW5hbWljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtZHluYW1pYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1keW5hbWljLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW0R5bmFtaWNEYXRhYmFzZV1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUR5bmFtaWNFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IoZGF0YWJhc2U6IER5bmFtaWNEYXRhYmFzZSkge1xuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT4odGhpcy5nZXRMZXZlbCwgdGhpcy5pc0V4cGFuZGFibGUpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBEeW5hbWljRGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCBkYXRhYmFzZSk7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGFiYXNlLmluaXRpYWxEYXRhKCk7XG4gIH1cblxuICB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT47XG5cbiAgZGF0YVNvdXJjZTogRHluYW1pY0RhdGFTb3VyY2U7XG5cbiAgZ2V0TGV2ZWwgPSAobm9kZTogRHluYW1pY0ZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBEeW5hbWljRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogRHluYW1pY0ZsYXROb2RlKSA9PiBfbm9kZURhdGEuZXhwYW5kYWJsZTtcbn1cbiIsIjxtYXQtdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIHt7bm9kZS5pdGVtfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3RvZ2dsZSAnICsgbm9kZS5maWxlbmFtZVwiIG1hdFRyZWVOb2RlVG9nZ2xlPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAge3tub2RlLml0ZW19fVxuICAgIDxtYXQtcHJvZ3Jlc3MtYmFyICpuZ0lmPVwibm9kZS5pc0xvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJpbmRldGVybWluYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtdHJlZS1wcm9ncmVzcy1iYXJcIj48L21hdC1wcm9ncmVzcy1iYXI+XG4gIDwvbWF0LXRyZWUtbm9kZT5cbjwvbWF0LXRyZWU+XG4iXX0=