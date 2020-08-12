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
    i0.ɵɵattribute("aria-label", "Toggle " + node_r10.item);
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
/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
}
/**
 * The Json object for to-do list data.
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
    get data() { return this.dataChange.value; }
    initialize() {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        const data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((accumulator, key) => {
            const value = obj[key];
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
        }, []);
    }
    /** Add an item to to-do list */
    insertItem(parent, name) {
        if (parent.children) {
            parent.children.push({ item: name });
            this.dataChange.next(this.data);
        }
    }
    updateItem(node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    }
}
ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) { return new (t || ChecklistDatabase)(); };
ChecklistDatabase.ɵprov = i0.ɵɵdefineInjectable({ token: ChecklistDatabase, factory: ChecklistDatabase.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChecklistDatabase, [{
        type: Injectable
    }], function () { return []; }, null); })();
/**
 * @title Tree with checkboxes
 */
export class TreeChecklistExample {
    constructor(_database) {
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
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.getChildren = (node) => node.children;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.hasNoContent = (_, _nodeData) => _nodeData.item === '';
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = (node, level) => {
            var _a;
            const existingNode = this.nestedNodeMap.get(node);
            const flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!((_a = node.children) === null || _a === void 0 ? void 0 : _a.length);
            this.flatNodeMap.set(flatNode, node);
            this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        _database.dataChange.subscribe(data => {
            this.dataSource.data = data;
        });
    }
    /** Whether all the descendants of the node are selected. */
    descendantsAllSelected(node) {
        const descendants = this.treeControl.getDescendants(node);
        const descAllSelected = descendants.length > 0 && descendants.every(child => {
            return this.checklistSelection.isSelected(child);
        });
        return descAllSelected;
    }
    /** Whether part of the descendants are selected */
    descendantsPartiallySelected(node) {
        const descendants = this.treeControl.getDescendants(node);
        const result = descendants.some(child => this.checklistSelection.isSelected(child));
        return result && !this.descendantsAllSelected(node);
    }
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    todoItemSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        const descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? this.checklistSelection.select(...descendants)
            : this.checklistSelection.deselect(...descendants);
        // Force update for the parent
        descendants.forEach(child => this.checklistSelection.isSelected(child));
        this.checkAllParentsSelection(node);
    }
    /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
    todoLeafItemSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
    }
    /* Checks all the parents when a leaf node is selected/unselected */
    checkAllParentsSelection(node) {
        let parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    }
    /** Check root node checked state and change it accordingly */
    checkRootNodeSelection(node) {
        const nodeSelected = this.checklistSelection.isSelected(node);
        const descendants = this.treeControl.getDescendants(node);
        const descAllSelected = descendants.length > 0 && descendants.every(child => {
            return this.checklistSelection.isSelected(child);
        });
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    }
    /* Get the parent node of a node */
    getParentNode(node) {
        const currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i--) {
            const currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
    /** Select the category so we can insert the new item. */
    addNewItem(node) {
        const parentNode = this.flatNodeMap.get(node);
        this._database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    }
    /** Save the node to database */
    saveNode(node, itemValue) {
        const nestedNode = this.flatNodeMap.get(node);
        this._database.updateItem(nestedNode, itemValue);
    }
}
TreeChecklistExample.ɵfac = function TreeChecklistExample_Factory(t) { return new (t || TreeChecklistExample)(i0.ɵɵdirectiveInject(ChecklistDatabase)); };
TreeChecklistExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeChecklistExample, selectors: [["tree-checklist-example"]], features: [i0.ɵɵProvidersFeature([ChecklistDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["matInput", "", "placeholder", "Ex. Lettuce"], ["itemValue", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["mat-icon-button", "", 3, "click"]], template: function TreeChecklistExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeChecklistExample, [{
        type: Component,
        args: [{
                selector: 'tree-checklist-example',
                templateUrl: 'tree-checklist-example.html',
                styleUrls: ['tree-checklist-example.css'],
                providers: [ChecklistDatabase]
            }]
    }], function () { return [{ type: ChecklistDatabase }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jaGVja2xpc3QtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7OztJQ0huQyx3Q0FDRTtJQUFBLDRCQUEwQztJQUMxQyx1Q0FFMkQ7SUFBN0MsaVFBQTRDO0lBQUMsWUFBYTtJQUFBLGlCQUFlO0lBQ3pGLGlCQUFnQjs7OztJQUZBLGVBQStDO0lBQS9DLHVFQUErQztJQUNGLGVBQWE7SUFBYixrQ0FBYTs7OztJQUcxRSx3Q0FDRTtJQUFBLDRCQUEwQztJQUMxQyxzQ0FDRTtJQUFBLGlDQUFXO0lBQUEsMkJBQVc7SUFBQSxpQkFBWTtJQUNsQyw4QkFDRjtJQUFBLGlCQUFpQjtJQUNqQixpQ0FBNkQ7SUFBMUMsZ1JBQXlDO0lBQUMsb0JBQUk7SUFBQSxpQkFBUztJQUM1RSxpQkFBZ0I7Ozs7SUFFaEIsd0NBQ0U7SUFBQSxrQ0FFRTtJQUFBLG9DQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFX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QUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFnQztJQUNoQyxRQUFRLENBQUMsSUFBc0IsRUFBRSxTQUFpQjtRQUNoRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7d0ZBcEpVLG9CQUFvQix1QkFzQkEsaUJBQWlCO3lEQXRCckMsb0JBQW9CLDRFQUZwQixDQUFDLGlCQUFpQixDQUFDO1FDN0doQyxtQ0FDRTtRQUFBLHlGQUNFO1FBTUYseUZBQ0U7UUFRRix5RkFDRTtRQVdKLGlCQUFXOztRQTdCRCwyQ0FBeUIsZ0NBQUE7UUFRbEIsZUFBOEM7UUFBOUMscURBQThDO1FBUzlDLGVBQTBDO1FBQTFDLGlEQUEwQzs7a0REOEY5QyxvQkFBb0I7Y0FOaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUMvQjtzQ0F1QmdDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlRmxhdERhdGFTb3VyY2UsIE1hdFRyZWVGbGF0dGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIE5vZGUgZm9yIHRvLWRvIGl0ZW1cbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9JdGVtTm9kZSB7XG4gIGNoaWxkcmVuOiBUb2RvSXRlbU5vZGVbXTtcbiAgaXRlbTogc3RyaW5nO1xufVxuXG4vKiogRmxhdCB0by1kbyBpdGVtIG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9JdGVtRmxhdE5vZGUge1xuICBpdGVtOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG4gIGV4cGFuZGFibGU6IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhlIEpzb24gb2JqZWN0IGZvciB0by1kbyBsaXN0IGRhdGEuXG4gKi9cbmNvbnN0IFRSRUVfREFUQSA9IHtcbiAgR3JvY2VyaWVzOiB7XG4gICAgJ0FsbW9uZCBNZWFsIGZsb3VyJzogbnVsbCxcbiAgICAnT3JnYW5pYyBlZ2dzJzogbnVsbCxcbiAgICAnUHJvdGVpbiBQb3dkZXInOiBudWxsLFxuICAgIEZydWl0czoge1xuICAgICAgQXBwbGU6IG51bGwsXG4gICAgICBCZXJyaWVzOiBbJ0JsdWViZXJyeScsICdSYXNwYmVycnknXSxcbiAgICAgIE9yYW5nZTogbnVsbFxuICAgIH1cbiAgfSxcbiAgUmVtaW5kZXJzOiBbXG4gICAgJ0Nvb2sgZGlubmVyJyxcbiAgICAnUmVhZCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMnLFxuICAgICdVcGdyYWRlIEFwcGxpY2F0aW9uIHRvIEFuZ3VsYXInXG4gIF1cbn07XG5cbi8qKlxuICogQ2hlY2tsaXN0IGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIHRvLWRvIGl0ZW0gb3IgYSBjYXRlZ29yeS5cbiAqIElmIGEgbm9kZSBpcyBhIGNhdGVnb3J5LCBpdCBoYXMgY2hpbGRyZW4gaXRlbXMgYW5kIG5ldyBpdGVtcyBjYW4gYmUgYWRkZWQgdW5kZXIgdGhlIGNhdGVnb3J5LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hlY2tsaXN0RGF0YWJhc2Uge1xuICBkYXRhQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUb2RvSXRlbU5vZGVbXT4oW10pO1xuXG4gIGdldCBkYXRhKCk6IFRvZG9JdGVtTm9kZVtdIHsgcmV0dXJuIHRoaXMuZGF0YUNoYW5nZS52YWx1ZTsgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBCdWlsZCB0aGUgdHJlZSBub2RlcyBmcm9tIEpzb24gb2JqZWN0LiBUaGUgcmVzdWx0IGlzIGEgbGlzdCBvZiBgVG9kb0l0ZW1Ob2RlYCB3aXRoIG5lc3RlZFxuICAgIC8vICAgICBmaWxlIG5vZGUgYXMgY2hpbGRyZW4uXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuYnVpbGRGaWxlVHJlZShUUkVFX0RBVEEsIDApO1xuXG4gICAgLy8gTm90aWZ5IHRoZSBjaGFuZ2UuXG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIGZpbGUgc3RydWN0dXJlIHRyZWUuIFRoZSBgdmFsdWVgIGlzIHRoZSBKc29uIG9iamVjdCwgb3IgYSBzdWItdHJlZSBvZiBhIEpzb24gb2JqZWN0LlxuICAgKiBUaGUgcmV0dXJuIHZhbHVlIGlzIHRoZSBsaXN0IG9mIGBUb2RvSXRlbU5vZGVgLlxuICAgKi9cbiAgYnVpbGRGaWxlVHJlZShvYmo6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBsZXZlbDogbnVtYmVyKTogVG9kb0l0ZW1Ob2RlW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZTxUb2RvSXRlbU5vZGVbXT4oKGFjY3VtdWxhdG9yLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICBjb25zdCBub2RlID0gbmV3IFRvZG9JdGVtTm9kZSgpO1xuICAgICAgbm9kZS5pdGVtID0ga2V5O1xuXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSB0aGlzLmJ1aWxkRmlsZVRyZWUodmFsdWUsIGxldmVsICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5pdGVtID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yLmNvbmNhdChub2RlKTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICAvKiogQWRkIGFuIGl0ZW0gdG8gdG8tZG8gbGlzdCAqL1xuICBpbnNlcnRJdGVtKHBhcmVudDogVG9kb0l0ZW1Ob2RlLCBuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAocGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh7aXRlbTogbmFtZX0gYXMgVG9kb0l0ZW1Ob2RlKTtcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSXRlbShub2RlOiBUb2RvSXRlbU5vZGUsIG5hbWU6IHN0cmluZykge1xuICAgIG5vZGUuaXRlbSA9IG5hbWU7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggY2hlY2tib3hlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWNoZWNrbGlzdC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWNoZWNrbGlzdC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1jaGVja2xpc3QtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbQ2hlY2tsaXN0RGF0YWJhc2VdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVDaGVja2xpc3RFeGFtcGxlIHtcbiAgLyoqIE1hcCBmcm9tIGZsYXQgbm9kZSB0byBuZXN0ZWQgbm9kZS4gVGhpcyBoZWxwcyB1cyBmaW5kaW5nIHRoZSBuZXN0ZWQgbm9kZSB0byBiZSBtb2RpZmllZCAqL1xuICBmbGF0Tm9kZU1hcCA9IG5ldyBNYXA8VG9kb0l0ZW1GbGF0Tm9kZSwgVG9kb0l0ZW1Ob2RlPigpO1xuXG4gIC8qKiBNYXAgZnJvbSBuZXN0ZWQgbm9kZSB0byBmbGF0dGVuZWQgbm9kZS4gVGhpcyBoZWxwcyB1cyB0byBrZWVwIHRoZSBzYW1lIG9iamVjdCBmb3Igc2VsZWN0aW9uICovXG4gIG5lc3RlZE5vZGVNYXAgPSBuZXcgTWFwPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT4oKTtcblxuICAvKiogQSBzZWxlY3RlZCBwYXJlbnQgbm9kZSB0byBiZSBpbnNlcnRlZCAqL1xuICBzZWxlY3RlZFBhcmVudDogVG9kb0l0ZW1GbGF0Tm9kZSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBUaGUgbmV3IGl0ZW0ncyBuYW1lICovXG4gIG5ld0l0ZW1OYW1lID0gJyc7XG5cbiAgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxUb2RvSXRlbUZsYXROb2RlPjtcblxuICB0cmVlRmxhdHRlbmVyOiBNYXRUcmVlRmxhdHRlbmVyPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT47XG5cbiAgZGF0YVNvdXJjZTogTWF0VHJlZUZsYXREYXRhU291cmNlPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT47XG5cbiAgLyoqIFRoZSBzZWxlY3Rpb24gZm9yIGNoZWNrbGlzdCAqL1xuICBjaGVja2xpc3RTZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8VG9kb0l0ZW1GbGF0Tm9kZT4odHJ1ZSAvKiBtdWx0aXBsZSAqLyk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YWJhc2U6IENoZWNrbGlzdERhdGFiYXNlKSB7XG4gICAgdGhpcy50cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIodGhpcy50cmFuc2Zvcm1lciwgdGhpcy5nZXRMZXZlbCxcbiAgICAgIHRoaXMuaXNFeHBhbmRhYmxlLCB0aGlzLmdldENoaWxkcmVuKTtcbiAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxUb2RvSXRlbUZsYXROb2RlPih0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRyZWVGbGF0RGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCB0aGlzLnRyZWVGbGF0dGVuZXIpO1xuXG4gICAgX2RhdGFiYXNlLmRhdGFDaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGV2ZWwgPSAobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gbm9kZS5sZXZlbDtcblxuICBpc0V4cGFuZGFibGUgPSAobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGdldENoaWxkcmVuID0gKG5vZGU6IFRvZG9JdGVtTm9kZSk6IFRvZG9JdGVtTm9kZVtdID0+IG5vZGUuY2hpbGRyZW47XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IFRvZG9JdGVtRmxhdE5vZGUpID0+IF9ub2RlRGF0YS5leHBhbmRhYmxlO1xuXG4gIGhhc05vQ29udGVudCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gX25vZGVEYXRhLml0ZW0gPT09ICcnO1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1lciB0byBjb252ZXJ0IG5lc3RlZCBub2RlIHRvIGZsYXQgbm9kZS4gUmVjb3JkIHRoZSBub2RlcyBpbiBtYXBzIGZvciBsYXRlciB1c2UuXG4gICAqL1xuICB0cmFuc2Zvcm1lciA9IChub2RlOiBUb2RvSXRlbU5vZGUsIGxldmVsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBleGlzdGluZ05vZGUgPSB0aGlzLm5lc3RlZE5vZGVNYXAuZ2V0KG5vZGUpO1xuICAgIGNvbnN0IGZsYXROb2RlID0gZXhpc3RpbmdOb2RlICYmIGV4aXN0aW5nTm9kZS5pdGVtID09PSBub2RlLml0ZW1cbiAgICAgICAgPyBleGlzdGluZ05vZGVcbiAgICAgICAgOiBuZXcgVG9kb0l0ZW1GbGF0Tm9kZSgpO1xuICAgIGZsYXROb2RlLml0ZW0gPSBub2RlLml0ZW07XG4gICAgZmxhdE5vZGUubGV2ZWwgPSBsZXZlbDtcbiAgICBmbGF0Tm9kZS5leHBhbmRhYmxlID0gISFub2RlLmNoaWxkcmVuPy5sZW5ndGg7XG4gICAgdGhpcy5mbGF0Tm9kZU1hcC5zZXQoZmxhdE5vZGUsIG5vZGUpO1xuICAgIHRoaXMubmVzdGVkTm9kZU1hcC5zZXQobm9kZSwgZmxhdE5vZGUpO1xuICAgIHJldHVybiBmbGF0Tm9kZTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIGFsbCB0aGUgZGVzY2VuZGFudHMgb2YgdGhlIG5vZGUgYXJlIHNlbGVjdGVkLiAqL1xuICBkZXNjZW5kYW50c0FsbFNlbGVjdGVkKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiBib29sZWFuIHtcbiAgICBjb25zdCBkZXNjZW5kYW50cyA9IHRoaXMudHJlZUNvbnRyb2wuZ2V0RGVzY2VuZGFudHMobm9kZSk7XG4gICAgY29uc3QgZGVzY0FsbFNlbGVjdGVkID0gZGVzY2VuZGFudHMubGVuZ3RoID4gMCAmJiBkZXNjZW5kYW50cy5ldmVyeShjaGlsZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc2NBbGxTZWxlY3RlZDtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHBhcnQgb2YgdGhlIGRlc2NlbmRhbnRzIGFyZSBzZWxlY3RlZCAqL1xuICBkZXNjZW5kYW50c1BhcnRpYWxseVNlbGVjdGVkKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiBib29sZWFuIHtcbiAgICBjb25zdCBkZXNjZW5kYW50cyA9IHRoaXMudHJlZUNvbnRyb2wuZ2V0RGVzY2VuZGFudHMobm9kZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gZGVzY2VuZGFudHMuc29tZShjaGlsZCA9PiB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKGNoaWxkKSk7XG4gICAgcmV0dXJuIHJlc3VsdCAmJiAhdGhpcy5kZXNjZW5kYW50c0FsbFNlbGVjdGVkKG5vZGUpO1xuICB9XG5cbiAgLyoqIFRvZ2dsZSB0aGUgdG8tZG8gaXRlbSBzZWxlY3Rpb24uIFNlbGVjdC9kZXNlbGVjdCBhbGwgdGhlIGRlc2NlbmRhbnRzIG5vZGUgKi9cbiAgdG9kb0l0ZW1TZWxlY3Rpb25Ub2dnbGUobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLnRvZ2dsZShub2RlKTtcbiAgICBjb25zdCBkZXNjZW5kYW50cyA9IHRoaXMudHJlZUNvbnRyb2wuZ2V0RGVzY2VuZGFudHMobm9kZSk7XG4gICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChub2RlKVxuICAgICAgPyB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5zZWxlY3QoLi4uZGVzY2VuZGFudHMpXG4gICAgICA6IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmRlc2VsZWN0KC4uLmRlc2NlbmRhbnRzKTtcblxuICAgIC8vIEZvcmNlIHVwZGF0ZSBmb3IgdGhlIHBhcmVudFxuICAgIGRlc2NlbmRhbnRzLmZvckVhY2goY2hpbGQgPT4gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZCkpO1xuICAgIHRoaXMuY2hlY2tBbGxQYXJlbnRzU2VsZWN0aW9uKG5vZGUpO1xuICB9XG5cbiAgLyoqIFRvZ2dsZSBhIGxlYWYgdG8tZG8gaXRlbSBzZWxlY3Rpb24uIENoZWNrIGFsbCB0aGUgcGFyZW50cyB0byBzZWUgaWYgdGhleSBjaGFuZ2VkICovXG4gIHRvZG9MZWFmSXRlbVNlbGVjdGlvblRvZ2dsZShub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24udG9nZ2xlKG5vZGUpO1xuICAgIHRoaXMuY2hlY2tBbGxQYXJlbnRzU2VsZWN0aW9uKG5vZGUpO1xuICB9XG5cbiAgLyogQ2hlY2tzIGFsbCB0aGUgcGFyZW50cyB3aGVuIGEgbGVhZiBub2RlIGlzIHNlbGVjdGVkL3Vuc2VsZWN0ZWQgKi9cbiAgY2hlY2tBbGxQYXJlbnRzU2VsZWN0aW9uKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICBsZXQgcGFyZW50OiBUb2RvSXRlbUZsYXROb2RlIHwgbnVsbCA9IHRoaXMuZ2V0UGFyZW50Tm9kZShub2RlKTtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICB0aGlzLmNoZWNrUm9vdE5vZGVTZWxlY3Rpb24ocGFyZW50KTtcbiAgICAgIHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50Tm9kZShwYXJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDaGVjayByb290IG5vZGUgY2hlY2tlZCBzdGF0ZSBhbmQgY2hhbmdlIGl0IGFjY29yZGluZ2x5ICovXG4gIGNoZWNrUm9vdE5vZGVTZWxlY3Rpb24obm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGVTZWxlY3RlZCA9IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQobm9kZSk7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NBbGxTZWxlY3RlZCA9IGRlc2NlbmRhbnRzLmxlbmd0aCA+IDAgJiYgZGVzY2VuZGFudHMuZXZlcnkoY2hpbGQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQoY2hpbGQpO1xuICAgIH0pO1xuICAgIGlmIChub2RlU2VsZWN0ZWQgJiYgIWRlc2NBbGxTZWxlY3RlZCkge1xuICAgICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uZGVzZWxlY3Qobm9kZSk7XG4gICAgfSBlbHNlIGlmICghbm9kZVNlbGVjdGVkICYmIGRlc2NBbGxTZWxlY3RlZCkge1xuICAgICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uc2VsZWN0KG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qIEdldCB0aGUgcGFyZW50IG5vZGUgb2YgYSBub2RlICovXG4gIGdldFBhcmVudE5vZGUobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IFRvZG9JdGVtRmxhdE5vZGUgfCBudWxsIHtcbiAgICBjb25zdCBjdXJyZW50TGV2ZWwgPSB0aGlzLmdldExldmVsKG5vZGUpO1xuXG4gICAgaWYgKGN1cnJlbnRMZXZlbCA8IDEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2Rlcy5pbmRleE9mKG5vZGUpIC0gMTtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2Rlc1tpXTtcblxuICAgICAgaWYgKHRoaXMuZ2V0TGV2ZWwoY3VycmVudE5vZGUpIDwgY3VycmVudExldmVsKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogU2VsZWN0IHRoZSBjYXRlZ29yeSBzbyB3ZSBjYW4gaW5zZXJ0IHRoZSBuZXcgaXRlbS4gKi9cbiAgYWRkTmV3SXRlbShub2RlOiBUb2RvSXRlbUZsYXROb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuZmxhdE5vZGVNYXAuZ2V0KG5vZGUpO1xuICAgIHRoaXMuX2RhdGFiYXNlLmluc2VydEl0ZW0ocGFyZW50Tm9kZSEsICcnKTtcbiAgICB0aGlzLnRyZWVDb250cm9sLmV4cGFuZChub2RlKTtcbiAgfVxuXG4gIC8qKiBTYXZlIHRoZSBub2RlIHRvIGRhdGFiYXNlICovXG4gIHNhdmVOb2RlKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUsIGl0ZW1WYWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbmVzdGVkTm9kZSA9IHRoaXMuZmxhdE5vZGVNYXAuZ2V0KG5vZGUpO1xuICAgIHRoaXMuX2RhdGFiYXNlLnVwZGF0ZUl0ZW0obmVzdGVkTm9kZSEsIGl0ZW1WYWx1ZSk7XG4gIH1cbn1cbiIsIjxtYXQtdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVUb2dnbGUgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJjaGVja2xpc3QtbGVhZi1ub2RlXCJcbiAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwidG9kb0xlYWZJdGVtU2VsZWN0aW9uVG9nZ2xlKG5vZGUpXCI+e3tub2RlLml0ZW19fTwvbWF0LWNoZWNrYm94PlxuICA8L21hdC10cmVlLW5vZGU+XG5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc05vQ29udGVudFwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPk5ldyBpdGVtLi4uPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgI2l0ZW1WYWx1ZSBwbGFjZWhvbGRlcj1cIkV4LiBMZXR0dWNlXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInNhdmVOb2RlKG5vZGUsIGl0ZW1WYWx1ZS52YWx1ZSlcIj5TYXZlPC9idXR0b24+XG4gIDwvbWF0LXRyZWUtbm9kZT5cblxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VHJlZU5vZGVUb2dnbGVcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1RvZ2dsZSAnICsgbm9kZS5pdGVtXCI+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8bWF0LWNoZWNrYm94IFtjaGVja2VkXT1cImRlc2NlbmRhbnRzQWxsU2VsZWN0ZWQobm9kZSlcIlxuICAgICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiZGVzY2VuZGFudHNQYXJ0aWFsbHlTZWxlY3RlZChub2RlKVwiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInRvZG9JdGVtU2VsZWN0aW9uVG9nZ2xlKG5vZGUpXCI+e3tub2RlLml0ZW19fTwvbWF0LWNoZWNrYm94PlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJhZGROZXdJdGVtKG5vZGUpXCI+PG1hdC1pY29uPmFkZDwvbWF0LWljb24+PC9idXR0b24+XG4gIDwvbWF0LXRyZWUtbm9kZT5cbjwvbWF0LXRyZWU+XG4iXX0=