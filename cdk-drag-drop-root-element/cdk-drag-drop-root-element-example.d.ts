import { TemplateRef, AfterViewInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
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
}
