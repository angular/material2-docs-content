import { NgIf, CommonModule } from '@angular/common';
import { ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵlistener, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵadvance, ɵɵproperty, ɵɵtemplate, Inject, ɵɵnextContext, ɵɵtextInterpolate, ɵɵtextInterpolate1, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵreference, ViewChild, TemplateRef, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatMenuTrigger, MatMenu, MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatFormField, MatLabel } from '@angular/material/form-field';

/**
 * @title Dialog with header, scrollable content and actions
 */
class DialogContentExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogContentExampleDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
DialogContentExample.ɵfac = function DialogContentExample_Factory(t) { return new (t || DialogContentExample)(ɵɵdirectiveInject(MatDialog)); };
DialogContentExample.ɵcmp = ɵɵdefineComponent({ type: DialogContentExample, selectors: [["dialog-content-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogContentExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function DialogContentExample_Template_button_click_0_listener() { return ctx.openDialog(); });
        ɵɵtext(1, "Open dialog");
        ɵɵelementEnd();
    } }, directives: [MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DialogContentExample, [{
        type: Component,
        args: [{
                selector: 'dialog-content-example',
                templateUrl: 'dialog-content-example.html',
            }]
    }], function () { return [{ type: MatDialog }]; }, null); })();
class DialogContentExampleDialog {
}
DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) { return new (t || DialogContentExampleDialog)(); };
DialogContentExampleDialog.ɵcmp = ɵɵdefineComponent({ type: DialogContentExampleDialog, selectors: [["dialog-content-example-dialog"]], decls: 46, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogContentExampleDialog_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DialogContentExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-content-example-dialog',
                templateUrl: 'dialog-content-example-dialog.html',
            }]
    }], null, null); })();

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
 * @title Injecting data when opening a dialog
 */
class DialogDataExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda'
            }
        });
    }
}
DialogDataExample.ɵfac = function DialogDataExample_Factory(t) { return new (t || DialogDataExample)(ɵɵdirectiveInject(MatDialog)); };
DialogDataExample.ɵcmp = ɵɵdefineComponent({ type: DialogDataExample, selectors: [["dialog-data-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogDataExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function DialogDataExample_Template_button_click_0_listener() { return ctx.openDialog(); });
        ɵɵtext(1, "Open dialog");
        ɵɵelementEnd();
    } }, directives: [MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DialogDataExample, [{
        type: Component,
        args: [{
                selector: 'dialog-data-example',
                templateUrl: 'dialog-data-example.html',
            }]
    }], function () { return [{ type: MatDialog }]; }, null); })();
class DialogDataExampleDialog {
    constructor(data) {
        this.data = data;
    }
}
DialogDataExampleDialog.ɵfac = function DialogDataExampleDialog_Factory(t) { return new (t || DialogDataExampleDialog)(ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
DialogDataExampleDialog.ɵcmp = ɵɵdefineComponent({ type: DialogDataExampleDialog, selectors: [["dialog-data-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngIf"]], template: function DialogDataExampleDialog_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DialogDataExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-data-example-dialog',
                templateUrl: 'dialog-data-example-dialog.html',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

/**
 * @title Dialog elements
 */
class DialogElementsExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(DialogElementsExampleDialog);
    }
}
DialogElementsExample.ɵfac = function DialogElementsExample_Factory(t) { return new (t || DialogElementsExample)(ɵɵdirectiveInject(MatDialog)); };
DialogElementsExample.ɵcmp = ɵɵdefineComponent({ type: DialogElementsExample, selectors: [["dialog-elements-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogElementsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function DialogElementsExample_Template_button_click_0_listener() { return ctx.openDialog(); });
        ɵɵtext(1, "Launch dialog");
        ɵɵelementEnd();
    } }, directives: [MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DialogElementsExample, [{
        type: Component,
        args: [{
                selector: 'dialog-elements-example',
                templateUrl: 'dialog-elements-example.html',
            }]
    }], function () { return [{ type: MatDialog }]; }, null); })();
class DialogElementsExampleDialog {
}
DialogElementsExampleDialog.ɵfac = function DialogElementsExampleDialog_Factory(t) { return new (t || DialogElementsExampleDialog)(); };
DialogElementsExampleDialog.ɵcmp = ɵɵdefineComponent({ type: DialogElementsExampleDialog, selectors: [["dialog-elements-example-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function DialogElementsExampleDialog_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DialogElementsExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-elements-example-dialog',
                templateUrl: 'dialog-elements-example-dialog.html',
            }]
    }], null, null); })();

function DialogOverviewExample_li_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1, " You chose: ");
    ɵɵelementStart(2, "i");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.animal);
} }
/**
 * @title Dialog Overview
 */
class DialogOverviewExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}
DialogOverviewExample.ɵfac = function DialogOverviewExample_Factory(t) { return new (t || DialogOverviewExample)(ɵɵdirectiveInject(MatDialog)); };
DialogOverviewExample.ɵcmp = ɵɵdefineComponent({ type: DialogOverviewExample, selectors: [["dialog-overview-example"]], decls: 10, vars: 2, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"]], template: function DialogOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ol");
        ɵɵelementStart(1, "li");
        ɵɵelementStart(2, "mat-form-field");
        ɵɵelementStart(3, "mat-label");
        ɵɵtext(4, "What's your name?");
        ɵɵelementEnd();
        ɵɵelementStart(5, "input", 0);
        ɵɵlistener("ngModelChange", function DialogOverviewExample_Template_input_ngModelChange_5_listener($event) { return ctx.name = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "li");
        ɵɵelementStart(7, "button", 1);
        ɵɵlistener("click", function DialogOverviewExample_Template_button_click_7_listener() { return ctx.openDialog(); });
        ɵɵtext(8, "Pick one");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(9, DialogOverviewExample_li_9_Template, 4, 1, "li", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("ngModel", ctx.name);
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.animal);
    } }, directives: [MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, NgModel, MatButton, NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DialogOverviewExample, [{
        type: Component,
        args: [{
                selector: 'dialog-overview-example',
                templateUrl: 'dialog-overview-example.html',
            }]
    }], function () { return [{ type: MatDialog }]; }, null); })();
class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
DialogOverviewExampleDialog.ɵcmp = ɵɵdefineComponent({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h1", 0);
        ɵɵtext(1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 1);
        ɵɵelementStart(3, "p");
        ɵɵtext(4, "What's your favorite animal?");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-form-field");
        ɵɵelementStart(6, "mat-label");
        ɵɵtext(7, "Favorite Animal");
        ɵɵelementEnd();
        ɵɵelementStart(8, "input", 2);
        ɵɵlistener("ngModelChange", function DialogOverviewExampleDialog_Template_input_ngModelChange_8_listener($event) { return ctx.data.animal = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 3);
        ɵɵelementStart(10, "button", 4);
        ɵɵlistener("click", function DialogOverviewExampleDialog_Template_button_click_10_listener() { return ctx.onNoClick(); });
        ɵɵtext(11, "No Thanks");
        ɵɵelementEnd();
        ɵɵelementStart(12, "button", 5);
        ɵɵtext(13, "Ok");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1("Hi ", ctx.data.name, "");
        ɵɵadvance(7);
        ɵɵproperty("ngModel", ctx.data.animal);
        ɵɵadvance(4);
        ɵɵproperty("mat-dialog-close", ctx.data.animal);
    } }, directives: [MatDialogTitle, MatDialogContent, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, NgModel, MatDialogActions, MatButton, MatDialogClose], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DialogOverviewExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-overview-example-dialog',
                templateUrl: 'dialog-overview-example-dialog.html',
            }]
    }], function () { return [{ type: MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

const _c0 = ["menuTrigger"];
/**
 * @title Dialog launched from a menu
 */
class DialogFromMenuExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        // #docregion focus-restoration
        const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, { restoreFocus: false });
        // Manually restore focus to the menu trigger since the element that
        // opens the dialog won't be in the DOM any more when the dialog closes.
        dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
        // #enddocregion focus-restoration
    }
}
DialogFromMenuExample.ɵfac = function DialogFromMenuExample_Factory(t) { return new (t || DialogFromMenuExample)(ɵɵdirectiveInject(MatDialog)); };
DialogFromMenuExample.ɵcmp = ɵɵdefineComponent({ type: DialogFromMenuExample, selectors: [["dialog-from-menu-example"]], viewQuery: function DialogFromMenuExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menuTrigger = _t.first);
    } }, decls: 7, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["menuTrigger", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function DialogFromMenuExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0, 1);
        ɵɵtext(2, "Menu");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-menu", null, 2);
        ɵɵelementStart(5, "button", 3);
        ɵɵlistener("click", function DialogFromMenuExample_Template_button_click_5_listener() { return ctx.openDialog(); });
        ɵɵtext(6, "Open dialog");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵɵreference(4);
        ɵɵproperty("matMenuTriggerFor", _r1);
    } }, directives: [MatButton, MatMenuTrigger, MatMenu, MatMenuItem], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DialogFromMenuExample, [{
        type: Component,
        args: [{
                selector: 'dialog-from-menu-example',
                templateUrl: 'dialog-from-menu-example.html',
            }]
    }], function () { return [{ type: MatDialog }]; }, { menuTrigger: [{
            type: ViewChild,
            args: ['menuTrigger']
        }] }); })();
class DialogFromMenuExampleDialog {
}
DialogFromMenuExampleDialog.ɵfac = function DialogFromMenuExampleDialog_Factory(t) { return new (t || DialogFromMenuExampleDialog)(); };
DialogFromMenuExampleDialog.ɵcmp = ɵɵdefineComponent({ type: DialogFromMenuExampleDialog, selectors: [["dialog-from-menu-dialog"]], decls: 5, vars: 0, consts: [["mat-button", "", "mat-dialog-close", ""]], template: function DialogFromMenuExampleDialog_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-dialog-content");
        ɵɵtext(1, " This is a dialog\n");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-dialog-actions");
        ɵɵelementStart(3, "button", 0);
        ɵɵtext(4, "Okay");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatDialogContent, MatDialogActions, MatButton, MatDialogClose], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DialogFromMenuExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-from-menu-dialog',
                templateUrl: 'dialog-from-menu-example-dialog.html',
            }]
    }], null, null); })();

function DialogHarnessExample_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, " Hello from the dialog!\n");
} }
/**
 * @title Testing with MatDialogHarness
 */
class DialogHarnessExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(config) {
        return this.dialog.open(this.dialogTemplate, config);
    }
}
DialogHarnessExample.ɵfac = function DialogHarnessExample_Factory(t) { return new (t || DialogHarnessExample)(ɵɵdirectiveInject(MatDialog)); };
DialogHarnessExample.ɵcmp = ɵɵdefineComponent({ type: DialogHarnessExample, selectors: [["dialog-harness-example"]], viewQuery: function DialogHarnessExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(TemplateRef, true);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dialogTemplate = _t.first);
    } }, decls: 1, vars: 0, template: function DialogHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, DialogHarnessExample_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DialogHarnessExample, [{
        type: Component,
        args: [{
                selector: 'dialog-harness-example',
                templateUrl: 'dialog-harness-example.html',
            }]
    }], function () { return [{ type: MatDialog }]; }, { dialogTemplate: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();

const EXAMPLES = [
    DialogContentExample,
    DialogContentExampleDialog,
    DialogDataExample,
    DialogDataExampleDialog,
    DialogElementsExample,
    DialogElementsExampleDialog,
    DialogFromMenuExample,
    DialogFromMenuExampleDialog,
    DialogHarnessExample,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
];
class DialogExamplesModule {
}
DialogExamplesModule.ɵmod = ɵɵdefineNgModule({ type: DialogExamplesModule });
DialogExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function DialogExamplesModule_Factory(t) { return new (t || DialogExamplesModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatDialogModule,
            MatInputModule,
            MatMenuModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DialogExamplesModule, { declarations: [DialogContentExample,
        DialogContentExampleDialog,
        DialogDataExample,
        DialogDataExampleDialog,
        DialogElementsExample,
        DialogElementsExampleDialog,
        DialogFromMenuExample,
        DialogFromMenuExampleDialog,
        DialogHarnessExample,
        DialogOverviewExample,
        DialogOverviewExampleDialog], imports: [CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatMenuModule,
        FormsModule], exports: [DialogContentExample,
        DialogContentExampleDialog,
        DialogDataExample,
        DialogDataExampleDialog,
        DialogElementsExample,
        DialogElementsExampleDialog,
        DialogFromMenuExample,
        DialogFromMenuExampleDialog,
        DialogHarnessExample,
        DialogOverviewExample,
        DialogOverviewExampleDialog] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DialogExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDialogModule,
                    MatInputModule,
                    MatMenuModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { DialogContentExample, DialogContentExampleDialog, DialogDataExample, DialogDataExampleDialog, DialogElementsExample, DialogElementsExampleDialog, DialogExamplesModule, DialogFromMenuExample, DialogFromMenuExampleDialog, DialogHarnessExample, DialogOverviewExample, DialogOverviewExampleDialog };
//# sourceMappingURL=dialog.js.map
