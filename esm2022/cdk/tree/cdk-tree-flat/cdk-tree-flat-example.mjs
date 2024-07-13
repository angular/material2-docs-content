import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl, CdkTreeModule } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
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
export class CdkTreeFlatExample {
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
    shouldRender(node) {
        let parent = this.getParentNode(node);
        while (parent) {
            if (!parent.isExpanded) {
                return false;
            }
            parent = this.getParentNode(parent);
        }
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkTreeFlatExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: CdkTreeFlatExample, isStandalone: true, selector: "cdk-tree-flat-example", ngImport: i0, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 (expandedChange)=\"node.isExpanded = $event\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodePadding, selector: "[cdkTreeNodePadding]", inputs: ["cdkTreeNodePadding", "cdkTreeNodePaddingIndent"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNode, selector: "cdk-tree-node", inputs: ["role", "isExpandable", "isExpanded", "isDisabled", "cdkTreeNodeTypeaheadLabel"], outputs: ["activation", "expandedChange"], exportAs: ["cdkTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkTreeFlatExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-flat-example', standalone: true, imports: [CdkTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 (expandedChange)=\"node.isExpanded = $event\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtZmxhdC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RyZWUvY2RrLXRyZWUtZmxhdC9jZGstdHJlZS1mbGF0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1mbGF0L2Nkay10cmVlLWZsYXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxlQUFlLEVBQUUsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFFekQsTUFBTSxTQUFTLEdBQXNCO0lBQ25DO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUsSUFBSTtRQUNoQixLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLGFBQWE7UUFDbkIsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUsSUFBSTtRQUNoQixLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLElBQUk7UUFDaEIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsQ0FBQztLQUNUO0NBQ0YsQ0FBQztBQVVGOztHQUVHO0FBU0gsTUFBTSxPQUFPLGtCQUFrQjtJQVIvQjtRQVNFLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUN4QixDQUFDO1FBRUYsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVDLGFBQVEsR0FBRyxDQUFDLENBQVMsRUFBRSxJQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBd0JsRTtJQXRCQyxhQUFhLENBQUMsSUFBcUI7UUFDakMsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQyxLQUFLLElBQUksQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUMxQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDO1FBQ0gsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFxQjtRQUNoQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN2QixPQUFPLEtBQUssQ0FBQztZQUNmLENBQUM7WUFDRCxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzhHQS9CVSxrQkFBa0I7a0dBQWxCLGtCQUFrQixpRkNuRi9CLHcyQ0EyQkEsNEhEcURZLGFBQWEsZzBCQUFFLGVBQWUsMklBQUUsYUFBYTs7MkZBRzVDLGtCQUFrQjtrQkFSOUIsU0FBUzsrQkFDRSx1QkFBdUIsY0FHckIsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUMsbUJBQ3ZDLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcnJheURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0ZsYXRUcmVlQ29udHJvbCwgQ2RrVHJlZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5jb25zdCBUUkVFX0RBVEE6IEV4YW1wbGVGbGF0Tm9kZVtdID0gW1xuICB7XG4gICAgbmFtZTogJ0ZydWl0JyxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGxldmVsOiAwLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0FwcGxlJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdCYW5hbmEnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAxLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0ZydWl0IGxvb3BzJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdWZWdldGFibGVzJyxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGxldmVsOiAwLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0dyZWVuJyxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGxldmVsOiAxLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0Jyb2Njb2xpJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdCcnVzc2VscyBzcHJvdXRzJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdPcmFuZ2UnLFxuICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgbGV2ZWw6IDEsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUHVtcGtpbnMnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAyLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0NhcnJvdHMnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAyLFxuICB9LFxuXTtcblxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5pbnRlcmZhY2UgRXhhbXBsZUZsYXROb2RlIHtcbiAgZXhwYW5kYWJsZTogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBpc0V4cGFuZGVkPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIGZsYXQgbm9kZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXRyZWUtZmxhdC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdHJlZS1mbGF0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnY2RrLXRyZWUtZmxhdC1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtUcmVlTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZUZsYXRFeGFtcGxlIHtcbiAgdHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPEV4YW1wbGVGbGF0Tm9kZT4oXG4gICAgbm9kZSA9PiBub2RlLmxldmVsLFxuICAgIG5vZGUgPT4gbm9kZS5leHBhbmRhYmxlLFxuICApO1xuXG4gIGRhdGFTb3VyY2UgPSBuZXcgQXJyYXlEYXRhU291cmNlKFRSRUVfREFUQSk7XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBub2RlOiBFeGFtcGxlRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBnZXRQYXJlbnROb2RlKG5vZGU6IEV4YW1wbGVGbGF0Tm9kZSkge1xuICAgIGNvbnN0IG5vZGVJbmRleCA9IFRSRUVfREFUQS5pbmRleE9mKG5vZGUpO1xuXG4gICAgZm9yIChsZXQgaSA9IG5vZGVJbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoVFJFRV9EQVRBW2ldLmxldmVsID09PSBub2RlLmxldmVsIC0gMSkge1xuICAgICAgICByZXR1cm4gVFJFRV9EQVRBW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2hvdWxkUmVuZGVyKG5vZGU6IEV4YW1wbGVGbGF0Tm9kZSkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudE5vZGUobm9kZSk7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgaWYgKCFwYXJlbnQuaXNFeHBhbmRlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSB0aGlzLmdldFBhcmVudE5vZGUocGFyZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIjxjZGstdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBsZWFmIG5vZGVzIC0tPlxuICA8Y2RrLXRyZWUtbm9kZSAqY2RrVHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIGNka1RyZWVOb2RlUGFkZGluZ1xuICAgICAgICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJzaG91bGRSZW5kZXIobm9kZSkgPyAnZmxleCcgOiAnbm9uZSdcIlxuICAgICAgICAgICAgICAgICBbaXNEaXNhYmxlZF09XCIhc2hvdWxkUmVuZGVyKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLXRyZWUtbm9kZVwiPlxuICAgIDwhLS0gdXNlIGEgZGlzYWJsZWQgYnV0dG9uIHRvIHByb3ZpZGUgcGFkZGluZyBmb3IgdHJlZSBsZWFmIC0tPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9jZGstdHJlZS1ub2RlPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgZXhwYW5kYWJsZSBub2RlcyAtLT5cbiAgPGNkay10cmVlLW5vZGUgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCIgY2RrVHJlZU5vZGVQYWRkaW5nXG4gICAgICAgICAgICAgICAgIGNka1RyZWVOb2RlVG9nZ2xlIFtjZGtUcmVlTm9kZVR5cGVhaGVhZExhYmVsXT1cIm5vZGUubmFtZVwiXG4gICAgICAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cInNob3VsZFJlbmRlcihub2RlKSA/ICdmbGV4JyA6ICdub25lJ1wiXG4gICAgICAgICAgICAgICAgIFtpc0Rpc2FibGVkXT1cIiFzaG91bGRSZW5kZXIobm9kZSlcIlxuICAgICAgICAgICAgICAgICAoZXhwYW5kZWRDaGFuZ2UpPVwibm9kZS5pc0V4cGFuZGVkID0gJGV2ZW50XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLXRyZWUtbm9kZVwiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNka1RyZWVOb2RlVG9nZ2xlXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb2dnbGUgJyArIG5vZGUubmFtZVwiXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJub2RlLmV4cGFuZGFibGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L2Nkay10cmVlLW5vZGU+XG48L2Nkay10cmVlPlxuIl19