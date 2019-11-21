(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/progress-bar'), require('@angular/material/tree'), require('tslib'), require('@angular/cdk/collections'), require('@angular/cdk/tree'), require('rxjs'), require('@angular/material/form-field'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/tree', ['exports', '@angular/common', '@angular/core', '@angular/material/button', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/input', '@angular/material/progress-bar', '@angular/material/tree', 'tslib', '@angular/cdk/collections', '@angular/cdk/tree', 'rxjs', '@angular/material/form-field', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.tree = {}), global.ng.common, global.ng.core, global.ng.material.button, global.ng.material.checkbox, global.ng.material.icon, global.ng.material.input, global.ng.material.progressBar, global.ng.material.tree, global.tslib, global.ng.cdk.collections, global.ng.cdk.tree, global.rxjs, global.ng.material.formField, global.rxjs.operators));
}(this, (function (exports, i5, i0, i2, i3, i3$1, i5$1, i6, i1, tslib, collections, i1$1, rxjs, i4, operators) { 'use strict';

    function TreeChecklistExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
        var _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-tree-node", 3);
        i0.ɵɵelement(1, "button", 4);
        i0.ɵɵelementStart(2, "mat-checkbox", 5);
        i0.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_1_Template_mat_checkbox_change_2_listener($event) { i0.ɵɵrestoreView(_r5); var node_r3 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.todoLeafItemSelectionToggle(node_r3); });
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var node_r3 = ctx.$implicit;
        var ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("checked", ctx_r0.checklistSelection.isSelected(node_r3));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(node_r3.item);
    } }
    function TreeChecklistExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
        var _r9 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-tree-node", 6);
        i0.ɵɵelement(1, "button", 4);
        i0.ɵɵelementStart(2, "mat-form-field");
        i0.ɵɵelement(3, "input", 7, 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 9);
        i0.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_2_Template_button_click_5_listener($event) { i0.ɵɵrestoreView(_r9); var node_r6 = ctx.$implicit; var _r7 = i0.ɵɵreference(4); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.saveNode(node_r6, _r7.value); });
        i0.ɵɵtext(6, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function TreeChecklistExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
        var _r12 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-tree-node", 6);
        i0.ɵɵelementStart(1, "button", 10);
        i0.ɵɵelementStart(2, "mat-icon", 11);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-checkbox", 12);
        i0.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_3_Template_mat_checkbox_change_4_listener($event) { i0.ɵɵrestoreView(_r12); var node_r10 = ctx.$implicit; var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.todoItemSelectionToggle(node_r10); });
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 13);
        i0.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_3_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r12); var node_r10 = ctx.$implicit; var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.addNewItem(node_r10); });
        i0.ɵɵelementStart(7, "mat-icon");
        i0.ɵɵtext(8, "add");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var node_r10 = ctx.$implicit;
        var ctx_r2 = i0.ɵɵnextContext();
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
            this.dataChange = new rxjs.BehaviorSubject([]);
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
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        ChecklistDatabase.ctorParameters = function () { return []; };
        ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) { return new (t || ChecklistDatabase)(); };
        ChecklistDatabase.ɵprov = i0.ɵɵdefineInjectable({ token: ChecklistDatabase, factory: function (t) { return ChecklistDatabase.ɵfac(t); }, providedIn: null });
        return ChecklistDatabase;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChecklistDatabase, [{
            type: i0.Injectable
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
            this.checklistSelection = new collections.SelectionModel(true /* multiple */);
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
            this.treeFlattener = new i1.MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
            this.treeControl = new i1$1.FlatTreeControl(this.getLevel, this.isExpandable);
            this.dataSource = new i1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
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
                ? (_a = this.checklistSelection).select.apply(_a, tslib.__spread(descendants)) : (_b = this.checklistSelection).deselect.apply(_b, tslib.__spread(descendants));
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
            { type: i0.Component, args: [{
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
        TreeChecklistExample.ɵfac = function TreeChecklistExample_Factory(t) { return new (t || TreeChecklistExample)(i0.ɵɵdirectiveInject(ChecklistDatabase)); };
        TreeChecklistExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeChecklistExample, selectors: [["tree-checklist-example"]], features: [i0.ɵɵProvidersFeature([ChecklistDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["matInput", "", "placeholder", "New item..."], ["itemValue", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["mat-icon-button", "", 3, "click"]], template: function TreeChecklistExample_Template(rf, ctx) { if (rf & 1) {
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
            } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodeToggle, i1.MatTreeNodePadding, i2.MatButton, i3.MatCheckbox, i4.MatFormField, i5$1.MatInput, i3$1.MatIcon], styles: [""] });
        return TreeChecklistExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeChecklistExample, [{
            type: i0.Component,
            args: [{
                    selector: 'tree-checklist-example',
                    templateUrl: 'tree-checklist-example.html',
                    styleUrls: ['tree-checklist-example.css'],
                    providers: [ChecklistDatabase]
                }]
        }], function () { return [{ type: ChecklistDatabase }]; }, null); })();

    function TreeDynamicExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree-node", 3);
        i0.ɵɵelement(1, "button", 4);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var node_r16 = ctx.$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", node_r16.item, " ");
    } }
    function TreeDynamicExample_mat_tree_node_2_mat_progress_bar_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-progress-bar", 8);
    } }
    function TreeDynamicExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree-node", 3);
        i0.ɵɵelementStart(1, "button", 5);
        i0.ɵɵelementStart(2, "mat-icon", 6);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(4);
        i0.ɵɵtemplate(5, TreeDynamicExample_mat_tree_node_2_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var node_r17 = ctx.$implicit;
        var ctx_r15 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("aria-label", "toggle " + node_r17.filename);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx_r15.treeControl.isExpanded(node_r17) ? "expand_more" : "chevron_right", " ");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", node_r17.item, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", node_r17.isLoading);
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
            this.dataChange = new rxjs.BehaviorSubject([]);
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
            return rxjs.merge(collectionViewer.viewChange, this.dataChange).pipe(operators.map(function () { return _this.data; }));
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
                    (_a = _this.data).splice.apply(_a, tslib.__spread([index + 1, 0], nodes));
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
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        DynamicDataSource.ctorParameters = function () { return [
            { type: i1$1.FlatTreeControl },
            { type: DynamicDatabase }
        ]; };
        DynamicDataSource.ɵfac = function DynamicDataSource_Factory(t) { return new (t || DynamicDataSource)(i0.ɵɵinject(i1$1.FlatTreeControl), i0.ɵɵinject(DynamicDatabase)); };
        DynamicDataSource.ɵprov = i0.ɵɵdefineInjectable({ token: DynamicDataSource, factory: function (t) { return DynamicDataSource.ɵfac(t); }, providedIn: null });
        return DynamicDataSource;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DynamicDataSource, [{
            type: i0.Injectable
        }], function () { return [{ type: i1$1.FlatTreeControl }, { type: DynamicDatabase }]; }, null); })();
    /**
     * @title Tree with dynamic data
     */
    var TreeDynamicExample = /** @class */ (function () {
        function TreeDynamicExample(database) {
            this.getLevel = function (node) { return node.level; };
            this.isExpandable = function (node) { return node.expandable; };
            this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
            this.treeControl = new i1$1.FlatTreeControl(this.getLevel, this.isExpandable);
            this.dataSource = new DynamicDataSource(this.treeControl, database);
            this.dataSource.data = database.initialData();
        }
        TreeDynamicExample.decorators = [
            { type: i0.Component, args: [{
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
        TreeDynamicExample.ɵfac = function TreeDynamicExample_Factory(t) { return new (t || TreeDynamicExample)(i0.ɵɵdirectiveInject(DynamicDatabase)); };
        TreeDynamicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeDynamicExample, selectors: [["tree-dynamic-example"]], features: [i0.ɵɵProvidersFeature([DynamicDatabase])], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["mode", "indeterminate", "class", "example-tree-progress-bar", 4, "ngIf"], ["mode", "indeterminate", 1, "example-tree-progress-bar"]], template: function TreeDynamicExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-tree", 0);
                i0.ɵɵtemplate(1, TreeDynamicExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
                i0.ɵɵtemplate(2, TreeDynamicExample_mat_tree_node_2_Template, 6, 4, "mat-tree-node", 2);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
            } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodePadding, i2.MatButton, i1.MatTreeNodeToggle, i3$1.MatIcon, i5.NgIf, i6.MatProgressBar], styles: [".example-tree-progress-bar[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}"] });
        return TreeDynamicExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeDynamicExample, [{
            type: i0.Component,
            args: [{
                    selector: 'tree-dynamic-example',
                    templateUrl: 'tree-dynamic-example.html',
                    styleUrls: ['tree-dynamic-example.css'],
                    providers: [DynamicDatabase]
                }]
        }], function () { return [{ type: DynamicDatabase }]; }, null); })();

    function TreeFlatOverviewExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree-node", 3);
        i0.ɵɵelement(1, "button", 4);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var node_r21 = ctx.$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", node_r21.name, " ");
    } }
    function TreeFlatOverviewExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree-node", 3);
        i0.ɵɵelementStart(1, "button", 5);
        i0.ɵɵelementStart(2, "mat-icon", 6);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var node_r22 = ctx.$implicit;
        var ctx_r20 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("aria-label", "toggle " + node_r22.name);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx_r20.treeControl.isExpanded(node_r22) ? "expand_more" : "chevron_right", " ");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", node_r22.name, " ");
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
            this.treeControl = new i1$1.FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
            this.treeFlattener = new i1.MatTreeFlattener(this._transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.children; });
            this.dataSource = new i1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
            this.hasChild = function (_, node) { return node.expandable; };
            this.dataSource.data = TREE_DATA$1;
        }
        TreeFlatOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tree-flat-overview-example',
                        templateUrl: 'tree-flat-overview-example.html',
                        styleUrls: ['tree-flat-overview-example.css'],
                    },] },
        ];
        /** @nocollapse */
        TreeFlatOverviewExample.ctorParameters = function () { return []; };
        TreeFlatOverviewExample.ɵfac = function TreeFlatOverviewExample_Factory(t) { return new (t || TreeFlatOverviewExample)(); };
        TreeFlatOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeFlatOverviewExample, selectors: [["tree-flat-overview-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]], template: function TreeFlatOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-tree", 0);
                i0.ɵɵtemplate(1, TreeFlatOverviewExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
                i0.ɵɵtemplate(2, TreeFlatOverviewExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
            } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodePadding, i2.MatButton, i1.MatTreeNodeToggle, i3$1.MatIcon], styles: [""] });
        return TreeFlatOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeFlatOverviewExample, [{
            type: i0.Component,
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
        i0.ɵɵelementStart(0, "mat-tree-node", 4);
        i0.ɵɵelement(1, "button", 5);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var node_r26 = ctx.$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", node_r26.item, " ");
    } }
    function TreeLoadmoreExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
        var _r29 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-tree-node", 4);
        i0.ɵɵelementStart(1, "button", 6);
        i0.ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_2_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r29); var node_r27 = ctx.$implicit; var ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.loadChildren(node_r27); });
        i0.ɵɵelementStart(2, "mat-icon", 7);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var node_r27 = ctx.$implicit;
        var ctx_r24 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("aria-label", "toggle " + node_r27.filename);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx_r24.treeControl.isExpanded(node_r27) ? "expand_more" : "chevron_right", " ");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", node_r27.item, " ");
    } }
    function TreeLoadmoreExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
        var _r32 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-tree-node");
        i0.ɵɵelementStart(1, "button", 8);
        i0.ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_3_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r32); var node_r30 = ctx.$implicit; var ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.loadMore(node_r30.loadMoreParentItem); });
        i0.ɵɵtext(2, " Load more... ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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
            this.childrenChange = new rxjs.BehaviorSubject([]);
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
            this.dataChange = new rxjs.BehaviorSubject([]);
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
            { type: i0.Injectable },
        ];
        LoadmoreDatabase.ɵfac = function LoadmoreDatabase_Factory(t) { return new (t || LoadmoreDatabase)(); };
        LoadmoreDatabase.ɵprov = i0.ɵɵdefineInjectable({ token: LoadmoreDatabase, factory: function (t) { return LoadmoreDatabase.ɵfac(t); }, providedIn: null });
        return LoadmoreDatabase;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoadmoreDatabase, [{
            type: i0.Injectable
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
            this.treeFlattener = new i1.MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
            this.treeControl = new i1$1.FlatTreeControl(this.getLevel, this.isExpandable);
            this.dataSource = new i1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
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
            { type: i0.Component, args: [{
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
        TreeLoadmoreExample.ɵfac = function TreeLoadmoreExample_Factory(t) { return new (t || TreeLoadmoreExample)(i0.ɵɵdirectiveInject(LoadmoreDatabase)); };
        TreeLoadmoreExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeLoadmoreExample, selectors: [["tree-loadmore-example"]], features: [i0.ɵɵProvidersFeature([LoadmoreDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"], ["mat-button", "", 3, "click"]], template: function TreeLoadmoreExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-tree", 0);
                i0.ɵɵtemplate(1, TreeLoadmoreExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
                i0.ɵɵtemplate(2, TreeLoadmoreExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
                i0.ɵɵtemplate(3, TreeLoadmoreExample_mat_tree_node_3_Template, 3, 0, "mat-tree-node", 3);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matTreeNodeDefWhen", ctx.isLoadMore);
            } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodePadding, i2.MatButton, i1.MatTreeNodeToggle, i3$1.MatIcon], styles: [""] });
        return TreeLoadmoreExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeLoadmoreExample, [{
            type: i0.Component,
            args: [{
                    selector: 'tree-loadmore-example',
                    templateUrl: 'tree-loadmore-example.html',
                    styleUrls: ['tree-loadmore-example.css'],
                    providers: [LoadmoreDatabase]
                }]
        }], function () { return [{ type: LoadmoreDatabase }]; }, null); })();

    function TreeNestedOverviewExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree-node", 3);
        i0.ɵɵelementStart(1, "li", 4);
        i0.ɵɵelement(2, "button", 5);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var node_r35 = ctx.$implicit;
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", node_r35.name, " ");
    } }
    function TreeNestedOverviewExample_mat_nested_tree_node_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-nested-tree-node");
        i0.ɵɵelementStart(1, "li");
        i0.ɵɵelementStart(2, "div", 4);
        i0.ɵɵelementStart(3, "button", 6);
        i0.ɵɵelementStart(4, "mat-icon", 7);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "ul");
        i0.ɵɵelementContainer(8, 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var node_r36 = ctx.$implicit;
        var ctx_r34 = i0.ɵɵnextContext();
        i0.ɵɵadvance(3);
        i0.ɵɵattribute("aria-label", "toggle " + node_r36.name);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx_r34.treeControl.isExpanded(node_r36) ? "expand_more" : "chevron_right", " ");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", node_r36.name, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("example-tree-invisible", !ctx_r34.treeControl.isExpanded(node_r36));
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
            this.treeControl = new i1$1.NestedTreeControl(function (node) { return node.children; });
            this.dataSource = new i1.MatTreeNestedDataSource();
            this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
            this.dataSource.data = TREE_DATA$2;
        }
        TreeNestedOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tree-nested-overview-example',
                        templateUrl: 'tree-nested-overview-example.html',
                        styleUrls: ['tree-nested-overview-example.css'],
                    },] },
        ];
        /** @nocollapse */
        TreeNestedOverviewExample.ctorParameters = function () { return []; };
        TreeNestedOverviewExample.ɵfac = function TreeNestedOverviewExample_Factory(t) { return new (t || TreeNestedOverviewExample)(); };
        TreeNestedOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeNestedOverviewExample, selectors: [["tree-nested-overview-example"]], decls: 3, vars: 3, consts: [[1, "example-tree", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", ""], [1, "mat-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["matTreeNodeOutlet", ""]], template: function TreeNestedOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-tree", 0);
                i0.ɵɵtemplate(1, TreeNestedOverviewExample_mat_tree_node_1_Template, 4, 1, "mat-tree-node", 1);
                i0.ɵɵtemplate(2, TreeNestedOverviewExample_mat_nested_tree_node_2_Template, 9, 4, "mat-nested-tree-node", 2);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
            } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodeToggle, i2.MatButton, i1.MatNestedTreeNode, i3$1.MatIcon, i1.MatTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}"] });
        return TreeNestedOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeNestedOverviewExample, [{
            type: i0.Component,
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
            { type: i0.NgModule, args: [{
                        imports: [
                            i5.CommonModule,
                            i2.MatButtonModule,
                            i3.MatCheckboxModule,
                            i3$1.MatIconModule,
                            i5$1.MatInputModule,
                            i6.MatProgressBarModule,
                            i1.MatTreeModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        TreeExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: TreeExamplesModule });
        TreeExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TreeExamplesModule_Factory(t) { return new (t || TreeExamplesModule)(); }, imports: [[
                    i5.CommonModule,
                    i2.MatButtonModule,
                    i3.MatCheckboxModule,
                    i3$1.MatIconModule,
                    i5$1.MatInputModule,
                    i6.MatProgressBarModule,
                    i1.MatTreeModule,
                ]] });
        return TreeExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TreeExamplesModule, { declarations: [TreeChecklistExample,
            TreeDynamicExample,
            TreeFlatOverviewExample,
            TreeLoadmoreExample,
            TreeNestedOverviewExample], imports: [i5.CommonModule,
            i2.MatButtonModule,
            i3.MatCheckboxModule,
            i3$1.MatIconModule,
            i5$1.MatInputModule,
            i6.MatProgressBarModule,
            i1.MatTreeModule], exports: [TreeChecklistExample,
            TreeDynamicExample,
            TreeFlatOverviewExample,
            TreeLoadmoreExample,
            TreeNestedOverviewExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i5.CommonModule,
                        i2.MatButtonModule,
                        i3.MatCheckboxModule,
                        i3$1.MatIconModule,
                        i5$1.MatInputModule,
                        i6.MatProgressBarModule,
                        i1.MatTreeModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.TreeChecklistExample = TreeChecklistExample;
    exports.TreeDynamicExample = TreeDynamicExample;
    exports.TreeExamplesModule = TreeExamplesModule;
    exports.TreeFlatOverviewExample = TreeFlatOverviewExample;
    exports.TreeLoadmoreExample = TreeLoadmoreExample;
    exports.TreeNestedOverviewExample = TreeNestedOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-tree.umd.js.map
