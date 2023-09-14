import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/checkbox";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/icon";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: ChecklistDatabase, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: ChecklistDatabase }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: ChecklistDatabase, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: TreeChecklistExample, deps: [{ token: ChecklistDatabase }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.4", type: TreeChecklistExample, isStandalone: true, selector: "tree-checklist-example", providers: [ChecklistDatabase], ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n                  [checked]=\"checklistSelection.isSelected(node)\"\n                  (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-form-field>\n      <mat-label>New item...</mat-label>\n      <input matInput #itemValue placeholder=\"Ex. Lettuce\">\n    </mat-form-field>\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.item\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".mat-mdc-form-field {\n  margin-right: 4px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i3.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: TreeChecklistExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-checklist-example', providers: [ChecklistDatabase], standalone: true, imports: [
                        MatTreeModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatIconModule,
                    ], template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n                  [checked]=\"checklistSelection.isSelected(node)\"\n                  (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-form-field>\n      <mat-label>New item...</mat-label>\n      <input matInput #itemValue placeholder=\"Ex. Lettuce\">\n    </mat-form-field>\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.item\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".mat-mdc-form-field {\n  margin-right: 4px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: ChecklistDatabase }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jaGVja2xpc3QtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzlGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7O0FBRXJDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFlBQVk7Q0FHeEI7QUFFRCxpRUFBaUU7QUFDakUsTUFBTSxPQUFPLGdCQUFnQjtDQUk1QjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxTQUFTLEdBQUc7SUFDaEIsU0FBUyxFQUFFO1FBQ1QsbUJBQW1CLEVBQUUsSUFBSTtRQUN6QixjQUFjLEVBQUUsSUFBSTtRQUNwQixnQkFBZ0IsRUFBRSxJQUFJO1FBQ3RCLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztZQUNuQyxNQUFNLEVBQUUsSUFBSTtTQUNiO0tBQ0Y7SUFDRCxTQUFTLEVBQUUsQ0FBQyxhQUFhLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLENBQUM7Q0FDOUYsQ0FBQztBQUVGOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8saUJBQWlCO0lBRzVCLElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVEO1FBTkEsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFpQixFQUFFLENBQUMsQ0FBQztRQU9uRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVU7UUFDUiw0RkFBNEY7UUFDNUYsNkJBQTZCO1FBQzdCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTlDLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEdBQXlCLEVBQUUsS0FBYTtRQUNwRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNsRSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUVoQixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO29CQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDdEQ7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7aUJBQ25CO2FBQ0Y7WUFFRCxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELGdDQUFnQztJQUNoQyxVQUFVLENBQUMsTUFBb0IsRUFBRSxJQUFZO1FBQzNDLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNuQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQWlCLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQWtCLEVBQUUsSUFBWTtRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztxSEFyRFUsaUJBQWlCO3lIQUFqQixpQkFBaUI7O2tHQUFqQixpQkFBaUI7a0JBRDdCLFVBQVU7O0FBeURYOztHQUVHO0FBZ0JILE1BQU0sT0FBTyxvQkFBb0I7SUFzQi9CLFlBQW9CLFNBQTRCO1FBQTVCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBckJoRCw4RkFBOEY7UUFDOUYsZ0JBQVcsR0FBRyxJQUFJLEdBQUcsRUFBa0MsQ0FBQztRQUV4RCxrR0FBa0c7UUFDbEcsa0JBQWEsR0FBRyxJQUFJLEdBQUcsRUFBa0MsQ0FBQztRQUUxRCw0Q0FBNEM7UUFDNUMsbUJBQWMsR0FBNEIsSUFBSSxDQUFDO1FBRS9DLDBCQUEwQjtRQUMxQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQVFqQixrQ0FBa0M7UUFDbEMsdUJBQWtCLEdBQUcsSUFBSSxjQUFjLENBQW1CLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQWlCL0UsYUFBUSxHQUFHLENBQUMsSUFBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVsRCxpQkFBWSxHQUFHLENBQUMsSUFBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUUzRCxnQkFBVyxHQUFHLENBQUMsSUFBa0IsRUFBa0IsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFcEUsYUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLFNBQTJCLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFFNUUsaUJBQVksR0FBRyxDQUFDLENBQVMsRUFBRSxTQUEyQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUVqRjs7V0FFRztRQUNILGdCQUFXLEdBQUcsQ0FBQyxJQUFrQixFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQ2xELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xELE1BQU0sUUFBUSxHQUNaLFlBQVksSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFGLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMxQixRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN2QixRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztZQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQztRQXJDQSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksZ0JBQWdCLENBQ3ZDLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FDakIsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQW1CLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVsRixTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBMkJELDREQUE0RDtJQUM1RCxzQkFBc0IsQ0FBQyxJQUFzQjtRQUMzQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxNQUFNLGVBQWUsR0FDbkIsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3RCLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRCxDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxtREFBbUQ7SUFDbkQsNEJBQTRCLENBQUMsSUFBc0I7UUFDakQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwRixPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsZ0ZBQWdGO0lBQ2hGLHVCQUF1QixDQUFDLElBQXNCO1FBQzVDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDdEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUM7WUFDaEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUVyRCw4QkFBOEI7UUFDOUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHVGQUF1RjtJQUN2RiwyQkFBMkIsQ0FBQyxJQUFzQjtRQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsb0VBQW9FO0lBQ3BFLHdCQUF3QixDQUFDLElBQXNCO1FBQzdDLElBQUksTUFBTSxHQUE0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELE9BQU8sTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxzQkFBc0IsQ0FBQyxJQUFzQjtRQUMzQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELE1BQU0sZUFBZSxHQUNuQixXQUFXLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDdEIsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxZQUFZLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QzthQUFNLElBQUksQ0FBQyxZQUFZLElBQUksZUFBZSxFQUFFO1lBQzNDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQsbUNBQW1DO0lBQ25DLGFBQWEsQ0FBQyxJQUFzQjtRQUNsQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpDLElBQUksWUFBWSxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoRSxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxZQUFZLEVBQUU7Z0JBQzdDLE9BQU8sV0FBVyxDQUFDO2FBQ3BCO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx5REFBeUQ7SUFDekQsVUFBVSxDQUFDLElBQXNCO1FBQy9CLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQWdDO0lBQ2hDLFFBQVEsQ0FBQyxJQUFzQixFQUFFLFNBQWlCO1FBQ2hELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRCxDQUFDO3FIQTNKVSxvQkFBb0I7eUdBQXBCLG9CQUFvQixxRUFYcEIsQ0FBQyxpQkFBaUIsQ0FBQywwQkNoSGhDLHUvQ0E4QkEseUdEcUZJLGFBQWEsNG9CQUNiLGVBQWUsd1VBQ2YsaUJBQWlCLDZXQUNqQixrQkFBa0IsMFNBQ2xCLGNBQWMsMFdBQ2QsYUFBYTs7a0dBR0osb0JBQW9CO2tCQWZoQyxTQUFTOytCQUNFLHdCQUF3QixhQUd2QixDQUFDLGlCQUFpQixDQUFDLGNBQ2xCLElBQUksV0FDUDt3QkFDUCxhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsYUFBYTtxQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlRmxhdERhdGFTb3VyY2UsIE1hdFRyZWVGbGF0dGVuZXIsIE1hdFRyZWVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIE5vZGUgZm9yIHRvLWRvIGl0ZW1cbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9JdGVtTm9kZSB7XG4gIGNoaWxkcmVuOiBUb2RvSXRlbU5vZGVbXTtcbiAgaXRlbTogc3RyaW5nO1xufVxuXG4vKiogRmxhdCB0by1kbyBpdGVtIG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9JdGVtRmxhdE5vZGUge1xuICBpdGVtOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG4gIGV4cGFuZGFibGU6IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhlIEpzb24gb2JqZWN0IGZvciB0by1kbyBsaXN0IGRhdGEuXG4gKi9cbmNvbnN0IFRSRUVfREFUQSA9IHtcbiAgR3JvY2VyaWVzOiB7XG4gICAgJ0FsbW9uZCBNZWFsIGZsb3VyJzogbnVsbCxcbiAgICAnT3JnYW5pYyBlZ2dzJzogbnVsbCxcbiAgICAnUHJvdGVpbiBQb3dkZXInOiBudWxsLFxuICAgIEZydWl0czoge1xuICAgICAgQXBwbGU6IG51bGwsXG4gICAgICBCZXJyaWVzOiBbJ0JsdWViZXJyeScsICdSYXNwYmVycnknXSxcbiAgICAgIE9yYW5nZTogbnVsbCxcbiAgICB9LFxuICB9LFxuICBSZW1pbmRlcnM6IFsnQ29vayBkaW5uZXInLCAnUmVhZCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMnLCAnVXBncmFkZSBBcHBsaWNhdGlvbiB0byBBbmd1bGFyJ10sXG59O1xuXG4vKipcbiAqIENoZWNrbGlzdCBkYXRhYmFzZSwgaXQgY2FuIGJ1aWxkIGEgdHJlZSBzdHJ1Y3R1cmVkIEpzb24gb2JqZWN0LlxuICogRWFjaCBub2RlIGluIEpzb24gb2JqZWN0IHJlcHJlc2VudHMgYSB0by1kbyBpdGVtIG9yIGEgY2F0ZWdvcnkuXG4gKiBJZiBhIG5vZGUgaXMgYSBjYXRlZ29yeSwgaXQgaGFzIGNoaWxkcmVuIGl0ZW1zIGFuZCBuZXcgaXRlbXMgY2FuIGJlIGFkZGVkIHVuZGVyIHRoZSBjYXRlZ29yeS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoZWNrbGlzdERhdGFiYXNlIHtcbiAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VG9kb0l0ZW1Ob2RlW10+KFtdKTtcblxuICBnZXQgZGF0YSgpOiBUb2RvSXRlbU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YUNoYW5nZS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBCdWlsZCB0aGUgdHJlZSBub2RlcyBmcm9tIEpzb24gb2JqZWN0LiBUaGUgcmVzdWx0IGlzIGEgbGlzdCBvZiBgVG9kb0l0ZW1Ob2RlYCB3aXRoIG5lc3RlZFxuICAgIC8vICAgICBmaWxlIG5vZGUgYXMgY2hpbGRyZW4uXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuYnVpbGRGaWxlVHJlZShUUkVFX0RBVEEsIDApO1xuXG4gICAgLy8gTm90aWZ5IHRoZSBjaGFuZ2UuXG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIGZpbGUgc3RydWN0dXJlIHRyZWUuIFRoZSBgdmFsdWVgIGlzIHRoZSBKc29uIG9iamVjdCwgb3IgYSBzdWItdHJlZSBvZiBhIEpzb24gb2JqZWN0LlxuICAgKiBUaGUgcmV0dXJuIHZhbHVlIGlzIHRoZSBsaXN0IG9mIGBUb2RvSXRlbU5vZGVgLlxuICAgKi9cbiAgYnVpbGRGaWxlVHJlZShvYmo6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBsZXZlbDogbnVtYmVyKTogVG9kb0l0ZW1Ob2RlW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZTxUb2RvSXRlbU5vZGVbXT4oKGFjY3VtdWxhdG9yLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICBjb25zdCBub2RlID0gbmV3IFRvZG9JdGVtTm9kZSgpO1xuICAgICAgbm9kZS5pdGVtID0ga2V5O1xuXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSB0aGlzLmJ1aWxkRmlsZVRyZWUodmFsdWUsIGxldmVsICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5pdGVtID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yLmNvbmNhdChub2RlKTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICAvKiogQWRkIGFuIGl0ZW0gdG8gdG8tZG8gbGlzdCAqL1xuICBpbnNlcnRJdGVtKHBhcmVudDogVG9kb0l0ZW1Ob2RlLCBuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAocGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh7aXRlbTogbmFtZX0gYXMgVG9kb0l0ZW1Ob2RlKTtcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSXRlbShub2RlOiBUb2RvSXRlbU5vZGUsIG5hbWU6IHN0cmluZykge1xuICAgIG5vZGUuaXRlbSA9IG5hbWU7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggY2hlY2tib3hlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWNoZWNrbGlzdC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWNoZWNrbGlzdC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1jaGVja2xpc3QtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbQ2hlY2tsaXN0RGF0YWJhc2VdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVDaGVja2xpc3RFeGFtcGxlIHtcbiAgLyoqIE1hcCBmcm9tIGZsYXQgbm9kZSB0byBuZXN0ZWQgbm9kZS4gVGhpcyBoZWxwcyB1cyBmaW5kaW5nIHRoZSBuZXN0ZWQgbm9kZSB0byBiZSBtb2RpZmllZCAqL1xuICBmbGF0Tm9kZU1hcCA9IG5ldyBNYXA8VG9kb0l0ZW1GbGF0Tm9kZSwgVG9kb0l0ZW1Ob2RlPigpO1xuXG4gIC8qKiBNYXAgZnJvbSBuZXN0ZWQgbm9kZSB0byBmbGF0dGVuZWQgbm9kZS4gVGhpcyBoZWxwcyB1cyB0byBrZWVwIHRoZSBzYW1lIG9iamVjdCBmb3Igc2VsZWN0aW9uICovXG4gIG5lc3RlZE5vZGVNYXAgPSBuZXcgTWFwPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT4oKTtcblxuICAvKiogQSBzZWxlY3RlZCBwYXJlbnQgbm9kZSB0byBiZSBpbnNlcnRlZCAqL1xuICBzZWxlY3RlZFBhcmVudDogVG9kb0l0ZW1GbGF0Tm9kZSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBUaGUgbmV3IGl0ZW0ncyBuYW1lICovXG4gIG5ld0l0ZW1OYW1lID0gJyc7XG5cbiAgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxUb2RvSXRlbUZsYXROb2RlPjtcblxuICB0cmVlRmxhdHRlbmVyOiBNYXRUcmVlRmxhdHRlbmVyPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT47XG5cbiAgZGF0YVNvdXJjZTogTWF0VHJlZUZsYXREYXRhU291cmNlPFRvZG9JdGVtTm9kZSwgVG9kb0l0ZW1GbGF0Tm9kZT47XG5cbiAgLyoqIFRoZSBzZWxlY3Rpb24gZm9yIGNoZWNrbGlzdCAqL1xuICBjaGVja2xpc3RTZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8VG9kb0l0ZW1GbGF0Tm9kZT4odHJ1ZSAvKiBtdWx0aXBsZSAqLyk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YWJhc2U6IENoZWNrbGlzdERhdGFiYXNlKSB7XG4gICAgdGhpcy50cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIoXG4gICAgICB0aGlzLnRyYW5zZm9ybWVyLFxuICAgICAgdGhpcy5nZXRMZXZlbCxcbiAgICAgIHRoaXMuaXNFeHBhbmRhYmxlLFxuICAgICAgdGhpcy5nZXRDaGlsZHJlbixcbiAgICApO1xuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPFRvZG9JdGVtRmxhdE5vZGU+KHRoaXMuZ2V0TGV2ZWwsIHRoaXMuaXNFeHBhbmRhYmxlKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZUZsYXREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMudHJlZUZsYXR0ZW5lcik7XG5cbiAgICBfZGF0YWJhc2UuZGF0YUNoYW5nZS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBnZXRMZXZlbCA9IChub2RlOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgZ2V0Q2hpbGRyZW4gPSAobm9kZTogVG9kb0l0ZW1Ob2RlKTogVG9kb0l0ZW1Ob2RlW10gPT4gbm9kZS5jaGlsZHJlbjtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gX25vZGVEYXRhLmV4cGFuZGFibGU7XG5cbiAgaGFzTm9Db250ZW50ID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBfbm9kZURhdGEuaXRlbSA9PT0gJyc7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybWVyIHRvIGNvbnZlcnQgbmVzdGVkIG5vZGUgdG8gZmxhdCBub2RlLiBSZWNvcmQgdGhlIG5vZGVzIGluIG1hcHMgZm9yIGxhdGVyIHVzZS5cbiAgICovXG4gIHRyYW5zZm9ybWVyID0gKG5vZGU6IFRvZG9JdGVtTm9kZSwgbGV2ZWw6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IHRoaXMubmVzdGVkTm9kZU1hcC5nZXQobm9kZSk7XG4gICAgY29uc3QgZmxhdE5vZGUgPVxuICAgICAgZXhpc3RpbmdOb2RlICYmIGV4aXN0aW5nTm9kZS5pdGVtID09PSBub2RlLml0ZW0gPyBleGlzdGluZ05vZGUgOiBuZXcgVG9kb0l0ZW1GbGF0Tm9kZSgpO1xuICAgIGZsYXROb2RlLml0ZW0gPSBub2RlLml0ZW07XG4gICAgZmxhdE5vZGUubGV2ZWwgPSBsZXZlbDtcbiAgICBmbGF0Tm9kZS5leHBhbmRhYmxlID0gISFub2RlLmNoaWxkcmVuPy5sZW5ndGg7XG4gICAgdGhpcy5mbGF0Tm9kZU1hcC5zZXQoZmxhdE5vZGUsIG5vZGUpO1xuICAgIHRoaXMubmVzdGVkTm9kZU1hcC5zZXQobm9kZSwgZmxhdE5vZGUpO1xuICAgIHJldHVybiBmbGF0Tm9kZTtcbiAgfTtcblxuICAvKiogV2hldGhlciBhbGwgdGhlIGRlc2NlbmRhbnRzIG9mIHRoZSBub2RlIGFyZSBzZWxlY3RlZC4gKi9cbiAgZGVzY2VuZGFudHNBbGxTZWxlY3RlZChub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NBbGxTZWxlY3RlZCA9XG4gICAgICBkZXNjZW5kYW50cy5sZW5ndGggPiAwICYmXG4gICAgICBkZXNjZW5kYW50cy5ldmVyeShjaGlsZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBkZXNjQWxsU2VsZWN0ZWQ7XG4gIH1cblxuICAvKiogV2hldGhlciBwYXJ0IG9mIHRoZSBkZXNjZW5kYW50cyBhcmUgc2VsZWN0ZWQgKi9cbiAgZGVzY2VuZGFudHNQYXJ0aWFsbHlTZWxlY3RlZChub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGRlc2NlbmRhbnRzLnNvbWUoY2hpbGQgPT4gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZCkpO1xuICAgIHJldHVybiByZXN1bHQgJiYgIXRoaXMuZGVzY2VuZGFudHNBbGxTZWxlY3RlZChub2RlKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGUgdGhlIHRvLWRvIGl0ZW0gc2VsZWN0aW9uLiBTZWxlY3QvZGVzZWxlY3QgYWxsIHRoZSBkZXNjZW5kYW50cyBub2RlICovXG4gIHRvZG9JdGVtU2VsZWN0aW9uVG9nZ2xlKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi50b2dnbGUobm9kZSk7XG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSB0aGlzLnRyZWVDb250cm9sLmdldERlc2NlbmRhbnRzKG5vZGUpO1xuICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQobm9kZSlcbiAgICAgID8gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uc2VsZWN0KC4uLmRlc2NlbmRhbnRzKVxuICAgICAgOiB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5kZXNlbGVjdCguLi5kZXNjZW5kYW50cyk7XG5cbiAgICAvLyBGb3JjZSB1cGRhdGUgZm9yIHRoZSBwYXJlbnRcbiAgICBkZXNjZW5kYW50cy5mb3JFYWNoKGNoaWxkID0+IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQoY2hpbGQpKTtcbiAgICB0aGlzLmNoZWNrQWxsUGFyZW50c1NlbGVjdGlvbihub2RlKTtcbiAgfVxuXG4gIC8qKiBUb2dnbGUgYSBsZWFmIHRvLWRvIGl0ZW0gc2VsZWN0aW9uLiBDaGVjayBhbGwgdGhlIHBhcmVudHMgdG8gc2VlIGlmIHRoZXkgY2hhbmdlZCAqL1xuICB0b2RvTGVhZkl0ZW1TZWxlY3Rpb25Ub2dnbGUobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLnRvZ2dsZShub2RlKTtcbiAgICB0aGlzLmNoZWNrQWxsUGFyZW50c1NlbGVjdGlvbihub2RlKTtcbiAgfVxuXG4gIC8qIENoZWNrcyBhbGwgdGhlIHBhcmVudHMgd2hlbiBhIGxlYWYgbm9kZSBpcyBzZWxlY3RlZC91bnNlbGVjdGVkICovXG4gIGNoZWNrQWxsUGFyZW50c1NlbGVjdGlvbihub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgbGV0IHBhcmVudDogVG9kb0l0ZW1GbGF0Tm9kZSB8IG51bGwgPSB0aGlzLmdldFBhcmVudE5vZGUobm9kZSk7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgdGhpcy5jaGVja1Jvb3ROb2RlU2VsZWN0aW9uKHBhcmVudCk7XG4gICAgICBwYXJlbnQgPSB0aGlzLmdldFBhcmVudE5vZGUocGFyZW50KTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2hlY2sgcm9vdCBub2RlIGNoZWNrZWQgc3RhdGUgYW5kIGNoYW5nZSBpdCBhY2NvcmRpbmdseSAqL1xuICBjaGVja1Jvb3ROb2RlU2VsZWN0aW9uKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlU2VsZWN0ZWQgPSB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICBjb25zdCBkZXNjQWxsU2VsZWN0ZWQgPVxuICAgICAgZGVzY2VuZGFudHMubGVuZ3RoID4gMCAmJlxuICAgICAgZGVzY2VuZGFudHMuZXZlcnkoY2hpbGQgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZCk7XG4gICAgICB9KTtcbiAgICBpZiAobm9kZVNlbGVjdGVkICYmICFkZXNjQWxsU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmRlc2VsZWN0KG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoIW5vZGVTZWxlY3RlZCAmJiBkZXNjQWxsU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLnNlbGVjdChub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKiBHZXQgdGhlIHBhcmVudCBub2RlIG9mIGEgbm9kZSAqL1xuICBnZXRQYXJlbnROb2RlKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiBUb2RvSXRlbUZsYXROb2RlIHwgbnVsbCB7XG4gICAgY29uc3QgY3VycmVudExldmVsID0gdGhpcy5nZXRMZXZlbChub2RlKTtcblxuICAgIGlmIChjdXJyZW50TGV2ZWwgPCAxKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMuaW5kZXhPZihub2RlKSAtIDE7XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXNbaV07XG5cbiAgICAgIGlmICh0aGlzLmdldExldmVsKGN1cnJlbnROb2RlKSA8IGN1cnJlbnRMZXZlbCkge1xuICAgICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqIFNlbGVjdCB0aGUgY2F0ZWdvcnkgc28gd2UgY2FuIGluc2VydCB0aGUgbmV3IGl0ZW0uICovXG4gIGFkZE5ld0l0ZW0obm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLmZsYXROb2RlTWFwLmdldChub2RlKTtcbiAgICB0aGlzLl9kYXRhYmFzZS5pbnNlcnRJdGVtKHBhcmVudE5vZGUhLCAnJyk7XG4gICAgdGhpcy50cmVlQ29udHJvbC5leHBhbmQobm9kZSk7XG4gIH1cblxuICAvKiogU2F2ZSB0aGUgbm9kZSB0byBkYXRhYmFzZSAqL1xuICBzYXZlTm9kZShub2RlOiBUb2RvSXRlbUZsYXROb2RlLCBpdGVtVmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IG5lc3RlZE5vZGUgPSB0aGlzLmZsYXROb2RlTWFwLmdldChub2RlKTtcbiAgICB0aGlzLl9kYXRhYmFzZS51cGRhdGVJdGVtKG5lc3RlZE5vZGUhLCBpdGVtVmFsdWUpO1xuICB9XG59XG4iLCI8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIG1hdFRyZWVOb2RlVG9nZ2xlIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiY2hlY2tsaXN0LWxlYWYtbm9kZVwiXG4gICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJjaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChub2RlKVwiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInRvZG9MZWFmSXRlbVNlbGVjdGlvblRvZ2dsZShub2RlKVwiPnt7bm9kZS5pdGVtfX08L21hdC1jaGVja2JveD5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuXG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNOb0NvbnRlbnRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5OZXcgaXRlbS4uLjwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0ICNpdGVtVmFsdWUgcGxhY2Vob2xkZXI9XCJFeC4gTGV0dHVjZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzYXZlTm9kZShub2RlLCBpdGVtVmFsdWUudmFsdWUpXCI+U2F2ZTwvYnV0dG9uPlxuICA8L21hdC10cmVlLW5vZGU+XG5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdFRyZWVOb2RlVG9nZ2xlXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb2dnbGUgJyArIG5vZGUuaXRlbVwiPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPG1hdC1jaGVja2JveCBbY2hlY2tlZF09XCJkZXNjZW5kYW50c0FsbFNlbGVjdGVkKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cImRlc2NlbmRhbnRzUGFydGlhbGx5U2VsZWN0ZWQobm9kZSlcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJ0b2RvSXRlbVNlbGVjdGlvblRvZ2dsZShub2RlKVwiPnt7bm9kZS5pdGVtfX08L21hdC1jaGVja2JveD5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiYWRkTmV3SXRlbShub2RlKVwiPjxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICA8L21hdC10cmVlLW5vZGU+XG48L21hdC10cmVlPlxuIl19