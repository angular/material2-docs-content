import { NgIf, CommonModule } from '@angular/common';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵelement, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵproperty, ɵɵtextInterpolate, ɵɵreference, ɵɵattribute, ɵɵtextInterpolate1, Injectable, ɵɵdefineInjectable, ɵsetClassMetadata, Component, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵProvidersFeature, ɵɵtemplate, ɵɵelementContainer, ɵɵclassProp, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTreeFlattener, MatTreeFlatDataSource, MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodeToggle, MatTreeNodePadding, MatTreeNestedDataSource, MatNestedTreeNode, MatTreeNodeOutlet, MatTreeModule } from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, merge } from 'rxjs';
import { MatFormField } from '@angular/material/form-field';
import { map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tree/tree-checklist/tree-checklist-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TreeChecklistExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelement(1, "button", 4);
    ɵɵelementStart(2, "mat-checkbox", 5);
    ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_1_Template_mat_checkbox_change_2_listener($event) { ɵɵrestoreView(_r5); const node_r3 = ctx.$implicit; const ctx_r4 = ɵɵnextContext(); return ctx_r4.todoLeafItemSelectionToggle(node_r3); });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("checked", ctx_r0.checklistSelection.isSelected(node_r3));
    ɵɵadvance(1);
    ɵɵtextInterpolate(node_r3.item);
} }
function TreeChecklistExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 6);
    ɵɵelement(1, "button", 4);
    ɵɵelementStart(2, "mat-form-field");
    ɵɵelement(3, "input", 7, 8);
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 9);
    ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_2_Template_button_click_5_listener($event) { ɵɵrestoreView(_r9); const node_r6 = ctx.$implicit; const _r7 = ɵɵreference(4); const ctx_r8 = ɵɵnextContext(); return ctx_r8.saveNode(node_r6, _r7.value); });
    ɵɵtext(6, "Save");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function TreeChecklistExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 6);
    ɵɵelementStart(1, "button", 10);
    ɵɵelementStart(2, "mat-icon", 11);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-checkbox", 12);
    ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_3_Template_mat_checkbox_change_4_listener($event) { ɵɵrestoreView(_r12); const node_r10 = ctx.$implicit; const ctx_r11 = ɵɵnextContext(); return ctx_r11.todoItemSelectionToggle(node_r10); });
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 13);
    ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_3_Template_button_click_6_listener($event) { ɵɵrestoreView(_r12); const node_r10 = ctx.$implicit; const ctx_r13 = ɵɵnextContext(); return ctx_r13.addNewItem(node_r10); });
    ɵɵelementStart(7, "mat-icon");
    ɵɵtext(8, "add");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r10 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", "toggle " + node_r10.filename);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.treeControl.isExpanded(node_r10) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵproperty("checked", ctx_r2.descendantsAllSelected(node_r10))("indeterminate", ctx_r2.descendantsPartiallySelected(node_r10));
    ɵɵadvance(1);
    ɵɵtextInterpolate(node_r10.item);
} }
/**
 * Node for to-do item
 */
class TodoItemNode {
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
class TodoItemFlatNode {
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
/** @nocollapse */ ChecklistDatabase.ɵprov = ɵɵdefineInjectable({ token: ChecklistDatabase, factory: ChecklistDatabase.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChecklistDatabase, [{
        type: Injectable
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    ChecklistDatabase.prototype.dataChange;
}
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
/** @nocollapse */ TreeChecklistExample.ɵfac = function TreeChecklistExample_Factory(t) { return new (t || TreeChecklistExample)(ɵɵdirectiveInject(ChecklistDatabase)); };
/** @nocollapse */ TreeChecklistExample.ɵcmp = ɵɵdefineComponent({ type: TreeChecklistExample, selectors: [["tree-checklist-example"]], features: [ɵɵProvidersFeature([ChecklistDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["matInput", "", "placeholder", "New item..."], ["itemValue", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["mat-icon-button", "", 3, "click"]], template: function TreeChecklistExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tree", 0);
        ɵɵtemplate(1, TreeChecklistExample_mat_tree_node_1_Template, 4, 2, "mat-tree-node", 1);
        ɵɵtemplate(2, TreeChecklistExample_mat_tree_node_2_Template, 7, 0, "mat-tree-node", 2);
        ɵɵtemplate(3, TreeChecklistExample_mat_tree_node_3_Template, 9, 5, "mat-tree-node", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        ɵɵadvance(2);
        ɵɵproperty("matTreeNodeDefWhen", ctx.hasNoContent);
        ɵɵadvance(1);
        ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodeToggle, MatTreeNodePadding, MatButton, MatCheckbox, MatFormField, MatInput, MatIcon], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeChecklistExample, [{
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tree/tree-dynamic/tree-dynamic-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TreeDynamicExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelement(1, "button", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r16 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", node_r16.item, " ");
} }
function TreeDynamicExample_mat_tree_node_2_mat_progress_bar_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-progress-bar", 8);
} }
function TreeDynamicExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelementStart(1, "button", 5);
    ɵɵelementStart(2, "mat-icon", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵtemplate(5, TreeDynamicExample_mat_tree_node_2_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r17 = ctx.$implicit;
    const ctx_r15 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", "toggle " + node_r17.filename);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r15.treeControl.isExpanded(node_r17) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r17.item, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", node_r17.isLoading);
} }
/**
 * Flat node with expandable and level information
 */
class DynamicFlatNode {
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
class DynamicDatabase {
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
DynamicDatabase.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */ DynamicDatabase.ɵfac = function DynamicDatabase_Factory(t) { return new (t || DynamicDatabase)(); };
/** @nocollapse */ DynamicDatabase.ɵprov = ɵɵdefineInjectable({ token: DynamicDatabase, factory: DynamicDatabase.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DynamicDatabase, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
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
class DynamicDataSource {
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
class TreeDynamicExample {
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
                styleUrls: ['tree-dynamic-example.css']
            },] },
];
/** @nocollapse */
TreeDynamicExample.ctorParameters = () => [
    { type: DynamicDatabase }
];
/** @nocollapse */ TreeDynamicExample.ɵfac = function TreeDynamicExample_Factory(t) { return new (t || TreeDynamicExample)(ɵɵdirectiveInject(DynamicDatabase)); };
/** @nocollapse */ TreeDynamicExample.ɵcmp = ɵɵdefineComponent({ type: TreeDynamicExample, selectors: [["tree-dynamic-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["mode", "indeterminate", "class", "example-tree-progress-bar", 4, "ngIf"], ["mode", "indeterminate", 1, "example-tree-progress-bar"]], template: function TreeDynamicExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tree", 0);
        ɵɵtemplate(1, TreeDynamicExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
        ɵɵtemplate(2, TreeDynamicExample_mat_tree_node_2_Template, 6, 4, "mat-tree-node", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        ɵɵadvance(2);
        ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodePadding, MatButton, MatTreeNodeToggle, MatIcon, NgIf, MatProgressBar], styles: [".example-tree-progress-bar[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tree-dynamic-example',
                templateUrl: 'tree-dynamic-example.html',
                styleUrls: ['tree-dynamic-example.css']
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tree/tree-flat-overview/tree-flat-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TreeFlatOverviewExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelement(1, "button", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r21 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", node_r21.name, " ");
} }
function TreeFlatOverviewExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelementStart(1, "button", 5);
    ɵɵelementStart(2, "mat-icon", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r22 = ctx.$implicit;
    const ctx_r20 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", "toggle " + node_r22.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r20.treeControl.isExpanded(node_r22) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r22.name, " ");
} }
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 * @record
 */
function FoodNode() { }
if (false) {
    /** @type {?} */
    FoodNode.prototype.name;
    /** @type {?|undefined} */
    FoodNode.prototype.children;
}
/** @type {?} */
const TREE_DATA$1 = [
    {
        name: 'Fruit',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ]
    }, {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [
                    { name: 'Broccoli' },
                    { name: 'Brussels sprouts' },
                ]
            }, {
                name: 'Orange',
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
];
/**
 * Flat node with expandable and level information
 * @record
 */
function ExampleFlatNode() { }
if (false) {
    /** @type {?} */
    ExampleFlatNode.prototype.expandable;
    /** @type {?} */
    ExampleFlatNode.prototype.name;
    /** @type {?} */
    ExampleFlatNode.prototype.level;
}
/**
 * \@title Tree with flat nodes
 */
class TreeFlatOverviewExample {
    constructor() {
        this._transformer = (/**
         * @param {?} node
         * @param {?} level
         * @return {?}
         */
        (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        });
        this.treeControl = new FlatTreeControl((/**
         * @param {?} node
         * @return {?}
         */
        node => node.level), (/**
         * @param {?} node
         * @return {?}
         */
        node => node.expandable));
        this.treeFlattener = new MatTreeFlattener(this._transformer, (/**
         * @param {?} node
         * @return {?}
         */
        node => node.level), (/**
         * @param {?} node
         * @return {?}
         */
        node => node.expandable), (/**
         * @param {?} node
         * @return {?}
         */
        node => node.children));
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = (/**
         * @param {?} _
         * @param {?} node
         * @return {?}
         */
        (_, node) => node.expandable);
        this.dataSource.data = TREE_DATA$1;
    }
}
TreeFlatOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-flat-overview-example',
                templateUrl: 'tree-flat-overview-example.html',
                styleUrls: ['tree-flat-overview-example.css'],
            },] },
];
/** @nocollapse */
TreeFlatOverviewExample.ctorParameters = () => [];
/** @nocollapse */ TreeFlatOverviewExample.ɵfac = function TreeFlatOverviewExample_Factory(t) { return new (t || TreeFlatOverviewExample)(); };
/** @nocollapse */ TreeFlatOverviewExample.ɵcmp = ɵɵdefineComponent({ type: TreeFlatOverviewExample, selectors: [["tree-flat-overview-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]], template: function TreeFlatOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tree", 0);
        ɵɵtemplate(1, TreeFlatOverviewExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
        ɵɵtemplate(2, TreeFlatOverviewExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        ɵɵadvance(2);
        ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodePadding, MatButton, MatTreeNodeToggle, MatIcon], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeFlatOverviewExample, [{
        type: Component,
        args: [{
                selector: 'tree-flat-overview-example',
                templateUrl: 'tree-flat-overview-example.html',
                styleUrls: ['tree-flat-overview-example.css'],
            }]
    }], function () { return []; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    TreeFlatOverviewExample.prototype._transformer;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.treeControl;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.treeFlattener;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.dataSource;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.hasChild;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tree/tree-loadmore/tree-loadmore-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TreeLoadmoreExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 4);
    ɵɵelement(1, "button", 5);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r26 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", node_r26.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 4);
    ɵɵelementStart(1, "button", 6);
    ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_2_Template_button_click_1_listener($event) { ɵɵrestoreView(_r29); const node_r27 = ctx.$implicit; const ctx_r28 = ɵɵnextContext(); return ctx_r28.loadChildren(node_r27); });
    ɵɵelementStart(2, "mat-icon", 7);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r27 = ctx.$implicit;
    const ctx_r24 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", "toggle " + node_r27.filename);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r24.treeControl.isExpanded(node_r27) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r27.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node");
    ɵɵelementStart(1, "button", 8);
    ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_3_Template_button_click_1_listener($event) { ɵɵrestoreView(_r32); const node_r30 = ctx.$implicit; const ctx_r31 = ɵɵnextContext(); return ctx_r31.loadMore(node_r30.loadMoreParentItem); });
    ɵɵtext(2, " Load more... ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
/** @type {?} */
const LOAD_MORE = 'LOAD_MORE';
/**
 * Nested node
 */
class LoadmoreNode {
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
class LoadmoreFlatNode {
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
class LoadmoreDatabase {
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
        const data = this.rootLevelNodes.map((/**
         * @param {?} name
         * @return {?}
         */
        name => this._generateNode(name)));
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
            .map((/**
         * @param {?} name
         * @return {?}
         */
        name => this._generateNode(name)));
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
    { type: Injectable },
];
/** @nocollapse */ LoadmoreDatabase.ɵfac = function LoadmoreDatabase_Factory(t) { return new (t || LoadmoreDatabase)(); };
/** @nocollapse */ LoadmoreDatabase.ɵprov = ɵɵdefineInjectable({ token: LoadmoreDatabase, factory: LoadmoreDatabase.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoadmoreDatabase, [{
        type: Injectable
    }], null, null); })();
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
class TreeLoadmoreExample {
    /**
     * @param {?} _database
     */
    constructor(_database) {
        this._database = _database;
        this.nodeMap = new Map();
        this.getChildren = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.childrenChange);
        this.transformer = (/**
         * @param {?} node
         * @param {?} level
         * @return {?}
         */
        (node, level) => {
            /** @type {?} */
            const existingNode = this.nodeMap.get(node.item);
            if (existingNode) {
                return existingNode;
            }
            /** @type {?} */
            const newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            this.nodeMap.set(node.item, newNode);
            return newNode;
        });
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
        this.isLoadMore = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        (_, _nodeData) => _nodeData.item === LOAD_MORE);
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
        _database.initialize();
    }
    /**
     * Load more nodes from data source
     * @param {?} item
     * @return {?}
     */
    loadMore(item) {
        this._database.loadMore(item);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    loadChildren(node) {
        this._database.loadMore(node.item, true);
    }
}
TreeLoadmoreExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-loadmore-example',
                templateUrl: 'tree-loadmore-example.html',
                styleUrls: ['tree-loadmore-example.css'],
                providers: [LoadmoreDatabase]
            },] },
];
/** @nocollapse */
TreeLoadmoreExample.ctorParameters = () => [
    { type: LoadmoreDatabase }
];
/** @nocollapse */ TreeLoadmoreExample.ɵfac = function TreeLoadmoreExample_Factory(t) { return new (t || TreeLoadmoreExample)(ɵɵdirectiveInject(LoadmoreDatabase)); };
/** @nocollapse */ TreeLoadmoreExample.ɵcmp = ɵɵdefineComponent({ type: TreeLoadmoreExample, selectors: [["tree-loadmore-example"]], features: [ɵɵProvidersFeature([LoadmoreDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"], ["mat-button", "", 3, "click"]], template: function TreeLoadmoreExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tree", 0);
        ɵɵtemplate(1, TreeLoadmoreExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
        ɵɵtemplate(2, TreeLoadmoreExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
        ɵɵtemplate(3, TreeLoadmoreExample_mat_tree_node_3_Template, 3, 0, "mat-tree-node", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        ɵɵadvance(2);
        ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
        ɵɵadvance(1);
        ɵɵproperty("matTreeNodeDefWhen", ctx.isLoadMore);
    } }, directives: [MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodePadding, MatButton, MatTreeNodeToggle, MatIcon], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeLoadmoreExample, [{
        type: Component,
        args: [{
                selector: 'tree-loadmore-example',
                templateUrl: 'tree-loadmore-example.html',
                styleUrls: ['tree-loadmore-example.css'],
                providers: [LoadmoreDatabase]
            }]
    }], function () { return [{ type: LoadmoreDatabase }]; }, null); })();
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
    TreeLoadmoreExample.prototype._database;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tree/tree-nested-overview/tree-nested-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TreeNestedOverviewExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelementStart(1, "li", 4);
    ɵɵelement(2, "button", 5);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r35 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", node_r35.name, " ");
} }
function TreeNestedOverviewExample_mat_nested_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-nested-tree-node");
    ɵɵelementStart(1, "li");
    ɵɵelementStart(2, "div", 4);
    ɵɵelementStart(3, "button", 6);
    ɵɵelementStart(4, "mat-icon", 7);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "ul");
    ɵɵelementContainer(8, 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r36 = ctx.$implicit;
    const ctx_r34 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵattribute("aria-label", "toggle " + node_r36.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r34.treeControl.isExpanded(node_r36) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r36.name, " ");
    ɵɵadvance(1);
    ɵɵclassProp("example-tree-invisible", !ctx_r34.treeControl.isExpanded(node_r36));
} }
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 * @record
 */
function FoodNode$1() { }
if (false) {
    /** @type {?} */
    FoodNode$1.prototype.name;
    /** @type {?|undefined} */
    FoodNode$1.prototype.children;
}
/** @type {?} */
const TREE_DATA$2 = [
    {
        name: 'Fruit',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ]
    }, {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [
                    { name: 'Broccoli' },
                    { name: 'Brussels sprouts' },
                ]
            }, {
                name: 'Orange',
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
];
/**
 * \@title Tree with nested nodes
 */
class TreeNestedOverviewExample {
    constructor() {
        this.treeControl = new NestedTreeControl((/**
         * @param {?} node
         * @return {?}
         */
        node => node.children));
        this.dataSource = new MatTreeNestedDataSource();
        this.hasChild = (/**
         * @param {?} _
         * @param {?} node
         * @return {?}
         */
        (_, node) => !!node.children && node.children.length > 0);
        this.dataSource.data = TREE_DATA$2;
    }
}
TreeNestedOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-nested-overview-example',
                templateUrl: 'tree-nested-overview-example.html',
                styleUrls: ['tree-nested-overview-example.css'],
            },] },
];
/** @nocollapse */
TreeNestedOverviewExample.ctorParameters = () => [];
/** @nocollapse */ TreeNestedOverviewExample.ɵfac = function TreeNestedOverviewExample_Factory(t) { return new (t || TreeNestedOverviewExample)(); };
/** @nocollapse */ TreeNestedOverviewExample.ɵcmp = ɵɵdefineComponent({ type: TreeNestedOverviewExample, selectors: [["tree-nested-overview-example"]], decls: 3, vars: 3, consts: [[1, "example-tree", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", ""], [1, "mat-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["matTreeNodeOutlet", ""]], template: function TreeNestedOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tree", 0);
        ɵɵtemplate(1, TreeNestedOverviewExample_mat_tree_node_1_Template, 4, 1, "mat-tree-node", 1);
        ɵɵtemplate(2, TreeNestedOverviewExample_mat_nested_tree_node_2_Template, 9, 5, "mat-nested-tree-node", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        ɵɵadvance(2);
        ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodeToggle, MatButton, MatNestedTreeNode, MatIcon, MatTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeNestedOverviewExample, [{
        type: Component,
        args: [{
                selector: 'tree-nested-overview-example',
                templateUrl: 'tree-nested-overview-example.html',
                styleUrls: ['tree-nested-overview-example.css'],
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    TreeNestedOverviewExample.prototype.treeControl;
    /** @type {?} */
    TreeNestedOverviewExample.prototype.dataSource;
    /** @type {?} */
    TreeNestedOverviewExample.prototype.hasChild;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tree/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    TreeChecklistExample,
    TreeDynamicExample,
    TreeFlatOverviewExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample,
];
class TreeExamplesModule {
}
TreeExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatProgressBarModule,
                    MatTreeModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ TreeExamplesModule.ɵmod = ɵɵdefineNgModule({ type: TreeExamplesModule });
/** @nocollapse */ TreeExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function TreeExamplesModule_Factory(t) { return new (t || TreeExamplesModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatProgressBarModule,
            MatTreeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TreeExamplesModule, { declarations: [TreeChecklistExample,
        TreeDynamicExample,
        TreeFlatOverviewExample,
        TreeLoadmoreExample,
        TreeNestedOverviewExample], imports: [CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatTreeModule], exports: [TreeChecklistExample,
        TreeDynamicExample,
        TreeFlatOverviewExample,
        TreeLoadmoreExample,
        TreeNestedOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatProgressBarModule,
                    MatTreeModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { TreeChecklistExample, TreeDynamicExample, TreeExamplesModule, TreeFlatOverviewExample, TreeLoadmoreExample, TreeNestedOverviewExample };
//# sourceMappingURL=tree.js.map
