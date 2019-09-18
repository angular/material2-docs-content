import { CommonModule } from '@angular/common';
import { Component, ViewChild, ChangeDetectorRef, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MediaMatcher } from '@angular/cdk/layout';

/**
 * @title Autosize sidenav
 */
var SidenavAutosizeExample = /** @class */ (function () {
    function SidenavAutosizeExample() {
        this.showFiller = false;
    }
    SidenavAutosizeExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-autosize-example',
                    template: "<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n\n</mat-drawer-container>\n",
                    styles: [".example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n"]
                }] }
    ];
    return SidenavAutosizeExample;
}());

/** @title Drawer with explicit backdrop setting */
var SidenavBackdropExample = /** @class */ (function () {
    function SidenavBackdropExample() {
    }
    SidenavBackdropExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-backdrop-example',
                    template: "<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"hasBackdrop.value\">\n  <mat-drawer #drawer [mode]=\"mode.value\">I'm a drawer</mat-drawer>\n  <mat-drawer-content>\n    <mat-form-field>\n      <mat-label>Sidenav mode</mat-label>\n      <mat-select #mode value=\"side\">\n        <mat-option value=\"side\">Side</mat-option>\n        <mat-option value=\"over\">Over</mat-option>\n        <mat-option value=\"push\">Push</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Has backdrop</mat-label>\n      <mat-select #hasBackdrop>\n        <mat-option>Unset</mat-option>\n        <mat-option [value]=\"true\">True</mat-option>\n        <mat-option [value]=\"false\">False</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <button mat-raised-button (click)=\"drawer.toggle()\">Toggle drawer</button>\n  </mat-drawer-content>\n</mat-drawer-container>\n",
                    styles: [".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 12px;\n  border: 1px solid #555;\n}\n\nmat-drawer-content {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"]
                }] }
    ];
    return SidenavBackdropExample;
}());

/** @title Sidenav with custom escape and backdrop click behavior */
var SidenavDisableCloseExample = /** @class */ (function () {
    function SidenavDisableCloseExample() {
        this.reason = '';
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavDisableCloseExample.prototype.close = function (reason) {
        this.reason = reason;
        this.sidenav.close();
    };
    SidenavDisableCloseExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-disable-close-example',
                    template: "<mat-sidenav-container\n    class=\"example-container\" (backdropClick)=\"close('backdrop')\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\n    <p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.open()\">Open</button></p>\n    <p>Closed due to: {{reason}}</p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                    styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"]
                }] }
    ];
    SidenavDisableCloseExample.propDecorators = {
        sidenav: [{ type: ViewChild, args: ['sidenav', { static: false },] }]
    };
    return SidenavDisableCloseExample;
}());

/** @title Basic drawer */
var SidenavDrawerOverviewExample = /** @class */ (function () {
    function SidenavDrawerOverviewExample() {
    }
    SidenavDrawerOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-drawer-overview-example',
                    template: "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>Drawer content</mat-drawer>\n  <mat-drawer-content>Main content</mat-drawer-content>\n</mat-drawer-container>\n",
                    styles: [".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}\n"]
                }] }
    ];
    return SidenavDrawerOverviewExample;
}());

/** @title Fixed sidenav */
var SidenavFixedExample = /** @class */ (function () {
    function SidenavFixedExample(fb) {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0
        });
    }
    SidenavFixedExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-fixed-example',
                    template: "<ng-container *ngIf=\"shouldRun\">\n  <mat-toolbar class=\"example-header\">Header</mat-toolbar>\n\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" opened class=\"example-sidenav\"\n                 [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\"\n                 [fixedBottomGap]=\"options.value.bottom\">\n      {{options.value.fixed ? 'Fixed' : 'Non-fixed'}} Sidenav\n    </mat-sidenav>\n\n    <mat-sidenav-content [formGroup]=\"options\">\n      <p><mat-checkbox formControlName=\"fixed\">Fixed</mat-checkbox></p>\n      <p><mat-form-field>\n        <input matInput type=\"number\" formControlName=\"top\" placeholder=\"Top gap\">\n      </mat-form-field></p>\n      <p><mat-form-field>\n        <input matInput type=\"number\" formControlName=\"bottom\" placeholder=\"Bottom gap\">\n      </mat-form-field></p>\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n  <mat-toolbar class=\"example-footer\">Footer</mat-toolbar>\n</ng-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                    styles: [".example-container {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    SidenavFixedExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    return SidenavFixedExample;
}());

/** @title Sidenav with configurable mode */
var SidenavModeExample = /** @class */ (function () {
    function SidenavModeExample() {
        this.mode = new FormControl('over');
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavModeExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-mode-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav [mode]=\"mode.value\">\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                    styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}\n"]
                }] }
    ];
    return SidenavModeExample;
}());

/** @title Sidenav open & close behavior */
var SidenavOpenCloseExample = /** @class */ (function () {
    function SidenavOpenCloseExample() {
        this.events = [];
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavOpenCloseExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-open-close-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\"\n               (closed)=\"events.push('close!')\">\n    Sidenav content\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><mat-checkbox [(ngModel)]=\"opened\">sidenav.opened</mat-checkbox></p>\n    <p><button mat-button (click)=\"sidenav.toggle()\">sidenav.toggle()</button></p>\n    <p>Events:</p>\n    <div class=\"example-events\">\n      <div *ngFor=\"let e of events\">{{e}}</div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                    styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-events {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}\n"]
                }] }
    ];
    return SidenavOpenCloseExample;
}());

/** @title Basic sidenav */
var SidenavOverviewExample = /** @class */ (function () {
    function SidenavOverviewExample() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-overview-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n  <mat-sidenav-content>Main content</mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                    styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n"]
                }] }
    ];
    return SidenavOverviewExample;
}());

/** @title Implicit main content with two sidenavs */
var SidenavPositionExample = /** @class */ (function () {
    function SidenavPositionExample() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-position-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav opened mode=\"side\">Start content</mat-sidenav>\n  <mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>\n  Implicit main content\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                    styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"]
                }] }
    ];
    return SidenavPositionExample;
}());

/** @title Responsive sidenav */
var SidenavResponsiveExample = /** @class */ (function () {
    function SidenavResponsiveExample(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array.from({ length: 50 }, function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    SidenavResponsiveExample.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    SidenavResponsiveExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-responsive-example',
                    template: "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\">\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">Responsive App</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <p *ngFor=\"let content of fillerContent\">{{content}}</p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                    styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\nh1.example-app-name {\n  margin-left: 8px;\n}\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    SidenavResponsiveExample.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: MediaMatcher }
    ]; };
    return SidenavResponsiveExample;
}());

var EXAMPLES = [
    SidenavAutosizeExample,
    SidenavBackdropExample,
    SidenavDisableCloseExample,
    SidenavDrawerOverviewExample,
    SidenavFixedExample,
    SidenavModeExample,
    SidenavOpenCloseExample,
    SidenavOverviewExample,
    SidenavPositionExample,
    SidenavResponsiveExample,
];
var SidenavExamplesModule = /** @class */ (function () {
    function SidenavExamplesModule() {
    }
    SidenavExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatListModule,
                        MatRadioModule,
                        MatSidenavModule,
                        MatSelectModule,
                        MatToolbarModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return SidenavExamplesModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { SidenavAutosizeExample, SidenavBackdropExample, SidenavDisableCloseExample, SidenavDrawerOverviewExample, SidenavFixedExample, SidenavModeExample, SidenavOpenCloseExample, SidenavOverviewExample, SidenavPositionExample, SidenavResponsiveExample, SidenavExamplesModule };
//# sourceMappingURL=sidenav.js.map
