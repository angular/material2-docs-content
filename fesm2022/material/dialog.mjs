import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, signal, model, viewChild, TemplateRef } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/dialog';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import * as i3$1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i2$1 from '@angular/material/menu';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';

/**
 * @title Dialog with header, scrollable content and actions
 */
class DialogContentExample {
    dialog = inject(MatDialog);
    openDialog() {
        const dialogRef = this.dialog.open(DialogContentExampleDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogContentExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: DialogContentExample, isStandalone: true, selector: "dialog-content-example", ngImport: i0, template: "<button matButton (click)=\"openDialog()\">Open dialog</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatDialogModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogContentExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-content-example', imports: [MatButtonModule, MatDialogModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<button matButton (click)=\"openDialog()\">Open dialog</button>\n" }]
        }] });
class DialogContentExampleDialog {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogContentExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: DialogContentExampleDialog, isStandalone: true, selector: "dialog-content-example-dialog", ngImport: i0, template: "<h2 mat-dialog-title>Install Angular</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Develop across all platforms</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n  <h3>Speed &amp; Performance</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge\n    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>\n\n  <h3>Incredible tooling</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with\n    your own components and use a wide array of existing components. Get immediate Angular-specific\n    help and feedback with nearly every IDE and editor. All this comes together so you can focus\n    on building amazing apps rather than trying to make the code work.</p>\n\n  <h3>Loved by millions</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable\n    infrastructure that supports Google's largest applications.</p>\n\n  <h3>What is Angular?</h3>\n\n  <p>Angular is a platform that makes it easy to build applications with the web. Angular\n    combines declarative templates, dependency injection, end to end tooling, and integrated\n    best practices to solve development challenges. Angular empowers developers to build\n    applications that live on the web, mobile, or the desktop</p>\n\n  <h3>Architecture overview</h3>\n\n  <p>Angular is a platform and framework for building client applications in HTML and TypeScript.\n  Angular is itself written in TypeScript. It implements core and optional functionality as a\n  set of TypeScript libraries that you import into your apps.</p>\n\n  <p>The basic building blocks of an Angular application are NgModules, which provide a compilation\n  context for components. NgModules collect related code into functional sets; an Angular app is\n  defined by a set of NgModules. An app always has at least a root module that enables\n  bootstrapping, and typically has many more feature modules.</p>\n\n  <p>Components define views, which are sets of screen elements that Angular can choose among and\n  modify according to your program logic and data. Every app has at least a root component.</p>\n\n  <p>Components use services, which provide specific functionality not directly related to views.\n  Service providers can be injected into components as dependencies, making your code modular,\n  reusable, and efficient.</p>\n\n  <p>Both components and services are simply classes, with decorators that mark their type and\n  provide metadata that tells Angular how to use them.</p>\n\n  <p>The metadata for a component class associates it with a template that defines a view. A\n  template combines ordinary HTML with Angular directives and binding markup that allow Angular\n  to modify the HTML before rendering it for display.</p>\n\n  <p>The metadata for a service class provides the information Angular needs to make it available\n  to components through Dependency Injection (DI).</p>\n\n  <p>An app's components typically define many views, arranged hierarchically. Angular provides\n  the Router service to help you define navigation paths among views. The router provides\n  sophisticated in-browser navigational capabilities.</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button matButton mat-dialog-close>Cancel</button>\n  <button matButton [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i3.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i3.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogContentExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-content-example-dialog', imports: [MatDialogModule, MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<h2 mat-dialog-title>Install Angular</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Develop across all platforms</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n  <h3>Speed &amp; Performance</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge\n    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>\n\n  <h3>Incredible tooling</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with\n    your own components and use a wide array of existing components. Get immediate Angular-specific\n    help and feedback with nearly every IDE and editor. All this comes together so you can focus\n    on building amazing apps rather than trying to make the code work.</p>\n\n  <h3>Loved by millions</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable\n    infrastructure that supports Google's largest applications.</p>\n\n  <h3>What is Angular?</h3>\n\n  <p>Angular is a platform that makes it easy to build applications with the web. Angular\n    combines declarative templates, dependency injection, end to end tooling, and integrated\n    best practices to solve development challenges. Angular empowers developers to build\n    applications that live on the web, mobile, or the desktop</p>\n\n  <h3>Architecture overview</h3>\n\n  <p>Angular is a platform and framework for building client applications in HTML and TypeScript.\n  Angular is itself written in TypeScript. It implements core and optional functionality as a\n  set of TypeScript libraries that you import into your apps.</p>\n\n  <p>The basic building blocks of an Angular application are NgModules, which provide a compilation\n  context for components. NgModules collect related code into functional sets; an Angular app is\n  defined by a set of NgModules. An app always has at least a root module that enables\n  bootstrapping, and typically has many more feature modules.</p>\n\n  <p>Components define views, which are sets of screen elements that Angular can choose among and\n  modify according to your program logic and data. Every app has at least a root component.</p>\n\n  <p>Components use services, which provide specific functionality not directly related to views.\n  Service providers can be injected into components as dependencies, making your code modular,\n  reusable, and efficient.</p>\n\n  <p>Both components and services are simply classes, with decorators that mark their type and\n  provide metadata that tells Angular how to use them.</p>\n\n  <p>The metadata for a component class associates it with a template that defines a view. A\n  template combines ordinary HTML with Angular directives and binding markup that allow Angular\n  to modify the HTML before rendering it for display.</p>\n\n  <p>The metadata for a service class provides the information Angular needs to make it available\n  to components through Dependency Injection (DI).</p>\n\n  <p>An app's components typically define many views, arranged hierarchically. Angular provides\n  the Router service to help you define navigation paths among views. The router provides\n  sophisticated in-browser navigational capabilities.</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button matButton mat-dialog-close>Cancel</button>\n  <button matButton [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions>\n" }]
        }] });

/**
 * @title Injecting data when opening a dialog
 */
class DialogDataExample {
    dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda',
            },
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogDataExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: DialogDataExample, isStandalone: true, selector: "dialog-data-example", ngImport: i0, template: "<button matButton (click)=\"openDialog()\">Open dialog</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-data-example', imports: [MatButtonModule], template: "<button matButton (click)=\"openDialog()\">Open dialog</button>\n" }]
        }] });
class DialogDataExampleDialog {
    data = inject(MAT_DIALOG_DATA);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogDataExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.0-next.2", type: DialogDataExampleDialog, isStandalone: true, selector: "dialog-data-example-dialog", ngImport: i0, template: "<h2 mat-dialog-title>Favorite Animal</h2>\n<mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      @if (data.animal === 'panda') {\n        <span>&#10003;</span>\n      } Panda\n    </li>\n    <li>\n      @if (data.animal === 'unicorn') {\n        <span>&#10003;</span>\n      } Unicorn\n    </li>\n    <li>\n      @if (data.animal === 'lion') {\n        <span>&#10003;</span>\n      } Lion\n    </li>\n  </ul>\n</mat-dialog-content>\n", dependencies: [{ kind: "directive", type: MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogDataExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-data-example-dialog', imports: [MatDialogTitle, MatDialogContent], template: "<h2 mat-dialog-title>Favorite Animal</h2>\n<mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      @if (data.animal === 'panda') {\n        <span>&#10003;</span>\n      } Panda\n    </li>\n    <li>\n      @if (data.animal === 'unicorn') {\n        <span>&#10003;</span>\n      } Unicorn\n    </li>\n    <li>\n      @if (data.animal === 'lion') {\n        <span>&#10003;</span>\n      } Lion\n    </li>\n  </ul>\n</mat-dialog-content>\n" }]
        }] });

/**
 * @title Dialog elements
 */
class DialogElementsExample {
    dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(DialogElementsExampleDialog);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogElementsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: DialogElementsExample, isStandalone: true, selector: "dialog-elements-example", ngImport: i0, template: "<button matButton (click)=\"openDialog()\">Launch dialog</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogElementsExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-elements-example', imports: [MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<button matButton (click)=\"openDialog()\">Launch dialog</button>\n" }]
        }] });
class DialogElementsExampleDialog {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogElementsExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: DialogElementsExampleDialog, isStandalone: true, selector: "dialog-elements-example-dialog", ngImport: i0, template: "<h2 mat-dialog-title>Dialog with elements</h2>\n<mat-dialog-content>This dialog showcases the title, close, content and actions elements.</mat-dialog-content>\n<mat-dialog-actions>\n  <button matButton mat-dialog-close>Close</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "directive", type: MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogElementsExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-elements-example-dialog', imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<h2 mat-dialog-title>Dialog with elements</h2>\n<mat-dialog-content>This dialog showcases the title, close, content and actions elements.</mat-dialog-content>\n<mat-dialog-actions>\n  <button matButton mat-dialog-close>Close</button>\n</mat-dialog-actions>\n" }]
        }] });

/**
 * @title Dialog Overview
 */
class DialogOverviewExample {
    animal = signal('', ...(ngDevMode ? [{ debugName: "animal" }] : []));
    name = model('', ...(ngDevMode ? [{ debugName: "name" }] : []));
    dialog = inject(MatDialog);
    openDialog() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            data: { name: this.name(), animal: this.animal() },
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result !== undefined) {
                this.animal.set(result);
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.0-next.2", type: DialogOverviewExample, isStandalone: true, selector: "dialog-overview-example", inputs: { name: { classPropertyName: "name", publicName: "name", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { name: "nameChange" }, ngImport: i0, template: "<ol>\n  <li>\n    <mat-form-field>\n      <mat-label>What's your name?</mat-label>\n      <input matInput [(ngModel)]=\"name\" />\n    </mat-form-field>\n  </li>\n  <li>\n    <button matButton=\"elevated\" (click)=\"openDialog()\">Pick one</button>\n  </li>\n  @if (animal()) {\n    <li>\n      You chose: <em>{{animal()}}</em>\n    </li>\n  }\n</ol>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1$1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-overview-example', imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ol>\n  <li>\n    <mat-form-field>\n      <mat-label>What's your name?</mat-label>\n      <input matInput [(ngModel)]=\"name\" />\n    </mat-form-field>\n  </li>\n  <li>\n    <button matButton=\"elevated\" (click)=\"openDialog()\">Pick one</button>\n  </li>\n  @if (animal()) {\n    <li>\n      You chose: <em>{{animal()}}</em>\n    </li>\n  }\n</ol>\n" }]
        }] });
class DialogOverviewExampleDialog {
    dialogRef = inject((MatDialogRef));
    data = inject(MAT_DIALOG_DATA);
    animal = model(this.data.animal, ...(ngDevMode ? [{ debugName: "animal" }] : []));
    onNoClick() {
        this.dialogRef.close();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogOverviewExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.0-next.2", type: DialogOverviewExampleDialog, isStandalone: true, selector: "dialog-overview-example-dialog", inputs: { animal: { classPropertyName: "animal", publicName: "animal", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { animal: "animalChange" }, ngImport: i0, template: "<h2 mat-dialog-title>Hi {{data.name}}</h2>\n<mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <mat-label>Favorite Animal</mat-label>\n    <input matInput [(ngModel)]=\"animal\" />\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button matButton (click)=\"onNoClick()\">No Thanks</button>\n  <button matButton [mat-dialog-close]=\"animal()\" cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1$1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "directive", type: MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogOverviewExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-overview-example-dialog', imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        FormsModule,
                        MatButtonModule,
                        MatDialogTitle,
                        MatDialogContent,
                        MatDialogActions,
                        MatDialogClose,
                    ], template: "<h2 mat-dialog-title>Hi {{data.name}}</h2>\n<mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <mat-label>Favorite Animal</mat-label>\n    <input matInput [(ngModel)]=\"animal\" />\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button matButton (click)=\"onNoClick()\">No Thanks</button>\n  <button matButton [mat-dialog-close]=\"animal()\" cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n" }]
        }] });

/**
 * @title Dialog launched from a menu
 */
class DialogFromMenuExample {
    menuTrigger = viewChild.required(MatMenuTrigger);
    dialog = inject(MatDialog);
    openDialog() {
        // #docregion focus-restoration
        const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, { restoreFocus: false });
        // Manually restore focus to the menu trigger since the element that
        // opens the dialog won't be in the DOM any more when the dialog closes.
        dialogRef.afterClosed().subscribe(() => this.menuTrigger().focus());
        // #enddocregion focus-restoration
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogFromMenuExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.2.0-next.2", type: DialogFromMenuExample, isStandalone: true, selector: "dialog-from-menu-example", viewQueries: [{ propertyName: "menuTrigger", first: true, predicate: MatMenuTrigger, descendants: true, isSignal: true }], ngImport: i0, template: "<button matButton [matMenuTriggerFor]=\"menu\" #menuTrigger>Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item (click)=\"openDialog()\">Open dialog</button>\n</mat-menu>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i2$1.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "component", type: i2$1.MatMenuItem, selector: "[mat-menu-item]", inputs: ["role", "disabled", "disableRipple"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i2$1.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogFromMenuExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-from-menu-example', imports: [MatButtonModule, MatMenuModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<button matButton [matMenuTriggerFor]=\"menu\" #menuTrigger>Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item (click)=\"openDialog()\">Open dialog</button>\n</mat-menu>\n" }]
        }] });
class DialogFromMenuExampleDialog {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogFromMenuExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: DialogFromMenuExampleDialog, isStandalone: true, selector: "dialog-from-menu-dialog", ngImport: i0, template: "<mat-dialog-content>\n  This is a dialog\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button matButton mat-dialog-close>Okay</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "directive", type: MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogFromMenuExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-from-menu-dialog', imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-dialog-content>\n  This is a dialog\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button matButton mat-dialog-close>Okay</button>\n</mat-dialog-actions>\n" }]
        }] });

/**
 * @title Testing with MatDialogHarness
 */
class DialogHarnessExample {
    dialogTemplate = viewChild.required(TemplateRef);
    dialog = inject(MatDialog);
    open(config) {
        return this.dialog.open(this.dialogTemplate(), config);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "20.2.0-next.2", type: DialogHarnessExample, isStandalone: true, selector: "dialog-harness-example", viewQueries: [{ propertyName: "dialogTemplate", first: true, predicate: TemplateRef, descendants: true, isSignal: true }], ngImport: i0, template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-harness-example', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n" }]
        }] });

/**
 * @title Dialog Animations
 */
class DialogAnimationsExample {
    dialog = inject(MatDialog);
    openDialog(enterAnimationDuration, exitAnimationDuration) {
        this.dialog.open(DialogAnimationsExampleDialog, {
            width: '250px',
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogAnimationsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: DialogAnimationsExample, isStandalone: true, selector: "dialog-animations-example", ngImport: i0, template: "<button matButton=\"elevated\" (click)=\"openDialog('0ms', '0ms')\">Open dialog without animation</button>\n<button matButton=\"elevated\" (click)=\"openDialog('3000ms', '1500ms')\">Open dialog slowly</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogAnimationsExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-animations-example', imports: [MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<button matButton=\"elevated\" (click)=\"openDialog('0ms', '0ms')\">Open dialog without animation</button>\n<button matButton=\"elevated\" (click)=\"openDialog('3000ms', '1500ms')\">Open dialog slowly</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"] }]
        }] });
class DialogAnimationsExampleDialog {
    dialogRef = inject((MatDialogRef));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogAnimationsExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: DialogAnimationsExampleDialog, isStandalone: true, selector: "dialog-animations-example-dialog", ngImport: i0, template: "<h2 mat-dialog-title>Delete file</h2>\n<mat-dialog-content>\n  Would you like to delete cat.jpeg?\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button matButton mat-dialog-close>No</button>\n  <button matButton mat-dialog-close cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "directive", type: MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: DialogAnimationsExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-animations-example-dialog', imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<h2 mat-dialog-title>Delete file</h2>\n<mat-dialog-content>\n  Would you like to delete cat.jpeg?\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button matButton mat-dialog-close>No</button>\n  <button matButton mat-dialog-close cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n" }]
        }] });

export { DialogAnimationsExample, DialogAnimationsExampleDialog, DialogContentExample, DialogContentExampleDialog, DialogDataExample, DialogDataExampleDialog, DialogElementsExample, DialogElementsExampleDialog, DialogFromMenuExample, DialogFromMenuExampleDialog, DialogHarnessExample, DialogOverviewExample, DialogOverviewExampleDialog };
//# sourceMappingURL=dialog.mjs.map
