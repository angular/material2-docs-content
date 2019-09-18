import { FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY, ScrollingModule } from '@angular/cdk/scrolling';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, NgModule } from '@angular/core';
import { __extends, __spread } from 'tslib';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Subscription } from 'rxjs';

/** @title Virtual scroll context variables */
var CdkVirtualScrollContextExample = /** @class */ (function () {
    function CdkVirtualScrollContextExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollContextExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-virtual-scroll-context-example',
                    template: "<cdk-virtual-scroll-viewport [itemSize]=\"18 * 7\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items;\n                       let index = index;\n                       let count = count;\n                       let first = first;\n                       let last = last;\n                       let even = even;\n                       let odd = odd;\" [class.example-alternate]=\"odd\">\n    <div class=\"example-item-detail\">Item: {{item}}</div>\n    <div class=\"example-item-detail\">Index: {{index}}</div>\n    <div class=\"example-item-detail\">Count: {{count}}</div>\n    <div class=\"example-item-detail\">First: {{first ? 'Yes' : 'No'}}</div>\n    <div class=\"example-item-detail\">Last: {{last ? 'Yes' : 'No'}}</div>\n    <div class=\"example-item-detail\">Even: {{even ? 'Yes' : 'No'}}</div>\n    <div class=\"example-item-detail\">Odd: {{odd ? 'Yes' : 'No'}}</div>\n  </div>\n</cdk-virtual-scroll-viewport>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item-detail {\n  height: 18px;\n}\n\n.example-alternate {\n  background: rgba(127, 127, 127, 0.3);\n}\n"]
                }] }
    ];
    return CdkVirtualScrollContextExample;
}());

var CustomVirtualScrollStrategy = /** @class */ (function (_super) {
    __extends(CustomVirtualScrollStrategy, _super);
    function CustomVirtualScrollStrategy() {
        return _super.call(this, 50, 250, 500) || this;
    }
    return CustomVirtualScrollStrategy;
}(FixedSizeVirtualScrollStrategy));
/** @title Virtual scroll with a custom strategy */
var CdkVirtualScrollCustomStrategyExample = /** @class */ (function () {
    function CdkVirtualScrollCustomStrategyExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollCustomStrategyExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-virtual-scroll-custom-strategy-example',
                    template: "<cdk-virtual-scroll-viewport class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }],
                    styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
                }] }
    ];
    return CdkVirtualScrollCustomStrategyExample;
}());

/** @title Virtual scroll with a custom data source */
var CdkVirtualScrollDataSourceExample = /** @class */ (function () {
    function CdkVirtualScrollDataSourceExample() {
        this.ds = new MyDataSource();
    }
    CdkVirtualScrollDataSourceExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-virtual-scroll-data-source-example',
                    template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of ds\" class=\"example-item\">{{item || 'Loading...'}}</div>\n</cdk-virtual-scroll-viewport>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
                }] }
    ];
    return CdkVirtualScrollDataSourceExample;
}());
var MyDataSource = /** @class */ (function (_super) {
    __extends(MyDataSource, _super);
    function MyDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._length = 100000;
        _this._pageSize = 100;
        _this._cachedData = Array.from({ length: _this._length });
        _this._fetchedPages = new Set();
        _this._dataStream = new BehaviorSubject(_this._cachedData);
        _this._subscription = new Subscription();
        return _this;
    }
    MyDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this._subscription.add(collectionViewer.viewChange.subscribe(function (range) {
            var startPage = _this._getPageForIndex(range.start);
            var endPage = _this._getPageForIndex(range.end - 1);
            for (var i = startPage; i <= endPage; i++) {
                _this._fetchPage(i);
            }
        }));
        return this._dataStream;
    };
    MyDataSource.prototype.disconnect = function () {
        this._subscription.unsubscribe();
    };
    MyDataSource.prototype._getPageForIndex = function (index) {
        return Math.floor(index / this._pageSize);
    };
    MyDataSource.prototype._fetchPage = function (page) {
        var _this = this;
        if (this._fetchedPages.has(page)) {
            return;
        }
        this._fetchedPages.add(page);
        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(function () {
            var _a;
            (_a = _this._cachedData).splice.apply(_a, __spread([page * _this._pageSize, _this._pageSize], Array.from({ length: _this._pageSize })
                .map(function (_, i) { return "Item #" + (page * _this._pageSize + i); })));
            _this._dataStream.next(_this._cachedData);
        }, Math.random() * 1000 + 200);
    };
    return MyDataSource;
}(DataSource));

/** @title Virtual scrolling `<dl>` */
var CdkVirtualScrollDlExample = /** @class */ (function () {
    function CdkVirtualScrollDlExample() {
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
    CdkVirtualScrollDlExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-virtual-scroll-dl-example',
                    template: "<cdk-virtual-scroll-viewport class=\"example-viewport\" itemSize=\"60\">\n  <dl class=\"example-dl\">\n    <ng-container *cdkVirtualFor=\"let state of states\">\n      <dt class=\"example-dt\">{{state.name}}</dt>\n      <dd class=\"example-dd\">{{state.capital}}</dd>\n    </ng-container>\n  </dl>\n</cdk-virtual-scroll-viewport>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd {\n  height: 30px;\n}\n"]
                }] }
    ];
    return CdkVirtualScrollDlExample;
}());

/** @title Fixed size virtual scroll with custom buffer parameters */
var CdkVirtualScrollFixedBufferExample = /** @class */ (function () {
    function CdkVirtualScrollFixedBufferExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollFixedBufferExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-virtual-scroll-fixed-buffer-example',
                    template: "<cdk-virtual-scroll-viewport itemSize=\"50\" minBufferPx=\"200\" maxBufferPx=\"400\"\n                             class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
                }] }
    ];
    return CdkVirtualScrollFixedBufferExample;
}());

/** @title Horizontal virtual scroll */
var CdkVirtualScrollHorizontalExample = /** @class */ (function () {
    function CdkVirtualScrollHorizontalExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollHorizontalExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-virtual-scroll-horizontal-example',
                    template: "<div class=\"cdk-virtual-scroll-data-source-example\">\n  <cdk-virtual-scroll-viewport orientation=\"horizontal\" itemSize=\"50\" class=\"example-viewport\">\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n  </cdk-virtual-scroll-viewport>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".cdk-virtual-scroll-data-source-example .example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n}\n\n.cdk-virtual-scroll-data-source-example .example-item {\n  width: 50px;\n  height: 100%;\n  writing-mode: vertical-lr;\n}\n"]
                }] }
    ];
    return CdkVirtualScrollHorizontalExample;
}());

/** @title Basic virtual scroll */
var CdkVirtualScrollOverviewExample = /** @class */ (function () {
    function CdkVirtualScrollOverviewExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-virtual-scroll-overview-example',
                    template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
                }] }
    ];
    return CdkVirtualScrollOverviewExample;
}());

/** @title Virtual scroll with no template caching */
var CdkVirtualScrollTemplateCacheExample = /** @class */ (function () {
    function CdkVirtualScrollTemplateCacheExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollTemplateCacheExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-virtual-scroll-template-cache-example',
                    template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items; templateCacheSize: 0\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
                }] }
    ];
    return CdkVirtualScrollTemplateCacheExample;
}());

var EXAMPLES = [
    CdkVirtualScrollContextExample,
    CdkVirtualScrollCustomStrategyExample,
    CdkVirtualScrollDataSourceExample,
    CdkVirtualScrollDlExample,
    CdkVirtualScrollFixedBufferExample,
    CdkVirtualScrollHorizontalExample,
    CdkVirtualScrollOverviewExample,
    CdkVirtualScrollTemplateCacheExample,
];
var CdkScrollingExamplesModule = /** @class */ (function () {
    function CdkScrollingExamplesModule() {
    }
    CdkScrollingExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ScrollingModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return CdkScrollingExamplesModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CustomVirtualScrollStrategy as ɵangular_material_src_material_examples_cdk_scrolling_scrolling_a, CdkVirtualScrollContextExample, CdkVirtualScrollCustomStrategyExample, CdkVirtualScrollDataSourceExample, CdkVirtualScrollDlExample, CdkVirtualScrollFixedBufferExample, CdkVirtualScrollHorizontalExample, CdkVirtualScrollOverviewExample, CdkVirtualScrollTemplateCacheExample, CdkScrollingExamplesModule };
//# sourceMappingURL=scrolling.js.map
