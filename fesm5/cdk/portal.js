import { ComponentPortal, TemplatePortal, CdkPortalOutlet, PortalModule } from '@angular/cdk/portal';
import { ɵɵtext, Component, ViewContainerRef, ViewChild, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵelementStart, ɵɵelementEnd, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵlistener, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';

var _c0 = ["templatePortalContent"];
function CdkPortalOverviewExample_ng_template_3_Template(rf, ctx) { }
function CdkPortalOverviewExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Hello, this is a template portal");
} }
/**
 * @title Portal overview
 */
var CdkPortalOverviewExample = /** @class */ (function () {
    function CdkPortalOverviewExample(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    CdkPortalOverviewExample.prototype.ngAfterViewInit = function () {
        this.componentPortal = new ComponentPortal(ComponentPortalExample);
        this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
    };
    CdkPortalOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-portal-overview-example',
                    templateUrl: 'cdk-portal-overview-example.html',
                    styleUrls: ['cdk-portal-overview-example.css'],
                },] },
    ];
    /** @nocollapse */
    CdkPortalOverviewExample.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    CdkPortalOverviewExample.propDecorators = {
        templatePortalContent: [{ type: ViewChild, args: ['templatePortalContent',] }]
    };
    CdkPortalOverviewExample.ɵfac = function CdkPortalOverviewExample_Factory(t) { return new (t || CdkPortalOverviewExample)(ɵɵdirectiveInject(ViewContainerRef)); };
    CdkPortalOverviewExample.ɵcmp = ɵɵdefineComponent({ type: CdkPortalOverviewExample, selectors: [["cdk-portal-overview-example"]], viewQuery: function CdkPortalOverviewExample_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templatePortalContent = _t.first);
        } }, decls: 10, vars: 1, consts: [[1, "example-portal-outlet"], [3, "cdkPortalOutlet"], ["templatePortalContent", ""], [3, "click"]], template: function CdkPortalOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "h2");
            ɵɵtext(1, "The portal outlet is below:");
            ɵɵelementEnd();
            ɵɵelementStart(2, "div", 0);
            ɵɵtemplate(3, CdkPortalOverviewExample_ng_template_3_Template, 0, 0, "ng-template", 1);
            ɵɵelementEnd();
            ɵɵtemplate(4, CdkPortalOverviewExample_ng_template_4_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵelementStart(6, "button", 3);
            ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_6_listener($event) { return ctx.selectedPortal = ctx.componentPortal; });
            ɵɵtext(7, "Render component portal");
            ɵɵelementEnd();
            ɵɵelementStart(8, "button", 3);
            ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_8_listener($event) { return ctx.selectedPortal = ctx.templatePortal; });
            ɵɵtext(9, "Render template portal");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(3);
            ɵɵproperty("cdkPortalOutlet", ctx.selectedPortal);
        } }, directives: [CdkPortalOutlet], styles: [".example-portal-outlet[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}"] });
    return CdkPortalOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkPortalOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-portal-overview-example',
                templateUrl: 'cdk-portal-overview-example.html',
                styleUrls: ['cdk-portal-overview-example.css'],
            }]
    }], function () { return [{ type: ViewContainerRef }]; }, { templatePortalContent: [{
            type: ViewChild,
            args: ['templatePortalContent']
        }] }); })();
var ComponentPortalExample = /** @class */ (function () {
    function ComponentPortalExample() {
    }
    ComponentPortalExample.decorators = [
        { type: Component, args: [{
                    selector: 'component-portal-example',
                    template: 'Hello, this is a component portal'
                },] },
    ];
    ComponentPortalExample.ɵfac = function ComponentPortalExample_Factory(t) { return new (t || ComponentPortalExample)(); };
    ComponentPortalExample.ɵcmp = ɵɵdefineComponent({ type: ComponentPortalExample, selectors: [["component-portal-example"]], decls: 1, vars: 0, template: function ComponentPortalExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵtext(0, "Hello, this is a component portal");
        } }, encapsulation: 2 });
    return ComponentPortalExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ComponentPortalExample, [{
        type: Component,
        args: [{
                selector: 'component-portal-example',
                template: 'Hello, this is a component portal'
            }]
    }], null, null); })();

var EXAMPLES = [
    CdkPortalOverviewExample,
    ComponentPortalExample,
];
var CdkPortalExamplesModule = /** @class */ (function () {
    function CdkPortalExamplesModule() {
    }
    CdkPortalExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        PortalModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: [ComponentPortalExample]
                },] },
    ];
    CdkPortalExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CdkPortalExamplesModule });
    CdkPortalExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CdkPortalExamplesModule_Factory(t) { return new (t || CdkPortalExamplesModule)(); }, imports: [[
                PortalModule,
            ]] });
    return CdkPortalExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkPortalExamplesModule, { declarations: [CdkPortalOverviewExample,
        ComponentPortalExample], imports: [PortalModule], exports: [CdkPortalOverviewExample,
        ComponentPortalExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkPortalExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    PortalModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: [ComponentPortalExample]
            }]
    }], null, null); })();

export { CdkPortalExamplesModule, CdkPortalOverviewExample, ComponentPortalExample };
//# sourceMappingURL=portal.js.map
