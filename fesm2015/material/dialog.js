import { NgIf, CommonModule } from '@angular/common';
import { Component, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵlistener, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, ɵɵadvance, ɵɵproperty, Inject, ɵɵtemplate, ɵɵnextContext, ɵɵtextInterpolate, ɵɵtextInterpolate1, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Dialog with header, scrollable content and actions
 */
class DialogContentExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(DialogContentExampleDialog);
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            console.log(`Dialog result: ${result}`);
        }));
    }
}
DialogContentExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-content-example',
                templateUrl: 'dialog-content-example.html',
                styleUrls: ['dialog-content-example.css'],
            },] },
];
/** @nocollapse */
DialogContentExample.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ DialogContentExample.ɵfac = function DialogContentExample_Factory(t) { return new (t || DialogContentExample)(ɵɵdirectiveInject(MatDialog)); };
/** @nocollapse */ DialogContentExample.ɵcmp = ɵɵdefineComponent({ type: DialogContentExample, selectors: [["dialog-content-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogContentExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function DialogContentExample_Template_button_click_0_listener($event) { return ctx.openDialog(); });
        ɵɵtext(1, "Open dialog");
        ɵɵelementEnd();
    } }, directives: [MatButton], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(DialogContentExample, [{
        type: Component,
        args: [{
                selector: 'dialog-content-example',
                templateUrl: 'dialog-content-example.html',
                styleUrls: ['dialog-content-example.css'],
            }]
    }], function () { return [{ type: MatDialog }]; }, null);
if (false) {
    /** @type {?} */
    DialogContentExample.prototype.dialog;
}
class DialogContentExampleDialog {
}
DialogContentExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-content-example-dialog',
                templateUrl: 'dialog-content-example-dialog.html',
            },] },
];
/** @nocollapse */ DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) { return new (t || DialogContentExampleDialog)(); };
/** @nocollapse */ DialogContentExampleDialog.ɵcmp = ɵɵdefineComponent({ type: DialogContentExampleDialog, selectors: [["dialog-content-example-dialog"]], decls: 46, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogContentExampleDialog_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h2", 0);
        ɵɵtext(1, "Install Angular");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-dialog-content", 1);
        ɵɵelementStart(3, "h3");
        ɵɵtext(4, "Develop across all platforms");
        ɵɵelementEnd();
        ɵɵelementStart(5, "p");
        ɵɵtext(6, "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.");
        ɵɵelementEnd();
        ɵɵelementStart(7, "h3");
        ɵɵtext(8, "Speed & Performance");
        ɵɵelementEnd();
        ɵɵelementStart(9, "p");
        ɵɵtext(10, "Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.");
        ɵɵelementEnd();
        ɵɵelementStart(11, "h3");
        ɵɵtext(12, "Incredible tooling");
        ɵɵelementEnd();
        ɵɵelementStart(13, "p");
        ɵɵtext(14, "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.");
        ɵɵelementEnd();
        ɵɵelementStart(15, "h3");
        ɵɵtext(16, "Loved by millions");
        ɵɵelementEnd();
        ɵɵelementStart(17, "p");
        ɵɵtext(18, "From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.");
        ɵɵelementEnd();
        ɵɵelementStart(19, "h3");
        ɵɵtext(20, "What is Angular?");
        ɵɵelementEnd();
        ɵɵelementStart(21, "p");
        ɵɵtext(22, "Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop");
        ɵɵelementEnd();
        ɵɵelementStart(23, "h3");
        ɵɵtext(24, "Architecture overview");
        ɵɵelementEnd();
        ɵɵelementStart(25, "p");
        ɵɵtext(26, "Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.");
        ɵɵelementEnd();
        ɵɵelementStart(27, "p");
        ɵɵtext(28, "The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.");
        ɵɵelementEnd();
        ɵɵelementStart(29, "p");
        ɵɵtext(30, "Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.");
        ɵɵelementEnd();
        ɵɵelementStart(31, "p");
        ɵɵtext(32, "Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.");
        ɵɵelementEnd();
        ɵɵelementStart(33, "p");
        ɵɵtext(34, "Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.");
        ɵɵelementEnd();
        ɵɵelementStart(35, "p");
        ɵɵtext(36, "The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.");
        ɵɵelementEnd();
        ɵɵelementStart(37, "p");
        ɵɵtext(38, "The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).");
        ɵɵelementEnd();
        ɵɵelementStart(39, "p");
        ɵɵtext(40, "An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(41, "mat-dialog-actions", 2);
        ɵɵelementStart(42, "button", 3);
        ɵɵtext(43, "Cancel");
        ɵɵelementEnd();
        ɵɵelementStart(44, "button", 4);
        ɵɵtext(45, "Install");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(44);
        ɵɵproperty("mat-dialog-close", true);
    } }, directives: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButton, MatDialogClose], encapsulation: 2 });
/*@__PURE__*/ ɵsetClassMetadata(DialogContentExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-content-example-dialog',
                templateUrl: 'dialog-content-example-dialog.html',
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function DialogDataExampleDialog_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "\u2713");
    ɵɵelementEnd();
} }
function DialogDataExampleDialog_span_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "\u2713");
    ɵɵelementEnd();
} }
function DialogDataExampleDialog_span_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "\u2713");
    ɵɵelementEnd();
} }
/**
 * @record
 */
function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.animal;
}
/**
 * \@title Injecting data when opening a dialog
 */
class DialogDataExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda'
            }
        });
    }
}
DialogDataExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-data-example',
                templateUrl: 'dialog-data-example.html',
                styleUrls: ['dialog-data-example.css'],
            },] },
];
/** @nocollapse */
DialogDataExample.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ DialogDataExample.ɵfac = function DialogDataExample_Factory(t) { return new (t || DialogDataExample)(ɵɵdirectiveInject(MatDialog)); };
/** @nocollapse */ DialogDataExample.ɵcmp = ɵɵdefineComponent({ type: DialogDataExample, selectors: [["dialog-data-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogDataExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function DialogDataExample_Template_button_click_0_listener($event) { return ctx.openDialog(); });
        ɵɵtext(1, "Open dialog");
        ɵɵelementEnd();
    } }, directives: [MatButton], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(DialogDataExample, [{
        type: Component,
        args: [{
                selector: 'dialog-data-example',
                templateUrl: 'dialog-data-example.html',
                styleUrls: ['dialog-data-example.css'],
            }]
    }], function () { return [{ type: MatDialog }]; }, null);
if (false) {
    /** @type {?} */
    DialogDataExample.prototype.dialog;
}
class DialogDataExampleDialog {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
    }
}
DialogDataExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-data-example-dialog',
                templateUrl: 'dialog-data-example-dialog.html',
            },] },
];
/** @nocollapse */
DialogDataExampleDialog.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
/** @nocollapse */ DialogDataExampleDialog.ɵfac = function DialogDataExampleDialog_Factory(t) { return new (t || DialogDataExampleDialog)(ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ DialogDataExampleDialog.ɵcmp = ɵɵdefineComponent({ type: DialogDataExampleDialog, selectors: [["dialog-data-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngIf"]], template: function DialogDataExampleDialog_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h1", 0);
        ɵɵtext(1, "Favorite Animal");
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 1);
        ɵɵtext(3, " My favorite animal is: ");
        ɵɵelementStart(4, "ul");
        ɵɵelementStart(5, "li");
        ɵɵtemplate(6, DialogDataExampleDialog_span_6_Template, 2, 0, "span", 2);
        ɵɵtext(7, " Panda ");
        ɵɵelementEnd();
        ɵɵelementStart(8, "li");
        ɵɵtemplate(9, DialogDataExampleDialog_span_9_Template, 2, 0, "span", 2);
        ɵɵtext(10, " Unicorn ");
        ɵɵelementEnd();
        ɵɵelementStart(11, "li");
        ɵɵtemplate(12, DialogDataExampleDialog_span_12_Template, 2, 0, "span", 2);
        ɵɵtext(13, " Lion ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(6);
        ɵɵproperty("ngIf", ctx.data.animal === "panda");
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.data.animal === "unicorn");
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.data.animal === "lion");
    } }, directives: [MatDialogTitle, MatDialogContent, NgIf], encapsulation: 2 });
/*@__PURE__*/ ɵsetClassMetadata(DialogDataExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-data-example-dialog',
                templateUrl: 'dialog-data-example-dialog.html',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null);
if (false) {
    /** @type {?} */
    DialogDataExampleDialog.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Dialog elements
 */
class DialogElementsExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        this.dialog.open(DialogElementsExampleDialog);
    }
}
DialogElementsExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-elements-example',
                templateUrl: 'dialog-elements-example.html',
                styleUrls: ['dialog-elements-example.css'],
            },] },
];
/** @nocollapse */
DialogElementsExample.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ DialogElementsExample.ɵfac = function DialogElementsExample_Factory(t) { return new (t || DialogElementsExample)(ɵɵdirectiveInject(MatDialog)); };
/** @nocollapse */ DialogElementsExample.ɵcmp = ɵɵdefineComponent({ type: DialogElementsExample, selectors: [["dialog-elements-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogElementsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function DialogElementsExample_Template_button_click_0_listener($event) { return ctx.openDialog(); });
        ɵɵtext(1, "Launch dialog");
        ɵɵelementEnd();
    } }, directives: [MatButton], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(DialogElementsExample, [{
        type: Component,
        args: [{
                selector: 'dialog-elements-example',
                templateUrl: 'dialog-elements-example.html',
                styleUrls: ['dialog-elements-example.css'],
            }]
    }], function () { return [{ type: MatDialog }]; }, null);
if (false) {
    /** @type {?} */
    DialogElementsExample.prototype.dialog;
}
class DialogElementsExampleDialog {
}
DialogElementsExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-elements-example-dialog',
                templateUrl: 'dialog-elements-example-dialog.html',
            },] },
];
/** @nocollapse */ DialogElementsExampleDialog.ɵfac = function DialogElementsExampleDialog_Factory(t) { return new (t || DialogElementsExampleDialog)(); };
/** @nocollapse */ DialogElementsExampleDialog.ɵcmp = ɵɵdefineComponent({ type: DialogElementsExampleDialog, selectors: [["dialog-elements-example-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function DialogElementsExampleDialog_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h1", 0);
        ɵɵtext(1, "Dialog with elements");
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 1);
        ɵɵtext(3, "This dialog showcases the title, close, content and actions elements.");
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 2);
        ɵɵelementStart(5, "button", 3);
        ɵɵtext(6, "Close");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButton, MatDialogClose], encapsulation: 2 });
/*@__PURE__*/ ɵsetClassMetadata(DialogElementsExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-elements-example-dialog',
                templateUrl: 'dialog-elements-example-dialog.html',
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function DialogOverviewExample_li_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1, " You chose: ");
    ɵɵelementStart(2, "i");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r3.animal);
} }
/**
 * @record
 */
function DialogData$1() { }
if (false) {
    /** @type {?} */
    DialogData$1.prototype.animal;
    /** @type {?} */
    DialogData$1.prototype.name;
}
/**
 * \@title Dialog Overview
 */
class DialogOverviewExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            console.log('The dialog was closed');
            this.animal = result;
        }));
    }
}
DialogOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-overview-example',
                templateUrl: 'dialog-overview-example.html',
                styleUrls: ['dialog-overview-example.css'],
            },] },
];
/** @nocollapse */
DialogOverviewExample.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ DialogOverviewExample.ɵfac = function DialogOverviewExample_Factory(t) { return new (t || DialogOverviewExample)(ɵɵdirectiveInject(MatDialog)); };
/** @nocollapse */ DialogOverviewExample.ɵcmp = ɵɵdefineComponent({ type: DialogOverviewExample, selectors: [["dialog-overview-example"]], decls: 8, vars: 2, consts: [["matInput", "", "placeholder", "What's your name?", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"]], template: function DialogOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ol");
        ɵɵelementStart(1, "li");
        ɵɵelementStart(2, "mat-form-field");
        ɵɵelementStart(3, "input", 0);
        ɵɵlistener("ngModelChange", function DialogOverviewExample_Template_input_ngModelChange_3_listener($event) { return ctx.name = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "li");
        ɵɵelementStart(5, "button", 1);
        ɵɵlistener("click", function DialogOverviewExample_Template_button_click_5_listener($event) { return ctx.openDialog(); });
        ɵɵtext(6, "Pick one");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(7, DialogOverviewExample_li_7_Template, 4, 1, "li", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.name);
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.animal);
    } }, directives: [MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, NgModel, MatButton, NgIf], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(DialogOverviewExample, [{
        type: Component,
        args: [{
                selector: 'dialog-overview-example',
                templateUrl: 'dialog-overview-example.html',
                styleUrls: ['dialog-overview-example.css'],
            }]
    }], function () { return [{ type: MatDialog }]; }, null);
if (false) {
    /** @type {?} */
    DialogOverviewExample.prototype.animal;
    /** @type {?} */
    DialogOverviewExample.prototype.name;
    /** @type {?} */
    DialogOverviewExample.prototype.dialog;
}
class DialogOverviewExampleDialog {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogOverviewExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-overview-example-dialog',
                templateUrl: 'dialog-overview-example-dialog.html',
            },] },
];
/** @nocollapse */
DialogOverviewExampleDialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
/** @nocollapse */ DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
/** @nocollapse */ DialogOverviewExampleDialog.ɵcmp = ɵɵdefineComponent({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 12, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h1", 0);
        ɵɵtext(1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 1);
        ɵɵelementStart(3, "p");
        ɵɵtext(4, "What's your favorite animal?");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-form-field");
        ɵɵelementStart(6, "input", 2);
        ɵɵlistener("ngModelChange", function DialogOverviewExampleDialog_Template_input_ngModelChange_6_listener($event) { return ctx.data.animal = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 3);
        ɵɵelementStart(8, "button", 4);
        ɵɵlistener("click", function DialogOverviewExampleDialog_Template_button_click_8_listener($event) { return ctx.onNoClick(); });
        ɵɵtext(9, "No Thanks");
        ɵɵelementEnd();
        ɵɵelementStart(10, "button", 5);
        ɵɵtext(11, "Ok");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1("Hi ", ctx.data.name, "");
        ɵɵadvance(5);
        ɵɵproperty("ngModel", ctx.data.animal);
        ɵɵadvance(4);
        ɵɵproperty("mat-dialog-close", ctx.data.animal);
    } }, directives: [MatDialogTitle, MatDialogContent, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, NgModel, MatDialogActions, MatButton, MatDialogClose], encapsulation: 2 });
/*@__PURE__*/ ɵsetClassMetadata(DialogOverviewExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-overview-example-dialog',
                templateUrl: 'dialog-overview-example-dialog.html',
            }]
    }], function () { return [{ type: MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null);
if (false) {
    /** @type {?} */
    DialogOverviewExampleDialog.prototype.dialogRef;
    /** @type {?} */
    DialogOverviewExampleDialog.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    DialogContentExample,
    DialogContentExampleDialog,
    DialogDataExample,
    DialogDataExampleDialog,
    DialogElementsExample,
    DialogElementsExampleDialog,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
];
class DialogExamplesModule {
}
DialogExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDialogModule,
                    MatInputModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: [
                    DialogContentExampleDialog,
                    DialogDataExampleDialog,
                    DialogElementsExampleDialog,
                    DialogOverviewExampleDialog,
                ]
            },] },
];
/** @nocollapse */ DialogExamplesModule.ɵmod = ɵɵdefineNgModule({ type: DialogExamplesModule });
/** @nocollapse */ DialogExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function DialogExamplesModule_Factory(t) { return new (t || DialogExamplesModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatDialogModule,
            MatInputModule,
            FormsModule,
        ]] });
/*@__PURE__*/ ɵɵsetNgModuleScope(DialogExamplesModule, { declarations: [DialogContentExample,
        DialogContentExampleDialog,
        DialogDataExample,
        DialogDataExampleDialog,
        DialogElementsExample,
        DialogElementsExampleDialog,
        DialogOverviewExample,
        DialogOverviewExampleDialog], imports: [CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        FormsModule], exports: [DialogContentExample,
        DialogContentExampleDialog,
        DialogDataExample,
        DialogDataExampleDialog,
        DialogElementsExample,
        DialogElementsExampleDialog,
        DialogOverviewExample,
        DialogOverviewExampleDialog] });
/*@__PURE__*/ ɵsetClassMetadata(DialogExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDialogModule,
                    MatInputModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: [
                    DialogContentExampleDialog,
                    DialogDataExampleDialog,
                    DialogElementsExampleDialog,
                    DialogOverviewExampleDialog,
                ]
            }]
    }], null, null);

export { DialogContentExample, DialogContentExampleDialog, DialogDataExample, DialogDataExampleDialog, DialogElementsExample, DialogElementsExampleDialog, DialogOverviewExample, DialogOverviewExampleDialog, DialogExamplesModule };
//# sourceMappingURL=dialog.js.map
