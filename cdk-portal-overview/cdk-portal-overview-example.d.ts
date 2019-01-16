import { AfterViewInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ComponentPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
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
}
export declare class ComponentPortalExample {
}
