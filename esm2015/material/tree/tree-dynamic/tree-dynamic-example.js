/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
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
    { type: Injectable }
];
/** @nocollapse */
DynamicDataSource.ctorParameters = () => [
    { type: FlatTreeControl },
    { type: DynamicDatabase }
];
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
                template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <mat-progress-bar *ngIf=\"node.isLoading\"\n                      mode=\"indeterminate\"\n                      class=\"example-tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>\n",
                providers: [DynamicDatabase],
                styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"]
            }] }
];
/** @nocollapse */
TreeDynamicExample.ctorParameters = () => [
    { type: DynamicDatabase }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1keW5hbWljLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdHJlZS90cmVlLWR5bmFtaWMvdHJlZS1keW5hbWljLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFFLEtBQUssRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUN4RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHbkMsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7SUFDMUIsWUFBbUIsSUFBWSxFQUFTLFFBQVEsQ0FBQyxFQUFTLGFBQWEsS0FBSyxFQUN6RCxZQUFZLEtBQUs7UUFEakIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQUk7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3pELGNBQVMsR0FBVCxTQUFTLENBQVE7SUFBRyxDQUFDO0NBQ3pDOzs7SUFGYSwrQkFBbUI7O0lBQUUsZ0NBQWdCOztJQUFFLHFDQUF5Qjs7SUFDaEUsb0NBQXdCOzs7Ozs7QUFPdEMsTUFBTSxPQUFPLGVBQWU7SUFBNUI7UUFDRSxZQUFPLEdBQUcsSUFBSSxHQUFHLENBQW1CO1lBQ2xDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN6QyxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxP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eURVLGVBQWU7Ozs7SUFUOUMsdUNBQXdEOzs7OztJQVE1Qyx5Q0FBc0Q7Ozs7O0lBQ3RELHNDQUFrQzs7Ozs7QUErRGhELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFDN0IsWUFBWSxRQUF5QjtRQVdyQyxhQUFROzs7O1FBQUcsQ0FBQyxJQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO1FBRWpELGlCQUFZOzs7O1FBQUcsQ0FBQyxJQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDO1FBRTFELGFBQVE7Ozs7O1FBQUcsQ0FBQyxDQUFTLEVBQUUsU0FBMEIsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBQztRQWR6RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFrQixJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDJ5QkFBd0M7Z0JBRXhDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQzs7YUFDN0I7Ozs7WUFFdUIsZUFBZTs7OztJQU9yQyx5Q0FBOEM7O0lBRTlDLHdDQUE4Qjs7SUFFOUIsc0NBQWlEOztJQUVqRCwwQ0FBMEQ7O0lBRTFELHNDQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sbGVjdGlvblZpZXdlciwgU2VsZWN0aW9uQ2hhbmdlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBtZXJnZSwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBEeW5hbWljRmxhdE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbTogc3RyaW5nLCBwdWJsaWMgbGV2ZWwgPSAxLCBwdWJsaWMgZXhwYW5kYWJsZSA9IGZhbHNlLFxuICAgICAgICAgICAgICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2UpIHt9XG59XG5cbi8qKlxuICogRGF0YWJhc2UgZm9yIGR5bmFtaWMgZGF0YS4gV2hlbiBleHBhbmRpbmcgYSBub2RlIGluIHRoZSB0cmVlLCB0aGUgZGF0YSBzb3VyY2Ugd2lsbCBuZWVkIHRvIGZldGNoXG4gKiB0aGUgZGVzY2VuZGFudHMgZGF0YSBmcm9tIHRoZSBkYXRhYmFzZS5cbiAqL1xuZXhwb3J0IGNsYXNzIER5bmFtaWNEYXRhYmFzZSB7XG4gIGRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KFtcbiAgICBbJ0ZydWl0cycsIFsnQXBwbGUnLCAnT3JhbmdlJywgJ0JhbmFuYSddXSxcbiAgICBbJ1ZlZ2V0YWJsZXMnLCBbJ1RvbWF0bycsICdQb3RhdG8nLCAnT25pb24nXV0sXG4gICAgWydBcHBsZScsIFsnRnVqaScsICdNYWNpbnRvc2gnXV0sXG4gICAgWydPbmlvbicsIFsnWWVsbG93JywgJ1doaXRlJywgJ1B1cnBsZSddXVxuICBdKTtcblxuICByb290TGV2ZWxOb2Rlczogc3RyaW5nW10gPSBbJ0ZydWl0cycsICdWZWdldGFibGVzJ107XG5cbiAgLyoqIEluaXRpYWwgZGF0YSBmcm9tIGRhdGFiYXNlICovXG4gIGluaXRpYWxEYXRhKCk6IER5bmFtaWNGbGF0Tm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5yb290TGV2ZWxOb2Rlcy5tYXAobmFtZSA9PiBuZXcgRHluYW1pY0ZsYXROb2RlKG5hbWUsIDAsIHRydWUpKTtcbiAgfVxuXG4gIGdldENoaWxkcmVuKG5vZGU6IHN0cmluZyk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmdldChub2RlKTtcbiAgfVxuXG4gIGlzRXhwYW5kYWJsZShub2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmhhcyhub2RlKTtcbiAgfVxufVxuLyoqXG4gKiBGaWxlIGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QgZnJvbSBzdHJpbmcuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIGZpbGUgb3IgYSBkaXJlY3RvcnkuIEZvciBhIGZpbGUsIGl0IGhhcyBmaWxlbmFtZSBhbmQgdHlwZS5cbiAqIEZvciBhIGRpcmVjdG9yeSwgaXQgaGFzIGZpbGVuYW1lIGFuZCBjaGlsZHJlbiAoYSBsaXN0IG9mIGZpbGVzIG9yIGRpcmVjdG9yaWVzKS5cbiAqIFRoZSBpbnB1dCB3aWxsIGJlIGEganNvbiBvYmplY3Qgc3RyaW5nLCBhbmQgdGhlIG91dHB1dCBpcyBhIGxpc3Qgb2YgYEZpbGVOb2RlYCB3aXRoIG5lc3RlZFxuICogc3RydWN0dXJlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHluYW1pY0RhdGFTb3VyY2Uge1xuXG4gIGRhdGFDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PER5bmFtaWNGbGF0Tm9kZVtdPihbXSk7XG5cbiAgZ2V0IGRhdGEoKTogRHluYW1pY0ZsYXROb2RlW10geyByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlOyB9XG4gIHNldCBkYXRhKHZhbHVlOiBEeW5hbWljRmxhdE5vZGVbXSkge1xuICAgIHRoaXMuX3RyZWVDb250cm9sLmRhdGFOb2RlcyA9IHZhbHVlO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZGF0YWJhc2U6IER5bmFtaWNEYXRhYmFzZSkge31cblxuICBjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiBPYnNlcnZhYmxlPER5bmFtaWNGbGF0Tm9kZVtdPiB7XG4gICAgdGhpcy5fdHJlZUNvbnRyb2wuZXhwYW5zaW9uTW9kZWwuY2hhbmdlZC5zdWJzY3JpYmUoY2hhbmdlID0+IHtcbiAgICAgIGlmICgoY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KS5hZGRlZCB8fFxuICAgICAgICAoY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KS5yZW1vdmVkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlVHJlZUNvbnRyb2woY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXJnZShjb2xsZWN0aW9uVmlld2VyLnZpZXdDaGFuZ2UsIHRoaXMuZGF0YUNoYW5nZSkucGlwZShtYXAoKCkgPT4gdGhpcy5kYXRhKSk7XG4gIH1cblxuICAvKiogSGFuZGxlIGV4cGFuZC9jb2xsYXBzZSBiZWhhdmlvcnMgKi9cbiAgaGFuZGxlVHJlZUNvbnRyb2woY2hhbmdlOiBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikge1xuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgIGNoYW5nZS5hZGRlZC5mb3JFYWNoKG5vZGUgPT4gdGhpcy50b2dnbGVOb2RlKG5vZGUsIHRydWUpKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICBjaGFuZ2UucmVtb3ZlZC5zbGljZSgpLnJldmVyc2UoKS5mb3JFYWNoKG5vZGUgPT4gdGhpcy50b2dnbGVOb2RlKG5vZGUsIGZhbHNlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgbm9kZSwgcmVtb3ZlIGZyb20gZGlzcGxheSBsaXN0XG4gICAqL1xuICB0b2dnbGVOb2RlKG5vZGU6IER5bmFtaWNGbGF0Tm9kZSwgZXhwYW5kOiBib29sZWFuKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9kYXRhYmFzZS5nZXRDaGlsZHJlbihub2RlLml0ZW0pO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLmluZGV4T2Yobm9kZSk7XG4gICAgaWYgKCFjaGlsZHJlbiB8fCBpbmRleCA8IDApIHsgLy8gSWYgbm8gY2hpbGRyZW4sIG9yIGNhbm5vdCBmaW5kIHRoZSBub2RlLCBubyBvcFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5vZGUuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGV4cGFuZCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkcmVuLm1hcChuYW1lID0+XG4gICAgICAgICAgbmV3IER5bmFtaWNGbGF0Tm9kZShuYW1lLCBub2RlLmxldmVsICsgMSwgdGhpcy5fZGF0YWJhc2UuaXNFeHBhbmRhYmxlKG5hbWUpKSk7XG4gICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXggKyAxLCAwLCAuLi5ub2Rlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgdGhpcy5kYXRhLmxlbmd0aFxuICAgICAgICAgICYmIHRoaXMuZGF0YVtpXS5sZXZlbCA+IG5vZGUubGV2ZWw7IGkrKywgY291bnQrKykge31cbiAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCArIDEsIGNvdW50KTtcbiAgICAgIH1cblxuICAgICAgLy8gbm90aWZ5IHRoZSBjaGFuZ2VcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gICAgICBub2RlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH0sIDEwMDApO1xuICB9XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBkeW5hbWljIGRhdGFcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1keW5hbWljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtZHluYW1pYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1keW5hbWljLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW0R5bmFtaWNEYXRhYmFzZV1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUR5bmFtaWNFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IoZGF0YWJhc2U6IER5bmFtaWNEYXRhYmFzZSkge1xuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT4odGhpcy5nZXRMZXZlbCwgdGhpcy5pc0V4cGFuZGFibGUpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBEeW5hbWljRGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCBkYXRhYmFzZSk7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGFiYXNlLmluaXRpYWxEYXRhKCk7XG4gIH1cblxuICB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT47XG5cbiAgZGF0YVNvdXJjZTogRHluYW1pY0RhdGFTb3VyY2U7XG5cbiAgZ2V0TGV2ZWwgPSAobm9kZTogRHluYW1pY0ZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBEeW5hbWljRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogRHluYW1pY0ZsYXROb2RlKSA9PiBfbm9kZURhdGEuZXhwYW5kYWJsZTtcbn1cbiJdfQ==