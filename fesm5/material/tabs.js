import { NgIf, NgForOf, AsyncPipe, DatePipe, CommonModule } from '@angular/common';
import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵtextInterpolate, ɵɵtemplate, ɵɵadvance, ɵɵtextInterpolate1, ɵɵpipe, ɵɵproperty, ɵɵpipeBind1, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵelement, ɵɵreference, ɵɵpipeBind2, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { FormControl, NumberValueAccessor, DefaultValueAccessor, NgControlStatus, FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatTabGroup, MatTab, MatTabLabel, MatTabContent, MatTabNav, MatTabLink, MatTabsModule } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { MatFormField } from '@angular/material/form-field';

/**
 * @title Tab group with aligned labels
 */
var TabGroupAlignExample = /** @class */ (function () {
    function TabGroupAlignExample() {
    }
    TabGroupAlignExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-align-example',
                    templateUrl: 'tab-group-align-example.html',
                    styleUrls: ['tab-group-align-example.css'],
                },] },
    ];
    TabGroupAlignExample.ɵfac = function TabGroupAlignExample_Factory(t) { return new (t || TabGroupAlignExample)(); };
    TabGroupAlignExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupAlignExample, selectors: [["tab-group-align-example"]], decls: 21, vars: 0, consts: [["mat-align-tabs", "start"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["mat-align-tabs", "center"], ["mat-align-tabs", "end"]], template: function TabGroupAlignExample_Template(rf, ctx) { if (rf & 1) {
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
    return TabGroupAlignExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabGroupAlignExample, [{
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
var TabGroupAnimationsExample = /** @class */ (function () {
    function TabGroupAnimationsExample() {
    }
    TabGroupAnimationsExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-animations-example',
                    templateUrl: 'tab-group-animations-example.html',
                    styleUrls: ['tab-group-animations-example.css'],
                },] },
    ];
    TabGroupAnimationsExample.ɵfac = function TabGroupAnimationsExample_Factory(t) { return new (t || TabGroupAnimationsExample)(); };
    TabGroupAnimationsExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupAnimationsExample, selectors: [["tab-group-animations-example"]], decls: 18, vars: 0, consts: [["animationDuration", "0ms"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["animationDuration", "2000ms"]], template: function TabGroupAnimationsExample_Template(rf, ctx) { if (rf & 1) {
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
    return TabGroupAnimationsExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabGroupAnimationsExample, [{
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
    var tab_r2 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate(tab_r2.label);
} }
function TabGroupAsyncExample_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab");
    ɵɵtemplate(1, TabGroupAsyncExample_mat_tab_3_ng_template_1_Template, 1, 1, "ng-template", 2);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    var tab_r2 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", tab_r2.content, " ");
} }
/**
 * @title Tab group with asynchronously loading tab contents
 */
var TabGroupAsyncExample = /** @class */ (function () {
    function TabGroupAsyncExample() {
        this.asyncTabs = new Observable(function (observer) {
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
        { type: Component, args: [{
                    selector: 'tab-group-async-example',
                    templateUrl: 'tab-group-async-example.html',
                    styleUrls: ['tab-group-async-example.css'],
                },] },
    ];
    /** @nocollapse */
    TabGroupAsyncExample.ctorParameters = function () { return []; };
    TabGroupAsyncExample.ɵfac = function TabGroupAsyncExample_Factory(t) { return new (t || TabGroupAsyncExample)(); };
    TabGroupAsyncExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupAsyncExample, selectors: [["tab-group-async-example"]], decls: 5, vars: 6, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-tab-label", ""]], template: function TabGroupAsyncExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [NgIf, MatTabGroup, NgForOf, MatTab, MatTabLabel], pipes: [AsyncPipe], styles: [""] });
    return TabGroupAsyncExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabGroupAsyncExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-async-example',
                templateUrl: 'tab-group-async-example.html',
                styleUrls: ['tab-group-async-example.css'],
            }]
    }], function () { return []; }, null); })();

/**
 * @title Basic use of the tab group
 */
var TabGroupBasicExample = /** @class */ (function () {
    function TabGroupBasicExample() {
    }
    TabGroupBasicExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-basic-example',
                    templateUrl: 'tab-group-basic-example.html',
                    styleUrls: ['tab-group-basic-example.css'],
                },] },
    ];
    TabGroupBasicExample.ɵfac = function TabGroupBasicExample_Factory(t) { return new (t || TabGroupBasicExample)(); };
    TabGroupBasicExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupBasicExample, selectors: [["tab-group-basic-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupBasicExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [MatTabGroup, MatTab], styles: [""] });
    return TabGroupBasicExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabGroupBasicExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-basic-example',
                templateUrl: 'tab-group-basic-example.html',
                styleUrls: ['tab-group-basic-example.css'],
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
var TabGroupCustomLabelExample = /** @class */ (function () {
    function TabGroupCustomLabelExample() {
    }
    TabGroupCustomLabelExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-custom-label-example',
                    templateUrl: 'tab-group-custom-label-example.html',
                    styleUrls: ['tab-group-custom-label-example.css'],
                },] },
    ];
    TabGroupCustomLabelExample.ɵfac = function TabGroupCustomLabelExample_Factory(t) { return new (t || TabGroupCustomLabelExample)(); };
    TabGroupCustomLabelExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupCustomLabelExample, selectors: [["tab-group-custom-label-example"]], decls: 10, vars: 0, consts: [["mat-tab-label", ""], [1, "example-tab-icon"]], template: function TabGroupCustomLabelExample_Template(rf, ctx) { if (rf & 1) {
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
    return TabGroupCustomLabelExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabGroupCustomLabelExample, [{
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
var TabGroupDynamicHeightExample = /** @class */ (function () {
    function TabGroupDynamicHeightExample() {
    }
    TabGroupDynamicHeightExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-dynamic-height-example',
                    templateUrl: 'tab-group-dynamic-height-example.html',
                    styleUrls: ['tab-group-dynamic-height-example.css'],
                },] },
    ];
    TabGroupDynamicHeightExample.ɵfac = function TabGroupDynamicHeightExample_Factory(t) { return new (t || TabGroupDynamicHeightExample)(); };
    TabGroupDynamicHeightExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupDynamicHeightExample, selectors: [["tab-group-dynamic-height-example"]], decls: 7, vars: 0, consts: [["dynamicHeight", ""], ["label", "Short tab"], [1, "example-small-box", "mat-elevation-z4"], ["label", "Long tab"], [1, "example-large-box", "mat-elevation-z4"]], template: function TabGroupDynamicHeightExample_Template(rf, ctx) { if (rf & 1) {
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
    return TabGroupDynamicHeightExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabGroupDynamicHeightExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-dynamic-height-example',
                templateUrl: 'tab-group-dynamic-height-example.html',
                styleUrls: ['tab-group-dynamic-height-example.css'],
            }]
    }], null, null); })();

function TabGroupDynamicExample_mat_tab_12_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tab", 6);
    ɵɵtext(1);
    ɵɵelementStart(2, "button", 7);
    ɵɵlistener("click", function TabGroupDynamicExample_mat_tab_12_Template_button_click_2_listener($event) { ɵɵrestoreView(_r13); var index_r11 = ctx.index; var ctx_r12 = ɵɵnextContext(); return ctx_r12.removeTab(index_r11); });
    ɵɵtext(3, " Delete Tab ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var tab_r10 = ctx.$implicit;
    var ctx_r9 = ɵɵnextContext();
    ɵɵproperty("label", tab_r10);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" Contents for ", tab_r10, " tab ");
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r9.tabs.length === 1);
} }
/**
 * @title Tab group with dynamically changing tabs
 */
var TabGroupDynamicExample = /** @class */ (function () {
    function TabGroupDynamicExample() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new FormControl(0);
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
        { type: Component, args: [{
                    selector: 'tab-group-dynamic-example',
                    templateUrl: 'tab-group-dynamic-example.html',
                    styleUrls: ['tab-group-dynamic-example.css'],
                },] },
    ];
    TabGroupDynamicExample.ɵfac = function TabGroupDynamicExample_Factory(t) { return new (t || TabGroupDynamicExample)(); };
    TabGroupDynamicExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupDynamicExample, selectors: [["tab-group-dynamic-example"]], decls: 13, vars: 3, consts: [[1, "example-input-label"], ["matInput", "", "type", "number", 3, "formControl"], ["mat-raised-button", "", 1, "example-add-tab-button", 3, "click"], ["selectAfterAdding", ""], [3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["mat-raised-button", "", 1, "example-delete-tab-button", 3, "disabled", "click"]], template: function TabGroupDynamicExample_Template(rf, ctx) { if (rf & 1) {
            var _r14 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "div");
            ɵɵelementStart(1, "span", 0);
            ɵɵtext(2, " Selected tab index: ");
            ɵɵelementEnd();
            ɵɵelementStart(3, "mat-form-field");
            ɵɵelement(4, "input", 1);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(5, "div");
            ɵɵelementStart(6, "button", 2);
            ɵɵlistener("click", function TabGroupDynamicExample_Template_button_click_6_listener($event) { ɵɵrestoreView(_r14); var _r8 = ɵɵreference(9); return ctx.addTab(_r8.checked); });
            ɵɵtext(7, " Add new tab ");
            ɵɵelementEnd();
            ɵɵelementStart(8, "mat-checkbox", null, 3);
            ɵɵtext(10, " Select tab after adding ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(11, "mat-tab-group", 4);
            ɵɵlistener("selectedIndexChange", function TabGroupDynamicExample_Template_mat_tab_group_selectedIndexChange_11_listener($event) { return ctx.selected.setValue($event); });
            ɵɵtemplate(12, TabGroupDynamicExample_mat_tab_12_Template, 4, 3, "mat-tab", 5);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(4);
            ɵɵproperty("formControl", ctx.selected);
            ɵɵadvance(7);
            ɵɵproperty("selectedIndex", ctx.selected.value);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.tabs);
        } }, directives: [MatFormField, MatInput, NumberValueAccessor, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatButton, MatCheckbox, MatTabGroup, NgForOf, MatTab], styles: [".example-input-label[_ngcontent-%COMP%], .example-add-tab-button[_ngcontent-%COMP%], .example-delete-tab-button[_ngcontent-%COMP%] {\n  margin: 8px;\n}"] });
    return TabGroupDynamicExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabGroupDynamicExample, [{
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
var TabGroupHeaderBelowExample = /** @class */ (function () {
    function TabGroupHeaderBelowExample() {
    }
    TabGroupHeaderBelowExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-header-below-example',
                    templateUrl: 'tab-group-header-below-example.html',
                    styleUrls: ['tab-group-header-below-example.css'],
                },] },
    ];
    TabGroupHeaderBelowExample.ɵfac = function TabGroupHeaderBelowExample_Factory(t) { return new (t || TabGroupHeaderBelowExample)(); };
    TabGroupHeaderBelowExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupHeaderBelowExample, selectors: [["tab-group-header-below-example"]], decls: 7, vars: 0, consts: [["headerPosition", "below"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupHeaderBelowExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [MatTabGroup, MatTab], styles: [""] });
    return TabGroupHeaderBelowExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabGroupHeaderBelowExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-header-below-example',
                templateUrl: 'tab-group-header-below-example.html',
                styleUrls: ['tab-group-header-below-example.css'],
            }]
    }], null, null); })();

function TabGroupLazyLoadedExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "date");
} if (rf & 2) {
    var ctx_r15 = ɵɵnextContext();
    ɵɵtextInterpolate1(" Content 1 - Loaded: ", ɵɵpipeBind2(1, 1, ctx_r15.getTimeLoaded(1), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "date");
} if (rf & 2) {
    var ctx_r16 = ɵɵnextContext();
    ɵɵtextInterpolate1(" Content 2 - Loaded: ", ɵɵpipeBind2(1, 1, ctx_r16.getTimeLoaded(2), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "date");
} if (rf & 2) {
    var ctx_r17 = ɵɵnextContext();
    ɵɵtextInterpolate1(" Content 3 - Loaded: ", ɵɵpipeBind2(1, 1, ctx_r17.getTimeLoaded(3), "medium"), " ");
} }
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
        { type: Component, args: [{
                    selector: 'tab-group-lazy-loaded-example',
                    templateUrl: 'tab-group-lazy-loaded-example.html',
                    styleUrls: ['tab-group-lazy-loaded-example.css'],
                },] },
    ];
    TabGroupLazyLoadedExample.ɵfac = function TabGroupLazyLoadedExample_Factory(t) { return new (t || TabGroupLazyLoadedExample)(); };
    TabGroupLazyLoadedExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupLazyLoadedExample, selectors: [["tab-group-lazy-loaded-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["matTabContent", ""], ["label", "Second"], ["label", "Third"]], template: function TabGroupLazyLoadedExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [MatTabGroup, MatTab, MatTabContent], pipes: [DatePipe], styles: [""] });
    return TabGroupLazyLoadedExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabGroupLazyLoadedExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-lazy-loaded-example',
                templateUrl: 'tab-group-lazy-loaded-example.html',
                styleUrls: ['tab-group-lazy-loaded-example.css'],
            }]
    }], null, null); })();

/**
 * @title Tab group with stretched labels
 */
var TabGroupStretchedExample = /** @class */ (function () {
    function TabGroupStretchedExample() {
    }
    TabGroupStretchedExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-stretched-example',
                    templateUrl: 'tab-group-stretched-example.html',
                    styleUrls: ['tab-group-stretched-example.css'],
                },] },
    ];
    TabGroupStretchedExample.ɵfac = function TabGroupStretchedExample_Factory(t) { return new (t || TabGroupStretchedExample)(); };
    TabGroupStretchedExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupStretchedExample, selectors: [["tab-group-stretched-example"]], decls: 7, vars: 0, consts: [["mat-stretch-tabs", "", 1, "example-stretched-tabs", "mat-elevation-z4"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupStretchedExample_Template(rf, ctx) { if (rf & 1) {
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
    return TabGroupStretchedExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabGroupStretchedExample, [{
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
var TabGroupThemeExample = /** @class */ (function () {
    function TabGroupThemeExample() {
    }
    TabGroupThemeExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-theme-example',
                    templateUrl: 'tab-group-theme-example.html',
                    styleUrls: ['tab-group-theme-example.css'],
                },] },
    ];
    TabGroupThemeExample.ɵfac = function TabGroupThemeExample_Factory(t) { return new (t || TabGroupThemeExample)(); };
    TabGroupThemeExample.ɵcmp = ɵɵdefineComponent({ type: TabGroupThemeExample, selectors: [["tab-group-theme-example"]], decls: 25, vars: 2, consts: [["value", "primary", "aria-label", "Change color"], ["colorToggle", "matButtonToggleGroup"], ["value", "primary"], ["value", "accent"], [1, "example-button-toggle-label"], ["backgroundColorToggle", "matButtonToggleGroup"], [3, "color", "backgroundColor"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupThemeExample_Template(rf, ctx) { if (rf & 1) {
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
            var _r18 = ɵɵreference(2);
            var _r19 = ɵɵreference(11);
            ɵɵadvance(18);
            ɵɵproperty("color", _r18.value)("backgroundColor", _r19.value);
        } }, directives: [MatButtonToggleGroup, MatButtonToggle, MatTabGroup, MatTab], styles: [".example-button-toggle-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 16px;\n}"] });
    return TabGroupThemeExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabGroupThemeExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-theme-example',
                templateUrl: 'tab-group-theme-example.html',
                styleUrls: ['tab-group-theme-example.css'],
            }]
    }], null, null); })();

function TabNavBarBasicExample_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 4);
    ɵɵlistener("click", function TabNavBarBasicExample_a_1_Template_a_click_0_listener($event) { ɵɵrestoreView(_r23); var link_r21 = ctx.$implicit; var ctx_r22 = ɵɵnextContext(); return ctx_r22.activeLink = link_r21; });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var link_r21 = ctx.$implicit;
    var ctx_r20 = ɵɵnextContext();
    ɵɵproperty("active", ctx_r20.activeLink == link_r21);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", link_r21, " ");
} }
/**
 * @title Basic use of the tab nav bar
 */
var TabNavBarBasicExample = /** @class */ (function () {
    function TabNavBarBasicExample() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = undefined;
    }
    TabNavBarBasicExample.prototype.toggleBackground = function () {
        this.background = this.background ? undefined : 'primary';
    };
    TabNavBarBasicExample.prototype.addLink = function () {
        this.links.push("Link " + (this.links.length + 1));
    };
    TabNavBarBasicExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-nav-bar-basic-example',
                    templateUrl: 'tab-nav-bar-basic-example.html',
                    styleUrls: ['tab-nav-bar-basic-example.css'],
                },] },
    ];
    TabNavBarBasicExample.ɵfac = function TabNavBarBasicExample_Factory(t) { return new (t || TabNavBarBasicExample)(); };
    TabNavBarBasicExample.ɵcmp = ɵɵdefineComponent({ type: TabNavBarBasicExample, selectors: [["tab-nav-bar-basic-example"]], decls: 8, vars: 2, consts: [["mat-tab-nav-bar", "", 3, "backgroundColor"], ["mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "disabled", ""], ["mat-raised-button", "", 1, "example-action-button", 3, "click"], ["mat-tab-link", "", 3, "active", "click"]], template: function TabNavBarBasicExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "nav", 0);
            ɵɵtemplate(1, TabNavBarBasicExample_a_1_Template, 2, 2, "a", 1);
            ɵɵelementStart(2, "a", 2);
            ɵɵtext(3, "Disabled Link");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(4, "button", 3);
            ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_4_listener($event) { return ctx.toggleBackground(); });
            ɵɵtext(5, " Toggle background\n");
            ɵɵelementEnd();
            ɵɵelementStart(6, "button", 3);
            ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_6_listener($event) { return ctx.addLink(); });
            ɵɵtext(7, " Add link\n");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("backgroundColor", ctx.background);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.links);
        } }, directives: [MatTabNav, NgForOf, MatTabLink, MatButton], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-right: 8px;\n}"] });
    return TabNavBarBasicExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabNavBarBasicExample, [{
        type: Component,
        args: [{
                selector: 'tab-nav-bar-basic-example',
                templateUrl: 'tab-nav-bar-basic-example.html',
                styleUrls: ['tab-nav-bar-basic-example.css'],
            }]
    }], null, null); })();

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
                },] },
    ];
    TabGroupExamplesModule.ɵmod = ɵɵdefineNgModule({ type: TabGroupExamplesModule });
    TabGroupExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function TabGroupExamplesModule_Factory(t) { return new (t || TabGroupExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatButtonToggleModule,
                MatCheckboxModule,
                MatIconModule,
                MatInputModule,
                MatTabsModule,
                ReactiveFormsModule,
            ]] });
    return TabGroupExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TabGroupExamplesModule, { declarations: [TabGroupAlignExample,
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
        TabGroupHeaderBelowExample,
        TabGroupLazyLoadedExample,
        TabGroupStretchedExample,
        TabGroupThemeExample,
        TabNavBarBasicExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TabGroupExamplesModule, [{
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
            }]
    }], null, null); })();

export { TabGroupAlignExample, TabGroupAnimationsExample, TabGroupAsyncExample, TabGroupBasicExample, TabGroupCustomLabelExample, TabGroupDynamicExample, TabGroupDynamicHeightExample, TabGroupExamplesModule, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample, TabGroupStretchedExample, TabGroupThemeExample, TabNavBarBasicExample };
//# sourceMappingURL=tabs.js.map
