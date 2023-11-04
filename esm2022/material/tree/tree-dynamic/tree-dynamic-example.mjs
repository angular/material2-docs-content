import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/progress-bar";
/** Flat node with expandable and level information */
export class DynamicFlatNode {
    constructor(item, level = 1, expandable = false, isLoading = false) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
}
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
export class DynamicDatabase {
    constructor() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']],
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    initialData() {
        return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
    }
    getChildren(node) {
        return this.dataMap.get(node);
    }
    isExpandable(node) {
        return this.dataMap.has(node);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: DynamicDatabase, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: DynamicDatabase, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: DynamicDatabase, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
export class DynamicDataSource {
    get data() {
        return this.dataChange.value;
    }
    set data(value) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    constructor(_treeControl, _database) {
        this._treeControl = _treeControl;
        this._database = _database;
        this.dataChange = new BehaviorSubject([]);
    }
    connect(collectionViewer) {
        this._treeControl.expansionModel.changed.subscribe(change => {
            if (change.added ||
                change.removed) {
                this.handleTreeControl(change);
            }
        });
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
    }
    disconnect(collectionViewer) { }
    /** Handle expand/collapse behaviors */
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed
                .slice()
                .reverse()
                .forEach(node => this.toggleNode(node, false));
        }
    }
    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node, expand) {
        const children = this._database.getChildren(node.item);
        const index = this.data.indexOf(node);
        if (!children || index < 0) {
            // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(() => {
            if (expand) {
                const nodes = children.map(name => new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)));
                this.data.splice(index + 1, 0, ...nodes);
            }
            else {
                let count = 0;
                for (let i = index + 1; i < this.data.length && this.data[i].level > node.level; i++, count++) { }
                this.data.splice(index + 1, count);
            }
            // notify the change
            this.dataChange.next(this.data);
            node.isLoading = false;
        }, 1000);
    }
}
/**
 * @title Tree with dynamic data
 */
export class TreeDynamicExample {
    constructor(database) {
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: TreeDynamicExample, deps: [{ token: DynamicDatabase }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: TreeDynamicExample, isStandalone: true, selector: "tree-dynamic-example", ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <mat-progress-bar *ngIf=\"node.isLoading\"\n                      mode=\"indeterminate\"\n                      class=\"example-tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i4.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: TreeDynamicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-dynamic-example', standalone: true, imports: [MatTreeModule, MatButtonModule, MatIconModule, NgIf, MatProgressBarModule], template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <mat-progress-bar *ngIf=\"node.isLoading\"\n                      mode=\"indeterminate\"\n                      class=\"example-tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"] }]
        }], ctorParameters: () => [{ type: DynamicDatabase }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1keW5hbWljLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtZHluYW1pYy90cmVlLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1keW5hbWljL3RyZWUtZHluYW1pYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxlQUFlLEVBQUUsS0FBSyxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztBQUVyRCxzREFBc0Q7QUFDdEQsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFDUyxJQUFZLEVBQ1osUUFBUSxDQUFDLEVBQ1QsYUFBYSxLQUFLLEVBQ2xCLFlBQVksS0FBSztRQUhqQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBSTtRQUNULGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsY0FBUyxHQUFULFNB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RXhFLGtCQUFrQjtrQkFQOUIsU0FBUzsrQkFDRSxzQkFBc0IsY0FHcEIsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2xsZWN0aW9uVmlld2VyLCBTZWxlY3Rpb25DaGFuZ2UsIERhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIG1lcmdlLCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRUcmVlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcblxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZsYXROb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGl0ZW06IHN0cmluZyxcbiAgICBwdWJsaWMgbGV2ZWwgPSAxLFxuICAgIHB1YmxpYyBleHBhbmRhYmxlID0gZmFsc2UsXG4gICAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlLFxuICApIHt9XG59XG5cbi8qKlxuICogRGF0YWJhc2UgZm9yIGR5bmFtaWMgZGF0YS4gV2hlbiBleHBhbmRpbmcgYSBub2RlIGluIHRoZSB0cmVlLCB0aGUgZGF0YSBzb3VyY2Ugd2lsbCBuZWVkIHRvIGZldGNoXG4gKiB0aGUgZGVzY2VuZGFudHMgZGF0YSBmcm9tIHRoZSBkYXRhYmFzZS5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgRHluYW1pY0RhdGFiYXNlIHtcbiAgZGF0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oW1xuICAgIFsnRnJ1aXRzJywgWydBcHBsZScsICdPcmFuZ2UnLCAnQmFuYW5hJ11dLFxuICAgIFsnVmVnZXRhYmxlcycsIFsnVG9tYXRvJywgJ1BvdGF0bycsICdPbmlvbiddXSxcbiAgICBbJ0FwcGxlJywgWydGdWppJywgJ01hY2ludG9zaCddXSxcbiAgICBbJ09uaW9uJywgWydZZWxsb3cnLCAnV2hpdGUnLCAnUHVycGxlJ11dLFxuICBdKTtcblxuICByb290TGV2ZWxOb2Rlczogc3RyaW5nW10gPSBbJ0ZydWl0cycsICdWZWdldGFibGVzJ107XG5cbiAgLyoqIEluaXRpYWwgZGF0YSBmcm9tIGRhdGFiYXNlICovXG4gIGluaXRpYWxEYXRhKCk6IER5bmFtaWNGbGF0Tm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5yb290TGV2ZWxOb2Rlcy5tYXAobmFtZSA9PiBuZXcgRHluYW1pY0ZsYXROb2RlKG5hbWUsIDAsIHRydWUpKTtcbiAgfVxuXG4gIGdldENoaWxkcmVuKG5vZGU6IHN0cmluZyk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmdldChub2RlKTtcbiAgfVxuXG4gIGlzRXhwYW5kYWJsZShub2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmhhcyhub2RlKTtcbiAgfVxufVxuLyoqXG4gKiBGaWxlIGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QgZnJvbSBzdHJpbmcuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIGZpbGUgb3IgYSBkaXJlY3RvcnkuIEZvciBhIGZpbGUsIGl0IGhhcyBmaWxlbmFtZSBhbmQgdHlwZS5cbiAqIEZvciBhIGRpcmVjdG9yeSwgaXQgaGFzIGZpbGVuYW1lIGFuZCBjaGlsZHJlbiAoYSBsaXN0IG9mIGZpbGVzIG9yIGRpcmVjdG9yaWVzKS5cbiAqIFRoZSBpbnB1dCB3aWxsIGJlIGEganNvbiBvYmplY3Qgc3RyaW5nLCBhbmQgdGhlIG91dHB1dCBpcyBhIGxpc3Qgb2YgYEZpbGVOb2RlYCB3aXRoIG5lc3RlZFxuICogc3RydWN0dXJlLlxuICovXG5leHBvcnQgY2xhc3MgRHluYW1pY0RhdGFTb3VyY2UgaW1wbGVtZW50cyBEYXRhU291cmNlPER5bmFtaWNGbGF0Tm9kZT4ge1xuICBkYXRhQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEeW5hbWljRmxhdE5vZGVbXT4oW10pO1xuXG4gIGdldCBkYXRhKCk6IER5bmFtaWNGbGF0Tm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlO1xuICB9XG4gIHNldCBkYXRhKHZhbHVlOiBEeW5hbWljRmxhdE5vZGVbXSkge1xuICAgIHRoaXMuX3RyZWVDb250cm9sLmRhdGFOb2RlcyA9IHZhbHVlO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPixcbiAgICBwcml2YXRlIF9kYXRhYmFzZTogRHluYW1pY0RhdGFiYXNlLFxuICApIHt9XG5cbiAgY29ubmVjdChjb2xsZWN0aW9uVmlld2VyOiBDb2xsZWN0aW9uVmlld2VyKTogT2JzZXJ2YWJsZTxEeW5hbWljRmxhdE5vZGVbXT4ge1xuICAgIHRoaXMuX3RyZWVDb250cm9sLmV4cGFuc2lvbk1vZGVsLmNoYW5nZWQuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIChjaGFuZ2UgYXMgU2VsZWN0aW9uQ2hhbmdlPER5bmFtaWNGbGF0Tm9kZT4pLmFkZGVkIHx8XG4gICAgICAgIChjaGFuZ2UgYXMgU2VsZWN0aW9uQ2hhbmdlPER5bmFtaWNGbGF0Tm9kZT4pLnJlbW92ZWRcbiAgICAgICkge1xuICAgICAgICB0aGlzLmhhbmRsZVRyZWVDb250cm9sKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVyZ2UoY29sbGVjdGlvblZpZXdlci52aWV3Q2hhbmdlLCB0aGlzLmRhdGFDaGFuZ2UpLnBpcGUobWFwKCgpID0+IHRoaXMuZGF0YSkpO1xuICB9XG5cbiAgZGlzY29ubmVjdChjb2xsZWN0aW9uVmlld2VyOiBDb2xsZWN0aW9uVmlld2VyKTogdm9pZCB7fVxuXG4gIC8qKiBIYW5kbGUgZXhwYW5kL2NvbGxhcHNlIGJlaGF2aW9ycyAqL1xuICBoYW5kbGVUcmVlQ29udHJvbChjaGFuZ2U6IFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KSB7XG4gICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgY2hhbmdlLmFkZGVkLmZvckVhY2gobm9kZSA9PiB0aGlzLnRvZ2dsZU5vZGUobm9kZSwgdHJ1ZSkpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgIGNoYW5nZS5yZW1vdmVkXG4gICAgICAgIC5zbGljZSgpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLmZvckVhY2gobm9kZSA9PiB0aGlzLnRvZ2dsZU5vZGUobm9kZSwgZmFsc2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBub2RlLCByZW1vdmUgZnJvbSBkaXNwbGF5IGxpc3RcbiAgICovXG4gIHRvZ2dsZU5vZGUobm9kZTogRHluYW1pY0ZsYXROb2RlLCBleHBhbmQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2RhdGFiYXNlLmdldENoaWxkcmVuKG5vZGUuaXRlbSk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEuaW5kZXhPZihub2RlKTtcbiAgICBpZiAoIWNoaWxkcmVuIHx8IGluZGV4IDwgMCkge1xuICAgICAgLy8gSWYgbm8gY2hpbGRyZW4sIG9yIGNhbm5vdCBmaW5kIHRoZSBub2RlLCBubyBvcFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5vZGUuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGV4cGFuZCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkcmVuLm1hcChcbiAgICAgICAgICBuYW1lID0+IG5ldyBEeW5hbWljRmxhdE5vZGUobmFtZSwgbm9kZS5sZXZlbCArIDEsIHRoaXMuX2RhdGFiYXNlLmlzRXhwYW5kYWJsZShuYW1lKSksXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXggKyAxLCAwLCAuLi5ub2Rlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKFxuICAgICAgICAgIGxldCBpID0gaW5kZXggKyAxO1xuICAgICAgICAgIGkgPCB0aGlzLmRhdGEubGVuZ3RoICYmIHRoaXMuZGF0YVtpXS5sZXZlbCA+IG5vZGUubGV2ZWw7XG4gICAgICAgICAgaSsrLCBjb3VudCsrXG4gICAgICAgICkge31cbiAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCArIDEsIGNvdW50KTtcbiAgICAgIH1cblxuICAgICAgLy8gbm90aWZ5IHRoZSBjaGFuZ2VcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gICAgICBub2RlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH0sIDEwMDApO1xuICB9XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBkeW5hbWljIGRhdGFcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1keW5hbWljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtZHluYW1pYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1keW5hbWljLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRUcmVlTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGUsIE5nSWYsIE1hdFByb2dyZXNzQmFyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUR5bmFtaWNFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IoZGF0YWJhc2U6IER5bmFtaWNEYXRhYmFzZSkge1xuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT4odGhpcy5nZXRMZXZlbCwgdGhpcy5pc0V4cGFuZGFibGUpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBEeW5hbWljRGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCBkYXRhYmFzZSk7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGFiYXNlLmluaXRpYWxEYXRhKCk7XG4gIH1cblxuICB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT47XG5cbiAgZGF0YVNvdXJjZTogRHluYW1pY0RhdGFTb3VyY2U7XG5cbiAgZ2V0TGV2ZWwgPSAobm9kZTogRHluYW1pY0ZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBEeW5hbWljRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogRHluYW1pY0ZsYXROb2RlKSA9PiBfbm9kZURhdGEuZXhwYW5kYWJsZTtcbn1cbiIsIjxtYXQtdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIHt7bm9kZS5pdGVtfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1RvZ2dsZSAnICsgbm9kZS5pdGVtXCIgbWF0VHJlZU5vZGVUb2dnbGU+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUuaXRlbX19XG4gICAgPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9XCJub2RlLmlzTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImluZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS10cmVlLXByb2dyZXNzLWJhclwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==