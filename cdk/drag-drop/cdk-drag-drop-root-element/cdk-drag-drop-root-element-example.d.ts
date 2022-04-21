import { TemplateRef, AfterViewInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop with alternate root element
 */
export declare class CdkDragDropRootElementExample implements AfterViewInit, OnDestroy {
    private _overlay;
    private _viewContainerRef;
    _dialogTemplate: TemplateRef<any>;
    private _overlayRef;
    private _portal;
    constructor(_overlay: Overlay, _viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDragDropRootElementExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDragDropRootElementExample, "cdk-drag-drop-root-element-example", never, {}, {}, never, never, false>;
}
