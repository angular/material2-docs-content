/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
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
    { type: Injectable }
];
/** @nocollapse */
ChecklistDatabase.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    ChecklistDatabase.prototype.dataChange;
}
/**
 * \@title Tree with checkboxes
 */
export class TreeChecklistExample {
    /**
     * @param {?} database
     */
    constructor(database) {
        this.database = database;
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
        database.dataChange.subscribe((/**
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
        this.database.insertItem((/** @type {?} */ (parentNode)), '');
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
        this.database.updateItem((/** @type {?} */ (nestedNode)), itemValue);
    }
}
TreeChecklistExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-checklist-example',
                template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n                  [checked]=\"checklistSelection.isSelected(node)\"\n                  (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-form-field>\n      <input matInput #itemValue placeholder=\"New item...\">\n    </mat-form-field>\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>\n",
                providers: [ChecklistDatabase],
                styles: [""]
            }] }
];
/** @nocollapse */
TreeChecklistExample.ctorParameters = () => [
    { type: ChecklistDatabase }
];
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
    TreeChecklistExample.prototype.database;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jaGVja2xpc3QtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90cmVlLWNoZWNrbGlzdC90cmVlLWNoZWNrbGlzdC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9FLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7QUFLckMsTUFBTSxPQUFPLFlBQVk7Q0FHeEI7OztJQUZDLGdDQUF5Qjs7SUFDekIsNEJBQWE7Ozs7O0FBSWYsTUFBTSxPQUFPLGdCQUFnQjtDQUk1Qjs7O0lBSEMsZ0NBQWE7O0lBQ2IsaUNBQWM7O0lBQ2Qsc0NBQW9COzs7Ozs7TUFNaEIsU0FBUyxHQUFHO0lBQ2hCLFNBQVMsRUFBRTtRQUNULG1CQUFtQixFQUFFLElBQUk7UUFDekIsY0FBYyxFQUFFLElBQUk7UUFDcEIsZ0JBQWdCLEVBQUUsSUFBSTtRQUN0QixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7WUFDbkMsTUFBTSxFQUFFLElBQUk7U0FDYjtLQUNGO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsYUFBYTtRQUNiLCtCQUErQjtRQUMvQixnQ0FBZ0M7S0FDakM7Q0FDRjs7Ozs7O0FBUUQsTUFBTSxPQUFPLGlCQUFpQjtJQUs1QjtRQUpBLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBaUIsRUFBRSxDQUFDLENBQUM7UUFL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Q0FBQztJQUNuRCxDQUFDOzs7WUE1SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDI5Q0FBMEM7Z0JBRTFDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDOzthQUMvQjs7OztZQXVCK0IsaUJBQWlCOzs7Ozs7O0lBcEIvQywyQ0FBd0Q7Ozs7O0lBR3hELDZDQUEwRDs7Ozs7SUFHMUQsOENBQStDOzs7OztJQUcvQywyQ0FBaUI7O0lBRWpCLDJDQUErQzs7SUFFL0MsNkNBQWdFOztJQUVoRSwwQ0FBa0U7Ozs7O0lBR2xFLGtEQUErRTs7SUFhL0Usd0NBQWtEOztJQUVsRCw0Q0FBMkQ7O0lBRTNELDJDQUFvRTs7SUFFcEUsd0NBQTRFOztJQUU1RSw0Q0FBaUY7Ozs7O0lBS2pGLDJDQVdDOzs7OztJQW5DVyx3Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlbGVjdGlvbk1vZGVsfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VHJlZUZsYXREYXRhU291cmNlLCBNYXRUcmVlRmxhdHRlbmVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBOb2RlIGZvciB0by1kbyBpdGVtXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2RvSXRlbU5vZGUge1xuICBjaGlsZHJlbjogVG9kb0l0ZW1Ob2RlW107XG4gIGl0ZW06IHN0cmluZztcbn1cblxuLyoqIEZsYXQgdG8tZG8gaXRlbSBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBUb2RvSXRlbUZsYXROb2RlIHtcbiAgaXRlbTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBleHBhbmRhYmxlOiBib29sZWFuO1xufVxuXG4vKipcbiAqIFRoZSBKc29uIG9iamVjdCBmb3IgdG8tZG8gbGlzdCBkYXRhLlxuICovXG5jb25zdCBUUkVFX0RBVEEgPSB7XG4gIEdyb2Nlcmllczoge1xuICAgICdBbG1vbmQgTWVhbCBmbG91cic6IG51bGwsXG4gICAgJ09yZ2FuaWMgZWdncyc6IG51bGwsXG4gICAgJ1Byb3RlaW4gUG93ZGVyJzogbnVsbCxcbiAgICBGcnVpdHM6IHtcbiAgICAgIEFwcGxlOiBudWxsLFxuICAgICAgQmVycmllczogWydCbHVlYmVycnknLCAnUmFzcGJlcnJ5J10sXG4gICAgICBPcmFuZ2U6IG51bGxcbiAgICB9XG4gIH0sXG4gIFJlbWluZGVyczogW1xuICAgICdDb29rIGRpbm5lcicsXG4gICAgJ1JlYWQgdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjJyxcbiAgICAnVXBncmFkZSBBcHBsaWNhdGlvbiB0byBBbmd1bGFyJ1xuICBdXG59O1xuXG4vKipcbiAqIENoZWNrbGlzdCBkYXRhYmFzZSwgaXQgY2FuIGJ1aWxkIGEgdHJlZSBzdHJ1Y3R1cmVkIEpzb24gb2JqZWN0LlxuICogRWFjaCBub2RlIGluIEpzb24gb2JqZWN0IHJlcHJlc2VudHMgYSB0by1kbyBpdGVtIG9yIGEgY2F0ZWdvcnkuXG4gKiBJZiBhIG5vZGUgaXMgYSBjYXRlZ29yeSwgaXQgaGFzIGNoaWxkcmVuIGl0ZW1zIGFuZCBuZXcgaXRlbXMgY2FuIGJlIGFkZGVkIHVuZGVyIHRoZSBjYXRlZ29yeS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoZWNrbGlzdERhdGFiYXNlIHtcbiAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VG9kb0l0ZW1Ob2RlW10+KFtdKTtcblxuICBnZXQgZGF0YSgpOiBUb2RvSXRlbU5vZGVbXSB7IHJldHVybiB0aGlzLmRhdGFDaGFuZ2UudmFsdWU7IH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgLy8gQnVpbGQgdGhlIHRyZWUgbm9kZXMgZnJvbSBKc29uIG9iamVjdC4gVGhlIHJlc3VsdCBpcyBhIGxpc3Qgb2YgYFRvZG9JdGVtTm9kZWAgd2l0aCBuZXN0ZWRcbiAgICAvLyAgICAgZmlsZSBub2RlIGFzIGNoaWxkcmVuLlxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmJ1aWxkRmlsZVRyZWUoVFJFRV9EQVRBLCAwKTtcblxuICAgIC8vIE5vdGlmeSB0aGUgY2hhbmdlLlxuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBmaWxlIHN0cnVjdHVyZSB0cmVlLiBUaGUgYHZhbHVlYCBpcyB0aGUgSnNvbiBvYmplY3QsIG9yIGEgc3ViLXRyZWUgb2YgYSBKc29uIG9iamVjdC5cbiAgICogVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgbGlzdCBvZiBgVG9kb0l0ZW1Ob2RlYC5cbiAgICovXG4gIGJ1aWxkRmlsZVRyZWUob2JqOiB7W2tleTogc3RyaW5nXTogYW55fSwgbGV2ZWw6IG51bWJlcik6IFRvZG9JdGVtTm9kZVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2U8VG9kb0l0ZW1Ob2RlW10+KChhY2N1bXVsYXRvciwga2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgY29uc3Qgbm9kZSA9IG5ldyBUb2RvSXRlbU5vZGUoKTtcbiAgICAgIG5vZGUuaXRlbSA9IGtleTtcblxuICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBub2RlLmNoaWxkcmVuID0gdGhpcy5idWlsZEZpbGVUcmVlKHZhbHVlLCBsZXZlbCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUuaXRlbSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2N1bXVsYXRvci5jb25jYXQobm9kZSk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgLyoqIEFkZCBhbiBpdGVtIHRvIHRvLWRvIGxpc3QgKi9cbiAgaW5zZXJ0SXRlbShwYXJlbnQ6IFRvZG9JdGVtTm9kZSwgbmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHBhcmVudC5jaGlsZHJlbikge1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2goe2l0ZW06IG5hbWV9IGFzIFRvZG9JdGVtTm9kZSk7XG4gICAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUl0ZW0obm9kZTogVG9kb0l0ZW1Ob2RlLCBuYW1lOiBzdHJpbmcpIHtcbiAgICBub2RlLml0ZW0gPSBuYW1lO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIGNoZWNrYm94ZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1jaGVja2xpc3QtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1jaGVja2xpc3QtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RyZWUtY2hlY2tsaXN0LWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW0NoZWNrbGlzdERhdGFiYXNlXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlQ2hlY2tsaXN0RXhhbXBsZSB7XG4gIC8qKiBNYXAgZnJvbSBmbGF0IG5vZGUgdG8gbmVzdGVkIG5vZGUuIFRoaXMgaGVscHMgdXMgZmluZGluZyB0aGUgbmVzdGVkIG5vZGUgdG8gYmUgbW9kaWZpZWQgKi9cbiAgZmxhdE5vZGVNYXAgPSBuZXcgTWFwPFRvZG9JdGVtRmxhdE5vZGUsIFRvZG9JdGVtTm9kZT4oKTtcblxuICAvKiogTWFwIGZyb20gbmVzdGVkIG5vZGUgdG8gZmxhdHRlbmVkIG5vZGUuIFRoaXMgaGVscHMgdXMgdG8ga2VlcCB0aGUgc2FtZSBvYmplY3QgZm9yIHNlbGVjdGlvbiAqL1xuICBuZXN0ZWROb2RlTWFwID0gbmV3IE1hcDxUb2RvSXRlbU5vZGUsIFRvZG9JdGVtRmxhdE5vZGU+KCk7XG5cbiAgLyoqIEEgc2VsZWN0ZWQgcGFyZW50IG5vZGUgdG8gYmUgaW5zZXJ0ZWQgKi9cbiAgc2VsZWN0ZWRQYXJlbnQ6IFRvZG9JdGVtRmxhdE5vZGUgfCBudWxsID0gbnVsbDtcblxuICAvKiogVGhlIG5ldyBpdGVtJ3MgbmFtZSAqL1xuICBuZXdJdGVtTmFtZSA9ICcnO1xuXG4gIHRyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8VG9kb0l0ZW1GbGF0Tm9kZT47XG5cbiAgdHJlZUZsYXR0ZW5lcjogTWF0VHJlZUZsYXR0ZW5lcjxUb2RvSXRlbU5vZGUsIFRvZG9JdGVtRmxhdE5vZGU+O1xuXG4gIGRhdGFTb3VyY2U6IE1hdFRyZWVGbGF0RGF0YVNvdXJjZTxUb2RvSXRlbU5vZGUsIFRvZG9JdGVtRmxhdE5vZGU+O1xuXG4gIC8qKiBUaGUgc2VsZWN0aW9uIGZvciBjaGVja2xpc3QgKi9cbiAgY2hlY2tsaXN0U2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsPFRvZG9JdGVtRmxhdE5vZGU+KHRydWUgLyogbXVsdGlwbGUgKi8pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YWJhc2U6IENoZWNrbGlzdERhdGFiYXNlKSB7XG4gICAgdGhpcy50cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIodGhpcy50cmFuc2Zvcm1lciwgdGhpcy5nZXRMZXZlbCxcbiAgICAgIHRoaXMuaXNFeHBhbmRhYmxlLCB0aGlzLmdldENoaWxkcmVuKTtcbiAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxUb2RvSXRlbUZsYXROb2RlPih0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRyZWVGbGF0RGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCB0aGlzLnRyZWVGbGF0dGVuZXIpO1xuXG4gICAgZGF0YWJhc2UuZGF0YUNoYW5nZS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBnZXRMZXZlbCA9IChub2RlOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgZ2V0Q2hpbGRyZW4gPSAobm9kZTogVG9kb0l0ZW1Ob2RlKTogVG9kb0l0ZW1Ob2RlW10gPT4gbm9kZS5jaGlsZHJlbjtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gX25vZGVEYXRhLmV4cGFuZGFibGU7XG5cbiAgaGFzTm9Db250ZW50ID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBfbm9kZURhdGEuaXRlbSA9PT0gJyc7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybWVyIHRvIGNvbnZlcnQgbmVzdGVkIG5vZGUgdG8gZmxhdCBub2RlLiBSZWNvcmQgdGhlIG5vZGVzIGluIG1hcHMgZm9yIGxhdGVyIHVzZS5cbiAgICovXG4gIHRyYW5zZm9ybWVyID0gKG5vZGU6IFRvZG9JdGVtTm9kZSwgbGV2ZWw6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IHRoaXMubmVzdGVkTm9kZU1hcC5nZXQobm9kZSk7XG4gICAgY29uc3QgZmxhdE5vZGUgPSBleGlzdGluZ05vZGUgJiYgZXhpc3RpbmdOb2RlLml0ZW0gPT09IG5vZGUuaXRlbVxuICAgICAgICA/IGV4aXN0aW5nTm9kZVxuICAgICAgICA6IG5ldyBUb2RvSXRlbUZsYXROb2RlKCk7XG4gICAgZmxhdE5vZGUuaXRlbSA9IG5vZGUuaXRlbTtcbiAgICBmbGF0Tm9kZS5sZXZlbCA9IGxldmVsO1xuICAgIGZsYXROb2RlLmV4cGFuZGFibGUgPSAhIW5vZGUuY2hpbGRyZW47XG4gICAgdGhpcy5mbGF0Tm9kZU1hcC5zZXQoZmxhdE5vZGUsIG5vZGUpO1xuICAgIHRoaXMubmVzdGVkTm9kZU1hcC5zZXQobm9kZSwgZmxhdE5vZGUpO1xuICAgIHJldHVybiBmbGF0Tm9kZTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIGFsbCB0aGUgZGVzY2VuZGFudHMgb2YgdGhlIG5vZGUgYXJlIHNlbGVjdGVkLiAqL1xuICBkZXNjZW5kYW50c0FsbFNlbGVjdGVkKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiBib29sZWFuIHtcbiAgICBjb25zdCBkZXNjZW5kYW50cyA9IHRoaXMudHJlZUNvbnRyb2wuZ2V0RGVzY2VuZGFudHMobm9kZSk7XG4gICAgY29uc3QgZGVzY0FsbFNlbGVjdGVkID0gZGVzY2VuZGFudHMuZXZlcnkoY2hpbGQgPT5cbiAgICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQoY2hpbGQpXG4gICAgKTtcbiAgICByZXR1cm4gZGVzY0FsbFNlbGVjdGVkO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgcGFydCBvZiB0aGUgZGVzY2VuZGFudHMgYXJlIHNlbGVjdGVkICovXG4gIGRlc2NlbmRhbnRzUGFydGlhbGx5U2VsZWN0ZWQobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICBjb25zdCByZXN1bHQgPSBkZXNjZW5kYW50cy5zb21lKGNoaWxkID0+IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQoY2hpbGQpKTtcbiAgICByZXR1cm4gcmVzdWx0ICYmICF0aGlzLmRlc2NlbmRhbnRzQWxsU2VsZWN0ZWQobm9kZSk7XG4gIH1cblxuICAvKiogVG9nZ2xlIHRoZSB0by1kbyBpdGVtIHNlbGVjdGlvbi4gU2VsZWN0L2Rlc2VsZWN0IGFsbCB0aGUgZGVzY2VuZGFudHMgbm9kZSAqL1xuICB0b2RvSXRlbVNlbGVjdGlvblRvZ2dsZShub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24udG9nZ2xlKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKG5vZGUpXG4gICAgICA/IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLnNlbGVjdCguLi5kZXNjZW5kYW50cylcbiAgICAgIDogdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uZGVzZWxlY3QoLi4uZGVzY2VuZGFudHMpO1xuXG4gICAgLy8gRm9yY2UgdXBkYXRlIGZvciB0aGUgcGFyZW50XG4gICAgZGVzY2VuZGFudHMuZXZlcnkoY2hpbGQgPT5cbiAgICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQoY2hpbGQpXG4gICAgKTtcbiAgICB0aGlzLmNoZWNrQWxsUGFyZW50c1NlbGVjdGlvbihub2RlKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGUgYSBsZWFmIHRvLWRvIGl0ZW0gc2VsZWN0aW9uLiBDaGVjayBhbGwgdGhlIHBhcmVudHMgdG8gc2VlIGlmIHRoZXkgY2hhbmdlZCAqL1xuICB0b2RvTGVhZkl0ZW1TZWxlY3Rpb25Ub2dnbGUobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLnRvZ2dsZShub2RlKTtcbiAgICB0aGlzLmNoZWNrQWxsUGFyZW50c1NlbGVjdGlvbihub2RlKTtcbiAgfVxuXG4gIC8qIENoZWNrcyBhbGwgdGhlIHBhcmVudHMgd2hlbiBhIGxlYWYgbm9kZSBpcyBzZWxlY3RlZC91bnNlbGVjdGVkICovXG4gIGNoZWNrQWxsUGFyZW50c1NlbGVjdGlvbihub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgbGV0IHBhcmVudDogVG9kb0l0ZW1GbGF0Tm9kZSB8IG51bGwgPSB0aGlzLmdldFBhcmVudE5vZGUobm9kZSk7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgdGhpcy5jaGVja1Jvb3ROb2RlU2VsZWN0aW9uKHBhcmVudCk7XG4gICAgICBwYXJlbnQgPSB0aGlzLmdldFBhcmVudE5vZGUocGFyZW50KTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2hlY2sgcm9vdCBub2RlIGNoZWNrZWQgc3RhdGUgYW5kIGNoYW5nZSBpdCBhY2NvcmRpbmdseSAqL1xuICBjaGVja1Jvb3ROb2RlU2VsZWN0aW9uKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlU2VsZWN0ZWQgPSB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICBjb25zdCBkZXNjQWxsU2VsZWN0ZWQgPSBkZXNjZW5kYW50cy5ldmVyeShjaGlsZCA9PlxuICAgICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZClcbiAgICApO1xuICAgIGlmIChub2RlU2VsZWN0ZWQgJiYgIWRlc2NBbGxTZWxlY3RlZCkge1xuICAgICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uZGVzZWxlY3Qobm9kZSk7XG4gICAgfSBlbHNlIGlmICghbm9kZVNlbGVjdGVkICYmIGRlc2NBbGxTZWxlY3RlZCkge1xuICAgICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uc2VsZWN0KG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qIEdldCB0aGUgcGFyZW50IG5vZGUgb2YgYSBub2RlICovXG4gIGdldFBhcmVudE5vZGUobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IFRvZG9JdGVtRmxhdE5vZGUgfCBudWxsIHtcbiAgICBjb25zdCBjdXJyZW50TGV2ZWwgPSB0aGlzLmdldExldmVsKG5vZGUpO1xuXG4gICAgaWYgKGN1cnJlbnRMZXZlbCA8IDEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2Rlcy5pbmRleE9mKG5vZGUpIC0gMTtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2Rlc1tpXTtcblxuICAgICAgaWYgKHRoaXMuZ2V0TGV2ZWwoY3VycmVudE5vZGUpIDwgY3VycmVudExldmVsKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogU2VsZWN0IHRoZSBjYXRlZ29yeSBzbyB3ZSBjYW4gaW5zZXJ0IHRoZSBuZXcgaXRlbS4gKi9cbiAgYWRkTmV3SXRlbShub2RlOiBUb2RvSXRlbUZsYXROb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuZmxhdE5vZGVNYXAuZ2V0KG5vZGUpO1xuICAgIHRoaXMuZGF0YWJhc2UuaW5zZXJ0SXRlbShwYXJlbnROb2RlISwgJycpO1xuICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kKG5vZGUpO1xuICB9XG5cbiAgLyoqIFNhdmUgdGhlIG5vZGUgdG8gZGF0YWJhc2UgKi9cbiAgc2F2ZU5vZGUobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSwgaXRlbVZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXN0ZWROb2RlID0gdGhpcy5mbGF0Tm9kZU1hcC5nZXQobm9kZSk7XG4gICAgdGhpcy5kYXRhYmFzZS51cGRhdGVJdGVtKG5lc3RlZE5vZGUhLCBpdGVtVmFsdWUpO1xuICB9XG59XG4iXX0=