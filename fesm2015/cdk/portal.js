import { ComponentPortal, TemplatePortal, DomPortal, CdkPortalOutlet, PortalModule } from '@angular/cdk/portal';
import { ɵɵtext, ɵɵdirectiveInject, ViewContainerRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵelementStart, ɵɵelementEnd, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵlistener, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, Component, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

const _c0 = ["templatePortalContent"];
const _c1 = ["domPortalContent"];
function CdkPortalOverviewExample_ng_template_3_Template(rf, ctx) { }
function CdkPortalOverviewExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Hello, this is a template portal");
} }
/**
 * @title Portal overview
 */
class CdkPortalOverviewExample {
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    ngAfterViewInit() {
        this.componentPortal = new ComponentPortal(ComponentPortalExample);
        this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
        this.domPortal = new DomPortal(this.domPortalContent);
    }
}
CdkPortalOverviewExample.ɵfac = function CdkPortalOverviewExample_Factory(t) { return new (t || CdkPortalOverviewExample)(ɵɵdirectiveInject(ViewContainerRef)); };
CdkPortalOverviewExample.ɵcmp = ɵɵdefineComponent({ type: CdkPortalOverviewExample, selectors: [["cdk-portal-overview-example"]], viewQuery: function CdkPortalOverviewExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, 1);
        ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templatePortalContent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.domPortalContent = _t.first);
    } }, decls: 15, vars: 1, consts: [[1, "example-portal-outlet"], [3, "cdkPortalOutlet"], ["templatePortalContent", ""], [3, "click"], ["domPortalContent", ""]], template: function CdkPortalOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h2");
        ɵɵtext(1, "The portal outlet is below:");
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 0);
        ɵɵtemplate(3, CdkPortalOverviewExample_ng_template_3_Template, 0, 0, "ng-template", 1);
        ɵɵelementEnd();
        ɵɵtemplate(4, CdkPortalOverviewExample_ng_template_4_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵelementStart(6, "button", 3);
        ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_6_listener() { return ctx.selectedPortal = ctx.componentPortal; });
        ɵɵtext(7, "Render component portal");
        ɵɵelementEnd();
        ɵɵelementStart(8, "button", 3);
        ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_8_listener() { return ctx.selectedPortal = ctx.templatePortal; });
        ɵɵtext(9, "Render template portal");
        ɵɵelementEnd();
        ɵɵelementStart(10, "button", 3);
        ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_10_listener() { return ctx.selectedPortal = ctx.domPortal; });
        ɵɵtext(11, "Render DOM portal");
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", null, 4);
        ɵɵtext(14, "Hello, this is a DOM portal");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("cdkPortalOutlet", ctx.selectedPortal);
    } }, directives: [CdkPortalOutlet], styles: [".example-portal-outlet[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkPortalOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-portal-overview-example',
                templateUrl: 'cdk-portal-overview-example.html',
                styleUrls: ['cdk-portal-overview-example.css'],
            }]
    }], function () { return [{ type: ViewContainerRef }]; }, { templatePortalContent: [{
            type: ViewChild,
            args: ['templatePortalContent']
        }], domPortalContent: [{
            type: ViewChild,
            args: ['domPortalContent']
        }] }); })();
class ComponentPortalExample {
}
ComponentPortalExample.ɵfac = function ComponentPortalExample_Factory(t) { return new (t || ComponentPortalExample)(); };
ComponentPortalExample.ɵcmp = ɵɵdefineComponent({ type: ComponentPortalExample, selectors: [["component-portal-example"]], decls: 1, vars: 0, template: function ComponentPortalExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵtext(0, "Hello, this is a component portal");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ComponentPortalExample, [{
        type: Component,
        args: [{
                selector: 'component-portal-example',
                template: 'Hello, this is a component portal'
            }]
    }], null, null); })();

const EXAMPLES = [
    CdkPortalOverviewExample,
    ComponentPortalExample,
];
class CdkPortalExamplesModule {
}
CdkPortalExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CdkPortalExamplesModule });
CdkPortalExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CdkPortalExamplesModule_Factory(t) { return new (t || CdkPortalExamplesModule)(); }, imports: [[PortalModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkPortalExamplesModule, { declarations: [CdkPortalOverviewExample,
        ComponentPortalExample], imports: [PortalModule], exports: [CdkPortalOverviewExample,
        ComponentPortalExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkPortalExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [PortalModule],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CdkPortalExamplesModule, CdkPortalOverviewExample, ComponentPortalExample };
//# sourceMappingURL=portal.js.map
