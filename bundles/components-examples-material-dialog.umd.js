(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/dialog'), require('@angular/material/input'), require('@angular/material/menu'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/dialog', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/dialog', '@angular/material/input', '@angular/material/menu', '@angular/material/form-field'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.dialog = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.dialog, global.ng.material.input, global.ng.material.menu, global.ng.material.formField));
}(this, (function (exports, i3, i0, i4, i2, i1, i3$1, i3$2, i2$1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i3__namespace$2 = /*#__PURE__*/_interopNamespace(i3$2);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);

    /**
     * @title Dialog with header, scrollable content and actions
     */
    var DialogContentExample = /** @class */ (function () {
        function DialogContentExample(dialog) {
            this.dialog = dialog;
        }
        DialogContentExample.prototype.openDialog = function () {
            var dialogRef = this.dialog.open(DialogContentExampleDialog);
            dialogRef.afterClosed().subscribe(function (result) {
                console.log("Dialog result: " + result);
            });
        };
        return DialogContentExample;
    }());
    DialogContentExample.ɵfac = function DialogContentExample_Factory(t) { return new (t || DialogContentExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.MatDialog)); };
    DialogContentExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DialogContentExample, selectors: [["dialog-content-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogContentExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function DialogContentExample_Template_button_click_0_listener() { return ctx.openDialog(); });
                i0__namespace.ɵɵtext(1, "Open dialog");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i2__namespace.MatButton], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DialogContentExample, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-content-example',
                        templateUrl: 'dialog-content-example.html',
                    }]
            }], function () { return [{ type: i1__namespace.MatDialog }]; }, null);
    })();
    var DialogContentExampleDialog = /** @class */ (function () {
        function DialogContentExampleDialog() {
        }
        return DialogContentExampleDialog;
    }());
    DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) { return new (t || DialogContentExampleDialog)(); };
    DialogContentExampleDialog.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DialogContentExampleDialog, selectors: [["dialog-content-example-dialog"]], decls: 46, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogContentExampleDialog_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h2", 0);
                i0__namespace.ɵɵtext(1, "Install Angular");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-dialog-content", 1);
                i0__namespace.ɵɵelementStart(3, "h3");
                i0__namespace.ɵɵtext(4, "Develop across all platforms");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "p");
                i0__namespace.ɵɵtext(6, "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "h3");
                i0__namespace.ɵɵtext(8, "Speed & Performance");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "p");
                i0__namespace.ɵɵtext(10, "Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "h3");
                i0__namespace.ɵɵtext(12, "Incredible tooling");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "p");
                i0__namespace.ɵɵtext(14, "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "h3");
                i0__namespace.ɵɵtext(16, "Loved by millions");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "p");
                i0__namespace.ɵɵtext(18, "From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(19, "h3");
                i0__namespace.ɵɵtext(20, "What is Angular?");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(21, "p");
                i0__namespace.ɵɵtext(22, "Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(23, "h3");
                i0__namespace.ɵɵtext(24, "Architecture overview");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(25, "p");
                i0__namespace.ɵɵtext(26, "Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(27, "p");
                i0__namespace.ɵɵtext(28, "The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(29, "p");
                i0__namespace.ɵɵtext(30, "Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(31, "p");
                i0__namespace.ɵɵtext(32, "Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(33, "p");
                i0__namespace.ɵɵtext(34, "Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(35, "p");
                i0__namespace.ɵɵtext(36, "The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(37, "p");
                i0__namespace.ɵɵtext(38, "The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(39, "p");
                i0__namespace.ɵɵtext(40, "An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(41, "mat-dialog-actions", 2);
                i0__namespace.ɵɵelementStart(42, "button", 3);
                i0__namespace.ɵɵtext(43, "Cancel");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(44, "button", 4);
                i0__namespace.ɵɵtext(45, "Install");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(44);
                i0__namespace.ɵɵproperty("mat-dialog-close", true);
            }
        }, directives: [i1__namespace.MatDialogTitle, i1__namespace.MatDialogContent, i1__namespace.MatDialogActions, i2__namespace.MatButton, i1__namespace.MatDialogClose], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DialogContentExampleDialog, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-content-example-dialog',
                        templateUrl: 'dialog-content-example-dialog.html',
                    }]
            }], null, null);
    })();

    function DialogDataExampleDialog_span_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵtext(1, "\u2713");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function DialogDataExampleDialog_span_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵtext(1, "\u2713");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function DialogDataExampleDialog_span_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵtext(1, "\u2713");
            i0__namespace.ɵɵelementEnd();
        }
    }
    /**
     * @title Injecting data when opening a dialog
     */
    var DialogDataExample = /** @class */ (function () {
        function DialogDataExample(dialog) {
            this.dialog = dialog;
        }
        DialogDataExample.prototype.openDialog = function () {
            this.dialog.open(DialogDataExampleDialog, {
                data: {
                    animal: 'panda'
                }
            });
        };
        return DialogDataExample;
    }());
    DialogDataExample.ɵfac = function DialogDataExample_Factory(t) { return new (t || DialogDataExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.MatDialog)); };
    DialogDataExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DialogDataExample, selectors: [["dialog-data-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogDataExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function DialogDataExample_Template_button_click_0_listener() { return ctx.openDialog(); });
                i0__namespace.ɵɵtext(1, "Open dialog");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i2__namespace.MatButton], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DialogDataExample, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-data-example',
                        templateUrl: 'dialog-data-example.html',
                    }]
            }], function () { return [{ type: i1__namespace.MatDialog }]; }, null);
    })();
    var DialogDataExampleDialog = /** @class */ (function () {
        function DialogDataExampleDialog(data) {
            this.data = data;
        }
        return DialogDataExampleDialog;
    }());
    DialogDataExampleDialog.ɵfac = function DialogDataExampleDialog_Factory(t) { return new (t || DialogDataExampleDialog)(i0__namespace.ɵɵdirectiveInject(i1.MAT_DIALOG_DATA)); };
    DialogDataExampleDialog.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DialogDataExampleDialog, selectors: [["dialog-data-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngIf"]], template: function DialogDataExampleDialog_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h1", 0);
                i0__namespace.ɵɵtext(1, "Favorite Animal");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "div", 1);
                i0__namespace.ɵɵtext(3, " My favorite animal is: ");
                i0__namespace.ɵɵelementStart(4, "ul");
                i0__namespace.ɵɵelementStart(5, "li");
                i0__namespace.ɵɵtemplate(6, DialogDataExampleDialog_span_6_Template, 2, 0, "span", 2);
                i0__namespace.ɵɵtext(7, " Panda ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "li");
                i0__namespace.ɵɵtemplate(9, DialogDataExampleDialog_span_9_Template, 2, 0, "span", 2);
                i0__namespace.ɵɵtext(10, " Unicorn ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "li");
                i0__namespace.ɵɵtemplate(12, DialogDataExampleDialog_span_12_Template, 2, 0, "span", 2);
                i0__namespace.ɵɵtext(13, " Lion ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵproperty("ngIf", ctx.data.animal === "panda");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngIf", ctx.data.animal === "unicorn");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngIf", ctx.data.animal === "lion");
            }
        }, directives: [i1__namespace.MatDialogTitle, i1__namespace.MatDialogContent, i3__namespace.NgIf], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DialogDataExampleDialog, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-data-example-dialog',
                        templateUrl: 'dialog-data-example-dialog.html',
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.MAT_DIALOG_DATA]
                        }] }];
        }, null);
    })();

    /**
     * @title Dialog elements
     */
    var DialogElementsExample = /** @class */ (function () {
        function DialogElementsExample(dialog) {
            this.dialog = dialog;
        }
        DialogElementsExample.prototype.openDialog = function () {
            this.dialog.open(DialogElementsExampleDialog);
        };
        return DialogElementsExample;
    }());
    DialogElementsExample.ɵfac = function DialogElementsExample_Factory(t) { return new (t || DialogElementsExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.MatDialog)); };
    DialogElementsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DialogElementsExample, selectors: [["dialog-elements-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogElementsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function DialogElementsExample_Template_button_click_0_listener() { return ctx.openDialog(); });
                i0__namespace.ɵɵtext(1, "Launch dialog");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i2__namespace.MatButton], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DialogElementsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-elements-example',
                        templateUrl: 'dialog-elements-example.html',
                    }]
            }], function () { return [{ type: i1__namespace.MatDialog }]; }, null);
    })();
    var DialogElementsExampleDialog = /** @class */ (function () {
        function DialogElementsExampleDialog() {
        }
        return DialogElementsExampleDialog;
    }());
    DialogElementsExampleDialog.ɵfac = function DialogElementsExampleDialog_Factory(t) { return new (t || DialogElementsExampleDialog)(); };
    DialogElementsExampleDialog.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DialogElementsExampleDialog, selectors: [["dialog-elements-example-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function DialogElementsExampleDialog_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h1", 0);
                i0__namespace.ɵɵtext(1, "Dialog with elements");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "div", 1);
                i0__namespace.ɵɵtext(3, "This dialog showcases the title, close, content and actions elements.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "div", 2);
                i0__namespace.ɵɵelementStart(5, "button", 3);
                i0__namespace.ɵɵtext(6, "Close");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatDialogTitle, i1__namespace.MatDialogContent, i1__namespace.MatDialogActions, i2__namespace.MatButton, i1__namespace.MatDialogClose], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DialogElementsExampleDialog, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-elements-example-dialog',
                        templateUrl: 'dialog-elements-example-dialog.html',
                    }]
            }], null, null);
    })();

    function DialogOverviewExample_li_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵtext(1, " You chose: ");
            i0__namespace.ɵɵelementStart(2, "i");
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.animal);
        }
    }
    /**
     * @title Dialog Overview
     */
    var DialogOverviewExample = /** @class */ (function () {
        function DialogOverviewExample(dialog) {
            this.dialog = dialog;
        }
        DialogOverviewExample.prototype.openDialog = function () {
            var _this = this;
            var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
                width: '250px',
                data: { name: this.name, animal: this.animal }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed');
                _this.animal = result;
            });
        };
        return DialogOverviewExample;
    }());
    DialogOverviewExample.ɵfac = function DialogOverviewExample_Factory(t) { return new (t || DialogOverviewExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.MatDialog)); };
    DialogOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DialogOverviewExample, selectors: [["dialog-overview-example"]], decls: 10, vars: 2, consts: [["appearance", "fill"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"]], template: function DialogOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "ol");
                i0__namespace.ɵɵelementStart(1, "li");
                i0__namespace.ɵɵelementStart(2, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(3, "mat-label");
                i0__namespace.ɵɵtext(4, "What's your name?");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "input", 1);
                i0__namespace.ɵɵlistener("ngModelChange", function DialogOverviewExample_Template_input_ngModelChange_5_listener($event) { return ctx.name = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "li");
                i0__namespace.ɵɵelementStart(7, "button", 2);
                i0__namespace.ɵɵlistener("click", function DialogOverviewExample_Template_button_click_7_listener() { return ctx.openDialog(); });
                i0__namespace.ɵɵtext(8, "Pick one");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(9, DialogOverviewExample_li_9_Template, 4, 1, "li", 3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("ngModel", ctx.name);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngIf", ctx.animal);
            }
        }, directives: [i2__namespace$1.MatFormField, i2__namespace$1.MatLabel, i3__namespace$1.MatInput, i4__namespace.DefaultValueAccessor, i4__namespace.NgControlStatus, i4__namespace.NgModel, i2__namespace.MatButton, i3__namespace.NgIf], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DialogOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-overview-example',
                        templateUrl: 'dialog-overview-example.html',
                    }]
            }], function () { return [{ type: i1__namespace.MatDialog }]; }, null);
    })();
    var DialogOverviewExampleDialog = /** @class */ (function () {
        function DialogOverviewExampleDialog(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        DialogOverviewExampleDialog.prototype.onNoClick = function () {
            this.dialogRef.close();
        };
        return DialogOverviewExampleDialog;
    }());
    DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(i0__namespace.ɵɵdirectiveInject(i1__namespace.MatDialogRef), i0__namespace.ɵɵdirectiveInject(i1.MAT_DIALOG_DATA)); };
    DialogOverviewExampleDialog.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "fill"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h1", 0);
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "div", 1);
                i0__namespace.ɵɵelementStart(3, "p");
                i0__namespace.ɵɵtext(4, "What's your favorite animal?");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-form-field", 2);
                i0__namespace.ɵɵelementStart(6, "mat-label");
                i0__namespace.ɵɵtext(7, "Favorite Animal");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "input", 3);
                i0__namespace.ɵɵlistener("ngModelChange", function DialogOverviewExampleDialog_Template_input_ngModelChange_8_listener($event) { return ctx.data.animal = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "div", 4);
                i0__namespace.ɵɵelementStart(10, "button", 5);
                i0__namespace.ɵɵlistener("click", function DialogOverviewExampleDialog_Template_button_click_10_listener() { return ctx.onNoClick(); });
                i0__namespace.ɵɵtext(11, "No Thanks");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "button", 6);
                i0__namespace.ɵɵtext(13, "Ok");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1("Hi ", ctx.data.name, "");
                i0__namespace.ɵɵadvance(7);
                i0__namespace.ɵɵproperty("ngModel", ctx.data.animal);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("mat-dialog-close", ctx.data.animal);
            }
        }, directives: [i1__namespace.MatDialogTitle, i1__namespace.MatDialogContent, i2__namespace$1.MatFormField, i2__namespace$1.MatLabel, i3__namespace$1.MatInput, i4__namespace.DefaultValueAccessor, i4__namespace.NgControlStatus, i4__namespace.NgModel, i1__namespace.MatDialogActions, i2__namespace.MatButton, i1__namespace.MatDialogClose], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DialogOverviewExampleDialog, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-overview-example-dialog',
                        templateUrl: 'dialog-overview-example-dialog.html',
                    }]
            }], function () {
            return [{ type: i1__namespace.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.MAT_DIALOG_DATA]
                        }] }];
        }, null);
    })();

    var _c0 = ["menuTrigger"];
    /**
     * @title Dialog launched from a menu
     */
    var DialogFromMenuExample = /** @class */ (function () {
        function DialogFromMenuExample(dialog) {
            this.dialog = dialog;
        }
        DialogFromMenuExample.prototype.openDialog = function () {
            var _this = this;
            // #docregion focus-restoration
            var dialogRef = this.dialog.open(DialogFromMenuExampleDialog, { restoreFocus: false });
            // Manually restore focus to the menu trigger since the element that
            // opens the dialog won't be in the DOM any more when the dialog closes.
            dialogRef.afterClosed().subscribe(function () { return _this.menuTrigger.focus(); });
            // #enddocregion focus-restoration
        };
        return DialogFromMenuExample;
    }());
    DialogFromMenuExample.ɵfac = function DialogFromMenuExample_Factory(t) { return new (t || DialogFromMenuExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.MatDialog)); };
    DialogFromMenuExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DialogFromMenuExample, selectors: [["dialog-from-menu-example"]], viewQuery: function DialogFromMenuExample_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.menuTrigger = _t.first);
            }
        }, decls: 7, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["menuTrigger", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function DialogFromMenuExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0, 1);
                i0__namespace.ɵɵtext(2, "Menu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-menu", null, 2);
                i0__namespace.ɵɵelementStart(5, "button", 3);
                i0__namespace.ɵɵlistener("click", function DialogFromMenuExample_Template_button_click_5_listener() { return ctx.openDialog(); });
                i0__namespace.ɵɵtext(6, "Open dialog");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(4);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r1);
            }
        }, directives: [i2__namespace.MatButton, i3__namespace$2.MatMenuTrigger, i3__namespace$2.MatMenu, i3__namespace$2.MatMenuItem], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DialogFromMenuExample, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-from-menu-example',
                        templateUrl: 'dialog-from-menu-example.html',
                    }]
            }], function () { return [{ type: i1__namespace.MatDialog }]; }, { menuTrigger: [{
                    type: i0.ViewChild,
                    args: ['menuTrigger']
                }] });
    })();
    var DialogFromMenuExampleDialog = /** @class */ (function () {
        function DialogFromMenuExampleDialog() {
        }
        return DialogFromMenuExampleDialog;
    }());
    DialogFromMenuExampleDialog.ɵfac = function DialogFromMenuExampleDialog_Factory(t) { return new (t || DialogFromMenuExampleDialog)(); };
    DialogFromMenuExampleDialog.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DialogFromMenuExampleDialog, selectors: [["dialog-from-menu-dialog"]], decls: 5, vars: 0, consts: [["mat-button", "", "mat-dialog-close", ""]], template: function DialogFromMenuExampleDialog_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-dialog-content");
                i0__namespace.ɵɵtext(1, " This is a dialog\n");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-dialog-actions");
                i0__namespace.ɵɵelementStart(3, "button", 0);
                i0__namespace.ɵɵtext(4, "Okay");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatDialogContent, i1__namespace.MatDialogActions, i2__namespace.MatButton, i1__namespace.MatDialogClose], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DialogFromMenuExampleDialog, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-from-menu-dialog',
                        templateUrl: 'dialog-from-menu-example-dialog.html',
                    }]
            }], null, null);
    })();

    function DialogHarnessExample_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, " Hello from the dialog!\n");
        }
    }
    /**
     * @title Testing with MatDialogHarness
     */
    var DialogHarnessExample = /** @class */ (function () {
        function DialogHarnessExample(dialog) {
            this.dialog = dialog;
        }
        DialogHarnessExample.prototype.open = function (config) {
            return this.dialog.open(this.dialogTemplate, config);
        };
        return DialogHarnessExample;
    }());
    DialogHarnessExample.ɵfac = function DialogHarnessExample_Factory(t) { return new (t || DialogHarnessExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.MatDialog)); };
    DialogHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DialogHarnessExample, selectors: [["dialog-harness-example"]], viewQuery: function DialogHarnessExample_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(i0.TemplateRef, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.dialogTemplate = _t.first);
            }
        }, decls: 1, vars: 0, template: function DialogHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, DialogHarnessExample_ng_template_0_Template, 1, 0, "ng-template");
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DialogHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-harness-example',
                        templateUrl: 'dialog-harness-example.html',
                    }]
            }], function () { return [{ type: i1__namespace.MatDialog }]; }, { dialogTemplate: [{
                    type: i0.ViewChild,
                    args: [i0.TemplateRef]
                }] });
    })();

    var EXAMPLES = [
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
    var DialogExamplesModule = /** @class */ (function () {
        function DialogExamplesModule() {
        }
        return DialogExamplesModule;
    }());
    DialogExamplesModule.ɵfac = function DialogExamplesModule_Factory(t) { return new (t || DialogExamplesModule)(); };
    DialogExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: DialogExamplesModule });
    DialogExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i3.CommonModule,
                i2.MatButtonModule,
                i1.MatDialogModule,
                i3$1.MatInputModule,
                i3$2.MatMenuModule,
                i4.FormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DialogExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i2.MatButtonModule,
                            i1.MatDialogModule,
                            i3$1.MatInputModule,
                            i3$2.MatMenuModule,
                            i4.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(DialogExamplesModule, { declarations: [DialogContentExample,
                DialogContentExampleDialog,
                DialogDataExample,
                DialogDataExampleDialog,
                DialogElementsExample,
                DialogElementsExampleDialog,
                DialogFromMenuExample,
                DialogFromMenuExampleDialog,
                DialogHarnessExample,
                DialogOverviewExample,
                DialogOverviewExampleDialog], imports: [i3.CommonModule,
                i2.MatButtonModule,
                i1.MatDialogModule,
                i3$1.MatInputModule,
                i3$2.MatMenuModule,
                i4.FormsModule], exports: [DialogContentExample,
                DialogContentExampleDialog,
                DialogDataExample,
                DialogDataExampleDialog,
                DialogElementsExample,
                DialogElementsExampleDialog,
                DialogFromMenuExample,
                DialogFromMenuExampleDialog,
                DialogHarnessExample,
                DialogOverviewExample,
                DialogOverviewExampleDialog] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DialogContentExample = DialogContentExample;
    exports.DialogContentExampleDialog = DialogContentExampleDialog;
    exports.DialogDataExample = DialogDataExample;
    exports.DialogDataExampleDialog = DialogDataExampleDialog;
    exports.DialogElementsExample = DialogElementsExample;
    exports.DialogElementsExampleDialog = DialogElementsExampleDialog;
    exports.DialogExamplesModule = DialogExamplesModule;
    exports.DialogFromMenuExample = DialogFromMenuExample;
    exports.DialogFromMenuExampleDialog = DialogFromMenuExampleDialog;
    exports.DialogHarnessExample = DialogHarnessExample;
    exports.DialogOverviewExample = DialogOverviewExample;
    exports.DialogOverviewExampleDialog = DialogOverviewExampleDialog;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-dialog.umd.js.map
