import { __read, __spread } from "tslib";
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/checkbox";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/icon";
function TreeChecklistExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵelementStart(2, "mat-checkbox", 5);
    i0.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_1_Template_mat_checkbox_change_2_listener($event) { i0.ɵɵrestoreView(_r5); var node_r3 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.todoLeafItemSelectionToggle(node_r3); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r3 = ctx.$implicit;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r0.checklistSelection.isSelected(node_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(node_r3.item);
} }
function TreeChecklistExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    var _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 6);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelement(3, "input", 7, 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 9);
    i0.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_2_Template_button_click_5_listener($event) { i0.ɵɵrestoreView(_r9); var node_r6 = ctx.$implicit; var _r7 = i0.ɵɵreference(4); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.saveNode(node_r6, _r7.value); });
    i0.ɵɵtext(6, "Save");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TreeChecklistExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    var _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 6);
    i0.ɵɵelementStart(1, "button", 10);
    i0.ɵɵelementStart(2, "mat-icon", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-checkbox", 12);
    i0.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_3_Template_mat_checkbox_change_4_listener($event) { i0.ɵɵrestoreView(_r12); var node_r10 = ctx.$implicit; var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.todoItemSelectionToggle(node_r10); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 13);
    i0.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_3_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r12); var node_r10 = ctx.$implicit; var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.addNewItem(node_r10); });
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r10 = ctx.$implicit;
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "toggle " + node_r10.filename);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.treeControl.isExpanded(node_r10) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r2.descendantsAllSelected(node_r10))("indeterminate", ctx_r2.descendantsPartiallySelected(node_r10));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(node_r10.item);
} }
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
    ChecklistDatabase.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ChecklistDatabase.ctorParameters = function () { return []; };
    ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) { return new (t || ChecklistDatabase)(); };
    ChecklistDatabase.ɵprov = i0.ɵɵdefineInjectable({ token: ChecklistDatabase, factory: ChecklistDatabase.ɵfac });
    return ChecklistDatabase;
}());
export { ChecklistDatabase };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChecklistDatabase, [{
        type: Injectable
    }], function () { return []; }, null); })();
/**
 * @title Tree with checkboxes
 */
var TreeChecklistExample = /** @class */ (function () {
    function TreeChecklistExample(_database) {
        var _this = this;
        this._database = _database;
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
        _database.dataChange.subscribe(function (data) {
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
        var _a, _b;
        var _this = this;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, __spread(descendants)) : (_b = this.checklistSelection).deselect.apply(_b, __spread(descendants));
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
        this._database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    TreeChecklistExample.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this._database.updateItem(nestedNode, itemValue);
    };
    TreeChecklistExample.decorators = [
        { type: Component, args: [{
                    selector: 'tree-checklist-example',
                    templateUrl: 'tree-checklist-example.html',
                    styleUrls: ['tree-checklist-example.css'],
                    providers: [ChecklistDatabase]
                },] },
    ];
    /** @nocollapse */
    TreeChecklistExample.ctorParameters = function () { return [
        { type: ChecklistDatabase }
    ]; };
    TreeChecklistExample.ɵfac = function TreeChecklistExample_Factory(t) { return new (t || TreeChecklistExample)(i0.ɵɵdirectiveInject(ChecklistDatabase)); };
    TreeChecklistExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeChecklistExample, selectors: [["tree-checklist-example"]], features: [i0.ɵɵProvidersFeature([ChecklistDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["matInput", "", "placeholder", "New item..."], ["itemValue", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["mat-icon-button", "", 3, "click"]], template: function TreeChecklistExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tree", 0);
            i0.ɵɵtemplate(1, TreeChecklistExample_mat_tree_node_1_Template, 4, 2, "mat-tree-node", 1);
            i0.ɵɵtemplate(2, TreeChecklistExample_mat_tree_node_2_Template, 7, 0, "mat-tree-node", 2);
            i0.ɵɵtemplate(3, TreeChecklistExample_mat_tree_node_3_Template, 9, 5, "mat-tree-node", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasNoContent);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
        } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodeToggle, i1.MatTreeNodePadding, i2.MatButton, i3.MatCheckbox, i4.MatFormField, i5.MatInput, i6.MatIcon], styles: [""] });
    return TreeChecklistExample;
}());
export { TreeChecklistExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeChecklistExample, [{
        type: Component,
        args: [{
                selector: 'tree-checklist-example',
                templateUrl: 'tree-checklist-example.html',
                styleUrls: ['tree-checklist-example.css'],
                providers: [ChecklistDatabase]
            }]
    }], function () { return [{ type: ChecklistDatabase }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jaGVja2xpc3QtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9FLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7SUNIbkMsd0NBQ0U7SUFBQSw0QkFBMEM7SUFDMUMsdUNBRTJEO0lBQTdDLG1RQUE0QztJQUFDLFlBQWE7SUFBQSxpQkFBZTtJQUN6RixpQkFBZ0I7Ozs7SUFGQSxlQUErQztJQUEvQyx1RUFBK0M7SUFDRixlQUFhO0lBQWIsa0NBQWE7Ozs7SUFHMUUsd0NBQ0U7SUFBQSw0QkFBMEM7SUFDMUMsc0NBQ0U7SUFBQSw4QkFDRjtJQUFBLGlCQUFpQjtJQUNqQixpQ0FBNkQ7SUFBMUMsZ1JBQXlDO0lBQUMsb0JBQUk7SUFBQSxpQkFBUztJQUM1RSxpQkFBZ0I7Ozs7SUFFaEIsd0NBQ0U7SUFBQSxrQ0FFRTtJQUFBLG9DQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFXO0lB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NEIsQ0FBQztnQkFDekMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDL0I7c0NBdUJnQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlbGVjdGlvbk1vZGVsfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VHJlZUZsYXREYXRhU291cmNlLCBNYXRUcmVlRmxhdHRlbmVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBOb2RlIGZvciB0by1kbyBpdGVtXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2RvSXRlbU5vZGUge1xuICBjaGlsZHJlbjogVG9kb0l0ZW1Ob2RlW107XG4gIGl0ZW06IHN0cmluZztcbn1cblxuLyoqIEZsYXQgdG8tZG8gaXRlbSBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBUb2RvSXRlbUZsYXROb2RlIHtcbiAgaXRlbTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBleHBhbmRhYmxlOiBib29sZWFuO1xufVxuXG4vKipcbiAqIFRoZSBKc29uIG9iamVjdCBmb3IgdG8tZG8gbGlzdCBkYXRhLlxuICovXG5jb25zdCBUUkVFX0RBVEEgPSB7XG4gIEdyb2Nlcmllczoge1xuICAgICdBbG1vbmQgTWVhbCBmbG91cic6IG51bGwsXG4gICAgJ09yZ2FuaWMgZWdncyc6IG51bGwsXG4gICAgJ1Byb3RlaW4gUG93ZGVyJzogbnVsbCxcbiAgICBGcnVpdHM6IHtcbiAgICAgIEFwcGxlOiBudWxsLFxuICAgICAgQmVycmllczogWydCbHVlYmVycnknLCAnUmFzcGJlcnJ5J10sXG4gICAgICBPcmFuZ2U6IG51bGxcbiAgICB9XG4gIH0sXG4gIFJlbWluZGVyczogW1xuICAgICdDb29rIGRpbm5lcicsXG4gICAgJ1JlYWQgdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjJyxcbiAgICAnVXBncmFkZSBBcHBsaWNhdGlvbiB0byBBbmd1bGFyJ1xuICBdXG59O1xuXG4vKipcbiAqIENoZWNrbGlzdCBkYXRhYmFzZSwgaXQgY2FuIGJ1aWxkIGEgdHJlZSBzdHJ1Y3R1cmVkIEpzb24gb2JqZWN0LlxuICogRWFjaCBub2RlIGluIEpzb24gb2JqZWN0IHJlcHJlc2VudHMgYSB0by1kbyBpdGVtIG9yIGEgY2F0ZWdvcnkuXG4gKiBJZiBhIG5vZGUgaXMgYSBjYXRlZ29yeSwgaXQgaGFzIGNoaWxkcmVuIGl0ZW1zIGFuZCBuZXcgaXRlbXMgY2FuIGJlIGFkZGVkIHVuZGVyIHRoZSBjYXRlZ29yeS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoZWNrbGlzdERhdGFiYXNlIHtcbiAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VG9kb0l0ZW1Ob2RlW10+KFtdKTtcblxuICBnZXQgZGF0YSgpOiBUb2RvSXRlbU5vZGVbXSB7IHJldHVybiB0aGlzLmRhdGFDaGFuZ2UudmFsdWU7IH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgLy8gQnVpbGQgdGhlIHRyZWUgbm9kZXMgZnJvbSBKc29uIG9iamVjdC4gVGhlIHJlc3VsdCBpcyBhIGxpc3Qgb2YgYFRvZG9JdGVtTm9kZWAgd2l0aCBuZXN0ZWRcbiAgICAvLyAgICAgZmlsZSBub2RlIGFzIGNoaWxkcmVuLlxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmJ1aWxkRmlsZVRyZWUoVFJFRV9EQVRBLCAwKTtcblxuICAgIC8vIE5vdGlmeSB0aGUgY2hhbmdlLlxuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBmaWxlIHN0cnVjdHVyZSB0cmVlLiBUaGUgYHZhbHVlYCBpcyB0aGUgSnNvbiBvYmplY3QsIG9yIGEgc3ViLXRyZWUgb2YgYSBKc29uIG9iamVjdC5cbiAgICogVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgbGlzdCBvZiBgVG9kb0l0ZW1Ob2RlYC5cbiAgICovXG4gIGJ1aWxkRmlsZVRyZWUob2JqOiB7W2tleTogc3RyaW5nXTogYW55fSwgbGV2ZWw6IG51bWJlcik6IFRvZG9JdGVtTm9kZVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2U8VG9kb0l0ZW1Ob2RlW10+KChhY2N1bXVsYXRvciwga2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgY29uc3Qgbm9kZSA9IG5ldyBUb2RvSXRlbU5vZGUoKTtcbiAgICAgIG5vZGUuaXRlbSA9IGtleTtcblxuICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBub2RlLmNoaWxkcmVuID0gdGhpcy5idWlsZEZpbGVUcmVlKHZhbHVlLCBsZXZlbCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUuaXRlbSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2N1bXVsYXRvci5jb25jYXQobm9kZSk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgLyoqIEFkZCBhbiBpdGVtIHRvIHRvLWRvIGxpc3QgKi9cbiAgaW5zZXJ0SXRlbShwYXJlbnQ6IFRvZG9JdGVtTm9kZSwgbmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHBhcmVudC5jaGlsZHJlbikge1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2goe2l0ZW06IG5hbWV9IGFzIFRvZG9JdGVtTm9kZSk7XG4gICAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUl0ZW0obm9kZTogVG9kb0l0ZW1Ob2RlLCBuYW1lOiBzdHJpbmcpIHtcbiAgICBub2RlLml0ZW0gPSBuYW1lO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIGNoZWNrYm94ZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1jaGVja2xpc3QtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1jaGVja2xpc3QtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RyZWUtY2hlY2tsaXN0LWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW0NoZWNrbGlzdERhdGFiYXNlXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlQ2hlY2tsaXN0RXhhbXBsZSB7XG4gIC8qKiBNYXAgZnJvbSBmbGF0IG5vZGUgdG8gbmVzdGVkIG5vZGUuIFRoaXMgaGVscHMgdXMgZmluZGluZyB0aGUgbmVzdGVkIG5vZGUgdG8gYmUgbW9kaWZpZWQgKi9cbiAgZmxhdE5vZGVNYXAgPSBuZXcgTWFwPFRvZG9JdGVtRmxhdE5vZGUsIFRvZG9JdGVtTm9kZT4oKTtcblxuICAvKiogTWFwIGZyb20gbmVzdGVkIG5vZGUgdG8gZmxhdHRlbmVkIG5vZGUuIFRoaXMgaGVscHMgdXMgdG8ga2VlcCB0aGUgc2FtZSBvYmplY3QgZm9yIHNlbGVjdGlvbiAqL1xuICBuZXN0ZWROb2RlTWFwID0gbmV3IE1hcDxUb2RvSXRlbU5vZGUsIFRvZG9JdGVtRmxhdE5vZGU+KCk7XG5cbiAgLyoqIEEgc2VsZWN0ZWQgcGFyZW50IG5vZGUgdG8gYmUgaW5zZXJ0ZWQgKi9cbiAgc2VsZWN0ZWRQYXJlbnQ6IFRvZG9JdGVtRmxhdE5vZGUgfCBudWxsID0gbnVsbDtcblxuICAvKiogVGhlIG5ldyBpdGVtJ3MgbmFtZSAqL1xuICBuZXdJdGVtTmFtZSA9ICcnO1xuXG4gIHRyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8VG9kb0l0ZW1GbGF0Tm9kZT47XG5cbiAgdHJlZUZsYXR0ZW5lcjogTWF0VHJlZUZsYXR0ZW5lcjxUb2RvSXRlbU5vZGUsIFRvZG9JdGVtRmxhdE5vZGU+O1xuXG4gIGRhdGFTb3VyY2U6IE1hdFRyZWVGbGF0RGF0YVNvdXJjZTxUb2RvSXRlbU5vZGUsIFRvZG9JdGVtRmxhdE5vZGU+O1xuXG4gIC8qKiBUaGUgc2VsZWN0aW9uIGZvciBjaGVja2xpc3QgKi9cbiAgY2hlY2tsaXN0U2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsPFRvZG9JdGVtRmxhdE5vZGU+KHRydWUgLyogbXVsdGlwbGUgKi8pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFiYXNlOiBDaGVja2xpc3REYXRhYmFzZSkge1xuICAgIHRoaXMudHJlZUZsYXR0ZW5lciA9IG5ldyBNYXRUcmVlRmxhdHRlbmVyKHRoaXMudHJhbnNmb3JtZXIsIHRoaXMuZ2V0TGV2ZWwsXG4gICAgICB0aGlzLmlzRXhwYW5kYWJsZSwgdGhpcy5nZXRDaGlsZHJlbik7XG4gICAgdGhpcy50cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8VG9kb0l0ZW1GbGF0Tm9kZT4odGhpcy5nZXRMZXZlbCwgdGhpcy5pc0V4cGFuZGFibGUpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlRmxhdERhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgdGhpcy50cmVlRmxhdHRlbmVyKTtcblxuICAgIF9kYXRhYmFzZS5kYXRhQ2hhbmdlLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldExldmVsID0gKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpID0+IG5vZGUubGV2ZWw7XG5cbiAgaXNFeHBhbmRhYmxlID0gKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBnZXRDaGlsZHJlbiA9IChub2RlOiBUb2RvSXRlbU5vZGUpOiBUb2RvSXRlbU5vZGVbXSA9PiBub2RlLmNoaWxkcmVuO1xuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBfbm9kZURhdGEuZXhwYW5kYWJsZTtcblxuICBoYXNOb0NvbnRlbnQgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IFRvZG9JdGVtRmxhdE5vZGUpID0+IF9ub2RlRGF0YS5pdGVtID09PSAnJztcblxuICAvKipcbiAgICogVHJhbnNmb3JtZXIgdG8gY29udmVydCBuZXN0ZWQgbm9kZSB0byBmbGF0IG5vZGUuIFJlY29yZCB0aGUgbm9kZXMgaW4gbWFwcyBmb3IgbGF0ZXIgdXNlLlxuICAgKi9cbiAgdHJhbnNmb3JtZXIgPSAobm9kZTogVG9kb0l0ZW1Ob2RlLCBsZXZlbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdOb2RlID0gdGhpcy5uZXN0ZWROb2RlTWFwLmdldChub2RlKTtcbiAgICBjb25zdCBmbGF0Tm9kZSA9IGV4aXN0aW5nTm9kZSAmJiBleGlzdGluZ05vZGUuaXRlbSA9PT0gbm9kZS5pdGVtXG4gICAgICAgID8gZXhpc3RpbmdOb2RlXG4gICAgICAgIDogbmV3IFRvZG9JdGVtRmxhdE5vZGUoKTtcbiAgICBmbGF0Tm9kZS5pdGVtID0gbm9kZS5pdGVtO1xuICAgIGZsYXROb2RlLmxldmVsID0gbGV2ZWw7XG4gICAgZmxhdE5vZGUuZXhwYW5kYWJsZSA9ICEhbm9kZS5jaGlsZHJlbjtcbiAgICB0aGlzLmZsYXROb2RlTWFwLnNldChmbGF0Tm9kZSwgbm9kZSk7XG4gICAgdGhpcy5uZXN0ZWROb2RlTWFwLnNldChub2RlLCBmbGF0Tm9kZSk7XG4gICAgcmV0dXJuIGZsYXROb2RlO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgYWxsIHRoZSBkZXNjZW5kYW50cyBvZiB0aGUgbm9kZSBhcmUgc2VsZWN0ZWQuICovXG4gIGRlc2NlbmRhbnRzQWxsU2VsZWN0ZWQobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICBjb25zdCBkZXNjQWxsU2VsZWN0ZWQgPSBkZXNjZW5kYW50cy5ldmVyeShjaGlsZCA9PlxuICAgICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZClcbiAgICApO1xuICAgIHJldHVybiBkZXNjQWxsU2VsZWN0ZWQ7XG4gIH1cblxuICAvKiogV2hldGhlciBwYXJ0IG9mIHRoZSBkZXNjZW5kYW50cyBhcmUgc2VsZWN0ZWQgKi9cbiAgZGVzY2VuZGFudHNQYXJ0aWFsbHlTZWxlY3RlZChub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGRlc2NlbmRhbnRzLnNvbWUoY2hpbGQgPT4gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZCkpO1xuICAgIHJldHVybiByZXN1bHQgJiYgIXRoaXMuZGVzY2VuZGFudHNBbGxTZWxlY3RlZChub2RlKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGUgdGhlIHRvLWRvIGl0ZW0gc2VsZWN0aW9uLiBTZWxlY3QvZGVzZWxlY3QgYWxsIHRoZSBkZXNjZW5kYW50cyBub2RlICovXG4gIHRvZG9JdGVtU2VsZWN0aW9uVG9nZ2xlKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi50b2dnbGUobm9kZSk7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQobm9kZSlcbiAgICAgID8gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uc2VsZWN0KC4uLmRlc2NlbmRhbnRzKVxuICAgICAgOiB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5kZXNlbGVjdCguLi5kZXNjZW5kYW50cyk7XG5cbiAgICAvLyBGb3JjZSB1cGRhdGUgZm9yIHRoZSBwYXJlbnRcbiAgICBkZXNjZW5kYW50cy5ldmVyeShjaGlsZCA9PlxuICAgICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZClcbiAgICApO1xuICAgIHRoaXMuY2hlY2tBbGxQYXJlbnRzU2VsZWN0aW9uKG5vZGUpO1xuICB9XG5cbiAgLyoqIFRvZ2dsZSBhIGxlYWYgdG8tZG8gaXRlbSBzZWxlY3Rpb24uIENoZWNrIGFsbCB0aGUgcGFyZW50cyB0byBzZWUgaWYgdGhleSBjaGFuZ2VkICovXG4gIHRvZG9MZWFmSXRlbVNlbGVjdGlvblRvZ2dsZShub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24udG9nZ2xlKG5vZGUpO1xuICAgIHRoaXMuY2hlY2tBbGxQYXJlbnRzU2VsZWN0aW9uKG5vZGUpO1xuICB9XG5cbiAgLyogQ2hlY2tzIGFsbCB0aGUgcGFyZW50cyB3aGVuIGEgbGVhZiBub2RlIGlzIHNlbGVjdGVkL3Vuc2VsZWN0ZWQgKi9cbiAgY2hlY2tBbGxQYXJlbnRzU2VsZWN0aW9uKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICBsZXQgcGFyZW50OiBUb2RvSXRlbUZsYXROb2RlIHwgbnVsbCA9IHRoaXMuZ2V0UGFyZW50Tm9kZShub2RlKTtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICB0aGlzLmNoZWNrUm9vdE5vZGVTZWxlY3Rpb24ocGFyZW50KTtcbiAgICAgIHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50Tm9kZShwYXJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDaGVjayByb290IG5vZGUgY2hlY2tlZCBzdGF0ZSBhbmQgY2hhbmdlIGl0IGFjY29yZGluZ2x5ICovXG4gIGNoZWNrUm9vdE5vZGVTZWxlY3Rpb24obm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGVTZWxlY3RlZCA9IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQobm9kZSk7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NBbGxTZWxlY3RlZCA9IGRlc2NlbmRhbnRzLmV2ZXJ5KGNoaWxkID0+XG4gICAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKGNoaWxkKVxuICAgICk7XG4gICAgaWYgKG5vZGVTZWxlY3RlZCAmJiAhZGVzY0FsbFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5kZXNlbGVjdChub2RlKTtcbiAgICB9IGVsc2UgaWYgKCFub2RlU2VsZWN0ZWQgJiYgZGVzY0FsbFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5zZWxlY3Qobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyogR2V0IHRoZSBwYXJlbnQgbm9kZSBvZiBhIG5vZGUgKi9cbiAgZ2V0UGFyZW50Tm9kZShub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogVG9kb0l0ZW1GbGF0Tm9kZSB8IG51bGwge1xuICAgIGNvbnN0IGN1cnJlbnRMZXZlbCA9IHRoaXMuZ2V0TGV2ZWwobm9kZSk7XG5cbiAgICBpZiAoY3VycmVudExldmVsIDwgMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzLmluZGV4T2Yobm9kZSkgLSAxO1xuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzW2ldO1xuXG4gICAgICBpZiAodGhpcy5nZXRMZXZlbChjdXJyZW50Tm9kZSkgPCBjdXJyZW50TGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBTZWxlY3QgdGhlIGNhdGVnb3J5IHNvIHdlIGNhbiBpbnNlcnQgdGhlIG5ldyBpdGVtLiAqL1xuICBhZGROZXdJdGVtKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5mbGF0Tm9kZU1hcC5nZXQobm9kZSk7XG4gICAgdGhpcy5fZGF0YWJhc2UuaW5zZXJ0SXRlbShwYXJlbnROb2RlISwgJycpO1xuICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kKG5vZGUpO1xuICB9XG5cbiAgLyoqIFNhdmUgdGhlIG5vZGUgdG8gZGF0YWJhc2UgKi9cbiAgc2F2ZU5vZGUobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSwgaXRlbVZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXN0ZWROb2RlID0gdGhpcy5mbGF0Tm9kZU1hcC5nZXQobm9kZSk7XG4gICAgdGhpcy5fZGF0YWJhc2UudXBkYXRlSXRlbShuZXN0ZWROb2RlISwgaXRlbVZhbHVlKTtcbiAgfVxufVxuIiwiPG1hdC10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBtYXRUcmVlTm9kZVRvZ2dsZSBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImNoZWNrbGlzdC1sZWFmLW5vZGVcIlxuICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQobm9kZSlcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJ0b2RvTGVhZkl0ZW1TZWxlY3Rpb25Ub2dnbGUobm9kZSlcIj57e25vZGUuaXRlbX19PC9tYXQtY2hlY2tib3g+XG4gIDwvbWF0LXRyZWUtbm9kZT5cblxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzTm9Db250ZW50XCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCAjaXRlbVZhbHVlIHBsYWNlaG9sZGVyPVwiTmV3IGl0ZW0uLi5cIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic2F2ZU5vZGUobm9kZSwgaXRlbVZhbHVlLnZhbHVlKVwiPlNhdmU8L2J1dHRvbj5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuXG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRUcmVlTm9kZVRvZ2dsZVxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCIndG9nZ2xlICcgKyBub2RlLmZpbGVuYW1lXCI+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8bWF0LWNoZWNrYm94IFtjaGVja2VkXT1cImRlc2NlbmRhbnRzQWxsU2VsZWN0ZWQobm9kZSlcIlxuICAgICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiZGVzY2VuZGFudHNQYXJ0aWFsbHlTZWxlY3RlZChub2RlKVwiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInRvZG9JdGVtU2VsZWN0aW9uVG9nZ2xlKG5vZGUpXCI+e3tub2RlLml0ZW19fTwvbWF0LWNoZWNrYm94PlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJhZGROZXdJdGVtKG5vZGUpXCI+PG1hdC1pY29uPmFkZDwvbWF0LWljb24+PC9idXR0b24+XG4gIDwvbWF0LXRyZWUtbm9kZT5cbjwvbWF0LXRyZWU+XG4iXX0=