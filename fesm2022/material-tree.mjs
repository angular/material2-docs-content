import * as i0 from '@angular/core';
import { inject, signal, Injectable, ChangeDetectionStrategy, Component } from '@angular/core';
import * as i1$2 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i1$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1 from '@angular/material/tree';
import { MatTreeModule } from '@angular/material/tree';
import { ENTER, SPACE } from '@angular/cdk/keycodes';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER } from '@angular/cdk/a11y';

class DynamicDatabase {
  dataMap = new Map([['Fruits', ['Apple', 'Orange', 'Banana']], ['Vegetables', ['Tomato', 'Potato', 'Onion']], ['Apple', ['Fuji', 'Macintosh']], ['Onion', ['Yellow', 'White', 'Purple']]]);
  rootLevelNodes = ['Fruits', 'Vegetables'];
  initialData() {
    return this.rootLevelNodes.map(name => this.createNode(name, 0, true));
  }
  createNode(name, level, expandable) {
    return {
      name,
      level,
      expandable,
      isLoading: signal(false),
      children: undefined
    };
  }
  getChildren(name) {
    return this.dataMap.get(name);
  }
  isExpandable(name) {
    return this.dataMap.has(name);
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.0-next.4",
    ngImport: i0,
    type: DynamicDatabase,
    deps: [],
    target: i0.ɵɵFactoryTarget.Injectable
  });
  static ɵprov = i0.ɵɵngDeclareInjectable({
    minVersion: "12.0.0",
    version: "22.0.0-next.4",
    ngImport: i0,
    type: DynamicDatabase,
    providedIn: 'root'
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.0-next.4",
  ngImport: i0,
  type: DynamicDatabase,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: 'root'
    }]
  }]
});
class TreeDynamicExample {
  _database = inject(DynamicDatabase);
  dataSource = this._database.initialData();
  childrenAccessor = node => node.children ?? [];
  hasChild = (_, node) => node.expandable;
  onNodeExpanded(node, expanded) {
    if (!expanded || node.children) {
      return;
    }
    const childNames = this._database.getChildren(node.name);
    if (!childNames) {
      return;
    }
    node.isLoading.set(true);
    setTimeout(() => {
      node.children = childNames.map(name => this._database.createNode(name, node.level + 1, this._database.isExpandable(name)));
      node.isLoading.set(false);
    }, 1000);
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.0-next.4",
    ngImport: i0,
    type: TreeDynamicExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "22.0.0-next.4",
    type: TreeDynamicExample,
    isStandalone: true,
    selector: "tree-dynamic-example",
    ngImport: i0,
    template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button matIconButton disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding matTreeNodeToggle\n    [cdkTreeNodeTypeaheadLabel]=\"node.name\" (expandedChange)=\"onNodeExpanded(node, $event)\">\n    <button matIconButton [attr.aria-label]=\"'Toggle ' + node.name\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    @if (node.isLoading()) {\n    <mat-progress-bar mode=\"indeterminate\" class=\"example-tree-progress-bar\"></mat-progress-bar>\n    }\n  </mat-tree-node>\n</mat-tree>",
    styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"],
    dependencies: [{
      kind: "ngmodule",
      type: MatTreeModule
    }, {
      kind: "directive",
      type: i1.MatTreeNodeDef,
      selector: "[matTreeNodeDef]",
      inputs: ["matTreeNodeDefWhen", "matTreeNode"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodePadding,
      selector: "[matTreeNodePadding]",
      inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodeToggle,
      selector: "[matTreeNodeToggle]",
      inputs: ["matTreeNodeToggleRecursive"]
    }, {
      kind: "component",
      type: i1.MatTree,
      selector: "mat-tree",
      exportAs: ["matTree"]
    }, {
      kind: "directive",
      type: i1.MatTreeNode,
      selector: "mat-tree-node",
      inputs: ["tabIndex", "disabled"],
      outputs: ["activation", "expandedChange"],
      exportAs: ["matTreeNode"]
    }, {
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$1.MatIconButton,
      selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]",
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatIconModule
    }, {
      kind: "component",
      type: i3.MatIcon,
      selector: "mat-icon",
      inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"],
      exportAs: ["matIcon"]
    }, {
      kind: "ngmodule",
      type: MatProgressBarModule
    }, {
      kind: "component",
      type: i1$2.MatProgressBar,
      selector: "mat-progress-bar",
      inputs: ["color", "value", "bufferValue", "mode"],
      outputs: ["animationEnd"],
      exportAs: ["matProgressBar"]
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.0-next.4",
  ngImport: i0,
  type: TreeDynamicExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-dynamic-example',
      imports: [MatTreeModule, MatButtonModule, MatIconModule, MatProgressBarModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button matIconButton disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding matTreeNodeToggle\n    [cdkTreeNodeTypeaheadLabel]=\"node.name\" (expandedChange)=\"onNodeExpanded(node, $event)\">\n    <button matIconButton [attr.aria-label]=\"'Toggle ' + node.name\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    @if (node.isLoading()) {\n    <mat-progress-bar mode=\"indeterminate\" class=\"example-tree-progress-bar\"></mat-progress-bar>\n    }\n  </mat-tree-node>\n</mat-tree>",
      styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"]
    }]
  }]
});

class TreeFlatOverviewExample {
  dataSource = EXAMPLE_DATA$5;
  childrenAccessor = node => node.children ?? [];
  hasChild = (_, node) => !!node.children && node.children.length > 0;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.0-next.4",
    ngImport: i0,
    type: TreeFlatOverviewExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.0.0-next.4",
    type: TreeFlatOverviewExample,
    isStandalone: true,
    selector: "tree-flat-overview-example",
    ngImport: i0,
    template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button matIconButton disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button matIconButton matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n",
    dependencies: [{
      kind: "ngmodule",
      type: MatTreeModule
    }, {
      kind: "directive",
      type: i1.MatTreeNodeDef,
      selector: "[matTreeNodeDef]",
      inputs: ["matTreeNodeDefWhen", "matTreeNode"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodePadding,
      selector: "[matTreeNodePadding]",
      inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodeToggle,
      selector: "[matTreeNodeToggle]",
      inputs: ["matTreeNodeToggleRecursive"]
    }, {
      kind: "component",
      type: i1.MatTree,
      selector: "mat-tree",
      exportAs: ["matTree"]
    }, {
      kind: "directive",
      type: i1.MatTreeNode,
      selector: "mat-tree-node",
      inputs: ["tabIndex", "disabled"],
      outputs: ["activation", "expandedChange"],
      exportAs: ["matTreeNode"]
    }, {
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$1.MatIconButton,
      selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]",
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatIconModule
    }, {
      kind: "component",
      type: i3.MatIcon,
      selector: "mat-icon",
      inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"],
      exportAs: ["matIcon"]
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.0-next.4",
  ngImport: i0,
  type: TreeFlatOverviewExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-flat-overview-example',
      imports: [MatTreeModule, MatButtonModule, MatIconModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button matIconButton disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button matIconButton matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n"
    }]
  }]
});
const EXAMPLE_DATA$5 = [{
  name: 'Fruit',
  children: [{
    name: 'Apple'
  }, {
    name: 'Banana'
  }, {
    name: 'Fruit loops'
  }]
}, {
  name: 'Vegetables',
  children: [{
    name: 'Green',
    children: [{
      name: 'Broccoli'
    }, {
      name: 'Brussels sprouts'
    }]
  }, {
    name: 'Orange',
    children: [{
      name: 'Pumpkins'
    }, {
      name: 'Carrots'
    }]
  }]
}];

class TreeFlatChildAccessorOverviewExample {
  dataSource = EXAMPLE_DATA$4;
  childrenAccessor = node => node.children ?? [];
  hasChild = (_, node) => !!node.children && node.children.length > 0;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.0-next.4",
    ngImport: i0,
    type: TreeFlatChildAccessorOverviewExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.0.0-next.4",
    type: TreeFlatChildAccessorOverviewExample,
    isStandalone: true,
    selector: "tree-flat-child-accessor-overview-example",
    ngImport: i0,
    template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button matIconButton disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button matIconButton matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n",
    dependencies: [{
      kind: "ngmodule",
      type: MatTreeModule
    }, {
      kind: "directive",
      type: i1.MatTreeNodeDef,
      selector: "[matTreeNodeDef]",
      inputs: ["matTreeNodeDefWhen", "matTreeNode"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodePadding,
      selector: "[matTreeNodePadding]",
      inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodeToggle,
      selector: "[matTreeNodeToggle]",
      inputs: ["matTreeNodeToggleRecursive"]
    }, {
      kind: "component",
      type: i1.MatTree,
      selector: "mat-tree",
      exportAs: ["matTree"]
    }, {
      kind: "directive",
      type: i1.MatTreeNode,
      selector: "mat-tree-node",
      inputs: ["tabIndex", "disabled"],
      outputs: ["activation", "expandedChange"],
      exportAs: ["matTreeNode"]
    }, {
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$1.MatIconButton,
      selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]",
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatIconModule
    }, {
      kind: "component",
      type: i3.MatIcon,
      selector: "mat-icon",
      inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"],
      exportAs: ["matIcon"]
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.0-next.4",
  ngImport: i0,
  type: TreeFlatChildAccessorOverviewExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-flat-child-accessor-overview-example',
      imports: [MatTreeModule, MatButtonModule, MatIconModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button matIconButton disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button matIconButton matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n"
    }]
  }]
});
const EXAMPLE_DATA$4 = [{
  name: 'Fruit',
  children: [{
    name: 'Apple'
  }, {
    name: 'Banana'
  }, {
    name: 'Fruit loops'
  }]
}, {
  name: 'Vegetables',
  children: [{
    name: 'Green',
    children: [{
      name: 'Broccoli'
    }, {
      name: 'Brussels sprouts'
    }]
  }, {
    name: 'Orange',
    children: [{
      name: 'Pumpkins'
    }, {
      name: 'Carrots'
    }]
  }]
}];

class TreeHarnessExample {
  dataSource = EXAMPLE_DATA$3;
  childrenAccessor = node => node.children ?? [];
  hasChild = (_, node) => !!node.children && node.children.length > 0;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.0-next.4",
    ngImport: i0,
    type: TreeHarnessExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.0.0-next.4",
    type: TreeHarnessExample,
    isStandalone: true,
    selector: "tree-harness-example",
    ngImport: i0,
    template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button matIconButton disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding matTreeNodeToggle\n    [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button matIconButton matTreeNodeToggle [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>",
    dependencies: [{
      kind: "ngmodule",
      type: MatTreeModule
    }, {
      kind: "directive",
      type: i1.MatTreeNodeDef,
      selector: "[matTreeNodeDef]",
      inputs: ["matTreeNodeDefWhen", "matTreeNode"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodePadding,
      selector: "[matTreeNodePadding]",
      inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodeToggle,
      selector: "[matTreeNodeToggle]",
      inputs: ["matTreeNodeToggleRecursive"]
    }, {
      kind: "component",
      type: i1.MatTree,
      selector: "mat-tree",
      exportAs: ["matTree"]
    }, {
      kind: "directive",
      type: i1.MatTreeNode,
      selector: "mat-tree-node",
      inputs: ["tabIndex", "disabled"],
      outputs: ["activation", "expandedChange"],
      exportAs: ["matTreeNode"]
    }, {
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$1.MatIconButton,
      selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]",
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatIconModule
    }, {
      kind: "component",
      type: i3.MatIcon,
      selector: "mat-icon",
      inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"],
      exportAs: ["matIcon"]
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.0-next.4",
  ngImport: i0,
  type: TreeHarnessExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-harness-example',
      imports: [MatTreeModule, MatButtonModule, MatIconModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button matIconButton disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding matTreeNodeToggle\n    [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button matIconButton matTreeNodeToggle [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>"
    }]
  }]
});
const EXAMPLE_DATA$3 = [{
  name: 'Flat Group 1',
  children: [{
    name: 'Flat Leaf 1.1'
  }, {
    name: 'Flat Leaf 1.2'
  }, {
    name: 'Flat Leaf 1.3'
  }]
}, {
  name: 'Flat Group 2',
  children: [{
    name: 'Flat Group 2.1',
    children: [{
      name: 'Flat Leaf 2.1.1'
    }, {
      name: 'Flat Leaf 2.1.2'
    }, {
      name: 'Flat Leaf 2.1.3'
    }]
  }]
}];

const batchSize = 3;
class LoadmoreDatabase {
  _nodes = new Map();
  rootNodes = ['Vegetables', 'Fruits'];
  childMap = new Map([['Fruits', ['Apple', 'Orange', 'Banana']], ['Vegetables', ['Tomato', 'Potato', 'Onion']], ['Apple', ['Gala', 'Braeburn', 'Fuji', 'Macintosh', 'Golden Delicious', 'Red Delicious', 'Empire', 'Granny Smith', 'Cameo', 'Baldwin', 'Jonagold']], ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']]]);
  initialize() {
    return this.rootNodes.map(name => this._getOrCreateNode(name, null));
  }
  _getOrCreateNode(name, parent) {
    if (!this._nodes.has(name)) {
      this._nodes.set(name, {
        name,
        parent,
        expandable: this.childMap.has(name),
        isLoadMore: false,
        children: undefined
      });
    }
    return this._nodes.get(name);
  }
  loadChildren(parentName, onlyFirstTime = false) {
    const parent = this._nodes.get(parentName);
    const childNames = this.childMap.get(parentName);
    if (!parent || !childNames) {
      return;
    }
    if (onlyFirstTime && parent.children && parent.children.length > 0) {
      return;
    }
    const currentChildCount = parent.children?.filter(c => !c.isLoadMore).length ?? 0;
    const newChildCount = currentChildCount + batchSize;
    const children = childNames.slice(0, newChildCount).map(name => this._getOrCreateNode(name, parentName));
    if (newChildCount < childNames.length) {
      children.push({
        name: `LOAD_MORE_${parentName}_${Date.now()}`,
        parent: parentName,
        expandable: false,
        isLoadMore: true
      });
    }
    parent.children = children;
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.0-next.4",
    ngImport: i0,
    type: LoadmoreDatabase,
    deps: [],
    target: i0.ɵɵFactoryTarget.Injectable
  });
  static ɵprov = i0.ɵɵngDeclareInjectable({
    minVersion: "12.0.0",
    version: "22.0.0-next.4",
    ngImport: i0,
    type: LoadmoreDatabase
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.0-next.4",
  ngImport: i0,
  type: LoadmoreDatabase,
  decorators: [{
    type: Injectable
  }]
});
class TreeLoadmoreExample {
  _database = inject(LoadmoreDatabase);
  dataSource = signal([], ...(ngDevMode ? [{
    debugName: "dataSource"
  }] : []));
  childrenAccessor = node => node.children ?? [];
  hasChild = (_, node) => node.expandable;
  isLoadMore = (_, node) => node.isLoadMore;
  constructor() {
    this.dataSource.set(this._database.initialize());
  }
  loadChildren(node) {
    this._database.loadChildren(node.name, true);
    this.dataSource.set([...this.dataSource()]);
  }
  loadOnClick(event, node) {
    this._loadSiblings(event.target, node);
  }
  loadOnKeypress(event, node) {
    if (event.keyCode === ENTER || event.keyCode === SPACE) {
      this._loadSiblings(event.target, node);
    }
  }
  _loadSiblings(nodeElement, node) {
    if (node.parent) {
      const previousSibling = nodeElement.previousElementSibling;
      this._database.loadChildren(node.parent);
      this.dataSource.set([...this.dataSource()]);
      const focusDestination = previousSibling?.nextElementSibling || previousSibling;
      if (focusDestination) {
        focusDestination.focus();
      }
    }
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.0-next.4",
    ngImport: i0,
    type: TreeLoadmoreExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.0.0-next.4",
    type: TreeLoadmoreExample,
    isStandalone: true,
    selector: "tree-loadmore-example",
    providers: [LoadmoreDatabase],
    ngImport: i0,
    template: "<mat-tree #tree [dataSource]=\"dataSource()\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button matIconButton disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding matTreeNodeToggle\n    (expandedChange)=\"loadChildren(node)\" [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button matIconButton [attr.aria-label]=\"'Toggle ' + node.name\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <mat-tree-node class=\"example-load-more\" *matTreeNodeDef=\"let node; when: isLoadMore\" role=\"treeitem\"\n    (click)=\"loadOnClick($event, node)\" (keydown)=\"loadOnKeypress($event, node)\">\n    Load more of {{node.parent}}...\n  </mat-tree-node>\n</mat-tree>",
    styles: [".example-load-more {\n    border-radius: 10px;\n    padding-left: 15px;\n    padding-right: 15px;\n    cursor: pointer;\n}\n.example-load-more:focus {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.12 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.12);\n}\n.example-load-more:hover {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.04 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.04);\n}\n"],
    dependencies: [{
      kind: "ngmodule",
      type: MatTreeModule
    }, {
      kind: "directive",
      type: i1.MatTreeNodeDef,
      selector: "[matTreeNodeDef]",
      inputs: ["matTreeNodeDefWhen", "matTreeNode"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodePadding,
      selector: "[matTreeNodePadding]",
      inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodeToggle,
      selector: "[matTreeNodeToggle]",
      inputs: ["matTreeNodeToggleRecursive"]
    }, {
      kind: "component",
      type: i1.MatTree,
      selector: "mat-tree",
      exportAs: ["matTree"]
    }, {
      kind: "directive",
      type: i1.MatTreeNode,
      selector: "mat-tree-node",
      inputs: ["tabIndex", "disabled"],
      outputs: ["activation", "expandedChange"],
      exportAs: ["matTreeNode"]
    }, {
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$1.MatIconButton,
      selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]",
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatIconModule
    }, {
      kind: "component",
      type: i3.MatIcon,
      selector: "mat-icon",
      inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"],
      exportAs: ["matIcon"]
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.0-next.4",
  ngImport: i0,
  type: TreeLoadmoreExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-loadmore-example',
      providers: [LoadmoreDatabase],
      imports: [MatTreeModule, MatButtonModule, MatIconModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<mat-tree #tree [dataSource]=\"dataSource()\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button matIconButton disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding matTreeNodeToggle\n    (expandedChange)=\"loadChildren(node)\" [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button matIconButton [attr.aria-label]=\"'Toggle ' + node.name\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <mat-tree-node class=\"example-load-more\" *matTreeNodeDef=\"let node; when: isLoadMore\" role=\"treeitem\"\n    (click)=\"loadOnClick($event, node)\" (keydown)=\"loadOnKeypress($event, node)\">\n    Load more of {{node.parent}}...\n  </mat-tree-node>\n</mat-tree>",
      styles: [".example-load-more {\n    border-radius: 10px;\n    padding-left: 15px;\n    padding-right: 15px;\n    cursor: pointer;\n}\n.example-load-more:focus {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.12 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.12);\n}\n.example-load-more:hover {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.04 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.04);\n}\n"]
    }]
  }],
  ctorParameters: () => []
});

class TreeNestedOverviewExample {
  childrenAccessor = node => node.children ?? [];
  dataSource = EXAMPLE_DATA$2;
  hasChild = (_, node) => !!node.children && node.children.length > 0;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.0-next.4",
    ngImport: i0,
    type: TreeNestedOverviewExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.0.0-next.4",
    type: TreeNestedOverviewExample,
    isStandalone: true,
    selector: "tree-nested-overview-example",
    ngImport: i0,
    template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <!-- There is inline padding applied to this node using styles.\n    This padding value depends on the matIconButton width. -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node\">\n    {{node.name}}\n  </mat-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodeToggle\n    [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <div class=\"mat-tree-node\">\n      <button matIconButton matTreeNodeToggle [attr.aria-label]=\"'Toggle ' + node.name\">\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      {{node.name}}\n    </div>\n    <!-- There is inline padding applied to this div using styles.\n        This padding value depends on the matIconButton width.  -->\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\" role=\"group\">\n      <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-nested-tree-node>\n</mat-tree>",
    styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n/*\n * This padding sets alignment of the nested nodes.\n */\n.example-tree .mat-nested-tree-node div[role=group] {\n  padding-left: 40px;\n}\n\n/*\n * Padding for leaf nodes.\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\n * under the same parent.\n */\n.example-tree div[role=group] > .mat-nested-tree-node {\n  padding-left: 40px;\n}\n"],
    dependencies: [{
      kind: "ngmodule",
      type: MatTreeModule
    }, {
      kind: "directive",
      type: i1.MatNestedTreeNode,
      selector: "mat-nested-tree-node",
      inputs: ["matNestedTreeNode", "disabled", "tabIndex"],
      outputs: ["activation", "expandedChange"],
      exportAs: ["matNestedTreeNode"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodeDef,
      selector: "[matTreeNodeDef]",
      inputs: ["matTreeNodeDefWhen", "matTreeNode"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodeToggle,
      selector: "[matTreeNodeToggle]",
      inputs: ["matTreeNodeToggleRecursive"]
    }, {
      kind: "component",
      type: i1.MatTree,
      selector: "mat-tree",
      exportAs: ["matTree"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodeOutlet,
      selector: "[matTreeNodeOutlet]"
    }, {
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$1.MatIconButton,
      selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]",
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatIconModule
    }, {
      kind: "component",
      type: i3.MatIcon,
      selector: "mat-icon",
      inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"],
      exportAs: ["matIcon"]
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.0-next.4",
  ngImport: i0,
  type: TreeNestedOverviewExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-nested-overview-example',
      imports: [MatTreeModule, MatButtonModule, MatIconModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <!-- There is inline padding applied to this node using styles.\n    This padding value depends on the matIconButton width. -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node\">\n    {{node.name}}\n  </mat-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodeToggle\n    [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <div class=\"mat-tree-node\">\n      <button matIconButton matTreeNodeToggle [attr.aria-label]=\"'Toggle ' + node.name\">\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      {{node.name}}\n    </div>\n    <!-- There is inline padding applied to this div using styles.\n        This padding value depends on the matIconButton width.  -->\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\" role=\"group\">\n      <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-nested-tree-node>\n</mat-tree>",
      styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n/*\n * This padding sets alignment of the nested nodes.\n */\n.example-tree .mat-nested-tree-node div[role=group] {\n  padding-left: 40px;\n}\n\n/*\n * Padding for leaf nodes.\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\n * under the same parent.\n */\n.example-tree div[role=group] > .mat-nested-tree-node {\n  padding-left: 40px;\n}\n"]
    }]
  }]
});
const EXAMPLE_DATA$2 = [{
  name: 'Fruit',
  children: [{
    name: 'Apple'
  }, {
    name: 'Banana'
  }, {
    name: 'Fruit loops'
  }]
}, {
  name: 'Vegetables',
  children: [{
    name: 'Green',
    children: [{
      name: 'Broccoli'
    }, {
      name: 'Brussels sprouts'
    }]
  }, {
    name: 'Orange',
    children: [{
      name: 'Pumpkins'
    }, {
      name: 'Carrots'
    }]
  }]
}];

class TreeNestedChildAccessorOverviewExample {
  childrenAccessor = node => node.children ?? [];
  dataSource = EXAMPLE_DATA$1;
  hasChild = (_, node) => !!node.children && node.children.length > 0;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.0-next.4",
    ngImport: i0,
    type: TreeNestedChildAccessorOverviewExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.0.0-next.4",
    type: TreeNestedChildAccessorOverviewExample,
    isStandalone: true,
    selector: "tree-nested-child-accessor-overview-example",
    ngImport: i0,
    template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <!-- There is inline padding applied to this node using styles.\n    This padding value depends on the matIconButton width. -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node\">\n    {{node.name}}\n  </mat-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node\n      *matTreeNodeDef=\"let node; when: hasChild\"\n      matTreeNodeToggle [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <div class=\"mat-tree-node\">\n      <button matIconButton matTreeNodeToggle\n              [attr.aria-label]=\"'Toggle ' + node.name\">\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      {{node.name}}\n    </div>\n    <!-- There is inline padding applied to this div using styles.\n        This padding value depends on the matIconButton width.  -->\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\"\n        role=\"group\">\n      <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-nested-tree-node>\n</mat-tree>\n",
    styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n/*\n * This padding sets alignment of the nested nodes.\n */\n.example-tree .mat-nested-tree-node div[role=group] {\n  padding-left: 40px;\n}\n\n/*\n * Padding for leaf nodes.\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\n * under the same parent.\n */\n.example-tree div[role=group] > .mat-nested-tree-node {\n  padding-left: 40px;\n}\n"],
    dependencies: [{
      kind: "ngmodule",
      type: MatTreeModule
    }, {
      kind: "directive",
      type: i1.MatNestedTreeNode,
      selector: "mat-nested-tree-node",
      inputs: ["matNestedTreeNode", "disabled", "tabIndex"],
      outputs: ["activation", "expandedChange"],
      exportAs: ["matNestedTreeNode"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodeDef,
      selector: "[matTreeNodeDef]",
      inputs: ["matTreeNodeDefWhen", "matTreeNode"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodeToggle,
      selector: "[matTreeNodeToggle]",
      inputs: ["matTreeNodeToggleRecursive"]
    }, {
      kind: "component",
      type: i1.MatTree,
      selector: "mat-tree",
      exportAs: ["matTree"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodeOutlet,
      selector: "[matTreeNodeOutlet]"
    }, {
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$1.MatIconButton,
      selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]",
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatIconModule
    }, {
      kind: "component",
      type: i3.MatIcon,
      selector: "mat-icon",
      inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"],
      exportAs: ["matIcon"]
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.0-next.4",
  ngImport: i0,
  type: TreeNestedChildAccessorOverviewExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-nested-child-accessor-overview-example',
      imports: [MatTreeModule, MatButtonModule, MatIconModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <!-- There is inline padding applied to this node using styles.\n    This padding value depends on the matIconButton width. -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node\">\n    {{node.name}}\n  </mat-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node\n      *matTreeNodeDef=\"let node; when: hasChild\"\n      matTreeNodeToggle [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <div class=\"mat-tree-node\">\n      <button matIconButton matTreeNodeToggle\n              [attr.aria-label]=\"'Toggle ' + node.name\">\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      {{node.name}}\n    </div>\n    <!-- There is inline padding applied to this div using styles.\n        This padding value depends on the matIconButton width.  -->\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\"\n        role=\"group\">\n      <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-nested-tree-node>\n</mat-tree>\n",
      styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n/*\n * This padding sets alignment of the nested nodes.\n */\n.example-tree .mat-nested-tree-node div[role=group] {\n  padding-left: 40px;\n}\n\n/*\n * Padding for leaf nodes.\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\n * under the same parent.\n */\n.example-tree div[role=group] > .mat-nested-tree-node {\n  padding-left: 40px;\n}\n"]
    }]
  }]
});
const EXAMPLE_DATA$1 = [{
  name: 'Fruit',
  children: [{
    name: 'Apple'
  }, {
    name: 'Banana'
  }, {
    name: 'Fruit loops'
  }]
}, {
  name: 'Vegetables',
  children: [{
    name: 'Green',
    children: [{
      name: 'Broccoli'
    }, {
      name: 'Brussels sprouts'
    }]
  }, {
    name: 'Orange',
    children: [{
      name: 'Pumpkins'
    }, {
      name: 'Carrots'
    }]
  }]
}];

class TreeLegacyKeyboardInterfaceExample {
  treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
  dataSource = new ArrayDataSource(EXAMPLE_DATA);
  hasChild = (_, node) => node.expandable;
  getParentNode(node) {
    const nodeIndex = EXAMPLE_DATA.indexOf(node);
    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (EXAMPLE_DATA[i].level === node.level - 1) {
        return EXAMPLE_DATA[i];
      }
    }
    return null;
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.0-next.4",
    ngImport: i0,
    type: TreeLegacyKeyboardInterfaceExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.0.0-next.4",
    type: TreeLegacyKeyboardInterfaceExample,
    isStandalone: true,
    selector: "tree-legacy-keyboard-interface-example",
    providers: [NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER],
    ngImport: i0,
    template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button matIconButton disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding\n                 isExpandable\n                 [isExpanded]=\"true\"\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n",
    styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"],
    dependencies: [{
      kind: "ngmodule",
      type: MatTreeModule
    }, {
      kind: "directive",
      type: i1.MatTreeNodeDef,
      selector: "[matTreeNodeDef]",
      inputs: ["matTreeNodeDefWhen", "matTreeNode"]
    }, {
      kind: "directive",
      type: i1.MatTreeNodePadding,
      selector: "[matTreeNodePadding]",
      inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"]
    }, {
      kind: "component",
      type: i1.MatTree,
      selector: "mat-tree",
      exportAs: ["matTree"]
    }, {
      kind: "directive",
      type: i1.MatTreeNode,
      selector: "mat-tree-node",
      inputs: ["tabIndex", "disabled"],
      outputs: ["activation", "expandedChange"],
      exportAs: ["matTreeNode"]
    }, {
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$1.MatIconButton,
      selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]",
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatIconModule
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.0-next.4",
  ngImport: i0,
  type: TreeLegacyKeyboardInterfaceExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-legacy-keyboard-interface-example',
      imports: [MatTreeModule, MatButtonModule, MatIconModule],
      providers: [NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button matIconButton disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding\n                 isExpandable\n                 [isExpanded]=\"true\"\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n",
      styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"]
    }]
  }]
});
const EXAMPLE_DATA = [{
  name: 'Fruit',
  expandable: true,
  level: 0
}, {
  name: 'Apple',
  expandable: false,
  level: 1
}, {
  name: 'Banana',
  expandable: false,
  level: 1
}, {
  name: 'Fruit loops',
  expandable: false,
  level: 1
}, {
  name: 'Vegetables',
  expandable: true,
  level: 0
}, {
  name: 'Green',
  expandable: true,
  level: 1
}, {
  name: 'Broccoli',
  expandable: false,
  level: 2
}, {
  name: 'Brussels sprouts',
  expandable: false,
  level: 2
}, {
  name: 'Orange',
  expandable: true,
  level: 1
}, {
  name: 'Pumpkins',
  expandable: false,
  level: 2
}, {
  name: 'Carrots',
  expandable: false,
  level: 2
}];

export { TreeDynamicExample, TreeFlatChildAccessorOverviewExample, TreeFlatOverviewExample, TreeHarnessExample, TreeLegacyKeyboardInterfaceExample, TreeLoadmoreExample, TreeNestedChildAccessorOverviewExample, TreeNestedOverviewExample };
//# sourceMappingURL=material-tree.mjs.map
