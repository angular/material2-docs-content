import { CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY, ScrollingModule } from '@angular/cdk/scrolling';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵclassProp, ɵɵadvance, ɵɵtextInterpolate1, Component, ChangeDetectionStrategy, ɵɵdefineComponent, ɵɵtemplate, ɵɵproperty, ɵsetClassMetadata, ɵɵtextInterpolate, ɵɵProvidersFeature, ɵɵelementContainerStart, ɵɵelementContainerEnd, ViewEncapsulation, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Subscription } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkVirtualScrollContextExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 2);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 2);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 2);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 2);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 2);
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 2);
    ɵɵtext(12);
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 2);
    ɵɵtext(14);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const count_r3 = ctx.count;
    const first_r4 = ctx.first;
    const last_r5 = ctx.last;
    const even_r6 = ctx.even;
    const odd_r7 = ctx.odd;
    ɵɵclassProp("example-alternate", odd_r7);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Item: ", item_r1, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Index: ", index_r2, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Count: ", count_r3, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("First: ", first_r4 ? "Yes" : "No", "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Last: ", last_r5 ? "Yes" : "No", "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Even: ", even_r6 ? "Yes" : "No", "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Odd: ", odd_r7 ? "Yes" : "No", "");
} }
/**
 * \@title Virtual scroll context variables
 */
class CdkVirtualScrollContextExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollContextExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-context-example',
                styleUrls: ['cdk-virtual-scroll-context-example.css'],
                templateUrl: 'cdk-virtual-scroll-context-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollContextExample.ɵfac = function CdkVirtualScrollContextExample_Factory(t) { return new (t || CdkVirtualScrollContextExample)(); };
/** @nocollapse */ CdkVirtualScrollContextExample.ɵcmp = ɵɵdefineComponent({ type: CdkVirtualScrollContextExample, selectors: [["cdk-virtual-scroll-context-example"]], decls: 2, vars: 2, consts: [[1, "example-viewport", 3, "itemSize"], [3, "example-alternate", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item-detail"]], template: function CdkVirtualScrollContextExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        ɵɵtemplate(1, CdkVirtualScrollContextExample_div_1_Template, 15, 8, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("itemSize", 18 * 7);
        ɵɵadvance(1);
        ɵɵproperty("cdkVirtualForOf", ctx.items);
    } }, directives: [CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item-detail[_ngcontent-%COMP%] {\n  height: 18px;\n}\n\n.example-alternate[_ngcontent-%COMP%] {\n  background: rgba(127, 127, 127, 0.3);\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkVirtualScrollContextExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-context-example',
                styleUrls: ['cdk-virtual-scroll-context-example.css'],
                templateUrl: 'cdk-virtual-scroll-context-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollContextExample.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkVirtualScrollCustomStrategyExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r9);
} }
class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
    constructor() {
        super(50, 250, 500);
    }
}
/**
 * \@title Virtual scroll with a custom strategy
 */
class CdkVirtualScrollCustomStrategyExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollCustomStrategyExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-custom-strategy-example',
                styleUrls: ['cdk-virtual-scroll-custom-strategy-example.css'],
                templateUrl: 'cdk-virtual-scroll-custom-strategy-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }]
            },] },
];
/** @nocollapse */ CdkVirtualScrollCustomStrategyExample.ɵfac = function CdkVirtualScrollCustomStrategyExample_Factory(t) { return new (t || CdkVirtualScrollCustomStrategyExample)(); };
/** @nocollapse */ CdkVirtualScrollCustomStrategyExample.ɵcmp = ɵɵdefineComponent({ type: CdkVirtualScrollCustomStrategyExample, selectors: [["cdk-virtual-scroll-custom-strategy-example"]], features: [ɵɵProvidersFeature([{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }])], decls: 2, vars: 1, consts: [[1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollCustomStrategyExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        ɵɵtemplate(1, CdkVirtualScrollCustomStrategyExample_div_1_Template, 2, 1, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("cdkVirtualForOf", ctx.items);
    } }, directives: [CdkVirtualScrollViewport, CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkVirtualScrollCustomStrategyExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-custom-strategy-example',
                styleUrls: ['cdk-virtual-scroll-custom-strategy-example.css'],
                templateUrl: 'cdk-virtual-scroll-custom-strategy-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }]
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollCustomStrategyExample.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkVirtualScrollDataSourceExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r11 || "Loading...");
} }
/**
 * \@title Virtual scroll with a custom data source
 */
class CdkVirtualScrollDataSourceExample {
    constructor() {
        this.ds = new MyDataSource();
    }
}
CdkVirtualScrollDataSourceExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-data-source-example',
                styleUrls: ['cdk-virtual-scroll-data-source-example.css'],
                templateUrl: 'cdk-virtual-scroll-data-source-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollDataSourceExample.ɵfac = function CdkVirtualScrollDataSourceExample_Factory(t) { return new (t || CdkVirtualScrollDataSourceExample)(); };
/** @nocollapse */ CdkVirtualScrollDataSourceExample.ɵcmp = ɵɵdefineComponent({ type: CdkVirtualScrollDataSourceExample, selectors: [["cdk-virtual-scroll-data-source-example"]], decls: 2, vars: 1, consts: [["itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollDataSourceExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        ɵɵtemplate(1, CdkVirtualScrollDataSourceExample_div_1_Template, 2, 1, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("cdkVirtualForOf", ctx.ds);
    } }, directives: [CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkVirtualScrollDataSourceExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-data-source-example',
                styleUrls: ['cdk-virtual-scroll-data-source-example.css'],
                templateUrl: 'cdk-virtual-scroll-data-source-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollDataSourceExample.prototype.ds;
}
class MyDataSource extends DataSource {
    constructor() {
        super(...arguments);
        this._length = 100000;
        this._pageSize = 100;
        this._cachedData = Array.from({ length: this._length });
        this._fetchedPages = new Set();
        this._dataStream = new BehaviorSubject(this._cachedData);
        this._subscription = new Subscription();
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        this._subscription.add(collectionViewer.viewChange.subscribe((/**
         * @param {?} range
         * @return {?}
         */
        range => {
            /** @type {?} */
            const startPage = this._getPageForIndex(range.start);
            /** @type {?} */
            const endPage = this._getPageForIndex(range.end - 1);
            for (let i = startPage; i <= endPage; i++) {
                this._fetchPage(i);
            }
        })));
        return this._dataStream;
    }
    /**
     * @return {?}
     */
    disconnect() {
        this._subscription.unsubscribe();
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    _getPageForIndex(index) {
        return Math.floor(index / this._pageSize);
    }
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    _fetchPage(page) {
        if (this._fetchedPages.has(page)) {
            return;
        }
        this._fetchedPages.add(page);
        // Use `setTimeout` to simulate fetching data from server.
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._cachedData.splice(page * this._pageSize, this._pageSize, ...Array.from({ length: this._pageSize })
                .map((/**
             * @param {?} _
             * @param {?} i
             * @return {?}
             */
            (_, i) => `Item #${page * this._pageSize + i}`)));
            this._dataStream.next(this._cachedData);
        }), Math.random() * 1000 + 200);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype._length;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype._pageSize;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype._cachedData;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype._fetchedPages;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype._dataStream;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype._subscription;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkVirtualScrollDlExample_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "dt", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "dd", 4);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const state_r13 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(state_r13.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(state_r13.capital);
} }
/**
 * \@title Virtual scrolling `<dl>`
 */
class CdkVirtualScrollDlExample {
    constructor() {
        this.states = [
            { name: 'Alabama', capital: 'Montgomery' },
            { name: 'Alaska', capital: 'Juneau' },
            { name: 'Arizona', capital: 'Phoenix' },
            { name: 'Arkansas', capital: 'Little Rock' },
            { name: 'California', capital: 'Sacramento' },
            { name: 'Colorado', capital: 'Denver' },
            { name: 'Connecticut', capital: 'Hartford' },
            { name: 'Delaware', capital: 'Dover' },
            { name: 'Florida', capital: 'Tallahassee' },
            { name: 'Georgia', capital: 'Atlanta' },
            { name: 'Hawaii', capital: 'Honolulu' },
            { name: 'Idaho', capital: 'Boise' },
            { name: 'Illinois', capital: 'Springfield' },
            { name: 'Indiana', capital: 'Indianapolis' },
            { name: 'Iowa', capital: 'Des Moines' },
            { name: 'Kansas', capital: 'Topeka' },
            { name: 'Kentucky', capital: 'Frankfort' },
            { name: 'Louisiana', capital: 'Baton Rouge' },
            { name: 'Maine', capital: 'Augusta' },
            { name: 'Maryland', capital: 'Annapolis' },
            { name: 'Massachusetts', capital: 'Boston' },
            { name: 'Michigan', capital: 'Lansing' },
            { name: 'Minnesota', capital: 'St. Paul' },
            { name: 'Mississippi', capital: 'Jackson' },
            { name: 'Missouri', capital: 'Jefferson City' },
            { name: 'Montana', capital: 'Helena' },
            { name: 'Nebraska', capital: 'Lincoln' },
            { name: 'Nevada', capital: 'Carson City' },
            { name: 'New Hampshire', capital: 'Concord' },
            { name: 'New Jersey', capital: 'Trenton' },
            { name: 'New Mexico', capital: 'Santa Fe' },
            { name: 'New York', capital: 'Albany' },
            { name: 'North Carolina', capital: 'Raleigh' },
            { name: 'North Dakota', capital: 'Bismarck' },
            { name: 'Ohio', capital: 'Columbus' },
            { name: 'Oklahoma', capital: 'Oklahoma City' },
            { name: 'Oregon', capital: 'Salem' },
            { name: 'Pennsylvania', capital: 'Harrisburg' },
            { name: 'Rhode Island', capital: 'Providence' },
            { name: 'South Carolina', capital: 'Columbia' },
            { name: 'South Dakota', capital: 'Pierre' },
            { name: 'Tennessee', capital: 'Nashville' },
            { name: 'Texas', capital: 'Austin' },
            { name: 'Utah', capital: 'Salt Lake City' },
            { name: 'Vermont', capital: 'Montpelier' },
            { name: 'Virginia', capital: 'Richmond' },
            { name: 'Washington', capital: 'Olympia' },
            { name: 'West Virginia', capital: 'Charleston' },
            { name: 'Wisconsin', capital: 'Madison' },
            { name: 'Wyoming', capital: 'Cheyenne' },
        ];
    }
}
CdkVirtualScrollDlExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-dl-example',
                styleUrls: ['cdk-virtual-scroll-dl-example.css'],
                templateUrl: 'cdk-virtual-scroll-dl-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollDlExample.ɵfac = function CdkVirtualScrollDlExample_Factory(t) { return new (t || CdkVirtualScrollDlExample)(); };
/** @nocollapse */ CdkVirtualScrollDlExample.ɵcmp = ɵɵdefineComponent({ type: CdkVirtualScrollDlExample, selectors: [["cdk-virtual-scroll-dl-example"]], decls: 3, vars: 1, consts: [["itemSize", "60", 1, "example-viewport"], [1, "example-dl"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-dt"], [1, "example-dd"]], template: function CdkVirtualScrollDlExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        ɵɵelementStart(1, "dl", 1);
        ɵɵtemplate(2, CdkVirtualScrollDlExample_ng_container_2_Template, 5, 2, "ng-container", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("cdkVirtualForOf", ctx.states);
    } }, directives: [CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt[_ngcontent-%COMP%] {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd[_ngcontent-%COMP%] {\n  height: 30px;\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkVirtualScrollDlExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-dl-example',
                styleUrls: ['cdk-virtual-scroll-dl-example.css'],
                templateUrl: 'cdk-virtual-scroll-dl-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollDlExample.prototype.states;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkVirtualScrollFixedBufferExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r15);
} }
/**
 * \@title Fixed size virtual scroll with custom buffer parameters
 */
class CdkVirtualScrollFixedBufferExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollFixedBufferExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-fixed-buffer-example',
                styleUrls: ['cdk-virtual-scroll-fixed-buffer-example.css'],
                templateUrl: 'cdk-virtual-scroll-fixed-buffer-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollFixedBufferExample.ɵfac = function CdkVirtualScrollFixedBufferExample_Factory(t) { return new (t || CdkVirtualScrollFixedBufferExample)(); };
/** @nocollapse */ CdkVirtualScrollFixedBufferExample.ɵcmp = ɵɵdefineComponent({ type: CdkVirtualScrollFixedBufferExample, selectors: [["cdk-virtual-scroll-fixed-buffer-example"]], decls: 2, vars: 1, consts: [["itemSize", "50", "minBufferPx", "200", "maxBufferPx", "400", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollFixedBufferExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        ɵɵtemplate(1, CdkVirtualScrollFixedBufferExample_div_1_Template, 2, 1, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("cdkVirtualForOf", ctx.items);
    } }, directives: [CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkVirtualScrollFixedBufferExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-fixed-buffer-example',
                styleUrls: ['cdk-virtual-scroll-fixed-buffer-example.css'],
                templateUrl: 'cdk-virtual-scroll-fixed-buffer-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollFixedBufferExample.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkVirtualScrollHorizontalExample_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r17);
} }
/**
 * \@title Horizontal virtual scroll
 */
class CdkVirtualScrollHorizontalExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollHorizontalExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-horizontal-example',
                styleUrls: ['cdk-virtual-scroll-horizontal-example.css'],
                templateUrl: 'cdk-virtual-scroll-horizontal-example.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollHorizontalExample.ɵfac = function CdkVirtualScrollHorizontalExample_Factory(t) { return new (t || CdkVirtualScrollHorizontalExample)(); };
/** @nocollapse */ CdkVirtualScrollHorizontalExample.ɵcmp = ɵɵdefineComponent({ type: CdkVirtualScrollHorizontalExample, selectors: [["cdk-virtual-scroll-horizontal-example"]], decls: 3, vars: 1, consts: [[1, "cdk-virtual-scroll-data-source-example"], ["orientation", "horizontal", "itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollHorizontalExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "cdk-virtual-scroll-viewport", 1);
        ɵɵtemplate(2, CdkVirtualScrollHorizontalExample_div_2_Template, 2, 1, "div", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("cdkVirtualForOf", ctx.items);
    } }, directives: [CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf], styles: [".cdk-virtual-scroll-data-source-example .example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n}\n\n.cdk-virtual-scroll-data-source-example .example-item {\n  width: 50px;\n  height: 100%;\n  writing-mode: vertical-lr;\n}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkVirtualScrollHorizontalExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-horizontal-example',
                styleUrls: ['cdk-virtual-scroll-horizontal-example.css'],
                templateUrl: 'cdk-virtual-scroll-horizontal-example.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollHorizontalExample.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkVirtualScrollOverviewExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r19);
} }
/**
 * \@title Basic virtual scroll
 */
class CdkVirtualScrollOverviewExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-overview-example',
                styleUrls: ['cdk-virtual-scroll-overview-example.css'],
                templateUrl: 'cdk-virtual-scroll-overview-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollOverviewExample.ɵfac = function CdkVirtualScrollOverviewExample_Factory(t) { return new (t || CdkVirtualScrollOverviewExample)(); };
/** @nocollapse */ CdkVirtualScrollOverviewExample.ɵcmp = ɵɵdefineComponent({ type: CdkVirtualScrollOverviewExample, selectors: [["cdk-virtual-scroll-overview-example"]], decls: 2, vars: 1, consts: [["itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        ɵɵtemplate(1, CdkVirtualScrollOverviewExample_div_1_Template, 2, 1, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("cdkVirtualForOf", ctx.items);
    } }, directives: [CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkVirtualScrollOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-overview-example',
                styleUrls: ['cdk-virtual-scroll-overview-example.css'],
                templateUrl: 'cdk-virtual-scroll-overview-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollOverviewExample.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkVirtualScrollTemplateCacheExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r21);
} }
/**
 * \@title Virtual scroll with no template caching
 */
class CdkVirtualScrollTemplateCacheExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollTemplateCacheExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-template-cache-example',
                styleUrls: ['cdk-virtual-scroll-template-cache-example.css'],
                templateUrl: 'cdk-virtual-scroll-template-cache-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollTemplateCacheExample.ɵfac = function CdkVirtualScrollTemplateCacheExample_Factory(t) { return new (t || CdkVirtualScrollTemplateCacheExample)(); };
/** @nocollapse */ CdkVirtualScrollTemplateCacheExample.ɵcmp = ɵɵdefineComponent({ type: CdkVirtualScrollTemplateCacheExample, selectors: [["cdk-virtual-scroll-template-cache-example"]], decls: 2, vars: 2, consts: [["itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTemplateCacheSize"], [1, "example-item"]], template: function CdkVirtualScrollTemplateCacheExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        ɵɵtemplate(1, CdkVirtualScrollTemplateCacheExample_div_1_Template, 2, 1, "div", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("cdkVirtualForOf", ctx.items)("cdkVirtualForTemplateCacheSize", 0);
    } }, directives: [CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkVirtualScrollTemplateCacheExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-template-cache-example',
                styleUrls: ['cdk-virtual-scroll-template-cache-example.css'],
                templateUrl: 'cdk-virtual-scroll-template-cache-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollTemplateCacheExample.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    CdkVirtualScrollContextExample,
    CdkVirtualScrollCustomStrategyExample,
    CdkVirtualScrollDataSourceExample,
    CdkVirtualScrollDlExample,
    CdkVirtualScrollFixedBufferExample,
    CdkVirtualScrollHorizontalExample,
    CdkVirtualScrollOverviewExample,
    CdkVirtualScrollTemplateCacheExample,
];
class CdkScrollingExamplesModule {
}
CdkScrollingExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ScrollingModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ CdkScrollingExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CdkScrollingExamplesModule });
/** @nocollapse */ CdkScrollingExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CdkScrollingExamplesModule_Factory(t) { return new (t || CdkScrollingExamplesModule)(); }, imports: [[
            ScrollingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkScrollingExamplesModule, { declarations: [CdkVirtualScrollContextExample,
        CdkVirtualScrollCustomStrategyExample,
        CdkVirtualScrollDataSourceExample,
        CdkVirtualScrollDlExample,
        CdkVirtualScrollFixedBufferExample,
        CdkVirtualScrollHorizontalExample,
        CdkVirtualScrollOverviewExample,
        CdkVirtualScrollTemplateCacheExample], imports: [ScrollingModule], exports: [CdkVirtualScrollContextExample,
        CdkVirtualScrollCustomStrategyExample,
        CdkVirtualScrollDataSourceExample,
        CdkVirtualScrollDlExample,
        CdkVirtualScrollFixedBufferExample,
        CdkVirtualScrollHorizontalExample,
        CdkVirtualScrollOverviewExample,
        CdkVirtualScrollTemplateCacheExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkScrollingExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    ScrollingModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { CdkScrollingExamplesModule, CdkVirtualScrollContextExample, CdkVirtualScrollCustomStrategyExample, CdkVirtualScrollDataSourceExample, CdkVirtualScrollDlExample, CdkVirtualScrollFixedBufferExample, CdkVirtualScrollHorizontalExample, CdkVirtualScrollOverviewExample, CdkVirtualScrollTemplateCacheExample };
//# sourceMappingURL=scrolling.js.map
