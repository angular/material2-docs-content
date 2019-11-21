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
    var node_r26 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r26.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    var _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 4);
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_2_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r29); var node_r27 = ctx.$implicit; var ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.loadChildren(node_r27); });
    i0.ɵɵelementStart(2, "mat-icon", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r27 = ctx.$implicit;
    var ctx_r24 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "toggle " + node_r27.filename);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r24.treeControl.isExpanded(node_r27) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r27.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    var _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node");
    i0.ɵɵelementStart(1, "button", 8);
    i0.ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_3_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r32); var node_r30 = ctx.$implicit; var ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.loadMore(node_r30.loadMoreParentItem); });
    i0.ɵɵtext(2, " Load more... ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var LOAD_MORE = 'LOAD_MORE';
/** Nested node */
var LoadmoreNode = /** @class */ (function () {
    function LoadmoreNode(item, hasChildren, loadMoreParentItem) {
        if (hasChildren === void 0) { hasChildren = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new BehaviorSubject([]);
    }
    Object.defineProperty(LoadmoreNode.prototype, "children", {
        get: function () {
            return this.childrenChange.value;
        },
        enumerable: true,
        configurable: true
    });
    return LoadmoreNode;
}());
export { LoadmoreNode };
/** Flat node with expandable and level information */
var LoadmoreFlatNode = /** @class */ (function () {
    function LoadmoreFlatNode(item, level, expandable, loadMoreParentItem) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
    return LoadmoreFlatNode;
}());
export { LoadmoreFlatNode };
/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
var LoadmoreDatabase = /** @class */ (function () {
    function LoadmoreDatabase() {
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
    LoadmoreDatabase.prototype.initialize = function () {
        var _this = this;
        var data = this.rootLevelNodes.map(function (name) { return _this._generateNode(name); });
        this.dataChange.next(data);
    };
    /** Expand a node whose children are not loaded */
    LoadmoreDatabase.prototype.loadMore = function (item, onlyFirstTime) {
        var _this = this;
        if (onlyFirstTime === void 0) { onlyFirstTime = false; }
        if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
        }
        var parent = this.nodeMap.get(item);
        var children = this.dataMap.get(item);
        if (onlyFirstTime && parent.children.length > 0) {
            return;
        }
        var newChildrenNumber = parent.children.length + this.batchNumber;
        var nodes = children.slice(0, newChildrenNumber)
            .map(function (name) { return _this._generateNode(name); });
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    };
    LoadmoreDatabase.prototype._generateNode = function (item) {
        if (this.nodeMap.has(item)) {
            return this.nodeMap.get(item);
        }
        var result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    };
    LoadmoreDatabase.decorators = [
        { type: Injectable },
    ];
    LoadmoreDatabase.ɵfac = function LoadmoreDatabase_Factory(t) { return new (t || LoadmoreDatabase)(); };
    LoadmoreDatabase.ɵprov = i0.ɵɵdefineInjectable({ token: LoadmoreDatabase, factory: function (t) { return LoadmoreDatabase.ɵfac(t); }, providedIn: null });
    return LoadmoreDatabase;
}());
export { LoadmoreDatabase };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoadmoreDatabase, [{
        type: Injectable
    }], null, null); })();
/**
 * @title Tree with partially loaded data
 */
var TreeLoadmoreExample = /** @class */ (function () {
    function TreeLoadmoreExample(_database) {
        var _this = this;
        this._database = _database;
        this.nodeMap = new Map();
        this.getChildren = function (node) { return node.childrenChange; };
        this.transformer = function (node, level) {
            var existingNode = _this.nodeMap.get(node.item);
            if (existingNode) {
                return existingNode;
            }
            var newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            _this.nodeMap.set(node.item, newNode);
            return newNode;
        };
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.isLoadMore = function (_, _nodeData) { return _nodeData.item === LOAD_MORE; };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        _database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
        _database.initialize();
    }
    /** Load more nodes from data source */
    TreeLoadmoreExample.prototype.loadMore = function (item) {
        this._database.loadMore(item);
    };
    TreeLoadmoreExample.prototype.loadChildren = function (node) {
        this._database.loadMore(node.item, true);
    };
    TreeLoadmoreExample.decorators = [
        { type: Component, args: [{
                    selector: 'tree-loadmore-example',
                    templateUrl: 'tree-loadmore-example.html',
                    styleUrls: ['tree-loadmore-example.css'],
                    providers: [LoadmoreDatabase]
                },] },
    ];
    /** @nocollapse */
    TreeLoadmoreExample.ctorParameters = function () { return [
        { type: LoadmoreDatabase }
    ]; };
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
    return TreeLoadmoreExample;
}());
export { TreeLoadmoreExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeLoadmoreExample, [{
        type: Component,
        args: [{
                selector: 'tree-loadmore-example',
                templateUrl: 'tree-loadmore-example.html',
                styleUrls: ['tree-loadmore-example.css'],
                providers: [LoadmoreDatabase]
            }]
    }], function () { return [{ type: LoadmoreDatabase }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sb2FkbW9yZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdHJlZS90cmVlLWxvYWRtb3JlL3RyZWUtbG9hZG1vcmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1sb2FkbW9yZS90cmVlLWxvYWRtb3JlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0lDUi9DLHdDQUNFO0lBQUEsNEJBQTBDO0lBQzFDLFlBQ0Y7SUFBQSxpQkFBZ0I7OztJQURkLGVBQ0Y7SUFERSw4Q0FDRjs7OztJQUdBLHdDQUNFO0lBQUEsaUNBSUU7SUFGTSxnUEFBNEI7SUFFbEMsbUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQVc7SUFDYixpQkFBUztJQUNULFlBQ0Y7SUFBQSxpQkFBZ0I7Ozs7SUFSTixlQUE2QztJQUE3QywyREFBNkM7SUFJakQsZUFDRjtJQURFLDJHQUNGO0lBRUYsZUFDRjtJQURFLDhDQUNGOzs7O0lBRUEscUNBQ0U7SUFBQSxpQ0FDRTtJQURpQiwrUEFBMkM7SUFDNUQsOEJBQ0Y7SUFBQSxpQkFBUztJQUNYLGlCQUFnQjs7QURabEIsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBRTlC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MkVBRm5CLENBQUMsZ0JBQWdCLENBQUM7WUNsRy9CLG1DQUNFO1lBQ0Esd0ZBQ0U7WUFLRix3RkFDRTtZQVdGLHdGQUNFO1lBSUosaUJBQVc7O1lBekJELDJDQUF5QixnQ0FBQTtZQVFsQixlQUEwQztZQUExQyxpREFBMEM7WUFZMUMsZUFBNEM7WUFBNUMsbURBQTRDOzs4QkRwQjdEO0NBeUpDLEFBM0RELElBMkRDO1NBckRZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBTi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDOUI7c0NBUWdDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VHJlZUZsYXREYXRhU291cmNlLCBNYXRUcmVlRmxhdHRlbmVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuY29uc3QgTE9BRF9NT1JFID0gJ0xPQURfTU9SRSc7XG5cbi8qKiBOZXN0ZWQgbm9kZSAqL1xuZXhwb3J0IGNsYXNzIExvYWRtb3JlTm9kZSB7XG4gIGNoaWxkcmVuQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMb2FkbW9yZU5vZGVbXT4oW10pO1xuXG4gIGdldCBjaGlsZHJlbigpOiBMb2FkbW9yZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5DaGFuZ2UudmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbTogc3RyaW5nLFxuICAgICAgICAgICAgICBwdWJsaWMgaGFzQ2hpbGRyZW4gPSBmYWxzZSxcbiAgICAgICAgICAgICAgcHVibGljIGxvYWRNb3JlUGFyZW50SXRlbTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHt9XG59XG5cbi8qKiBGbGF0IG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGNsYXNzIExvYWRtb3JlRmxhdE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbTogc3RyaW5nLFxuICAgICAgICAgICAgICBwdWJsaWMgbGV2ZWwgPSAxLFxuICAgICAgICAgICAgICBwdWJsaWMgZXhwYW5kYWJsZSA9IGZhbHNlLFxuICAgICAgICAgICAgICBwdWJsaWMgbG9hZE1vcmVQYXJlbnRJdGVtOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge31cbn1cblxuLyoqXG4gKiBBIGRhdGFiYXNlIHRoYXQgb25seSBsb2FkIHBhcnQgb2YgdGhlIGRhdGEgaW5pdGlhbGx5LiBBZnRlciB1c2VyIGNsaWNrcyBvbiB0aGUgYExvYWQgbW9yZWBcbiAqIGJ1dHRvbiwgbW9yZSBkYXRhIHdpbGwgYmUgbG9hZGVkLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9hZG1vcmVEYXRhYmFzZSB7XG4gIGJhdGNoTnVtYmVyID0gNTtcbiAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TG9hZG1vcmVOb2RlW10+KFtdKTtcbiAgbm9kZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBMb2FkbW9yZU5vZGU+KCk7XG5cbiAgLyoqIFRoZSBkYXRhICovXG4gIHJvb3RMZXZlbE5vZGVzOiBzdHJpbmdbXSA9IFsnVmVnZXRhYmxlcycsICdGcnVpdHMnXTtcbiAgZGF0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oW1xuICAgIFsnRnJ1aXRzJywgWydBcHBsZScsICdPcmFuZ2UnLCAnQmFuYW5hJ11dLFxuICAgIFsnVmVnZXRhYmxlcycsIFsnVG9tYXRvJywgJ1BvdGF0bycsICdPbmlvbiddXSxcbiAgICBbJ0FwcGxlJywgWydGdWppJywgJ01hY2ludG9zaCddXSxcbiAgICBbJ09uaW9uJywgWydZZWxsb3cnLCAnV2hpdGUnLCAnUHVycGxlJywgJ0dyZWVuJywgJ1NoYWxsb3QnLCAnU3dlZXQnLCAnUmVkJywgJ0xlZWsnXV0sXG4gIF0pO1xuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucm9vdExldmVsTm9kZXMubWFwKG5hbWUgPT4gdGhpcy5fZ2VuZXJhdGVOb2RlKG5hbWUpKTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dChkYXRhKTtcbiAgfVxuXG4gIC8qKiBFeHBhbmQgYSBub2RlIHdob3NlIGNoaWxkcmVuIGFyZSBub3QgbG9hZGVkICovXG4gIGxvYWRNb3JlKGl0ZW06IHN0cmluZywgb25seUZpcnN0VGltZSA9IGZhbHNlKSB7XG4gICAgaWYgKCF0aGlzLm5vZGVNYXAuaGFzKGl0ZW0pIHx8ICF0aGlzLmRhdGFNYXAuaGFzKGl0ZW0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMubm9kZU1hcC5nZXQoaXRlbSkhO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5kYXRhTWFwLmdldChpdGVtKSE7XG4gICAgaWYgKG9ubHlGaXJzdFRpbWUgJiYgcGFyZW50LmNoaWxkcmVuIS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld0NoaWxkcmVuTnVtYmVyID0gcGFyZW50LmNoaWxkcmVuIS5sZW5ndGggKyB0aGlzLmJhdGNoTnVtYmVyO1xuICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4uc2xpY2UoMCwgbmV3Q2hpbGRyZW5OdW1iZXIpXG4gICAgICAubWFwKG5hbWUgPT4gdGhpcy5fZ2VuZXJhdGVOb2RlKG5hbWUpKTtcbiAgICBpZiAobmV3Q2hpbGRyZW5OdW1iZXIgPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIC8vIE5lZWQgYSBuZXcgbG9hZCBtb3JlIG5vZGVcbiAgICAgIG5vZGVzLnB1c2gobmV3IExvYWRtb3JlTm9kZShMT0FEX01PUkUsIGZhbHNlLCBpdGVtKSk7XG4gICAgfVxuXG4gICAgcGFyZW50LmNoaWxkcmVuQ2hhbmdlLm5leHQobm9kZXMpO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YUNoYW5nZS52YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9nZW5lcmF0ZU5vZGUoaXRlbTogc3RyaW5nKTogTG9hZG1vcmVOb2RlIHtcbiAgICBpZiAodGhpcy5ub2RlTWFwLmhhcyhpdGVtKSkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZU1hcC5nZXQoaXRlbSkhO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTG9hZG1vcmVOb2RlKGl0ZW0sIHRoaXMuZGF0YU1hcC5oYXMoaXRlbSkpO1xuICAgIHRoaXMubm9kZU1hcC5zZXQoaXRlbSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBwYXJ0aWFsbHkgbG9hZGVkIGRhdGFcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1sb2FkbW9yZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWxvYWRtb3JlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0cmVlLWxvYWRtb3JlLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW0xvYWRtb3JlRGF0YWJhc2VdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVMb2FkbW9yZUV4YW1wbGUge1xuICBub2RlTWFwID0gbmV3IE1hcDxzdHJpbmcsIExvYWRtb3JlRmxhdE5vZGU+KCk7XG4gIHRyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8TG9hZG1vcmVGbGF0Tm9kZT47XG4gIHRyZWVGbGF0dGVuZXI6IE1hdFRyZWVGbGF0dGVuZXI8TG9hZG1vcmVOb2RlLCBMb2FkbW9yZUZsYXROb2RlPjtcbiAgLy8gRmxhdCB0cmVlIGRhdGEgc291cmNlXG4gIGRhdGFTb3VyY2U6IE1hdFRyZWVGbGF0RGF0YVNvdXJjZTxMb2FkbW9yZU5vZGUsIExvYWRtb3JlRmxhdE5vZGU+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFiYXNlOiBMb2FkbW9yZURhdGFiYXNlKSB7XG4gICAgdGhpcy50cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIodGhpcy50cmFuc2Zvcm1lciwgdGhpcy5nZXRMZXZlbCxcbiAgICAgIHRoaXMuaXNFeHBhbmRhYmxlLCB0aGlzLmdldENoaWxkcmVuKTtcblxuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPExvYWRtb3JlRmxhdE5vZGU+KHRoaXMuZ2V0TGV2ZWwsIHRoaXMuaXNFeHBhbmRhYmxlKTtcblxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlRmxhdERhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgdGhpcy50cmVlRmxhdHRlbmVyKTtcblxuICAgIF9kYXRhYmFzZS5kYXRhQ2hhbmdlLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YTtcbiAgICB9KTtcblxuICAgIF9kYXRhYmFzZS5pbml0aWFsaXplKCk7XG4gIH1cblxuICBnZXRDaGlsZHJlbiA9IChub2RlOiBMb2FkbW9yZU5vZGUpOiBPYnNlcnZhYmxlPExvYWRtb3JlTm9kZVtdPiA9PiBub2RlLmNoaWxkcmVuQ2hhbmdlO1xuXG4gIHRyYW5zZm9ybWVyID0gKG5vZGU6IExvYWRtb3JlTm9kZSwgbGV2ZWw6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IHRoaXMubm9kZU1hcC5nZXQobm9kZS5pdGVtKTtcblxuICAgIGlmIChleGlzdGluZ05vZGUpIHtcbiAgICAgIHJldHVybiBleGlzdGluZ05vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3Tm9kZSA9XG4gICAgICAgIG5ldyBMb2FkbW9yZUZsYXROb2RlKG5vZGUuaXRlbSwgbGV2ZWwsIG5vZGUuaGFzQ2hpbGRyZW4sIG5vZGUubG9hZE1vcmVQYXJlbnRJdGVtKTtcbiAgICB0aGlzLm5vZGVNYXAuc2V0KG5vZGUuaXRlbSwgbmV3Tm9kZSk7XG4gICAgcmV0dXJuIG5ld05vZGU7XG4gIH1cblxuICBnZXRMZXZlbCA9IChub2RlOiBMb2FkbW9yZUZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBMb2FkbW9yZUZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IExvYWRtb3JlRmxhdE5vZGUpID0+IF9ub2RlRGF0YS5leHBhbmRhYmxlO1xuXG4gIGlzTG9hZE1vcmUgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IExvYWRtb3JlRmxhdE5vZGUpID0+IF9ub2RlRGF0YS5pdGVtID09PSBMT0FEX01PUkU7XG5cbiAgLyoqIExvYWQgbW9yZSBub2RlcyBmcm9tIGRhdGEgc291cmNlICovXG4gIGxvYWRNb3JlKGl0ZW06IHN0cmluZykge1xuICAgIHRoaXMuX2RhdGFiYXNlLmxvYWRNb3JlKGl0ZW0pO1xuICB9XG5cbiAgbG9hZENoaWxkcmVuKG5vZGU6IExvYWRtb3JlRmxhdE5vZGUpIHtcbiAgICB0aGlzLl9kYXRhYmFzZS5sb2FkTW9yZShub2RlLml0ZW0sIHRydWUpO1xuICB9XG59XG4iLCI8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICA8IS0tIExlYWYgbm9kZSAtLT5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLml0ZW19fVxuICA8L21hdC10cmVlLW5vZGU+XG5cbiAgPCEtLSBleHBhbmRhYmxlIG5vZGUgLS0+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCIndG9nZ2xlICcgKyBub2RlLmZpbGVuYW1lXCJcbiAgICAgICAgICAgIChjbGljayk9XCJsb2FkQ2hpbGRyZW4obm9kZSlcIlxuICAgICAgICAgICAgbWF0VHJlZU5vZGVUb2dnbGU+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUuaXRlbX19XG4gIDwvbWF0LXRyZWUtbm9kZT5cblxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaXNMb2FkTW9yZVwiPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwibG9hZE1vcmUobm9kZS5sb2FkTW9yZVBhcmVudEl0ZW0pXCI+XG4gICAgICBMb2FkIG1vcmUuLi5cbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==