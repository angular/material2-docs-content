/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
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
const TREE_DATA = [
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
 * \@title Tree with nested nodes
 */
export class TreeNestedOverviewExample {
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
        this.dataSource.data = TREE_DATA;
    }
}
TreeNestedOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-nested-overview-example',
                template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n    <li class=\"mat-tree-node\">\n      <!-- use a disabled button to provide padding for tree leaf -->\n      <button mat-icon-button disabled></button>\n      {{node.name}}\n    </li>\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\n    <li>\n      <div class=\"mat-tree-node\">\n        <button mat-icon-button matTreeNodeToggle\n                [attr.aria-label]=\"'toggle ' + node.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n        {{node.name}}\n      </div>\n      <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n        <ng-container matTreeNodeOutlet></ng-container>\n      </ul>\n    </li>\n  </mat-nested-tree-node>\n</mat-tree>\n",
                styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n"]
            }] }
];
/** @nocollapse */
TreeNestedOverviewExample.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    TreeNestedOverviewExample.prototype.treeControl;
    /** @type {?} */
    TreeNestedOverviewExample.prototype.dataSource;
    /** @type {?} */
    TreeNestedOverviewExample.prototype.hasChild;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90cmVlLW5lc3RlZC1vdmVydmlldy90cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7QUFNL0QsdUJBR0M7OztJQUZDLHdCQUFhOztJQUNiLDRCQUFzQjs7O01BR2xCLFNBQVMsR0FBZTtJQUM1QjtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsUUFBUSxFQUFFO1lBQ1IsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO1lBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ2hCLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBQztTQUN0QjtLQUNGLEVBQUU7UUFDRCxJQUFJLEVBQUUsWUFBWTtRQUNsQixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUU7b0JBQ1IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO29CQUNsQixFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQztpQkFDMUI7YUFDRixFQUFFO2dCQUNELElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRTtvQkFDUixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7b0JBQ2xCLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQztpQkFDbEI7YUFDRjtTQUNGO0tBQ0Y7Q0FDRjs7OztBQVVELE1BQU0sT0FBTyx5QkFBeUI7SUFJcEM7UUFIQSxnQkFBVyxHQUFHLElBQUksaUJBQWlCOzs7O1FBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUM7UUFDckUsZUFBVSxHQUFHLElBQUksdUJBQXVCLEVBQVksQ0FBQztRQU1yRCxhQUFROzs7OztRQUFHLENBQUMsQ0FBUyxFQUFFLElBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1FBSHBGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsb25DQUFnRDs7YUFFakQ7Ozs7OztJQUVDLGdEQUFxRTs7SUFDckUsK0NBQXFEOztJQU1yRCw2Q0FBc0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05lc3RlZFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRyZWVOZXN0ZWREYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcblxuLyoqXG4gKiBGb29kIGRhdGEgd2l0aCBuZXN0ZWQgc3RydWN0dXJlLlxuICogRWFjaCBub2RlIGhhcyBhIG5hbWUgYW5kIGFuIG9wdGlvbmEgbGlzdCBvZiBjaGlsZHJlbi5cbiAqL1xuaW50ZXJmYWNlIEZvb2ROb2RlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjaGlsZHJlbj86IEZvb2ROb2RlW107XG59XG5cbmNvbnN0IFRSRUVfREFUQTogRm9vZE5vZGVbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdGcnVpdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtuYW1lOiAnQXBwbGUnfSxcbiAgICAgIHtuYW1lOiAnQmFuYW5hJ30sXG4gICAgICB7bmFtZTogJ0ZydWl0IGxvb3BzJ30sXG4gICAgXVxuICB9LCB7XG4gICAgbmFtZTogJ1ZlZ2V0YWJsZXMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHcmVlbicsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge25hbWU6ICdCcm9jY29saSd9LFxuICAgICAgICAgIHtuYW1lOiAnQnJ1c3NlbCBzcHJvdXRzJ30sXG4gICAgICAgIF1cbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ09yYW5nZScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge25hbWU6ICdQdW1wa2lucyd9LFxuICAgICAgICAgIHtuYW1lOiAnQ2Fycm90cyd9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBuZXN0ZWQgbm9kZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RyZWUtbmVzdGVkLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVOZXN0ZWRPdmVydmlld0V4YW1wbGUge1xuICB0cmVlQ29udHJvbCA9IG5ldyBOZXN0ZWRUcmVlQ29udHJvbDxGb29kTm9kZT4obm9kZSA9PiBub2RlLmNoaWxkcmVuKTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxGb29kTm9kZT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFRSRUVfREFUQTtcbiAgfVxuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgbm9kZTogRm9vZE5vZGUpID0+ICEhbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG59XG4iXX0=