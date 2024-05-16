import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatChipHarness, MatChipListboxHarness} from '@angular/material/chips/testing';
import {HarnessLoader, parallel} from '@angular/cdk/testing';
import {ChipsHarnessExample} from './chips-harness-example';

describe('ChipsHarnessExample', () => {
  let fixture: ComponentFixture<ChipsHarnessExample>;
  let loader: HarnessLoader;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsHarnessExample);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should get whether a chip list is disabled', async () => {
    const chipList = await loader.getHarness(MatChipListboxHarness);

    expect(await chipList.isDisabled()).toBeFalse();

    fixture.componentInstance.isDisabled.set(true);
    fixture.detectChanges();

    expect(await chipList.isDisabled()).toBeTrue();
  });

  it('should get the orientation of a chip list', async () => {
    const chipList = await loader.getHarness(MatChipListboxHarness);

    expect(await chipList.getOrientation()).toEqual('horizontal');
  });

  it('should be able to get the selected chips in a list', async () => {
    const chipList = await loader.getHarness(MatChipListboxHarness);
    const chips = await chipList.getChips();

    expect((await chipList.getChips({selected: true})).length).toBe(0);
    await chips[1].select();

    const selectedChips = await chipList.getChips({selected: true});
    expect(await parallel(() => selectedChips.map(chip => chip.getText()))).toEqual(['Chip 2']);
  });

  it('should be able to trigger chip removal', async () => {
    const chip = await loader.getHarness(MatChipHarness);
    expect(fixture.componentInstance.remove).not.toHaveBeenCalled();
    await chip.remove();
    expect(fixture.componentInstance.remove).toHaveBeenCalled();
  });
});
