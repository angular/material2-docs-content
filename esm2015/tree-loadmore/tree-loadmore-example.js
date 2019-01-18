/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        const data = this.rootLevelNodes.map(name => this._generateNode(name));
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
            .map(name => this._generateNode(name));
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
    { type: Injectable }
];
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
     * @param {?} database
     */
    constructor(database) {
        this.database = database;
        this.nodeMap = new Map();
        this.getChildren = (node) => node.childrenChange;
        this.transformer = (node, level) => {
            /** @type {?} */
            const existingNode = this.nodeMap.get(node.item);
            if (existingNode) {
                return existingNode;
            }
            /** @type {?} */
            const newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            this.nodeMap.set(node.item, newNode);
            return newNode;
        };
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.isLoadMore = (_, _nodeData) => _nodeData.item === LOAD_MORE;
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(data => {
            this.dataSource.data = data;
        });
        database.initialize();
    }
    /**
     * Load more nodes from data source
     * @param {?} item
     * @return {?}
     */
    loadMore(item) {
        this.database.loadMore(item);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    loadChildren(node) {
        this.database.loadMore(node.item, true);
    }
}
TreeLoadmoreExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-loadmore-example',
                template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'toggle ' + node.filename\"\n            (click)=\"loadChildren(node)\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\">\n    <button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">\n      Load more...\n    </button>\n  </mat-tree-node>\n</mat-tree>\n",
                providers: [LoadmoreDatabase],
                styles: [""]
            }] }
];
/** @nocollapse */
TreeLoadmoreExample.ctorParameters = () => [
    { type: LoadmoreDatabase }
];
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
    TreeLoadmoreExample.prototype.database;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sb2FkbW9yZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3RyZWUtbG9hZG1vcmUvdHJlZS1sb2FkbW9yZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9FLE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7O01BRTNDLFNBQVMsR0FBRyxXQUFXOzs7O0FBRzdCLE1BQU0sT0FBTyxZQUFZOzs7Ozs7SUFPdkIsWUFBbUIsSUFBWSxFQUNaLGNBQWMsS0FBSyxFQUNuQixxQkFBb0MsSUFBSTtRQUZ4QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFzQjtRQVIzRCxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFpQixFQUFFLENBQUMsQ0FBQztJQVFLLENBQUM7Ozs7SUFOL0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDO0NBS0Y7OztJQVRDLHNDQUF5RDs7SUFNN0MsNEJBQW1COztJQUNuQixtQ0FBMEI7O0lBQzFCLDBDQUErQzs7Ozs7QUFJN0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7OztJQUMzQixZQUFtQixJQUFZLEVBQ1osUUFBUSxDQUFDLEVBQ1QsYUFBYSxLQUFLLEVBQ2xCLHFCQUFvQyxJQUFJO1FBSHhDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxD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QUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUExREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDY2QkFBeUM7Z0JBRXpDLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDOzthQUM5Qjs7OztZQVErQixnQkFBZ0I7Ozs7SUFOOUMsc0NBQThDOztJQUM5QywwQ0FBK0M7O0lBQy9DLDRDQUFnRTs7SUFFaEUseUNBQWtFOztJQWlCbEUsMENBQXNGOztJQUV0RiwwQ0FXQzs7SUFFRCx1Q0FBa0Q7O0lBRWxELDJDQUEyRDs7SUFFM0QsdUNBQTRFOztJQUU1RSx5Q0FBc0Y7Ozs7O0lBcEMxRSx1Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRyZWVGbGF0RGF0YVNvdXJjZSwgTWF0VHJlZUZsYXR0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IExPQURfTU9SRSA9ICdMT0FEX01PUkUnO1xuXG4vKiogTmVzdGVkIG5vZGUgKi9cbmV4cG9ydCBjbGFzcyBMb2FkbW9yZU5vZGUge1xuICBjaGlsZHJlbkNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TG9hZG1vcmVOb2RlW10+KFtdKTtcblxuICBnZXQgY2hpbGRyZW4oKTogTG9hZG1vcmVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuQ2hhbmdlLnZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGl0ZW06IHN0cmluZyxcbiAgICAgICAgICAgICAgcHVibGljIGhhc0NoaWxkcmVuID0gZmFsc2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBsb2FkTW9yZVBhcmVudEl0ZW06IHN0cmluZyB8IG51bGwgPSBudWxsKSB7fVxufVxuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBMb2FkbW9yZUZsYXROb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGl0ZW06IHN0cmluZyxcbiAgICAgICAgICAgICAgcHVibGljIGxldmVsID0gMSxcbiAgICAgICAgICAgICAgcHVibGljIGV4cGFuZGFibGUgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcHVibGljIGxvYWRNb3JlUGFyZW50SXRlbTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHt9XG59XG5cbi8qKlxuICogQSBkYXRhYmFzZSB0aGF0IG9ubHkgbG9hZCBwYXJ0IG9mIHRoZSBkYXRhIGluaXRpYWxseS4gQWZ0ZXIgdXNlciBjbGlja3Mgb24gdGhlIGBMb2FkIG1vcmVgXG4gKiBidXR0b24sIG1vcmUgZGF0YSB3aWxsIGJlIGxvYWRlZC5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvYWRtb3JlRGF0YWJhc2Uge1xuICBiYXRjaE51bWJlciA9IDU7XG4gIGRhdGFDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExvYWRtb3JlTm9kZVtdPihbXSk7XG4gIG5vZGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTG9hZG1vcmVOb2RlPigpO1xuXG4gIC8qKiBUaGUgZGF0YSAqL1xuICByb290TGV2ZWxOb2Rlczogc3RyaW5nW10gPSBbJ1ZlZ2V0YWJsZXMnLCAnRnJ1aXRzJ107XG4gIGRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KFtcbiAgICBbJ0ZydWl0cycsIFsnQXBwbGUnLCAnT3JhbmdlJywgJ0JhbmFuYSddXSxcbiAgICBbJ1ZlZ2V0YWJsZXMnLCBbJ1RvbWF0bycsICdQb3RhdG8nLCAnT25pb24nXV0sXG4gICAgWydBcHBsZScsIFsnRnVqaScsICdNYWNpbnRvc2gnXV0sXG4gICAgWydPbmlvbicsIFsnWWVsbG93JywgJ1doaXRlJywgJ1B1cnBsZScsICdHcmVlbicsICdTaGFsbG90JywgJ1N3ZWV0JywgJ1JlZCcsICdMZWVrJ11dLFxuICBdKTtcblxuICBpbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJvb3RMZXZlbE5vZGVzLm1hcChuYW1lID0+IHRoaXMuX2dlbmVyYXRlTm9kZShuYW1lKSk7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoZGF0YSk7XG4gIH1cblxuICAvKiogRXhwYW5kIGEgbm9kZSB3aG9zZSBjaGlsZHJlbiBhcmUgbm90IGxvYWRlZCAqL1xuICBsb2FkTW9yZShpdGVtOiBzdHJpbmcsIG9ubHlGaXJzdFRpbWUgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5ub2RlTWFwLmhhcyhpdGVtKSB8fCAhdGhpcy5kYXRhTWFwLmhhcyhpdGVtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLm5vZGVNYXAuZ2V0KGl0ZW0pITtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZGF0YU1hcC5nZXQoaXRlbSkhO1xuICAgIGlmIChvbmx5Rmlyc3RUaW1lICYmIHBhcmVudC5jaGlsZHJlbiEubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdDaGlsZHJlbk51bWJlciA9IHBhcmVudC5jaGlsZHJlbiEubGVuZ3RoICsgdGhpcy5iYXRjaE51bWJlcjtcbiAgICBjb25zdCBub2RlcyA9IGNoaWxkcmVuLnNsaWNlKDAsIG5ld0NoaWxkcmVuTnVtYmVyKVxuICAgICAgLm1hcChuYW1lID0+IHRoaXMuX2dlbmVyYXRlTm9kZShuYW1lKSk7XG4gICAgaWYgKG5ld0NoaWxkcmVuTnVtYmVyIDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAvLyBOZWVkIGEgbmV3IGxvYWQgbW9yZSBub2RlXG4gICAgICBub2Rlcy5wdXNoKG5ldyBMb2FkbW9yZU5vZGUoTE9BRF9NT1JFLCBmYWxzZSwgaXRlbSkpO1xuICAgIH1cblxuICAgIHBhcmVudC5jaGlsZHJlbkNoYW5nZS5uZXh0KG5vZGVzKTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmRhdGFDaGFuZ2UudmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVOb2RlKGl0ZW06IHN0cmluZyk6IExvYWRtb3JlTm9kZSB7XG4gICAgaWYgKHRoaXMubm9kZU1hcC5oYXMoaXRlbSkpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVNYXAuZ2V0KGl0ZW0pITtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IExvYWRtb3JlTm9kZShpdGVtLCB0aGlzLmRhdGFNYXAuaGFzKGl0ZW0pKTtcbiAgICB0aGlzLm5vZGVNYXAuc2V0KGl0ZW0sIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggcGFydGlhbGx5IGxvYWRlZCBkYXRhXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtbG9hZG1vcmUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1sb2FkbW9yZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1sb2FkbW9yZS1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtMb2FkbW9yZURhdGFiYXNlXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTG9hZG1vcmVFeGFtcGxlIHtcbiAgbm9kZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBMb2FkbW9yZUZsYXROb2RlPigpO1xuICB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPExvYWRtb3JlRmxhdE5vZGU+O1xuICB0cmVlRmxhdHRlbmVyOiBNYXRUcmVlRmxhdHRlbmVyPExvYWRtb3JlTm9kZSwgTG9hZG1vcmVGbGF0Tm9kZT47XG4gIC8vIEZsYXQgdHJlZSBkYXRhIHNvdXJjZVxuICBkYXRhU291cmNlOiBNYXRUcmVlRmxhdERhdGFTb3VyY2U8TG9hZG1vcmVOb2RlLCBMb2FkbW9yZUZsYXROb2RlPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFiYXNlOiBMb2FkbW9yZURhdGFiYXNlKSB7XG4gICAgdGhpcy50cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIodGhpcy50cmFuc2Zvcm1lciwgdGhpcy5nZXRMZXZlbCxcbiAgICAgIHRoaXMuaXNFeHBhbmRhYmxlLCB0aGlzLmdldENoaWxkcmVuKTtcblxuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPExvYWRtb3JlRmxhdE5vZGU+KHRoaXMuZ2V0TGV2ZWwsIHRoaXMuaXNFeHBhbmRhYmxlKTtcblxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlRmxhdERhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgdGhpcy50cmVlRmxhdHRlbmVyKTtcblxuICAgIGRhdGFiYXNlLmRhdGFDaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuXG4gICAgZGF0YWJhc2UuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4gPSAobm9kZTogTG9hZG1vcmVOb2RlKTogT2JzZXJ2YWJsZTxMb2FkbW9yZU5vZGVbXT4gPT4gbm9kZS5jaGlsZHJlbkNoYW5nZTtcblxuICB0cmFuc2Zvcm1lciA9IChub2RlOiBMb2FkbW9yZU5vZGUsIGxldmVsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBleGlzdGluZ05vZGUgPSB0aGlzLm5vZGVNYXAuZ2V0KG5vZGUuaXRlbSk7XG5cbiAgICBpZiAoZXhpc3RpbmdOb2RlKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld05vZGUgPVxuICAgICAgICBuZXcgTG9hZG1vcmVGbGF0Tm9kZShub2RlLml0ZW0sIGxldmVsLCBub2RlLmhhc0NoaWxkcmVuLCBub2RlLmxvYWRNb3JlUGFyZW50SXRlbSk7XG4gICAgdGhpcy5ub2RlTWFwLnNldChub2RlLml0ZW0sIG5ld05vZGUpO1xuICAgIHJldHVybiBuZXdOb2RlO1xuICB9XG5cbiAgZ2V0TGV2ZWwgPSAobm9kZTogTG9hZG1vcmVGbGF0Tm9kZSkgPT4gbm9kZS5sZXZlbDtcblxuICBpc0V4cGFuZGFibGUgPSAobm9kZTogTG9hZG1vcmVGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBMb2FkbW9yZUZsYXROb2RlKSA9PiBfbm9kZURhdGEuZXhwYW5kYWJsZTtcblxuICBpc0xvYWRNb3JlID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBMb2FkbW9yZUZsYXROb2RlKSA9PiBfbm9kZURhdGEuaXRlbSA9PT0gTE9BRF9NT1JFO1xuXG4gIC8qKiBMb2FkIG1vcmUgbm9kZXMgZnJvbSBkYXRhIHNvdXJjZSAqL1xuICBsb2FkTW9yZShpdGVtOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFiYXNlLmxvYWRNb3JlKGl0ZW0pO1xuICB9XG5cbiAgbG9hZENoaWxkcmVuKG5vZGU6IExvYWRtb3JlRmxhdE5vZGUpIHtcbiAgICB0aGlzLmRhdGFiYXNlLmxvYWRNb3JlKG5vZGUuaXRlbSwgdHJ1ZSk7XG4gIH1cbn1cbiJdfQ==