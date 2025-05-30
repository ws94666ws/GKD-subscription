import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.guodongbaohe.app',
  name: '果冻宝盒',
  groups: [
    // key0-5作为开屏、更新、消息提醒等通用规则
    {
      enable: false,
      key: 6,
      name: '全屏广告-广告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: 'com.guodongbaohe.app.activity.AdvertisementTwoActivity',
      rules: 'LinearLayout[id="com.guodongbaohe.app:id/close_dialog_lv"]',
      snapshotUrls: 'https://i.gkd.li/import/13577877',
    },
  ],
});
