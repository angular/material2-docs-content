import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/tree";
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
            Orange: null,
        },
    },
    Reminders: ['Cook dinner', 'Read the Material Design spec', 'Upgrade Application to Angular'],
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
class ChecklistDatabase {
    get data() {
        return this.dataChange.value;
    }
    constructor() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
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
ChecklistDatabase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ChecklistDatabase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ChecklistDatabase.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ChecklistDatabase });
export { ChecklistDatabase };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ChecklistDatabase, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
/**
 * @title Tree with checkboxes
 */
class TreeChecklistExample {
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
            const existingNode = this.nestedNodeMap.get(node);
            const flatNode = existingNode && existingNode.item === node.item ? existingNode : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children?.length;
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
        const descAllSelected = descendants.length > 0 &&
            descendants.every(child => {
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
        const descAllSelected = descendants.length > 0 &&
            descendants.every(child => {
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
TreeChecklistExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: TreeChecklistExample, deps: [{ token: ChecklistDatabase }], target: i0.ɵɵFactoryTarget.Component });
TreeChecklistExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: TreeChecklistExample, selector: "tree-checklist-example", providers: [ChecklistDatabase], ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n                  [checked]=\"checklistSelection.isSelected(node)\"\n                  (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>New item...</mat-label>\n      <input matInput #itemValue placeholder=\"Ex. Lettuce\">\n    </mat-form-field>\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.item\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".mat-mdc-form-field {\n  margin-right: 4px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i6.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i6.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i6.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i6.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i6.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }] });
export { TreeChecklistExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: TreeChecklistExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-checklist-example', providers: [ChecklistDatabase], template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n                  [checked]=\"checklistSelection.isSelected(node)\"\n                  (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>New item...</mat-label>\n      <input matInput #itemValue placeholder=\"Ex. Lettuce\">\n    </mat-form-field>\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.item\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".mat-mdc-form-field {\n  margin-right: 4px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: ChecklistDatabase }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jaGVja2xpc3QtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7QUFFckM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sWUFBWTtDQUd4QjtBQUVELGlFQUFpRTtBQUNqRSxNQUFNLE9BQU8sZ0JBQWdCO0NBSTVCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFNBQVMsR0FBRztJQUNoQixTQUFTLEVBQUU7UUFDVCxtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCLGNBQWMsRUFBRSxJQUFJO1FBQ3BCLGdCQUFnQixFQUFFLElBQUk7UUFDdEIsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO1lBQ25DLE1BQU0sRUFBRSxJQUFJO1NBQ2I7S0FDRjtJQUNELFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0Ms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LElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsWUFBWSxFQUFFO2dCQUM3QyxPQUFPLFdBQVcsQ0FBQzthQUNwQjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQseURBQXlEO0lBQ3pELFVBQVUsQ0FBQyxJQUFzQjtRQUMvQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFnQztJQUNoQyxRQUFRLENBQUMsSUFBc0IsRUFBRSxTQUFpQjtRQUNoRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7d0hBM0pVLG9CQUFvQjs0R0FBcEIsb0JBQW9CLGlEQUZwQixDQUFDLGlCQUFpQixDQUFDLDBCQzNHaEMsMmdEQThCQTtTRCtFYSxvQkFBb0I7a0dBQXBCLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDRSx3QkFBd0IsYUFHdkIsQ0FBQyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlRmxhdERhdGFTb3VyY2UsIE1hdFRyZWVGbGF0dGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIE5vZGUgZm9yIHRvLWRvIGl0ZW1cbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9JdGVtTm9kZSB7XG4gIGNoaWxkcmVuOiBUb2RvSXRlbU5vZGVbXTtcbiAgaXRlbTogc3RyaW5nO1xufVxuXG4vKiogRmxhdCB0by1kbyBpdGVtIG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9JdGVtRmxhdE5vZGUge1xuICBpdGVtOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG4gIGV4cGFuZGFibGU6IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhlIEpzb24gb2JqZWN0IGZvciB0by1kbyBsaXN0IGRhdGEuXG4gKi9cbmNvbnN0IFRSRUVfREFUQSA9IHtcbiAgR3JvY2VyaWVzOiB7XG4gICAgJ0FsbW9uZCBNZWFsIGZsb3VyJzogbnVsbCxcbiAgICAnT3JnYW5pYyBlZ2dzJzogbnVsbCxcbiAgICAnUHJvdGVpbiBQb3dkZXInOiBudWxsLFxuICAgIEZydWl0czoge1xuICAgICAgQXBwbGU6IG51bGwsXG4gICAgICBCZXJyaWVzOiBbJ0JsdWViZXJyeScsICdSYXNwYmVycnknXSxcbiAgICAgIE9yYW5nZTogbnVsbCxcbiAgICB9LFxuICB9LFxuICBSZW1pbmRlcnM6IFsnQ29vayBkaW5uZXInLCAnUmVhZCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMnLCAnVXBncmFkZSBBcHBsaWNhdGlvbiB0byBBbmd1bGFyJ10sXG59O1xuXG4vKipcbiAqIENoZWNrbGlzdCBkYXRhYmFzZSwgaXQgY2FuIGJ1aWxkIGEgdHJlZSBzdHJ1Y3R1cmVkIEpzb24gb2JqZWN0LlxuICogRWFjaCBub2RlIGluIEpzb24gb2JqZWN0IHJlcHJlc2VudHMgYSB0by1kbyBpdGVtIG9yIGEgY2F0ZWdvcnkuXG4gKiBJZiBhIG5vZGUgaXMgYSBjYXRlZ29yeSwgaXQgaGFzIGNoaWxkcmVuIGl0ZW1zIGFuZCBuZXcgaXRlbXMgY2FuIGJlIGFkZGVkIHVuZGVyIHRoZSBjYXRlZ29yeS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoZWNrbGlzdERhdGFiYXNlIHtcbiAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VG9kb0l0ZW1Ob2RlW10+KFtdKTtcblxuICBnZXQgZGF0YSgpOiBUb2RvSXRlbU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YUNoYW5nZS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBCdWlsZCB0aGUgdHJlZSBub2RlcyBmcm9tIEpzb24gb2JqZWN0LiBUaGUgcmVzdWx0IGlzIGEgbGlzdCBvZiBgVG9kb0l0ZW1Ob2RlYCB3aXRoIG5lc3RlZFxuICAgIC8vICAgICBmaWxlIG5vZGUgYXMgY2hpbGRyZW4uXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuYnVpbGRGaWxlVHJlZShUUkVFX0RBVEEsIDApO1xuXG4gICAgLy8gTm90aWZ5IHRoZSBjaGFuZ2UuXG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIGZpbGUgc3RydWN0dXJlIHRyZWUuIFRoZSBgdmFsdWVgIGlzIHRoZSBKc29uIG9iamVjdCwgb3IgYSBzdWItdHJlZSBvZiBhIEpzb24gb2JqZWN0LlxuICAgKiBUaGUgcmV0dXJuIHZhbHVlIGlzIHRoZSBsaXN0IG9mIGBUb2RvSXRlbU5vZGVgLlxuICAgKi9cbiAgYnVpbGRGaWxlVHJlZShvYmo6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBsZXZlbDogbnVtYmVyKTogVG9kb0l0ZW1Ob2RlW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZTxUb2RvSXRlbU5vZGVbXT4oKGFjY3VtdWxhdG9yLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICBjb25zdCBub2RlID0gbmV3IFRvZG9JdGVtTm9kZSgpO1xuICAgICAgbm9kZS5pdGVtID0ga2V5O1xuXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSB0aGlzLmJ1aWxkRmlsZVRyZWUodmFsdWUsIGxldmVsICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5pdGVtID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yLmNvbmNhdChub2RlKTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICAvKiogQWRkIGFuIGl0ZW0gdG8gdG8tZG8gbGlzdCAqL1xuICBpbnNlcnRJdGVtKHBhcmVudDogVG9kb0l0ZW1Ob2RlLCBuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAocGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh7aXRlbTogbmFtZX0gYXMgVG9kb0l0ZW1Ob2RlKTtcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSXRlbShub2RlOiBUb2RvSXRlbU5vZGUsIG5hbWU6IHN0cmluZykge1xuICAgIG5vZGUuaXRlbSA9IG5hbWU7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggY2hlY2tib3hlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWNoZWNrbGlzdC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWNoZWNrbGlzdC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1jaGVja2xpc3QtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbQ2hlY2tsaXN0RGF0YWJhc2VdLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlQ2hlY2tsaXN0RXhhbXBsZSB7XG4gIC8qKiBNYXAgZnJvbSBmbGF0IG5vZGUgdG8gbmVzdGVkIG5vZGUuIFRoaXMgaGVscHMgdXMgZmluZGluZyB0aGUgbmVzdGVkIG5vZGUgdG8gYmUgbW9kaWZpZWQgKi9cbiAgZmxhdE5vZGVNYXAgPSBuZXcgTWFwPFRvZG9JdGVtRmxhdE5vZGUsIFRvZG9JdGVtTm9kZT4oKTtcblxuICAvKiogTWFwIGZyb20gbmVzdGVkIG5vZGUgdG8gZmxhdHRlbmVkIG5vZGUuIFRoaXMgaGVscHMgdXMgdG8ga2VlcCB0aGUgc2FtZSBvYmplY3QgZm9yIHNlbGVjdGlvbiAqL1xuICBuZXN0ZWROb2RlTWFwID0gbmV3IE1hcDxUb2RvSXRlbU5vZGUsIFRvZG9JdGVtRmxhdE5vZGU+KCk7XG5cbiAgLyoqIEEgc2VsZWN0ZWQgcGFyZW50IG5vZGUgdG8gYmUgaW5zZXJ0ZWQgKi9cbiAgc2VsZWN0ZWRQYXJlbnQ6IFRvZG9JdGVtRmxhdE5vZGUgfCBudWxsID0gbnVsbDtcblxuICAvKiogVGhlIG5ldyBpdGVtJ3MgbmFtZSAqL1xuICBuZXdJdGVtTmFtZSA9ICcnO1xuXG4gIHRyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8VG9kb0l0ZW1GbGF0Tm9kZT47XG5cbiAgdHJlZUZsYXR0ZW5lcjogTWF0VHJlZUZsYXR0ZW5lcjxUb2RvSXRlbU5vZGUsIFRvZG9JdGVtRmxhdE5vZGU+O1xuXG4gIGRhdGFTb3VyY2U6IE1hdFRyZWVGbGF0RGF0YVNvdXJjZTxUb2RvSXRlbU5vZGUsIFRvZG9JdGVtRmxhdE5vZGU+O1xuXG4gIC8qKiBUaGUgc2VsZWN0aW9uIGZvciBjaGVja2xpc3QgKi9cbiAgY2hlY2tsaXN0U2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsPFRvZG9JdGVtRmxhdE5vZGU+KHRydWUgLyogbXVsdGlwbGUgKi8pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFiYXNlOiBDaGVja2xpc3REYXRhYmFzZSkge1xuICAgIHRoaXMudHJlZUZsYXR0ZW5lciA9IG5ldyBNYXRUcmVlRmxhdHRlbmVyKFxuICAgICAgdGhpcy50cmFuc2Zvcm1lcixcbiAgICAgIHRoaXMuZ2V0TGV2ZWwsXG4gICAgICB0aGlzLmlzRXhwYW5kYWJsZSxcbiAgICAgIHRoaXMuZ2V0Q2hpbGRyZW4sXG4gICAgKTtcbiAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxUb2RvSXRlbUZsYXROb2RlPih0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRyZWVGbGF0RGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCB0aGlzLnRyZWVGbGF0dGVuZXIpO1xuXG4gICAgX2RhdGFiYXNlLmRhdGFDaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGV2ZWwgPSAobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gbm9kZS5sZXZlbDtcblxuICBpc0V4cGFuZGFibGUgPSAobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGdldENoaWxkcmVuID0gKG5vZGU6IFRvZG9JdGVtTm9kZSk6IFRvZG9JdGVtTm9kZVtdID0+IG5vZGUuY2hpbGRyZW47XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IFRvZG9JdGVtRmxhdE5vZGUpID0+IF9ub2RlRGF0YS5leHBhbmRhYmxlO1xuXG4gIGhhc05vQ29udGVudCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gX25vZGVEYXRhLml0ZW0gPT09ICcnO1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1lciB0byBjb252ZXJ0IG5lc3RlZCBub2RlIHRvIGZsYXQgbm9kZS4gUmVjb3JkIHRoZSBub2RlcyBpbiBtYXBzIGZvciBsYXRlciB1c2UuXG4gICAqL1xuICB0cmFuc2Zvcm1lciA9IChub2RlOiBUb2RvSXRlbU5vZGUsIGxldmVsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBleGlzdGluZ05vZGUgPSB0aGlzLm5lc3RlZE5vZGVNYXAuZ2V0KG5vZGUpO1xuICAgIGNvbnN0IGZsYXROb2RlID1cbiAgICAgIGV4aXN0aW5nTm9kZSAmJiBleGlzdGluZ05vZGUuaXRlbSA9PT0gbm9kZS5pdGVtID8gZXhpc3RpbmdOb2RlIDogbmV3IFRvZG9JdGVtRmxhdE5vZGUoKTtcbiAgICBmbGF0Tm9kZS5pdGVtID0gbm9kZS5pdGVtO1xuICAgIGZsYXROb2RlLmxldmVsID0gbGV2ZWw7XG4gICAgZmxhdE5vZGUuZXhwYW5kYWJsZSA9ICEhbm9kZS5jaGlsZHJlbj8ubGVuZ3RoO1xuICAgIHRoaXMuZmxhdE5vZGVNYXAuc2V0KGZsYXROb2RlLCBub2RlKTtcbiAgICB0aGlzLm5lc3RlZE5vZGVNYXAuc2V0KG5vZGUsIGZsYXROb2RlKTtcbiAgICByZXR1cm4gZmxhdE5vZGU7XG4gIH07XG5cbiAgLyoqIFdoZXRoZXIgYWxsIHRoZSBkZXNjZW5kYW50cyBvZiB0aGUgbm9kZSBhcmUgc2VsZWN0ZWQuICovXG4gIGRlc2NlbmRhbnRzQWxsU2VsZWN0ZWQobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICBjb25zdCBkZXNjQWxsU2VsZWN0ZWQgPVxuICAgICAgZGVzY2VuZGFudHMubGVuZ3RoID4gMCAmJlxuICAgICAgZGVzY2VuZGFudHMuZXZlcnkoY2hpbGQgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZCk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gZGVzY0FsbFNlbGVjdGVkO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgcGFydCBvZiB0aGUgZGVzY2VuZGFudHMgYXJlIHNlbGVjdGVkICovXG4gIGRlc2NlbmRhbnRzUGFydGlhbGx5U2VsZWN0ZWQobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICBjb25zdCByZXN1bHQgPSBkZXNjZW5kYW50cy5zb21lKGNoaWxkID0+IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQoY2hpbGQpKTtcbiAgICByZXR1cm4gcmVzdWx0ICYmICF0aGlzLmRlc2NlbmRhbnRzQWxsU2VsZWN0ZWQobm9kZSk7XG4gIH1cblxuICAvKiogVG9nZ2xlIHRoZSB0by1kbyBpdGVtIHNlbGVjdGlvbi4gU2VsZWN0L2Rlc2VsZWN0IGFsbCB0aGUgZGVzY2VuZGFudHMgbm9kZSAqL1xuICB0b2RvSXRlbVNlbGVjdGlvblRvZ2dsZShub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24udG9nZ2xlKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKG5vZGUpXG4gICAgICA/IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLnNlbGVjdCguLi5kZXNjZW5kYW50cylcbiAgICAgIDogdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uZGVzZWxlY3QoLi4uZGVzY2VuZGFudHMpO1xuXG4gICAgLy8gRm9yY2UgdXBkYXRlIGZvciB0aGUgcGFyZW50XG4gICAgZGVzY2VuZGFudHMuZm9yRWFjaChjaGlsZCA9PiB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKGNoaWxkKSk7XG4gICAgdGhpcy5jaGVja0FsbFBhcmVudHNTZWxlY3Rpb24obm9kZSk7XG4gIH1cblxuICAvKiogVG9nZ2xlIGEgbGVhZiB0by1kbyBpdGVtIHNlbGVjdGlvbi4gQ2hlY2sgYWxsIHRoZSBwYXJlbnRzIHRvIHNlZSBpZiB0aGV5IGNoYW5nZWQgKi9cbiAgdG9kb0xlYWZJdGVtU2VsZWN0aW9uVG9nZ2xlKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi50b2dnbGUobm9kZSk7XG4gICAgdGhpcy5jaGVja0FsbFBhcmVudHNTZWxlY3Rpb24obm9kZSk7XG4gIH1cblxuICAvKiBDaGVja3MgYWxsIHRoZSBwYXJlbnRzIHdoZW4gYSBsZWFmIG5vZGUgaXMgc2VsZWN0ZWQvdW5zZWxlY3RlZCAqL1xuICBjaGVja0FsbFBhcmVudHNTZWxlY3Rpb24obm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IHZvaWQge1xuICAgIGxldCBwYXJlbnQ6IFRvZG9JdGVtRmxhdE5vZGUgfCBudWxsID0gdGhpcy5nZXRQYXJlbnROb2RlKG5vZGUpO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIHRoaXMuY2hlY2tSb290Tm9kZVNlbGVjdGlvbihwYXJlbnQpO1xuICAgICAgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnROb2RlKHBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENoZWNrIHJvb3Qgbm9kZSBjaGVja2VkIHN0YXRlIGFuZCBjaGFuZ2UgaXQgYWNjb3JkaW5nbHkgKi9cbiAgY2hlY2tSb290Tm9kZVNlbGVjdGlvbihub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZVNlbGVjdGVkID0gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChub2RlKTtcbiAgICBjb25zdCBkZXNjZW5kYW50cyA9IHRoaXMudHJlZUNvbnRyb2wuZ2V0RGVzY2VuZGFudHMobm9kZSk7XG4gICAgY29uc3QgZGVzY0FsbFNlbGVjdGVkID1cbiAgICAgIGRlc2NlbmRhbnRzLmxlbmd0aCA+IDAgJiZcbiAgICAgIGRlc2NlbmRhbnRzLmV2ZXJ5KGNoaWxkID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgaWYgKG5vZGVTZWxlY3RlZCAmJiAhZGVzY0FsbFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5kZXNlbGVjdChub2RlKTtcbiAgICB9IGVsc2UgaWYgKCFub2RlU2VsZWN0ZWQgJiYgZGVzY0FsbFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5zZWxlY3Qobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyogR2V0IHRoZSBwYXJlbnQgbm9kZSBvZiBhIG5vZGUgKi9cbiAgZ2V0UGFyZW50Tm9kZShub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogVG9kb0l0ZW1GbGF0Tm9kZSB8IG51bGwge1xuICAgIGNvbnN0IGN1cnJlbnRMZXZlbCA9IHRoaXMuZ2V0TGV2ZWwobm9kZSk7XG5cbiAgICBpZiAoY3VycmVudExldmVsIDwgMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzLmluZGV4T2Yobm9kZSkgLSAxO1xuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzW2ldO1xuXG4gICAgICBpZiAodGhpcy5nZXRMZXZlbChjdXJyZW50Tm9kZSkgPCBjdXJyZW50TGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBTZWxlY3QgdGhlIGNhdGVnb3J5IHNvIHdlIGNhbiBpbnNlcnQgdGhlIG5ldyBpdGVtLiAqL1xuICBhZGROZXdJdGVtKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5mbGF0Tm9kZU1hcC5nZXQobm9kZSk7XG4gICAgdGhpcy5fZGF0YWJhc2UuaW5zZXJ0SXRlbShwYXJlbnROb2RlISwgJycpO1xuICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kKG5vZGUpO1xuICB9XG5cbiAgLyoqIFNhdmUgdGhlIG5vZGUgdG8gZGF0YWJhc2UgKi9cbiAgc2F2ZU5vZGUobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSwgaXRlbVZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXN0ZWROb2RlID0gdGhpcy5mbGF0Tm9kZU1hcC5nZXQobm9kZSk7XG4gICAgdGhpcy5fZGF0YWJhc2UudXBkYXRlSXRlbShuZXN0ZWROb2RlISwgaXRlbVZhbHVlKTtcbiAgfVxufVxuIiwiPG1hdC10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBtYXRUcmVlTm9kZVRvZ2dsZSBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImNoZWNrbGlzdC1sZWFmLW5vZGVcIlxuICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQobm9kZSlcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJ0b2RvTGVhZkl0ZW1TZWxlY3Rpb25Ub2dnbGUobm9kZSlcIj57e25vZGUuaXRlbX19PC9tYXQtY2hlY2tib3g+XG4gIDwvbWF0LXRyZWUtbm9kZT5cblxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzTm9Db250ZW50XCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5OZXcgaXRlbS4uLjwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0ICNpdGVtVmFsdWUgcGxhY2Vob2xkZXI9XCJFeC4gTGV0dHVjZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzYXZlTm9kZShub2RlLCBpdGVtVmFsdWUudmFsdWUpXCI+U2F2ZTwvYnV0dG9uPlxuICA8L21hdC10cmVlLW5vZGU+XG5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdFRyZWVOb2RlVG9nZ2xlXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb2dnbGUgJyArIG5vZGUuaXRlbVwiPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPG1hdC1jaGVja2JveCBbY2hlY2tlZF09XCJkZXNjZW5kYW50c0FsbFNlbGVjdGVkKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cImRlc2NlbmRhbnRzUGFydGlhbGx5U2VsZWN0ZWQobm9kZSlcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJ0b2RvSXRlbVNlbGVjdGlvblRvZ2dsZShub2RlKVwiPnt7bm9kZS5pdGVtfX08L21hdC1jaGVja2JveD5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiYWRkTmV3SXRlbShub2RlKVwiPjxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICA8L21hdC10cmVlLW5vZGU+XG48L21hdC10cmVlPlxuIl19