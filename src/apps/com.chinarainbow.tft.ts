import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinarainbow.tft',
  name: '天府通',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: [
        {
          key: 0,
          matches: 'Image[text=""] < @View +4 [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/import/13269854',
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13468554',
        },
      ],
    },
  ],
});
