import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'youqu.android.todesk',
  name: 'ToDesk',
  groups: [
    {
      key: 1,
      name: '局部广告-广告卡片',
      desc: '设备列表和连接界面中的广告卡片',
      activityIds: [
        'youqu.android.todesk.activity.WelcomeActivity',
        'youqu.android.todesk.activity.MainActivity', //新增activityIds
      ],
      fastQuery: true,
      rules:
        '[id="youqu.android.todesk:id/sivDeviceBanner"] + [id="youqu.android.todesk:id/llClose"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13228546',
        'https://i.gkd.li/import/13256552', //新增快照
        'https://i.gkd.li/import/13296380', //新增快照
      ],
    },
  ],
});
