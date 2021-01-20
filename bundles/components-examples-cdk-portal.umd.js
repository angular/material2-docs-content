(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/portal'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/portal', ['exports', '@angular/cdk/portal', '@angular/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.portal = {}), global.ng.cdk.portal, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

    var _c0 = ["templatePortalContent"];
    var _c1 = ["domPortalContent"];
    function CdkPortalOverviewExample_ng_template_3_Template(rf, ctx) { }
    function CdkPortalOverviewExample_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Hello, this is a template portal");
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
    CdkPortalOverviewExample.ɵfac = function CdkPortalOverviewExample_Factory(t) { return new (t || CdkPortalOverviewExample)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    CdkPortalOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPortalOverviewExample, selectors: [["cdk-portal-overview-example"]], viewQuery: function CdkPortalOverviewExample_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, 1);
                i0.ɵɵviewQuery(_c1, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templatePortalContent = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.domPortalContent = _t.first);
            }
        }, decls: 15, vars: 1, consts: [[1, "example-portal-outlet"], [3, "cdkPortalOutlet"], ["templatePortalContent", ""], [3, "click"], ["domPortalContent", ""]], template: function CdkPortalOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h2");
                i0.ɵɵtext(1, "The portal outlet is below:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 0);
                i0.ɵɵtemplate(3, CdkPortalOverviewExample_ng_template_3_Template, 0, 0, "ng-template", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, CdkPortalOverviewExample_ng_template_4_Template, 1, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(6, "button", 3);
                i0.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_6_listener() { return ctx.selectedPortal = ctx.componentPortal; });
                i0.ɵɵtext(7, "Render component portal");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "button", 3);
                i0.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_8_listener() { return ctx.selectedPortal = ctx.templatePortal; });
                i0.ɵɵtext(9, "Render template portal");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "button", 3);
                i0.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_10_listener() { return ctx.selectedPortal = ctx.domPortal; });
                i0.ɵɵtext(11, "Render DOM portal");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "div", null, 4);
                i0.ɵɵtext(14, "Hello, this is a DOM portal");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("cdkPortalOutlet", ctx.selectedPortal);
            }
        }, directives: [i1.CdkPortalOutlet], styles: [".example-portal-outlet[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkPortalOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-portal-overview-example',
                        templateUrl: 'cdk-portal-overview-example.html',
                        styleUrls: ['cdk-portal-overview-example.css'],
                    }]
            }], function () { return [{ type: i0.ViewContainerRef }]; }, { templatePortalContent: [{
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
    ComponentPortalExample.ɵcmp = i0.ɵɵdefineComponent({ type: ComponentPortalExample, selectors: [["component-portal-example"]], decls: 1, vars: 0, template: function ComponentPortalExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtext(0, "Hello, this is a component portal");
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentPortalExample, [{
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
    CdkPortalExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkPortalExamplesModule });
    CdkPortalExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkPortalExamplesModule_Factory(t) { return new (t || CdkPortalExamplesModule)(); }, imports: [[i1.PortalModule]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkPortalExamplesModule, { declarations: [CdkPortalOverviewExample,
                ComponentPortalExample], imports: [i1.PortalModule], exports: [CdkPortalOverviewExample,
                ComponentPortalExample] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkPortalExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.PortalModule],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
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
