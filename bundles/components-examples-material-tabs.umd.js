(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/tabs'), require('rxjs'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/tabs', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/input', '@angular/material/tabs', 'rxjs', '@angular/material/form-field'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.tabs = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.buttonToggle, global.ng.material.checkbox, global.ng.material.icon, global.ng.material.input, global.ng.material.tabs, global.rxjs, global.ng.material.formField));
}(this, (function (exports, i1$1, i0, i3, i4, i1$3, i5, i2, i2$1, i1, rxjs, i1$2) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);

    /**
     * @title Tab group with aligned labels
     */
    var TabGroupAlignExample = /** @class */ (function () {
        function TabGroupAlignExample() {
        }
        return TabGroupAlignExample;
    }());
    TabGroupAlignExample.ɵfac = function TabGroupAlignExample_Factory(t) { return new (t || TabGroupAlignExample)(); };
    TabGroupAlignExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabGroupAlignExample, selectors: [["tab-group-align-example"]], decls: 21, vars: 0, consts: [["mat-align-tabs", "start"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["mat-align-tabs", "center"], ["mat-align-tabs", "end"]], template: function TabGroupAlignExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tab-group", 0);
                i0__namespace.ɵɵelementStart(1, "mat-tab", 1);
                i0__namespace.ɵɵtext(2, "Content 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-tab", 2);
                i0__namespace.ɵɵtext(4, "Content 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-tab", 3);
                i0__namespace.ɵɵtext(6, "Content 3");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-tab-group", 4);
                i0__namespace.ɵɵelementStart(8, "mat-tab", 1);
                i0__namespace.ɵɵtext(9, "Content 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "mat-tab", 2);
                i0__namespace.ɵɵtext(11, "Content 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "mat-tab", 3);
                i0__namespace.ɵɵtext(13, "Content 3");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-tab-group", 5);
                i0__namespace.ɵɵelementStart(15, "mat-tab", 1);
                i0__namespace.ɵɵtext(16, "Content 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "mat-tab", 2);
                i0__namespace.ɵɵtext(18, "Content 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(19, "mat-tab", 3);
                i0__namespace.ɵɵtext(20, "Content 3");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatTabGroup, i1__namespace.MatTab], styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabGroupAlignExample, [{
                type: i0.Component,
                args: [{ selector: 'tab-group-align-example', template: "<!-- #docregion align-start -->\n<mat-tab-group mat-align-tabs=\"start\">\n<!-- #enddocregion align-start -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"center\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"end\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"] }]
            }], null, null);
    })();

    /**
     * @title Tab group animations
     */
    var TabGroupAnimationsExample = /** @class */ (function () {
        function TabGroupAnimationsExample() {
        }
        return TabGroupAnimationsExample;
    }());
    TabGroupAnimationsExample.ɵfac = function TabGroupAnimationsExample_Factory(t) { return new (t || TabGroupAnimationsExample)(); };
    TabGroupAnimationsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabGroupAnimationsExample, selectors: [["tab-group-animations-example"]], decls: 18, vars: 0, consts: [["animationDuration", "0ms"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["animationDuration", "2000ms"]], template: function TabGroupAnimationsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h3");
                i0__namespace.ɵɵtext(1, "No animation");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-tab-group", 0);
                i0__namespace.ɵɵelementStart(3, "mat-tab", 1);
                i0__namespace.ɵɵtext(4, "Content 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-tab", 2);
                i0__namespace.ɵɵtext(6, "Content 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-tab", 3);
                i0__namespace.ɵɵtext(8, "Content 3");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "h3");
                i0__namespace.ɵɵtext(10, "Very slow animation");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "mat-tab-group", 4);
                i0__namespace.ɵɵelementStart(12, "mat-tab", 1);
                i0__namespace.ɵɵtext(13, "Content 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-tab", 2);
                i0__namespace.ɵɵtext(15, "Content 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "mat-tab", 3);
                i0__namespace.ɵɵtext(17, "Content 3");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatTabGroup, i1__namespace.MatTab], styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabGroupAnimationsExample, [{
                type: i0.Component,
                args: [{ selector: 'tab-group-animations-example', template: "<h3>No animation</h3>\n\n<mat-tab-group animationDuration=\"0ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<h3>Very slow animation</h3>\n<!-- #docregion slow-animation-duration -->\n<mat-tab-group animationDuration=\"2000ms\">\n<!-- #enddocregion slow-animation-duration -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"] }]
            }], null, null);
    })();

    function TabGroupAsyncExample_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtext(1, " Loading tabs...\n");
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function TabGroupAsyncExample_mat_tab_3_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0);
        }
        if (rf & 2) {
            var tab_r2 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵtextInterpolate(tab_r2.label);
        }
    }
    function TabGroupAsyncExample_mat_tab_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tab");
            i0__namespace.ɵɵtemplate(1, TabGroupAsyncExample_mat_tab_3_ng_template_1_Template, 1, 1, "ng-template", 2);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var tab_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", tab_r2.content, " ");
        }
    }
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
        return TabGroupAsyncExample;
    }());
    TabGroupAsyncExample.ɵfac = function TabGroupAsyncExample_Factory(t) { return new (t || TabGroupAsyncExample)(); };
    TabGroupAsyncExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabGroupAsyncExample, selectors: [["tab-group-async-example"]], decls: 5, vars: 6, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-tab-label", ""]], template: function TabGroupAsyncExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, TabGroupAsyncExample_ng_container_0_Template, 2, 0, "ng-container", 0);
                i0__namespace.ɵɵpipe(1, "async");
                i0__namespace.ɵɵelementStart(2, "mat-tab-group");
                i0__namespace.ɵɵtemplate(3, TabGroupAsyncExample_mat_tab_3_Template, 3, 1, "mat-tab", 1);
                i0__namespace.ɵɵpipe(4, "async");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(1, 2, ctx.asyncTabs) === null);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(4, 4, ctx.asyncTabs));
            }
        }, directives: [i1__namespace$1.NgIf, i1__namespace.MatTabGroup, i1__namespace$1.NgForOf, i1__namespace.MatTab, i1__namespace.MatTabLabel], pipes: [i1__namespace$1.AsyncPipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabGroupAsyncExample, [{
                type: i0.Component,
                args: [{ selector: 'tab-group-async-example', template: "<ng-container *ngIf=\"(asyncTabs | async) === null\">\n  Loading tabs...\n</ng-container>\n\n<mat-tab-group>\n  <mat-tab *ngFor=\"let tab of asyncTabs | async\">\n    <ng-template mat-tab-label>{{tab.label}}</ng-template>\n    {{tab.content}}\n  </mat-tab>\n</mat-tab-group>\n" }]
            }], function () { return []; }, null);
    })();

    /**
     * @title Basic use of the tab group
     */
    var TabGroupBasicExample = /** @class */ (function () {
        function TabGroupBasicExample() {
        }
        return TabGroupBasicExample;
    }());
    TabGroupBasicExample.ɵfac = function TabGroupBasicExample_Factory(t) { return new (t || TabGroupBasicExample)(); };
    TabGroupBasicExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabGroupBasicExample, selectors: [["tab-group-basic-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupBasicExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tab-group");
                i0__namespace.ɵɵelementStart(1, "mat-tab", 0);
                i0__namespace.ɵɵtext(2, " Content 1 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-tab", 1);
                i0__namespace.ɵɵtext(4, " Content 2 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-tab", 2);
                i0__namespace.ɵɵtext(6, " Content 3 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatTabGroup, i1__namespace.MatTab], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabGroupBasicExample, [{
                type: i0.Component,
                args: [{ selector: 'tab-group-basic-example', template: "<mat-tab-group>\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n" }]
            }], null, null);
    })();

    function TabGroupCustomLabelExample_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-icon", 1);
            i0__namespace.ɵɵtext(1, "thumb_up");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(2, " First ");
        }
    }
    function TabGroupCustomLabelExample_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-icon", 1);
            i0__namespace.ɵɵtext(1, "thumb_up");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(2, " Second ");
        }
    }
    function TabGroupCustomLabelExample_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-icon", 1);
            i0__namespace.ɵɵtext(1, "thumb_up");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(2, " Third ");
        }
    }
    /**
     * @title Using tabs with a custom label template
     */
    var TabGroupCustomLabelExample = /** @class */ (function () {
        function TabGroupCustomLabelExample() {
        }
        return TabGroupCustomLabelExample;
    }());
    TabGroupCustomLabelExample.ɵfac = function TabGroupCustomLabelExample_Factory(t) { return new (t || TabGroupCustomLabelExample)(); };
    TabGroupCustomLabelExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabGroupCustomLabelExample, selectors: [["tab-group-custom-label-example"]], decls: 10, vars: 0, consts: [["mat-tab-label", ""], [1, "example-tab-icon"]], template: function TabGroupCustomLabelExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tab-group");
                i0__namespace.ɵɵelementStart(1, "mat-tab");
                i0__namespace.ɵɵtemplate(2, TabGroupCustomLabelExample_ng_template_2_Template, 3, 0, "ng-template", 0);
                i0__namespace.ɵɵtext(3, " Content 1 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "mat-tab");
                i0__namespace.ɵɵtemplate(5, TabGroupCustomLabelExample_ng_template_5_Template, 3, 0, "ng-template", 0);
                i0__namespace.ɵɵtext(6, " Content 2 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-tab");
                i0__namespace.ɵɵtemplate(8, TabGroupCustomLabelExample_ng_template_8_Template, 3, 0, "ng-template", 0);
                i0__namespace.ɵɵtext(9, " Content 3 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatTabGroup, i1__namespace.MatTab, i1__namespace.MatTabLabel, i2__namespace.MatIcon], styles: [".example-tab-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabGroupCustomLabelExample, [{
                type: i0.Component,
                args: [{ selector: 'tab-group-custom-label-example', template: "<mat-tab-group>\n  <mat-tab>\n<!-- #docregion label-directive -->\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      First\n    </ng-template>\n<!-- #enddocregion label-directive -->\n    Content 1\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Second\n    </ng-template>\n    Content 2\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Third\n    </ng-template>\n\n    Content 3\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-tab-icon {\n  margin-right: 8px;\n}\n"] }]
            }], null, null);
    })();

    /**
     * @title Tab group with dynamic height based on tab contents
     */
    var TabGroupDynamicHeightExample = /** @class */ (function () {
        function TabGroupDynamicHeightExample() {
        }
        return TabGroupDynamicHeightExample;
    }());
    TabGroupDynamicHeightExample.ɵfac = function TabGroupDynamicHeightExample_Factory(t) { return new (t || TabGroupDynamicHeightExample)(); };
    TabGroupDynamicHeightExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabGroupDynamicHeightExample, selectors: [["tab-group-dynamic-height-example"]], decls: 7, vars: 0, consts: [["dynamicHeight", ""], ["label", "Short tab"], [1, "example-small-box", "mat-elevation-z4"], ["label", "Long tab"], [1, "example-large-box", "mat-elevation-z4"]], template: function TabGroupDynamicHeightExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tab-group", 0);
                i0__namespace.ɵɵelementStart(1, "mat-tab", 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵtext(3, " Small content ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "mat-tab", 3);
                i0__namespace.ɵɵelementStart(5, "div", 4);
                i0__namespace.ɵɵtext(6, " Large content ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatTabGroup, i1__namespace.MatTab], styles: [".example-small-box[_ngcontent-%COMP%], .example-large-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 300px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabGroupDynamicHeightExample, [{
                type: i0.Component,
                args: [{ selector: 'tab-group-dynamic-height-example', template: "<!-- #docregion dynamic-height -->\n<mat-tab-group dynamicHeight>\n<!-- #enddocregion dynamic-height -->\n  <mat-tab label=\"Short tab\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      Small content\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Long tab\">\n    <div class=\"example-large-box mat-elevation-z4\">\n      Large content\n    </div>\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n"] }]
            }], null, null);
    })();

    /**
     * @title Testing with MatTabGroupHarness
     */
    var TabGroupHarnessExample = /** @class */ (function () {
        function TabGroupHarnessExample() {
        }
        return TabGroupHarnessExample;
    }());
    TabGroupHarnessExample.ɵfac = function TabGroupHarnessExample_Factory(t) { return new (t || TabGroupHarnessExample)(); };
    TabGroupHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabGroupHarnessExample, selectors: [["tab-group-harness-example"]], decls: 10, vars: 0, consts: [["label", "Profile", "aria-label", "Profile tab"], [1, "test-tab-content"], ["label", "Settings", "aria-label", "Settings tab"], ["label", "FAQ", "aria-label", "FAQ tab"]], template: function TabGroupHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tab-group");
                i0__namespace.ɵɵelementStart(1, "mat-tab", 0);
                i0__namespace.ɵɵelementStart(2, "span", 1);
                i0__namespace.ɵɵtext(3, "Your personal information");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "mat-tab", 2);
                i0__namespace.ɵɵelementStart(5, "span", 1);
                i0__namespace.ɵɵtext(6, "Privacy settings");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-tab", 3);
                i0__namespace.ɵɵelementStart(8, "span", 1);
                i0__namespace.ɵɵtext(9, "How to update profile picture");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatTabGroup, i1__namespace.MatTab], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabGroupHarnessExample, [{
                type: i0.Component,
                args: [{ selector: 'tab-group-harness-example', template: "<mat-tab-group>\n  <mat-tab label=\"Profile\" aria-label=\"Profile tab\">\n    <span class=\"test-tab-content\">Your personal information</span>\n  </mat-tab>\n  <mat-tab label=\"Settings\" aria-label=\"Settings tab\">\n    <span class=\"test-tab-content\">Privacy settings</span>\n  </mat-tab>\n  <mat-tab label=\"FAQ\" aria-label=\"FAQ tab\">\n    <span class=\"test-tab-content\">How to update profile picture</span>\n  </mat-tab>\n</mat-tab-group>\n" }]
            }], null, null);
    })();

    function TabGroupDynamicExample_mat_tab_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-tab", 6);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementStart(2, "button", 7);
            i0__namespace.ɵɵlistener("click", function TabGroupDynamicExample_mat_tab_11_Template_button_click_2_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r5_1); var index_r3 = restoredCtx.index; var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.removeTab(index_r3); });
            i0__namespace.ɵɵtext(3, " Delete Tab ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var tab_r2 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("label", tab_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" Contents for ", tab_r2, " tab ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("disabled", ctx_r1.tabs.length === 1);
        }
    }
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
        return TabGroupDynamicExample;
    }());
    TabGroupDynamicExample.ɵfac = function TabGroupDynamicExample_Factory(t) { return new (t || TabGroupDynamicExample)(); };
    TabGroupDynamicExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabGroupDynamicExample, selectors: [["tab-group-dynamic-example"]], decls: 12, vars: 3, consts: [["appearance", "fill"], ["matInput", "", "type", "number", 3, "formControl"], ["mat-raised-button", "", 1, "example-add-tab-button", 3, "click"], ["selectAfterAdding", ""], [3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["mat-raised-button", "", 1, "example-delete-tab-button", 3, "disabled", "click"]], template: function TabGroupDynamicExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r6_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Selected tab index");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "div");
                i0__namespace.ɵɵelementStart(5, "button", 2);
                i0__namespace.ɵɵlistener("click", function TabGroupDynamicExample_Template_button_click_5_listener() { i0__namespace.ɵɵrestoreView(_r6_1); var _r0 = i0__namespace.ɵɵreference(8); return ctx.addTab(_r0.checked); });
                i0__namespace.ɵɵtext(6, " Add new tab ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-checkbox", null, 3);
                i0__namespace.ɵɵtext(9, " Select tab after adding ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "mat-tab-group", 4);
                i0__namespace.ɵɵlistener("selectedIndexChange", function TabGroupDynamicExample_Template_mat_tab_group_selectedIndexChange_10_listener($event) { return ctx.selected.setValue($event); });
                i0__namespace.ɵɵtemplate(11, TabGroupDynamicExample_mat_tab_11_Template, 4, 3, "mat-tab", 5);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("formControl", ctx.selected);
                i0__namespace.ɵɵadvance(7);
                i0__namespace.ɵɵproperty("selectedIndex", ctx.selected.value);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.tabs);
            }
        }, directives: [i1__namespace$2.MatFormField, i1__namespace$2.MatLabel, i2__namespace$1.MatInput, i3__namespace.NumberValueAccessor, i3__namespace.DefaultValueAccessor, i3__namespace.NgControlStatus, i3__namespace.FormControlDirective, i4__namespace.MatButton, i5__namespace.MatCheckbox, i1__namespace.MatTabGroup, i1__namespace$1.NgForOf, i1__namespace.MatTab], styles: [".example-input-label[_ngcontent-%COMP%], .example-add-tab-button[_ngcontent-%COMP%], .example-delete-tab-button[_ngcontent-%COMP%] {\n  margin: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabGroupDynamicExample, [{
                type: i0.Component,
                args: [{ selector: 'tab-group-dynamic-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Selected tab index</mat-label>\n  <input matInput type=\"number\" [formControl]=\"selected\">\n</mat-form-field>\n\n<div>\n  <button mat-raised-button\n          class=\"example-add-tab-button\"\n          (click)=\"addTab(selectAfterAdding.checked)\">\n    Add new tab\n  </button>\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n</div>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"selected.setValue($event)\">\n  <mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">\n    Contents for {{tab}} tab\n\n    <button mat-raised-button\n            class=\"example-delete-tab-button\"\n            [disabled]=\"tabs.length === 1\"\n            (click)=\"removeTab(index)\">\n      Delete Tab\n    </button>\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n"] }]
            }], null, null);
    })();

    /**
     * @title Tab group with the headers on the bottom
     */
    var TabGroupHeaderBelowExample = /** @class */ (function () {
        function TabGroupHeaderBelowExample() {
        }
        return TabGroupHeaderBelowExample;
    }());
    TabGroupHeaderBelowExample.ɵfac = function TabGroupHeaderBelowExample_Factory(t) { return new (t || TabGroupHeaderBelowExample)(); };
    TabGroupHeaderBelowExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabGroupHeaderBelowExample, selectors: [["tab-group-header-below-example"]], decls: 7, vars: 0, consts: [["headerPosition", "below"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupHeaderBelowExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tab-group", 0);
                i0__namespace.ɵɵelementStart(1, "mat-tab", 1);
                i0__namespace.ɵɵtext(2, " Content 1 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-tab", 2);
                i0__namespace.ɵɵtext(4, " Content 2 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-tab", 3);
                i0__namespace.ɵɵtext(6, " Content 3 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatTabGroup, i1__namespace.MatTab], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabGroupHeaderBelowExample, [{
                type: i0.Component,
                args: [{ selector: 'tab-group-header-below-example', template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n" }]
            }], null, null);
    })();

    function TabGroupLazyLoadedExample_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0);
            i0__namespace.ɵɵpipe(1, "date");
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵtextInterpolate1(" Content 1 - Loaded: ", i0__namespace.ɵɵpipeBind2(1, 1, ctx_r0.getTimeLoaded(1), "medium"), " ");
        }
    }
    function TabGroupLazyLoadedExample_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0);
            i0__namespace.ɵɵpipe(1, "date");
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵtextInterpolate1(" Content 2 - Loaded: ", i0__namespace.ɵɵpipeBind2(1, 1, ctx_r1.getTimeLoaded(2), "medium"), " ");
        }
    }
    function TabGroupLazyLoadedExample_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0);
            i0__namespace.ɵɵpipe(1, "date");
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵtextInterpolate1(" Content 3 - Loaded: ", i0__namespace.ɵɵpipeBind2(1, 1, ctx_r2.getTimeLoaded(3), "medium"), " ");
        }
    }
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
        return TabGroupLazyLoadedExample;
    }());
    TabGroupLazyLoadedExample.ɵfac = function TabGroupLazyLoadedExample_Factory(t) { return new (t || TabGroupLazyLoadedExample)(); };
    TabGroupLazyLoadedExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabGroupLazyLoadedExample, selectors: [["tab-group-lazy-loaded-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["matTabContent", ""], ["label", "Second"], ["label", "Third"]], template: function TabGroupLazyLoadedExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tab-group");
                i0__namespace.ɵɵelementStart(1, "mat-tab", 0);
                i0__namespace.ɵɵtemplate(2, TabGroupLazyLoadedExample_ng_template_2_Template, 2, 4, "ng-template", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-tab", 2);
                i0__namespace.ɵɵtemplate(4, TabGroupLazyLoadedExample_ng_template_4_Template, 2, 4, "ng-template", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-tab", 3);
                i0__namespace.ɵɵtemplate(6, TabGroupLazyLoadedExample_ng_template_6_Template, 2, 4, "ng-template", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatTabGroup, i1__namespace.MatTab, i1__namespace.MatTabContent], pipes: [i1__namespace$1.DatePipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabGroupLazyLoadedExample, [{
                type: i0.Component,
                args: [{ selector: 'tab-group-lazy-loaded-example', template: "<mat-tab-group>\n<!-- #docregion mat-tab-content -->\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n<!-- #enddocregion mat-tab-content -->\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n" }]
            }], null, null);
    })();

    /**
     * @title Tab group with stretched labels
     */
    var TabGroupStretchedExample = /** @class */ (function () {
        function TabGroupStretchedExample() {
        }
        return TabGroupStretchedExample;
    }());
    TabGroupStretchedExample.ɵfac = function TabGroupStretchedExample_Factory(t) { return new (t || TabGroupStretchedExample)(); };
    TabGroupStretchedExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabGroupStretchedExample, selectors: [["tab-group-stretched-example"]], decls: 7, vars: 0, consts: [["mat-stretch-tabs", "", 1, "example-stretched-tabs", "mat-elevation-z4"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupStretchedExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tab-group", 0);
                i0__namespace.ɵɵelementStart(1, "mat-tab", 1);
                i0__namespace.ɵɵtext(2, " Content 1 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-tab", 2);
                i0__namespace.ɵɵtext(4, " Content 2 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-tab", 3);
                i0__namespace.ɵɵtext(6, " Content 3 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatTabGroup, i1__namespace.MatTab], styles: [".example-stretched-tabs[_ngcontent-%COMP%] {\n  max-width: 800px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabGroupStretchedExample, [{
                type: i0.Component,
                args: [{ selector: 'tab-group-stretched-example', template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", styles: [".example-stretched-tabs {\n  max-width: 800px;\n}\n"] }]
            }], null, null);
    })();

    /**
     * @title Customizing the theme options on the tab group
     */
    var TabGroupThemeExample = /** @class */ (function () {
        function TabGroupThemeExample() {
        }
        return TabGroupThemeExample;
    }());
    TabGroupThemeExample.ɵfac = function TabGroupThemeExample_Factory(t) { return new (t || TabGroupThemeExample)(); };
    TabGroupThemeExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabGroupThemeExample, selectors: [["tab-group-theme-example"]], decls: 25, vars: 2, consts: [["value", "primary", "aria-label", "Change color"], ["colorToggle", "matButtonToggleGroup"], ["value", "primary"], ["value", "accent"], [1, "example-button-toggle-label"], ["backgroundColorToggle", "matButtonToggleGroup"], [3, "color", "backgroundColor"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupThemeExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div");
                i0__namespace.ɵɵelementStart(1, "mat-button-toggle-group", 0, 1);
                i0__namespace.ɵɵelementStart(3, "mat-button-toggle", 2);
                i0__namespace.ɵɵtext(4, " Primary ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-button-toggle", 3);
                i0__namespace.ɵɵtext(6, " Accent ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "span", 4);
                i0__namespace.ɵɵtext(8, " Color ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "div");
                i0__namespace.ɵɵelementStart(10, "mat-button-toggle-group", 0, 5);
                i0__namespace.ɵɵelementStart(12, "mat-button-toggle", 2);
                i0__namespace.ɵɵtext(13, " Primary ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-button-toggle", 3);
                i0__namespace.ɵɵtext(15, " Accent ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "span", 4);
                i0__namespace.ɵɵtext(17, " Background Color ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "mat-tab-group", 6);
                i0__namespace.ɵɵelementStart(19, "mat-tab", 7);
                i0__namespace.ɵɵtext(20, " Content 1 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(21, "mat-tab", 8);
                i0__namespace.ɵɵtext(22, " Content 2 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(23, "mat-tab", 9);
                i0__namespace.ɵɵtext(24, " Content 3 ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(2);
                var _r1 = i0__namespace.ɵɵreference(11);
                i0__namespace.ɵɵadvance(18);
                i0__namespace.ɵɵproperty("color", _r0.value)("backgroundColor", _r1.value);
            }
        }, directives: [i1__namespace$3.MatButtonToggleGroup, i1__namespace$3.MatButtonToggle, i1__namespace.MatTabGroup, i1__namespace.MatTab], styles: [".example-button-toggle-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 16px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabGroupThemeExample, [{
                type: i0.Component,
                args: [{ selector: 'tab-group-theme-example', template: "<div>\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n    <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\"> Color </span>\n</div>\n\n<div>\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n    <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\"> Background Color </span>\n</div>\n\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", styles: [".example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n"] }]
            }], null, null);
    })();

    function TabNavBarBasicExample_a_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "a", 4);
            i0__namespace.ɵɵlistener("click", function TabNavBarBasicExample_a_1_Template_a_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r3_1); var link_r1 = restoredCtx.$implicit; var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.activeLink = link_r1; });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var link_r1 = ctx.$implicit;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("active", ctx_r0.activeLink == link_r1);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", link_r1, " ");
        }
    }
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
        return TabNavBarBasicExample;
    }());
    TabNavBarBasicExample.ɵfac = function TabNavBarBasicExample_Factory(t) { return new (t || TabNavBarBasicExample)(); };
    TabNavBarBasicExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TabNavBarBasicExample, selectors: [["tab-nav-bar-basic-example"]], decls: 8, vars: 2, consts: [["mat-tab-nav-bar", "", 3, "backgroundColor"], ["mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "disabled", ""], ["mat-raised-button", "", 1, "example-action-button", 3, "click"], ["mat-tab-link", "", 3, "active", "click"]], template: function TabNavBarBasicExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "nav", 0);
                i0__namespace.ɵɵtemplate(1, TabNavBarBasicExample_a_1_Template, 2, 2, "a", 1);
                i0__namespace.ɵɵelementStart(2, "a", 2);
                i0__namespace.ɵɵtext(3, "Disabled Link");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "button", 3);
                i0__namespace.ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_4_listener() { return ctx.toggleBackground(); });
                i0__namespace.ɵɵtext(5, " Toggle background\n");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "button", 3);
                i0__namespace.ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_6_listener() { return ctx.addLink(); });
                i0__namespace.ɵɵtext(7, " Add link\n");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("backgroundColor", ctx.background);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.links);
            }
        }, directives: [i1__namespace.MatTabNav, i1__namespace$1.NgForOf, i1__namespace.MatTabLink, i4__namespace.MatButton], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-right: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabNavBarBasicExample, [{
                type: i0.Component,
                args: [{ selector: 'tab-nav-bar-basic-example', template: "<!-- #docregion mat-tab-nav -->\n<nav mat-tab-nav-bar [backgroundColor]=\"background\">\n  <a mat-tab-link *ngFor=\"let link of links\"\n     (click)=\"activeLink = link\"\n     [active]=\"activeLink == link\"> {{link}} </a>\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n<!-- #enddocregion mat-tab-nav -->\n\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n", styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"] }]
            }], null, null);
    })();

    var EXAMPLES = [
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
    var TabGroupExamplesModule = /** @class */ (function () {
        function TabGroupExamplesModule() {
        }
        return TabGroupExamplesModule;
    }());
    TabGroupExamplesModule.ɵfac = function TabGroupExamplesModule_Factory(t) { return new (t || TabGroupExamplesModule)(); };
    TabGroupExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: TabGroupExamplesModule });
    TabGroupExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i4.MatButtonModule,
                i1$3.MatButtonToggleModule,
                i5.MatCheckboxModule,
                i2.MatIconModule,
                i2$1.MatInputModule,
                i1.MatTabsModule,
                i3.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TabGroupExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i4.MatButtonModule,
                            i1$3.MatButtonToggleModule,
                            i5.MatCheckboxModule,
                            i2.MatIconModule,
                            i2$1.MatInputModule,
                            i1.MatTabsModule,
                            i3.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(TabGroupExamplesModule, { declarations: [TabGroupAlignExample,
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
                TabNavBarBasicExample], imports: [i1$1.CommonModule,
                i4.MatButtonModule,
                i1$3.MatButtonToggleModule,
                i5.MatCheckboxModule,
                i2.MatIconModule,
                i2$1.MatInputModule,
                i1.MatTabsModule,
                i3.ReactiveFormsModule], exports: [TabGroupAlignExample,
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
                TabNavBarBasicExample] });
    })();

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
    exports.TabGroupExamplesModule = TabGroupExamplesModule;
    exports.TabGroupHarnessExample = TabGroupHarnessExample;
    exports.TabGroupHeaderBelowExample = TabGroupHeaderBelowExample;
    exports.TabGroupLazyLoadedExample = TabGroupLazyLoadedExample;
    exports.TabGroupStretchedExample = TabGroupStretchedExample;
    exports.TabGroupThemeExample = TabGroupThemeExample;
    exports.TabNavBarBasicExample = TabNavBarBasicExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-tabs.umd.js.map
