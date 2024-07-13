import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BehaviorSubject, combineLatest, of as observableOf } from 'rxjs';
import { delay, map, shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/progress-spinner";
const TREE_DATA = new Map([
    {
        id: '1',
        name: 'Fruit',
        children: ['1-1', '1-2', '1-3'],
    },
    { id: '1-1', name: 'Apple', parent: '1' },
    { id: '1-2', name: 'Banana', parent: '1' },
    { id: '1-3', name: 'Fruit Loops', parent: '1' },
    {
        id: '2',
        name: 'Vegetables',
        children: ['2-1', '2-2'],
    },
    {
        id: '2-1',
        name: 'Green',
        parent: '2',
        children: ['2-1-1', '2-1-2'],
    },
    {
        id: '2-2',
        name: 'Orange',
        parent: '2',
        children: ['2-2-1', '2-2-2'],
    },
    { id: '2-1-1', name: 'Broccoli', parent: '2-1' },
    { id: '2-1-2', name: 'Brussel sprouts', parent: '2-1' },
    { id: '2-2-1', name: 'Pumpkins', parent: '2-2' },
    { id: '2-2-2', name: 'Carrots', parent: '2-2' },
].map(datum => [datum.id, datum]));
class FakeDataBackend {
    _getRandomDelayTime() {
        // anywhere from 100 to 500ms.
        return Math.floor(Math.random() * 400) + 100;
    }
    getChildren(id) {
        // first, find the specified ID in our tree
        const item = TREE_DATA.get(id);
        const children = item?.children ?? [];
        return observableOf(children.map(childId => TREE_DATA.get(childId))).pipe(delay(this._getRandomDelayTime()));
    }
    getRoots() {
        return observableOf([...TREE_DATA.values()].filter(datum => !datum.parent)).pipe(delay(this._getRandomDelayTime()));
    }
}
class TransformedData {
    constructor(raw) {
        this.raw = raw;
    }
    areChildrenLoading() {
        return this.raw.childrenLoading === 'LOADING';
    }
    isExpandable() {
        return ((this.raw.childrenLoading === 'INIT' || this.raw.childrenLoading === 'LOADED') &&
            !!this.raw.childrenIds?.length);
    }
    isLeaf() {
        return !this.isExpandable() && !this.areChildrenLoading();
    }
}
class ComplexDataStore {
    constructor() {
        this._backend = new FakeDataBackend();
        this._state = new BehaviorSubject({
            rootIds: [],
            rootsLoading: 'INIT',
            allData: new Map(),
            dataLoading: new Map(),
        });
        this._rootIds = this.select(state => state.rootIds);
        this._allData = this.select(state => state.allData);
        this._loadingData = this.select(state => state.dataLoading);
        this._rootsLoadingState = this.select(state => state.rootsLoading);
        this.areRootsLoading = this.select(this._rootIds, this._loadingData, this._rootsLoadingState, (rootIds, loading, rootsLoading) => rootsLoading !== 'LOADED' || rootIds.some(id => loading.get(id) !== 'LOADED'));
        this.roots = this.select(this.areRootsLoading, this._rootIds, this._allData, (rootsLoading, rootIds, data) => {
            if (rootsLoading) {
                return [];
            }
            return this._getDataByIds(rootIds, data);
        });
    }
    getChildren(parentId) {
        return this.select(this._allData, this._loadingData, (data, loading) => {
            const parentData = data.get(parentId);
            if (parentData?.childrenLoading !== 'LOADED') {
                return [];
            }
            const childIds = parentData.childrenIds ?? [];
            if (childIds.some(id => loading.get(id) !== 'LOADED')) {
                return [];
            }
            return this._getDataByIds(childIds, data);
        });
    }
    loadRoots() {
        this._setRootsLoading();
        this._backend.getRoots().subscribe(roots => {
            this._setRoots(roots);
        });
    }
    loadChildren(parentId) {
        this._setChildrenLoading(parentId);
        this._backend.getChildren(parentId).subscribe(children => {
            this._addLoadedData(parentId, children);
        });
    }
    _setRootsLoading() {
        this._state.next({
            ...this._state.value,
            rootsLoading: 'LOADING',
        });
    }
    _setRoots(roots) {
        const currentState = this._state.value;
        this._state.next({
            ...currentState,
            rootIds: roots.map(root => root.id),
            rootsLoading: 'LOADED',
            ...this._addData(currentState, roots),
        });
    }
    _setChildrenLoading(parentId) {
        const currentState = this._state.value;
        const parentData = currentState.allData.get(parentId);
        this._state.next({
            ...currentState,
            allData: new Map([
                ...currentState.allData,
                ...(parentData ? [[parentId, { ...parentData, childrenLoading: 'LOADING' }]] : []),
            ]),
            dataLoading: new Map([
                ...currentState.dataLoading,
                ...(parentData?.childrenIds?.map(childId => [childId, 'LOADING']) ?? []),
            ]),
        });
    }
    _addLoadedData(parentId, childData) {
        const currentState = this._state.value;
        this._state.next({
            ...currentState,
            ...this._addData(currentState, childData, parentId),
        });
    }
    _addData({ allData, dataLoading }, data, parentId) {
        const parentData = parentId && allData.get(parentId);
        const allChildren = data.flatMap(datum => datum.children ?? []);
        return {
            allData: new Map([
                ...allData,
                ...data.map(datum => {
                    return [
                        datum.id,
                        {
                            id: datum.id,
                            name: datum.name,
                            parentId,
                            childrenIds: datum.children,
                            childrenLoading: 'INIT',
                        },
                    ];
                }),
                ...(parentData ? [[parentId, { ...parentData, childrenLoading: 'LOADED' }]] : []),
            ]),
            dataLoading: new Map([
                ...dataLoading,
                ...data.map(datum => [datum.id, 'LOADED']),
                ...allChildren.map(childId => [childId, 'INIT']),
            ]),
        };
    }
    _getDataByIds(ids, data) {
        return ids
            .map(id => data.get(id))
            .filter((item) => !!item)
            .map(datum => new TransformedData(datum));
    }
    select(...sourcesAndTransform) {
        const sources = sourcesAndTransform.slice(0, -1);
        const transformFn = sourcesAndTransform[sourcesAndTransform.length - 1];
        return combineLatest([...sources, this._state]).pipe(map(args => transformFn(...args)), shareReplay({ refCount: true, bufferSize: 1 }));
    }
}
/**
 * @title Complex example making use of the redux pattern.
 */
export class CdkTreeComplexExample {
    constructor() {
        this._dataStore = new ComplexDataStore();
        this.areRootsLoading = this._dataStore.areRootsLoading;
        this.roots = this._dataStore.roots;
        this.getChildren = (node) => this._dataStore.getChildren(node.raw.id);
        this.trackBy = (index, node) => this.expansionKey(node);
        this.expansionKey = (node) => node.raw.id;
    }
    ngOnInit() {
        this._dataStore.loadRoots();
    }
    onExpand(node, expanded) {
        if (expanded) {
            // Only perform a load on expansion.
            this._dataStore.loadChildren(node.raw.id);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkTreeComplexExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.0", type: CdkTreeComplexExample, isStandalone: true, selector: "cdk-tree-complex-example", ngImport: i0, template: "@if (areRootsLoading | async) {\n  <mat-spinner></mat-spinner>\n} @else {\n  <cdk-tree\n      #tree\n      [dataSource]=\"roots\"\n      [childrenAccessor]=\"getChildren\"\n      [trackBy]=\"trackBy\"\n      [expansionKey]=\"expansionKey\">\n    <cdk-tree-node\n        *cdkTreeNodeDef=\"let node\"\n        cdkTreeNodePadding\n        [cdkTreeNodeTypeaheadLabel]=\"node.raw.name\"\n        [isExpandable]=\"node.isExpandable()\"\n        (expandedChange)=\"onExpand(node, $event)\">\n      <!-- Spinner when node is loading children; this replaces the expand button. -->\n      @if (node.areChildrenLoading()) {\n        <mat-spinner diameter=\"48\" mode=\"indeterminate\"></mat-spinner>\n      }\n\n      @if (!node.areChildrenLoading() && node.isExpandable()) {\n        <button\n            mat-icon-button\n            cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.raw.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n      }\n\n      <!-- Spacer for leaf nodes -->\n      @if (node.isLeaf()) {\n        <div class=\"toggle-spacer\"></div>\n      }\n\n      <span>{{node.raw.name}}</span>\n    </cdk-tree-node>\n  </cdk-tree>\n}\n", styles: ["cdk-tree-node {\n  display: flex;\n  align-items: center;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodePadding, selector: "[cdkTreeNodePadding]", inputs: ["cdkTreeNodePadding", "cdkTreeNodePaddingIndent"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNode, selector: "cdk-tree-node", inputs: ["role", "isExpandable", "isExpanded", "isDisabled", "cdkTreeNodeTypeaheadLabel"], outputs: ["activation", "expandedChange"], exportAs: ["cdkTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }, { kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i5.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkTreeComplexExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-complex-example', standalone: true, imports: [CdkTreeModule, MatButtonModule, MatIconModule, CommonModule, MatProgressSpinnerModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (areRootsLoading | async) {\n  <mat-spinner></mat-spinner>\n} @else {\n  <cdk-tree\n      #tree\n      [dataSource]=\"roots\"\n      [childrenAccessor]=\"getChildren\"\n      [trackBy]=\"trackBy\"\n      [expansionKey]=\"expansionKey\">\n    <cdk-tree-node\n        *cdkTreeNodeDef=\"let node\"\n        cdkTreeNodePadding\n        [cdkTreeNodeTypeaheadLabel]=\"node.raw.name\"\n        [isExpandable]=\"node.isExpandable()\"\n        (expandedChange)=\"onExpand(node, $event)\">\n      <!-- Spinner when node is loading children; this replaces the expand button. -->\n      @if (node.areChildrenLoading()) {\n        <mat-spinner diameter=\"48\" mode=\"indeterminate\"></mat-spinner>\n      }\n\n      @if (!node.areChildrenLoading() && node.isExpandable()) {\n        <button\n            mat-icon-button\n            cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.raw.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n      }\n\n      <!-- Spacer for leaf nodes -->\n      @if (node.isLeaf()) {\n        <div class=\"toggle-spacer\"></div>\n      }\n\n      <span>{{node.raw.name}}</span>\n    </cdk-tree-node>\n  </cdk-tree>\n}\n", styles: ["cdk-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtY29tcGxleC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RyZWUvY2RrLXRyZWUtY29tcGxleC9jZGstdHJlZS1jb21wbGV4LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1jb21wbGV4L2Nkay10cmVlLWNvbXBsZXgtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxlQUFlLEVBQWMsYUFBYSxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDcEYsT0FBTyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFTdkQsTUFBTSxTQUFTLEdBQTZCLElBQUksR0FBRyxDQUNqRDtJQUNFO1FBQ0UsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0tBQ2hDO0lBQ0QsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxP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Q0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0tBWXZEO0lBVkMsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFxQixFQUFFLFFBQWlCO1FBQy9DLElBQUksUUFBUSxFQUFFLENBQUM7WUFDYixvQ0FBb0M7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQzs4R0FuQlUscUJBQXFCO2tHQUFyQixxQkFBcUIsb0ZDL1JsQyxzd0NBd0NBLHVIRG9QWSxhQUFhLGcwQkFBRSxlQUFlLDJJQUFFLGFBQWEsbUxBQUUsWUFBWSxtRkFBRSx3QkFBd0I7OzJGQUdwRixxQkFBcUI7a0JBUmpDLFNBQVM7K0JBQ0UsMEJBQTBCLGNBR3hCLElBQUksV0FDUCxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSx3QkFBd0IsQ0FBQyxtQkFDL0UsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrVHJlZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdFByb2dyZXNzU3Bpbm5lck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCwgb2YgYXMgb2JzZXJ2YWJsZU9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVsYXksIG1hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW50ZXJmYWNlIEJhY2tlbmREYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwYXJlbnQ/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogc3RyaW5nW107XG59XG5cbmNvbnN0IFRSRUVfREFUQTogTWFwPHN0cmluZywgQmFja2VuZERhdGE+ID0gbmV3IE1hcChcbiAgW1xuICAgIHtcbiAgICAgIGlkOiAnMScsXG4gICAgICBuYW1lOiAnRnJ1aXQnLFxuICAgICAgY2hpbGRyZW46IFsnMS0xJywgJzEtMicsICcxLTMnXSxcbiAgICB9LFxuICAgIHtpZDogJzEtMScsIG5hbWU6ICdBcHBsZScsIHBhcmVudDogJzEnfSxcbiAgICB7aWQ6ICcxLTInLCBuYW1lOiAnQmFuYW5hJywgcGFyZW50OiAnMSd9LFxuICAgIHtpZDogJzEtMycsIG5hbWU6ICdGcnVpdCBMb29wcycsIHBhcmVudDogJzEnfSxcbiAgICB7XG4gICAgICBpZDogJzInLFxuICAgICAgbmFtZTogJ1ZlZ2V0YWJsZXMnLFxuICAgICAgY2hpbGRyZW46IFsnMi0xJywgJzItMiddLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICcyLTEnLFxuICAgICAgbmFtZTogJ0dyZWVuJyxcbiAgICAgIHBhcmVudDogJzInLFxuICAgICAgY2hpbGRyZW46IFsnMi0xLTEnLCAnMi0xLTInXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnMi0yJyxcbiAgICAgIG5hbWU6ICdPcmFuZ2UnLFxuICAgICAgcGFyZW50OiAnMicsXG4gICAgICBjaGlsZHJlbjogWycyLTItMScsICcyLTItMiddLFxuICAgIH0sXG4gICAge2lkOiAnMi0xLTEnLCBuYW1lOiAnQnJvY2NvbGknLCBwYXJlbnQ6ICcyLTEnfSxcbiAgICB7aWQ6ICcyLTEtMicsIG5hbWU6ICdCcnVzc2VsIHNwcm91dHMnLCBwYXJlbnQ6ICcyLTEnfSxcbiAgICB7aWQ6ICcyLTItMScsIG5hbWU6ICdQdW1wa2lucycsIHBhcmVudDogJzItMid9LFxuICAgIHtpZDogJzItMi0yJywgbmFtZTogJ0NhcnJvdHMnLCBwYXJlbnQ6ICcyLTInfSxcbiAgXS5tYXAoZGF0dW0gPT4gW2RhdHVtLmlkLCBkYXR1bV0pLFxuKTtcblxuY2xhc3MgRmFrZURhdGFCYWNrZW5kIHtcbiAgcHJpdmF0ZSBfZ2V0UmFuZG9tRGVsYXlUaW1lKCkge1xuICAgIC8vIGFueXdoZXJlIGZyb20gMTAwIHRvIDUwMG1zLlxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0MDApICsgMTAwO1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QmFja2VuZERhdGFbXT4ge1xuICAgIC8vIGZpcnN0LCBmaW5kIHRoZSBzcGVjaWZpZWQgSUQgaW4gb3VyIHRyZWVcbiAgICBjb25zdCBpdGVtID0gVFJFRV9EQVRBLmdldChpZCk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBpdGVtPy5jaGlsZHJlbiA/PyBbXTtcblxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YoY2hpbGRyZW4ubWFwKGNoaWxkSWQgPT4gVFJFRV9EQVRBLmdldChjaGlsZElkKSEpKS5waXBlKFxuICAgICAgZGVsYXkodGhpcy5fZ2V0UmFuZG9tRGVsYXlUaW1lKCkpLFxuICAgICk7XG4gIH1cblxuICBnZXRSb290cygpOiBPYnNlcnZhYmxlPEJhY2tlbmREYXRhW10+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKFsuLi5UUkVFX0RBVEEudmFsdWVzKCldLmZpbHRlcihkYXR1bSA9PiAhZGF0dW0ucGFyZW50KSkucGlwZShcbiAgICAgIGRlbGF5KHRoaXMuX2dldFJhbmRvbURlbGF5VGltZSgpKSxcbiAgICApO1xuICB9XG59XG5cbnR5cGUgTG9hZGluZ1N0YXRlID0gJ0lOSVQnIHwgJ0xPQURJTkcnIHwgJ0xPQURFRCc7XG5cbmludGVyZmFjZSBSYXdEYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwYXJlbnRJZD86IHN0cmluZztcbiAgY2hpbGRyZW5JZHM/OiBzdHJpbmdbXTtcbiAgY2hpbGRyZW5Mb2FkaW5nOiBMb2FkaW5nU3RhdGU7XG59XG5cbmNsYXNzIFRyYW5zZm9ybWVkRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByYXc6IFJhd0RhdGEpIHt9XG5cbiAgYXJlQ2hpbGRyZW5Mb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnJhdy5jaGlsZHJlbkxvYWRpbmcgPT09ICdMT0FESU5HJztcbiAgfVxuXG4gIGlzRXhwYW5kYWJsZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMucmF3LmNoaWxkcmVuTG9hZGluZyA9PT0gJ0lOSVQnIHx8IHRoaXMucmF3LmNoaWxkcmVuTG9hZGluZyA9PT0gJ0xPQURFRCcpICYmXG4gICAgICAhIXRoaXMucmF3LmNoaWxkcmVuSWRzPy5sZW5ndGhcbiAgICApO1xuICB9XG5cbiAgaXNMZWFmKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0V4cGFuZGFibGUoKSAmJiAhdGhpcy5hcmVDaGlsZHJlbkxvYWRpbmcoKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICByb290SWRzOiBzdHJpbmdbXTtcbiAgcm9vdHNMb2FkaW5nOiBMb2FkaW5nU3RhdGU7XG4gIGFsbERhdGE6IE1hcDxzdHJpbmcsIFJhd0RhdGE+O1xuICBkYXRhTG9hZGluZzogTWFwPHN0cmluZywgTG9hZGluZ1N0YXRlPjtcbn1cblxudHlwZSBPYnNlcnZlZFZhbHVlT2Y8VD4gPSBUIGV4dGVuZHMgT2JzZXJ2YWJsZTxpbmZlciBVPiA/IFUgOiBuZXZlcjtcblxudHlwZSBPYnNlcnZlZFZhbHVlc09mPFQgZXh0ZW5kcyByZWFkb25seSBPYnNlcnZhYmxlPHVua25vd24+W10+ID0ge1xuICBbSyBpbiBrZXlvZiBUXTogT2JzZXJ2ZWRWYWx1ZU9mPFRbS10+O1xufTtcblxudHlwZSBUcmFuc2Zvcm1GbjxUIGV4dGVuZHMgcmVhZG9ubHkgT2JzZXJ2YWJsZTx1bmtub3duPltdLCBVPiA9IChcbiAgLi4uYXJnczogWy4uLk9ic2VydmVkVmFsdWVzT2Y8VD4sIFN0YXRlXVxuKSA9PiBVO1xuXG5jbGFzcyBDb21wbGV4RGF0YVN0b3JlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfYmFja2VuZCA9IG5ldyBGYWtlRGF0YUJhY2tlbmQoKTtcblxuICBwcml2YXRlIF9zdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U3RhdGU+KHtcbiAgICByb290SWRzOiBbXSxcbiAgICByb290c0xvYWRpbmc6ICdJTklUJyxcbiAgICBhbGxEYXRhOiBuZXcgTWFwKCksXG4gICAgZGF0YUxvYWRpbmc6IG5ldyBNYXAoKSxcbiAgfSk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfcm9vdElkcyA9IHRoaXMuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnJvb3RJZHMpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9hbGxEYXRhID0gdGhpcy5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuYWxsRGF0YSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2xvYWRpbmdEYXRhID0gdGhpcy5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZGF0YUxvYWRpbmcpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9yb290c0xvYWRpbmdTdGF0ZSA9IHRoaXMuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnJvb3RzTG9hZGluZyk7XG4gIHJlYWRvbmx5IGFyZVJvb3RzTG9hZGluZyA9IHRoaXMuc2VsZWN0KFxuICAgIHRoaXMuX3Jvb3RJZHMsXG4gICAgdGhpcy5fbG9hZGluZ0RhdGEsXG4gICAgdGhpcy5fcm9vdHNMb2FkaW5nU3RhdGUsXG4gICAgKHJvb3RJZHMsIGxvYWRpbmcsIHJvb3RzTG9hZGluZykgPT5cbiAgICAgIHJvb3RzTG9hZGluZyAhPT0gJ0xPQURFRCcgfHwgcm9vdElkcy5zb21lKGlkID0+IGxvYWRpbmcuZ2V0KGlkKSAhPT0gJ0xPQURFRCcpLFxuICApO1xuICByZWFkb25seSByb290cyA9IHRoaXMuc2VsZWN0KFxuICAgIHRoaXMuYXJlUm9vdHNMb2FkaW5nLFxuICAgIHRoaXMuX3Jvb3RJZHMsXG4gICAgdGhpcy5fYWxsRGF0YSxcbiAgICAocm9vdHNMb2FkaW5nLCByb290SWRzLCBkYXRhKSA9PiB7XG4gICAgICBpZiAocm9vdHNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhQnlJZHMocm9vdElkcywgZGF0YSk7XG4gICAgfSxcbiAgKTtcblxuICBnZXRDaGlsZHJlbihwYXJlbnRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0KHRoaXMuX2FsbERhdGEsIHRoaXMuX2xvYWRpbmdEYXRhLCAoZGF0YSwgbG9hZGluZykgPT4ge1xuICAgICAgY29uc3QgcGFyZW50RGF0YSA9IGRhdGEuZ2V0KHBhcmVudElkKTtcbiAgICAgIGlmIChwYXJlbnREYXRhPy5jaGlsZHJlbkxvYWRpbmcgIT09ICdMT0FERUQnKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNoaWxkSWRzID0gcGFyZW50RGF0YS5jaGlsZHJlbklkcyA/PyBbXTtcbiAgICAgIGlmIChjaGlsZElkcy5zb21lKGlkID0+IGxvYWRpbmcuZ2V0KGlkKSAhPT0gJ0xPQURFRCcpKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhQnlJZHMoY2hpbGRJZHMsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFJvb3RzKCkge1xuICAgIHRoaXMuX3NldFJvb3RzTG9hZGluZygpO1xuICAgIHRoaXMuX2JhY2tlbmQuZ2V0Um9vdHMoKS5zdWJzY3JpYmUocm9vdHMgPT4ge1xuICAgICAgdGhpcy5fc2V0Um9vdHMocm9vdHMpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZENoaWxkcmVuKHBhcmVudElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXRDaGlsZHJlbkxvYWRpbmcocGFyZW50SWQpO1xuICAgIHRoaXMuX2JhY2tlbmQuZ2V0Q2hpbGRyZW4ocGFyZW50SWQpLnN1YnNjcmliZShjaGlsZHJlbiA9PiB7XG4gICAgICB0aGlzLl9hZGRMb2FkZWREYXRhKHBhcmVudElkLCBjaGlsZHJlbik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRSb290c0xvYWRpbmcoKSB7XG4gICAgdGhpcy5fc3RhdGUubmV4dCh7XG4gICAgICAuLi50aGlzLl9zdGF0ZS52YWx1ZSxcbiAgICAgIHJvb3RzTG9hZGluZzogJ0xPQURJTkcnLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0Um9vdHMocm9vdHM6IEJhY2tlbmREYXRhW10pIHtcbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB0aGlzLl9zdGF0ZS52YWx1ZTtcblxuICAgIHRoaXMuX3N0YXRlLm5leHQoe1xuICAgICAgLi4uY3VycmVudFN0YXRlLFxuICAgICAgcm9vdElkczogcm9vdHMubWFwKHJvb3QgPT4gcm9vdC5pZCksXG4gICAgICByb290c0xvYWRpbmc6ICdMT0FERUQnLFxuICAgICAgLi4udGhpcy5fYWRkRGF0YShjdXJyZW50U3RhdGUsIHJvb3RzKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldENoaWxkcmVuTG9hZGluZyhwYXJlbnRJZDogc3RyaW5nKSB7XG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gdGhpcy5fc3RhdGUudmFsdWU7XG4gICAgY29uc3QgcGFyZW50RGF0YSA9IGN1cnJlbnRTdGF0ZS5hbGxEYXRhLmdldChwYXJlbnRJZCk7XG5cbiAgICB0aGlzLl9zdGF0ZS5uZXh0KHtcbiAgICAgIC4uLmN1cnJlbnRTdGF0ZSxcbiAgICAgIGFsbERhdGE6IG5ldyBNYXAoW1xuICAgICAgICAuLi5jdXJyZW50U3RhdGUuYWxsRGF0YSxcbiAgICAgICAgLi4uKHBhcmVudERhdGEgPyAoW1twYXJlbnRJZCwgey4uLnBhcmVudERhdGEsIGNoaWxkcmVuTG9hZGluZzogJ0xPQURJTkcnfV1dIGFzIGNvbnN0KSA6IFtdKSxcbiAgICAgIF0pLFxuICAgICAgZGF0YUxvYWRpbmc6IG5ldyBNYXAoW1xuICAgICAgICAuLi5jdXJyZW50U3RhdGUuZGF0YUxvYWRpbmcsXG4gICAgICAgIC4uLihwYXJlbnREYXRhPy5jaGlsZHJlbklkcz8ubWFwKGNoaWxkSWQgPT4gW2NoaWxkSWQsICdMT0FESU5HJ10gYXMgY29uc3QpID8/IFtdKSxcbiAgICAgIF0pLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkTG9hZGVkRGF0YShwYXJlbnRJZDogc3RyaW5nLCBjaGlsZERhdGE6IEJhY2tlbmREYXRhW10pIHtcbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB0aGlzLl9zdGF0ZS52YWx1ZTtcblxuICAgIHRoaXMuX3N0YXRlLm5leHQoe1xuICAgICAgLi4uY3VycmVudFN0YXRlLFxuICAgICAgLi4udGhpcy5fYWRkRGF0YShjdXJyZW50U3RhdGUsIGNoaWxkRGF0YSwgcGFyZW50SWQpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRGF0YShcbiAgICB7YWxsRGF0YSwgZGF0YUxvYWRpbmd9OiBTdGF0ZSxcbiAgICBkYXRhOiBCYWNrZW5kRGF0YVtdLFxuICAgIHBhcmVudElkPzogc3RyaW5nLFxuICApOiBQaWNrPFN0YXRlLCAnYWxsRGF0YScgfCAnZGF0YUxvYWRpbmcnPiB7XG4gICAgY29uc3QgcGFyZW50RGF0YSA9IHBhcmVudElkICYmIGFsbERhdGEuZ2V0KHBhcmVudElkKTtcbiAgICBjb25zdCBhbGxDaGlsZHJlbiA9IGRhdGEuZmxhdE1hcChkYXR1bSA9PiBkYXR1bS5jaGlsZHJlbiA/PyBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsbERhdGE6IG5ldyBNYXAoW1xuICAgICAgICAuLi5hbGxEYXRhLFxuICAgICAgICAuLi5kYXRhLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGRhdHVtLmlkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogZGF0dW0uaWQsXG4gICAgICAgICAgICAgIG5hbWU6IGRhdHVtLm5hbWUsXG4gICAgICAgICAgICAgIHBhcmVudElkLFxuICAgICAgICAgICAgICBjaGlsZHJlbklkczogZGF0dW0uY2hpbGRyZW4sXG4gICAgICAgICAgICAgIGNoaWxkcmVuTG9hZGluZzogJ0lOSVQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdIGFzIGNvbnN0O1xuICAgICAgICB9KSxcbiAgICAgICAgLi4uKHBhcmVudERhdGEgPyAoW1twYXJlbnRJZCwgey4uLnBhcmVudERhdGEsIGNoaWxkcmVuTG9hZGluZzogJ0xPQURFRCd9XV0gYXMgY29uc3QpIDogW10pLFxuICAgICAgXSksXG4gICAgICBkYXRhTG9hZGluZzogbmV3IE1hcChbXG4gICAgICAgIC4uLmRhdGFMb2FkaW5nLFxuICAgICAgICAuLi5kYXRhLm1hcChkYXR1bSA9PiBbZGF0dW0uaWQsICdMT0FERUQnXSBhcyBjb25zdCksXG4gICAgICAgIC4uLmFsbENoaWxkcmVuLm1hcChjaGlsZElkID0+IFtjaGlsZElkLCAnSU5JVCddIGFzIGNvbnN0KSxcbiAgICAgIF0pLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9nZXREYXRhQnlJZHMoaWRzOiBzdHJpbmdbXSwgZGF0YTogU3RhdGVbJ2FsbERhdGEnXSkge1xuICAgIHJldHVybiBpZHNcbiAgICAgIC5tYXAoaWQgPT4gZGF0YS5nZXQoaWQpKVxuICAgICAgLmZpbHRlcig8VD4oaXRlbTogVCB8IHVuZGVmaW5lZCk6IGl0ZW0gaXMgVCA9PiAhIWl0ZW0pXG4gICAgICAubWFwKGRhdHVtID0+IG5ldyBUcmFuc2Zvcm1lZERhdGEoZGF0dW0pKTtcbiAgfVxuXG4gIHNlbGVjdDxUIGV4dGVuZHMgcmVhZG9ubHkgT2JzZXJ2YWJsZTx1bmtub3duPltdLCBVPihcbiAgICAuLi5zb3VyY2VzQW5kVHJhbnNmb3JtOiBbLi4uVCwgVHJhbnNmb3JtRm48VCwgVT5dXG4gICkge1xuICAgIGNvbnN0IHNvdXJjZXMgPSBzb3VyY2VzQW5kVHJhbnNmb3JtLnNsaWNlKDAsIC0xKSBhcyB1bmtub3duIGFzIFQ7XG4gICAgY29uc3QgdHJhbnNmb3JtRm4gPSBzb3VyY2VzQW5kVHJhbnNmb3JtW3NvdXJjZXNBbmRUcmFuc2Zvcm0ubGVuZ3RoIC0gMV0gYXMgVHJhbnNmb3JtRm48VCwgVT47XG5cbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbLi4uc291cmNlcywgdGhpcy5fc3RhdGVdKS5waXBlKFxuICAgICAgbWFwKGFyZ3MgPT4gdHJhbnNmb3JtRm4oLi4uKGFyZ3MgYXMgWy4uLk9ic2VydmVkVmFsdWVzT2Y8VD4sIFN0YXRlXSkpKSxcbiAgICAgIHNoYXJlUmVwbGF5KHtyZWZDb3VudDogdHJ1ZSwgYnVmZmVyU2l6ZTogMX0pLFxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGl0bGUgQ29tcGxleCBleGFtcGxlIG1ha2luZyB1c2Ugb2YgdGhlIHJlZHV4IHBhdHRlcm4uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay10cmVlLWNvbXBsZXgtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXRyZWUtY29tcGxleC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLXRyZWUtY29tcGxleC1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrVHJlZU1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBDb21tb25Nb2R1bGUsIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUcmVlQ29tcGxleEV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHJlYWRvbmx5IF9kYXRhU3RvcmUgPSBuZXcgQ29tcGxleERhdGFTdG9yZSgpO1xuXG4gIGFyZVJvb3RzTG9hZGluZyA9IHRoaXMuX2RhdGFTdG9yZS5hcmVSb290c0xvYWRpbmc7XG4gIHJvb3RzID0gdGhpcy5fZGF0YVN0b3JlLnJvb3RzO1xuXG4gIGdldENoaWxkcmVuID0gKG5vZGU6IFRyYW5zZm9ybWVkRGF0YSkgPT4gdGhpcy5fZGF0YVN0b3JlLmdldENoaWxkcmVuKG5vZGUucmF3LmlkKTtcbiAgdHJhY2tCeSA9IChpbmRleDogbnVtYmVyLCBub2RlOiBUcmFuc2Zvcm1lZERhdGEpID0+IHRoaXMuZXhwYW5zaW9uS2V5KG5vZGUpO1xuICBleHBhbnNpb25LZXkgPSAobm9kZTogVHJhbnNmb3JtZWREYXRhKSA9PiBub2RlLnJhdy5pZDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9kYXRhU3RvcmUubG9hZFJvb3RzKCk7XG4gIH1cblxuICBvbkV4cGFuZChub2RlOiBUcmFuc2Zvcm1lZERhdGEsIGV4cGFuZGVkOiBib29sZWFuKSB7XG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAvLyBPbmx5IHBlcmZvcm0gYSBsb2FkIG9uIGV4cGFuc2lvbi5cbiAgICAgIHRoaXMuX2RhdGFTdG9yZS5sb2FkQ2hpbGRyZW4obm9kZS5yYXcuaWQpO1xuICAgIH1cbiAgfVxufVxuIiwiQGlmIChhcmVSb290c0xvYWRpbmcgfCBhc3luYykge1xuICA8bWF0LXNwaW5uZXI+PC9tYXQtc3Bpbm5lcj5cbn0gQGVsc2Uge1xuICA8Y2RrLXRyZWVcbiAgICAgICN0cmVlXG4gICAgICBbZGF0YVNvdXJjZV09XCJyb290c1wiXG4gICAgICBbY2hpbGRyZW5BY2Nlc3Nvcl09XCJnZXRDaGlsZHJlblwiXG4gICAgICBbdHJhY2tCeV09XCJ0cmFja0J5XCJcbiAgICAgIFtleHBhbnNpb25LZXldPVwiZXhwYW5zaW9uS2V5XCI+XG4gICAgPGNkay10cmVlLW5vZGVcbiAgICAgICAgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGVcIlxuICAgICAgICBjZGtUcmVlTm9kZVBhZGRpbmdcbiAgICAgICAgW2Nka1RyZWVOb2RlVHlwZWFoZWFkTGFiZWxdPVwibm9kZS5yYXcubmFtZVwiXG4gICAgICAgIFtpc0V4cGFuZGFibGVdPVwibm9kZS5pc0V4cGFuZGFibGUoKVwiXG4gICAgICAgIChleHBhbmRlZENoYW5nZSk9XCJvbkV4cGFuZChub2RlLCAkZXZlbnQpXCI+XG4gICAgICA8IS0tIFNwaW5uZXIgd2hlbiBub2RlIGlzIGxvYWRpbmcgY2hpbGRyZW47IHRoaXMgcmVwbGFjZXMgdGhlIGV4cGFuZCBidXR0b24uIC0tPlxuICAgICAgQGlmIChub2RlLmFyZUNoaWxkcmVuTG9hZGluZygpKSB7XG4gICAgICAgIDxtYXQtc3Bpbm5lciBkaWFtZXRlcj1cIjQ4XCIgbW9kZT1cImluZGV0ZXJtaW5hdGVcIj48L21hdC1zcGlubmVyPlxuICAgICAgfVxuXG4gICAgICBAaWYgKCFub2RlLmFyZUNoaWxkcmVuTG9hZGluZygpICYmIG5vZGUuaXNFeHBhbmRhYmxlKCkpIHtcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgICBjZGtUcmVlTm9kZVRvZ2dsZVxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9nZ2xlICcgKyBub2RlLnJhdy5uYW1lXCI+XG4gICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICAgICAge3t0cmVlLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIH1cblxuICAgICAgPCEtLSBTcGFjZXIgZm9yIGxlYWYgbm9kZXMgLS0+XG4gICAgICBAaWYgKG5vZGUuaXNMZWFmKCkpIHtcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZ2dsZS1zcGFjZXJcIj48L2Rpdj5cbiAgICAgIH1cblxuICAgICAgPHNwYW4+e3tub2RlLnJhdy5uYW1lfX08L3NwYW4+XG4gICAgPC9jZGstdHJlZS1ub2RlPlxuICA8L2Nkay10cmVlPlxufVxuIl19