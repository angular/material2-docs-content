import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatButtonHarness} from '@angular/material/button/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {ButtonHarnessExample} from './button-harness-example';

describe('ButtonHarnessExample', () => {
  let fixture: ComponentFixture<ButtonHarnessExample>;
  let loader: HarnessLoader;

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHarnessExample);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should load all button harnesses', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness);
    expect(buttons.length).toBe(1);
  });

  it('should load button with exact text', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({text: 'Basic button'}));
    expect(buttons.length).toBe(1);
    expect(await buttons[0].getText()).toBe('Basic button');
  });

  it('should click a button', async () => {
    const button = await loader.getHarness(MatButtonHarness.with({text: 'Basic button'}));
    expect(fixture.componentInstance.clicked).toBe(false);
    await button.click();
    expect(fixture.componentInstance.clicked).toBe(true);
  });
});
