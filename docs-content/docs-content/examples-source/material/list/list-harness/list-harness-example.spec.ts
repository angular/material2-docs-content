import {HarnessLoader, parallel} from '@angular/cdk/testing';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatListHarness} from '@angular/material/list/testing';
import {ListHarnessExample} from './list-harness-example';

describe('ListHarnessExample', () => {
  let fixture: ComponentFixture<ListHarnessExample>;
  let loader: HarnessLoader;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHarnessExample);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should get all items', async () => {
    const list = await loader.getHarness(MatListHarness);
    const items = await list.getItems();
    expect(await parallel(() => items.map(i => i.getFullText()))).toEqual([
      'Item 1',
      'Item 2',
      'Item 3',
    ]);
  });

  it('should get all items matching text', async () => {
    const list = await loader.getHarness(MatListHarness);
    const items = await list.getItems({text: /[13]/});
    expect(await parallel(() => items.map(i => i.getFullText()))).toEqual(['Item 1', 'Item 3']);
  });

  it('should get items by subheader', async () => {
    const list = await loader.getHarness(MatListHarness);
    const sections = await list.getItemsGroupedBySubheader();
    expect(sections.length).toBe(3);
    expect(sections[0].heading).toBeUndefined();
    expect(await parallel(() => sections[0].items.map(i => i.getFullText()))).toEqual(['Item 1']);
    expect(sections[1].heading).toBe('Section 1');
    expect(await parallel(() => sections[1].items.map(i => i.getFullText()))).toEqual([
      'Item 2',
      'Item 3',
    ]);
    expect(sections[2].heading).toBe('Section 2');
    expect(sections[2].items.length).toEqual(0);
  });

  it('should get the different sections of an item', async () => {
    const list = await loader.getHarness(MatListHarness);
    const firstItem = (await list.getItems())[0];
    expect(await firstItem.getTitle()).toBe('Item');
    expect(await firstItem.getSecondaryText()).toBe('1');
    expect(await firstItem.hasAvatar()).toBe(true);
    expect(await firstItem.hasIcon()).toBe(true);
  });
});
