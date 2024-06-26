import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.appmarket',
  name: '荣耀应用市场',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击 跳过',
      quickFind: true,
      activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
      actionMaximum: 1,
      matchTime: 10000,
      rules: [
        {
          matches: '[id="com.hihonor.appmarket:id/tv_operation_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/15087199',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-广告提示',
      quickFind: true,

      activityIds: [
        'com.hihonor.android.launcher.unihome.UniHomeLauncher',
        'com.hihonor.appmarket.module.main.MainActivity',
      ],
      rules: '[id="com.hihonor.appmarket:id/iv_dialog_operation_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13063815',
        'https://i.gkd.li/import/13168440',
      ],
    },
    {
      key: 2,
      name: '局部广告-悬浮窗小广告',
      quickFind: true,
      activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
      rules: '[id="com.hihonor.appmarket:id/iv_floating_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13063928',
    },
    {
      key: 3,
      name: '全屏广告-推送通知',
      quickFind: true,
      activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
      rules:
        'TextView[text="接收通知"] < LinearLayout < LinearLayout +n [id="android:id/buttonPanel"] Button[text="否"]',
      snapshotUrls: 'https://i.gkd.li/import/13073319',
    },
  ],
});
