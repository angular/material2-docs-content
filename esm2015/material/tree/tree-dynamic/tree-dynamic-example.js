/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1keW5hbWljLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtZHluYW1pYy90cmVlLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1keW5hbWljL3RyZWUtZHluYW1pYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFFLEtBQUssRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUN4RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0hqQyx3Q0FDRTtJQUFBLDRCQUEwQztJQUMxQyxZQUNGO0lBQUEsaUJBQWdCOzs7SUFEZCxlQUNGO0lBREUsOENBQ0Y7OztJQVNFLHNDQUV1RTs7O0lBVnpFLHdDQUNFO0lBQUEsaUNBRUU7SUFBQSxtQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBVztJQUNiLGlCQUFTO0lBQ1QsWUFDQTtJQUFBLDZHQUVvRDtJQUN0RCxpQkFBZ0I7Ozs7SUFUTixlQUE2QztJQUE3QywyREFBNkM7SUFFakQsZUFDRjtJQURFLDJHQUNGO0lBRUYsZUFDQTtJQURBLDhDQUNBO0lBQWtCLGVBQXNCO0lBQXRCLHlDQUFzQjs7Ozs7QURONUMsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7SUFDMUIsWUFBbUIsSUFBWSxFQUFTLFFBQVEsQ0FBQyxFQUFTLGFBQWEsS0FBSyxFQUN6RCxZQUFZLEtBQUs7UUFEakIsU0FBSSxHQUFKLElBQUksQ0FB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QUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFcEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hELENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDdkMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzdCOzs7O1lBRXVCLGVBQWU7O29GQUQxQixrQkFBa0IsdUJBQ1AsZUFBZTt1REFEMUIsa0JBQWtCLDBFQUZsQixDQUFDLGVBQWUsQ0FBQztRQ3pIOUIsbUNBQ0U7UUFBQSx1RkFDRTtRQUdGLHVGQUNFO1FBV0osaUJBQVc7O1FBakJELDJDQUF5QixnQ0FBQTtRQUtsQixlQUEwQztRQUExQyxpREFBMEM7O2tERHNIOUMsa0JBQWtCO2NBTjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDdkMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzdCO3NDQUV1QixlQUFlOzs7SUFPckMseUNBQThDOztJQUU5Qyx3Q0FBOEI7O0lBRTlCLHNDQUFpRDs7SUFFakQsMENBQTBEOztJQUUxRCxzQ0FBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbGxlY3Rpb25WaWV3ZXIsIFNlbGVjdGlvbkNoYW5nZSwgRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgbWVyZ2UsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZsYXROb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGl0ZW06IHN0cmluZywgcHVibGljIGxldmVsID0gMSwgcHVibGljIGV4cGFuZGFibGUgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlKSB7fVxufVxuXG4vKipcbiAqIERhdGFiYXNlIGZvciBkeW5hbWljIGRhdGEuIFdoZW4gZXhwYW5kaW5nIGEgbm9kZSBpbiB0aGUgdHJlZSwgdGhlIGRhdGEgc291cmNlIHdpbGwgbmVlZCB0byBmZXRjaFxuICogdGhlIGRlc2NlbmRhbnRzIGRhdGEgZnJvbSB0aGUgZGF0YWJhc2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBEeW5hbWljRGF0YWJhc2Uge1xuICBkYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPihbXG4gICAgWydGcnVpdHMnLCBbJ0FwcGxlJywgJ09yYW5nZScsICdCYW5hbmEnXV0sXG4gICAgWydWZWdldGFibGVzJywgWydUb21hdG8nLCAnUG90YXRvJywgJ09uaW9uJ11dLFxuICAgIFsnQXBwbGUnLCBbJ0Z1amknLCAnTWFjaW50b3NoJ11dLFxuICAgIFsnT25pb24nLCBbJ1llbGxvdycsICdXaGl0ZScsICdQdXJwbGUnXV1cbiAgXSk7XG5cbiAgcm9vdExldmVsTm9kZXM6IHN0cmluZ1tdID0gWydGcnVpdHMnLCAnVmVnZXRhYmxlcyddO1xuXG4gIC8qKiBJbml0aWFsIGRhdGEgZnJvbSBkYXRhYmFzZSAqL1xuICBpbml0aWFsRGF0YSgpOiBEeW5hbWljRmxhdE5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdExldmVsTm9kZXMubWFwKG5hbWUgPT4gbmV3IER5bmFtaWNGbGF0Tm9kZShuYW1lLCAwLCB0cnVlKSk7XG4gIH1cblxuICBnZXRDaGlsZHJlbihub2RlOiBzdHJpbmcpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YU1hcC5nZXQobm9kZSk7XG4gIH1cblxuICBpc0V4cGFuZGFibGUobm9kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YU1hcC5oYXMobm9kZSk7XG4gIH1cbn1cbi8qKlxuICogRmlsZSBkYXRhYmFzZSwgaXQgY2FuIGJ1aWxkIGEgdHJlZSBzdHJ1Y3R1cmVkIEpzb24gb2JqZWN0IGZyb20gc3RyaW5nLlxuICogRWFjaCBub2RlIGluIEpzb24gb2JqZWN0IHJlcHJlc2VudHMgYSBmaWxlIG9yIGEgZGlyZWN0b3J5LiBGb3IgYSBmaWxlLCBpdCBoYXMgZmlsZW5hbWUgYW5kIHR5cGUuXG4gKiBGb3IgYSBkaXJlY3RvcnksIGl0IGhhcyBmaWxlbmFtZSBhbmQgY2hpbGRyZW4gKGEgbGlzdCBvZiBmaWxlcyBvciBkaXJlY3RvcmllcykuXG4gKiBUaGUgaW5wdXQgd2lsbCBiZSBhIGpzb24gb2JqZWN0IHN0cmluZywgYW5kIHRoZSBvdXRwdXQgaXMgYSBsaXN0IG9mIGBGaWxlTm9kZWAgd2l0aCBuZXN0ZWRcbiAqIHN0cnVjdHVyZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIER5bmFtaWNEYXRhU291cmNlIGltcGxlbWVudHMgRGF0YVNvdXJjZTxEeW5hbWljRmxhdE5vZGU+IHtcblxuICBkYXRhQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEeW5hbWljRmxhdE5vZGVbXT4oW10pO1xuXG4gIGdldCBkYXRhKCk6IER5bmFtaWNGbGF0Tm9kZVtdIHsgcmV0dXJuIHRoaXMuZGF0YUNoYW5nZS52YWx1ZTsgfVxuICBzZXQgZGF0YSh2YWx1ZTogRHluYW1pY0ZsYXROb2RlW10pIHtcbiAgICB0aGlzLl90cmVlQ29udHJvbC5kYXRhTm9kZXMgPSB2YWx1ZTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RhdGFiYXNlOiBEeW5hbWljRGF0YWJhc2UpIHt9XG5cbiAgY29ubmVjdChjb2xsZWN0aW9uVmlld2VyOiBDb2xsZWN0aW9uVmlld2VyKTogT2JzZXJ2YWJsZTxEeW5hbWljRmxhdE5vZGVbXT4ge1xuICAgIHRoaXMuX3RyZWVDb250cm9sLmV4cGFuc2lvbk1vZGVsLmNoYW5nZWQuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XG4gICAgICBpZiAoKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikuYWRkZWQgfHxcbiAgICAgICAgKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikucmVtb3ZlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZVRyZWVDb250cm9sKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVyZ2UoY29sbGVjdGlvblZpZXdlci52aWV3Q2hhbmdlLCB0aGlzLmRhdGFDaGFuZ2UpLnBpcGUobWFwKCgpID0+IHRoaXMuZGF0YSkpO1xuICB9XG5cbiAgZGlzY29ubmVjdChjb2xsZWN0aW9uVmlld2VyOiBDb2xsZWN0aW9uVmlld2VyKTogdm9pZCB7fVxuXG4gIC8qKiBIYW5kbGUgZXhwYW5kL2NvbGxhcHNlIGJlaGF2aW9ycyAqL1xuICBoYW5kbGVUcmVlQ29udHJvbChjaGFuZ2U6IFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KSB7XG4gICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgY2hhbmdlLmFkZGVkLmZvckVhY2gobm9kZSA9PiB0aGlzLnRvZ2dsZU5vZGUobm9kZSwgdHJ1ZSkpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgIGNoYW5nZS5yZW1vdmVkLnNsaWNlKCkucmV2ZXJzZSgpLmZvckVhY2gobm9kZSA9PiB0aGlzLnRvZ2dsZU5vZGUobm9kZSwgZmFsc2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBub2RlLCByZW1vdmUgZnJvbSBkaXNwbGF5IGxpc3RcbiAgICovXG4gIHRvZ2dsZU5vZGUobm9kZTogRHluYW1pY0ZsYXROb2RlLCBleHBhbmQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2RhdGFiYXNlLmdldENoaWxkcmVuKG5vZGUuaXRlbSk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEuaW5kZXhPZihub2RlKTtcbiAgICBpZiAoIWNoaWxkcmVuIHx8IGluZGV4IDwgMCkgeyAvLyBJZiBubyBjaGlsZHJlbiwgb3IgY2Fubm90IGZpbmQgdGhlIG5vZGUsIG5vIG9wXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbm9kZS5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoZXhwYW5kKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ubWFwKG5hbWUgPT5cbiAgICAgICAgICBuZXcgRHluYW1pY0ZsYXROb2RlKG5hbWUsIG5vZGUubGV2ZWwgKyAxLCB0aGlzLl9kYXRhYmFzZS5pc0V4cGFuZGFibGUobmFtZSkpKTtcbiAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCArIDEsIDAsIC4uLm5vZGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleCArIDE7IGkgPCB0aGlzLmRhdGEubGVuZ3RoXG4gICAgICAgICAgJiYgdGhpcy5kYXRhW2ldLmxldmVsID4gbm9kZS5sZXZlbDsgaSsrLCBjb3VudCsrKSB7fVxuICAgICAgICB0aGlzLmRhdGEuc3BsaWNlKGluZGV4ICsgMSwgY291bnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBub3RpZnkgdGhlIGNoYW5nZVxuICAgICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgICAgIG5vZGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIGR5bmFtaWMgZGF0YVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWR5bmFtaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1keW5hbWljLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0cmVlLWR5bmFtaWMtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbRHluYW1pY0RhdGFiYXNlXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlRHluYW1pY0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihkYXRhYmFzZTogRHluYW1pY0RhdGFiYXNlKSB7XG4gICAgdGhpcy50cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPih0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IER5bmFtaWNEYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIGRhdGFiYXNlKTtcblxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YWJhc2UuaW5pdGlhbERhdGEoKTtcbiAgfVxuXG4gIHRyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPjtcblxuICBkYXRhU291cmNlOiBEeW5hbWljRGF0YVNvdXJjZTtcblxuICBnZXRMZXZlbCA9IChub2RlOiBEeW5hbWljRmxhdE5vZGUpID0+IG5vZGUubGV2ZWw7XG5cbiAgaXNFeHBhbmRhYmxlID0gKG5vZGU6IER5bmFtaWNGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBEeW5hbWljRmxhdE5vZGUpID0+IF9ub2RlRGF0YS5leHBhbmRhYmxlO1xufVxuIiwiPG1hdC10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLml0ZW19fVxuICA8L21hdC10cmVlLW5vZGU+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCIndG9nZ2xlICcgKyBub2RlLmZpbGVuYW1lXCIgbWF0VHJlZU5vZGVUb2dnbGU+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUuaXRlbX19XG4gICAgPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9XCJub2RlLmlzTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImluZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS10cmVlLXByb2dyZXNzLWJhclwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==