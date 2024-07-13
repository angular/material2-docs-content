import { ChangeDetectionStrategy, Component, QueryList } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { coerceObservable } from '@angular/cdk/coercion/private';
import { FlatTreeControl, CdkTreeModule } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TREE_KEY_MANAGER, } from '@angular/cdk/a11y';
import { DOWN_ARROW, END, ENTER, H, HOME, J, K, L, LEFT_ARROW, RIGHT_ARROW, SPACE, TAB, UP_ARROW, } from '@angular/cdk/keycodes';
import { Subject, isObservable } from 'rxjs';
import { take } from 'rxjs/operators';
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
 * This class manages keyboard events for trees. If you pass it a QueryList or other list of tree
 * items, it will set the active item, focus, handle expansion and typeahead correctly when
 * keyboard events occur.
 */
export class VimTreeKeyManager {
    _initialFocus() {
        if (this._hasInitialFocused) {
            return;
        }
        if (!this._items.length) {
            return;
        }
        this._focusFirstItem();
        this._hasInitialFocused = true;
    }
    // TreeKeyManagerOptions not implemented.
    constructor(items) {
        this._activeItemIndex = -1;
        this._activeItem = null;
        this._items = [];
        this._hasInitialFocused = false;
        /** Stream that emits any time the focused item changes. */
        this.change = new Subject();
        // We allow for the items to be an array or Observable because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).
        if (items instanceof QueryList) {
            this._items = items.toArray();
            items.changes.subscribe((newItems) => {
                this._items = newItems.toArray();
                this._updateActiveItemIndex(this._items);
                this._initialFocus();
            });
        }
        else if (isObservable(items)) {
            items.subscribe(newItems => {
                this._items = newItems;
                this._updateActiveItemIndex(newItems);
                this._initialFocus();
            });
        }
        else {
            this._items = items;
            this._initialFocus();
        }
    }
    destroy() {
        this.change.complete();
    }
    /**
     * Handles a keyboard event on the tree.
     * @param event Keyboard event that represents the user interaction with the tree.
     */
    onKeydown(event) {
        const keyCode = event.keyCode;
        switch (keyCode) {
            case TAB:
                // Return early here, in order to allow Tab to actually tab out of the tree
                return;
            case DOWN_ARROW:
            case J:
                this._focusNextItem();
                break;
            case UP_ARROW:
            case K:
                this._focusPreviousItem();
                break;
            case RIGHT_ARROW:
            case L:
                this._expandCurrentItem();
                break;
            case LEFT_ARROW:
            case H:
                this._collapseCurrentItem();
                break;
            case HOME:
                this._focusFirstItem();
                break;
            case END:
                this._focusLastItem();
                break;
            case ENTER:
            case SPACE:
                this._activateCurrentItem();
                break;
        }
    }
    /** Index of the currently active item. */
    getActiveItemIndex() {
        return this._activeItemIndex;
    }
    /** The currently active item. */
    getActiveItem() {
        return this._activeItem;
    }
    focusItem(itemOrIndex, options = {}) {
        // Set default options
        options.emitChangeEvent ??= true;
        let index = typeof itemOrIndex === 'number'
            ? itemOrIndex
            : this._items.findIndex(item => item === itemOrIndex);
        if (index < 0 || index >= this._items.length) {
            return;
        }
        const activeItem = this._items[index];
        // If we're just setting the same item, don't re-call activate or focus
        if (this._activeItem !== null && activeItem === this._activeItem) {
            return;
        }
        this._activeItem = activeItem ?? null;
        this._activeItemIndex = index;
        if (options.emitChangeEvent) {
            // Emit to `change` stream as required by TreeKeyManagerStrategy interface.
            this.change.next(this._activeItem);
        }
        this._activeItem?.focus();
        this._activateCurrentItem();
    }
    _updateActiveItemIndex(newItems) {
        const activeItem = this._activeItem;
        if (activeItem) {
            const newIndex = newItems.findIndex(item => item === activeItem);
            if (newIndex > -1 && newIndex !== this._activeItemIndex) {
                this._activeItemIndex = newIndex;
            }
        }
    }
    /** Focus the first available item. */
    _focusFirstItem() {
        this.focusItem(this._findNextAvailableItemIndex(-1));
    }
    /** Focus the last available item. */
    _focusLastItem() {
        this.focusItem(this._findPreviousAvailableItemIndex(this._items.length));
    }
    /** Focus the next available item. */
    _focusNextItem() {
        this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex));
    }
    /** Focus the previous available item. */
    _focusPreviousItem() {
        this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex));
    }
    //// Navigational methods
    _findNextAvailableItemIndex(startingIndex) {
        if (startingIndex + 1 < this._items.length) {
            return startingIndex + 1;
        }
        return startingIndex;
    }
    _findPreviousAvailableItemIndex(startingIndex) {
        if (startingIndex - 1 >= 0) {
            return startingIndex - 1;
        }
        return startingIndex;
    }
    /**
     * If the item is already expanded, we collapse the item. Otherwise, we will focus the parent.
     */
    _collapseCurrentItem() {
        if (!this._activeItem) {
            return;
        }
        if (this._isCurrentItemExpanded()) {
            this._activeItem.collapse();
        }
        else {
            const parent = this._activeItem.getParent();
            if (!parent) {
                return;
            }
            this.focusItem(parent);
        }
    }
    /**
     * If the item is already collapsed, we expand the item. Otherwise, we will focus the first child.
     */
    _expandCurrentItem() {
        if (!this._activeItem) {
            return;
        }
        if (!this._isCurrentItemExpanded()) {
            this._activeItem.expand();
        }
        else {
            coerceObservable(this._activeItem.getChildren())
                .pipe(take(1))
                .subscribe(children => {
                const firstChild = children[0];
                if (!firstChild) {
                    return;
                }
                this.focusItem(firstChild);
            });
        }
    }
    _isCurrentItemExpanded() {
        if (!this._activeItem) {
            return false;
        }
        return typeof this._activeItem.isExpanded === 'boolean'
            ? this._activeItem.isExpanded
            : this._activeItem.isExpanded();
    }
    _activateCurrentItem() {
        this._activeItem?.activate();
    }
}
function VimTreeKeyManagerFactory() {
    return items => new VimTreeKeyManager(items);
}
const VIM_TREE_KEY_MANAGER_PROVIDER = {
    provide: TREE_KEY_MANAGER,
    useFactory: VimTreeKeyManagerFactory,
};
/**
 * @title Tree with vim keyboard commands.
 */
export class CdkTreeCustomKeyManagerExample {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkTreeCustomKeyManagerExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: CdkTreeCustomKeyManagerExample, isStandalone: true, selector: "cdk-tree-custom-key-manager-example", providers: [VIM_TREE_KEY_MANAGER_PROVIDER], ngImport: i0, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 (expandedChange)=\"node.isExpanded = $event\"\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodePadding, selector: "[cdkTreeNodePadding]", inputs: ["cdkTreeNodePadding", "cdkTreeNodePaddingIndent"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNode, selector: "cdk-tree-node", inputs: ["role", "isExpandable", "isExpanded", "isDisabled", "cdkTreeNodeTypeaheadLabel"], outputs: ["activation", "expandedChange"], exportAs: ["cdkTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkTreeCustomKeyManagerExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-custom-key-manager-example', standalone: true, imports: [CdkTreeModule, MatButtonModule, MatIconModule], providers: [VIM_TREE_KEY_MANAGER_PROVIDER], changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 (expandedChange)=\"node.isExpanded = $event\"\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtY3VzdG9tLWtleS1tYW5hZ2VyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1jdXN0b20ta2V5LW1hbmFnZXIvY2RrLXRyZWUtY3VzdG9tLWtleS1tYW5hZ2VyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1jdXN0b20ta2V5LW1hbmFnZXIvY2RrLXRyZWUtY3VzdG9tLWtleS1tYW5hZ2VyLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxnQkFBZ0IsR0FJakIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQ0wsVUFBVSxFQUNWLEdBQUcsRUFDSCxLQUFLLEVBQ0wsQ0FBQyxFQUNELElBQUksRUFDSixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxHQUFHLEVBQ0gsUUFBUSxHQUNULE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQWEs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LHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFF1ZXJ5TGlzdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FycmF5RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7Y29lcmNlT2JzZXJ2YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uL3ByaXZhdGUnO1xuaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2wsIENka1RyZWVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7XG4gIFRSRUVfS0VZX01BTkFHRVIsXG4gIFRyZWVLZXlNYW5hZ2VyRmFjdG9yeSxcbiAgVHJlZUtleU1hbmFnZXJJdGVtLFxuICBUcmVlS2V5TWFuYWdlclN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge1xuICBET1dOX0FSUk9XLFxuICBFTkQsXG4gIEVOVEVSLFxuICBILFxuICBIT01FLFxuICBKLFxuICBLLFxuICBMLFxuICBMRUZUX0FSUk9XLFxuICBSSUdIVF9BUlJPVyxcbiAgU1BBQ0UsXG4gIFRBQixcbiAgVVBfQVJST1csXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1N1YmplY3QsIGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgVFJFRV9EQVRBOiBFeGFtcGxlRmxhdE5vZGVbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdGcnVpdCcsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBsZXZlbDogMCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdBcHBsZScsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDEsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQmFuYW5hJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGcnVpdCBsb29wcycsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDEsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVmVnZXRhYmxlcycsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBsZXZlbDogMCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHcmVlbicsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBsZXZlbDogMSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdCcm9jY29saScsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQnJ1c3NlbHMgc3Byb3V0cycsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnT3JhbmdlJyxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGxldmVsOiAxLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1B1bXBraW5zJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDYXJyb3RzJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMixcbiAgfSxcbl07XG5cbi8qKiBGbGF0IG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuaW50ZXJmYWNlIEV4YW1wbGVGbGF0Tm9kZSB7XG4gIGV4cGFuZGFibGU6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgaXNFeHBhbmRlZD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBtYW5hZ2VzIGtleWJvYXJkIGV2ZW50cyBmb3IgdHJlZXMuIElmIHlvdSBwYXNzIGl0IGEgUXVlcnlMaXN0IG9yIG90aGVyIGxpc3Qgb2YgdHJlZVxuICogaXRlbXMsIGl0IHdpbGwgc2V0IHRoZSBhY3RpdmUgaXRlbSwgZm9jdXMsIGhhbmRsZSBleHBhbnNpb24gYW5kIHR5cGVhaGVhZCBjb3JyZWN0bHkgd2hlblxuICoga2V5Ym9hcmQgZXZlbnRzIG9jY3VyLlxuICovXG5leHBvcnQgY2xhc3MgVmltVHJlZUtleU1hbmFnZXI8VCBleHRlbmRzIFRyZWVLZXlNYW5hZ2VySXRlbT4gaW1wbGVtZW50cyBUcmVlS2V5TWFuYWdlclN0cmF0ZWd5PFQ+IHtcbiAgcHJpdmF0ZSBfYWN0aXZlSXRlbUluZGV4ID0gLTE7XG4gIHByaXZhdGUgX2FjdGl2ZUl0ZW06IFQgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIF9pdGVtczogVFtdID0gW107XG5cbiAgcHJpdmF0ZSBfaGFzSW5pdGlhbEZvY3VzZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIF9pbml0aWFsRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0luaXRpYWxGb2N1c2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9mb2N1c0ZpcnN0SXRlbSgpO1xuXG4gICAgdGhpcy5faGFzSW5pdGlhbEZvY3VzZWQgPSB0cnVlO1xuICB9XG5cbiAgLy8gVHJlZUtleU1hbmFnZXJPcHRpb25zIG5vdCBpbXBsZW1lbnRlZC5cbiAgY29uc3RydWN0b3IoaXRlbXM6IE9ic2VydmFibGU8VFtdPiB8IFF1ZXJ5TGlzdDxUPiB8IFRbXSkge1xuICAgIC8vIFdlIGFsbG93IGZvciB0aGUgaXRlbXMgdG8gYmUgYW4gYXJyYXkgb3IgT2JzZXJ2YWJsZSBiZWNhdXNlLCBpbiBzb21lIGNhc2VzLCB0aGUgY29uc3VtZXIgbWF5XG4gICAgLy8gbm90IGhhdmUgYWNjZXNzIHRvIGEgUXVlcnlMaXN0IG9mIHRoZSBpdGVtcyB0aGV5IHdhbnQgdG8gbWFuYWdlIChlLmcuIHdoZW4gdGhlXG4gICAgLy8gaXRlbXMgYXJlbid0IGJlaW5nIGNvbGxlY3RlZCB2aWEgYFZpZXdDaGlsZHJlbmAgb3IgYENvbnRlbnRDaGlsZHJlbmApLlxuICAgIGlmIChpdGVtcyBpbnN0YW5jZW9mIFF1ZXJ5TGlzdCkge1xuICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcy50b0FycmF5KCk7XG4gICAgICBpdGVtcy5jaGFuZ2VzLnN1YnNjcmliZSgobmV3SXRlbXM6IFF1ZXJ5TGlzdDxUPikgPT4ge1xuICAgICAgICB0aGlzLl9pdGVtcyA9IG5ld0l0ZW1zLnRvQXJyYXkoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQWN0aXZlSXRlbUluZGV4KHRoaXMuX2l0ZW1zKTtcbiAgICAgICAgdGhpcy5faW5pdGlhbEZvY3VzKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZShpdGVtcykpIHtcbiAgICAgIGl0ZW1zLnN1YnNjcmliZShuZXdJdGVtcyA9PiB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gbmV3SXRlbXM7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUFjdGl2ZUl0ZW1JbmRleChuZXdJdGVtcyk7XG4gICAgICAgIHRoaXMuX2luaXRpYWxGb2N1cygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgICB0aGlzLl9pbml0aWFsRm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuY2hhbmdlLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgYW55IHRpbWUgdGhlIGZvY3VzZWQgaXRlbSBjaGFuZ2VzLiAqL1xuICByZWFkb25seSBjaGFuZ2UgPSBuZXcgU3ViamVjdDxUIHwgbnVsbD4oKTtcblxuICAvKipcbiAgICogSGFuZGxlcyBhIGtleWJvYXJkIGV2ZW50IG9uIHRoZSB0cmVlLlxuICAgKiBAcGFyYW0gZXZlbnQgS2V5Ym9hcmQgZXZlbnQgdGhhdCByZXByZXNlbnRzIHRoZSB1c2VyIGludGVyYWN0aW9uIHdpdGggdGhlIHRyZWUuXG4gICAqL1xuICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBUQUI6XG4gICAgICAgIC8vIFJldHVybiBlYXJseSBoZXJlLCBpbiBvcmRlciB0byBhbGxvdyBUYWIgdG8gYWN0dWFsbHkgdGFiIG91dCBvZiB0aGUgdHJlZVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgIGNhc2UgSjpcbiAgICAgICAgdGhpcy5fZm9jdXNOZXh0SXRlbSgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgIGNhc2UgSzpcbiAgICAgICAgdGhpcy5fZm9jdXNQcmV2aW91c0l0ZW0oKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICBjYXNlIEw6XG4gICAgICAgIHRoaXMuX2V4cGFuZEN1cnJlbnRJdGVtKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExFRlRfQVJST1c6XG4gICAgICBjYXNlIEg6XG4gICAgICAgIHRoaXMuX2NvbGxhcHNlQ3VycmVudEl0ZW0oKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgSE9NRTpcbiAgICAgICAgdGhpcy5fZm9jdXNGaXJzdEl0ZW0oKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRU5EOlxuICAgICAgICB0aGlzLl9mb2N1c0xhc3RJdGVtKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgICAgdGhpcy5fYWN0aXZhdGVDdXJyZW50SXRlbSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKiogSW5kZXggb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgaXRlbS4gKi9cbiAgZ2V0QWN0aXZlSXRlbUluZGV4KCk6IG51bWJlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVJdGVtSW5kZXg7XG4gIH1cblxuICAvKiogVGhlIGN1cnJlbnRseSBhY3RpdmUgaXRlbS4gKi9cbiAgZ2V0QWN0aXZlSXRlbSgpOiBUIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUl0ZW07XG4gIH1cblxuICAvKipcbiAgICogRm9jdXMgdGhlIHByb3ZpZGVkIGl0ZW0gYnkgaW5kZXguXG4gICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gZm9jdXMuXG4gICAqIEBwYXJhbSBvcHRpb25zIEFkZGl0aW9uYWwgZm9jdXNpbmcgb3B0aW9ucy5cbiAgICovXG4gIGZvY3VzSXRlbShpbmRleDogbnVtYmVyLCBvcHRpb25zPzoge2VtaXRDaGFuZ2VFdmVudD86IGJvb2xlYW59KTogdm9pZDtcbiAgLyoqXG4gICAqIEZvY3VzIHRoZSBwcm92aWRlZCBpdGVtLlxuICAgKiBAcGFyYW0gaXRlbSBUaGUgaXRlbSB0byBmb2N1cy4gRXF1YWxpdHkgaXMgZGV0ZXJtaW5lZCB2aWEgdGhlIHRyYWNrQnkgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBvcHRpb25zIEFkZGl0aW9uYWwgZm9jdXNpbmcgb3B0aW9ucy5cbiAgICovXG4gIGZvY3VzSXRlbShpdGVtOiBULCBvcHRpb25zPzoge2VtaXRDaGFuZ2VFdmVudD86IGJvb2xlYW59KTogdm9pZDtcbiAgZm9jdXNJdGVtKGl0ZW1PckluZGV4OiBudW1iZXIgfCBULCBvcHRpb25zPzoge2VtaXRDaGFuZ2VFdmVudD86IGJvb2xlYW59KTogdm9pZDtcbiAgZm9jdXNJdGVtKGl0ZW1PckluZGV4OiBudW1iZXIgfCBULCBvcHRpb25zOiB7ZW1pdENoYW5nZUV2ZW50PzogYm9vbGVhbn0gPSB7fSkge1xuICAgIC8vIFNldCBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zLmVtaXRDaGFuZ2VFdmVudCA/Pz0gdHJ1ZTtcblxuICAgIGxldCBpbmRleCA9XG4gICAgICB0eXBlb2YgaXRlbU9ySW5kZXggPT09ICdudW1iZXInXG4gICAgICAgID8gaXRlbU9ySW5kZXhcbiAgICAgICAgOiB0aGlzLl9pdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBpdGVtT3JJbmRleCk7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl9pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlSXRlbSA9IHRoaXMuX2l0ZW1zW2luZGV4XTtcblxuICAgIC8vIElmIHdlJ3JlIGp1c3Qgc2V0dGluZyB0aGUgc2FtZSBpdGVtLCBkb24ndCByZS1jYWxsIGFjdGl2YXRlIG9yIGZvY3VzXG4gICAgaWYgKHRoaXMuX2FjdGl2ZUl0ZW0gIT09IG51bGwgJiYgYWN0aXZlSXRlbSA9PT0gdGhpcy5fYWN0aXZlSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZUl0ZW0gPSBhY3RpdmVJdGVtID8/IG51bGw7XG4gICAgdGhpcy5fYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG5cbiAgICBpZiAob3B0aW9ucy5lbWl0Q2hhbmdlRXZlbnQpIHtcbiAgICAgIC8vIEVtaXQgdG8gYGNoYW5nZWAgc3RyZWFtIGFzIHJlcXVpcmVkIGJ5IFRyZWVLZXlNYW5hZ2VyU3RyYXRlZ3kgaW50ZXJmYWNlLlxuICAgICAgdGhpcy5jaGFuZ2UubmV4dCh0aGlzLl9hY3RpdmVJdGVtKTtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZlSXRlbT8uZm9jdXMoKTtcbiAgICB0aGlzLl9hY3RpdmF0ZUN1cnJlbnRJdGVtKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBY3RpdmVJdGVtSW5kZXgobmV3SXRlbXM6IFRbXSkge1xuICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSB0aGlzLl9hY3RpdmVJdGVtO1xuICAgIGlmIChhY3RpdmVJdGVtKSB7XG4gICAgICBjb25zdCBuZXdJbmRleCA9IG5ld0l0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGFjdGl2ZUl0ZW0pO1xuXG4gICAgICBpZiAobmV3SW5kZXggPiAtMSAmJiBuZXdJbmRleCAhPT0gdGhpcy5fYWN0aXZlSXRlbUluZGV4KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUl0ZW1JbmRleCA9IG5ld0luZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBGb2N1cyB0aGUgZmlyc3QgYXZhaWxhYmxlIGl0ZW0uICovXG4gIHByaXZhdGUgX2ZvY3VzRmlyc3RJdGVtKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNJdGVtKHRoaXMuX2ZpbmROZXh0QXZhaWxhYmxlSXRlbUluZGV4KC0xKSk7XG4gIH1cblxuICAvKiogRm9jdXMgdGhlIGxhc3QgYXZhaWxhYmxlIGl0ZW0uICovXG4gIHByaXZhdGUgX2ZvY3VzTGFzdEl0ZW0oKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c0l0ZW0odGhpcy5fZmluZFByZXZpb3VzQXZhaWxhYmxlSXRlbUluZGV4KHRoaXMuX2l0ZW1zLmxlbmd0aCkpO1xuICB9XG5cbiAgLyoqIEZvY3VzIHRoZSBuZXh0IGF2YWlsYWJsZSBpdGVtLiAqL1xuICBwcml2YXRlIF9mb2N1c05leHRJdGVtKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNJdGVtKHRoaXMuX2ZpbmROZXh0QXZhaWxhYmxlSXRlbUluZGV4KHRoaXMuX2FjdGl2ZUl0ZW1JbmRleCkpO1xuICB9XG5cbiAgLyoqIEZvY3VzIHRoZSBwcmV2aW91cyBhdmFpbGFibGUgaXRlbS4gKi9cbiAgcHJpdmF0ZSBfZm9jdXNQcmV2aW91c0l0ZW0oKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c0l0ZW0odGhpcy5fZmluZFByZXZpb3VzQXZhaWxhYmxlSXRlbUluZGV4KHRoaXMuX2FjdGl2ZUl0ZW1JbmRleCkpO1xuICB9XG5cbiAgLy8vLyBOYXZpZ2F0aW9uYWwgbWV0aG9kc1xuICBwcml2YXRlIF9maW5kTmV4dEF2YWlsYWJsZUl0ZW1JbmRleChzdGFydGluZ0luZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoc3RhcnRpbmdJbmRleCArIDEgPCB0aGlzLl9pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzdGFydGluZ0luZGV4ICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0aW5nSW5kZXg7XG4gIH1cblxuICBwcml2YXRlIF9maW5kUHJldmlvdXNBdmFpbGFibGVJdGVtSW5kZXgoc3RhcnRpbmdJbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHN0YXJ0aW5nSW5kZXggLSAxID49IDApIHtcbiAgICAgIHJldHVybiBzdGFydGluZ0luZGV4IC0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0aW5nSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhlIGl0ZW0gaXMgYWxyZWFkeSBleHBhbmRlZCwgd2UgY29sbGFwc2UgdGhlIGl0ZW0uIE90aGVyd2lzZSwgd2Ugd2lsbCBmb2N1cyB0aGUgcGFyZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfY29sbGFwc2VDdXJyZW50SXRlbSgpIHtcbiAgICBpZiAoIXRoaXMuX2FjdGl2ZUl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNDdXJyZW50SXRlbUV4cGFuZGVkKCkpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZUl0ZW0uY29sbGFwc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fYWN0aXZlSXRlbS5nZXRQYXJlbnQoKTtcbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9jdXNJdGVtKHBhcmVudCBhcyBUKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhlIGl0ZW0gaXMgYWxyZWFkeSBjb2xsYXBzZWQsIHdlIGV4cGFuZCB0aGUgaXRlbS4gT3RoZXJ3aXNlLCB3ZSB3aWxsIGZvY3VzIHRoZSBmaXJzdCBjaGlsZC5cbiAgICovXG4gIHByaXZhdGUgX2V4cGFuZEN1cnJlbnRJdGVtKCkge1xuICAgIGlmICghdGhpcy5fYWN0aXZlSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5faXNDdXJyZW50SXRlbUV4cGFuZGVkKCkpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZUl0ZW0uZXhwYW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvZXJjZU9ic2VydmFibGUodGhpcy5fYWN0aXZlSXRlbS5nZXRDaGlsZHJlbigpKVxuICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKGNoaWxkcmVuID0+IHtcbiAgICAgICAgICBjb25zdCBmaXJzdENoaWxkID0gY2hpbGRyZW5bMF07XG4gICAgICAgICAgaWYgKCFmaXJzdENoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZm9jdXNJdGVtKGZpcnN0Q2hpbGQgYXMgVCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzQ3VycmVudEl0ZW1FeHBhbmRlZCgpIHtcbiAgICBpZiAoIXRoaXMuX2FjdGl2ZUl0ZW0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9hY3RpdmVJdGVtLmlzRXhwYW5kZWQgPT09ICdib29sZWFuJ1xuICAgICAgPyB0aGlzLl9hY3RpdmVJdGVtLmlzRXhwYW5kZWRcbiAgICAgIDogdGhpcy5fYWN0aXZlSXRlbS5pc0V4cGFuZGVkKCk7XG4gIH1cblxuICBwcml2YXRlIF9hY3RpdmF0ZUN1cnJlbnRJdGVtKCkge1xuICAgIHRoaXMuX2FjdGl2ZUl0ZW0/LmFjdGl2YXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gVmltVHJlZUtleU1hbmFnZXJGYWN0b3J5PFQgZXh0ZW5kcyBUcmVlS2V5TWFuYWdlckl0ZW0+KCk6IFRyZWVLZXlNYW5hZ2VyRmFjdG9yeTxUPiB7XG4gIHJldHVybiBpdGVtcyA9PiBuZXcgVmltVHJlZUtleU1hbmFnZXIoaXRlbXMpO1xufVxuXG5jb25zdCBWSU1fVFJFRV9LRVlfTUFOQUdFUl9QUk9WSURFUiA9IHtcbiAgcHJvdmlkZTogVFJFRV9LRVlfTUFOQUdFUixcbiAgdXNlRmFjdG9yeTogVmltVHJlZUtleU1hbmFnZXJGYWN0b3J5LFxufTtcblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIHZpbSBrZXlib2FyZCBjb21tYW5kcy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXRyZWUtY3VzdG9tLWtleS1tYW5hZ2VyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay10cmVlLWN1c3RvbS1rZXktbWFuYWdlci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLXRyZWUtY3VzdG9tLWtleS1tYW5hZ2VyLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtUcmVlTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtWSU1fVFJFRV9LRVlfTUFOQUdFUl9QUk9WSURFUl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUcmVlQ3VzdG9tS2V5TWFuYWdlckV4YW1wbGUge1xuICB0cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8RXhhbXBsZUZsYXROb2RlPihcbiAgICBub2RlID0+IG5vZGUubGV2ZWwsXG4gICAgbm9kZSA9PiBub2RlLmV4cGFuZGFibGUsXG4gICk7XG5cbiAgZGF0YVNvdXJjZSA9IG5ldyBBcnJheURhdGFTb3VyY2UoVFJFRV9EQVRBKTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IEV4YW1wbGVGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGdldFBhcmVudE5vZGUobm9kZTogRXhhbXBsZUZsYXROb2RlKSB7XG4gICAgY29uc3Qgbm9kZUluZGV4ID0gVFJFRV9EQVRBLmluZGV4T2Yobm9kZSk7XG5cbiAgICBmb3IgKGxldCBpID0gbm9kZUluZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmIChUUkVFX0RBVEFbaV0ubGV2ZWwgPT09IG5vZGUubGV2ZWwgLSAxKSB7XG4gICAgICAgIHJldHVybiBUUkVFX0RBVEFbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzaG91bGRSZW5kZXIobm9kZTogRXhhbXBsZUZsYXROb2RlKSB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50Tm9kZShub2RlKTtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBpZiAoIXBhcmVudC5pc0V4cGFuZGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50Tm9kZShwYXJlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiPGNkay10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGxlYWYgbm9kZXMgLS0+XG4gIDxjZGstdHJlZS1ub2RlICpjZGtUcmVlTm9kZURlZj1cImxldCBub2RlXCIgY2RrVHJlZU5vZGVQYWRkaW5nXG4gICAgICAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cInNob3VsZFJlbmRlcihub2RlKSA/ICdmbGV4JyA6ICdub25lJ1wiXG4gICAgICAgICAgICAgICAgIFtpc0Rpc2FibGVkXT1cIiFzaG91bGRSZW5kZXIobm9kZSlcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtdHJlZS1ub2RlXCI+XG4gICAgPCEtLSB1c2UgYSBkaXNhYmxlZCBidXR0b24gdG8gcHJvdmlkZSBwYWRkaW5nIGZvciB0cmVlIGxlYWYgLS0+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L2Nkay10cmVlLW5vZGU+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBleHBhbmRhYmxlIG5vZGVzIC0tPlxuICA8Y2RrLXRyZWUtbm9kZSAqY2RrVHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIiBjZGtUcmVlTm9kZVBhZGRpbmdcbiAgICAgICAgICAgICAgICAgY2RrVHJlZU5vZGVUb2dnbGVcbiAgICAgICAgICAgICAgICAgW2Nka1RyZWVOb2RlVHlwZWFoZWFkTGFiZWxdPVwibm9kZS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwic2hvdWxkUmVuZGVyKG5vZGUpID8gJ2ZsZXgnIDogJ25vbmUnXCJcbiAgICAgICAgICAgICAgICAgW2lzRGlzYWJsZWRdPVwiIXNob3VsZFJlbmRlcihub2RlKVwiXG4gICAgICAgICAgICAgICAgIChleHBhbmRlZENoYW5nZSk9XCJub2RlLmlzRXhwYW5kZWQgPSAkZXZlbnRcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtdHJlZS1ub2RlXCJcbiAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCI+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2RrVHJlZU5vZGVUb2dnbGVcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1RvZ2dsZSAnICsgbm9kZS5uYW1lXCJcbiAgICAgICAgICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cIm5vZGUuZXhwYW5kYWJsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCI+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUubmFtZX19XG4gIDwvY2RrLXRyZWUtbm9kZT5cbjwvY2RrLXRyZWU+XG4iXX0=