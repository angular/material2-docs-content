import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
const FLAT_TREE_DATA = [
    {
        name: 'Flat Group 1',
        children: [
            { name: 'Flat Leaf 1.1' },
            { name: 'Flat Leaf 1.2' },
            { name: 'Flat Leaf 1.3' },
        ]
    }, {
        name: 'Flat Group 2',
        children: [
            {
                name: 'Flat Group 2.1',
                children: [
                    { name: 'Flat Leaf 2.1.1' },
                    { name: 'Flat Leaf 2.1.2' },
                    { name: 'Flat Leaf 2.1.3' },
                ]
            }
        ]
    },
];
/**
 * @title Testing with MatTreeHarness
 */
export class TreeHarnessExample {
    constructor() {
        this._transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
        this.treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.dataSource.data = FLAT_TREE_DATA;
    }
}
TreeHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TreeHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TreeHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: TreeHarnessExample, selector: "tree-harness-example", ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n", components: [{ type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }, { type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TreeHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-harness-example', template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n" }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtaGFybmVzcy90cmVlLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1oYXJuZXNzL3RyZWUtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBTy9FLE1BQU0sY0FBYyxHQUFXO0lBQzdCO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsUUFBUSxFQUFFO1lBQ1IsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFDO1lBQ3ZCLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBQztZQUN2QixFQUFDLElBQUksRUFBRSxlQUFlLEVBQUM7U0FDeEI7S0FDRixFQUFFO1FBQ0QsSUFBSSxFQUFFLGNBQWM7UUFDcEIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsUUFBUSxFQUFFO29CQUNSLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFDO29CQUN6QixFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQztvQkFDekIsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUM7aUJBQzFCO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQVFGOztHQUVHO0FBS0gsTUFBTSxPQUFPLGtCQUFrQjtJQWlCN0I7UUFoQlEsaUJBQVksR0FBRyxDQUFDLElBQVUsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUNuRCxPQUFPO2dCQUNMLFVBQVUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUN2RCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLEtBQUs7YUFDYixDQUFDO1FBQ0osQ0FBQyxDQUFBO1FBRUQsZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWpELGtCQUFhLEdBQUcsSUFBSSxnQkFBZ0IsQ0FDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNGLGVBQVUsR0FBRyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBTTdFLGFBQVEsR0FBRyxDQUFDLENBQVMsRUFBRSxJQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBSC9ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztJQUN4QyxDQUFDOzt1SEFuQlUsa0JBQWtCOzJHQUFsQixrQkFBa0IsNERDN0MvQiw4eUJBa0JBO21HRDJCYSxrQkFBa0I7a0JBSjlCLFNBQVM7K0JBQ0Usc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VHJlZUZsYXREYXRhU291cmNlLCBNYXRUcmVlRmxhdHRlbmVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcblxuaW50ZXJmYWNlIE5vZGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogTm9kZVtdO1xufVxuXG5jb25zdCBGTEFUX1RSRUVfREFUQTogTm9kZVtdID0gW1xuICB7XG4gICAgbmFtZTogJ0ZsYXQgR3JvdXAgMScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtuYW1lOiAnRmxhdCBMZWFmIDEuMSd9LFxuICAgICAge25hbWU6ICdGbGF0IExlYWYgMS4yJ30sXG4gICAgICB7bmFtZTogJ0ZsYXQgTGVhZiAxLjMnfSxcbiAgICBdXG4gIH0sIHtcbiAgICBuYW1lOiAnRmxhdCBHcm91cCAyJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnRmxhdCBHcm91cCAyLjEnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtuYW1lOiAnRmxhdCBMZWFmIDIuMS4xJ30sXG4gICAgICAgICAge25hbWU6ICdGbGF0IExlYWYgMi4xLjInfSxcbiAgICAgICAgICB7bmFtZTogJ0ZsYXQgTGVhZiAyLjEuMyd9LFxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuXTtcblxuaW50ZXJmYWNlIEV4YW1wbGVGbGF0Tm9kZSB7XG4gIGV4cGFuZGFibGU6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFRyZWVIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUhhcm5lc3NFeGFtcGxlIHtcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtZXIgPSAobm9kZTogTm9kZSwgbGV2ZWw6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBleHBhbmRhYmxlOiAhIW5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwLFxuICAgICAgbmFtZTogbm9kZS5uYW1lLFxuICAgICAgbGV2ZWw6IGxldmVsLFxuICAgIH07XG4gIH1cblxuICB0cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8RXhhbXBsZUZsYXROb2RlPihcbiAgICAgIG5vZGUgPT4gbm9kZS5sZXZlbCwgbm9kZSA9PiBub2RlLmV4cGFuZGFibGUpO1xuXG4gIHRyZWVGbGF0dGVuZXIgPSBuZXcgTWF0VHJlZUZsYXR0ZW5lcihcbiAgICAgIHRoaXMuX3RyYW5zZm9ybWVyLCBub2RlID0+IG5vZGUubGV2ZWwsIG5vZGUgPT4gbm9kZS5leHBhbmRhYmxlLCBub2RlID0+IG5vZGUuY2hpbGRyZW4pO1xuXG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZUZsYXREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMudHJlZUZsYXR0ZW5lcik7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBGTEFUX1RSRUVfREFUQTtcbiAgfVxuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgbm9kZTogRXhhbXBsZUZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG59XG4iLCI8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgbGVhZiBub2RlcyAtLT5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPCEtLSB1c2UgYSBkaXNhYmxlZCBidXR0b24gdG8gcHJvdmlkZSBwYWRkaW5nIGZvciB0cmVlIGxlYWYgLS0+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L21hdC10cmVlLW5vZGU+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBleHBhbmRhYmxlIG5vZGVzIC0tPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTt3aGVuOiBoYXNDaGlsZFwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRUcmVlTm9kZVRvZ2dsZVxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9nZ2xlICcgKyBub2RlLm5hbWVcIj5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAge3t0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==