(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/portal'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/cdk/portal', ['exports', '@angular/cdk/portal', '@angular/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.cdk = global.ng.materialExamples.cdk || {}, global.ng.materialExamples.cdk.portal = {}), global.ng.cdk.portal, global.ng.core));
}(this, function (exports, portal, core) { 'use strict';

    /**
     * @title Portal overview
     */
    var CdkPortalOverviewExample = /** @class */ (function () {
        function CdkPortalOverviewExample(_viewContainerRef) {
            this._viewContainerRef = _viewContainerRef;
        }
        CdkPortalOverviewExample.prototype.ngAfterViewInit = function () {
            this.componentPortal = new portal.ComponentPortal(ComponentPortalExample);
            this.templatePortal = new portal.TemplatePortal(this.templatePortalContent, this._viewContainerRef);
        };
        CdkPortalOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-portal-overview-example',
                        template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n",
                        styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        CdkPortalOverviewExample.ctorParameters = function () { return [
            { type: core.ViewContainerRef }
        ]; };
        CdkPortalOverviewExample.propDecorators = {
            templatePortalContent: [{ type: core.ViewChild, args: ['templatePortalContent', { static: false },] }]
        };
        return CdkPortalOverviewExample;
    }());
    var ComponentPortalExample = /** @class */ (function () {
        function ComponentPortalExample() {
        }
        ComponentPortalExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'component-portal-example',
                        template: 'Hello, this is a component portal'
                    }] }
        ];
        return ComponentPortalExample;
    }());

    var EXAMPLES = [
        CdkPortalOverviewExample,
        ComponentPortalExample,
    ];
    var CdkPortalExamplesModule = /** @class */ (function () {
        function CdkPortalExamplesModule() {
        }
        CdkPortalExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            portal.PortalModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: [ComponentPortalExample]
                    },] }
        ];
        return CdkPortalExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkPortalOverviewExample = CdkPortalOverviewExample;
    exports.ComponentPortalExample = ComponentPortalExample;
    exports.CdkPortalExamplesModule = CdkPortalExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-cdk-portal.umd.js.map
