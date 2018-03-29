import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { Observable, BehaviorSubject } from 'rxjs';
/**
 * Node for to-do item
 */
export declare class TodoItemNode {
    children: TodoItemNode[];
    item: string;
}
/** Flat to-do item node with expandable and level information */
export declare class TodoItemFlatNode {
    item: string;
    level: number;
    expandable: boolean;
}
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
export declare class ChecklistDatabase {
    dataChange: BehaviorSubject<TodoItemNode[]>;
    readonly data: TodoItemNode[];
    constructor();
    initialize(): void;
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    buildFileTree(value: any, level: number): any[];
    /** Add an item to to-do list */
    insertItem(parent: TodoItemNode, name: string): void;
    updateItem(node: TodoItemNode, name: string): void;
}
/**
 * @title Tree with checkboxes
 */
export declare class TreeChecklistExample {
    private database;
    /** Map from flat node to nested node. This helps us finding the nested node to be modified */
    flatNodeMap: Map<TodoItemFlatNode, TodoItemNode>;
    /** Map from nested node to flattened node. This helps us to keep the same object for selection */
    nestedNodeMap: Map<TodoItemNode, TodoItemFlatNode>;
    /** A selected parent node to be inserted */
    selectedParent: TodoItemFlatNode | null;
    /** The new item's name */
    newItemName: string;
    treeControl: FlatTreeControl<TodoItemFlatNode>;
    treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;
    dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;
    /** The selection for checklist */
    checklistSelection: SelectionModel<TodoItemFlatNode>;
    constructor(database: ChecklistDatabase);
    getLevel: (node: TodoItemFlatNode) => number;
    isExpandable: (node: TodoItemFlatNode) => boolean;
    getChildren: (node: TodoItemNode) => Observable<TodoItemNode[]>;
    hasChild: (_: number, _nodeData: TodoItemFlatNode) => boolean;
    hasNoContent: (_: number, _nodeData: TodoItemFlatNode) => boolean;
    /**
     * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
     */
    transformer: (node: TodoItemNode, level: number) => TodoItemFlatNode;
    /** Whether all the descendants of the node are selected */
    descendantsAllSelected(node: TodoItemFlatNode): boolean;
    /** Whether part of the descendants are selected */
    descendantsPartiallySelected(node: TodoItemFlatNode): boolean;
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    todoItemSelectionToggle(node: TodoItemFlatNode): void;
    /** Select the category so we can insert the new item. */
    addNewItem(node: TodoItemFlatNode): void;
    /** Save the node to database */
    saveNode(node: TodoItemFlatNode, itemValue: string): void;
}
