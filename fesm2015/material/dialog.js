import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, Inject, ViewChild, TemplateRef, NgModule } from '@angular/core';
import * as i4 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as i3$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i3$2 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i2$1 from '@angular/material/form-field';

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
DialogContentExample.ɵfac = function DialogContentExample_Factory(t) { return new (t || DialogContentExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
DialogContentExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogContentExample, selectors: [["dialog-content-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogContentExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function DialogContentExample_Template_button_click_0_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(1, "Open dialog");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogContentExample, [{
        type: Component,
        args: [{
                selector: 'dialog-content-example',
                templateUrl: 'dialog-content-example.html',
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
class DialogContentExampleDialog {
}
DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) { return new (t || DialogContentExampleDialog)(); };
DialogContentExampleDialog.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogContentExampleDialog, selectors: [["dialog-content-example-dialog"]], decls: 46, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogContentExampleDialog_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2", 0);
        i0.ɵɵtext(1, "Install Angular");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-dialog-content", 1);
        i0.ɵɵelementStart(3, "h3");
        i0.ɵɵtext(4, "Develop across all platforms");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵtext(6, "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "h3");
        i0.ɵɵtext(8, "Speed & Performance");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10, "Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "h3");
        i0.ɵɵtext(12, "Incredible tooling");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "p");
        i0.ɵɵtext(14, "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "h3");
        i0.ɵɵtext(16, "Loved by millions");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "p");
        i0.ɵɵtext(18, "From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "h3");
        i0.ɵɵtext(20, "What is Angular?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "p");
        i0.ɵɵtext(22, "Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "h3");
        i0.ɵɵtext(24, "Architecture overview");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "p");
        i0.ɵɵtext(26, "Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "p");
        i0.ɵɵtext(28, "The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "p");
        i0.ɵɵtext(30, "Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "p");
        i0.ɵɵtext(32, "Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "p");
        i0.ɵɵtext(34, "Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "p");
        i0.ɵɵtext(36, "The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "p");
        i0.ɵɵtext(38, "The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "p");
        i0.ɵɵtext(40, "An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "mat-dialog-actions", 2);
        i0.ɵɵelementStart(42, "button", 3);
        i0.ɵɵtext(43, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "button", 4);
        i0.ɵɵtext(45, "Install");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(44);
        i0.ɵɵproperty("mat-dialog-close", true);
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i1.MatDialogActions, i2.MatButton, i1.MatDialogClose], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogContentExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-content-example-dialog',
                templateUrl: 'dialog-content-example-dialog.html',
            }]
    }], null, null); })();

function DialogDataExampleDialog_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2713");
    i0.ɵɵelementEnd();
} }
function DialogDataExampleDialog_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2713");
    i0.ɵɵelementEnd();
} }
function DialogDataExampleDialog_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2713");
    i0.ɵɵelementEnd();
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
DialogDataExample.ɵfac = function DialogDataExample_Factory(t) { return new (t || DialogDataExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
DialogDataExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogDataExample, selectors: [["dialog-data-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogDataExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function DialogDataExample_Template_button_click_0_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(1, "Open dialog");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogDataExample, [{
        type: Component,
        args: [{
                selector: 'dialog-data-example',
                templateUrl: 'dialog-data-example.html',
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
class DialogDataExampleDialog {
    constructor(data) {
        this.data = data;
    }
}
DialogDataExampleDialog.ɵfac = function DialogDataExampleDialog_Factory(t) { return new (t || DialogDataExampleDialog)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
DialogDataExampleDialog.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogDataExampleDialog, selectors: [["dialog-data-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngIf"]], template: function DialogDataExampleDialog_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1, "Favorite Animal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtext(3, " My favorite animal is: ");
        i0.ɵɵelementStart(4, "ul");
        i0.ɵɵelementStart(5, "li");
        i0.ɵɵtemplate(6, DialogDataExampleDialog_span_6_Template, 2, 0, "span", 2);
        i0.ɵɵtext(7, " Panda ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "li");
        i0.ɵɵtemplate(9, DialogDataExampleDialog_span_9_Template, 2, 0, "span", 2);
        i0.ɵɵtext(10, " Unicorn ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "li");
        i0.ɵɵtemplate(12, DialogDataExampleDialog_span_12_Template, 2, 0, "span", 2);
        i0.ɵɵtext(13, " Lion ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.data.animal === "panda");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.data.animal === "unicorn");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.data.animal === "lion");
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i3.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogDataExampleDialog, [{
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
DialogElementsExample.ɵfac = function DialogElementsExample_Factory(t) { return new (t || DialogElementsExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
DialogElementsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogElementsExample, selectors: [["dialog-elements-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogElementsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function DialogElementsExample_Template_button_click_0_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(1, "Launch dialog");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogElementsExample, [{
        type: Component,
        args: [{
                selector: 'dialog-elements-example',
                templateUrl: 'dialog-elements-example.html',
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
class DialogElementsExampleDialog {
}
DialogElementsExampleDialog.ɵfac = function DialogElementsExampleDialog_Factory(t) { return new (t || DialogElementsExampleDialog)(); };
DialogElementsExampleDialog.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogElementsExampleDialog, selectors: [["dialog-elements-example-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function DialogElementsExampleDialog_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1, "Dialog with elements");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtext(3, "This dialog showcases the title, close, content and actions elements.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵelementStart(5, "button", 3);
        i0.ɵɵtext(6, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i1.MatDialogActions, i2.MatButton, i1.MatDialogClose], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogElementsExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-elements-example-dialog',
                templateUrl: 'dialog-elements-example-dialog.html',
            }]
    }], null, null); })();

function DialogOverviewExample_li_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1, " You chose: ");
    i0.ɵɵelementStart(2, "i");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.animal);
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
DialogOverviewExample.ɵfac = function DialogOverviewExample_Factory(t) { return new (t || DialogOverviewExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
DialogOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogOverviewExample, selectors: [["dialog-overview-example"]], decls: 10, vars: 2, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"]], template: function DialogOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ol");
        i0.ɵɵelementStart(1, "li");
        i0.ɵɵelementStart(2, "mat-form-field");
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "What's your name?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "input", 0);
        i0.ɵɵlistener("ngModelChange", function DialogOverviewExample_Template_input_ngModelChange_5_listener($event) { return ctx.name = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "li");
        i0.ɵɵelementStart(7, "button", 1);
        i0.ɵɵlistener("click", function DialogOverviewExample_Template_button_click_7_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(8, "Pick one");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, DialogOverviewExample_li_9_Template, 4, 1, "li", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.name);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.animal);
    } }, directives: [i2$1.MatFormField, i2$1.MatLabel, i3$1.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i2.MatButton, i3.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogOverviewExample, [{
        type: Component,
        args: [{
                selector: 'dialog-overview-example',
                templateUrl: 'dialog-overview-example.html',
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
DialogOverviewExampleDialog.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵtext(4, "What's your favorite animal?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-form-field");
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Favorite Animal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "input", 2);
        i0.ɵɵlistener("ngModelChange", function DialogOverviewExampleDialog_Template_input_ngModelChange_8_listener($event) { return ctx.data.animal = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵelementStart(10, "button", 4);
        i0.ɵɵlistener("click", function DialogOverviewExampleDialog_Template_button_click_10_listener() { return ctx.onNoClick(); });
        i0.ɵɵtext(11, "No Thanks");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 5);
        i0.ɵɵtext(13, "Ok");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("Hi ", ctx.data.name, "");
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngModel", ctx.data.animal);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("mat-dialog-close", ctx.data.animal);
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i2$1.MatFormField, i2$1.MatLabel, i3$1.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i1.MatDialogActions, i2.MatButton, i1.MatDialogClose], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogOverviewExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-overview-example-dialog',
                templateUrl: 'dialog-overview-example-dialog.html',
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
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
DialogFromMenuExample.ɵfac = function DialogFromMenuExample_Factory(t) { return new (t || DialogFromMenuExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
DialogFromMenuExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogFromMenuExample, selectors: [["dialog-from-menu-example"]], viewQuery: function DialogFromMenuExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.menuTrigger = _t.first);
    } }, decls: 7, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["menuTrigger", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function DialogFromMenuExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0, 1);
        i0.ɵɵtext(2, "Menu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-menu", null, 2);
        i0.ɵɵelementStart(5, "button", 3);
        i0.ɵɵlistener("click", function DialogFromMenuExample_Template_button_click_5_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(6, "Open dialog");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(4);
        i0.ɵɵproperty("matMenuTriggerFor", _r1);
    } }, directives: [i2.MatButton, i3$2.MatMenuTrigger, i3$2.MatMenu, i3$2.MatMenuItem], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogFromMenuExample, [{
        type: Component,
        args: [{
                selector: 'dialog-from-menu-example',
                templateUrl: 'dialog-from-menu-example.html',
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, { menuTrigger: [{
            type: ViewChild,
            args: ['menuTrigger']
        }] }); })();
class DialogFromMenuExampleDialog {
}
DialogFromMenuExampleDialog.ɵfac = function DialogFromMenuExampleDialog_Factory(t) { return new (t || DialogFromMenuExampleDialog)(); };
DialogFromMenuExampleDialog.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogFromMenuExampleDialog, selectors: [["dialog-from-menu-dialog"]], decls: 5, vars: 0, consts: [["mat-button", "", "mat-dialog-close", ""]], template: function DialogFromMenuExampleDialog_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content");
        i0.ɵɵtext(1, " This is a dialog\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-dialog-actions");
        i0.ɵɵelementStart(3, "button", 0);
        i0.ɵɵtext(4, "Okay");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatDialogContent, i1.MatDialogActions, i2.MatButton, i1.MatDialogClose], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogFromMenuExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-from-menu-dialog',
                templateUrl: 'dialog-from-menu-example-dialog.html',
            }]
    }], null, null); })();

function DialogHarnessExample_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Hello from the dialog!\n");
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
DialogHarnessExample.ɵfac = function DialogHarnessExample_Factory(t) { return new (t || DialogHarnessExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
DialogHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogHarnessExample, selectors: [["dialog-harness-example"]], viewQuery: function DialogHarnessExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dialogTemplate = _t.first);
    } }, decls: 1, vars: 0, template: function DialogHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DialogHarnessExample_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogHarnessExample, [{
        type: Component,
        args: [{
                selector: 'dialog-harness-example',
                templateUrl: 'dialog-harness-example.html',
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, { dialogTemplate: [{
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
DialogExamplesModule.ɵfac = function DialogExamplesModule_Factory(t) { return new (t || DialogExamplesModule)(); };
DialogExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DialogExamplesModule });
DialogExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatButtonModule,
            MatDialogModule,
            MatInputModule,
            MatMenuModule,
            FormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogExamplesModule, [{
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DialogExamplesModule, { declarations: [DialogContentExample,
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

/**
 * Generated bundle index. Do not edit.
 */

export { DialogContentExample, DialogContentExampleDialog, DialogDataExample, DialogDataExampleDialog, DialogElementsExample, DialogElementsExampleDialog, DialogExamplesModule, DialogFromMenuExample, DialogFromMenuExampleDialog, DialogHarnessExample, DialogOverviewExample, DialogOverviewExampleDialog };
//# sourceMappingURL=dialog.js.map
