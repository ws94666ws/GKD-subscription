import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youdao.dict',
  name: '网易有道词典',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.youdao.dict.activity.MainActivity',
          fastQuery: true,
          matches: '[text="广告"] - [vid="close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12668574',
            'https://i.gkd.li/import/13800055',
          ],
        },
        {
          key: 1,
          activityIds: 'com.youdao.dict.activity.MainActivity',
          fastQuery: true,
          matches: '[vid="close_pop"][text="收起广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12668583',
            'https://i.gkd.li/import/13800056',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          name: '首页-弹窗广告',
          activityIds: [
            'com.youdao.dict.activity.MainActivity',
            'com.youdao.dict.activity.DictSplashActivity',
          ],
          fastQuery: true,
          matches: '@ImageView[id="com.youdao.dict:id/iv_close_bt"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12893419',
            'https://i.gkd.li/import/13263801',
          ],
        },
        {
          key: 1,
          name: '学习页面-弹窗广告',
          activityIds: [
            'com.youdao.dict.edu.main.MainPopDialog',
            'com.youdao.dict.activity.MainActivity',
          ],
          fastQuery: true,
          matches: '@ImageView[id="com.youdao.dict:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12893450',
        },
        {
          key: 2,
          name: '抽奖机会-弹窗广告',
          activityIds: 'com.youdao.dict.activity.DictSplashActivity',
          fastQuery: true,
          matches: '[vid="skip_bottom_view"]',
          snapshotUrls: 'https://i.gkd.li/import/13931202',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-VIP-弹窗',
      activityIds: 'com.youdao.dict.vip.activity.RecallSevenDayVipActivity',
      rules: '@ImageView[id="com.youdao.dict:id/iv_close"]',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/import/13263706',
    },
    {
      key: 5,
      name: '全屏广告-评价弹窗',
      activityIds: 'com.youdao.dict.activity.MainActivity',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      matchDelay: 10000,
      rules: '[id="com.youdao.dict:id/btn_never"][text*="不再提醒"]',
      snapshotUrls: 'https://i.gkd.li/import/13540941',
    },
    {
      key: 6,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.youdao.dict:id/tv_version"] + [id="com.youdao.dict:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13627912',
    },
  ],
});
