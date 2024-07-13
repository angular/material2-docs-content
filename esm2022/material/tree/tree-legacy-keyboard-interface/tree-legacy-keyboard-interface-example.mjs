import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER } from '@angular/cdk/a11y';
import { MatTreeModule } from '@angular/material/tree';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
const TREE_DATA = [
    {
        name: 'Fruit',
        expandable: true,
        level: 0,
    },
    {
        name: 'Apple',
        expandable: false,
        level: 1,
    },
    {
        name: 'Banana',
        expandable: false,
        level: 1,
    },
    {
        name: 'Fruit loops',
        expandable: false,
        level: 1,
    },
    {
        name: 'Vegetables',
        expandable: true,
        level: 0,
    },
    {
        name: 'Green',
        expandable: true,
        level: 1,
    },
    {
        name: 'Broccoli',
        expandable: false,
        level: 2,
    },
    {
        name: 'Brussels sprouts',
        expandable: false,
        level: 2,
    },
    {
        name: 'Orange',
        expandable: true,
        level: 1,
    },
    {
        name: 'Pumpkins',
        expandable: false,
        level: 2,
    },
    {
        name: 'Carrots',
        expandable: false,
        level: 2,
    },
];
/**
 * @title Tree with flat nodes
 */
export class TreeLegacyKeyboardInterfaceExample {
    constructor() {
        this.treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
        this.dataSource = new ArrayDataSource(TREE_DATA);
        this.hasChild = (_, node) => node.expandable;
    }
    getParentNode(node) {
        const nodeIndex = TREE_DATA.indexOf(node);
        for (let i = nodeIndex - 1; i >= 0; i--) {
            if (TREE_DATA[i].level === node.level - 1) {
                return TREE_DATA[i];
            }
        }
        return null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: TreeLegacyKeyboardInterfaceExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: TreeLegacyKeyboardInterfaceExample, isStandalone: true, selector: "tree-legacy-keyboard-interface-example", providers: [NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER], ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding\n                 isExpandable\n                 [isExpanded]=\"true\"\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["tabIndex", "disabled"], outputs: ["activation", "expandedChange"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: TreeLegacyKeyboardInterfaceExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-legacy-keyboard-interface-example', standalone: true, imports: [MatTreeModule, MatButtonModule, MatIconModule], providers: [NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding\n                 isExpandable\n                 [isExpanded]=\"true\"\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sZWdhY3kta2V5Ym9hcmQtaW50ZXJmYWNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtbGVnYWN5LWtleWJvYXJkLWludGVyZmFjZS90cmVlLWxlZ2FjeS1rZXlib2FyZC1pbnRlcmZhY2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1sZWdhY3kta2V5Ym9hcmQtaW50ZXJmYWNlL3RyZWUtbGVnYWN5LWtleWJvYXJkLWludGVyZmFjZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLHNDQUFzQyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDekUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRXJELE1BQU0sU0FBUyxHQUFzQjtJQUNuQztRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLElBQUk7UUFDaEIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRDtRQUNFLElBQUksRUFBRSxhQUFhO1FBQ25CLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRDtRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLElBQUk7UUFDaEIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRDtRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLENBQUM7S0FDVDtDQUNGLENBQUM7QUFTRjs7R0FFRztBQVVILE1BQU0sT0FBTyxrQ0FBa0M7SUFUL0M7UUFVRSxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FDeEIsQ0FBQztRQUVGLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1QyxhQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQUUsSUFBcUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztLQWFsRTtJQVhDLGFBQWEsQ0FBQyxJQUFxQjtRQUNqQyxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFDLEtBQUssSUFBSSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDeEMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzhHQXBCVSxrQ0FBa0M7a0dBQWxDLGtDQUFrQyxxRkFIbEMsQ0FBQyxzQ0FBc0MsQ0FBQywwQkNsRnJELDZ3QkFrQkEsNEhEK0RZLGFBQWEsbWpCQUFFLGVBQWUsMklBQUUsYUFBYTs7MkZBSTVDLGtDQUFrQztrQkFUOUMsU0FBUzsrQkFDRSx3Q0FBd0MsY0FHdEMsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUMsYUFDN0MsQ0FBQyxzQ0FBc0MsQ0FBQyxtQkFDbEMsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FycmF5RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge05PT1BfVFJFRV9LRVlfTUFOQUdFUl9GQUNUT1JZX1BST1ZJREVSfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge01hdFRyZWVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuXG5jb25zdCBUUkVFX0RBVEE6IEV4YW1wbGVGbGF0Tm9kZVtdID0gW1xuICB7XG4gICAgbmFtZTogJ0ZydWl0JyxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGxldmVsOiAwLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0FwcGxlJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdCYW5hbmEnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAxLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0ZydWl0IGxvb3BzJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdWZWdldGFibGVzJyxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGxldmVsOiAwLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0dyZWVuJyxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGxldmVsOiAxLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0Jyb2Njb2xpJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdCcnVzc2VscyBzcHJvdXRzJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdPcmFuZ2UnLFxuICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgbGV2ZWw6IDEsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUHVtcGtpbnMnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAyLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0NhcnJvdHMnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAyLFxuICB9LFxuXTtcblxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5pbnRlcmZhY2UgRXhhbXBsZUZsYXROb2RlIHtcbiAgZXhwYW5kYWJsZTogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggZmxhdCBub2Rlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWxlZ2FjeS1rZXlib2FyZC1pbnRlcmZhY2UtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1sZWdhY3kta2V5Ym9hcmQtaW50ZXJmYWNlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0cmVlLWxlZ2FjeS1rZXlib2FyZC1pbnRlcmZhY2UtZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFRyZWVNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW05PT1BfVFJFRV9LRVlfTUFOQUdFUl9GQUNUT1JZX1BST1ZJREVSXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVMZWdhY3lLZXlib2FyZEludGVyZmFjZUV4YW1wbGUge1xuICB0cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8RXhhbXBsZUZsYXROb2RlPihcbiAgICBub2RlID0+IG5vZGUubGV2ZWwsXG4gICAgbm9kZSA9PiBub2RlLmV4cGFuZGFibGUsXG4gICk7XG5cbiAgZGF0YVNvdXJjZSA9IG5ldyBBcnJheURhdGFTb3VyY2UoVFJFRV9EQVRBKTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IEV4YW1wbGVGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGdldFBhcmVudE5vZGUobm9kZTogRXhhbXBsZUZsYXROb2RlKSB7XG4gICAgY29uc3Qgbm9kZUluZGV4ID0gVFJFRV9EQVRBLmluZGV4T2Yobm9kZSk7XG5cbiAgICBmb3IgKGxldCBpID0gbm9kZUluZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmIChUUkVFX0RBVEFbaV0ubGV2ZWwgPT09IG5vZGUubGV2ZWwgLSAxKSB7XG4gICAgICAgIHJldHVybiBUUkVFX0RBVEFbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsIjxtYXQtdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBsZWFmIG5vZGVzIC0tPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIG1hdFRyZWVOb2RlUGFkZGluZ1xuICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtdHJlZS1ub2RlXCJcbiAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCI+XG4gICAgPCEtLSB1c2UgYSBkaXNhYmxlZCBidXR0b24gdG8gcHJvdmlkZSBwYWRkaW5nIGZvciB0cmVlIGxlYWYgLS0+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L21hdC10cmVlLW5vZGU+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBleHBhbmRhYmxlIG5vZGVzIC0tPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIiBtYXRUcmVlTm9kZVBhZGRpbmdcbiAgICAgICAgICAgICAgICAgaXNFeHBhbmRhYmxlXG4gICAgICAgICAgICAgICAgIFtpc0V4cGFuZGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtdHJlZS1ub2RlXCJcbiAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCI+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L21hdC10cmVlLW5vZGU+XG48L21hdC10cmVlPlxuIl19