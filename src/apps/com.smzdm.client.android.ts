import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smzdm.client.android',
  name: '什么值得买',
  groups: [
    {
      key: 1,
      fastQuery: true,
      name: '全屏广告-APP内弹窗广告',
      activityIds: 'com.smzdm.client.android.app.HomeActivity',
      rules: '[id="com.smzdm.client.android:id/dialog_home_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12695751',
    },
    {
      key: 2,
      name: '更新提示',
      activityIds: 'com.smzdm.client.android.app.HomeActivity',
      fastQuery: true,
      actionMaximum: 1,
      rules:
        '[id="com.smzdm.client.android:id/tv_version"] +2 [id="com.smzdm.client.android:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13198016',
    },
    {
      key: 10,
      name: '全屏广告-请求读取剪贴板权限弹窗',
      fastQuery: true,
      activityIds: 'com.smzdm.client.android.app.HomeActivity',
      rules: '@[text="暂不允许"] + [text="允许"]',
      snapshotUrls: 'https://i.gkd.li/import/13198020',
    },
    {
      key: 3,
      name: '全屏广告-通知弹窗',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: [
        'com.smzdm.client.android.module.community.module.bask.BaskDetailActivity',
        'com.smzdm.client.android.module.haojia.detail.HaojiaDetailActivity',
      ],
      rules: 'ImageView[id="com.smzdm.client.android:id/ib_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13438810', //com.smzdm.client.android.module.community.module.bask.BaskDetailActivity
        'https://i.gkd.li/import/13626746', //com.smzdm.client.android.module.haojia.detail.HaojiaDetailActivity
      ],
    },
  ],
});
