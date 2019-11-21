/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵelementStart(2, "mat-checkbox", 5);
    i0.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_1_Template_mat_checkbox_change_2_listener($event) { i0.ɵɵrestoreView(_r5); const node_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.todoLeafItemSelectionToggle(node_r3); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r0.checklistSelection.isSelected(node_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(node_r3.item);
} }
function TreeChecklistExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 6);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelement(3, "input", 7, 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 9);
    i0.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_2_Template_button_click_5_listener($event) { i0.ɵɵrestoreView(_r9); const node_r6 = ctx.$implicit; const _r7 = i0.ɵɵreference(4); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.saveNode(node_r6, _r7.value); });
    i0.ɵɵtext(6, "Save");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TreeChecklistExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 6);
    i0.ɵɵelementStart(1, "button", 10);
    i0.ɵɵelementStart(2, "mat-icon", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-checkbox", 12);
    i0.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_3_Template_mat_checkbox_change_4_listener($event) { i0.ɵɵrestoreView(_r12); const node_r10 = ctx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.todoItemSelectionToggle(node_r10); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 13);
    i0.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_3_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r12); const node_r10 = ctx.$implicit; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.addNewItem(node_r10); });
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r10 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
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
export class TodoItemNode {
}
if (false) {
    /** @type {?} */
    TodoItemNode.prototype.children;
    /** @type {?} */
    TodoItemNode.prototype.item;
}
/**
 * Flat to-do item node with expandable and level information
 */
export class TodoItemFlatNode {
}
if (false) {
    /** @type {?} */
    TodoItemFlatNode.prototype.item;
    /** @type {?} */
    TodoItemFlatNode.prototype.level;
    /** @type {?} */
    TodoItemFlatNode.prototype.expandable;
}
/**
 * The Json object for to-do list data.
 * @type {?}
 */
const TREE_DATA = {
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
export class ChecklistDatabase {
    constructor() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * @return {?}
     */
    initialize() {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        /** @type {?} */
        const data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((/**
         * @param {?} accumulator
         * @param {?} key
         * @return {?}
         */
        (accumulator, key) => {
            /** @type {?} */
            const value = obj[key];
            /** @type {?} */
            const node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }), []);
    }
    /**
     * Add an item to to-do list
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    insertItem(parent, name) {
        if (parent.children) {
            parent.children.push((/** @type {?} */ ({ item: name })));
            this.dataChange.next(this.data);
        }
    }
    /**
     * @param {?} node
     * @param {?} name
     * @return {?}
     */
    updateItem(node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    }
}
ChecklistDatabase.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ChecklistDatabase.ctorParameters = () => [];
/** @nocollapse */ ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) { return new (t || ChecklistDatabase)(); };
/** @nocollapse */ ChecklistDatabase.ɵprov = i0.ɵɵdefineInjectable({ token: ChecklistDatabase, factory: function (t) { return ChecklistDatabase.ɵfac(t); }, providedIn: null });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChecklistDatabase, [{
        type: Injectable
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    ChecklistDatabase.prototype.dataChange;
}
/**
 * \@title Tree with checkboxes
 */
export class TreeChecklistExample {
    /**
     * @param {?} _database
     */
    constructor(_database) {
        this._database = _database;
        /**
         * Map from flat node to nested node. This helps us finding the nested node to be modified
         */
        this.flatNodeMap = new Map();
        /**
         * Map from nested node to flattened node. This helps us to keep the same object for selection
         */
        this.nestedNodeMap = new Map();
        /**
         * A selected parent node to be inserted
         */
        this.selectedParent = null;
        /**
         * The new item's name
         */
        this.newItemName = '';
        /**
         * The selection for checklist
         */
        this.checklistSelection = new SelectionModel(true /* multiple */);
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
        this.getChildren = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.children);
        this.hasChild = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        (_, _nodeData) => _nodeData.expandable);
        this.hasNoContent = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        (_, _nodeData) => _nodeData.item === '');
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = (/**
         * @param {?} node
         * @param {?} level
         * @return {?}
         */
        (node, level) => {
            /** @type {?} */
            const existingNode = this.nestedNodeMap.get(node);
            /** @type {?} */
            const flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            this.flatNodeMap.set(flatNode, node);
            this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        });
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        _database.dataChange.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.dataSource.data = data;
        }));
    }
    /**
     * Whether all the descendants of the node are selected.
     * @param {?} node
     * @return {?}
     */
    descendantsAllSelected(node) {
        /** @type {?} */
        const descendants = this.treeControl.getDescendants(node);
        /** @type {?} */
        const descAllSelected = descendants.every((/**
         * @param {?} child
         * @return {?}
         */
        child => this.checklistSelection.isSelected(child)));
        return descAllSelected;
    }
    /**
     * Whether part of the descendants are selected
     * @param {?} node
     * @return {?}
     */
    descendantsPartiallySelected(node) {
        /** @type {?} */
        const descendants = this.treeControl.getDescendants(node);
        /** @type {?} */
        const result = descendants.some((/**
         * @param {?} child
         * @return {?}
         */
        child => this.checklistSelection.isSelected(child)));
        return result && !this.descendantsAllSelected(node);
    }
    /**
     * Toggle the to-do item selection. Select/deselect all the descendants node
     * @param {?} node
     * @return {?}
     */
    todoItemSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        /** @type {?} */
        const descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? this.checklistSelection.select(...descendants)
            : this.checklistSelection.deselect(...descendants);
        // Force update for the parent
        descendants.every((/**
         * @param {?} child
         * @return {?}
         */
        child => this.checklistSelection.isSelected(child)));
        this.checkAllParentsSelection(node);
    }
    /**
     * Toggle a leaf to-do item selection. Check all the parents to see if they changed
     * @param {?} node
     * @return {?}
     */
    todoLeafItemSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
    }
    /* Checks all the parents when a leaf node is selected/unselected */
    /**
     * @param {?} node
     * @return {?}
     */
    checkAllParentsSelection(node) {
        /** @type {?} */
        let parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    }
    /**
     * Check root node checked state and change it accordingly
     * @param {?} node
     * @return {?}
     */
    checkRootNodeSelection(node) {
        /** @type {?} */
        const nodeSelected = this.checklistSelection.isSelected(node);
        /** @type {?} */
        const descendants = this.treeControl.getDescendants(node);
        /** @type {?} */
        const descAllSelected = descendants.every((/**
         * @param {?} child
         * @return {?}
         */
        child => this.checklistSelection.isSelected(child)));
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    }
    /* Get the parent node of a node */
    /**
     * @param {?} node
     * @return {?}
     */
    getParentNode(node) {
        /** @type {?} */
        const currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        /** @type {?} */
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i--) {
            /** @type {?} */
            const currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
    /**
     * Select the category so we can insert the new item.
     * @param {?} node
     * @return {?}
     */
    addNewItem(node) {
        /** @type {?} */
        const parentNode = this.flatNodeMap.get(node);
        this._database.insertItem((/** @type {?} */ (parentNode)), '');
        this.treeControl.expand(node);
    }
    /**
     * Save the node to database
     * @param {?} node
     * @param {?} itemValue
     * @return {?}
     */
    saveNode(node, itemValue) {
        /** @type {?} */
        const nestedNode = this.flatNodeMap.get(node);
        this._database.updateItem((/** @type {?} */ (nestedNode)), itemValue);
    }
}
TreeChecklistExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-checklist-example',
                templateUrl: 'tree-checklist-example.html',
                styleUrls: ['tree-checklist-example.css'],
                providers: [ChecklistDatabase]
            },] },
];
/** @nocollapse */
TreeChecklistExample.ctorParameters = () => [
    { type: ChecklistDatabase }
];
/** @nocollapse */ TreeChecklistExample.ɵfac = function TreeChecklistExample_Factory(t) { return new (t || TreeChecklistExample)(i0.ɵɵdirectiveInject(ChecklistDatabase)); };
/** @nocollapse */ TreeChecklistExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeChecklistExample, selectors: [["tree-checklist-example"]], features: [i0.ɵɵProvidersFeature([ChecklistDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["matInput", "", "placeholder", "New item..."], ["itemValue", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["mat-icon-button", "", 3, "click"]], template: function TreeChecklistExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeChecklistExample, [{
        type: Component,
        args: [{
                selector: 'tree-checklist-example',
                templateUrl: 'tree-checklist-example.html',
                styleUrls: ['tree-checklist-example.css'],
                providers: [ChecklistDatabase]
            }]
    }], function () { return [{ type: ChecklistDatabase }]; }, null); })();
if (false) {
    /**
     * Map from flat node to nested node. This helps us finding the nested node to be modified
     * @type {?}
     */
    TreeChecklistExample.prototype.flatNodeMap;
    /**
     * Map from nested node to flattened node. This helps us to keep the same object for selection
     * @type {?}
     */
    TreeChecklistExample.prototype.nestedNodeMap;
    /**
     * A selected parent node to be inserted
     * @type {?}
     */
    TreeChecklistExample.prototype.selectedParent;
    /**
     * The new item's name
     * @type {?}
     */
    TreeChecklistExample.prototype.newItemName;
    /** @type {?} */
    TreeChecklistExample.prototype.treeControl;
    /** @type {?} */
    TreeChecklistExample.prototype.treeFlattener;
    /** @type {?} */
    TreeChecklistExample.prototype.dataSource;
    /**
     * The selection for checklist
     * @type {?}
     */
    TreeChecklistExample.prototype.checklistSelection;
    /** @type {?} */
    TreeChecklistExample.prototype.getLevel;
    /** @type {?} */
    TreeChecklistExample.prototype.isExpandable;
    /** @type {?} */
    TreeChecklistExample.prototype.getChildren;
    /** @type {?} */
    TreeChecklistExample.prototype.hasChild;
    /** @type {?} */
    TreeChecklistExample.prototype.hasNoContent;
    /**
     * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
     * @type {?}
     */
    TreeChecklistExample.prototype.transformer;
    /**
     * @type {?}
     * @private
     */
    TreeChecklistExample.prototype._database;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jaGVja2xpc3QtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9FLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7SUNIbkMsd0NBQ0U7SUFBQSw0QkFBMEM7SUFDMUMsdUNBRTJEO0lBQTdDLHVRQUE0QztJQUFDLFlBQWE7SUFBQSxpQkFBZTtJQUN6RixpQkFBZ0I7Ozs7SUFGQSxlQUErQztJQUEvQyx1RUFBK0M7SUFDRixlQUFhO0lBQWIsa0NBQWE7Ozs7SUFHMUUsd0NBQ0U7SUFBQSw0QkFBMEM7SUFDMUMsc0NBQ0U7SUFBQSw4QkFDRjtJQUFBLGlCQUFpQjtJQUNqQixpQ0FBNkQ7SUFBMUMsc1JBQXlDO0lBQUMsb0JBQUk7SUFBQSxpQkFBUztJQUM1RSxpQkFBZ0I7Ozs7SUFFaEIsd0NBQ0U7SUFBQSxrQ0FFRTtJQUFBLG9DQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFXO0lBQ2IsaUJBQVM7SUFDVCx3Q0FFdUQ7SUFBekMs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QWlCLENBQUM7YUFDL0I7Ozs7WUF1QmdDLGlCQUFpQjs7d0ZBdEJyQyxvQkFBb0IsdUJBc0JBLGlCQUFpQjt5REF0QnJDLG9CQUFvQiw0RUFGcEIsQ0FBQyxpQkFBaUIsQ0FBQztRQzdHaEMsbUNBQ0U7UUFBQSx5RkFDRTtRQU1GLHlGQUNFO1FBT0YseUZBQ0U7UUFXSixpQkFBVzs7UUE1QkQsMkNBQXlCLGdDQUFBO1FBUWxCLGVBQThDO1FBQTlDLHFEQUE4QztRQVE5QyxlQUEwQztRQUExQyxpREFBMEM7O2tERCtGOUMsb0JBQW9CO2NBTmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDL0I7c0NBdUJnQyxpQkFBaUI7Ozs7OztJQXBCaEQsMkNBQXdEOzs7OztJQUd4RCw2Q0FBMEQ7Ozs7O0lBRzFELDhDQUErQzs7Ozs7SUFHL0MsMkNBQWlCOztJQUVqQiwyQ0FBK0M7O0lBRS9DLDZDQUFnRTs7SUFFaEUsMENBQWtFOzs7OztJQUdsRSxrREFBK0U7O0lBYS9FLHdDQUFrRDs7SUFFbEQsNENBQTJEOztJQUUzRCwyQ0FBb0U7O0lBRXBFLHdDQUE0RTs7SUFFNUUsNENBQWlGOzs7OztJQUtqRiwyQ0FXQzs7Ozs7SUFuQ1cseUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWxlY3Rpb25Nb2RlbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRyZWVGbGF0RGF0YVNvdXJjZSwgTWF0VHJlZUZsYXR0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogTm9kZSBmb3IgdG8tZG8gaXRlbVxuICovXG5leHBvcnQgY2xhc3MgVG9kb0l0ZW1Ob2RlIHtcbiAgY2hpbGRyZW46IFRvZG9JdGVtTm9kZVtdO1xuICBpdGVtOiBzdHJpbmc7XG59XG5cbi8qKiBGbGF0IHRvLWRvIGl0ZW0gbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5leHBvcnQgY2xhc3MgVG9kb0l0ZW1GbGF0Tm9kZSB7XG4gIGl0ZW06IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgZXhwYW5kYWJsZTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBUaGUgSnNvbiBvYmplY3QgZm9yIHRvLWRvIGxpc3QgZGF0YS5cbiAqL1xuY29uc3QgVFJFRV9EQVRBID0ge1xuICBHcm9jZXJpZXM6IHtcbiAgICAnQWxtb25kIE1lYWwgZmxvdXInOiBudWxsLFxuICAgICdPcmdhbmljIGVnZ3MnOiBudWxsLFxuICAgICdQcm90ZWluIFBvd2Rlcic6IG51bGwsXG4gICAgRnJ1aXRzOiB7XG4gICAgICBBcHBsZTogbnVsbCxcbiAgICAgIEJlcnJpZXM6IFsnQmx1ZWJlcnJ5JywgJ1Jhc3BiZXJyeSddLFxuICAgICAgT3JhbmdlOiBudWxsXG4gICAgfVxuICB9LFxuICBSZW1pbmRlcnM6IFtcbiAgICAnQ29vayBkaW5uZXInLFxuICAgICdSZWFkIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYycsXG4gICAgJ1VwZ3JhZGUgQXBwbGljYXRpb24gdG8gQW5ndWxhcidcbiAgXVxufTtcblxuLyoqXG4gKiBDaGVja2xpc3QgZGF0YWJhc2UsIGl0IGNhbiBidWlsZCBhIHRyZWUgc3RydWN0dXJlZCBKc29uIG9iamVjdC5cbiAqIEVhY2ggbm9kZSBpbiBKc29uIG9iamVjdCByZXByZXNlbnRzIGEgdG8tZG8gaXRlbSBvciBhIGNhdGVnb3J5LlxuICogSWYgYSBub2RlIGlzIGEgY2F0ZWdvcnksIGl0IGhhcyBjaGlsZHJlbiBpdGVtcyBhbmQgbmV3IGl0ZW1zIGNhbiBiZSBhZGRlZCB1bmRlciB0aGUgY2F0ZWdvcnkuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGVja2xpc3REYXRhYmFzZSB7XG4gIGRhdGFDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRvZG9JdGVtTm9kZVtdPihbXSk7XG5cbiAgZ2V0IGRhdGEoKTogVG9kb0l0ZW1Ob2RlW10geyByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlOyB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIC8vIEJ1aWxkIHRoZSB0cmVlIG5vZGVzIGZyb20gSnNvbiBvYmplY3QuIFRoZSByZXN1bHQgaXMgYSBsaXN0IG9mIGBUb2RvSXRlbU5vZGVgIHdpdGggbmVzdGVkXG4gICAgLy8gICAgIGZpbGUgbm9kZSBhcyBjaGlsZHJlbi5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5idWlsZEZpbGVUcmVlKFRSRUVfREFUQSwgMCk7XG5cbiAgICAvLyBOb3RpZnkgdGhlIGNoYW5nZS5cbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZmlsZSBzdHJ1Y3R1cmUgdHJlZS4gVGhlIGB2YWx1ZWAgaXMgdGhlIEpzb24gb2JqZWN0LCBvciBhIHN1Yi10cmVlIG9mIGEgSnNvbiBvYmplY3QuXG4gICAqIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGxpc3Qgb2YgYFRvZG9JdGVtTm9kZWAuXG4gICAqL1xuICBidWlsZEZpbGVUcmVlKG9iajoge1trZXk6IHN0cmluZ106IGFueX0sIGxldmVsOiBudW1iZXIpOiBUb2RvSXRlbU5vZGVbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlPFRvZG9JdGVtTm9kZVtdPigoYWNjdW11bGF0b3IsIGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXcgVG9kb0l0ZW1Ob2RlKCk7XG4gICAgICBub2RlLml0ZW0gPSBrZXk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IHRoaXMuYnVpbGRGaWxlVHJlZSh2YWx1ZSwgbGV2ZWwgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLml0ZW0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjdW11bGF0b3IuY29uY2F0KG5vZGUpO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIC8qKiBBZGQgYW4gaXRlbSB0byB0by1kbyBsaXN0ICovXG4gIGluc2VydEl0ZW0ocGFyZW50OiBUb2RvSXRlbU5vZGUsIG5hbWU6IHN0cmluZykge1xuICAgIGlmIChwYXJlbnQuY2hpbGRyZW4pIHtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHtpdGVtOiBuYW1lfSBhcyBUb2RvSXRlbU5vZGUpO1xuICAgICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVJdGVtKG5vZGU6IFRvZG9JdGVtTm9kZSwgbmFtZTogc3RyaW5nKSB7XG4gICAgbm9kZS5pdGVtID0gbmFtZTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBjaGVja2JveGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtY2hlY2tsaXN0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtY2hlY2tsaXN0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0cmVlLWNoZWNrbGlzdC1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtDaGVja2xpc3REYXRhYmFzZV1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUNoZWNrbGlzdEV4YW1wbGUge1xuICAvKiogTWFwIGZyb20gZmxhdCBub2RlIHRvIG5lc3RlZCBub2RlLiBUaGlzIGhlbHBzIHVzIGZpbmRpbmcgdGhlIG5lc3RlZCBub2RlIHRvIGJlIG1vZGlmaWVkICovXG4gIGZsYXROb2RlTWFwID0gbmV3IE1hcDxUb2RvSXRlbUZsYXROb2RlLCBUb2RvSXRlbU5vZGU+KCk7XG5cbiAgLyoqIE1hcCBmcm9tIG5lc3RlZCBub2RlIHRvIGZsYXR0ZW5lZCBub2RlLiBUaGlzIGhlbHBzIHVzIHRvIGtlZXAgdGhlIHNhbWUgb2JqZWN0IGZvciBzZWxlY3Rpb24gKi9cbiAgbmVzdGVkTm9kZU1hcCA9IG5ldyBNYXA8VG9kb0l0ZW1Ob2RlLCBUb2RvSXRlbUZsYXROb2RlPigpO1xuXG4gIC8qKiBBIHNlbGVjdGVkIHBhcmVudCBub2RlIHRvIGJlIGluc2VydGVkICovXG4gIHNlbGVjdGVkUGFyZW50OiBUb2RvSXRlbUZsYXROb2RlIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFRoZSBuZXcgaXRlbSdzIG5hbWUgKi9cbiAgbmV3SXRlbU5hbWUgPSAnJztcblxuICB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPFRvZG9JdGVtRmxhdE5vZGU+O1xuXG4gIHRyZWVGbGF0dGVuZXI6IE1hdFRyZWVGbGF0dGVuZXI8VG9kb0l0ZW1Ob2RlLCBUb2RvSXRlbUZsYXROb2RlPjtcblxuICBkYXRhU291cmNlOiBNYXRUcmVlRmxhdERhdGFTb3VyY2U8VG9kb0l0ZW1Ob2RlLCBUb2RvSXRlbUZsYXROb2RlPjtcblxuICAvKiogVGhlIHNlbGVjdGlvbiBmb3IgY2hlY2tsaXN0ICovXG4gIGNoZWNrbGlzdFNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxUb2RvSXRlbUZsYXROb2RlPih0cnVlIC8qIG11bHRpcGxlICovKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhYmFzZTogQ2hlY2tsaXN0RGF0YWJhc2UpIHtcbiAgICB0aGlzLnRyZWVGbGF0dGVuZXIgPSBuZXcgTWF0VHJlZUZsYXR0ZW5lcih0aGlzLnRyYW5zZm9ybWVyLCB0aGlzLmdldExldmVsLFxuICAgICAgdGhpcy5pc0V4cGFuZGFibGUsIHRoaXMuZ2V0Q2hpbGRyZW4pO1xuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPFRvZG9JdGVtRmxhdE5vZGU+KHRoaXMuZ2V0TGV2ZWwsIHRoaXMuaXNFeHBhbmRhYmxlKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZUZsYXREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMudHJlZUZsYXR0ZW5lcik7XG5cbiAgICBfZGF0YWJhc2UuZGF0YUNoYW5nZS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBnZXRMZXZlbCA9IChub2RlOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgZ2V0Q2hpbGRyZW4gPSAobm9kZTogVG9kb0l0ZW1Ob2RlKTogVG9kb0l0ZW1Ob2RlW10gPT4gbm9kZS5jaGlsZHJlbjtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gX25vZGVEYXRhLmV4cGFuZGFibGU7XG5cbiAgaGFzTm9Db250ZW50ID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBfbm9kZURhdGEuaXRlbSA9PT0gJyc7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybWVyIHRvIGNvbnZlcnQgbmVzdGVkIG5vZGUgdG8gZmxhdCBub2RlLiBSZWNvcmQgdGhlIG5vZGVzIGluIG1hcHMgZm9yIGxhdGVyIHVzZS5cbiAgICovXG4gIHRyYW5zZm9ybWVyID0gKG5vZGU6IFRvZG9JdGVtTm9kZSwgbGV2ZWw6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IHRoaXMubmVzdGVkTm9kZU1hcC5nZXQobm9kZSk7XG4gICAgY29uc3QgZmxhdE5vZGUgPSBleGlzdGluZ05vZGUgJiYgZXhpc3RpbmdOb2RlLml0ZW0gPT09IG5vZGUuaXRlbVxuICAgICAgICA/IGV4aXN0aW5nTm9kZVxuICAgICAgICA6IG5ldyBUb2RvSXRlbUZsYXROb2RlKCk7XG4gICAgZmxhdE5vZGUuaXRlbSA9IG5vZGUuaXRlbTtcbiAgICBmbGF0Tm9kZS5sZXZlbCA9IGxldmVsO1xuICAgIGZsYXROb2RlLmV4cGFuZGFibGUgPSAhIW5vZGUuY2hpbGRyZW47XG4gICAgdGhpcy5mbGF0Tm9kZU1hcC5zZXQoZmxhdE5vZGUsIG5vZGUpO1xuICAgIHRoaXMubmVzdGVkTm9kZU1hcC5zZXQobm9kZSwgZmxhdE5vZGUpO1xuICAgIHJldHVybiBmbGF0Tm9kZTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIGFsbCB0aGUgZGVzY2VuZGFudHMgb2YgdGhlIG5vZGUgYXJlIHNlbGVjdGVkLiAqL1xuICBkZXNjZW5kYW50c0FsbFNlbGVjdGVkKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiBib29sZWFuIHtcbiAgICBjb25zdCBkZXNjZW5kYW50cyA9IHRoaXMudHJlZUNvbnRyb2wuZ2V0RGVzY2VuZGFudHMobm9kZSk7XG4gICAgY29uc3QgZGVzY0FsbFNlbGVjdGVkID0gZGVzY2VuZGFudHMuZXZlcnkoY2hpbGQgPT5cbiAgICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQoY2hpbGQpXG4gICAgKTtcbiAgICByZXR1cm4gZGVzY0FsbFNlbGVjdGVkO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgcGFydCBvZiB0aGUgZGVzY2VuZGFudHMgYXJlIHNlbGVjdGVkICovXG4gIGRlc2NlbmRhbnRzUGFydGlhbGx5U2VsZWN0ZWQobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICBjb25zdCByZXN1bHQgPSBkZXNjZW5kYW50cy5zb21lKGNoaWxkID0+IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQoY2hpbGQpKTtcbiAgICByZXR1cm4gcmVzdWx0ICYmICF0aGlzLmRlc2NlbmRhbnRzQWxsU2VsZWN0ZWQobm9kZSk7XG4gIH1cblxuICAvKiogVG9nZ2xlIHRoZSB0by1kbyBpdGVtIHNlbGVjdGlvbi4gU2VsZWN0L2Rlc2VsZWN0IGFsbCB0aGUgZGVzY2VuZGFudHMgbm9kZSAqL1xuICB0b2RvSXRlbVNlbGVjdGlvblRvZ2dsZShub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24udG9nZ2xlKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKG5vZGUpXG4gICAgICA/IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLnNlbGVjdCguLi5kZXNjZW5kYW50cylcbiAgICAgIDogdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uZGVzZWxlY3QoLi4uZGVzY2VuZGFudHMpO1xuXG4gICAgLy8gRm9yY2UgdXBkYXRlIGZvciB0aGUgcGFyZW50XG4gICAgZGVzY2VuZGFudHMuZXZlcnkoY2hpbGQgPT5cbiAgICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQoY2hpbGQpXG4gICAgKTtcbiAgICB0aGlzLmNoZWNrQWxsUGFyZW50c1NlbGVjdGlvbihub2RlKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGUgYSBsZWFmIHRvLWRvIGl0ZW0gc2VsZWN0aW9uLiBDaGVjayBhbGwgdGhlIHBhcmVudHMgdG8gc2VlIGlmIHRoZXkgY2hhbmdlZCAqL1xuICB0b2RvTGVhZkl0ZW1TZWxlY3Rpb25Ub2dnbGUobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLnRvZ2dsZShub2RlKTtcbiAgICB0aGlzLmNoZWNrQWxsUGFyZW50c1NlbGVjdGlvbihub2RlKTtcbiAgfVxuXG4gIC8qIENoZWNrcyBhbGwgdGhlIHBhcmVudHMgd2hlbiBhIGxlYWYgbm9kZSBpcyBzZWxlY3RlZC91bnNlbGVjdGVkICovXG4gIGNoZWNrQWxsUGFyZW50c1NlbGVjdGlvbihub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgbGV0IHBhcmVudDogVG9kb0l0ZW1GbGF0Tm9kZSB8IG51bGwgPSB0aGlzLmdldFBhcmVudE5vZGUobm9kZSk7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgdGhpcy5jaGVja1Jvb3ROb2RlU2VsZWN0aW9uKHBhcmVudCk7XG4gICAgICBwYXJlbnQgPSB0aGlzLmdldFBhcmVudE5vZGUocGFyZW50KTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2hlY2sgcm9vdCBub2RlIGNoZWNrZWQgc3RhdGUgYW5kIGNoYW5nZSBpdCBhY2NvcmRpbmdseSAqL1xuICBjaGVja1Jvb3ROb2RlU2VsZWN0aW9uKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlU2VsZWN0ZWQgPSB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICBjb25zdCBkZXNjQWxsU2VsZWN0ZWQgPSBkZXNjZW5kYW50cy5ldmVyeShjaGlsZCA9PlxuICAgICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZClcbiAgICApO1xuICAgIGlmIChub2RlU2VsZWN0ZWQgJiYgIWRlc2NBbGxTZWxlY3RlZCkge1xuICAgICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uZGVzZWxlY3Qobm9kZSk7XG4gICAgfSBlbHNlIGlmICghbm9kZVNlbGVjdGVkICYmIGRlc2NBbGxTZWxlY3RlZCkge1xuICAgICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uc2VsZWN0KG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qIEdldCB0aGUgcGFyZW50IG5vZGUgb2YgYSBub2RlICovXG4gIGdldFBhcmVudE5vZGUobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IFRvZG9JdGVtRmxhdE5vZGUgfCBudWxsIHtcbiAgICBjb25zdCBjdXJyZW50TGV2ZWwgPSB0aGlzLmdldExldmVsKG5vZGUpO1xuXG4gICAgaWYgKGN1cnJlbnRMZXZlbCA8IDEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2Rlcy5pbmRleE9mKG5vZGUpIC0gMTtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2Rlc1tpXTtcblxuICAgICAgaWYgKHRoaXMuZ2V0TGV2ZWwoY3VycmVudE5vZGUpIDwgY3VycmVudExldmVsKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogU2VsZWN0IHRoZSBjYXRlZ29yeSBzbyB3ZSBjYW4gaW5zZXJ0IHRoZSBuZXcgaXRlbS4gKi9cbiAgYWRkTmV3SXRlbShub2RlOiBUb2RvSXRlbUZsYXROb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuZmxhdE5vZGVNYXAuZ2V0KG5vZGUpO1xuICAgIHRoaXMuX2RhdGFiYXNlLmluc2VydEl0ZW0ocGFyZW50Tm9kZSEsICcnKTtcbiAgICB0aGlzLnRyZWVDb250cm9sLmV4cGFuZChub2RlKTtcbiAgfVxuXG4gIC8qKiBTYXZlIHRoZSBub2RlIHRvIGRhdGFiYXNlICovXG4gIHNhdmVOb2RlKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUsIGl0ZW1WYWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IHRoaXMuZmxhdE5vZGVNYXAuZ2V0KG5vZGUpO1xuICAgIHRoaXMuX2RhdGFiYXNlLnVwZGF0ZUl0ZW0obmVzdGVkTm9kZSEsIGl0ZW1WYWx1ZSk7XG4gIH1cbn1cbiIsIjxtYXQtdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVUb2dnbGUgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJjaGVja2xpc3QtbGVhZi1ub2RlXCJcbiAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwidG9kb0xlYWZJdGVtU2VsZWN0aW9uVG9nZ2xlKG5vZGUpXCI+e3tub2RlLml0ZW19fTwvbWF0LWNoZWNrYm94PlxuICA8L21hdC10cmVlLW5vZGU+XG5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc05vQ29udGVudFwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgI2l0ZW1WYWx1ZSBwbGFjZWhvbGRlcj1cIk5ldyBpdGVtLi4uXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInNhdmVOb2RlKG5vZGUsIGl0ZW1WYWx1ZS52YWx1ZSlcIj5TYXZlPC9idXR0b24+XG4gIDwvbWF0LXRyZWUtbm9kZT5cblxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VHJlZU5vZGVUb2dnbGVcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3RvZ2dsZSAnICsgbm9kZS5maWxlbmFtZVwiPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPG1hdC1jaGVja2JveCBbY2hlY2tlZF09XCJkZXNjZW5kYW50c0FsbFNlbGVjdGVkKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cImRlc2NlbmRhbnRzUGFydGlhbGx5U2VsZWN0ZWQobm9kZSlcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJ0b2RvSXRlbVNlbGVjdGlvblRvZ2dsZShub2RlKVwiPnt7bm9kZS5pdGVtfX08L21hdC1jaGVja2JveD5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiYWRkTmV3SXRlbShub2RlKVwiPjxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICA8L21hdC10cmVlLW5vZGU+XG48L21hdC10cmVlPlxuIl19