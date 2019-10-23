import { __read, __spread } from "tslib";
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
    var node_r16 = ctx.$implicit;
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
    var node_r17 = ctx.$implicit;
    var ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "toggle " + node_r17.filename);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.treeControl.isExpanded(node_r17) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r17.item, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", node_r17.isLoading);
} }
/** Flat node with expandable and level information */
var DynamicFlatNode = /** @class */ (function () {
    function DynamicFlatNode(item, level, expandable, isLoading) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (isLoading === void 0) { isLoading = false; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
    return DynamicFlatNode;
}());
export { DynamicFlatNode };
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
var DynamicDatabase = /** @class */ (function () {
    function DynamicDatabase() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']]
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    DynamicDatabase.prototype.initialData = function () {
        return this.rootLevelNodes.map(function (name) { return new DynamicFlatNode(name, 0, true); });
    };
    DynamicDatabase.prototype.getChildren = function (node) {
        return this.dataMap.get(node);
    };
    DynamicDatabase.prototype.isExpandable = function (node) {
        return this.dataMap.has(node);
    };
    return DynamicDatabase;
}());
export { DynamicDatabase };
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var DynamicDataSource = /** @class */ (function () {
    function DynamicDataSource(_treeControl, _database) {
        this._treeControl = _treeControl;
        this._database = _database;
        this.dataChange = new BehaviorSubject([]);
    }
    Object.defineProperty(DynamicDataSource.prototype, "data", {
        get: function () { return this.dataChange.value; },
        set: function (value) {
            this._treeControl.dataNodes = value;
            this.dataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    DynamicDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this._treeControl.expansionModel.changed.subscribe(function (change) {
            if (change.added ||
                change.removed) {
                _this.handleTreeControl(change);
            }
        });
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(function () { return _this.data; }));
    };
    DynamicDataSource.prototype.disconnect = function (collectionViewer) { };
    /** Handle expand/collapse behaviors */
    DynamicDataSource.prototype.handleTreeControl = function (change) {
        var _this = this;
        if (change.added) {
            change.added.forEach(function (node) { return _this.toggleNode(node, true); });
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(function (node) { return _this.toggleNode(node, false); });
        }
    };
    /**
     * Toggle the node, remove from display list
     */
    DynamicDataSource.prototype.toggleNode = function (node, expand) {
        var _this = this;
        var children = this._database.getChildren(node.item);
        var index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(function () {
            var _a;
            if (expand) {
                var nodes = children.map(function (name) {
                    return new DynamicFlatNode(name, node.level + 1, _this._database.isExpandable(name));
                });
                (_a = _this.data).splice.apply(_a, __spread([index + 1, 0], nodes));
            }
            else {
                var count = 0;
                for (var i = index + 1; i < _this.data.length
                    && _this.data[i].level > node.level; i++, count++) { }
                _this.data.splice(index + 1, count);
            }
            // notify the change
            _this.dataChange.next(_this.data);
            node.isLoading = false;
        }, 1000);
    };
    DynamicDataSource.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DynamicDataSource.ctorParameters = function () { return [
        { type: FlatTreeControl },
        { type: DynamicDatabase }
    ]; };
    DynamicDataSource.ɵfac = function DynamicDataSource_Factory(t) { return new (t || DynamicDataSource)(i0.ɵɵinject(i1.FlatTreeControl), i0.ɵɵinject(DynamicDatabase)); };
    DynamicDataSource.ɵprov = i0.ɵɵdefineInjectable({ token: DynamicDataSource, factory: function (t) { return DynamicDataSource.ɵfac(t); }, providedIn: null });
    return DynamicDataSource;
}());
export { DynamicDataSource };
/*@__PURE__*/ i0.ɵsetClassMetadata(DynamicDataSource, [{
        type: Injectable
    }], function () { return [{ type: i1.FlatTreeControl }, { type: DynamicDatabase }]; }, null);
/**
 * @title Tree with dynamic data
 */
var TreeDynamicExample = /** @class */ (function () {
    function TreeDynamicExample(database) {
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
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
    TreeDynamicExample.ctorParameters = function () { return [
        { type: DynamicDatabase }
    ]; };
    TreeDynamicExample.ɵfac = function TreeDynamicExample_Factory(t) { return new (t || TreeDynamicExample)(i0.ɵɵdirectiveInject(DynamicDatabase)); };
    TreeDynamicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeDynamicExample, selectors: [["tree-dynamic-example"]], features: [i0.ɵɵProvidersFeature([DynamicDatabase])], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["mode", "indeterminate", "class", "example-tree-progress-bar", 4, "ngIf"], ["mode", "indeterminate", 1, "example-tree-progress-bar"]], template: function TreeDynamicExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tree", 0);
            i0.ɵɵtemplate(1, TreeDynamicExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
            i0.ɵɵtemplate(2, TreeDynamicExample_mat_tree_node_2_Template, 6, 4, "mat-tree-node", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
        } }, directives: [i2.MatTree, i2.MatTreeNodeDef, i2.MatTreeNode, i2.MatTreeNodePadding, i3.MatButton, i2.MatTreeNodeToggle, i4.MatIcon, i5.NgIf, i6.MatProgressBar], styles: [".example-tree-progress-bar[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}"] });
    return TreeDynamicExample;
}());
export { TreeDynamicExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(TreeDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tree-dynamic-example',
                templateUrl: 'tree-dynamic-example.html',
                styleUrls: ['tree-dynamic-example.css'],
                providers: [DynamicDatabase]
            }]
    }], function () { return [{ type: DynamicDatabase }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1keW5hbWljLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdHJlZS90cmVlLWR5bmFtaWMvdHJlZS1keW5hbWljLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdHJlZS90cmVlLWR5bmFtaWMvdHJlZS1keW5hbWljLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxlQUFlLEVBQUUsS0FBSyxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDSGpDLHdDQUNFO0lBQUEsNEJBQTBDO0lBQzFDLFlBQ0Y7SUFBQSxpQkFBZ0I7OztJQURkLGVBQ0Y7SUFERSw4Q0FDRjs7O0lBU0Usc0NBRXVFOzs7SUFWekUsd0NBQ0U7SUFBQSxpQ0FFRTtJQUFBLG1DQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFXO0lBQ2IsaUJBQVM7SUFDVCxZQUNBO0lBQUEsNkdBRW9EO0lBQ3RELGlCQUFnQjs7OztJQVROLGVBQTZDO0lBQTdDLDJEQUE2QztJQUVqRCxlQUNGO0lBREUsMkdBQ0Y7SUFFRixlQUNBO0lBREEsOENBQ0E7SUFBa0IsZUFBc0I7SUFBdEIseUNBQXNCOztBRFA1QyxzREFBc0Q7QUFDdEQ7SUFDRSx5QkFBbUIsSUFBWSxFQUFTLEtBQVMsRUFBUyxVQUFrQixFQUN6RCxTQUFpQjtRQURJLHNCQUFBLEVBQUEsU0FBUztRQUFT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U0FBUyxDQUFDLFVBQVUsRUFBcEIsQ0FBb0IsQ0FBQztRQWR6RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFrQixJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7b0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUN2QyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzdCOzs7O2dCQUV1QixlQUFlOzt3RkFEMUIsa0JBQWtCLHVCQUNQLGVBQWU7MkRBRDFCLGtCQUFrQiwwRUFGbEIsQ0FBQyxlQUFlLENBQUM7WUN6SDlCLG1DQUNFO1lBQUEsdUZBQ0U7WUFHRix1RkFDRTtZQVdKLGlCQUFXOztZQWpCRCwyQ0FBeUIsZ0NBQUE7WUFLbEIsZUFBMEM7WUFBMUMsaURBQTBDOzs2QkRMM0Q7Q0E0SUMsQUF2QkQsSUF1QkM7U0FqQlksa0JBQWtCO21DQUFsQixrQkFBa0I7Y0FOOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDN0I7c0NBRXVCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbGxlY3Rpb25WaWV3ZXIsIFNlbGVjdGlvbkNoYW5nZSwgRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgbWVyZ2UsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZsYXROb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGl0ZW06IHN0cmluZywgcHVibGljIGxldmVsID0gMSwgcHVibGljIGV4cGFuZGFibGUgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlKSB7fVxufVxuXG4vKipcbiAqIERhdGFiYXNlIGZvciBkeW5hbWljIGRhdGEuIFdoZW4gZXhwYW5kaW5nIGEgbm9kZSBpbiB0aGUgdHJlZSwgdGhlIGRhdGEgc291cmNlIHdpbGwgbmVlZCB0byBmZXRjaFxuICogdGhlIGRlc2NlbmRhbnRzIGRhdGEgZnJvbSB0aGUgZGF0YWJhc2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBEeW5hbWljRGF0YWJhc2Uge1xuICBkYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPihbXG4gICAgWydGcnVpdHMnLCBbJ0FwcGxlJywgJ09yYW5nZScsICdCYW5hbmEnXV0sXG4gICAgWydWZWdldGFibGVzJywgWydUb21hdG8nLCAnUG90YXRvJywgJ09uaW9uJ11dLFxuICAgIFsnQXBwbGUnLCBbJ0Z1amknLCAnTWFjaW50b3NoJ11dLFxuICAgIFsnT25pb24nLCBbJ1llbGxvdycsICdXaGl0ZScsICdQdXJwbGUnXV1cbiAgXSk7XG5cbiAgcm9vdExldmVsTm9kZXM6IHN0cmluZ1tdID0gWydGcnVpdHMnLCAnVmVnZXRhYmxlcyddO1xuXG4gIC8qKiBJbml0aWFsIGRhdGEgZnJvbSBkYXRhYmFzZSAqL1xuICBpbml0aWFsRGF0YSgpOiBEeW5hbWljRmxhdE5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdExldmVsTm9kZXMubWFwKG5hbWUgPT4gbmV3IER5bmFtaWNGbGF0Tm9kZShuYW1lLCAwLCB0cnVlKSk7XG4gIH1cblxuICBnZXRDaGlsZHJlbihub2RlOiBzdHJpbmcpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YU1hcC5nZXQobm9kZSk7XG4gIH1cblxuICBpc0V4cGFuZGFibGUobm9kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YU1hcC5oYXMobm9kZSk7XG4gIH1cbn1cbi8qKlxuICogRmlsZSBkYXRhYmFzZSwgaXQgY2FuIGJ1aWxkIGEgdHJlZSBzdHJ1Y3R1cmVkIEpzb24gb2JqZWN0IGZyb20gc3RyaW5nLlxuICogRWFjaCBub2RlIGluIEpzb24gb2JqZWN0IHJlcHJlc2VudHMgYSBmaWxlIG9yIGEgZGlyZWN0b3J5LiBGb3IgYSBmaWxlLCBpdCBoYXMgZmlsZW5hbWUgYW5kIHR5cGUuXG4gKiBGb3IgYSBkaXJlY3RvcnksIGl0IGhhcyBmaWxlbmFtZSBhbmQgY2hpbGRyZW4gKGEgbGlzdCBvZiBmaWxlcyBvciBkaXJlY3RvcmllcykuXG4gKiBUaGUgaW5wdXQgd2lsbCBiZSBhIGpzb24gb2JqZWN0IHN0cmluZywgYW5kIHRoZSBvdXRwdXQgaXMgYSBsaXN0IG9mIGBGaWxlTm9kZWAgd2l0aCBuZXN0ZWRcbiAqIHN0cnVjdHVyZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIER5bmFtaWNEYXRhU291cmNlIGltcGxlbWVudHMgRGF0YVNvdXJjZTxEeW5hbWljRmxhdE5vZGU+IHtcblxuICBkYXRhQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEeW5hbWljRmxhdE5vZGVbXT4oW10pO1xuXG4gIGdldCBkYXRhKCk6IER5bmFtaWNGbGF0Tm9kZVtdIHsgcmV0dXJuIHRoaXMuZGF0YUNoYW5nZS52YWx1ZTsgfVxuICBzZXQgZGF0YSh2YWx1ZTogRHluYW1pY0ZsYXROb2RlW10pIHtcbiAgICB0aGlzLl90cmVlQ29udHJvbC5kYXRhTm9kZXMgPSB2YWx1ZTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RhdGFiYXNlOiBEeW5hbWljRGF0YWJhc2UpIHt9XG5cbiAgY29ubmVjdChjb2xsZWN0aW9uVmlld2VyOiBDb2xsZWN0aW9uVmlld2VyKTogT2JzZXJ2YWJsZTxEeW5hbWljRmxhdE5vZGVbXT4ge1xuICAgIHRoaXMuX3RyZWVDb250cm9sLmV4cGFuc2lvbk1vZGVsLmNoYW5nZWQuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XG4gICAgICBpZiAoKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikuYWRkZWQgfHxcbiAgICAgICAgKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikucmVtb3ZlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZVRyZWVDb250cm9sKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVyZ2UoY29sbGVjdGlvblZpZXdlci52aWV3Q2hhbmdlLCB0aGlzLmRhdGFDaGFuZ2UpLnBpcGUobWFwKCgpID0+IHRoaXMuZGF0YSkpO1xuICB9XG5cbiAgZGlzY29ubmVjdChjb2xsZWN0aW9uVmlld2VyOiBDb2xsZWN0aW9uVmlld2VyKTogdm9pZCB7fVxuXG4gIC8qKiBIYW5kbGUgZXhwYW5kL2NvbGxhcHNlIGJlaGF2aW9ycyAqL1xuICBoYW5kbGVUcmVlQ29udHJvbChjaGFuZ2U6IFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KSB7XG4gICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgY2hhbmdlLmFkZGVkLmZvckVhY2gobm9kZSA9PiB0aGlzLnRvZ2dsZU5vZGUobm9kZSwgdHJ1ZSkpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgIGNoYW5nZS5yZW1vdmVkLnNsaWNlKCkucmV2ZXJzZSgpLmZvckVhY2gobm9kZSA9PiB0aGlzLnRvZ2dsZU5vZGUobm9kZSwgZmFsc2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBub2RlLCByZW1vdmUgZnJvbSBkaXNwbGF5IGxpc3RcbiAgICovXG4gIHRvZ2dsZU5vZGUobm9kZTogRHluYW1pY0ZsYXROb2RlLCBleHBhbmQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2RhdGFiYXNlLmdldENoaWxkcmVuKG5vZGUuaXRlbSk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEuaW5kZXhPZihub2RlKTtcbiAgICBpZiAoIWNoaWxkcmVuIHx8IGluZGV4IDwgMCkgeyAvLyBJZiBubyBjaGlsZHJlbiwgb3IgY2Fubm90IGZpbmQgdGhlIG5vZGUsIG5vIG9wXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbm9kZS5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoZXhwYW5kKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ubWFwKG5hbWUgPT5cbiAgICAgICAgICBuZXcgRHluYW1pY0ZsYXROb2RlKG5hbWUsIG5vZGUubGV2ZWwgKyAxLCB0aGlzLl9kYXRhYmFzZS5pc0V4cGFuZGFibGUobmFtZSkpKTtcbiAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCArIDEsIDAsIC4uLm5vZGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleCArIDE7IGkgPCB0aGlzLmRhdGEubGVuZ3RoXG4gICAgICAgICAgJiYgdGhpcy5kYXRhW2ldLmxldmVsID4gbm9kZS5sZXZlbDsgaSsrLCBjb3VudCsrKSB7fVxuICAgICAgICB0aGlzLmRhdGEuc3BsaWNlKGluZGV4ICsgMSwgY291bnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBub3RpZnkgdGhlIGNoYW5nZVxuICAgICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgICAgIG5vZGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIGR5bmFtaWMgZGF0YVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWR5bmFtaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1keW5hbWljLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0cmVlLWR5bmFtaWMtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbRHluYW1pY0RhdGFiYXNlXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlRHluYW1pY0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihkYXRhYmFzZTogRHluYW1pY0RhdGFiYXNlKSB7XG4gICAgdGhpcy50cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPih0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IER5bmFtaWNEYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIGRhdGFiYXNlKTtcblxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YWJhc2UuaW5pdGlhbERhdGEoKTtcbiAgfVxuXG4gIHRyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPjtcblxuICBkYXRhU291cmNlOiBEeW5hbWljRGF0YVNvdXJjZTtcblxuICBnZXRMZXZlbCA9IChub2RlOiBEeW5hbWljRmxhdE5vZGUpID0+IG5vZGUubGV2ZWw7XG5cbiAgaXNFeHBhbmRhYmxlID0gKG5vZGU6IER5bmFtaWNGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBEeW5hbWljRmxhdE5vZGUpID0+IF9ub2RlRGF0YS5leHBhbmRhYmxlO1xufVxuIiwiPG1hdC10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLml0ZW19fVxuICA8L21hdC10cmVlLW5vZGU+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCIndG9nZ2xlICcgKyBub2RlLmZpbGVuYW1lXCIgbWF0VHJlZU5vZGVUb2dnbGU+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUuaXRlbX19XG4gICAgPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9XCJub2RlLmlzTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImluZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS10cmVlLXByb2dyZXNzLWJhclwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==