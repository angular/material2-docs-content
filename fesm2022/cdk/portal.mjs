import * as i0 from '@angular/core';
import { inject, ViewContainerRef, Component, ViewChild } from '@angular/core';
import * as i1 from '@angular/cdk/portal';
import { ComponentPortal, TemplatePortal, DomPortal, PortalModule } from '@angular/cdk/portal';

/**
 * @title Portal overview
 */
class CdkPortalOverviewExample {
    _viewContainerRef = inject(ViewContainerRef);
    templatePortalContent;
    domPortalContent;
    selectedPortal;
    componentPortal;
    templatePortal;
    domPortal;
    ngAfterViewInit() {
        this.componentPortal = new ComponentPortal(ComponentPortalExample);
        this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
        this.domPortal = new DomPortal(this.domPortalContent);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: CdkPortalOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: CdkPortalOverviewExample, isStandalone: true, selector: "cdk-portal-overview-example", viewQueries: [{ propertyName: "templatePortalContent", first: true, predicate: ["templatePortalContent"], descendants: true }, { propertyName: "domPortalContent", first: true, predicate: ["domPortalContent"], descendants: true }], ngImport: i0, template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n<button (click)=\"selectedPortal = domPortal\">Render DOM portal</button>\n\n<div #domPortalContent>Hello, this is a DOM portal</div>\n", styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"], dependencies: [{ kind: "ngmodule", type: PortalModule }, { kind: "directive", type: i1.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: CdkPortalOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-portal-overview-example', imports: [PortalModule], template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n<button (click)=\"selectedPortal = domPortal\">Render DOM portal</button>\n\n<div #domPortalContent>Hello, this is a DOM portal</div>\n", styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"] }]
        }], propDecorators: { templatePortalContent: [{
                type: ViewChild,
                args: ['templatePortalContent']
            }], domPortalContent: [{
                type: ViewChild,
                args: ['domPortalContent']
            }] } });
class ComponentPortalExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComponentPortalExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: ComponentPortalExample, isStandalone: true, selector: "component-portal-example", ngImport: i0, template: 'Hello, this is a component portal', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComponentPortalExample, decorators: [{
            type: Component,
            args: [{
                    selector: 'component-portal-example',
                    template: 'Hello, this is a component portal',
                }]
        }] });

export { CdkPortalOverviewExample, ComponentPortalExample };
//# sourceMappingURL=portal.mjs.map
