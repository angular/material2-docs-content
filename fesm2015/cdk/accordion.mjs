import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/cdk/accordion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

/**
 * @title Accordion overview
 */
class CdkAccordionOverviewExample {
    constructor() {
        this.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
        this.expandedIndex = 0;
    }
}
CdkAccordionOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkAccordionOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkAccordionOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: CdkAccordionOverviewExample, selector: "cdk-accordion-overview-example", ngImport: i0, template: "<cdk-accordion class=\"example-accordion\">\n  <cdk-accordion-item\n    *ngFor=\"let item of items; let index = index;\"\n    #accordionItem=\"cdkAccordionItem\"\n    class=\"example-accordion-item\"\n    role=\"button\"\n    tabindex=\"0\"\n    [attr.id]=\"'accordion-header-' + index\"\n    [attr.aria-expanded]=\"accordionItem.expanded\"\n    [attr.aria-controls]=\"'accordion-body-' + index\">\n    <div class=\"example-accordion-item-header\" (click)=\"accordionItem.toggle()\">\n      {{ item }}\n      <span class=\"example-accordion-item-description\">\n        Click to {{ accordionItem.expanded ? 'close' : 'open' }}\n      </span>\n    </div>\n    <div\n      class=\"example-accordion-item-body\"\n      role=\"region\"\n      [style.display]=\"accordionItem.expanded ? '' : 'none'\"\n      [attr.id]=\"'accordion-body-' + index\"\n      [attr.aria-labelledby]=\"'accordion-header-' + index\">\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis\n      excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis\n      veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?\n    </div>\n  </cdk-accordion-item>\n</cdk-accordion>\n\n", styles: [".example-accordion {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item + .example-accordion-item {\n  border-top: none;\n}\n\n.example-accordion-item-header {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header,\n.example-accordion-item-body {\n  padding: 16px;\n}\n\n.example-accordion-item-header:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.CdkAccordion, selector: "cdk-accordion, [cdkAccordion]", inputs: ["multi"], exportAs: ["cdkAccordion"] }, { kind: "directive", type: i2.CdkAccordionItem, selector: "cdk-accordion-item, [cdkAccordionItem]", inputs: ["expanded", "disabled"], outputs: ["closed", "opened", "destroyed", "expandedChange"], exportAs: ["cdkAccordionItem"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkAccordionOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-accordion-overview-example', template: "<cdk-accordion class=\"example-accordion\">\n  <cdk-accordion-item\n    *ngFor=\"let item of items; let index = index;\"\n    #accordionItem=\"cdkAccordionItem\"\n    class=\"example-accordion-item\"\n    role=\"button\"\n    tabindex=\"0\"\n    [attr.id]=\"'accordion-header-' + index\"\n    [attr.aria-expanded]=\"accordionItem.expanded\"\n    [attr.aria-controls]=\"'accordion-body-' + index\">\n    <div class=\"example-accordion-item-header\" (click)=\"accordionItem.toggle()\">\n      {{ item }}\n      <span class=\"example-accordion-item-description\">\n        Click to {{ accordionItem.expanded ? 'close' : 'open' }}\n      </span>\n    </div>\n    <div\n      class=\"example-accordion-item-body\"\n      role=\"region\"\n      [style.display]=\"accordionItem.expanded ? '' : 'none'\"\n      [attr.id]=\"'accordion-body-' + index\"\n      [attr.aria-labelledby]=\"'accordion-header-' + index\">\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis\n      excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis\n      veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?\n    </div>\n  </cdk-accordion-item>\n</cdk-accordion>\n\n", styles: [".example-accordion {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item + .example-accordion-item {\n  border-top: none;\n}\n\n.example-accordion-item-header {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header,\n.example-accordion-item-body {\n  padding: 16px;\n}\n\n.example-accordion-item-header:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n"] }]
        }] });

const EXAMPLES = [CdkAccordionOverviewExample];
class CdkAccordionExamplesModule {
}
CdkAccordionExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkAccordionExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkAccordionExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: CdkAccordionExamplesModule, declarations: [CdkAccordionOverviewExample], imports: [CommonModule, CdkAccordionModule], exports: [CdkAccordionOverviewExample] });
CdkAccordionExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkAccordionExamplesModule, imports: [CommonModule, CdkAccordionModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkAccordionExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CdkAccordionModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkAccordionExamplesModule, CdkAccordionOverviewExample };
//# sourceMappingURL=accordion.mjs.map
