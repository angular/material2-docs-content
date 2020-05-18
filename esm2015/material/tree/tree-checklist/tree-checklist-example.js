/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tree/tree-checklist/tree-checklist-example.ts
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
    i0.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_1_Template_mat_checkbox_change_2_listener() { i0.ɵɵrestoreView(_r5); const node_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.todoLeafItemSelectionToggle(node_r3); });
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
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4, "New item...");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 7, 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 9);
    i0.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_2_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r9); const node_r6 = ctx.$implicit; const _r7 = i0.ɵɵreference(6); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.saveNode(node_r6, _r7.value); });
    i0.ɵɵtext(8, "Save");
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
    i0.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_3_Template_mat_checkbox_change_4_listener() { i0.ɵɵrestoreView(_r12); const node_r10 = ctx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.todoItemSelectionToggle(node_r10); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 13);
    i0.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_3_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r12); const node_r10 = ctx.$implicit; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.addNewItem(node_r10); });
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
let ChecklistDatabase = /** @class */ (() => {
    /**
     * Checklist database, it can build a tree structured Json object.
     * Each node in Json object represents a to-do item or a category.
     * If a node is a category, it has children items and new items can be added under the category.
     */
    class ChecklistDatabase {
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
    /** @nocollapse */ ChecklistDatabase.ɵprov = i0.ɵɵdefineInjectable({ token: ChecklistDatabase, factory: ChecklistDatabase.ɵfac });
    return ChecklistDatabase;
})();
export { ChecklistDatabase };
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
let TreeChecklistExample = /** @class */ (() => {
    /**
     * \@title Tree with checkboxes
     */
    class TreeChecklistExample {
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
    /** @nocollapse */ TreeChecklistExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeChecklistExample, selectors: [["tree-checklist-example"]], features: [i0.ɵɵProvidersFeature([ChecklistDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["matInput", "", "placeholder", "Ex. Lettuce"], ["itemValue", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["mat-icon-button", "", 3, "click"]], template: function TreeChecklistExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tree", 0);
            i0.ɵɵtemplate(1, TreeChecklistExample_mat_tree_node_1_Template, 4, 2, "mat-tree-node", 1);
            i0.ɵɵtemplate(2, TreeChecklistExample_mat_tree_node_2_Template, 9, 0, "mat-tree-node", 2);
            i0.ɵɵtemplate(3, TreeChecklistExample_mat_tree_node_3_Template, 9, 5, "mat-tree-node", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasNoContent);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
        } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodeToggle, i1.MatTreeNodePadding, i2.MatButton, i3.MatCheckbox, i4.MatFormField, i4.MatLabel, i5.MatInput, i6.MatIcon], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}"] });
    return TreeChecklistExample;
})();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jaGVja2xpc3QtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7O0lDSG5DLHdDQUNFO0lBQUEsNEJBQTBDO0lBQzFDLHVDQUUyRDtJQUE3QyxpUUFBNEM7SUFBQyxZQUFhO0lBQUEsaUJBQWU7SUFDekYsaUJBQWdCOzs7O0lBRkEsZUFBK0M7SUFBL0MsdUVBQStDO0lBQ0YsZUFBYTtJQUFiLGtDQUFhOzs7O0lBRzFFLHdDQUNFO0lBQUEsNEJBQTBDO0lBQzFDLHNDQUNFO0lBQUEsaUNBQVc7SUFBQSwyQkFBVztJQUFBLGlCQUFZO0lBQ2xDLDhCQUNGO0lBQUEsaUJBQWlCO0lBQ2pCLGlDQUE2RDtJQUExQyxnUkFBeUM7SUFBQyxvQkFBSTtJQUFBLGlCQUFTO0lBQzVFLGlCQUFnQjs7OztJQUVoQix3Q0FDRTtJQUFBLGtDQUVFO0lBQUEsb0NBQ0U7SUFBQSxZQUNGO0lBQUEs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QztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDekMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQy9COzs7O2dCQXVCZ0MsaUJBQWlCOzsrR0F0QnJDLG9CQUFvQix1QkFzQkEsaUJBQWlCO2dGQXRCckMsb0JBQW9CLDRFQUZwQixDQUFDLGlCQUFpQixDQUFDO1lDN0doQyxtQ0FDRTtZQUFBLHlGQUNFO1lBTUYseUZBQ0U7WUFRRix5RkFDRTtZQVdKLGlCQUFXOztZQTdCRCwyQ0FBeUIsZ0NBQUE7WUFRbEIsZUFBOEM7WUFBOUMscURBQThDO1lBUzlDLGVBQTBDO1lBQTFDLGlEQUEwQzs7K0JEakIzRDtLQXNRQztTQXZKWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQU5oQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQy9CO3NDQXVCZ0MsaUJBQWlCOzs7Ozs7SUFwQmhELDJDQUF3RDs7Ozs7SUFHeEQsNkNBQTBEOzs7OztJQUcxRCw4Q0FBK0M7Ozs7O0lBRy9DLDJDQUFpQjs7SUFFakIsMkNBQStDOztJQUUvQyw2Q0FBZ0U7O0lBRWhFLDBDQUFrRTs7Ozs7SUFHbEUsa0RBQStFOztJQWEvRSx3Q0FBa0Q7O0lBRWxELDRDQUEyRDs7SUFFM0QsMkNBQW9FOztJQUVwRSx3Q0FBNEU7O0lBRTVFLDRDQUFpRjs7Ozs7SUFLakYsMkNBV0M7Ozs7O0lBbkNXLHlDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlRmxhdERhdGFTb3VyY2UsIE1hdFRyZWVGbGF0dGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIE5vZGUgZm9yIHRvLWRvIGl0ZW1cbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9JdGVtTm9kZSB7XG4gIGNoaWxkcmVuOiBUb2RvSXRlbU5vZGVbXTtcbiAgaXRlbTogc3RyaW5nO1xufVxuXG4vKiogRmxhdCB0by1kbyBpdGVtIG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9JdGVtRmxhdE5vZGUge1xuICBpdGVtOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG4gIGV4cGFuZGFibGU6IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhlIEpzb24gb2JqZWN0IGZvciB0by1kbyBsaXN0IGRhdGEuXG4gKi9cbmNvbnN0IFRSRUVfREFUQSA9IHtcbiAgR3JvY2VyaWVzOiB7XG4gICAgJ0FsbW9uZCBNZWFsIGZsb3VyJzogbnVsbCxcbiAgICAnT3JnYW5pYyBlZ2dzJzogbnVsbCxcbiAgICAnUHJvdGVpbiBQb3dkZXInOiBudWxsLFxuICAgIEZydWl0czoge1xuICAgICAgQXBwbGU6IG51bGwsXG4gICAgICBCZXJyaWVzOiBbJ0JsdWViZXJyeScsICdSYXNwYmVycnknXSxcbiAgICAgIE9yYW5nZTogbnVsbFxuICAgIH1cbiAgfSxcbiAgUmVtaW5kZXJzOiBbXG4gICAgJ0Nvb2sgZGlubmVyJyxcbiAgICAnUmVhZCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMnLFxuICAgICdVcGdyYWRlIEFwcGxpY2F0aW9uIHRvIEFuZ3VsYXInXG4gIF1cbn07XG5cbi8qKlxuICogQ2hlY2tsaXN0IGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIHRvLWRvIGl0ZW0gb3IgYSBjYXRlZ29yeS5cbiAqIElmIGEgbm9kZSBpcyBhIGNhdGVnb3J5LCBpdCBoYXMgY2hpbGRyZW4gaXRlbXMgYW5kIG5ldyBpdGVtcyBjYW4gYmUgYWRkZWQgdW5kZXIgdGhlIGNhdGVnb3J5LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hlY2tsaXN0RGF0YWJhc2Uge1xuICBkYXRhQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUb2RvSXRlbU5vZGVbXT4oW10pO1xuXG4gIGdldCBkYXRhKCk6IFRvZG9JdGVtTm9kZVtdIHsgcmV0dXJuIHRoaXMuZGF0YUNoYW5nZS52YWx1ZTsgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBCdWlsZCB0aGUgdHJlZSBub2RlcyBmcm9tIEpzb24gb2JqZWN0LiBUaGUgcmVzdWx0IGlzIGEgbGlzdCBvZiBgVG9kb0l0ZW1Ob2RlYCB3aXRoIG5lc3RlZFxuICAgIC8vICAgICBmaWxlIG5vZGUgYXMgY2hpbGRyZW4uXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuYnVpbGRGaWxlVHJlZShUUkVFX0RBVEEsIDApO1xuXG4gICAgLy8gTm90aWZ5IHRoZSBjaGFuZ2UuXG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIGZpbGUgc3RydWN0dXJlIHRyZWUuIFRoZSBgdmFsdWVgIGlzIHRoZSBKc29uIG9iamVjdCwgb3IgYSBzdWItdHJlZSBvZiBhIEpzb24gb2JqZWN0LlxuICAgKiBUaGUgcmV0dXJuIHZhbHVlIGlzIHRoZSBsaXN0IG9mIGBUb2RvSXRlbU5vZGVgLlxuICAgKi9cbiAgYnVpbGRGaWxlVHJlZShvYmo6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBsZXZlbDogbnVtYmVyKTogVG9kb0l0ZW1Ob2RlW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZTxUb2RvSXRlbU5vZGVbXT4oKGFjY3VtdWxhdG9yLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICBjb25zdCBub2RlID0gbmV3IFRvZG9JdGVtTm9kZSgpO1xuICAgICAgbm9kZS5pdGVtID0ga2V5O1xuXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSB0aGlzLmJ1aWxkRmlsZVRyZWUodmFsdWUsIGxldmVsICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5pdGVtID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yLmNvbmNhdChub2RlKTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICAvKiogQWRkIGFuIGl0ZW0gdG8gdG8tZG8gbGlzdCAqL1xuICBpbnNlcnRJdGVtKHBhcmVudDogVG9kb0l0ZW1Ob2RlLCBuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAocGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh7aXRlbTogbmFtZX0gYXMgVG9kb0l0ZW1Ob2RlKTtcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSXRlbShub2RlOiBUb2RvSXRlbU5vZGUsIG5hbWU6IHN0cmluZykge1xuICAgIG5vZGUuaXRlbSA9IG5hbWU7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggY2hlY2tib3hlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWNoZWNrbGlzdC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWNoZWNrbGlzdC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1jaGVja2xpc3QtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbQ2hlY2tsaXN0RGF0YWJhc2VdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVDaGVja2xpc3RFeGFtcGxlIHtcbiAgLyoqIE1hcCBmcm9tIGZsYXQgbm9kZSB0byBuZXN0ZWQgbm9kZS4gVGhpcyBoZWxwcyB1cyBmaW5kaW5nIHRoZSBuZXN0ZWQgbm9kZSB0byBiZSBtb2RpZmllZCAqL1xuICBmbGF0Tm9kZU1hcCA9IG5ldyBNYXA8VG9kb0l0ZW1GbGF0Tm9kZSwgVG9kb0l0ZW1Ob2RlPigpO1xuXG4gIC8qKiBNYXAgZnJvbSBuZXN0ZWQgbm9kZSB0byBmbGF0dGVuZWQgbm9kZS4gVGhpcyBoZWxwcyB1cyB0byBrZWVwIHRoZSBzYW1lIG9iamVjdCBmb3Igc2VsZWN0aW9uICovXG4gIG5lc3RlZE5vZGVNYXAgPSBuZXcgTWFwPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT4oKTtcblxuICAvKiogQSBzZWxlY3RlZCBwYXJlbnQgbm9kZSB0byBiZSBpbnNlcnRlZCAqL1xuICBzZWxlY3RlZFBhcmVudDogVG9kb0l0ZW1GbGF0Tm9kZSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBUaGUgbmV3IGl0ZW0ncyBuYW1lICovXG4gIG5ld0l0ZW1OYW1lID0gJyc7XG5cbiAgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxUb2RvSXRlbUZsYXROb2RlPjtcblxuICB0cmVlRmxhdHRlbmVyOiBNYXRUcmVlRmxhdHRlbmVyPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT47XG5cbiAgZGF0YVNvdXJjZTogTWF0VHJlZUZsYXREYXRhU291cmNlPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT47XG5cbiAgLyoqIFRoZSBzZWxlY3Rpb24gZm9yIGNoZWNrbGlzdCAqL1xuICBjaGVja2xpc3RTZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8VG9kb0l0ZW1GbGF0Tm9kZT4odHJ1ZSAvKiBtdWx0aXBsZSAqLyk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YWJhc2U6IENoZWNrbGlzdERhdGFiYXNlKSB7XG4gICAgdGhpcy50cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIodGhpcy50cmFuc2Zvcm1lciwgdGhpcy5nZXRMZXZlbCxcbiAgICAgIHRoaXMuaXNFeHBhbmRhYmxlLCB0aGlzLmdldENoaWxkcmVuKTtcbiAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxUb2RvSXRlbUZsYXROb2RlPih0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRyZWVGbGF0RGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCB0aGlzLnRyZWVGbGF0dGVuZXIpO1xuXG4gICAgX2RhdGFiYXNlLmRhdGFDaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGV2ZWwgPSAobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gbm9kZS5sZXZlbDtcblxuICBpc0V4cGFuZGFibGUgPSAobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGdldENoaWxkcmVuID0gKG5vZGU6IFRvZG9JdGVtTm9kZSk6IFRvZG9JdGVtTm9kZVtdID0+IG5vZGUuY2hpbGRyZW47XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IFRvZG9JdGVtRmxhdE5vZGUpID0+IF9ub2RlRGF0YS5leHBhbmRhYmxlO1xuXG4gIGhhc05vQ29udGVudCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gX25vZGVEYXRhLml0ZW0gPT09ICcnO1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1lciB0byBjb252ZXJ0IG5lc3RlZCBub2RlIHRvIGZsYXQgbm9kZS4gUmVjb3JkIHRoZSBub2RlcyBpbiBtYXBzIGZvciBsYXRlciB1c2UuXG4gICAqL1xuICB0cmFuc2Zvcm1lciA9IChub2RlOiBUb2RvSXRlbU5vZGUsIGxldmVsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBleGlzdGluZ05vZGUgPSB0aGlzLm5lc3RlZE5vZGVNYXAuZ2V0KG5vZGUpO1xuICAgIGNvbnN0IGZsYXROb2RlID0gZXhpc3RpbmdOb2RlICYmIGV4aXN0aW5nTm9kZS5pdGVtID09PSBub2RlLml0ZW1cbiAgICAgICAgPyBleGlzdGluZ05vZGVcbiAgICAgICAgOiBuZXcgVG9kb0l0ZW1GbGF0Tm9kZSgpO1xuICAgIGZsYXROb2RlLml0ZW0gPSBub2RlLml0ZW07XG4gICAgZmxhdE5vZGUubGV2ZWwgPSBsZXZlbDtcbiAgICBmbGF0Tm9kZS5leHBhbmRhYmxlID0gISFub2RlLmNoaWxkcmVuO1xuICAgIHRoaXMuZmxhdE5vZGVNYXAuc2V0KGZsYXROb2RlLCBub2RlKTtcbiAgICB0aGlzLm5lc3RlZE5vZGVNYXAuc2V0KG5vZGUsIGZsYXROb2RlKTtcbiAgICByZXR1cm4gZmxhdE5vZGU7XG4gIH1cblxuICAvKiogV2hldGhlciBhbGwgdGhlIGRlc2NlbmRhbnRzIG9mIHRoZSBub2RlIGFyZSBzZWxlY3RlZC4gKi9cbiAgZGVzY2VuZGFudHNBbGxTZWxlY3RlZChub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NBbGxTZWxlY3RlZCA9IGRlc2NlbmRhbnRzLmV2ZXJ5KGNoaWxkID0+XG4gICAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKGNoaWxkKVxuICAgICk7XG4gICAgcmV0dXJuIGRlc2NBbGxTZWxlY3RlZDtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHBhcnQgb2YgdGhlIGRlc2NlbmRhbnRzIGFyZSBzZWxlY3RlZCAqL1xuICBkZXNjZW5kYW50c1BhcnRpYWxseVNlbGVjdGVkKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiBib29sZWFuIHtcbiAgICBjb25zdCBkZXNjZW5kYW50cyA9IHRoaXMudHJlZUNvbnRyb2wuZ2V0RGVzY2VuZGFudHMobm9kZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gZGVzY2VuZGFudHMuc29tZShjaGlsZCA9PiB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKGNoaWxkKSk7XG4gICAgcmV0dXJuIHJlc3VsdCAmJiAhdGhpcy5kZXNjZW5kYW50c0FsbFNlbGVjdGVkKG5vZGUpO1xuICB9XG5cbiAgLyoqIFRvZ2dsZSB0aGUgdG8tZG8gaXRlbSBzZWxlY3Rpb24uIFNlbGVjdC9kZXNlbGVjdCBhbGwgdGhlIGRlc2NlbmRhbnRzIG5vZGUgKi9cbiAgdG9kb0l0ZW1TZWxlY3Rpb25Ub2dnbGUobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLnRvZ2dsZShub2RlKTtcbiAgICBjb25zdCBkZXNjZW5kYW50cyA9IHRoaXMudHJlZUNvbnRyb2wuZ2V0RGVzY2VuZGFudHMobm9kZSk7XG4gICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChub2RlKVxuICAgICAgPyB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5zZWxlY3QoLi4uZGVzY2VuZGFudHMpXG4gICAgICA6IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmRlc2VsZWN0KC4uLmRlc2NlbmRhbnRzKTtcblxuICAgIC8vIEZvcmNlIHVwZGF0ZSBmb3IgdGhlIHBhcmVudFxuICAgIGRlc2NlbmRhbnRzLmV2ZXJ5KGNoaWxkID0+XG4gICAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKGNoaWxkKVxuICAgICk7XG4gICAgdGhpcy5jaGVja0FsbFBhcmVudHNTZWxlY3Rpb24obm9kZSk7XG4gIH1cblxuICAvKiogVG9nZ2xlIGEgbGVhZiB0by1kbyBpdGVtIHNlbGVjdGlvbi4gQ2hlY2sgYWxsIHRoZSBwYXJlbnRzIHRvIHNlZSBpZiB0aGV5IGNoYW5nZWQgKi9cbiAgdG9kb0xlYWZJdGVtU2VsZWN0aW9uVG9nZ2xlKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi50b2dnbGUobm9kZSk7XG4gICAgdGhpcy5jaGVja0FsbFBhcmVudHNTZWxlY3Rpb24obm9kZSk7XG4gIH1cblxuICAvKiBDaGVja3MgYWxsIHRoZSBwYXJlbnRzIHdoZW4gYSBsZWFmIG5vZGUgaXMgc2VsZWN0ZWQvdW5zZWxlY3RlZCAqL1xuICBjaGVja0FsbFBhcmVudHNTZWxlY3Rpb24obm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IHZvaWQge1xuICAgIGxldCBwYXJlbnQ6IFRvZG9JdGVtRmxhdE5vZGUgfCBudWxsID0gdGhpcy5nZXRQYXJlbnROb2RlKG5vZGUpO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIHRoaXMuY2hlY2tSb290Tm9kZVNlbGVjdGlvbihwYXJlbnQpO1xuICAgICAgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnROb2RlKHBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENoZWNrIHJvb3Qgbm9kZSBjaGVja2VkIHN0YXRlIGFuZCBjaGFuZ2UgaXQgYWNjb3JkaW5nbHkgKi9cbiAgY2hlY2tSb290Tm9kZVNlbGVjdGlvbihub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZVNlbGVjdGVkID0gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChub2RlKTtcbiAgICBjb25zdCBkZXNjZW5kYW50cyA9IHRoaXMudHJlZUNvbnRyb2wuZ2V0RGVzY2VuZGFudHMobm9kZSk7XG4gICAgY29uc3QgZGVzY0FsbFNlbGVjdGVkID0gZGVzY2VuZGFudHMuZXZlcnkoY2hpbGQgPT5cbiAgICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQoY2hpbGQpXG4gICAgKTtcbiAgICBpZiAobm9kZVNlbGVjdGVkICYmICFkZXNjQWxsU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmRlc2VsZWN0KG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoIW5vZGVTZWxlY3RlZCAmJiBkZXNjQWxsU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLnNlbGVjdChub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKiBHZXQgdGhlIHBhcmVudCBub2RlIG9mIGEgbm9kZSAqL1xuICBnZXRQYXJlbnROb2RlKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiBUb2RvSXRlbUZsYXROb2RlIHwgbnVsbCB7XG4gICAgY29uc3QgY3VycmVudExldmVsID0gdGhpcy5nZXRMZXZlbChub2RlKTtcblxuICAgIGlmIChjdXJyZW50TGV2ZWwgPCAxKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMuaW5kZXhPZihub2RlKSAtIDE7XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXNbaV07XG5cbiAgICAgIGlmICh0aGlzLmdldExldmVsKGN1cnJlbnROb2RlKSA8IGN1cnJlbnRMZXZlbCkge1xuICAgICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqIFNlbGVjdCB0aGUgY2F0ZWdvcnkgc28gd2UgY2FuIGluc2VydCB0aGUgbmV3IGl0ZW0uICovXG4gIGFkZE5ld0l0ZW0obm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLmZsYXROb2RlTWFwLmdldChub2RlKTtcbiAgICB0aGlzLl9kYXRhYmFzZS5pbnNlcnRJdGVtKHBhcmVudE5vZGUhLCAnJyk7XG4gICAgdGhpcy50cmVlQ29udHJvbC5leHBhbmQobm9kZSk7XG4gIH1cblxuICAvKiogU2F2ZSB0aGUgbm9kZSB0byBkYXRhYmFzZSAqL1xuICBzYXZlTm9kZShub2RlOiBUb2RvSXRlbUZsYXROb2RlLCBpdGVtVmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSB0aGlzLmZsYXROb2RlTWFwLmdldChub2RlKTtcbiAgICB0aGlzLl9kYXRhYmFzZS51cGRhdGVJdGVtKG5lc3RlZE5vZGUhLCBpdGVtVmFsdWUpO1xuICB9XG59XG4iLCI8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIG1hdFRyZWVOb2RlVG9nZ2xlIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiY2hlY2tsaXN0LWxlYWYtbm9kZVwiXG4gICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJjaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChub2RlKVwiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInRvZG9MZWFmSXRlbVNlbGVjdGlvblRvZ2dsZShub2RlKVwiPnt7bm9kZS5pdGVtfX08L21hdC1jaGVja2JveD5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuXG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNOb0NvbnRlbnRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5OZXcgaXRlbS4uLjwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0ICNpdGVtVmFsdWUgcGxhY2Vob2xkZXI9XCJFeC4gTGV0dHVjZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzYXZlTm9kZShub2RlLCBpdGVtVmFsdWUudmFsdWUpXCI+U2F2ZTwvYnV0dG9uPlxuICA8L21hdC10cmVlLW5vZGU+XG5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdFRyZWVOb2RlVG9nZ2xlXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIid0b2dnbGUgJyArIG5vZGUuZmlsZW5hbWVcIj5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAge3t0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxtYXQtY2hlY2tib3ggW2NoZWNrZWRdPVwiZGVzY2VuZGFudHNBbGxTZWxlY3RlZChub2RlKVwiXG4gICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJkZXNjZW5kYW50c1BhcnRpYWxseVNlbGVjdGVkKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwidG9kb0l0ZW1TZWxlY3Rpb25Ub2dnbGUobm9kZSlcIj57e25vZGUuaXRlbX19PC9tYXQtY2hlY2tib3g+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImFkZE5ld0l0ZW0obm9kZSlcIj48bWF0LWljb24+YWRkPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==