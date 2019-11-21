import { NgIf, CommonModule } from '@angular/common';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵelement, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵproperty, ɵɵtextInterpolate, ɵɵreference, ɵɵattribute, ɵɵtextInterpolate1, Injectable, ɵɵdefineInjectable, ɵsetClassMetadata, Component, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵProvidersFeature, ɵɵtemplate, ɵɵinject, ɵɵelementContainer, ɵɵclassProp, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTreeFlattener, MatTreeFlatDataSource, MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodeToggle, MatTreeNodePadding, MatTreeNestedDataSource, MatNestedTreeNode, MatTreeNodeOutlet, MatTreeModule } from '@angular/material/tree';
import { __spread } from 'tslib';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, merge } from 'rxjs';
import { MatFormField } from '@angular/material/form-field';
import { map } from 'rxjs/operators';

function TreeChecklistExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelement(1, "button", 4);
    ɵɵelementStart(2, "mat-checkbox", 5);
    ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_1_Template_mat_checkbox_change_2_listener($event) { ɵɵrestoreView(_r5); var node_r3 = ctx.$implicit; var ctx_r4 = ɵɵnextContext(); return ctx_r4.todoLeafItemSelectionToggle(node_r3); });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var node_r3 = ctx.$implicit;
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("checked", ctx_r0.checklistSelection.isSelected(node_r3));
    ɵɵadvance(1);
    ɵɵtextInterpolate(node_r3.item);
} }
function TreeChecklistExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 6);
    ɵɵelement(1, "button", 4);
    ɵɵelementStart(2, "mat-form-field");
    ɵɵelement(3, "input", 7, 8);
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 9);
    ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_2_Template_button_click_5_listener($event) { ɵɵrestoreView(_r9); var node_r6 = ctx.$implicit; var _r7 = ɵɵreference(4); var ctx_r8 = ɵɵnextContext(); return ctx_r8.saveNode(node_r6, _r7.value); });
    ɵɵtext(6, "Save");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function TreeChecklistExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 6);
    ɵɵelementStart(1, "button", 10);
    ɵɵelementStart(2, "mat-icon", 11);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-checkbox", 12);
    ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_3_Template_mat_checkbox_change_4_listener($event) { ɵɵrestoreView(_r12); var node_r10 = ctx.$implicit; var ctx_r11 = ɵɵnextContext(); return ctx_r11.todoItemSelectionToggle(node_r10); });
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 13);
    ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_3_Template_button_click_6_listener($event) { ɵɵrestoreView(_r12); var node_r10 = ctx.$implicit; var ctx_r13 = ɵɵnextContext(); return ctx_r13.addNewItem(node_r10); });
    ɵɵelementStart(7, "mat-icon");
    ɵɵtext(8, "add");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var node_r10 = ctx.$implicit;
    var ctx_r2 = ɵɵnextContext();
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
var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());
/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());
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
    ChecklistDatabase.ɵprov = ɵɵdefineInjectable({ token: ChecklistDatabase, factory: function (t) { return ChecklistDatabase.ɵfac(t); }, providedIn: null });
    return ChecklistDatabase;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChecklistDatabase, [{
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
    TreeChecklistExample.ɵfac = function TreeChecklistExample_Factory(t) { return new (t || TreeChecklistExample)(ɵɵdirectiveInject(ChecklistDatabase)); };
    TreeChecklistExample.ɵcmp = ɵɵdefineComponent({ type: TreeChecklistExample, selectors: [["tree-checklist-example"]], features: [ɵɵProvidersFeature([ChecklistDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["matInput", "", "placeholder", "New item..."], ["itemValue", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["mat-icon-button", "", 3, "click"]], template: function TreeChecklistExample_Template(rf, ctx) { if (rf & 1) {
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
    return TreeChecklistExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeChecklistExample, [{
        type: Component,
        args: [{
                selector: 'tree-checklist-example',
                templateUrl: 'tree-checklist-example.html',
                styleUrls: ['tree-checklist-example.css'],
                providers: [ChecklistDatabase]
            }]
    }], function () { return [{ type: ChecklistDatabase }]; }, null); })();

function TreeDynamicExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelement(1, "button", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    var node_r16 = ctx.$implicit;
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
    var node_r17 = ctx.$implicit;
    var ctx_r15 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", "toggle " + node_r17.filename);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r15.treeControl.isExpanded(node_r17) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r17.item, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", node_r17.isLoading);
} }
/** Flat node with expandable and level information */
var DynamicFlatNode = /** @class */ (function () {
    function DynamicFlatNode(item, level, expandable, isLoading) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (isLoading === void 0) { isLoading = false; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
    return DynamicFlatNode;
}());
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
var DynamicDatabase = /** @class */ (function () {
    function DynamicDatabase() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']]
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    DynamicDatabase.prototype.initialData = function () {
        return this.rootLevelNodes.map(function (name) { return new DynamicFlatNode(name, 0, true); });
    };
    DynamicDatabase.prototype.getChildren = function (node) {
        return this.dataMap.get(node);
    };
    DynamicDatabase.prototype.isExpandable = function (node) {
        return this.dataMap.has(node);
    };
    return DynamicDatabase;
}());
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var DynamicDataSource = /** @class */ (function () {
    function DynamicDataSource(_treeControl, _database) {
        this._treeControl = _treeControl;
        this._database = _database;
        this.dataChange = new BehaviorSubject([]);
    }
    Object.defineProperty(DynamicDataSource.prototype, "data", {
        get: function () { return this.dataChange.value; },
        set: function (value) {
            this._treeControl.dataNodes = value;
            this.dataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    DynamicDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this._treeControl.expansionModel.changed.subscribe(function (change) {
            if (change.added ||
                change.removed) {
                _this.handleTreeControl(change);
            }
        });
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(function () { return _this.data; }));
    };
    DynamicDataSource.prototype.disconnect = function (collectionViewer) { };
    /** Handle expand/collapse behaviors */
    DynamicDataSource.prototype.handleTreeControl = function (change) {
        var _this = this;
        if (change.added) {
            change.added.forEach(function (node) { return _this.toggleNode(node, true); });
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(function (node) { return _this.toggleNode(node, false); });
        }
    };
    /**
     * Toggle the node, remove from display list
     */
    DynamicDataSource.prototype.toggleNode = function (node, expand) {
        var _this = this;
        var children = this._database.getChildren(node.item);
        var index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(function () {
            var _a;
            if (expand) {
                var nodes = children.map(function (name) {
                    return new DynamicFlatNode(name, node.level + 1, _this._database.isExpandable(name));
                });
                (_a = _this.data).splice.apply(_a, __spread([index + 1, 0], nodes));
            }
            else {
                var count = 0;
                for (var i = index + 1; i < _this.data.length
                    && _this.data[i].level > node.level; i++, count++) { }
                _this.data.splice(index + 1, count);
            }
            // notify the change
            _this.dataChange.next(_this.data);
            node.isLoading = false;
        }, 1000);
    };
    DynamicDataSource.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DynamicDataSource.ctorParameters = function () { return [
        { type: FlatTreeControl },
        { type: DynamicDatabase }
    ]; };
    DynamicDataSource.ɵfac = function DynamicDataSource_Factory(t) { return new (t || DynamicDataSource)(ɵɵinject(FlatTreeControl), ɵɵinject(DynamicDatabase)); };
    DynamicDataSource.ɵprov = ɵɵdefineInjectable({ token: DynamicDataSource, factory: function (t) { return DynamicDataSource.ɵfac(t); }, providedIn: null });
    return DynamicDataSource;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DynamicDataSource, [{
        type: Injectable
    }], function () { return [{ type: FlatTreeControl }, { type: DynamicDatabase }]; }, null); })();
/**
 * @title Tree with dynamic data
 */
var TreeDynamicExample = /** @class */ (function () {
    function TreeDynamicExample(database) {
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
    TreeDynamicExample.decorators = [
        { type: Component, args: [{
                    selector: 'tree-dynamic-example',
                    templateUrl: 'tree-dynamic-example.html',
                    styleUrls: ['tree-dynamic-example.css'],
                    providers: [DynamicDatabase]
                },] },
    ];
    /** @nocollapse */
    TreeDynamicExample.ctorParameters = function () { return [
        { type: DynamicDatabase }
    ]; };
    TreeDynamicExample.ɵfac = function TreeDynamicExample_Factory(t) { return new (t || TreeDynamicExample)(ɵɵdirectiveInject(DynamicDatabase)); };
    TreeDynamicExample.ɵcmp = ɵɵdefineComponent({ type: TreeDynamicExample, selectors: [["tree-dynamic-example"]], features: [ɵɵProvidersFeature([DynamicDatabase])], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["mode", "indeterminate", "class", "example-tree-progress-bar", 4, "ngIf"], ["mode", "indeterminate", 1, "example-tree-progress-bar"]], template: function TreeDynamicExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-tree", 0);
            ɵɵtemplate(1, TreeDynamicExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
            ɵɵtemplate(2, TreeDynamicExample_mat_tree_node_2_Template, 6, 4, "mat-tree-node", 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
            ɵɵadvance(2);
            ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
        } }, directives: [MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodePadding, MatButton, MatTreeNodeToggle, MatIcon, NgIf, MatProgressBar], styles: [".example-tree-progress-bar[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}"] });
    return TreeDynamicExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tree-dynamic-example',
                templateUrl: 'tree-dynamic-example.html',
                styleUrls: ['tree-dynamic-example.css'],
                providers: [DynamicDatabase]
            }]
    }], function () { return [{ type: DynamicDatabase }]; }, null); })();

function TreeFlatOverviewExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelement(1, "button", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    var node_r21 = ctx.$implicit;
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
    var node_r22 = ctx.$implicit;
    var ctx_r20 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", "toggle " + node_r22.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r20.treeControl.isExpanded(node_r22) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r22.name, " ");
} }
var TREE_DATA$1 = [
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
                    { name: 'Brussel sprouts' },
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
 * @title Tree with flat nodes
 */
var TreeFlatOverviewExample = /** @class */ (function () {
    function TreeFlatOverviewExample() {
        this._transformer = function (node, level) {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
        this.treeFlattener = new MatTreeFlattener(this._transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.children; });
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = function (_, node) { return node.expandable; };
        this.dataSource.data = TREE_DATA$1;
    }
    TreeFlatOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'tree-flat-overview-example',
                    templateUrl: 'tree-flat-overview-example.html',
                    styleUrls: ['tree-flat-overview-example.css'],
                },] },
    ];
    /** @nocollapse */
    TreeFlatOverviewExample.ctorParameters = function () { return []; };
    TreeFlatOverviewExample.ɵfac = function TreeFlatOverviewExample_Factory(t) { return new (t || TreeFlatOverviewExample)(); };
    TreeFlatOverviewExample.ɵcmp = ɵɵdefineComponent({ type: TreeFlatOverviewExample, selectors: [["tree-flat-overview-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]], template: function TreeFlatOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-tree", 0);
            ɵɵtemplate(1, TreeFlatOverviewExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
            ɵɵtemplate(2, TreeFlatOverviewExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
            ɵɵadvance(2);
            ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
        } }, directives: [MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodePadding, MatButton, MatTreeNodeToggle, MatIcon], styles: [""] });
    return TreeFlatOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeFlatOverviewExample, [{
        type: Component,
        args: [{
                selector: 'tree-flat-overview-example',
                templateUrl: 'tree-flat-overview-example.html',
                styleUrls: ['tree-flat-overview-example.css'],
            }]
    }], function () { return []; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function TreeLoadmoreExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 4);
    ɵɵelement(1, "button", 5);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    var node_r26 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", node_r26.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    var _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 4);
    ɵɵelementStart(1, "button", 6);
    ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_2_Template_button_click_1_listener($event) { ɵɵrestoreView(_r29); var node_r27 = ctx.$implicit; var ctx_r28 = ɵɵnextContext(); return ctx_r28.loadChildren(node_r27); });
    ɵɵelementStart(2, "mat-icon", 7);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵelementEnd();
} if (rf & 2) {
    var node_r27 = ctx.$implicit;
    var ctx_r24 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", "toggle " + node_r27.filename);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r24.treeControl.isExpanded(node_r27) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r27.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    var _r32 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node");
    ɵɵelementStart(1, "button", 8);
    ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_3_Template_button_click_1_listener($event) { ɵɵrestoreView(_r32); var node_r30 = ctx.$implicit; var ctx_r31 = ɵɵnextContext(); return ctx_r31.loadMore(node_r30.loadMoreParentItem); });
    ɵɵtext(2, " Load more... ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
var LOAD_MORE = 'LOAD_MORE';
/** Nested node */
var LoadmoreNode = /** @class */ (function () {
    function LoadmoreNode(item, hasChildren, loadMoreParentItem) {
        if (hasChildren === void 0) { hasChildren = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new BehaviorSubject([]);
    }
    Object.defineProperty(LoadmoreNode.prototype, "children", {
        get: function () {
            return this.childrenChange.value;
        },
        enumerable: true,
        configurable: true
    });
    return LoadmoreNode;
}());
/** Flat node with expandable and level information */
var LoadmoreFlatNode = /** @class */ (function () {
    function LoadmoreFlatNode(item, level, expandable, loadMoreParentItem) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
    return LoadmoreFlatNode;
}());
/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
var LoadmoreDatabase = /** @class */ (function () {
    function LoadmoreDatabase() {
        this.batchNumber = 5;
        this.dataChange = new BehaviorSubject([]);
        this.nodeMap = new Map();
        /** The data */
        this.rootLevelNodes = ['Vegetables', 'Fruits'];
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
        ]);
    }
    LoadmoreDatabase.prototype.initialize = function () {
        var _this = this;
        var data = this.rootLevelNodes.map(function (name) { return _this._generateNode(name); });
        this.dataChange.next(data);
    };
    /** Expand a node whose children are not loaded */
    LoadmoreDatabase.prototype.loadMore = function (item, onlyFirstTime) {
        var _this = this;
        if (onlyFirstTime === void 0) { onlyFirstTime = false; }
        if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
        }
        var parent = this.nodeMap.get(item);
        var children = this.dataMap.get(item);
        if (onlyFirstTime && parent.children.length > 0) {
            return;
        }
        var newChildrenNumber = parent.children.length + this.batchNumber;
        var nodes = children.slice(0, newChildrenNumber)
            .map(function (name) { return _this._generateNode(name); });
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    };
    LoadmoreDatabase.prototype._generateNode = function (item) {
        if (this.nodeMap.has(item)) {
            return this.nodeMap.get(item);
        }
        var result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    };
    LoadmoreDatabase.decorators = [
        { type: Injectable },
    ];
    LoadmoreDatabase.ɵfac = function LoadmoreDatabase_Factory(t) { return new (t || LoadmoreDatabase)(); };
    LoadmoreDatabase.ɵprov = ɵɵdefineInjectable({ token: LoadmoreDatabase, factory: function (t) { return LoadmoreDatabase.ɵfac(t); }, providedIn: null });
    return LoadmoreDatabase;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoadmoreDatabase, [{
        type: Injectable
    }], null, null); })();
/**
 * @title Tree with partially loaded data
 */
var TreeLoadmoreExample = /** @class */ (function () {
    function TreeLoadmoreExample(_database) {
        var _this = this;
        this._database = _database;
        this.nodeMap = new Map();
        this.getChildren = function (node) { return node.childrenChange; };
        this.transformer = function (node, level) {
            var existingNode = _this.nodeMap.get(node.item);
            if (existingNode) {
                return existingNode;
            }
            var newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            _this.nodeMap.set(node.item, newNode);
            return newNode;
        };
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.isLoadMore = function (_, _nodeData) { return _nodeData.item === LOAD_MORE; };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        _database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
        _database.initialize();
    }
    /** Load more nodes from data source */
    TreeLoadmoreExample.prototype.loadMore = function (item) {
        this._database.loadMore(item);
    };
    TreeLoadmoreExample.prototype.loadChildren = function (node) {
        this._database.loadMore(node.item, true);
    };
    TreeLoadmoreExample.decorators = [
        { type: Component, args: [{
                    selector: 'tree-loadmore-example',
                    templateUrl: 'tree-loadmore-example.html',
                    styleUrls: ['tree-loadmore-example.css'],
                    providers: [LoadmoreDatabase]
                },] },
    ];
    /** @nocollapse */
    TreeLoadmoreExample.ctorParameters = function () { return [
        { type: LoadmoreDatabase }
    ]; };
    TreeLoadmoreExample.ɵfac = function TreeLoadmoreExample_Factory(t) { return new (t || TreeLoadmoreExample)(ɵɵdirectiveInject(LoadmoreDatabase)); };
    TreeLoadmoreExample.ɵcmp = ɵɵdefineComponent({ type: TreeLoadmoreExample, selectors: [["tree-loadmore-example"]], features: [ɵɵProvidersFeature([LoadmoreDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"], ["mat-button", "", 3, "click"]], template: function TreeLoadmoreExample_Template(rf, ctx) { if (rf & 1) {
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
    return TreeLoadmoreExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeLoadmoreExample, [{
        type: Component,
        args: [{
                selector: 'tree-loadmore-example',
                templateUrl: 'tree-loadmore-example.html',
                styleUrls: ['tree-loadmore-example.css'],
                providers: [LoadmoreDatabase]
            }]
    }], function () { return [{ type: LoadmoreDatabase }]; }, null); })();

function TreeNestedOverviewExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelementStart(1, "li", 4);
    ɵɵelement(2, "button", 5);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var node_r35 = ctx.$implicit;
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
    var node_r36 = ctx.$implicit;
    var ctx_r34 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵattribute("aria-label", "toggle " + node_r36.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r34.treeControl.isExpanded(node_r36) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r36.name, " ");
    ɵɵadvance(1);
    ɵɵclassProp("example-tree-invisible", !ctx_r34.treeControl.isExpanded(node_r36));
} }
var TREE_DATA$2 = [
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
                    { name: 'Brussel sprouts' },
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
 * @title Tree with nested nodes
 */
var TreeNestedOverviewExample = /** @class */ (function () {
    function TreeNestedOverviewExample() {
        this.treeControl = new NestedTreeControl(function (node) { return node.children; });
        this.dataSource = new MatTreeNestedDataSource();
        this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
        this.dataSource.data = TREE_DATA$2;
    }
    TreeNestedOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'tree-nested-overview-example',
                    templateUrl: 'tree-nested-overview-example.html',
                    styleUrls: ['tree-nested-overview-example.css'],
                },] },
    ];
    /** @nocollapse */
    TreeNestedOverviewExample.ctorParameters = function () { return []; };
    TreeNestedOverviewExample.ɵfac = function TreeNestedOverviewExample_Factory(t) { return new (t || TreeNestedOverviewExample)(); };
    TreeNestedOverviewExample.ɵcmp = ɵɵdefineComponent({ type: TreeNestedOverviewExample, selectors: [["tree-nested-overview-example"]], decls: 3, vars: 3, consts: [[1, "example-tree", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", ""], [1, "mat-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["matTreeNodeOutlet", ""]], template: function TreeNestedOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-tree", 0);
            ɵɵtemplate(1, TreeNestedOverviewExample_mat_tree_node_1_Template, 4, 1, "mat-tree-node", 1);
            ɵɵtemplate(2, TreeNestedOverviewExample_mat_nested_tree_node_2_Template, 9, 4, "mat-nested-tree-node", 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
            ɵɵadvance(2);
            ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
        } }, directives: [MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodeToggle, MatButton, MatNestedTreeNode, MatIcon, MatTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}"] });
    return TreeNestedOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeNestedOverviewExample, [{
        type: Component,
        args: [{
                selector: 'tree-nested-overview-example',
                templateUrl: 'tree-nested-overview-example.html',
                styleUrls: ['tree-nested-overview-example.css'],
            }]
    }], function () { return []; }, null); })();

var EXAMPLES = [
    TreeChecklistExample,
    TreeDynamicExample,
    TreeFlatOverviewExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample,
];
var TreeExamplesModule = /** @class */ (function () {
    function TreeExamplesModule() {
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
    TreeExamplesModule.ɵmod = ɵɵdefineNgModule({ type: TreeExamplesModule });
    TreeExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function TreeExamplesModule_Factory(t) { return new (t || TreeExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatCheckboxModule,
                MatIconModule,
                MatInputModule,
                MatProgressBarModule,
                MatTreeModule,
            ]] });
    return TreeExamplesModule;
}());
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
