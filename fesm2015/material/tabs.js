import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { Observable } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with aligned labels
 */
class TabGroupAlignExample {
}
TabGroupAlignExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-align-example',
                template: "<mat-tab-group mat-align-tabs=\"start\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"center\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"end\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n",
                styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group animations
 */
class TabGroupAnimationsExample {
}
TabGroupAnimationsExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-animations-example',
                template: "<h3>No animation</h3>\n\n<mat-tab-group animationDuration=\"0ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<h3>Very slow animation</h3>\n<mat-tab-group animationDuration=\"2000ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n",
                styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ExampleTab() { }
if (false) {
    /** @type {?} */
    ExampleTab.prototype.label;
    /** @type {?} */
    ExampleTab.prototype.content;
}
/**
 * \@title Tab group with asynchronously loading tab contents
 */
class TabGroupAsyncExample {
    constructor() {
        this.asyncTabs = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }), 1000);
        }));
    }
}
TabGroupAsyncExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-async-example',
                template: "<ng-container *ngIf=\"(asyncTabs | async) === null\">\n  Loading tabs...\n</ng-container>\n\n<mat-tab-group>\n  <mat-tab *ngFor=\"let tab of asyncTabs | async\">\n    <ng-template mat-tab-label>{{tab.label}}</ng-template>\n    {{tab.content}}\n  </mat-tab>\n</mat-tab-group>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
TabGroupAsyncExample.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    TabGroupAsyncExample.prototype.asyncTabs;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic use of the tab group
 */
class TabGroupBasicExample {
}
TabGroupBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-basic-example',
                template: "<mat-tab-group>\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Using tabs with a custom label template
 */
class TabGroupCustomLabelExample {
}
TabGroupCustomLabelExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-custom-label-example',
                template: "<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      First\n    </ng-template>\n    Content 1\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Second\n    </ng-template>\n    Content 2\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Third\n    </ng-template>\n\n    Content 3\n  </mat-tab>\n</mat-tab-group>\n",
                styles: [".example-tab-icon {\n  margin-right: 8px;\n}\n"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with dynamic height based on tab contents
 */
class TabGroupDynamicHeightExample {
}
TabGroupDynamicHeightExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-dynamic-height-example',
                template: "<mat-tab-group dynamicHeight>\n  <mat-tab label=\"Short tab\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      Small content\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Long tab\">\n    <div class=\"example-large-box mat-elevation-z4\">\n      Large content\n    </div>\n  </mat-tab>\n</mat-tab-group>\n",
                styles: [".example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with dynamically changing tabs
 */
class TabGroupDynamicExample {
    constructor() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new FormControl(0);
    }
    /**
     * @param {?} selectAfterAdding
     * @return {?}
     */
    addTab(selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
}
TabGroupDynamicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-dynamic-example',
                template: "<div>\n  <span class=\"example-input-label\"> Selected tab index: </span>\n  <mat-form-field>\n    <input matInput type=\"number\" [formControl]=\"selected\">\n  </mat-form-field>\n</div>\n\n<div>\n  <button mat-raised-button\n          class=\"example-add-tab-button\"\n          (click)=\"addTab(selectAfterAdding.checked)\">\n    Add new tab\n  </button>\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n</div>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"selected.setValue($event)\">\n  <mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">\n    Contents for {{tab}} tab\n\n    <button mat-raised-button\n            class=\"example-delete-tab-button\"\n            [disabled]=\"tabs.length === 1\"\n            (click)=\"removeTab(index)\">\n      Delete Tab\n    </button>\n  </mat-tab>\n</mat-tab-group>\n",
                styles: [".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TabGroupDynamicExample.prototype.tabs;
    /** @type {?} */
    TabGroupDynamicExample.prototype.selected;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with the headers on the bottom
 */
class TabGroupHeaderBelowExample {
}
TabGroupHeaderBelowExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-header-below-example',
                template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group where the tab content is loaded lazily (when activated)
 */
class TabGroupLazyLoadedExample {
    constructor() {
        this.tabLoadTimes = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getTimeLoaded(index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    }
}
TabGroupLazyLoadedExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-lazy-loaded-example',
                template: "<mat-tab-group>\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TabGroupLazyLoadedExample.prototype.tabLoadTimes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Tab group with stretched labels
 */
class TabGroupStretchedExample {
}
TabGroupStretchedExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-stretched-example',
                template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n",
                styles: [".example-stretched-tabs {\n  max-width: 800px;\n}\n"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Customizing the theme options on the tab group
 */
class TabGroupThemeExample {
}
TabGroupThemeExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-theme-example',
                template: "<div>\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n    <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\"> Color </span>\n</div>\n\n<div>\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n    <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\"> Background Color </span>\n</div>\n\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n",
                styles: [".example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic use of the tab nav bar
 */
class TabNavBarBasicExample {
    constructor() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = '';
    }
    /**
     * @return {?}
     */
    toggleBackground() {
        this.background = this.background ? '' : 'primary';
    }
    /**
     * @return {?}
     */
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
}
TabNavBarBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-nav-bar-basic-example',
                template: "<nav mat-tab-nav-bar [backgroundColor]=\"background\">\n  <a mat-tab-link *ngFor=\"let link of links\"\n     (click)=\"activeLink = link\"\n     [active]=\"activeLink == link\"> {{link}} </a>\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n",
                styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TabNavBarBasicExample.prototype.links;
    /** @type {?} */
    TabNavBarBasicExample.prototype.activeLink;
    /** @type {?} */
    TabNavBarBasicExample.prototype.background;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
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
class TabGroupExamplesModule {
}
TabGroupExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatTabsModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { TabGroupAlignExample, TabGroupAnimationsExample, TabGroupAsyncExample, TabGroupBasicExample, TabGroupCustomLabelExample, TabGroupDynamicExample, TabGroupDynamicHeightExample, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample, TabGroupStretchedExample, TabGroupThemeExample, TabNavBarBasicExample, TabGroupExamplesModule };
//# sourceMappingURL=tabs.js.map
