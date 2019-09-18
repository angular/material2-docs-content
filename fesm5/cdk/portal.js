import { ComponentPortal, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { Component, ViewContainerRef, ViewChild, NgModule } from '@angular/core';

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
                    template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n",
                    styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    CdkPortalOverviewExample.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    CdkPortalOverviewExample.propDecorators = {
        templatePortalContent: [{ type: ViewChild, args: ['templatePortalContent', { static: false },] }]
    };
    return CdkPortalOverviewExample;
}());
var ComponentPortalExample = /** @class */ (function () {
    function ComponentPortalExample() {
    }
    ComponentPortalExample.decorators = [
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    imports: [
                        PortalModule,
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

export { CdkPortalOverviewExample, ComponentPortalExample, CdkPortalExamplesModule };
//# sourceMappingURL=portal.js.map
