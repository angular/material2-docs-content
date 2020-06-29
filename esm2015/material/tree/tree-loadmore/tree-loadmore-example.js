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
    const node_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r3.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 4);
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const node_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.loadChildren(node_r4); });
    i0.ɵɵelementStart(2, "mat-icon", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "toggle " + node_r4.filename);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r4) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r4.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node");
    i0.ɵɵelementStart(1, "button", 8);
    i0.ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const node_r7 = ctx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.loadMore(node_r7.loadMoreParentItem); });
    i0.ɵɵtext(2, " Load more... ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const LOAD_MORE = 'LOAD_MORE';
/** Nested node */
export class LoadmoreNode {
    constructor(item, hasChildren = false, loadMoreParentItem = null) {
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new BehaviorSubject([]);
    }
    get children() {
        return this.childrenChange.value;
    }
}
/** Flat node with expandable and level information */
export class LoadmoreFlatNode {
    constructor(item, level = 1, expandable = false, loadMoreParentItem = null) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
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
        /** The data */
        this.rootLevelNodes = ['Vegetables', 'Fruits'];
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
        ]);
    }
    initialize() {
        const data = this.rootLevelNodes.map(name => this._generateNode(name));
        this.dataChange.next(data);
    }
    /** Expand a node whose children are not loaded */
    loadMore(item, onlyFirstTime = false) {
        if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
        }
        const parent = this.nodeMap.get(item);
        const children = this.dataMap.get(item);
        if (onlyFirstTime && parent.children.length > 0) {
            return;
        }
        const newChildrenNumber = parent.children.length + this.batchNumber;
        const nodes = children.slice(0, newChildrenNumber)
            .map(name => this._generateNode(name));
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    }
    _generateNode(item) {
        if (this.nodeMap.has(item)) {
            return this.nodeMap.get(item);
        }
        const result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    }
}
LoadmoreDatabase.ɵfac = function LoadmoreDatabase_Factory(t) { return new (t || LoadmoreDatabase)(); };
LoadmoreDatabase.ɵprov = i0.ɵɵdefineInjectable({ token: LoadmoreDatabase, factory: LoadmoreDatabase.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoadmoreDatabase, [{
        type: Injectable
    }], null, null); })();
/**
 * @title Tree with partially loaded data
 */
export class TreeLoadmoreExample {
    constructor(_database) {
        this._database = _database;
        this.nodeMap = new Map();
        this.getChildren = (node) => node.childrenChange;
        this.transformer = (node, level) => {
            const existingNode = this.nodeMap.get(node.item);
            if (existingNode) {
                return existingNode;
            }
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
        _database.dataChange.subscribe(data => {
            this.dataSource.data = data;
        });
        _database.initialize();
    }
    /** Load more nodes from data source */
    loadMore(item) {
        this._database.loadMore(item);
    }
    loadChildren(node) {
        this._database.loadMore(node.item, true);
    }
}
TreeLoadmoreExample.ɵfac = function TreeLoadmoreExample_Factory(t) { return new (t || TreeLoadmoreExample)(i0.ɵɵdirectiveInject(LoadmoreDatabase)); };
TreeLoadmoreExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeLoadmoreExample, selectors: [["tree-loadmore-example"]], features: [i0.ɵɵProvidersFeature([LoadmoreDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"], ["mat-button", "", 3, "click"]], template: function TreeLoadmoreExample_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sb2FkbW9yZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdHJlZS90cmVlLWxvYWRtb3JlL3RyZWUtbG9hZG1vcmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1sb2FkbW9yZS90cmVlLWxvYWRtb3JlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0lDUi9DLHdDQUNFO0lBQUEsNEJBQTBDO0lBQzFDLFlBQ0Y7SUFBQSxpQkFBZ0I7OztJQURkLGVBQ0Y7SUFERSw2Q0FDRjs7OztJQUdBLHdDQUNFO0lBQUEsaUNBSUU7SUFGTSx5T0FBNEI7SUFFbEMsbUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQVc7SUFDYixpQkFBUztJQUNULFlBQ0Y7SUFBQSxpQkFBZ0I7Ozs7SUFSTixlQUE2QztJQUE3QywwREFBNkM7SUFJakQsZUFDRjtJQURFLHlHQUNGO0lBRUYsZUFDRjtJQURFLDZDQUNGOzs7O0lBRUEscUNBQ0U7SUFBQSxpQ0FDRTtJQURpQix3UEFBMkM7SUFDNUQsOEJBQ0Y7SUFBQSxpQkFBUztJQUNYLGlCQUFnQjs7QURabEIsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBRTlCLGtCQUFrQjtBQUNsQixNQUFNLE9BQU8sWUFBWTtJ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SSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEYsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUF5QkQsdUNBQXVDO0lBQ3ZDLFFBQVEsQ0FBQyxJQUFZO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBc0I7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDOztzRkFwRFUsbUJBQW1CLHVCQU9DLGdCQUFnQjt3REFQcEMsbUJBQW1CLDJFQUZuQixDQUFDLGdCQUFnQixDQUFDO1FDbEcvQixtQ0FDRTtRQUNBLHdGQUNFO1FBS0Ysd0ZBQ0U7UUFXRix3RkFDRTtRQUlKLGlCQUFXOztRQXpCRCwyQ0FBeUIsZ0NBQUE7UUFRbEIsZUFBMEM7UUFBMUMsaURBQTBDO1FBWTFDLGVBQTRDO1FBQTVDLG1EQUE0Qzs7a0REZ0ZoRCxtQkFBbUI7Y0FOL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM5QjtzQ0FRZ0MsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlRmxhdERhdGFTb3VyY2UsIE1hdFRyZWVGbGF0dGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBMT0FEX01PUkUgPSAnTE9BRF9NT1JFJztcblxuLyoqIE5lc3RlZCBub2RlICovXG5leHBvcnQgY2xhc3MgTG9hZG1vcmVOb2RlIHtcbiAgY2hpbGRyZW5DaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExvYWRtb3JlTm9kZVtdPihbXSk7XG5cbiAgZ2V0IGNoaWxkcmVuKCk6IExvYWRtb3JlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbkNoYW5nZS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpdGVtOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHB1YmxpYyBoYXNDaGlsZHJlbiA9IGZhbHNlLFxuICAgICAgICAgICAgICBwdWJsaWMgbG9hZE1vcmVQYXJlbnRJdGVtOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge31cbn1cblxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5leHBvcnQgY2xhc3MgTG9hZG1vcmVGbGF0Tm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpdGVtOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHB1YmxpYyBsZXZlbCA9IDEsXG4gICAgICAgICAgICAgIHB1YmxpYyBleHBhbmRhYmxlID0gZmFsc2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBsb2FkTW9yZVBhcmVudEl0ZW06IHN0cmluZyB8IG51bGwgPSBudWxsKSB7fVxufVxuXG4vKipcbiAqIEEgZGF0YWJhc2UgdGhhdCBvbmx5IGxvYWQgcGFydCBvZiB0aGUgZGF0YSBpbml0aWFsbHkuIEFmdGVyIHVzZXIgY2xpY2tzIG9uIHRoZSBgTG9hZCBtb3JlYFxuICogYnV0dG9uLCBtb3JlIGRhdGEgd2lsbCBiZSBsb2FkZWQuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2FkbW9yZURhdGFiYXNlIHtcbiAgYmF0Y2hOdW1iZXIgPSA1O1xuICBkYXRhQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMb2FkbW9yZU5vZGVbXT4oW10pO1xuICBub2RlTWFwID0gbmV3IE1hcDxzdHJpbmcsIExvYWRtb3JlTm9kZT4oKTtcblxuICAvKiogVGhlIGRhdGEgKi9cbiAgcm9vdExldmVsTm9kZXM6IHN0cmluZ1tdID0gWydWZWdldGFibGVzJywgJ0ZydWl0cyddO1xuICBkYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPihbXG4gICAgWydGcnVpdHMnLCBbJ0FwcGxlJywgJ09yYW5nZScsICdCYW5hbmEnXV0sXG4gICAgWydWZWdldGFibGVzJywgWydUb21hdG8nLCAnUG90YXRvJywgJ09uaW9uJ11dLFxuICAgIFsnQXBwbGUnLCBbJ0Z1amknLCAnTWFjaW50b3NoJ11dLFxuICAgIFsnT25pb24nLCBbJ1llbGxvdycsICdXaGl0ZScsICdQdXJwbGUnLCAnR3JlZW4nLCAnU2hhbGxvdCcsICdTd2VldCcsICdSZWQnLCAnTGVlayddXSxcbiAgXSk7XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yb290TGV2ZWxOb2Rlcy5tYXAobmFtZSA9PiB0aGlzLl9nZW5lcmF0ZU5vZGUobmFtZSkpO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KGRhdGEpO1xuICB9XG5cbiAgLyoqIEV4cGFuZCBhIG5vZGUgd2hvc2UgY2hpbGRyZW4gYXJlIG5vdCBsb2FkZWQgKi9cbiAgbG9hZE1vcmUoaXRlbTogc3RyaW5nLCBvbmx5Rmlyc3RUaW1lID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMubm9kZU1hcC5oYXMoaXRlbSkgfHwgIXRoaXMuZGF0YU1hcC5oYXMoaXRlbSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5ub2RlTWFwLmdldChpdGVtKSE7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmRhdGFNYXAuZ2V0KGl0ZW0pITtcbiAgICBpZiAob25seUZpcnN0VGltZSAmJiBwYXJlbnQuY2hpbGRyZW4hLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3Q2hpbGRyZW5OdW1iZXIgPSBwYXJlbnQuY2hpbGRyZW4hLmxlbmd0aCArIHRoaXMuYmF0Y2hOdW1iZXI7XG4gICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbi5zbGljZSgwLCBuZXdDaGlsZHJlbk51bWJlcilcbiAgICAgIC5tYXAobmFtZSA9PiB0aGlzLl9nZW5lcmF0ZU5vZGUobmFtZSkpO1xuICAgIGlmIChuZXdDaGlsZHJlbk51bWJlciA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgLy8gTmVlZCBhIG5ldyBsb2FkIG1vcmUgbm9kZVxuICAgICAgbm9kZXMucHVzaChuZXcgTG9hZG1vcmVOb2RlKExPQURfTU9SRSwgZmFsc2UsIGl0ZW0pKTtcbiAgICB9XG5cbiAgICBwYXJlbnQuY2hpbGRyZW5DaGFuZ2UubmV4dChub2Rlcyk7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhQ2hhbmdlLnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dlbmVyYXRlTm9kZShpdGVtOiBzdHJpbmcpOiBMb2FkbW9yZU5vZGUge1xuICAgIGlmICh0aGlzLm5vZGVNYXAuaGFzKGl0ZW0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlTWFwLmdldChpdGVtKSE7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMb2FkbW9yZU5vZGUoaXRlbSwgdGhpcy5kYXRhTWFwLmhhcyhpdGVtKSk7XG4gICAgdGhpcy5ub2RlTWFwLnNldChpdGVtLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIHBhcnRpYWxseSBsb2FkZWQgZGF0YVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWxvYWRtb3JlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtbG9hZG1vcmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RyZWUtbG9hZG1vcmUtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbTG9hZG1vcmVEYXRhYmFzZV1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUxvYWRtb3JlRXhhbXBsZSB7XG4gIG5vZGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTG9hZG1vcmVGbGF0Tm9kZT4oKTtcbiAgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxMb2FkbW9yZUZsYXROb2RlPjtcbiAgdHJlZUZsYXR0ZW5lcjogTWF0VHJlZUZsYXR0ZW5lcjxMb2FkbW9yZU5vZGUsIExvYWRtb3JlRmxhdE5vZGU+O1xuICAvLyBGbGF0IHRyZWUgZGF0YSBzb3VyY2VcbiAgZGF0YVNvdXJjZTogTWF0VHJlZUZsYXREYXRhU291cmNlPExvYWRtb3JlTm9kZSwgTG9hZG1vcmVGbGF0Tm9kZT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YWJhc2U6IExvYWRtb3JlRGF0YWJhc2UpIHtcbiAgICB0aGlzLnRyZWVGbGF0dGVuZXIgPSBuZXcgTWF0VHJlZUZsYXR0ZW5lcih0aGlzLnRyYW5zZm9ybWVyLCB0aGlzLmdldExldmVsLFxuICAgICAgdGhpcy5pc0V4cGFuZGFibGUsIHRoaXMuZ2V0Q2hpbGRyZW4pO1xuXG4gICAgdGhpcy50cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8TG9hZG1vcmVGbGF0Tm9kZT4odGhpcy5nZXRMZXZlbCwgdGhpcy5pc0V4cGFuZGFibGUpO1xuXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRyZWVGbGF0RGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCB0aGlzLnRyZWVGbGF0dGVuZXIpO1xuXG4gICAgX2RhdGFiYXNlLmRhdGFDaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuXG4gICAgX2RhdGFiYXNlLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGdldENoaWxkcmVuID0gKG5vZGU6IExvYWRtb3JlTm9kZSk6IE9ic2VydmFibGU8TG9hZG1vcmVOb2RlW10+ID0+IG5vZGUuY2hpbGRyZW5DaGFuZ2U7XG5cbiAgdHJhbnNmb3JtZXIgPSAobm9kZTogTG9hZG1vcmVOb2RlLCBsZXZlbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdOb2RlID0gdGhpcy5ub2RlTWFwLmdldChub2RlLml0ZW0pO1xuXG4gICAgaWYgKGV4aXN0aW5nTm9kZSkge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdOb2RlID1cbiAgICAgICAgbmV3IExvYWRtb3JlRmxhdE5vZGUobm9kZS5pdGVtLCBsZXZlbCwgbm9kZS5oYXNDaGlsZHJlbiwgbm9kZS5sb2FkTW9yZVBhcmVudEl0ZW0pO1xuICAgIHRoaXMubm9kZU1hcC5zZXQobm9kZS5pdGVtLCBuZXdOb2RlKTtcbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfVxuXG4gIGdldExldmVsID0gKG5vZGU6IExvYWRtb3JlRmxhdE5vZGUpID0+IG5vZGUubGV2ZWw7XG5cbiAgaXNFeHBhbmRhYmxlID0gKG5vZGU6IExvYWRtb3JlRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogTG9hZG1vcmVGbGF0Tm9kZSkgPT4gX25vZGVEYXRhLmV4cGFuZGFibGU7XG5cbiAgaXNMb2FkTW9yZSA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogTG9hZG1vcmVGbGF0Tm9kZSkgPT4gX25vZGVEYXRhLml0ZW0gPT09IExPQURfTU9SRTtcblxuICAvKiogTG9hZCBtb3JlIG5vZGVzIGZyb20gZGF0YSBzb3VyY2UgKi9cbiAgbG9hZE1vcmUoaXRlbTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF0YWJhc2UubG9hZE1vcmUoaXRlbSk7XG4gIH1cblxuICBsb2FkQ2hpbGRyZW4obm9kZTogTG9hZG1vcmVGbGF0Tm9kZSkge1xuICAgIHRoaXMuX2RhdGFiYXNlLmxvYWRNb3JlKG5vZGUuaXRlbSwgdHJ1ZSk7XG4gIH1cbn1cbiIsIjxtYXQtdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XG4gIDwhLS0gTGVhZiBub2RlIC0tPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICB7e25vZGUuaXRlbX19XG4gIDwvbWF0LXRyZWUtbm9kZT5cblxuICA8IS0tIGV4cGFuZGFibGUgbm9kZSAtLT5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIid0b2dnbGUgJyArIG5vZGUuZmlsZW5hbWVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImxvYWRDaGlsZHJlbihub2RlKVwiXG4gICAgICAgICAgICBtYXRUcmVlTm9kZVRvZ2dsZT5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAge3t0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIHt7bm9kZS5pdGVtfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuXG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBpc0xvYWRNb3JlXCI+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJsb2FkTW9yZShub2RlLmxvYWRNb3JlUGFyZW50SXRlbSlcIj5cbiAgICAgIExvYWQgbW9yZS4uLlxuICAgIDwvYnV0dG9uPlxuICA8L21hdC10cmVlLW5vZGU+XG48L21hdC10cmVlPlxuIl19