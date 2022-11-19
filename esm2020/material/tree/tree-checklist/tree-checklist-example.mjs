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
export class ChecklistDatabase {
    constructor() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
    get data() {
        return this.dataChange.value;
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
ChecklistDatabase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChecklistDatabase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ChecklistDatabase.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChecklistDatabase });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: ChecklistDatabase, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
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
TreeChecklistExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: TreeChecklistExample, deps: [{ token: ChecklistDatabase }], target: i0.ɵɵFactoryTarget.Component });
TreeChecklistExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: TreeChecklistExample, selector: "tree-checklist-example", providers: [ChecklistDatabase], ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n                  [checked]=\"checklistSelection.isSelected(node)\"\n                  (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>New item...</mat-label>\n      <input matInput #itemValue placeholder=\"Ex. Lettuce\">\n    </mat-form-field>\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.item\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".mat-mdc-form-field {\n  margin-right: 4px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i6.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i6.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i6.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i6.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i6.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: TreeChecklistExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-checklist-example', providers: [ChecklistDatabase], template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n                  [checked]=\"checklistSelection.isSelected(node)\"\n                  (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>New item...</mat-label>\n      <input matInput #itemValue placeholder=\"Ex. Lettuce\">\n    </mat-form-field>\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.item\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".mat-mdc-form-field {\n  margin-right: 4px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: ChecklistDatabase }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jaGVja2xpc3QtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7QUFFckM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sWUFBWTtDQUd4QjtBQUVELGlFQUFpRTtBQUNqRSxNQUFNLE9BQU8sZ0JBQWdCO0NBSTVCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFNBQVMsR0FBRztJQUNoQixTQUFTLEVBQUU7UUFDVCxtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCLGNBQWMsRUFBRSxJQUFJO1FBQ3BCLGdCQUFnQixFQUFFLElBQUk7UUFDdEIsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO1lBQ25DLE1BQU0sRUFBRSxJQUFJO1NBQ2I7S0FDRjtJQUNELFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0Ms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QUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsWUFBWSxFQUFFO2dCQUM3QyxPQUFPLFdBQVcsQ0FBQzthQUNwQjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQseURBQXlEO0lBQ3pELFVBQVUsQ0FBQyxJQUFzQjtRQUMvQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFnQztJQUNoQyxRQUFRLENBQUMsSUFBc0IsRUFBRSxTQUFpQjtRQUNoRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7aUhBM0pVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLGlEQUZwQixDQUFDLGlCQUFpQixDQUFDLDBCQzNHaEMsMmdEQThCQTsyRkQrRWEsb0JBQW9CO2tCQU5oQyxTQUFTOytCQUNFLHdCQUF3QixhQUd2QixDQUFDLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWxlY3Rpb25Nb2RlbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRyZWVGbGF0RGF0YVNvdXJjZSwgTWF0VHJlZUZsYXR0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogTm9kZSBmb3IgdG8tZG8gaXRlbVxuICovXG5leHBvcnQgY2xhc3MgVG9kb0l0ZW1Ob2RlIHtcbiAgY2hpbGRyZW46IFRvZG9JdGVtTm9kZVtdO1xuICBpdGVtOiBzdHJpbmc7XG59XG5cbi8qKiBGbGF0IHRvLWRvIGl0ZW0gbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5leHBvcnQgY2xhc3MgVG9kb0l0ZW1GbGF0Tm9kZSB7XG4gIGl0ZW06IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgZXhwYW5kYWJsZTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBUaGUgSnNvbiBvYmplY3QgZm9yIHRvLWRvIGxpc3QgZGF0YS5cbiAqL1xuY29uc3QgVFJFRV9EQVRBID0ge1xuICBHcm9jZXJpZXM6IHtcbiAgICAnQWxtb25kIE1lYWwgZmxvdXInOiBudWxsLFxuICAgICdPcmdhbmljIGVnZ3MnOiBudWxsLFxuICAgICdQcm90ZWluIFBvd2Rlcic6IG51bGwsXG4gICAgRnJ1aXRzOiB7XG4gICAgICBBcHBsZTogbnVsbCxcbiAgICAgIEJlcnJpZXM6IFsnQmx1ZWJlcnJ5JywgJ1Jhc3BiZXJyeSddLFxuICAgICAgT3JhbmdlOiBudWxsLFxuICAgIH0sXG4gIH0sXG4gIFJlbWluZGVyczogWydDb29rIGRpbm5lcicsICdSZWFkIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYycsICdVcGdyYWRlIEFwcGxpY2F0aW9uIHRvIEFuZ3VsYXInXSxcbn07XG5cbi8qKlxuICogQ2hlY2tsaXN0IGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIHRvLWRvIGl0ZW0gb3IgYSBjYXRlZ29yeS5cbiAqIElmIGEgbm9kZSBpcyBhIGNhdGVnb3J5LCBpdCBoYXMgY2hpbGRyZW4gaXRlbXMgYW5kIG5ldyBpdGVtcyBjYW4gYmUgYWRkZWQgdW5kZXIgdGhlIGNhdGVnb3J5LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hlY2tsaXN0RGF0YWJhc2Uge1xuICBkYXRhQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUb2RvSXRlbU5vZGVbXT4oW10pO1xuXG4gIGdldCBkYXRhKCk6IFRvZG9JdGVtTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIC8vIEJ1aWxkIHRoZSB0cmVlIG5vZGVzIGZyb20gSnNvbiBvYmplY3QuIFRoZSByZXN1bHQgaXMgYSBsaXN0IG9mIGBUb2RvSXRlbU5vZGVgIHdpdGggbmVzdGVkXG4gICAgLy8gICAgIGZpbGUgbm9kZSBhcyBjaGlsZHJlbi5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5idWlsZEZpbGVUcmVlKFRSRUVfREFUQSwgMCk7XG5cbiAgICAvLyBOb3RpZnkgdGhlIGNoYW5nZS5cbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZmlsZSBzdHJ1Y3R1cmUgdHJlZS4gVGhlIGB2YWx1ZWAgaXMgdGhlIEpzb24gb2JqZWN0LCBvciBhIHN1Yi10cmVlIG9mIGEgSnNvbiBvYmplY3QuXG4gICAqIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGxpc3Qgb2YgYFRvZG9JdGVtTm9kZWAuXG4gICAqL1xuICBidWlsZEZpbGVUcmVlKG9iajoge1trZXk6IHN0cmluZ106IGFueX0sIGxldmVsOiBudW1iZXIpOiBUb2RvSXRlbU5vZGVbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlPFRvZG9JdGVtTm9kZVtdPigoYWNjdW11bGF0b3IsIGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXcgVG9kb0l0ZW1Ob2RlKCk7XG4gICAgICBub2RlLml0ZW0gPSBrZXk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IHRoaXMuYnVpbGRGaWxlVHJlZSh2YWx1ZSwgbGV2ZWwgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLml0ZW0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjdW11bGF0b3IuY29uY2F0KG5vZGUpO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIC8qKiBBZGQgYW4gaXRlbSB0byB0by1kbyBsaXN0ICovXG4gIGluc2VydEl0ZW0ocGFyZW50OiBUb2RvSXRlbU5vZGUsIG5hbWU6IHN0cmluZykge1xuICAgIGlmIChwYXJlbnQuY2hpbGRyZW4pIHtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHtpdGVtOiBuYW1lfSBhcyBUb2RvSXRlbU5vZGUpO1xuICAgICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVJdGVtKG5vZGU6IFRvZG9JdGVtTm9kZSwgbmFtZTogc3RyaW5nKSB7XG4gICAgbm9kZS5pdGVtID0gbmFtZTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBjaGVja2JveGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtY2hlY2tsaXN0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtY2hlY2tsaXN0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0cmVlLWNoZWNrbGlzdC1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtDaGVja2xpc3REYXRhYmFzZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVDaGVja2xpc3RFeGFtcGxlIHtcbiAgLyoqIE1hcCBmcm9tIGZsYXQgbm9kZSB0byBuZXN0ZWQgbm9kZS4gVGhpcyBoZWxwcyB1cyBmaW5kaW5nIHRoZSBuZXN0ZWQgbm9kZSB0byBiZSBtb2RpZmllZCAqL1xuICBmbGF0Tm9kZU1hcCA9IG5ldyBNYXA8VG9kb0l0ZW1GbGF0Tm9kZSwgVG9kb0l0ZW1Ob2RlPigpO1xuXG4gIC8qKiBNYXAgZnJvbSBuZXN0ZWQgbm9kZSB0byBmbGF0dGVuZWQgbm9kZS4gVGhpcyBoZWxwcyB1cyB0byBrZWVwIHRoZSBzYW1lIG9iamVjdCBmb3Igc2VsZWN0aW9uICovXG4gIG5lc3RlZE5vZGVNYXAgPSBuZXcgTWFwPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT4oKTtcblxuICAvKiogQSBzZWxlY3RlZCBwYXJlbnQgbm9kZSB0byBiZSBpbnNlcnRlZCAqL1xuICBzZWxlY3RlZFBhcmVudDogVG9kb0l0ZW1GbGF0Tm9kZSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBUaGUgbmV3IGl0ZW0ncyBuYW1lICovXG4gIG5ld0l0ZW1OYW1lID0gJyc7XG5cbiAgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxUb2RvSXRlbUZsYXROb2RlPjtcblxuICB0cmVlRmxhdHRlbmVyOiBNYXRUcmVlRmxhdHRlbmVyPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT47XG5cbiAgZGF0YVNvdXJjZTogTWF0VHJlZUZsYXREYXRhU291cmNlPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT47XG5cbiAgLyoqIFRoZSBzZWxlY3Rpb24gZm9yIGNoZWNrbGlzdCAqL1xuICBjaGVja2xpc3RTZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8VG9kb0l0ZW1GbGF0Tm9kZT4odHJ1ZSAvKiBtdWx0aXBsZSAqLyk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YWJhc2U6IENoZWNrbGlzdERhdGFiYXNlKSB7XG4gICAgdGhpcy50cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIoXG4gICAgICB0aGlzLnRyYW5zZm9ybWVyLFxuICAgICAgdGhpcy5nZXRMZXZlbCxcbiAgICAgIHRoaXMuaXNFeHBhbmRhYmxlLFxuICAgICAgdGhpcy5nZXRDaGlsZHJlbixcbiAgICApO1xuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPFRvZG9JdGVtRmxhdE5vZGU+KHRoaXMuZ2V0TGV2ZWwsIHRoaXMuaXNFeHBhbmRhYmxlKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZUZsYXREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMudHJlZUZsYXR0ZW5lcik7XG5cbiAgICBfZGF0YWJhc2UuZGF0YUNoYW5nZS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBnZXRMZXZlbCA9IChub2RlOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgZ2V0Q2hpbGRyZW4gPSAobm9kZTogVG9kb0l0ZW1Ob2RlKTogVG9kb0l0ZW1Ob2RlW10gPT4gbm9kZS5jaGlsZHJlbjtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gX25vZGVEYXRhLmV4cGFuZGFibGU7XG5cbiAgaGFzTm9Db250ZW50ID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBfbm9kZURhdGEuaXRlbSA9PT0gJyc7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybWVyIHRvIGNvbnZlcnQgbmVzdGVkIG5vZGUgdG8gZmxhdCBub2RlLiBSZWNvcmQgdGhlIG5vZGVzIGluIG1hcHMgZm9yIGxhdGVyIHVzZS5cbiAgICovXG4gIHRyYW5zZm9ybWVyID0gKG5vZGU6IFRvZG9JdGVtTm9kZSwgbGV2ZWw6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IHRoaXMubmVzdGVkTm9kZU1hcC5nZXQobm9kZSk7XG4gICAgY29uc3QgZmxhdE5vZGUgPVxuICAgICAgZXhpc3RpbmdOb2RlICYmIGV4aXN0aW5nTm9kZS5pdGVtID09PSBub2RlLml0ZW0gPyBleGlzdGluZ05vZGUgOiBuZXcgVG9kb0l0ZW1GbGF0Tm9kZSgpO1xuICAgIGZsYXROb2RlLml0ZW0gPSBub2RlLml0ZW07XG4gICAgZmxhdE5vZGUubGV2ZWwgPSBsZXZlbDtcbiAgICBmbGF0Tm9kZS5leHBhbmRhYmxlID0gISFub2RlLmNoaWxkcmVuPy5sZW5ndGg7XG4gICAgdGhpcy5mbGF0Tm9kZU1hcC5zZXQoZmxhdE5vZGUsIG5vZGUpO1xuICAgIHRoaXMubmVzdGVkTm9kZU1hcC5zZXQobm9kZSwgZmxhdE5vZGUpO1xuICAgIHJldHVybiBmbGF0Tm9kZTtcbiAgfTtcblxuICAvKiogV2hldGhlciBhbGwgdGhlIGRlc2NlbmRhbnRzIG9mIHRoZSBub2RlIGFyZSBzZWxlY3RlZC4gKi9cbiAgZGVzY2VuZGFudHNBbGxTZWxlY3RlZChub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NBbGxTZWxlY3RlZCA9XG4gICAgICBkZXNjZW5kYW50cy5sZW5ndGggPiAwICYmXG4gICAgICBkZXNjZW5kYW50cy5ldmVyeShjaGlsZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBkZXNjQWxsU2VsZWN0ZWQ7XG4gIH1cblxuICAvKiogV2hldGhlciBwYXJ0IG9mIHRoZSBkZXNjZW5kYW50cyBhcmUgc2VsZWN0ZWQgKi9cbiAgZGVzY2VuZGFudHNQYXJ0aWFsbHlTZWxlY3RlZChub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGRlc2NlbmRhbnRzLnNvbWUoY2hpbGQgPT4gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZCkpO1xuICAgIHJldHVybiByZXN1bHQgJiYgIXRoaXMuZGVzY2VuZGFudHNBbGxTZWxlY3RlZChub2RlKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGUgdGhlIHRvLWRvIGl0ZW0gc2VsZWN0aW9uLiBTZWxlY3QvZGVzZWxlY3QgYWxsIHRoZSBkZXNjZW5kYW50cyBub2RlICovXG4gIHRvZG9JdGVtU2VsZWN0aW9uVG9nZ2xlKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi50b2dnbGUobm9kZSk7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQobm9kZSlcbiAgICAgID8gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uc2VsZWN0KC4uLmRlc2NlbmRhbnRzKVxuICAgICAgOiB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5kZXNlbGVjdCguLi5kZXNjZW5kYW50cyk7XG5cbiAgICAvLyBGb3JjZSB1cGRhdGUgZm9yIHRoZSBwYXJlbnRcbiAgICBkZXNjZW5kYW50cy5mb3JFYWNoKGNoaWxkID0+IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQoY2hpbGQpKTtcbiAgICB0aGlzLmNoZWNrQWxsUGFyZW50c1NlbGVjdGlvbihub2RlKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGUgYSBsZWFmIHRvLWRvIGl0ZW0gc2VsZWN0aW9uLiBDaGVjayBhbGwgdGhlIHBhcmVudHMgdG8gc2VlIGlmIHRoZXkgY2hhbmdlZCAqL1xuICB0b2RvTGVhZkl0ZW1TZWxlY3Rpb25Ub2dnbGUobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLnRvZ2dsZShub2RlKTtcbiAgICB0aGlzLmNoZWNrQWxsUGFyZW50c1NlbGVjdGlvbihub2RlKTtcbiAgfVxuXG4gIC8qIENoZWNrcyBhbGwgdGhlIHBhcmVudHMgd2hlbiBhIGxlYWYgbm9kZSBpcyBzZWxlY3RlZC91bnNlbGVjdGVkICovXG4gIGNoZWNrQWxsUGFyZW50c1NlbGVjdGlvbihub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgbGV0IHBhcmVudDogVG9kb0l0ZW1GbGF0Tm9kZSB8IG51bGwgPSB0aGlzLmdldFBhcmVudE5vZGUobm9kZSk7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgdGhpcy5jaGVja1Jvb3ROb2RlU2VsZWN0aW9uKHBhcmVudCk7XG4gICAgICBwYXJlbnQgPSB0aGlzLmdldFBhcmVudE5vZGUocGFyZW50KTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2hlY2sgcm9vdCBub2RlIGNoZWNrZWQgc3RhdGUgYW5kIGNoYW5nZSBpdCBhY2NvcmRpbmdseSAqL1xuICBjaGVja1Jvb3ROb2RlU2VsZWN0aW9uKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlU2VsZWN0ZWQgPSB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICBjb25zdCBkZXNjQWxsU2VsZWN0ZWQgPVxuICAgICAgZGVzY2VuZGFudHMubGVuZ3RoID4gMCAmJlxuICAgICAgZGVzY2VuZGFudHMuZXZlcnkoY2hpbGQgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZCk7XG4gICAgICB9KTtcbiAgICBpZiAobm9kZVNlbGVjdGVkICYmICFkZXNjQWxsU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmRlc2VsZWN0KG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoIW5vZGVTZWxlY3RlZCAmJiBkZXNjQWxsU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLnNlbGVjdChub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKiBHZXQgdGhlIHBhcmVudCBub2RlIG9mIGEgbm9kZSAqL1xuICBnZXRQYXJlbnROb2RlKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiBUb2RvSXRlbUZsYXROb2RlIHwgbnVsbCB7XG4gICAgY29uc3QgY3VycmVudExldmVsID0gdGhpcy5nZXRMZXZlbChub2RlKTtcblxuICAgIGlmIChjdXJyZW50TGV2ZWwgPCAxKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMuaW5kZXhPZihub2RlKSAtIDE7XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXNbaV07XG5cbiAgICAgIGlmICh0aGlzLmdldExldmVsKGN1cnJlbnROb2RlKSA8IGN1cnJlbnRMZXZlbCkge1xuICAgICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqIFNlbGVjdCB0aGUgY2F0ZWdvcnkgc28gd2UgY2FuIGluc2VydCB0aGUgbmV3IGl0ZW0uICovXG4gIGFkZE5ld0l0ZW0obm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLmZsYXROb2RlTWFwLmdldChub2RlKTtcbiAgICB0aGlzLl9kYXRhYmFzZS5pbnNlcnRJdGVtKHBhcmVudE5vZGUhLCAnJyk7XG4gICAgdGhpcy50cmVlQ29udHJvbC5leHBhbmQobm9kZSk7XG4gIH1cblxuICAvKiogU2F2ZSB0aGUgbm9kZSB0byBkYXRhYmFzZSAqL1xuICBzYXZlTm9kZShub2RlOiBUb2RvSXRlbUZsYXROb2RlLCBpdGVtVmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSB0aGlzLmZsYXROb2RlTWFwLmdldChub2RlKTtcbiAgICB0aGlzLl9kYXRhYmFzZS51cGRhdGVJdGVtKG5lc3RlZE5vZGUhLCBpdGVtVmFsdWUpO1xuICB9XG59XG4iLCI8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIG1hdFRyZWVOb2RlVG9nZ2xlIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiY2hlY2tsaXN0LWxlYWYtbm9kZVwiXG4gICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJjaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChub2RlKVwiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInRvZG9MZWFmSXRlbVNlbGVjdGlvblRvZ2dsZShub2RlKVwiPnt7bm9kZS5pdGVtfX08L21hdC1jaGVja2JveD5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuXG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNOb0NvbnRlbnRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPk5ldyBpdGVtLi4uPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgI2l0ZW1WYWx1ZSBwbGFjZWhvbGRlcj1cIkV4LiBMZXR0dWNlXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInNhdmVOb2RlKG5vZGUsIGl0ZW1WYWx1ZS52YWx1ZSlcIj5TYXZlPC9idXR0b24+XG4gIDwvbWF0LXRyZWUtbm9kZT5cblxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VHJlZU5vZGVUb2dnbGVcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1RvZ2dsZSAnICsgbm9kZS5pdGVtXCI+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8bWF0LWNoZWNrYm94IFtjaGVja2VkXT1cImRlc2NlbmRhbnRzQWxsU2VsZWN0ZWQobm9kZSlcIlxuICAgICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiZGVzY2VuZGFudHNQYXJ0aWFsbHlTZWxlY3RlZChub2RlKVwiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInRvZG9JdGVtU2VsZWN0aW9uVG9nZ2xlKG5vZGUpXCI+e3tub2RlLml0ZW19fTwvbWF0LWNoZWNrYm94PlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJhZGROZXdJdGVtKG5vZGUpXCI+PG1hdC1pY29uPmFkZDwvbWF0LWljb24+PC9idXR0b24+XG4gIDwvbWF0LXRyZWUtbm9kZT5cbjwvbWF0LXRyZWU+XG4iXX0=