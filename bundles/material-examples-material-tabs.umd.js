(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/tabs'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/tabs', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/input', '@angular/material/tabs', 'rxjs'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.tabs = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material['button-toggle'], global.ng.material.checkbox, global.ng.material.icon, global.ng.material.input, global.ng.material.tabs, global.rxjs));
}(this, function (exports, common, core, forms, button, buttonToggle, checkbox, icon, input, tabs, rxjs) { 'use strict';

    /**
     * @title Tab group with aligned labels
     */
    var TabGroupAlignExample = /** @class */ (function () {
        function TabGroupAlignExample() {
        }
        TabGroupAlignExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tab-group-align-example',
                        template: "<mat-tab-group mat-align-tabs=\"start\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"center\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"end\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n",
                        styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"]
                    }] }
        ];
        return TabGroupAlignExample;
    }());

    /**
     * @title Tab group animations
     */
    var TabGroupAnimationsExample = /** @class */ (function () {
        function TabGroupAnimationsExample() {
        }
        TabGroupAnimationsExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tab-group-animations-example',
                        template: "<h3>No animation</h3>\n\n<mat-tab-group animationDuration=\"0ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<h3>Very slow animation</h3>\n<mat-tab-group animationDuration=\"2000ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n",
                        styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"]
                    }] }
        ];
        return TabGroupAnimationsExample;
    }());

    /**
     * @title Tab group with asynchronously loading tab contents
     */
    var TabGroupAsyncExample = /** @class */ (function () {
        function TabGroupAsyncExample() {
            this.asyncTabs = new rxjs.Observable(function (observer) {
                setTimeout(function () {
                    observer.next([
                        { label: 'First', content: 'Content 1' },
                        { label: 'Second', content: 'Content 2' },
                        { label: 'Third', content: 'Content 3' },
                    ]);
                }, 1000);
            });
        }
        TabGroupAsyncExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tab-group-async-example',
                        template: "<ng-container *ngIf=\"(asyncTabs | async) === null\">\n  Loading tabs...\n</ng-container>\n\n<mat-tab-group>\n  <mat-tab *ngFor=\"let tab of asyncTabs | async\">\n    <ng-template mat-tab-label>{{tab.label}}</ng-template>\n    {{tab.content}}\n  </mat-tab>\n</mat-tab-group>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        /** @nocollapse */
        TabGroupAsyncExample.ctorParameters = function () { return []; };
        return TabGroupAsyncExample;
    }());

    /**
     * @title Basic use of the tab group
     */
    var TabGroupBasicExample = /** @class */ (function () {
        function TabGroupBasicExample() {
        }
        TabGroupBasicExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tab-group-basic-example',
                        template: "<mat-tab-group>\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return TabGroupBasicExample;
    }());

    /**
     * @title Using tabs with a custom label template
     */
    var TabGroupCustomLabelExample = /** @class */ (function () {
        function TabGroupCustomLabelExample() {
        }
        TabGroupCustomLabelExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tab-group-custom-label-example',
                        template: "<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      First\n    </ng-template>\n    Content 1\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Second\n    </ng-template>\n    Content 2\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Third\n    </ng-template>\n\n    Content 3\n  </mat-tab>\n</mat-tab-group>\n",
                        styles: [".example-tab-icon {\n  margin-right: 8px;\n}\n"]
                    }] }
        ];
        return TabGroupCustomLabelExample;
    }());

    /**
     * @title Tab group with dynamic height based on tab contents
     */
    var TabGroupDynamicHeightExample = /** @class */ (function () {
        function TabGroupDynamicHeightExample() {
        }
        TabGroupDynamicHeightExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tab-group-dynamic-height-example',
                        template: "<mat-tab-group dynamicHeight>\n  <mat-tab label=\"Short tab\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      Small content\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Long tab\">\n    <div class=\"example-large-box mat-elevation-z4\">\n      Large content\n    </div>\n  </mat-tab>\n</mat-tab-group>\n",
                        styles: [".example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n"]
                    }] }
        ];
        return TabGroupDynamicHeightExample;
    }());

    /**
     * @title Tab group with dynamically changing tabs
     */
    var TabGroupDynamicExample = /** @class */ (function () {
        function TabGroupDynamicExample() {
            this.tabs = ['First', 'Second', 'Third'];
            this.selected = new forms.FormControl(0);
        }
        TabGroupDynamicExample.prototype.addTab = function (selectAfterAdding) {
            this.tabs.push('New');
            if (selectAfterAdding) {
                this.selected.setValue(this.tabs.length - 1);
            }
        };
        TabGroupDynamicExample.prototype.removeTab = function (index) {
            this.tabs.splice(index, 1);
        };
        TabGroupDynamicExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tab-group-dynamic-example',
                        template: "<div>\n  <span class=\"example-input-label\"> Selected tab index: </span>\n  <mat-form-field>\n    <input matInput type=\"number\" [formControl]=\"selected\">\n  </mat-form-field>\n</div>\n\n<div>\n  <button mat-raised-button\n          class=\"example-add-tab-button\"\n          (click)=\"addTab(selectAfterAdding.checked)\">\n    Add new tab\n  </button>\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n</div>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"selected.setValue($event)\">\n  <mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">\n    Contents for {{tab}} tab\n\n    <button mat-raised-button\n            class=\"example-delete-tab-button\"\n            [disabled]=\"tabs.length === 1\"\n            (click)=\"removeTab(index)\">\n      Delete Tab\n    </button>\n  </mat-tab>\n</mat-tab-group>\n",
                        styles: [".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n"]
                    }] }
        ];
        return TabGroupDynamicExample;
    }());

    /**
     * @title Tab group with the headers on the bottom
     */
    var TabGroupHeaderBelowExample = /** @class */ (function () {
        function TabGroupHeaderBelowExample() {
        }
        TabGroupHeaderBelowExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tab-group-header-below-example',
                        template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return TabGroupHeaderBelowExample;
    }());

    /**
     * @title Tab group where the tab content is loaded lazily (when activated)
     */
    var TabGroupLazyLoadedExample = /** @class */ (function () {
        function TabGroupLazyLoadedExample() {
            this.tabLoadTimes = [];
        }
        TabGroupLazyLoadedExample.prototype.getTimeLoaded = function (index) {
            if (!this.tabLoadTimes[index]) {
                this.tabLoadTimes[index] = new Date();
            }
            return this.tabLoadTimes[index];
        };
        TabGroupLazyLoadedExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tab-group-lazy-loaded-example',
                        template: "<mat-tab-group>\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return TabGroupLazyLoadedExample;
    }());

    /**
     * @title Tab group with stretched labels
     */
    var TabGroupStretchedExample = /** @class */ (function () {
        function TabGroupStretchedExample() {
        }
        TabGroupStretchedExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tab-group-stretched-example',
                        template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n",
                        styles: [".example-stretched-tabs {\n  max-width: 800px;\n}\n"]
                    }] }
        ];
        return TabGroupStretchedExample;
    }());

    /**
     * @title Customizing the theme options on the tab group
     */
    var TabGroupThemeExample = /** @class */ (function () {
        function TabGroupThemeExample() {
        }
        TabGroupThemeExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tab-group-theme-example',
                        template: "<div>\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n    <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\"> Color </span>\n</div>\n\n<div>\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n    <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\"> Background Color </span>\n</div>\n\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n",
                        styles: [".example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n"]
                    }] }
        ];
        return TabGroupThemeExample;
    }());

    /**
     * @title Basic use of the tab nav bar
     */
    var TabNavBarBasicExample = /** @class */ (function () {
        function TabNavBarBasicExample() {
            this.links = ['First', 'Second', 'Third'];
            this.activeLink = this.links[0];
            this.background = '';
        }
        TabNavBarBasicExample.prototype.toggleBackground = function () {
            this.background = this.background ? '' : 'primary';
        };
        TabNavBarBasicExample.prototype.addLink = function () {
            this.links.push("Link " + (this.links.length + 1));
        };
        TabNavBarBasicExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'tab-nav-bar-basic-example',
                        template: "<nav mat-tab-nav-bar [backgroundColor]=\"background\">\n  <a mat-tab-link *ngFor=\"let link of links\"\n     (click)=\"activeLink = link\"\n     [active]=\"activeLink == link\"> {{link}} </a>\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n",
                        styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"]
                    }] }
        ];
        return TabNavBarBasicExample;
    }());

    var EXAMPLES = [
        TabGroupAlignExample,
        TabGroupAnimationsExample,
        TabGroupAsyncExample,
        TabGroupBasicExample,
        TabGroupCustomLabelExample,
        TabGroupDynamicExample,
        TabGroupDynamicHeightExample,
        TabGroupHeaderBelowExample,
        TabGroupLazyLoadedExample,
        TabGroupStretchedExample,
        TabGroupThemeExample,
        TabNavBarBasicExample,
    ];
    var TabGroupExamplesModule = /** @class */ (function () {
        function TabGroupExamplesModule() {
        }
        TabGroupExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            button.MatButtonModule,
                            buttonToggle.MatButtonToggleModule,
                            checkbox.MatCheckboxModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            tabs.MatTabsModule,
                            forms.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return TabGroupExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TabGroupAlignExample = TabGroupAlignExample;
    exports.TabGroupAnimationsExample = TabGroupAnimationsExample;
    exports.TabGroupAsyncExample = TabGroupAsyncExample;
    exports.TabGroupBasicExample = TabGroupBasicExample;
    exports.TabGroupCustomLabelExample = TabGroupCustomLabelExample;
    exports.TabGroupDynamicExample = TabGroupDynamicExample;
    exports.TabGroupDynamicHeightExample = TabGroupDynamicHeightExample;
    exports.TabGroupHeaderBelowExample = TabGroupHeaderBelowExample;
    exports.TabGroupLazyLoadedExample = TabGroupLazyLoadedExample;
    exports.TabGroupStretchedExample = TabGroupStretchedExample;
    exports.TabGroupThemeExample = TabGroupThemeExample;
    exports.TabNavBarBasicExample = TabNavBarBasicExample;
    exports.TabGroupExamplesModule = TabGroupExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-tabs.umd.js.map
