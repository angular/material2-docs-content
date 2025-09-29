import * as i0 from '@angular/core';
import { AfterViewInit, TemplateRef, ElementRef } from '@angular/core';
import { Portal, ComponentPortal, TemplatePortal, DomPortal } from '@angular/cdk/portal';

/**
 * @title Portal overview
 */
declare class CdkPortalOverviewExample implements AfterViewInit {
    private _viewContainerRef;
    templatePortalContent: TemplateRef<unknown>;
    domPortalContent: ElementRef<HTMLElement>;
    selectedPortal: Portal<any>;
    componentPortal: ComponentPortal<ComponentPortalExample>;
    templatePortal: TemplatePortal<any>;
    domPortal: DomPortal<any>;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPortalOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPortalOverviewExample, "cdk-portal-overview-example", never, {}, {}, never, never, true, never>;
}
declare class ComponentPortalExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ComponentPortalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComponentPortalExample, "component-portal-example", never, {}, {}, never, never, true, never>;
}

export { CdkPortalOverviewExample, ComponentPortalExample };
