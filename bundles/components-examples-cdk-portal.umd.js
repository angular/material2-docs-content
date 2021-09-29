(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/portal'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/portal', ['exports', '@angular/cdk/portal', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.portal = {}), global.ng.cdk.portal, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

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

    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var _c0 = ["templatePortalContent"];
    var _c1 = ["domPortalContent"];
    function CdkPortalOverviewExample_ng_template_3_Template(rf, ctx) { }
    function CdkPortalOverviewExample_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Hello, this is a template portal");
        }
    }
    /**
     * @title Portal overview
     */
    var CdkPortalOverviewExample = /** @class */ (function () {
        function CdkPortalOverviewExample(_viewContainerRef) {
            this._viewContainerRef = _viewContainerRef;
        }
        CdkPortalOverviewExample.prototype.ngAfterViewInit = function () {
            this.componentPortal = new i1.ComponentPortal(ComponentPortalExample);
            this.templatePortal = new i1.TemplatePortal(this.templatePortalContent, this._viewContainerRef);
            this.domPortal = new i1.DomPortal(this.domPortalContent);
        };
        return CdkPortalOverviewExample;
    }());
    CdkPortalOverviewExample.ɵfac = function CdkPortalOverviewExample_Factory(t) { return new (t || CdkPortalOverviewExample)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ViewContainerRef)); };
    CdkPortalOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkPortalOverviewExample, selectors: [["cdk-portal-overview-example"]], viewQuery: function CdkPortalOverviewExample_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 5);
                i0__namespace.ɵɵviewQuery(_c1, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.templatePortalContent = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.domPortalContent = _t.first);
            }
        }, decls: 15, vars: 1, consts: [[1, "example-portal-outlet"], [3, "cdkPortalOutlet"], ["templatePortalContent", ""], [3, "click"], ["domPortalContent", ""]], template: function CdkPortalOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h2");
                i0__namespace.ɵɵtext(1, "The portal outlet is below:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "div", 0);
                i0__namespace.ɵɵtemplate(3, CdkPortalOverviewExample_ng_template_3_Template, 0, 0, "ng-template", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(4, CdkPortalOverviewExample_ng_template_4_Template, 1, 0, "ng-template", null, 2, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementStart(6, "button", 3);
                i0__namespace.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_6_listener() { return ctx.selectedPortal = ctx.componentPortal; });
                i0__namespace.ɵɵtext(7, "Render component portal");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "button", 3);
                i0__namespace.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_8_listener() { return ctx.selectedPortal = ctx.templatePortal; });
                i0__namespace.ɵɵtext(9, "Render template portal");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "button", 3);
                i0__namespace.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_10_listener() { return ctx.selectedPortal = ctx.domPortal; });
                i0__namespace.ɵɵtext(11, "Render DOM portal");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "div", null, 4);
                i0__namespace.ɵɵtext(14, "Hello, this is a DOM portal");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("cdkPortalOutlet", ctx.selectedPortal);
            }
        }, directives: [i1__namespace.CdkPortalOutlet], styles: [".example-portal-outlet[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkPortalOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-portal-overview-example', template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n<button (click)=\"selectedPortal = domPortal\">Render DOM portal</button>\n\n<div #domPortalContent>Hello, this is a DOM portal</div>\n", styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"] }]
            }], function () { return [{ type: i0__namespace.ViewContainerRef }]; }, { templatePortalContent: [{
                    type: i0.ViewChild,
                    args: ['templatePortalContent']
                }], domPortalContent: [{
                    type: i0.ViewChild,
                    args: ['domPortalContent']
                }] });
    })();
    var ComponentPortalExample = /** @class */ (function () {
        function ComponentPortalExample() {
        }
        return ComponentPortalExample;
    }());
    ComponentPortalExample.ɵfac = function ComponentPortalExample_Factory(t) { return new (t || ComponentPortalExample)(); };
    ComponentPortalExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ComponentPortalExample, selectors: [["component-portal-example"]], decls: 1, vars: 0, template: function ComponentPortalExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtext(0, "Hello, this is a component portal");
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ComponentPortalExample, [{
                type: i0.Component,
                args: [{
                        selector: 'component-portal-example',
                        template: 'Hello, this is a component portal'
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        CdkPortalOverviewExample,
        ComponentPortalExample,
    ];
    var CdkPortalExamplesModule = /** @class */ (function () {
        function CdkPortalExamplesModule() {
        }
        return CdkPortalExamplesModule;
    }());
    CdkPortalExamplesModule.ɵfac = function CdkPortalExamplesModule_Factory(t) { return new (t || CdkPortalExamplesModule)(); };
    CdkPortalExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CdkPortalExamplesModule });
    CdkPortalExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1.PortalModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkPortalExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.PortalModule],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CdkPortalExamplesModule, { declarations: [CdkPortalOverviewExample,
                ComponentPortalExample], imports: [i1.PortalModule], exports: [CdkPortalOverviewExample,
                ComponentPortalExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkPortalExamplesModule = CdkPortalExamplesModule;
    exports.CdkPortalOverviewExample = CdkPortalOverviewExample;
    exports.ComponentPortalExample = ComponentPortalExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-portal.umd.js.map
