import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @title Portal overview
 */
export declare class CdkPortalOverviewExample implements AfterViewInit {
    private _viewContainerRef;
    templatePortalContent: TemplateRef<unknown>;
    domPortalContent: ElementRef<HTMLElement>;
    selectedPortal: Portal<any>;
    componentPortal: ComponentPortal<ComponentPortalExample>;
    templatePortal: TemplatePortal<any>;
    domPortal: DomPortal<any>;
    constructor(_viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPortalOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPortalOverviewExample, "cdk-portal-overview-example", never, {}, {}, never, never>;
}
export declare class ComponentPortalExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ComponentPortalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComponentPortalExample, "component-portal-example", never, {}, {}, never, never>;
}
