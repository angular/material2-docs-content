import * as tslib_1 from "tslib";
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
/**
 * Node for to-do item
 */
var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());
export { TodoItemNode };
/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());
export { TodoItemFlatNode };
/**
 * The Json object for to-do list data.
 */
var TREE_DATA = {
    Groceries: {
        'Almond Meal flour': null,
        'Organic eggs': null,
        'Protein Powder': null,
        Fruits: {
            Apple: null,
            Berries: ['Blueberry', 'Raspberry'],
            Orange: null
        }
    },
    Reminders: [
        'Cook dinner',
        'Read the Material Design spec',
        'Upgrade Application to Angular'
    ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase = /** @class */ (function () {
    function ChecklistDatabase() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase.prototype.initialize = function () {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        var data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    ChecklistDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    /** Add an item to to-do list */
    ChecklistDatabase.prototype.insertItem = function (parent, name) {
        if (parent.children) {
            parent.children.push({ item: name });
            this.dataChange.next(this.data);
        }
    };
    ChecklistDatabase.prototype.updateItem = function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], ChecklistDatabase);
    return ChecklistDatabase;
}());
export { ChecklistDatabase };
/**
 * @title Tree with checkboxes
 */
var TreeChecklistExample = /** @class */ (function () {
    function TreeChecklistExample(database) {
        var _this = this;
        this.database = database;
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new SelectionModel(true /* multiple */);
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) { return node.children; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var existingNode = _this.nestedNodeMap.get(node);
            var flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    }
    /** Whether all the descendants of the node are selected. */
    TreeChecklistExample.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var descAllSelected = descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        return descAllSelected;
    };
    /** Whether part of the descendants are selected */
    TreeChecklistExample.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    TreeChecklistExample.prototype.todoItemSelectionToggle = function (node) {
        var _this = this;
        var _a, _b;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, tslib_1.__spread(descendants)) : (_b = this.checklistSelection).deselect.apply(_b, tslib_1.__spread(descendants));
        // Force update for the parent
        descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        this.checkAllParentsSelection(node);
    };
    /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
    TreeChecklistExample.prototype.todoLeafItemSelectionToggle = function (node) {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
    };
    /* Checks all the parents when a leaf node is selected/unselected */
    TreeChecklistExample.prototype.checkAllParentsSelection = function (node) {
        var parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    };
    /** Check root node checked state and change it accordingly */
    TreeChecklistExample.prototype.checkRootNodeSelection = function (node) {
        var _this = this;
        var nodeSelected = this.checklistSelection.isSelected(node);
        var descendants = this.treeControl.getDescendants(node);
        var descAllSelected = descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    };
    /* Get the parent node of a node */
    TreeChecklistExample.prototype.getParentNode = function (node) {
        var currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (var i = startIndex; i >= 0; i--) {
            var currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    };
    /** Select the category so we can insert the new item. */
    TreeChecklistExample.prototype.addNewItem = function (node) {
        var parentNode = this.flatNodeMap.get(node);
        this.database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    TreeChecklistExample.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem(nestedNode, itemValue);
    };
    TreeChecklistExample = tslib_1.__decorate([
        Component({
            selector: 'tree-checklist-example',
            template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n                  [checked]=\"checklistSelection.isSelected(node)\"\n                  (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-form-field>\n      <input matInput #itemValue placeholder=\"New item...\">\n    </mat-form-field>\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>\n",
            providers: [ChecklistDatabase],
            styles: [""]
        }),
        tslib_1.__metadata("design:paramtypes", [ChecklistDatabase])
    ], TreeChecklistExample);
    return TreeChecklistExample;
}());
export { TreeChecklistExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jaGVja2xpc3QtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90cmVlLWNoZWNrbGlzdC90cmVlLWNoZWNrbGlzdC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9FLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFckM7O0dBRUc7QUFDSDtJQUFBO0lBR0EsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7O0FBRUQsaUVBQWlFO0FBQ2pFO0lBQUE7SUFJQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7QUFFRDs7R0FFRztBQUNILElBQU0sU0FBUyxHQUFHO0lBQ2hCLFNBQVMsRUFBRTtRQUNULG1CQUFtQixFQUFFLElBQUk7UUFDekIsY0FBYyxFQUFFLElBQUk7UUFDcEIsZ0JBQWdCLEVBQUUsSUFBSTtRQUN0QixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7WUFDbkMsTUFBTSxFQUFFLElBQUk7U0FDYjtLQUNGO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsYUFBYTtRQUNiLCtCQUErQjtRQUMvQixnQ0FBZ0M7S0FDakM7Q0FDRixDQUFDO0FBRUY7Ozs7R0FJRztBQUVIO0lBS0U7UUFKQSxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQWlCLEVBQUUs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UyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxZQUFZLEVBQUU7Z0JBQzdDLE9BQU8sV0FBVyxDQUFDO2FBQ3BCO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx5REFBeUQ7SUFDekQseUNBQVUsR0FBVixVQUFXLElBQXNCO1FBQy9CLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQWdDO0lBQ2hDLHVDQUFRLEdBQVIsVUFBUyxJQUFzQixFQUFFLFNBQWlCO1FBQ2hELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBdEpVLG9CQUFvQjtRQU5oQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLDI5Q0FBMEM7WUFFMUMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7O1NBQy9CLENBQUM7aURBdUI4QixpQkFBaUI7T0F0QnBDLG9CQUFvQixDQXVKaEM7SUFBRCwyQkFBQztDQUFBLEFBdkpELElBdUpDO1NBdkpZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlRmxhdERhdGFTb3VyY2UsIE1hdFRyZWVGbGF0dGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIE5vZGUgZm9yIHRvLWRvIGl0ZW1cbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9JdGVtTm9kZSB7XG4gIGNoaWxkcmVuOiBUb2RvSXRlbU5vZGVbXTtcbiAgaXRlbTogc3RyaW5nO1xufVxuXG4vKiogRmxhdCB0by1kbyBpdGVtIG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9JdGVtRmxhdE5vZGUge1xuICBpdGVtOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG4gIGV4cGFuZGFibGU6IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhlIEpzb24gb2JqZWN0IGZvciB0by1kbyBsaXN0IGRhdGEuXG4gKi9cbmNvbnN0IFRSRUVfREFUQSA9IHtcbiAgR3JvY2VyaWVzOiB7XG4gICAgJ0FsbW9uZCBNZWFsIGZsb3VyJzogbnVsbCxcbiAgICAnT3JnYW5pYyBlZ2dzJzogbnVsbCxcbiAgICAnUHJvdGVpbiBQb3dkZXInOiBudWxsLFxuICAgIEZydWl0czoge1xuICAgICAgQXBwbGU6IG51bGwsXG4gICAgICBCZXJyaWVzOiBbJ0JsdWViZXJyeScsICdSYXNwYmVycnknXSxcbiAgICAgIE9yYW5nZTogbnVsbFxuICAgIH1cbiAgfSxcbiAgUmVtaW5kZXJzOiBbXG4gICAgJ0Nvb2sgZGlubmVyJyxcbiAgICAnUmVhZCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMnLFxuICAgICdVcGdyYWRlIEFwcGxpY2F0aW9uIHRvIEFuZ3VsYXInXG4gIF1cbn07XG5cbi8qKlxuICogQ2hlY2tsaXN0IGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIHRvLWRvIGl0ZW0gb3IgYSBjYXRlZ29yeS5cbiAqIElmIGEgbm9kZSBpcyBhIGNhdGVnb3J5LCBpdCBoYXMgY2hpbGRyZW4gaXRlbXMgYW5kIG5ldyBpdGVtcyBjYW4gYmUgYWRkZWQgdW5kZXIgdGhlIGNhdGVnb3J5LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hlY2tsaXN0RGF0YWJhc2Uge1xuICBkYXRhQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUb2RvSXRlbU5vZGVbXT4oW10pO1xuXG4gIGdldCBkYXRhKCk6IFRvZG9JdGVtTm9kZVtdIHsgcmV0dXJuIHRoaXMuZGF0YUNoYW5nZS52YWx1ZTsgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBCdWlsZCB0aGUgdHJlZSBub2RlcyBmcm9tIEpzb24gb2JqZWN0LiBUaGUgcmVzdWx0IGlzIGEgbGlzdCBvZiBgVG9kb0l0ZW1Ob2RlYCB3aXRoIG5lc3RlZFxuICAgIC8vICAgICBmaWxlIG5vZGUgYXMgY2hpbGRyZW4uXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuYnVpbGRGaWxlVHJlZShUUkVFX0RBVEEsIDApO1xuXG4gICAgLy8gTm90aWZ5IHRoZSBjaGFuZ2UuXG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIGZpbGUgc3RydWN0dXJlIHRyZWUuIFRoZSBgdmFsdWVgIGlzIHRoZSBKc29uIG9iamVjdCwgb3IgYSBzdWItdHJlZSBvZiBhIEpzb24gb2JqZWN0LlxuICAgKiBUaGUgcmV0dXJuIHZhbHVlIGlzIHRoZSBsaXN0IG9mIGBUb2RvSXRlbU5vZGVgLlxuICAgKi9cbiAgYnVpbGRGaWxlVHJlZShvYmo6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBsZXZlbDogbnVtYmVyKTogVG9kb0l0ZW1Ob2RlW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZTxUb2RvSXRlbU5vZGVbXT4oKGFjY3VtdWxhdG9yLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICBjb25zdCBub2RlID0gbmV3IFRvZG9JdGVtTm9kZSgpO1xuICAgICAgbm9kZS5pdGVtID0ga2V5O1xuXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSB0aGlzLmJ1aWxkRmlsZVRyZWUodmFsdWUsIGxldmVsICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5pdGVtID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yLmNvbmNhdChub2RlKTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICAvKiogQWRkIGFuIGl0ZW0gdG8gdG8tZG8gbGlzdCAqL1xuICBpbnNlcnRJdGVtKHBhcmVudDogVG9kb0l0ZW1Ob2RlLCBuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAocGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh7aXRlbTogbmFtZX0gYXMgVG9kb0l0ZW1Ob2RlKTtcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSXRlbShub2RlOiBUb2RvSXRlbU5vZGUsIG5hbWU6IHN0cmluZykge1xuICAgIG5vZGUuaXRlbSA9IG5hbWU7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggY2hlY2tib3hlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWNoZWNrbGlzdC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWNoZWNrbGlzdC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1jaGVja2xpc3QtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbQ2hlY2tsaXN0RGF0YWJhc2VdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVDaGVja2xpc3RFeGFtcGxlIHtcbiAgLyoqIE1hcCBmcm9tIGZsYXQgbm9kZSB0byBuZXN0ZWQgbm9kZS4gVGhpcyBoZWxwcyB1cyBmaW5kaW5nIHRoZSBuZXN0ZWQgbm9kZSB0byBiZSBtb2RpZmllZCAqL1xuICBmbGF0Tm9kZU1hcCA9IG5ldyBNYXA8VG9kb0l0ZW1GbGF0Tm9kZSwgVG9kb0l0ZW1Ob2RlPigpO1xuXG4gIC8qKiBNYXAgZnJvbSBuZXN0ZWQgbm9kZSB0byBmbGF0dGVuZWQgbm9kZS4gVGhpcyBoZWxwcyB1cyB0byBrZWVwIHRoZSBzYW1lIG9iamVjdCBmb3Igc2VsZWN0aW9uICovXG4gIG5lc3RlZE5vZGVNYXAgPSBuZXcgTWFwPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT4oKTtcblxuICAvKiogQSBzZWxlY3RlZCBwYXJlbnQgbm9kZSB0byBiZSBpbnNlcnRlZCAqL1xuICBzZWxlY3RlZFBhcmVudDogVG9kb0l0ZW1GbGF0Tm9kZSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBUaGUgbmV3IGl0ZW0ncyBuYW1lICovXG4gIG5ld0l0ZW1OYW1lID0gJyc7XG5cbiAgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxUb2RvSXRlbUZsYXROb2RlPjtcblxuICB0cmVlRmxhdHRlbmVyOiBNYXRUcmVlRmxhdHRlbmVyPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT47XG5cbiAgZGF0YVNvdXJjZTogTWF0VHJlZUZsYXREYXRhU291cmNlPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT47XG5cbiAgLyoqIFRoZSBzZWxlY3Rpb24gZm9yIGNoZWNrbGlzdCAqL1xuICBjaGVja2xpc3RTZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8VG9kb0l0ZW1GbGF0Tm9kZT4odHJ1ZSAvKiBtdWx0aXBsZSAqLyk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhYmFzZTogQ2hlY2tsaXN0RGF0YWJhc2UpIHtcbiAgICB0aGlzLnRyZWVGbGF0dGVuZXIgPSBuZXcgTWF0VHJlZUZsYXR0ZW5lcih0aGlzLnRyYW5zZm9ybWVyLCB0aGlzLmdldExldmVsLFxuICAgICAgdGhpcy5pc0V4cGFuZGFibGUsIHRoaXMuZ2V0Q2hpbGRyZW4pO1xuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPFRvZG9JdGVtRmxhdE5vZGU+KHRoaXMuZ2V0TGV2ZWwsIHRoaXMuaXNFeHBhbmRhYmxlKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZUZsYXREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMudHJlZUZsYXR0ZW5lcik7XG5cbiAgICBkYXRhYmFzZS5kYXRhQ2hhbmdlLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldExldmVsID0gKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpID0+IG5vZGUubGV2ZWw7XG5cbiAgaXNFeHBhbmRhYmxlID0gKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBnZXRDaGlsZHJlbiA9IChub2RlOiBUb2RvSXRlbU5vZGUpOiBUb2RvSXRlbU5vZGVbXSA9PiBub2RlLmNoaWxkcmVuO1xuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBfbm9kZURhdGEuZXhwYW5kYWJsZTtcblxuICBoYXNOb0NvbnRlbnQgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IFRvZG9JdGVtRmxhdE5vZGUpID0+IF9ub2RlRGF0YS5pdGVtID09PSAnJztcblxuICAvKipcbiAgICogVHJhbnNmb3JtZXIgdG8gY29udmVydCBuZXN0ZWQgbm9kZSB0byBmbGF0IG5vZGUuIFJlY29yZCB0aGUgbm9kZXMgaW4gbWFwcyBmb3IgbGF0ZXIgdXNlLlxuICAgKi9cbiAgdHJhbnNmb3JtZXIgPSAobm9kZTogVG9kb0l0ZW1Ob2RlLCBsZXZlbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdOb2RlID0gdGhpcy5uZXN0ZWROb2RlTWFwLmdldChub2RlKTtcbiAgICBjb25zdCBmbGF0Tm9kZSA9IGV4aXN0aW5nTm9kZSAmJiBleGlzdGluZ05vZGUuaXRlbSA9PT0gbm9kZS5pdGVtXG4gICAgICAgID8gZXhpc3RpbmdOb2RlXG4gICAgICAgIDogbmV3IFRvZG9JdGVtRmxhdE5vZGUoKTtcbiAgICBmbGF0Tm9kZS5pdGVtID0gbm9kZS5pdGVtO1xuICAgIGZsYXROb2RlLmxldmVsID0gbGV2ZWw7XG4gICAgZmxhdE5vZGUuZXhwYW5kYWJsZSA9ICEhbm9kZS5jaGlsZHJlbjtcbiAgICB0aGlzLmZsYXROb2RlTWFwLnNldChmbGF0Tm9kZSwgbm9kZSk7XG4gICAgdGhpcy5uZXN0ZWROb2RlTWFwLnNldChub2RlLCBmbGF0Tm9kZSk7XG4gICAgcmV0dXJuIGZsYXROb2RlO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgYWxsIHRoZSBkZXNjZW5kYW50cyBvZiB0aGUgbm9kZSBhcmUgc2VsZWN0ZWQuICovXG4gIGRlc2NlbmRhbnRzQWxsU2VsZWN0ZWQobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICBjb25zdCBkZXNjQWxsU2VsZWN0ZWQgPSBkZXNjZW5kYW50cy5ldmVyeShjaGlsZCA9PlxuICAgICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZClcbiAgICApO1xuICAgIHJldHVybiBkZXNjQWxsU2VsZWN0ZWQ7XG4gIH1cblxuICAvKiogV2hldGhlciBwYXJ0IG9mIHRoZSBkZXNjZW5kYW50cyBhcmUgc2VsZWN0ZWQgKi9cbiAgZGVzY2VuZGFudHNQYXJ0aWFsbHlTZWxlY3RlZChub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGRlc2NlbmRhbnRzLnNvbWUoY2hpbGQgPT4gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZCkpO1xuICAgIHJldHVybiByZXN1bHQgJiYgIXRoaXMuZGVzY2VuZGFudHNBbGxTZWxlY3RlZChub2RlKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGUgdGhlIHRvLWRvIGl0ZW0gc2VsZWN0aW9uLiBTZWxlY3QvZGVzZWxlY3QgYWxsIHRoZSBkZXNjZW5kYW50cyBub2RlICovXG4gIHRvZG9JdGVtU2VsZWN0aW9uVG9nZ2xlKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi50b2dnbGUobm9kZSk7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQobm9kZSlcbiAgICAgID8gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uc2VsZWN0KC4uLmRlc2NlbmRhbnRzKVxuICAgICAgOiB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5kZXNlbGVjdCguLi5kZXNjZW5kYW50cyk7XG5cbiAgICAvLyBGb3JjZSB1cGRhdGUgZm9yIHRoZSBwYXJlbnRcbiAgICBkZXNjZW5kYW50cy5ldmVyeShjaGlsZCA9PlxuICAgICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZClcbiAgICApO1xuICAgIHRoaXMuY2hlY2tBbGxQYXJlbnRzU2VsZWN0aW9uKG5vZGUpO1xuICB9XG5cbiAgLyoqIFRvZ2dsZSBhIGxlYWYgdG8tZG8gaXRlbSBzZWxlY3Rpb24uIENoZWNrIGFsbCB0aGUgcGFyZW50cyB0byBzZWUgaWYgdGhleSBjaGFuZ2VkICovXG4gIHRvZG9MZWFmSXRlbVNlbGVjdGlvblRvZ2dsZShub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24udG9nZ2xlKG5vZGUpO1xuICAgIHRoaXMuY2hlY2tBbGxQYXJlbnRzU2VsZWN0aW9uKG5vZGUpO1xuICB9XG5cbiAgLyogQ2hlY2tzIGFsbCB0aGUgcGFyZW50cyB3aGVuIGEgbGVhZiBub2RlIGlzIHNlbGVjdGVkL3Vuc2VsZWN0ZWQgKi9cbiAgY2hlY2tBbGxQYXJlbnRzU2VsZWN0aW9uKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICBsZXQgcGFyZW50OiBUb2RvSXRlbUZsYXROb2RlIHwgbnVsbCA9IHRoaXMuZ2V0UGFyZW50Tm9kZShub2RlKTtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICB0aGlzLmNoZWNrUm9vdE5vZGVTZWxlY3Rpb24ocGFyZW50KTtcbiAgICAgIHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50Tm9kZShwYXJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDaGVjayByb290IG5vZGUgY2hlY2tlZCBzdGF0ZSBhbmQgY2hhbmdlIGl0IGFjY29yZGluZ2x5ICovXG4gIGNoZWNrUm9vdE5vZGVTZWxlY3Rpb24obm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGVTZWxlY3RlZCA9IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQobm9kZSk7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NBbGxTZWxlY3RlZCA9IGRlc2NlbmRhbnRzLmV2ZXJ5KGNoaWxkID0+XG4gICAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKGNoaWxkKVxuICAgICk7XG4gICAgaWYgKG5vZGVTZWxlY3RlZCAmJiAhZGVzY0FsbFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5kZXNlbGVjdChub2RlKTtcbiAgICB9IGVsc2UgaWYgKCFub2RlU2VsZWN0ZWQgJiYgZGVzY0FsbFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5zZWxlY3Qobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyogR2V0IHRoZSBwYXJlbnQgbm9kZSBvZiBhIG5vZGUgKi9cbiAgZ2V0UGFyZW50Tm9kZShub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogVG9kb0l0ZW1GbGF0Tm9kZSB8IG51bGwge1xuICAgIGNvbnN0IGN1cnJlbnRMZXZlbCA9IHRoaXMuZ2V0TGV2ZWwobm9kZSk7XG5cbiAgICBpZiAoY3VycmVudExldmVsIDwgMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzLmluZGV4T2Yobm9kZSkgLSAxO1xuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzW2ldO1xuXG4gICAgICBpZiAodGhpcy5nZXRMZXZlbChjdXJyZW50Tm9kZSkgPCBjdXJyZW50TGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBTZWxlY3QgdGhlIGNhdGVnb3J5IHNvIHdlIGNhbiBpbnNlcnQgdGhlIG5ldyBpdGVtLiAqL1xuICBhZGROZXdJdGVtKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5mbGF0Tm9kZU1hcC5nZXQobm9kZSk7XG4gICAgdGhpcy5kYXRhYmFzZS5pbnNlcnRJdGVtKHBhcmVudE5vZGUhLCAnJyk7XG4gICAgdGhpcy50cmVlQ29udHJvbC5leHBhbmQobm9kZSk7XG4gIH1cblxuICAvKiogU2F2ZSB0aGUgbm9kZSB0byBkYXRhYmFzZSAqL1xuICBzYXZlTm9kZShub2RlOiBUb2RvSXRlbUZsYXROb2RlLCBpdGVtVmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSB0aGlzLmZsYXROb2RlTWFwLmdldChub2RlKTtcbiAgICB0aGlzLmRhdGFiYXNlLnVwZGF0ZUl0ZW0obmVzdGVkTm9kZSEsIGl0ZW1WYWx1ZSk7XG4gIH1cbn1cbiJdfQ==