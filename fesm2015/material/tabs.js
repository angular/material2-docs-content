import { NgIf, NgForOf, AsyncPipe, DatePipe, CommonModule } from '@angular/common';
import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵtextInterpolate, ɵɵtemplate, ɵɵadvance, ɵɵtextInterpolate1, ɵɵpipe, ɵɵproperty, ɵɵpipeBind1, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵelement, ɵɵreference, ɵɵpipeBind2, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { FormControl, NumberValueAccessor, DefaultValueAccessor, NgControlStatus, FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatTabGroup, MatTab, MatTabLabel, MatTabContent, MatTabNav, MatTabLink, MatTabsModule } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { MatFormField, MatLabel } from '@angular/material/form-field';

/**
 * @title Tab group with aligned labels
 */
class TabGroupAlignExample {
}
TabGroupAlignExample.ɵfac = function TabGroupAlignExample_Factory(t) { return new (t || TabGroupAlignExample)(); };
TabGroupAlignExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TabGroupAlignExample, selectors: [["tab-group-align-example"]], decls: 21, vars: 0, consts: [["mat-align-tabs", "start"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["mat-align-tabs", "center"], ["mat-align-tabs", "end"]], template: function TabGroupAlignExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group", 0);
        ɵɵelementStart(1, "mat-tab", 1);
        ɵɵtext(2, "Content 1");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-tab", 2);
        ɵɵtext(4, "Content 2");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-tab", 3);
        ɵɵtext(6, "Content 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-tab-group", 4);
        ɵɵelementStart(8, "mat-tab", 1);
        ɵɵtext(9, "Content 1");
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-tab", 2);
        ɵɵtext(11, "Content 2");
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-tab", 3);
        ɵɵtext(13, "Content 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-tab-group", 5);
        ɵɵelementStart(15, "mat-tab", 1);
        ɵɵtext(16, "Content 1");
        ɵɵelementEnd();
        ɵɵelementStart(17, "mat-tab", 2);
        ɵɵtext(18, "Content 2");
        ɵɵelementEnd();
        ɵɵelementStart(19, "mat-tab", 3);
        ɵɵtext(20, "Content 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab], styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabGroupAlignExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-align-example',
                templateUrl: 'tab-group-align-example.html',
                styleUrls: ['tab-group-align-example.css'],
            }]
    }], null, null); })();

/**
 * @title Tab group animations
 */
class TabGroupAnimationsExample {
}
TabGroupAnimationsExample.ɵfac = function TabGroupAnimationsExample_Factory(t) { return new (t || TabGroupAnimationsExample)(); };
TabGroupAnimationsExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TabGroupAnimationsExample, selectors: [["tab-group-animations-example"]], decls: 18, vars: 0, consts: [["animationDuration", "0ms"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["animationDuration", "2000ms"]], template: function TabGroupAnimationsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h3");
        ɵɵtext(1, "No animation");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-tab-group", 0);
        ɵɵelementStart(3, "mat-tab", 1);
        ɵɵtext(4, "Content 1");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-tab", 2);
        ɵɵtext(6, "Content 2");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-tab", 3);
        ɵɵtext(8, "Content 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "h3");
        ɵɵtext(10, "Very slow animation");
        ɵɵelementEnd();
        ɵɵelementStart(11, "mat-tab-group", 4);
        ɵɵelementStart(12, "mat-tab", 1);
        ɵɵtext(13, "Content 1");
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-tab", 2);
        ɵɵtext(15, "Content 2");
        ɵɵelementEnd();
        ɵɵelementStart(16, "mat-tab", 3);
        ɵɵtext(17, "Content 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab], styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabGroupAnimationsExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-animations-example',
                templateUrl: 'tab-group-animations-example.html',
                styleUrls: ['tab-group-animations-example.css'],
            }]
    }], null, null); })();

function TabGroupAsyncExample_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, " Loading tabs...\n");
    ɵɵelementContainerEnd();
} }
function TabGroupAsyncExample_mat_tab_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    const tab_r2 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate(tab_r2.label);
} }
function TabGroupAsyncExample_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab");
    ɵɵtemplate(1, TabGroupAsyncExample_mat_tab_3_ng_template_1_Template, 1, 1, "ng-template", 2);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", tab_r2.content, " ");
} }
/**
 * @title Tab group with asynchronously loading tab contents
 */
class TabGroupAsyncExample {
    constructor() {
        this.asyncTabs = new Observable((observer) => {
            setTimeout(() => {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }, 1000);
        });
    }
}
TabGroupAsyncExample.ɵfac = function TabGroupAsyncExample_Factory(t) { return new (t || TabGroupAsyncExample)(); };
TabGroupAsyncExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TabGroupAsyncExample, selectors: [["tab-group-async-example"]], decls: 5, vars: 6, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-tab-label", ""]], template: function TabGroupAsyncExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, TabGroupAsyncExample_ng_container_0_Template, 2, 0, "ng-container", 0);
        ɵɵpipe(1, "async");
        ɵɵelementStart(2, "mat-tab-group");
        ɵɵtemplate(3, TabGroupAsyncExample_mat_tab_3_Template, 3, 1, "mat-tab", 1);
        ɵɵpipe(4, "async");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.asyncTabs) === null);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ɵɵpipeBind1(4, 4, ctx.asyncTabs));
    } }, directives: [NgIf, MatTabGroup, NgForOf, MatTab, MatTabLabel], pipes: [AsyncPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabGroupAsyncExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-async-example',
                templateUrl: 'tab-group-async-example.html',
            }]
    }], function () { return []; }, null); })();

/**
 * @title Basic use of the tab group
 */
class TabGroupBasicExample {
}
TabGroupBasicExample.ɵfac = function TabGroupBasicExample_Factory(t) { return new (t || TabGroupBasicExample)(); };
TabGroupBasicExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TabGroupBasicExample, selectors: [["tab-group-basic-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupBasicExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group");
        ɵɵelementStart(1, "mat-tab", 0);
        ɵɵtext(2, " Content 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-tab", 1);
        ɵɵtext(4, " Content 2 ");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-tab", 2);
        ɵɵtext(6, " Content 3 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabGroupBasicExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-basic-example',
                templateUrl: 'tab-group-basic-example.html',
            }]
    }], null, null); })();

function TabGroupCustomLabelExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 1);
    ɵɵtext(1, "thumb_up");
    ɵɵelementEnd();
    ɵɵtext(2, " First ");
} }
function TabGroupCustomLabelExample_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 1);
    ɵɵtext(1, "thumb_up");
    ɵɵelementEnd();
    ɵɵtext(2, " Second ");
} }
function TabGroupCustomLabelExample_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 1);
    ɵɵtext(1, "thumb_up");
    ɵɵelementEnd();
    ɵɵtext(2, " Third ");
} }
/**
 * @title Using tabs with a custom label template
 */
class TabGroupCustomLabelExample {
}
TabGroupCustomLabelExample.ɵfac = function TabGroupCustomLabelExample_Factory(t) { return new (t || TabGroupCustomLabelExample)(); };
TabGroupCustomLabelExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TabGroupCustomLabelExample, selectors: [["tab-group-custom-label-example"]], decls: 10, vars: 0, consts: [["mat-tab-label", ""], [1, "example-tab-icon"]], template: function TabGroupCustomLabelExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group");
        ɵɵelementStart(1, "mat-tab");
        ɵɵtemplate(2, TabGroupCustomLabelExample_ng_template_2_Template, 3, 0, "ng-template", 0);
        ɵɵtext(3, " Content 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-tab");
        ɵɵtemplate(5, TabGroupCustomLabelExample_ng_template_5_Template, 3, 0, "ng-template", 0);
        ɵɵtext(6, " Content 2 ");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-tab");
        ɵɵtemplate(8, TabGroupCustomLabelExample_ng_template_8_Template, 3, 0, "ng-template", 0);
        ɵɵtext(9, " Content 3 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab, MatTabLabel, MatIcon], styles: [".example-tab-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabGroupCustomLabelExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-custom-label-example',
                templateUrl: 'tab-group-custom-label-example.html',
                styleUrls: ['tab-group-custom-label-example.css'],
            }]
    }], null, null); })();

/**
 * @title Tab group with dynamic height based on tab contents
 */
class TabGroupDynamicHeightExample {
}
TabGroupDynamicHeightExample.ɵfac = function TabGroupDynamicHeightExample_Factory(t) { return new (t || TabGroupDynamicHeightExample)(); };
TabGroupDynamicHeightExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TabGroupDynamicHeightExample, selectors: [["tab-group-dynamic-height-example"]], decls: 7, vars: 0, consts: [["dynamicHeight", ""], ["label", "Short tab"], [1, "example-small-box", "mat-elevation-z4"], ["label", "Long tab"], [1, "example-large-box", "mat-elevation-z4"]], template: function TabGroupDynamicHeightExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group", 0);
        ɵɵelementStart(1, "mat-tab", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵtext(3, " Small content ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-tab", 3);
        ɵɵelementStart(5, "div", 4);
        ɵɵtext(6, " Large content ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab], styles: [".example-small-box[_ngcontent-%COMP%], .example-large-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 300px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabGroupDynamicHeightExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-dynamic-height-example',
                templateUrl: 'tab-group-dynamic-height-example.html',
                styleUrls: ['tab-group-dynamic-height-example.css'],
            }]
    }], null, null); })();

/**
 * @title Testing with MatTabGroupHarness
 */
class TabGroupHarnessExample {
}
TabGroupHarnessExample.ɵfac = function TabGroupHarnessExample_Factory(t) { return new (t || TabGroupHarnessExample)(); };
TabGroupHarnessExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TabGroupHarnessExample, selectors: [["tab-group-harness-example"]], decls: 10, vars: 0, consts: [["label", "Profile", "aria-label", "Profile tab"], [1, "test-tab-content"], ["label", "Settings", "aria-label", "Settings tab"], ["label", "FAQ", "aria-label", "FAQ tab"]], template: function TabGroupHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group");
        ɵɵelementStart(1, "mat-tab", 0);
        ɵɵelementStart(2, "span", 1);
        ɵɵtext(3, "Your personal information");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-tab", 2);
        ɵɵelementStart(5, "span", 1);
        ɵɵtext(6, "Privacy settings");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-tab", 3);
        ɵɵelementStart(8, "span", 1);
        ɵɵtext(9, "How to update profile picture");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabGroupHarnessExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-harness-example',
                templateUrl: 'tab-group-harness-example.html'
            }]
    }], null, null); })();

function TabGroupDynamicExample_mat_tab_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tab", 5);
    ɵɵtext(1);
    ɵɵelementStart(2, "button", 6);
    ɵɵlistener("click", function TabGroupDynamicExample_mat_tab_11_Template_button_click_2_listener() { const restoredCtx = ɵɵrestoreView(_r5); const index_r3 = restoredCtx.index; const ctx_r4 = ɵɵnextContext(); return ctx_r4.removeTab(index_r3); });
    ɵɵtext(3, " Delete Tab ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("label", tab_r2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" Contents for ", tab_r2, " tab ");
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r1.tabs.length === 1);
} }
/**
 * @title Tab group with dynamically changing tabs
 */
class TabGroupDynamicExample {
    constructor() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new FormControl(0);
    }
    addTab(selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
}
TabGroupDynamicExample.ɵfac = function TabGroupDynamicExample_Factory(t) { return new (t || TabGroupDynamicExample)(); };
TabGroupDynamicExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TabGroupDynamicExample, selectors: [["tab-group-dynamic-example"]], decls: 12, vars: 3, consts: [["matInput", "", "type", "number", 3, "formControl"], ["mat-raised-button", "", 1, "example-add-tab-button", 3, "click"], ["selectAfterAdding", ""], [3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["mat-raised-button", "", 1, "example-delete-tab-button", 3, "disabled", "click"]], template: function TabGroupDynamicExample_Template(rf, ctx) { if (rf & 1) {
        const _r6 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Selected tab index");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 0);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div");
        ɵɵelementStart(5, "button", 1);
        ɵɵlistener("click", function TabGroupDynamicExample_Template_button_click_5_listener() { ɵɵrestoreView(_r6); const _r0 = ɵɵreference(8); return ctx.addTab(_r0.checked); });
        ɵɵtext(6, " Add new tab ");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-checkbox", null, 2);
        ɵɵtext(9, " Select tab after adding ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-tab-group", 3);
        ɵɵlistener("selectedIndexChange", function TabGroupDynamicExample_Template_mat_tab_group_selectedIndexChange_10_listener($event) { return ctx.selected.setValue($event); });
        ɵɵtemplate(11, TabGroupDynamicExample_mat_tab_11_Template, 4, 3, "mat-tab", 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("formControl", ctx.selected);
        ɵɵadvance(7);
        ɵɵproperty("selectedIndex", ctx.selected.value);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [MatFormField, MatLabel, MatInput, NumberValueAccessor, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatButton, MatCheckbox, MatTabGroup, NgForOf, MatTab], styles: [".example-input-label[_ngcontent-%COMP%], .example-add-tab-button[_ngcontent-%COMP%], .example-delete-tab-button[_ngcontent-%COMP%] {\n  margin: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabGroupDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-dynamic-example',
                templateUrl: 'tab-group-dynamic-example.html',
                styleUrls: ['tab-group-dynamic-example.css'],
            }]
    }], null, null); })();

/**
 * @title Tab group with the headers on the bottom
 */
class TabGroupHeaderBelowExample {
}
TabGroupHeaderBelowExample.ɵfac = function TabGroupHeaderBelowExample_Factory(t) { return new (t || TabGroupHeaderBelowExample)(); };
TabGroupHeaderBelowExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TabGroupHeaderBelowExample, selectors: [["tab-group-header-below-example"]], decls: 7, vars: 0, consts: [["headerPosition", "below"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupHeaderBelowExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group", 0);
        ɵɵelementStart(1, "mat-tab", 1);
        ɵɵtext(2, " Content 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-tab", 2);
        ɵɵtext(4, " Content 2 ");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-tab", 3);
        ɵɵtext(6, " Content 3 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabGroupHeaderBelowExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-header-below-example',
                templateUrl: 'tab-group-header-below-example.html',
            }]
    }], null, null); })();

function TabGroupLazyLoadedExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" Content 1 - Loaded: ", ɵɵpipeBind2(1, 1, ctx_r0.getTimeLoaded(1), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtextInterpolate1(" Content 2 - Loaded: ", ɵɵpipeBind2(1, 1, ctx_r1.getTimeLoaded(2), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵtextInterpolate1(" Content 3 - Loaded: ", ɵɵpipeBind2(1, 1, ctx_r2.getTimeLoaded(3), "medium"), " ");
} }
/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
class TabGroupLazyLoadedExample {
    constructor() {
        this.tabLoadTimes = [];
    }
    getTimeLoaded(index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    }
}
TabGroupLazyLoadedExample.ɵfac = function TabGroupLazyLoadedExample_Factory(t) { return new (t || TabGroupLazyLoadedExample)(); };
TabGroupLazyLoadedExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TabGroupLazyLoadedExample, selectors: [["tab-group-lazy-loaded-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["matTabContent", ""], ["label", "Second"], ["label", "Third"]], template: function TabGroupLazyLoadedExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group");
        ɵɵelementStart(1, "mat-tab", 0);
        ɵɵtemplate(2, TabGroupLazyLoadedExample_ng_template_2_Template, 2, 4, "ng-template", 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-tab", 2);
        ɵɵtemplate(4, TabGroupLazyLoadedExample_ng_template_4_Template, 2, 4, "ng-template", 1);
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-tab", 3);
        ɵɵtemplate(6, TabGroupLazyLoadedExample_ng_template_6_Template, 2, 4, "ng-template", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab, MatTabContent], pipes: [DatePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabGroupLazyLoadedExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-lazy-loaded-example',
                templateUrl: 'tab-group-lazy-loaded-example.html',
            }]
    }], null, null); })();

/**
 * @title Tab group with stretched labels
 */
class TabGroupStretchedExample {
}
TabGroupStretchedExample.ɵfac = function TabGroupStretchedExample_Factory(t) { return new (t || TabGroupStretchedExample)(); };
TabGroupStretchedExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TabGroupStretchedExample, selectors: [["tab-group-stretched-example"]], decls: 7, vars: 0, consts: [["mat-stretch-tabs", "", 1, "example-stretched-tabs", "mat-elevation-z4"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupStretchedExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tab-group", 0);
        ɵɵelementStart(1, "mat-tab", 1);
        ɵɵtext(2, " Content 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-tab", 2);
        ɵɵtext(4, " Content 2 ");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-tab", 3);
        ɵɵtext(6, " Content 3 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatTabGroup, MatTab], styles: [".example-stretched-tabs[_ngcontent-%COMP%] {\n  max-width: 800px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabGroupStretchedExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-stretched-example',
                templateUrl: 'tab-group-stretched-example.html',
                styleUrls: ['tab-group-stretched-example.css'],
            }]
    }], null, null); })();

/**
 * @title Customizing the theme options on the tab group
 */
class TabGroupThemeExample {
}
TabGroupThemeExample.ɵfac = function TabGroupThemeExample_Factory(t) { return new (t || TabGroupThemeExample)(); };
TabGroupThemeExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TabGroupThemeExample, selectors: [["tab-group-theme-example"]], decls: 25, vars: 2, consts: [["value", "primary", "aria-label", "Change color"], ["colorToggle", "matButtonToggleGroup"], ["value", "primary"], ["value", "accent"], [1, "example-button-toggle-label"], ["backgroundColorToggle", "matButtonToggleGroup"], [3, "color", "backgroundColor"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupThemeExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "mat-button-toggle-group", 0, 1);
        ɵɵelementStart(3, "mat-button-toggle", 2);
        ɵɵtext(4, " Primary ");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-button-toggle", 3);
        ɵɵtext(6, " Accent ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "span", 4);
        ɵɵtext(8, " Color ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "div");
        ɵɵelementStart(10, "mat-button-toggle-group", 0, 5);
        ɵɵelementStart(12, "mat-button-toggle", 2);
        ɵɵtext(13, " Primary ");
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-button-toggle", 3);
        ɵɵtext(15, " Accent ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(16, "span", 4);
        ɵɵtext(17, " Background Color ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(18, "mat-tab-group", 6);
        ɵɵelementStart(19, "mat-tab", 7);
        ɵɵtext(20, " Content 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(21, "mat-tab", 8);
        ɵɵtext(22, " Content 2 ");
        ɵɵelementEnd();
        ɵɵelementStart(23, "mat-tab", 9);
        ɵɵtext(24, " Content 3 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(2);
        const _r1 = ɵɵreference(11);
        ɵɵadvance(18);
        ɵɵproperty("color", _r0.value)("backgroundColor", _r1.value);
    } }, directives: [MatButtonToggleGroup, MatButtonToggle, MatTabGroup, MatTab], styles: [".example-button-toggle-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabGroupThemeExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-theme-example',
                templateUrl: 'tab-group-theme-example.html',
                styleUrls: ['tab-group-theme-example.css'],
            }]
    }], null, null); })();

function TabNavBarBasicExample_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 4);
    ɵɵlistener("click", function TabNavBarBasicExample_a_1_Template_a_click_0_listener() { const restoredCtx = ɵɵrestoreView(_r3); const link_r1 = restoredCtx.$implicit; const ctx_r2 = ɵɵnextContext(); return ctx_r2.activeLink = link_r1; });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("active", ctx_r0.activeLink == link_r1);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", link_r1, " ");
} }
/**
 * @title Basic use of the tab nav bar
 */
class TabNavBarBasicExample {
    constructor() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = undefined;
    }
    toggleBackground() {
        this.background = this.background ? undefined : 'primary';
    }
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
}
TabNavBarBasicExample.ɵfac = function TabNavBarBasicExample_Factory(t) { return new (t || TabNavBarBasicExample)(); };
TabNavBarBasicExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TabNavBarBasicExample, selectors: [["tab-nav-bar-basic-example"]], decls: 8, vars: 2, consts: [["mat-tab-nav-bar", "", 3, "backgroundColor"], ["mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "disabled", ""], ["mat-raised-button", "", 1, "example-action-button", 3, "click"], ["mat-tab-link", "", 3, "active", "click"]], template: function TabNavBarBasicExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nav", 0);
        ɵɵtemplate(1, TabNavBarBasicExample_a_1_Template, 2, 2, "a", 1);
        ɵɵelementStart(2, "a", 2);
        ɵɵtext(3, "Disabled Link");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "button", 3);
        ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_4_listener() { return ctx.toggleBackground(); });
        ɵɵtext(5, " Toggle background\n");
        ɵɵelementEnd();
        ɵɵelementStart(6, "button", 3);
        ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_6_listener() { return ctx.addLink(); });
        ɵɵtext(7, " Add link\n");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("backgroundColor", ctx.background);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.links);
    } }, directives: [MatTabNav, NgForOf, MatTabLink, MatButton], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-right: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabNavBarBasicExample, [{
        type: Component,
        args: [{
                selector: 'tab-nav-bar-basic-example',
                templateUrl: 'tab-nav-bar-basic-example.html',
                styleUrls: ['tab-nav-bar-basic-example.css'],
            }]
    }], null, null); })();

const EXAMPLES = [
    TabGroupAlignExample,
    TabGroupAnimationsExample,
    TabGroupAsyncExample,
    TabGroupBasicExample,
    TabGroupCustomLabelExample,
    TabGroupDynamicExample,
    TabGroupDynamicHeightExample,
    TabGroupHarnessExample,
    TabGroupHeaderBelowExample,
    TabGroupLazyLoadedExample,
    TabGroupStretchedExample,
    TabGroupThemeExample,
    TabNavBarBasicExample,
];
class TabGroupExamplesModule {
}
TabGroupExamplesModule.ɵfac = function TabGroupExamplesModule_Factory(t) { return new (t || TabGroupExamplesModule)(); };
TabGroupExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: TabGroupExamplesModule });
TabGroupExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatTabsModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TabGroupExamplesModule, [{
        type: NgModule,
        args: [{
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
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TabGroupExamplesModule, { declarations: [TabGroupAlignExample,
        TabGroupAnimationsExample,
        TabGroupAsyncExample,
        TabGroupBasicExample,
        TabGroupCustomLabelExample,
        TabGroupDynamicExample,
        TabGroupDynamicHeightExample,
        TabGroupHarnessExample,
        TabGroupHeaderBelowExample,
        TabGroupLazyLoadedExample,
        TabGroupStretchedExample,
        TabGroupThemeExample,
        TabNavBarBasicExample], imports: [CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule,
        ReactiveFormsModule], exports: [TabGroupAlignExample,
        TabGroupAnimationsExample,
        TabGroupAsyncExample,
        TabGroupBasicExample,
        TabGroupCustomLabelExample,
        TabGroupDynamicExample,
        TabGroupDynamicHeightExample,
        TabGroupHarnessExample,
        TabGroupHeaderBelowExample,
        TabGroupLazyLoadedExample,
        TabGroupStretchedExample,
        TabGroupThemeExample,
        TabNavBarBasicExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { TabGroupAlignExample, TabGroupAnimationsExample, TabGroupAsyncExample, TabGroupBasicExample, TabGroupCustomLabelExample, TabGroupDynamicExample, TabGroupDynamicHeightExample, TabGroupExamplesModule, TabGroupHarnessExample, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample, TabGroupStretchedExample, TabGroupThemeExample, TabNavBarBasicExample };
//# sourceMappingURL=tabs.js.map
