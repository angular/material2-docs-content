import { AfterViewInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ComponentPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
/**
 * @title Portal overview
 */
export declare class CdkPortalOverviewExample implements AfterViewInit {
    private _viewContainerRef;
    templatePortalContent: TemplateRef<any>;
    selectedPortal: Portal<any>;
    componentPortal: ComponentPortal<ComponentPortalExample>;
    templatePortal: TemplatePortal<any>;
    constructor(_viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<CdkPortalOverviewExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CdkPortalOverviewExample, "cdk-portal-overview-example", never, {}, {}, never>;
}
export declare class ComponentPortalExample {
    static ɵfac: i0.ɵɵFactoryDef<ComponentPortalExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ComponentPortalExample, "component-portal-example", never, {}, {}, never>;
}
