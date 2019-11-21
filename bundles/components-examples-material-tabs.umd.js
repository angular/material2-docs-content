(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/tabs'), require('rxjs'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/tabs', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/input', '@angular/material/tabs', 'rxjs', '@angular/material/form-field'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.tabs = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.buttonToggle, global.ng.material.checkbox, global.ng.material.icon, global.ng.material.input, global.ng.material.tabs, global.rxjs, global.ng.material.formField));
}(this, (function (exports, i1, i0, i3, i4, i1$1, i5, i2, i2$1, i1$2, rxjs, i1$3) { 'use strict';

    /**
     * @title Tab group with aligned labels
     */
    var TabGroupAlignExample = /** @class */ (function () {
        function TabGroupAlignExample() {
        }
        TabGroupAlignExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tab-group-align-example',
                        templateUrl: 'tab-group-align-example.html',
                        styleUrls: ['tab-group-align-example.css'],
                    },] },
        ];
        TabGroupAlignExample.ɵfac = function TabGroupAlignExample_Factory(t) { return new (t || TabGroupAlignExample)(); };
        TabGroupAlignExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupAlignExample, selectors: [["tab-group-align-example"]], decls: 21, vars: 0, consts: [["mat-align-tabs", "start"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["mat-align-tabs", "center"], ["mat-align-tabs", "end"]], template: function TabGroupAlignExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-tab-group", 0);
                i0.ɵɵelementStart(1, "mat-tab", 1);
                i0.ɵɵtext(2, "Content 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-tab", 2);
                i0.ɵɵtext(4, "Content 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-tab", 3);
                i0.ɵɵtext(6, "Content 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-tab-group", 4);
                i0.ɵɵelementStart(8, "mat-tab", 1);
                i0.ɵɵtext(9, "Content 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-tab", 2);
                i0.ɵɵtext(11, "Content 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-tab", 3);
                i0.ɵɵtext(13, "Content 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-tab-group", 5);
                i0.ɵɵelementStart(15, "mat-tab", 1);
                i0.ɵɵtext(16, "Content 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "mat-tab", 2);
                i0.ɵɵtext(18, "Content 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "mat-tab", 3);
                i0.ɵɵtext(20, "Content 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1$2.MatTabGroup, i1$2.MatTab], styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}"] });
        return TabGroupAlignExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupAlignExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'tab-group-animations-example',
                        templateUrl: 'tab-group-animations-example.html',
                        styleUrls: ['tab-group-animations-example.css'],
                    },] },
        ];
        TabGroupAnimationsExample.ɵfac = function TabGroupAnimationsExample_Factory(t) { return new (t || TabGroupAnimationsExample)(); };
        TabGroupAnimationsExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupAnimationsExample, selectors: [["tab-group-animations-example"]], decls: 18, vars: 0, consts: [["animationDuration", "0ms"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["animationDuration", "2000ms"]], template: function TabGroupAnimationsExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "h3");
                i0.ɵɵtext(1, "No animation");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-tab-group", 0);
                i0.ɵɵelementStart(3, "mat-tab", 1);
                i0.ɵɵtext(4, "Content 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-tab", 2);
                i0.ɵɵtext(6, "Content 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-tab", 3);
                i0.ɵɵtext(8, "Content 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "h3");
                i0.ɵɵtext(10, "Very slow animation");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-tab-group", 4);
                i0.ɵɵelementStart(12, "mat-tab", 1);
                i0.ɵɵtext(13, "Content 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-tab", 2);
                i0.ɵɵtext(15, "Content 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "mat-tab", 3);
                i0.ɵɵtext(17, "Content 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1$2.MatTabGroup, i1$2.MatTab], styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}"] });
        return TabGroupAnimationsExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupAnimationsExample, [{
            type: i0.Component,
            args: [{
                    selector: 'tab-group-animations-example',
                    templateUrl: 'tab-group-animations-example.html',
                    styleUrls: ['tab-group-animations-example.css'],
                }]
        }], null, null); })();

    function TabGroupAsyncExample_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtext(1, " Loading tabs...\n");
        i0.ɵɵelementContainerEnd();
    } }
    function TabGroupAsyncExample_mat_tab_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
    } if (rf & 2) {
        var tab_r2 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵtextInterpolate(tab_r2.label);
    } }
    function TabGroupAsyncExample_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tab");
        i0.ɵɵtemplate(1, TabGroupAsyncExample_mat_tab_3_ng_template_1_Template, 1, 1, "ng-template", 2);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var tab_r2 = ctx.$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", tab_r2.content, " ");
    } }
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
            { type: i0.Component, args: [{
                        selector: 'tab-group-async-example',
                        templateUrl: 'tab-group-async-example.html',
                        styleUrls: ['tab-group-async-example.css'],
                    },] },
        ];
        /** @nocollapse */
        TabGroupAsyncExample.ctorParameters = function () { return []; };
        TabGroupAsyncExample.ɵfac = function TabGroupAsyncExample_Factory(t) { return new (t || TabGroupAsyncExample)(); };
        TabGroupAsyncExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupAsyncExample, selectors: [["tab-group-async-example"]], decls: 5, vars: 6, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-tab-label", ""]], template: function TabGroupAsyncExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵtemplate(0, TabGroupAsyncExample_ng_container_0_Template, 2, 0, "ng-container", 0);
                i0.ɵɵpipe(1, "async");
                i0.ɵɵelementStart(2, "mat-tab-group");
                i0.ɵɵtemplate(3, TabGroupAsyncExample_mat_tab_3_Template, 3, 1, "mat-tab", 1);
                i0.ɵɵpipe(4, "async");
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.asyncTabs) === null);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 4, ctx.asyncTabs));
            } }, directives: [i1.NgIf, i1$2.MatTabGroup, i1.NgForOf, i1$2.MatTab, i1$2.MatTabLabel], pipes: [i1.AsyncPipe], styles: [""] });
        return TabGroupAsyncExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupAsyncExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'tab-group-basic-example',
                        templateUrl: 'tab-group-basic-example.html',
                        styleUrls: ['tab-group-basic-example.css'],
                    },] },
        ];
        TabGroupBasicExample.ɵfac = function TabGroupBasicExample_Factory(t) { return new (t || TabGroupBasicExample)(); };
        TabGroupBasicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupBasicExample, selectors: [["tab-group-basic-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupBasicExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-tab-group");
                i0.ɵɵelementStart(1, "mat-tab", 0);
                i0.ɵɵtext(2, " Content 1 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-tab", 1);
                i0.ɵɵtext(4, " Content 2 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-tab", 2);
                i0.ɵɵtext(6, " Content 3 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1$2.MatTabGroup, i1$2.MatTab], styles: [""] });
        return TabGroupBasicExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupBasicExample, [{
            type: i0.Component,
            args: [{
                    selector: 'tab-group-basic-example',
                    templateUrl: 'tab-group-basic-example.html',
                    styleUrls: ['tab-group-basic-example.css'],
                }]
        }], null, null); })();

    function TabGroupCustomLabelExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon", 1);
        i0.ɵɵtext(1, "thumb_up");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(2, " First ");
    } }
    function TabGroupCustomLabelExample_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon", 1);
        i0.ɵɵtext(1, "thumb_up");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(2, " Second ");
    } }
    function TabGroupCustomLabelExample_ng_template_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon", 1);
        i0.ɵɵtext(1, "thumb_up");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(2, " Third ");
    } }
    /**
     * @title Using tabs with a custom label template
     */
    var TabGroupCustomLabelExample = /** @class */ (function () {
        function TabGroupCustomLabelExample() {
        }
        TabGroupCustomLabelExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tab-group-custom-label-example',
                        templateUrl: 'tab-group-custom-label-example.html',
                        styleUrls: ['tab-group-custom-label-example.css'],
                    },] },
        ];
        TabGroupCustomLabelExample.ɵfac = function TabGroupCustomLabelExample_Factory(t) { return new (t || TabGroupCustomLabelExample)(); };
        TabGroupCustomLabelExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupCustomLabelExample, selectors: [["tab-group-custom-label-example"]], decls: 10, vars: 0, consts: [["mat-tab-label", ""], [1, "example-tab-icon"]], template: function TabGroupCustomLabelExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-tab-group");
                i0.ɵɵelementStart(1, "mat-tab");
                i0.ɵɵtemplate(2, TabGroupCustomLabelExample_ng_template_2_Template, 3, 0, "ng-template", 0);
                i0.ɵɵtext(3, " Content 1 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "mat-tab");
                i0.ɵɵtemplate(5, TabGroupCustomLabelExample_ng_template_5_Template, 3, 0, "ng-template", 0);
                i0.ɵɵtext(6, " Content 2 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-tab");
                i0.ɵɵtemplate(8, TabGroupCustomLabelExample_ng_template_8_Template, 3, 0, "ng-template", 0);
                i0.ɵɵtext(9, " Content 3 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1$2.MatTabGroup, i1$2.MatTab, i1$2.MatTabLabel, i2.MatIcon], styles: [".example-tab-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
        return TabGroupCustomLabelExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupCustomLabelExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'tab-group-dynamic-height-example',
                        templateUrl: 'tab-group-dynamic-height-example.html',
                        styleUrls: ['tab-group-dynamic-height-example.css'],
                    },] },
        ];
        TabGroupDynamicHeightExample.ɵfac = function TabGroupDynamicHeightExample_Factory(t) { return new (t || TabGroupDynamicHeightExample)(); };
        TabGroupDynamicHeightExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupDynamicHeightExample, selectors: [["tab-group-dynamic-height-example"]], decls: 7, vars: 0, consts: [["dynamicHeight", ""], ["label", "Short tab"], [1, "example-small-box", "mat-elevation-z4"], ["label", "Long tab"], [1, "example-large-box", "mat-elevation-z4"]], template: function TabGroupDynamicHeightExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-tab-group", 0);
                i0.ɵɵelementStart(1, "mat-tab", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵtext(3, " Small content ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "mat-tab", 3);
                i0.ɵɵelementStart(5, "div", 4);
                i0.ɵɵtext(6, " Large content ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1$2.MatTabGroup, i1$2.MatTab], styles: [".example-small-box[_ngcontent-%COMP%], .example-large-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 300px;\n}"] });
        return TabGroupDynamicHeightExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupDynamicHeightExample, [{
            type: i0.Component,
            args: [{
                    selector: 'tab-group-dynamic-height-example',
                    templateUrl: 'tab-group-dynamic-height-example.html',
                    styleUrls: ['tab-group-dynamic-height-example.css'],
                }]
        }], null, null); })();

    function TabGroupDynamicExample_mat_tab_12_Template(rf, ctx) { if (rf & 1) {
        var _r13 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-tab", 6);
        i0.ɵɵtext(1);
        i0.ɵɵelementStart(2, "button", 7);
        i0.ɵɵlistener("click", function TabGroupDynamicExample_mat_tab_12_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r13); var index_r11 = ctx.index; var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.removeTab(index_r11); });
        i0.ɵɵtext(3, " Delete Tab ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var tab_r10 = ctx.$implicit;
        var ctx_r9 = i0.ɵɵnextContext();
        i0.ɵɵproperty("label", tab_r10);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" Contents for ", tab_r10, " tab ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx_r9.tabs.length === 1);
    } }
    /**
     * @title Tab group with dynamically changing tabs
     */
    var TabGroupDynamicExample = /** @class */ (function () {
        function TabGroupDynamicExample() {
            this.tabs = ['First', 'Second', 'Third'];
            this.selected = new i3.FormControl(0);
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
            { type: i0.Component, args: [{
                        selector: 'tab-group-dynamic-example',
                        templateUrl: 'tab-group-dynamic-example.html',
                        styleUrls: ['tab-group-dynamic-example.css'],
                    },] },
        ];
        TabGroupDynamicExample.ɵfac = function TabGroupDynamicExample_Factory(t) { return new (t || TabGroupDynamicExample)(); };
        TabGroupDynamicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupDynamicExample, selectors: [["tab-group-dynamic-example"]], decls: 13, vars: 3, consts: [[1, "example-input-label"], ["matInput", "", "type", "number", 3, "formControl"], ["mat-raised-button", "", 1, "example-add-tab-button", 3, "click"], ["selectAfterAdding", ""], [3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["mat-raised-button", "", 1, "example-delete-tab-button", 3, "disabled", "click"]], template: function TabGroupDynamicExample_Template(rf, ctx) { if (rf & 1) {
                var _r14 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "span", 0);
                i0.ɵɵtext(2, " Selected tab index: ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-form-field");
                i0.ɵɵelement(4, "input", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div");
                i0.ɵɵelementStart(6, "button", 2);
                i0.ɵɵlistener("click", function TabGroupDynamicExample_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r14); var _r8 = i0.ɵɵreference(9); return ctx.addTab(_r8.checked); });
                i0.ɵɵtext(7, " Add new tab ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "mat-checkbox", null, 3);
                i0.ɵɵtext(10, " Select tab after adding ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-tab-group", 4);
                i0.ɵɵlistener("selectedIndexChange", function TabGroupDynamicExample_Template_mat_tab_group_selectedIndexChange_11_listener($event) { return ctx.selected.setValue($event); });
                i0.ɵɵtemplate(12, TabGroupDynamicExample_mat_tab_12_Template, 4, 3, "mat-tab", 5);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("formControl", ctx.selected);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("selectedIndex", ctx.selected.value);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.tabs);
            } }, directives: [i1$3.MatFormField, i2$1.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i4.MatButton, i5.MatCheckbox, i1$2.MatTabGroup, i1.NgForOf, i1$2.MatTab], styles: [".example-input-label[_ngcontent-%COMP%], .example-add-tab-button[_ngcontent-%COMP%], .example-delete-tab-button[_ngcontent-%COMP%] {\n  margin: 8px;\n}"] });
        return TabGroupDynamicExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupDynamicExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'tab-group-header-below-example',
                        templateUrl: 'tab-group-header-below-example.html',
                        styleUrls: ['tab-group-header-below-example.css'],
                    },] },
        ];
        TabGroupHeaderBelowExample.ɵfac = function TabGroupHeaderBelowExample_Factory(t) { return new (t || TabGroupHeaderBelowExample)(); };
        TabGroupHeaderBelowExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupHeaderBelowExample, selectors: [["tab-group-header-below-example"]], decls: 7, vars: 0, consts: [["headerPosition", "below"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupHeaderBelowExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-tab-group", 0);
                i0.ɵɵelementStart(1, "mat-tab", 1);
                i0.ɵɵtext(2, " Content 1 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-tab", 2);
                i0.ɵɵtext(4, " Content 2 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-tab", 3);
                i0.ɵɵtext(6, " Content 3 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1$2.MatTabGroup, i1$2.MatTab], styles: [""] });
        return TabGroupHeaderBelowExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupHeaderBelowExample, [{
            type: i0.Component,
            args: [{
                    selector: 'tab-group-header-below-example',
                    templateUrl: 'tab-group-header-below-example.html',
                    styleUrls: ['tab-group-header-below-example.css'],
                }]
        }], null, null); })();

    function TabGroupLazyLoadedExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
        i0.ɵɵpipe(1, "date");
    } if (rf & 2) {
        var ctx_r15 = i0.ɵɵnextContext();
        i0.ɵɵtextInterpolate1(" Content 1 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r15.getTimeLoaded(1), "medium"), " ");
    } }
    function TabGroupLazyLoadedExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
        i0.ɵɵpipe(1, "date");
    } if (rf & 2) {
        var ctx_r16 = i0.ɵɵnextContext();
        i0.ɵɵtextInterpolate1(" Content 2 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r16.getTimeLoaded(2), "medium"), " ");
    } }
    function TabGroupLazyLoadedExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
        i0.ɵɵpipe(1, "date");
    } if (rf & 2) {
        var ctx_r17 = i0.ɵɵnextContext();
        i0.ɵɵtextInterpolate1(" Content 3 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r17.getTimeLoaded(3), "medium"), " ");
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
            { type: i0.Component, args: [{
                        selector: 'tab-group-lazy-loaded-example',
                        templateUrl: 'tab-group-lazy-loaded-example.html',
                        styleUrls: ['tab-group-lazy-loaded-example.css'],
                    },] },
        ];
        TabGroupLazyLoadedExample.ɵfac = function TabGroupLazyLoadedExample_Factory(t) { return new (t || TabGroupLazyLoadedExample)(); };
        TabGroupLazyLoadedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupLazyLoadedExample, selectors: [["tab-group-lazy-loaded-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["matTabContent", ""], ["label", "Second"], ["label", "Third"]], template: function TabGroupLazyLoadedExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-tab-group");
                i0.ɵɵelementStart(1, "mat-tab", 0);
                i0.ɵɵtemplate(2, TabGroupLazyLoadedExample_ng_template_2_Template, 2, 4, "ng-template", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-tab", 2);
                i0.ɵɵtemplate(4, TabGroupLazyLoadedExample_ng_template_4_Template, 2, 4, "ng-template", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-tab", 3);
                i0.ɵɵtemplate(6, TabGroupLazyLoadedExample_ng_template_6_Template, 2, 4, "ng-template", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1$2.MatTabGroup, i1$2.MatTab, i1$2.MatTabContent], pipes: [i1.DatePipe], styles: [""] });
        return TabGroupLazyLoadedExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupLazyLoadedExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'tab-group-stretched-example',
                        templateUrl: 'tab-group-stretched-example.html',
                        styleUrls: ['tab-group-stretched-example.css'],
                    },] },
        ];
        TabGroupStretchedExample.ɵfac = function TabGroupStretchedExample_Factory(t) { return new (t || TabGroupStretchedExample)(); };
        TabGroupStretchedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupStretchedExample, selectors: [["tab-group-stretched-example"]], decls: 7, vars: 0, consts: [["mat-stretch-tabs", "", 1, "example-stretched-tabs", "mat-elevation-z4"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupStretchedExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-tab-group", 0);
                i0.ɵɵelementStart(1, "mat-tab", 1);
                i0.ɵɵtext(2, " Content 1 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-tab", 2);
                i0.ɵɵtext(4, " Content 2 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-tab", 3);
                i0.ɵɵtext(6, " Content 3 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1$2.MatTabGroup, i1$2.MatTab], styles: [".example-stretched-tabs[_ngcontent-%COMP%] {\n  max-width: 800px;\n}"] });
        return TabGroupStretchedExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupStretchedExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'tab-group-theme-example',
                        templateUrl: 'tab-group-theme-example.html',
                        styleUrls: ['tab-group-theme-example.css'],
                    },] },
        ];
        TabGroupThemeExample.ɵfac = function TabGroupThemeExample_Factory(t) { return new (t || TabGroupThemeExample)(); };
        TabGroupThemeExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupThemeExample, selectors: [["tab-group-theme-example"]], decls: 25, vars: 2, consts: [["value", "primary", "aria-label", "Change color"], ["colorToggle", "matButtonToggleGroup"], ["value", "primary"], ["value", "accent"], [1, "example-button-toggle-label"], ["backgroundColorToggle", "matButtonToggleGroup"], [3, "color", "backgroundColor"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupThemeExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "mat-button-toggle-group", 0, 1);
                i0.ɵɵelementStart(3, "mat-button-toggle", 2);
                i0.ɵɵtext(4, " Primary ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-button-toggle", 3);
                i0.ɵɵtext(6, " Accent ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "span", 4);
                i0.ɵɵtext(8, " Color ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div");
                i0.ɵɵelementStart(10, "mat-button-toggle-group", 0, 5);
                i0.ɵɵelementStart(12, "mat-button-toggle", 2);
                i0.ɵɵtext(13, " Primary ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-button-toggle", 3);
                i0.ɵɵtext(15, " Accent ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "span", 4);
                i0.ɵɵtext(17, " Background Color ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "mat-tab-group", 6);
                i0.ɵɵelementStart(19, "mat-tab", 7);
                i0.ɵɵtext(20, " Content 1 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "mat-tab", 8);
                i0.ɵɵtext(22, " Content 2 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "mat-tab", 9);
                i0.ɵɵtext(24, " Content 3 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r18 = i0.ɵɵreference(2);
                var _r19 = i0.ɵɵreference(11);
                i0.ɵɵadvance(18);
                i0.ɵɵproperty("color", _r18.value)("backgroundColor", _r19.value);
            } }, directives: [i1$1.MatButtonToggleGroup, i1$1.MatButtonToggle, i1$2.MatTabGroup, i1$2.MatTab], styles: [".example-button-toggle-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 16px;\n}"] });
        return TabGroupThemeExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupThemeExample, [{
            type: i0.Component,
            args: [{
                    selector: 'tab-group-theme-example',
                    templateUrl: 'tab-group-theme-example.html',
                    styleUrls: ['tab-group-theme-example.css'],
                }]
        }], null, null); })();

    function TabNavBarBasicExample_a_1_Template(rf, ctx) { if (rf & 1) {
        var _r23 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 4);
        i0.ɵɵlistener("click", function TabNavBarBasicExample_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r23); var link_r21 = ctx.$implicit; var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.activeLink = link_r21; });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var link_r21 = ctx.$implicit;
        var ctx_r20 = i0.ɵɵnextContext();
        i0.ɵɵproperty("active", ctx_r20.activeLink == link_r21);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", link_r21, " ");
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
            { type: i0.Component, args: [{
                        selector: 'tab-nav-bar-basic-example',
                        templateUrl: 'tab-nav-bar-basic-example.html',
                        styleUrls: ['tab-nav-bar-basic-example.css'],
                    },] },
        ];
        TabNavBarBasicExample.ɵfac = function TabNavBarBasicExample_Factory(t) { return new (t || TabNavBarBasicExample)(); };
        TabNavBarBasicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabNavBarBasicExample, selectors: [["tab-nav-bar-basic-example"]], decls: 8, vars: 2, consts: [["mat-tab-nav-bar", "", 3, "backgroundColor"], ["mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "disabled", ""], ["mat-raised-button", "", 1, "example-action-button", 3, "click"], ["mat-tab-link", "", 3, "active", "click"]], template: function TabNavBarBasicExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "nav", 0);
                i0.ɵɵtemplate(1, TabNavBarBasicExample_a_1_Template, 2, 2, "a", 1);
                i0.ɵɵelementStart(2, "a", 2);
                i0.ɵɵtext(3, "Disabled Link");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "button", 3);
                i0.ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_4_listener($event) { return ctx.toggleBackground(); });
                i0.ɵɵtext(5, " Toggle background\n");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "button", 3);
                i0.ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_6_listener($event) { return ctx.addLink(); });
                i0.ɵɵtext(7, " Add link\n");
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("backgroundColor", ctx.background);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.links);
            } }, directives: [i1$2.MatTabNav, i1.NgForOf, i1$2.MatTabLink, i4.MatButton], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-right: 8px;\n}"] });
        return TabNavBarBasicExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabNavBarBasicExample, [{
            type: i0.Component,
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
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            i4.MatButtonModule,
                            i1$1.MatButtonToggleModule,
                            i5.MatCheckboxModule,
                            i2.MatIconModule,
                            i2$1.MatInputModule,
                            i1$2.MatTabsModule,
                            i3.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        TabGroupExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: TabGroupExamplesModule });
        TabGroupExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TabGroupExamplesModule_Factory(t) { return new (t || TabGroupExamplesModule)(); }, imports: [[
                    i1.CommonModule,
                    i4.MatButtonModule,
                    i1$1.MatButtonToggleModule,
                    i5.MatCheckboxModule,
                    i2.MatIconModule,
                    i2$1.MatInputModule,
                    i1$2.MatTabsModule,
                    i3.ReactiveFormsModule,
                ]] });
        return TabGroupExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TabGroupExamplesModule, { declarations: [TabGroupAlignExample,
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
            TabNavBarBasicExample], imports: [i1.CommonModule,
            i4.MatButtonModule,
            i1$1.MatButtonToggleModule,
            i5.MatCheckboxModule,
            i2.MatIconModule,
            i2$1.MatInputModule,
            i1$2.MatTabsModule,
            i3.ReactiveFormsModule], exports: [TabGroupAlignExample,
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
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.CommonModule,
                        i4.MatButtonModule,
                        i1$1.MatButtonToggleModule,
                        i5.MatCheckboxModule,
                        i2.MatIconModule,
                        i2$1.MatInputModule,
                        i1$2.MatTabsModule,
                        i3.ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.TabGroupAlignExample = TabGroupAlignExample;
    exports.TabGroupAnimationsExample = TabGroupAnimationsExample;
    exports.TabGroupAsyncExample = TabGroupAsyncExample;
    exports.TabGroupBasicExample = TabGroupBasicExample;
    exports.TabGroupCustomLabelExample = TabGroupCustomLabelExample;
    exports.TabGroupDynamicExample = TabGroupDynamicExample;
    exports.TabGroupDynamicHeightExample = TabGroupDynamicHeightExample;
    exports.TabGroupExamplesModule = TabGroupExamplesModule;
    exports.TabGroupHeaderBelowExample = TabGroupHeaderBelowExample;
    exports.TabGroupLazyLoadedExample = TabGroupLazyLoadedExample;
    exports.TabGroupStretchedExample = TabGroupStretchedExample;
    exports.TabGroupThemeExample = TabGroupThemeExample;
    exports.TabNavBarBasicExample = TabNavBarBasicExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-tabs.umd.js.map
