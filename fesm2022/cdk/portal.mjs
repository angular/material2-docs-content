import * as i1 from '@angular/cdk/portal';
import { ComponentPortal, TemplatePortal, DomPortal, PortalModule } from '@angular/cdk/portal';
import * as i0 from '@angular/core';
import { Component, ViewChild, NgModule } from '@angular/core';

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkPortalOverviewExample, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CdkPortalOverviewExample, selector: "cdk-portal-overview-example", viewQueries: [{ propertyName: "templatePortalContent", first: true, predicate: ["templatePortalContent"], descendants: true }, { propertyName: "domPortalContent", first: true, predicate: ["domPortalContent"], descendants: true }], ngImport: i0, template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n<button (click)=\"selectedPortal = domPortal\">Render DOM portal</button>\n\n<div #domPortalContent>Hello, this is a DOM portal</div>\n", styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkPortalOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-portal-overview-example', template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n<button (click)=\"selectedPortal = domPortal\">Render DOM portal</button>\n\n<div #domPortalContent>Hello, this is a DOM portal</div>\n", styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { templatePortalContent: [{
                type: ViewChild,
                args: ['templatePortalContent']
            }], domPortalContent: [{
                type: ViewChild,
                args: ['domPortalContent']
            }] } });
class ComponentPortalExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ComponentPortalExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: ComponentPortalExample, selector: "component-portal-example", ngImport: i0, template: 'Hello, this is a component portal', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ComponentPortalExample, decorators: [{
            type: Component,
            args: [{
                    selector: 'component-portal-example',
                    template: 'Hello, this is a component portal',
                }]
        }] });

const EXAMPLES = [CdkPortalOverviewExample, ComponentPortalExample];
class CdkPortalExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkPortalExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: CdkPortalExamplesModule, declarations: [CdkPortalOverviewExample, ComponentPortalExample], imports: [PortalModule], exports: [CdkPortalOverviewExample, ComponentPortalExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkPortalExamplesModule, imports: [PortalModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkPortalExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PortalModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkPortalExamplesModule, CdkPortalOverviewExample, ComponentPortalExample };
//# sourceMappingURL=portal.mjs.map
