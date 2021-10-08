import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i2 from '@angular/cdk/clipboard';
import { ClipboardModule } from '@angular/cdk/clipboard';

/**
 * @title Clipboard overview
 */
class CdkClipboardOverviewExample {
    constructor() {
        this.value = `Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not ` +
            `a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord ` +
            `of the Sith, so powerful and so wise he could use the Force to influence the ` +
            `midichlorians to create life… He had such a knowledge of the dark side that he could ` +
            `even keep the ones he cared about from dying. The dark side of the Force is a pathway ` +
            `to many abilities some consider to be unnatural. He became so powerful… the only ` +
            `thing he was afraid of was losing his power, which eventually, of course, he did. ` +
            `Unfortunately, he taught his apprentice everything he knew, then his apprentice ` +
            `killed him in his sleep. Ironic. He could save others from death, but not himself.`;
    }
}
CdkClipboardOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkClipboardOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkClipboardOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: CdkClipboardOverviewExample, selector: "cdk-clipboard-overview-example", ngImport: i0, template: "<label for=\"clipboard-example-textarea\">Text to be copied</label>\n<textarea id=\"clipboard-example-textarea\" cols=\"30\" rows=\"10\" [(ngModel)]=\"value\"></textarea>\n<button [cdkCopyToClipboard]=\"value\">Copy to clipboard</button>\n", styles: ["textarea {\n  display: block;\n  margin: 4px 0 8px;\n}\n"], directives: [{ type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i2.CdkCopyToClipboard, selector: "[cdkCopyToClipboard]", inputs: ["cdkCopyToClipboard", "cdkCopyToClipboardAttempts"], outputs: ["cdkCopyToClipboardCopied"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkClipboardOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-clipboard-overview-example', template: "<label for=\"clipboard-example-textarea\">Text to be copied</label>\n<textarea id=\"clipboard-example-textarea\" cols=\"30\" rows=\"10\" [(ngModel)]=\"value\"></textarea>\n<button [cdkCopyToClipboard]=\"value\">Copy to clipboard</button>\n", styles: ["textarea {\n  display: block;\n  margin: 4px 0 8px;\n}\n"] }]
        }] });

const EXAMPLES = [CdkClipboardOverviewExample];
class CdkClipboardExamplesModule {
}
CdkClipboardExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkClipboardExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkClipboardExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkClipboardExamplesModule, declarations: [CdkClipboardOverviewExample], imports: [ClipboardModule, FormsModule], exports: [CdkClipboardOverviewExample] });
CdkClipboardExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkClipboardExamplesModule, imports: [[ClipboardModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkClipboardExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ClipboardModule, FormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkClipboardExamplesModule, CdkClipboardOverviewExample };
//# sourceMappingURL=clipboard.mjs.map
